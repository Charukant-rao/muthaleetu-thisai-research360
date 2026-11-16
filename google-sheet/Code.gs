// Muthaleetu Thisai · Portfolio IQ lead pipeline
// Paste into the Google Sheet's Apps Script editor (Extensions > Apps Script) and deploy as a
// web app. The site posts one record per request:
//   {kind: "lead", rec: {...}}  details entered before upload (name, PAN, email, mobile, ARN)
//   {kind: "cas",  rec: {...}}  everything read from up to three CAS statements
//   {kind: "casreq", rec: {...}} the visitor asked to be emailed the steps to get a CAS
// "Leads" keeps one row per person; "Holdings" keeps every holding from every statement.
// When a distributor's statements carry ARN codes other than the one they gave us, the
// operations team's email below goes to them, once per new ARN.

const OPS = {
  sendEmails: true,                          // false = only flag the mismatch in the sheet
  fromName: "Muthaleetu Thisai Operations",  // sender name the recipient sees
  replyTo: "",                               // e.g. "operations@muthaleetuthisai.com"; empty = this Google account
  bcc: "",                                   // optional copy for the operations inbox
  siteUrl: "https://www.muthaleetuthisai.com/#portfolio-iq",
  casHelpPerDay: 200                         // cap on "email me the steps" emails per day, all visitors together
};

const CAS_LINKS = {
  cams: "https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement",
  kfin: "https://mfs.kfintech.com/investor/General/ConsolidatedAccountStatement",
  mfc: "https://www.mfcentral.com/",
  cdsl: "https://web.cdslindia.com/myeasitoken/Home/Login",
  nsdl: "https://nsdlcas.nsdl.com/"
};

const LEADS = ["Lead ID", "First seen", "Last activity", "Type", "Name", "PAN", "Email", "Mobile", "ARN given",
  "Uploads", "Statements", "Funds", "Portfolio value (₹)", "Names on statements", "PANs on statements",
  "Emails on statements", "Mobiles on statements", "Addresses on statements", "Statement periods",
  "ARNs on statements", "ARN mismatch", "Mismatched ARNs", "Ops email", "Emailed for ARNs", "CAS help email", "Signed in on site",
  "Sample", "Site"];
const HOLDINGS = ["Lead ID", "Uploaded at", "Upload ID", "Statement #", "File", "Statement period", "Statement from",
  "Investor name", "Investor PAN", "Scheme", "Folio", "Advisor ARN", "Units", "NAV", "Cost value (₹)", "Market value (₹)"];
const C = Object.fromEntries(LEADS.map((h, i) => [h, i + 1]));

const PAN = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const ARN = /^ARN-\d{1,7}$/;
const MOBILE = /^[6-9]\d{9}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const { kind, rec } = JSON.parse(e.postData.contents);
    checkPerson(rec);
    if (kind === "lead") saveLead(rec);
    else if (kind === "cas") saveStatements(rec);
    else if (kind === "casreq") emailCasHelp(rec);
    else throw new Error("Unknown record type");
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err && err.message || err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you check the deployment by opening its URL in a browser.
function doGet() {
  return reply({ ok: true, service: "Portfolio IQ lead pipeline" });
}

function checkPerson(r) {
  if (!r || !r.leadId || !r.name || !PAN.test(String(r.pan || "")) || !EMAIL.test(r.email || "") ||
      !MOBILE.test(r.mobile || "") || (r.isMfd && !ARN.test(r.arn || ""))) {
    throw new Error("Record failed validation");
  }
}

// Creates the lead's row, or refreshes the details on it.
function saveLead(r) {
  const sh = tab("Leads", LEADS);
  const at = new Date(r.at || Date.now());
  let row = findRow(sh, C["Lead ID"], r.leadId);
  if (!row) {
    sh.appendRow(LEADS.map(() => ""));
    row = sh.getLastRow();
    set(sh, row, { "Lead ID": text(r.leadId), "First seen": at, "Uploads": 0, "Statements": 0, "ARN mismatch": "No" });
  }
  set(sh, row, {
    "Last activity": at, "Type": r.isMfd ? "Distributor" : "Investor", "Name": text(r.name), "PAN": text(r.pan),
    "Email": text(r.email), "Mobile": text(r.mobile), "ARN given": text(r.arn),
    "Signed in on site": r.signedIn ? "Yes" : "No", "Site": text(r.site)
  });
  if (r.sample) set(sh, row, { "Sample": "Yes" });
  return row;
}

