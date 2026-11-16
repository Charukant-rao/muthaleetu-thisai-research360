// Portfolio IQ capture: reads a CAMS / KFintech CAS PDF in the browser, maps its
// schemes to funds we can analyse, and sends investor (lead) and distributor (ARN) records
// to the site owner's Google Sheet.

const RS_PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const RS_PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// Captured investors (from a CAS) and distributors (ARN) are sent to a private Google Sheet
// through an Apps Script web app; see google-sheet/README.md. Nothing is shown on the site.
// Each record waits in this browser's queue until the request goes out, so a capture made
// before the sheet is configured, or while offline, is sent on a later visit.
const rsSheetUrl = () => (window.MT_CONFIG && window.MT_CONFIG.captureSheetUrl) || "";
let RS_QUEUE = rsLoad("cap_queue", []);

function rsCapSave(kind, rec){
  rec.at = new Date().toISOString();
  rec.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  rec.site = location.hostname;
  RS_QUEUE.push({ kind, rec });
  rsSave("cap_queue", RS_QUEUE);
  rsCapFlush();
  return rec;
}

// The web app cannot answer cross-origin reads, so requests go out as "no-cors": a request
// that leaves the browser counts as sent. The sheet ignores a repeated record id.
async function rsCapFlush(){
  const url = rsSheetUrl();
  if(!url || rsCapFlush.busy || !RS_QUEUE.length) return;
  rsCapFlush.busy = true;
  while(RS_QUEUE.length){
    try { await fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(RS_QUEUE[0]) }) }
    catch { break }
    RS_QUEUE.shift();
    rsSave("cap_queue", RS_QUEUE);
  }
  rsCapFlush.busy = false;
}
window.addEventListener("online", rsCapFlush);
setTimeout(rsCapFlush, 1500);

/* ---------- validation ---------- */

const rsArnNorm = v => { const d = String(v || "").replace(/[^0-9]/g, ""); return d ? "ARN-" + d : "" };
// Accepts "ARN-112233", "arn 112233" or "112233"; rejects anything with other letters.
const rsOkArn = v => /^\s*(?:ARN)?[\s-]*\d{1,7}\s*$/i.test(String(v || ""));
const rsOkPan = v => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(String(v || "").toUpperCase());
const rsOkMob = v => /^[6-9]\d{9}$/.test(String(v || "").replace(/\D/g, "").slice(-10));
const rsOkMail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim());
const rsOkEuin = v => !v || /^E\d{6}$/i.test(String(v).trim());
const rsMaskPan = p => p && p.length === 10 ? p.slice(0, 5) + "****" + p.slice(9) : (p || "—");
const rsMob10 = v => String(v || "").replace(/\D/g, "").slice(-10);

/* ---------- PDF reading ---------- */

