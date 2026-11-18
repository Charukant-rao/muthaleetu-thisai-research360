# Muthaleetu Thisai · Research 360 prototype

A local copy of [muthaleetuthisai.com](https://www.muthaleetuthisai.com/) with a new **Research** section built by Wylth:

- **MF Screener:** filter, sort and export funds by returns, risk, cost and rating.
- **Market Signals:** Nifty 50 and Nifty PE as a graph or heatmap, with a valuation gauge.
- **MF Compare:** up to five funds side by side, including portfolio overlap.
- **Portfolio IQ:** a gated lead flow.
  1. Visitors enter their details, plus an ARN if they're a distributor.
  2. They upload up to three CAS statements.
  3. They get a health score, allocation, overlap and rebalancing ideas.

  Everything read from the statements goes to a private Google Sheet, which emails distributors when the ARNs on their statements don't match theirs.

Fund and market figures are sample data for the prototype.

## Run it

```bash
node dev-server.js
```

Then open http://localhost:5173/#mf-screener. The site's own content (news, articles, videos) loads live from its Supabase backend.

`dev-server.js` serves the site and runs the `api/` functions the way Vercel does. You need Node 18 or later; there are no packages to install.

## Live Research 360 (Wylth embed)

MF Screener, Market Signals and MF Compare show Wylth's live Research 360 in an iframe, signed in with a one-time code. Visitors never log in, and the Wylth secret never reaches the browser.

- `api/research360-url.js` runs on the server. It gets a 24-hour access token from Wylth and caches it. For each visit, it gets a one-time code and returns the iframe address, with `Cache-Control: no-store`.
- `js/research.js` loads the iframe once and keeps it alive while visitors move around the site, so moving between pages doesn't use up codes. It gets a fresh code when Wylth reports the session ended (`EMBED_AUTH_FAILED`).
- Without credentials, or with no `api/` endpoint (for example on a plain static host), the sample-data tools show instead.

**Local:** put the credentials in `.env.local`, which is git-ignored:

```
WYLTH_PARTNER_ID=<partner account ID from Wylth>
WYLTH_PARTNER_SECRET=<secret from Wylth>
```

**Production (Vercel):** add these as Environment Variables in the project settings, never in code:

| Variable | Value |
|---|---|
| `WYLTH_PARTNER_ID` | Partner account ID from Wylth |
| `WYLTH_PARTNER_SECRET` | Secret from Wylth (mark it Sensitive) |
| `R360_ALLOWED_ORIGINS` | `https://www.muthaleetuthisai.com,https://muthaleetuthisai.com` |
| `R360_PER_IP_PER_MIN` | Optional; default 6 codes a minute per visitor |

Wylth allows 60 codes a minute for the whole account. Tell Wylth the expected peak traffic and the site's domains before launch.

## Where things are

| Path | What it is |
|---|---|
| `index.html`, `js/app*.js`, `js/supabase*.js` | The original site's page and bundles |
| `js/research-data.js` | Sample fund universe and market series |
| `js/research.js` | The Research section: routes, nav menu, the four tools |
| `js/research-capture.js` | CAS PDF reading and parsing, and the queue that sends leads to the sheet |
| `google-sheet/` | The Apps Script for the lead sheet, and how to set it up |
| `samples/` | Fictional password-protected CAS statements for testing (`sample-cas.pdf`: `AAKPR4821M`, `sample-cas-2.pdf`: `BCDPK5512L`) |

## Connect the lead sheet

Follow [google-sheet/README.md](google-sheet/README.md), then put the web app URL in `captureSheetUrl` in the `MT_CONFIG` block of `index.html`.