function saveStatements(r) {
  if (r.id && findRow(tab("Holdings", HOLDINGS), 3, r.id)) return; // a resent upload
  const stmts = (r.statements || []).slice(0, 3);
  const sh = tab("Leads", LEADS);
  const row = saveLead(r);
  const at = new Date(r.at || Date.now());
  const list = f => uniq(stmts.map(f).filter(Boolean)).join("; ");
  const found = uniq(stmts.flatMap(s => (s.holdings || []).map(h => h.arn)).filter(a => ARN.test(a || "")));
  const mismatched = r.isMfd ? found.filter(a => a !== r.arn) : [];
  set(sh, row, {
    "Uploads": (Number(get(sh, row, "Uploads")) || 0) + 1,
    "Statements": (Number(get(sh, row, "Statements")) || 0) + stmts.length,
    "Funds": Number(r.funds) || 0, "Portfolio value (₹)": Math.round(Number(r.value) || 0),
    "Names on statements": text(list(s => s.name)), "PANs on statements": text(list(s => (s.pans || []).join(", "))),
    "Emails on statements": text(list(s => s.email)), "Mobiles on statements": text(list(s => s.mobile)),
    "Addresses on statements": text(list(s => s.address)), "Statement periods": text(list(s => s.period)),
    "ARNs on statements": text(found.join(", ")),
    "ARN mismatch": mismatched.length ? "Yes" : "No", "Mismatched ARNs": text(mismatched.join(", "))
  });

  const hs = tab("Holdings", HOLDINGS);
  const rows = stmts.flatMap(s => (s.holdings || []).map(h => [
    text(r.leadId), at, text(r.id), s.n, text(s.file), text(s.period), text(s.rta), text(s.name),
    text((s.pans || [])[0] || ""), text(h.scheme), text(h.folio), text(h.arn),
    num(h.units), num(h.nav), num(h.cost), num(h.value)
  ]));
  if (rows.length) hs.getRange(hs.getLastRow() + 1, 1, rows.length, HOLDINGS.length).setValues(rows);

  if (mismatched.length) emailMismatch(sh, row, r, mismatched);
}

// One email per lead per new ARN: an ARN already written to us about is not repeated.
function emailMismatch(sh, row, r, mismatched) {
  const done = String(get(sh, row, "Emailed for ARNs") || "").split(/,\s*/).filter(Boolean);
  const fresh = mismatched.filter(a => done.indexOf(a) < 0);
  if (!fresh.length) return;
  if (!OPS.sendEmails || r.sample) {
    set(sh, row, { "Ops email": r.sample ? "Not sent (sample statement)" : "Not sent (emails switched off)" });
    return;
  }
  const first = String(r.name).split(" ")[0];
  const html =
    `<p>Dear ${esc(first)},</p>` +
    `<p>Thank you for using Portfolio IQ on Muthaleetu Thisai.</p>` +
    `<p>The statements you uploaded list the distributor code${fresh.length > 1 ? "s" : ""} <b>${fresh.map(esc).join(", ")}</b>, ` +
    `which ${fresh.length > 1 ? "differ" : "differs"} from the ARN you gave us, <b>${esc(r.arn)}</b>.</p>` +
    `<p>If these investments were made through another distributor, no action is needed. ` +
    `If you think your ARN details are wrong, or you would like help with these folios, just reply to this email and our operations team will get in touch.</p>` +
    `<p>Regards,<br>${esc(OPS.fromName)}<br>muthaleetuthisai.com</p>`;
  try {
    const mail = { to: r.email, subject: "Portfolio IQ: please check your ARN details", htmlBody: html, name: OPS.fromName };
    if (OPS.replyTo) mail.replyTo = OPS.replyTo;
    if (OPS.bcc) mail.bcc = OPS.bcc;
    MailApp.sendEmail(mail);
    set(sh, row, { "Ops email": "Sent " + Utilities.formatDate(new Date(), "Asia/Kolkata", "d MMM yyyy, HH:mm"), "Emailed for ARNs": done.concat(fresh).join(", ") });
  } catch (err) {
    set(sh, row, { "Ops email": "Failed: " + String(err && err.message || err).slice(0, 200) });
  }
}

