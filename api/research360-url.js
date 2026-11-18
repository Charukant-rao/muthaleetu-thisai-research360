// Research 360 embed: returns a fresh iframe address for one visit.
// Runs on the server only (a Vercel function at /api/research360-url; dev-server.js runs it locally).
// Needs WYLTH_PARTNER_ID and WYLTH_PARTNER_SECRET in the environment; they never reach the browser.
// Flow (Wylth partner guide, steps 1 to 3): a 24 h access token, cached here, then a one-time
// code per visit, returned as https://crmv2.wylth.com/embed/sso/?t=<code>.

const API = process.env.WYLTH_API_BASE || "https://wylthapi.wylth.com";
const UI = process.env.WYLTH_UI_BASE || "https://crmv2.wylth.com";
const TARGET = "/embed/research-360/";

// Pages allowed to ask for a code, comma separated, e.g. "https://www.muthaleetuthisai.com,https://muthaleetuthisai.com".
// Empty allows any origin (local development only).
const ALLOWED = (process.env.R360_ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);

// Wylth allows 60 codes a minute for the whole account, so one visitor may not use them all.
const PER_IP_PER_MIN = Number(process.env.R360_PER_IP_PER_MIN) || 6;

let token = null;
let tokenExpiresOn = 0;
const hits = new Map(); // ip -> request times in the last minute (per warm instance)

// Wylth replies {status, message, data}, camelCase or PascalCase.
const pick = (o, n) => o && (o[n] ?? o[n[0].toUpperCase() + n.slice(1)]);

async function post(path, body, bearer) {
  const headers = { "Content-Type": "application/json" };
  if (bearer) headers.Authorization = "Bearer " + bearer;
  const res = await fetch(API + path, { method: "POST", headers, body: JSON.stringify(body) });
  const json = await res.json().catch(() => null);
  if (!res.ok || pick(json, "status") !== 0) {
    const err = new Error(pick(json, "message") || "HTTP " + res.status);
    err.status = res.status;
    err.retryAfter = res.headers.get("retry-after");
    throw err;
  }
  return pick(json, "data");
}

async function getToken() {
  // Reuse the 24 h token until 5 minutes before it expires.
  if (token && Date.now() < tokenExpiresOn - 5 * 60 * 1000) return token;
  const d = await post("/api/PartnerApiAuth/GenerateToken", {
    partnerAccountId: Number(process.env.WYLTH_PARTNER_ID),
    secret: process.env.WYLTH_PARTNER_SECRET
  });
  token = pick(d, "accessToken");
  tokenExpiresOn = Date.parse(pick(d, "expiresOn")) || Date.now() + (pick(d, "expiresIn") || 86400) * 1000;
  return token;
}

async function getEmbedUrl() {
  let d;
  try {
    d = await post("/api/Auth/GenerateSSOToken", { targetPath: TARGET }, await getToken());
  } catch (e) {
    if (e.status !== 401) throw e;
    token = null; // token ended early: get a new one and retry once
    d = await post("/api/Auth/GenerateSSOToken", { targetPath: TARGET }, await getToken());
  }
  return UI + "/embed/sso/?t=" + encodeURIComponent(pick(d, "ssoToken"));
}

function tooMany(ip) {
  const now = Date.now(), list = (hits.get(ip) || []).filter(t => now - t < 60000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > PER_IP_PER_MIN;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ error: "Use GET." });
  if (!process.env.WYLTH_PARTNER_ID || !process.env.WYLTH_PARTNER_SECRET) {
    return res.status(503).json({ error: "Research 360 is not configured on this server." });
  }
  const origin = req.headers.origin || (req.headers.referer || "").replace(/^(https?:\/\/[^/]+).*$/, "$1");
  if (ALLOWED.length && !ALLOWED.includes(origin)) return res.status(403).json({ error: "Not allowed from this site." });
  const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").split(",")[0].trim();
  if (tooMany(ip)) return res.status(429).json({ error: "Too many requests. Please wait a minute." });
  try {
    return res.status(200).json({ src: await getEmbedUrl() });
  } catch (e) {
    // Logs the reason and status only: never the secret, the token or the code.
    console.error("[research360] " + (e.status || "") + " " + e.message);
    if (e.status === 429) {
      if (e.retryAfter) res.setHeader("Retry-After", e.retryAfter);
      return res.status(429).json({ error: "Research 360 is busy. Please try again shortly." });
    }
    return res.status(502).json({ error: "Research 360 is unavailable right now." });
  }
};