function rsPdfLib(){
  if(window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  return new Promise((ok, no) => {
    const s = document.createElement("script");
    s.src = RS_PDFJS;
    s.onload = () => { window.pdfjsLib.GlobalWorkerOptions.workerSrc = RS_PDFJS_WORKER; ok(window.pdfjsLib) };
    s.onerror = () => no(new Error("Could not load the PDF reader. Check your internet connection."));
    document.head.appendChild(s);
  });
}

// Returns the PDF's text with one line per visual row, so labels and values stay together.
async function rsCasText(file, password){
  const lib = await rsPdfLib();
  const data = new Uint8Array(await file.arrayBuffer());
  let doc;
  try { doc = await lib.getDocument({ data, password: password || undefined }).promise }
  catch(e){
    if(e && e.name === "PasswordException") throw new Error(e.code === 2 ? "That password did not open the statement. CAS passwords are case sensitive." : "This statement is password protected. Enter the password you set when requesting it (for NSDL / CDSL it is usually your PAN).");
    throw new Error("This file could not be read as a PDF.");
  }
  const lines = [];
  for(let p = 1; p <= doc.numPages; p++){
    const tc = await (await doc.getPage(p)).getTextContent();
    const rows = new Map();
    tc.items.forEach(it => { if(!it.str.trim()) return; const y = Math.round(it.transform[5] / 2); (rows.get(y) || rows.set(y, []).get(y)).push(it) });
    [...rows.entries()].sort((a, b) => b[0] - a[0]).forEach(([, its]) => lines.push(its.sort((a, b) => a.transform[4] - b.transform[4]).map(i => i.str.trim()).join("  ")));
  }
  return lines.join("\n");
}

/* ---------- CAS parsing ---------- */

const rsAmt = s => s ? +String(s).replace(/,/g, "") : null;

function rsParseCas(text){
  const lines = text.split(/\r?\n/).map(l => l.replace(/\s+$/, "")).filter(l => l.trim());
  const pick = re => { const m = text.match(re); return m ? m[1].trim() : "" };
  const out = {
    email: pick(/Email\s*(?:Id|ID|Address)?\s*:\s*([^\s]+@[^\s]+)/i),
    mobile: rsMob10(pick(/Mobile\s*(?:No\.?|Number)?\s*:\s*(\+?[\d][\d\s-]{8,15}\d)/i)),
    pan: pick(/PAN\s*:\s*([A-Z]{5}[0-9]{4}[A-Z])/),
    name: "",
    period: (() => { const m = text.match(/(\d{2}-[A-Za-z]{3}-\d{4})\s*(?:To|to|-)\s*(\d{2}-[A-Za-z]{3}-\d{4})/); return m ? m[1] + " to " + m[2] : "" })(),
    rta: /KFINTECH|KFin/i.test(text) && /CAMS/i.test(text) ? "CAMS + KFintech" : /CAMS/i.test(text) ? "CAMS" : /KFIN/i.test(text) ? "KFintech" : /NSDL/i.test(text) ? "NSDL" : /CDSL/i.test(text) ? "CDSL" : "",
    holdings: []
  };
  // CAMS / KFintech put the investor name on the line after the email; NSDL / CDSL use "Dear NAME" or "Name :".
  const ei = lines.findIndex(l => /Email\s*(?:Id|ID)?\s*:/i.test(l));
  if(ei >= 0) for(let k = ei + 1; k < Math.min(lines.length, ei + 4); k++){ const t = lines[k].trim(); if(/^[A-Za-z][A-Za-z .']{2,60}$/.test(t)){ out.name = t; break } }
  out.name = out.name || pick(/(?:Dear|Name\s*:)\s*([A-Za-z][A-Za-z .']{2,60})/i);
  // Address: the lines between the name and the mobile number.
  const ni = ei >= 0 ? lines.findIndex((l, k) => k > ei && l.trim().toUpperCase() === out.name.toUpperCase()) : -1;
  if(ni >= 0){ const addr = []; for(let k = ni + 1; k < Math.min(lines.length, ni + 6) && !/Mobile|Folio|Mutual Fund/i.test(lines[k]); k++) addr.push(lines[k].trim()); out.address = addr.join(", ") }
  out.address = out.address || "";
  out.pans = [...new Set((text.match(/PAN\s*:\s*[A-Z]{5}[0-9]{4}[A-Z]/g) || []).map(m => m.replace(/PAN\s*:\s*/, "")))];
  out.name = out.name.replace(/\s+/g, " ").replace(/\b\w/g, c => c.toUpperCase()).replace(/\B\w+/g, w => w.toLowerCase());

  // Each scheme line opens a block that runs to the next scheme or folio line. Reading the
  // block as one string copes with statements that wrap the closing balance across rows.
  let folio = "", cur = null;
  const close = () => {
    if(!cur) return;
    const b = cur.text.replace(/\s+/g, " "), num = re => rsAmt((b.match(re) || [])[1]);
    const value = num(/(?:Market\s*Value|Valuation)\s*on\s*[^:]+:\s*(?:INR|Rs\.?|₹)?\s*([\d,]+\.?\d*)/i);
    value && out.holdings.push({ scheme: cur.scheme, folio: cur.folio, arn: cur.arn, value,
      units: num(/Closing\s*Unit\s*Balance\s*:\s*([\d,]+\.?\d*)/i),
      nav: num(/NAV\s*on\s*[^:]+:\s*(?:INR|Rs\.?)?\s*([\d,]+\.?\d*)/i),
      cost: num(/Total\s*Cost\s*Value\s*:\s*([\d,]+\.?\d*)/i) });
    cur = null;
  };
  lines.forEach(l => {
    const f = l.match(/Folio\s*No\s*:\s*([\w\/ -]+?)(?=\s{2,}|\s+PAN|PAN|$)/i);
    if(f){ close(); folio = f[1].trim(); return }
    if(/\(Advisor\s*:|Registrar\s*:|-\s*ISIN\s*:/i.test(l) && !/Closing Unit/i.test(l)){
      close();
      const a = l.match(/Advisor\s*:\s*(ARN-?\s*\d+|INA\d+|DIRECT)/i);
      cur = { folio, text: "",
        scheme: l.split(/\(Advisor\s*:|\s+-\s*ISIN\s*:|Registrar\s*:/i)[0].replace(/^[A-Z0-9]{2,8}-\s*/, "").replace(/\s{2,}/g, " ").trim(),
        arn: a ? (/^ARN/i.test(a[1]) ? rsArnNorm(a[1]) : a[1].toUpperCase()) : "" };
      return;
    }
    cur && (cur.text += " " + l);
  });
  close();
  out.holdings = out.holdings.filter(h => h.value > 0);
  return out;
}

/* ---------- scheme to fund mapping ---------- */

const RS_STOP = new Set(["fund","plan","regular","growth","direct","option","the","of","and","&","-","idcw","reinvestment","payout","mf","india","prudential"]);
const rsTok = s => s.toLowerCase().replace(/[^a-z0-9& ]/g, " ").split(/\s+/).filter(w => w && !RS_STOP.has(w));

// Exact-ish match to a fund we hold data for; otherwise a category proxy so the analysis
// still has allocation, cap mix and holdings to work with.
function rsMatchFund(scheme){
  const st = new Set(rsTok(scheme));
  let best = null, bs = 0;
  RS_FUNDS.forEach(f => { const ft = rsTok(f.n); const hit = ft.filter(w => st.has(w)).length / ft.length; hit > bs && (bs = hit, best = f) });
  if(best && bs >= 0.75) return { id: best.id, proxy: false };
  const s = scheme.toLowerCase();
  const rules = [[/liquid|overnight|money market/, "sbiliq"], [/gilt/, "kotakgilt"], [/gold/, "sbigold"], [/nasdaq|overseas|international|global|us equity|fof/, "motnas"],
    [/nifty|sensex|index|etf/, "utin50"], [/small/, "nipsc"], [/large\s*&\s*mid|large and mid/, "mirlmc"], [/mid/, "hdfcmid"], [/elss|tax/, "mirelss"],
    [/balanced advantage|dynamic asset/, "icicibaf"], [/multi asset/, "icicima"], [/hybrid|equity\s*&\s*debt|aggressive/, "sbiah"],
    [/corporate|banking|psu|short|duration|bond|income|debt|credit/, "hdfccb"], [/large|bluechip|top 100|frontline/, "icicibc"]];
  const r = rules.find(([re]) => re.test(s));
  return { id: r ? r[1] : "hdfcfx", proxy: true };
}

function rsCasToHoldings(cas){
  return cas.holdings.map(h => { const m = rsMatchFund(h.scheme); return { id: m.id, proxy: m.proxy, amt: Math.round(h.value), name: h.scheme, folio: h.folio, arn: h.arn, units: h.units } });
}

/* ---------- sample statement (fictional investor) ---------- */

const RS_SAMPLE_CAS = `Consolidated Account Statement
CAMS + KFintech
01-Nov-2025 To 05-Nov-2026
Email Id: priya.raman@example.com
PRIYA RAMAN
12 Lake View Road, T Nagar
Chennai - 600017
Mobile: +91 98000 00001
HDFC Mutual Fund
Folio No: 1029384756 / 21  PAN: AAKPR4821M  KYC: OK  PAN: OK
H02G-HDFC Flexi Cap Fund - Regular Plan - Growth (Advisor: ARN-112233)  Registrar : CAMS
Closing Unit Balance: 149.420  NAV on 05-Nov-2026: INR 2,091.133  Total Cost Value: 2,40,000.00  Market Value on 05-Nov-2026: INR 3,12,450.20
PPFAS Mutual Fund
Folio No: 5544332211  PAN: AAKPR4821M  KYC: OK  PAN: OK
PP001ZG-Parag Parikh Flexi Cap Fund - Regular Plan - Growth (Advisor: ARN-112233)  Registrar : CAMS
Closing Unit Balance: 2,949.770  NAV on 05-Nov-2026: INR 84.379  Total Cost Value: 1,90,000.00  Market Value on 05-Nov-2026: INR 2,48,900.00
Nippon India Mutual Fund
Folio No: 477120938811  PAN: AAKPR4821M  KYC: OK  PAN: OK
RMFSCGP-Nippon India Small Cap Fund - Growth Plan (Advisor: ARN-998877)  Registrar : KFINTECH
Closing Unit Balance: 1,107.450  NAV on 05-Nov-2026: INR 168.228  Total Cost Value: 1,20,000.00  Market Value on 05-Nov-2026: INR 1,86,300.55
Axis Mutual Fund
Folio No: 91022331  PAN: AAKPR4821M  KYC: OK  PAN: OK
AXSCRG-Axis Small Cap Fund - Regular Growth (Advisor: ARN-998877)  Registrar : KFINTECH
Closing Unit Balance: 821.200  NAV on 05-Nov-2026: INR 112.530  Total Cost Value: 70,000.00  Market Value on 05-Nov-2026: INR 92,410.10
ICICI Prudential Mutual Fund
Folio No: 8820193  PAN: AAKPR4821M  KYC: OK  PAN: OK
P8018-ICICI Prudential Equity & Debt Fund - Growth (Advisor: ARN-112233)  Registrar : CAMS
Closing Unit Balance: 278.410  NAV on 05-Nov-2026: INR 396.000  Total Cost Value: 80,000.00  Market Value on 05-Nov-2026: INR 1,10,250.00
SBI Mutual Fund
Folio No: 30019283  PAN: AAKPR4821M  KYC: OK  PAN: OK
L086G-SBI Liquid Fund - Regular Plan - Growth (Advisor: DIRECT)  Registrar : CAMS
Closing Unit Balance: 16.939  NAV on 05-Nov-2026: INR 4,427.596  Total Cost Value: 72,000.00  Market Value on 05-Nov-2026: INR 75,000.00`;