// Emails the steps to get a CAS to the lead's own address. At most one per lead every
// 24 hours, and OPS.casHelpPerDay in total, so the public web app can't be used to spam.
function emailCasHelp(r) {
  const sh = tab("Leads", LEADS);
  const row = saveLead(r);
  const props = PropertiesService.getScriptProperties();
  const leadKey = "casHelpLead:" + r.leadId;
  if (Date.now() - (Number(props.getProperty(leadKey)) || 0) < 24 * 3600 * 1000) return;
  const key = "casHelp:" + Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd");
  const sentToday = Number(props.getProperty(key)) || 0;
  if (!OPS.sendEmails || sentToday >= OPS.casHelpPerDay) {
    set(sh, row, { "CAS help email": OPS.sendEmails ? "Not sent (daily limit reached)" : "Not sent (emails switched off)" });
    return;
  }
  const a = (href, label) => `<a href="${href}">${label}</a>`;
  const html =
    `<p>Dear ${esc(String(r.name).split(" ")[0])},</p>` +
    `<p>Here is how to get your Consolidated Account Statement (CAS). It's free, and you can then upload it to Portfolio IQ for a full health check of your portfolio.</p>` +
    `<p><b>Mutual funds: CAMS + KFintech (recommended)</b></p><ol>` +
    `<li>Open the ${a(CAS_LINKS.cams, "CAMS CAS request page")} (or ${a(CAS_LINKS.kfin, "KFintech")}).</li>` +
    `<li>Statement type: <b>Detailed</b>. Period: <b>Specific period</b>, from your first investment to today.</li>` +
    `<li>Enter the email registered with your funds, and your PAN.</li>` +
    `<li>Set a password and keep it handy; Portfolio IQ will ask for it.</li>` +
    `<li>The statement arrives by email within a few minutes.</li></ol>` +
    `<p><b>Demat holders: CDSL or NSDL</b><br>Your depository emails a CAS every month. Search your inbox for "Consolidated Account Statement". The password is usually your PAN in capital letters. You can also download it from ${a(CAS_LINKS.cdsl, "CDSL Easi")} or ${a(CAS_LINKS.nsdl, "NSDL CAS")}.</p>` +
    `<p><b>Instant: MF Central</b><br>Sign in on ${a(CAS_LINKS.mfc, "MF Central")} with your PAN and an OTP, and download the Detailed CAS.</p>` +
    `<p>When you have it, upload it here: ${a(OPS.siteUrl, "Portfolio IQ on Muthaleetu Thisai")}. You can upload up to three statements at once.</p>` +
    `<p>Regards,<br>${esc(OPS.fromName)}<br>muthaleetuthisai.com</p>`;
  try {
    const mail = { to: r.email, subject: "How to get your CAS statement", htmlBody: html, name: OPS.fromName };
    if (OPS.replyTo) mail.replyTo = OPS.replyTo;
    if (OPS.bcc) mail.bcc = OPS.bcc;
    MailApp.sendEmail(mail);
    props.setProperty(key, String(sentToday + 1));
    props.setProperty(leadKey, String(Date.now()));
    set(sh, row, { "CAS help email": "Sent " + Utilities.formatDate(new Date(), "Asia/Kolkata", "d MMM yyyy, HH:mm") });
  } catch (err) {
    set(sh, row, { "CAS help email": "Failed: " + String(err && err.message || err).slice(0, 200) });
  }
}

function tab(name, head) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(head);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, head.length).setFontWeight("bold");
  }
  return sh;
}

function set(sh, row, values) {
  Object.keys(values).forEach(k => sh.getRange(row, C[k]).setValue(values[k]));
}

function get(sh, row, key) {
  return sh.getRange(row, C[key]).getValue();
}

function findRow(sh, col, value) {
  if (sh.getLastRow() < 2) return 0;
  const hit = sh.getRange(2, col, sh.getLastRow() - 1, 1).createTextFinder(String(value)).matchEntireCell(true).findNext();
  return hit ? hit.getRow() : 0;
}

const uniq = a => a.filter((x, i) => a.indexOf(x) === i);
const num = v => (v === null || v === undefined || v === "" ? "" : Number(v));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// Stores values as plain text: keeps leading zeros intact and stops a submitted value such
// as "=HYPERLINK(...)" from running as a formula.
function text(v) {
  const s = String(v == null ? "" : v).slice(0, 1000);
  return s ? "'" + s : "";
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
