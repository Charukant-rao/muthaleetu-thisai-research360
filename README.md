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

Serve the folder with any static server, for example:

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173/#mf-screener. The site's own content (news, articles, videos) loads live from its Supabase backend.

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
