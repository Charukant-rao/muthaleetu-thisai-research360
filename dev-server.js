// Local development server: serves the site and runs the functions in api/ like Vercel does.
// Run:  node dev-server.js   then open http://localhost:5173
// Credentials for api/research360-url.js come from the environment or from .env.local
// (git-ignored): WYLTH_PARTNER_ID=...  WYLTH_PARTNER_SECRET=...
// Node 18+, no packages.

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 5173;

// .env.local: KEY=value lines; values already in the environment win.
const envFile = path.join(ROOT, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2");
  }
}

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".webmanifest": "application/manifest+json", ".png": "image/png", ".jpg": "image/jpeg",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".pdf": "application/pdf", ".md": "text/plain; charset=utf-8"
};

// The small part of Vercel's response helpers that api/ functions use.
function vercelRes(res) {
  res.status = code => { res.statusCode = code; return res };
  res.json = obj => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(obj)) };
  return res;
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const api = url.pathname.match(/^\/api\/([a-z0-9-]+)$/);
  if (api) {
    const file = path.join(ROOT, "api", api[1] + ".js");
    if (!fs.existsSync(file)) return res.writeHead(404).end();
    try { return await require(file)(req, vercelRes(res)) }
    catch (e) { console.error("[api]", e.message); return res.writeHead(500).end() }
  }
  let file = path.normalize(path.join(ROOT, decodeURIComponent(url.pathname)));
  if (!file.startsWith(ROOT) || /[\\/]\.(env|git|claude)/.test(file)) return res.writeHead(404).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file)) return res.writeHead(404).end("Not found");
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => {
  const ready = process.env.WYLTH_PARTNER_ID && process.env.WYLTH_PARTNER_SECRET;
  console.log(`Muthaleetu Thisai: http://localhost:${PORT}`);
  console.log(`Research 360 embed: ${ready ? "credentials loaded" : "no credentials, sample tools will show"}`);
});
