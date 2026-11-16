# Portfolio IQ lead pipeline → Google Sheet

Portfolio IQ is a gated flow on the website:

1. **Your details:** name, PAN, email, mobile, and an ARN code for distributors, plus a consent tick.
2. **Upload statements:** up to 3 CAS PDFs, each with its own password.
3. **Your analysis:** health score, overlap, allocation and rebalancing ideas.

Visitors don't see what is read from their statements. Everything is sent to your Google Sheet:

| Tab | One row per | Holds |
|---|---|---|
| **Leads** | person (Lead ID) | Type (Investor / Distributor), name, PAN, email, mobile, ARN given; how many uploads and statements; funds and portfolio value; the names, PANs, emails, mobiles, addresses and periods found on the statements; every ARN on the statements; ARN mismatch and which ARNs; operations email status |
| **Holdings** | holding on a statement | Lead ID, upload, statement number and file, period, source (CAMS, KFintech…), investor name and PAN, scheme, folio, advisor ARN, units, NAV, cost value, market value |

A Leads row is created as soon as someone completes step 1, even if they never upload a statement.

## The ARN check and the operations email

When a **distributor's** statements list ARN codes other than the one they entered:
- the Leads row shows **ARN mismatch: Yes** and the mismatched ARNs;
- the script emails the distributor, signed "Muthaleetu Thisai Operations". The email names the ARNs found, says no action is needed if the investments went through another distributor, and asks them to reply otherwise;
- they're emailed once per new ARN, and the **Ops email** column records when it went out, or why it didn't.

Investors don't enter an ARN, so their statements' ARNs are recorded but no email is sent. Sample statements never trigger an email.

Change the wording, sender name, reply-to address or a BCC copy in the `OPS` block and `emailMismatch` in [Code.gs](Code.gs). Set `sendEmails: false` to only flag mismatches.

Emails are sent from the Google account that owns the script. To send from a shared address such as operations@…, deploy the script from that account. A free Gmail account can send about 100 emails a day; Google Workspace about 1,500.

## "Request a CAS" email

On the upload step, **Request a CAS** opens a guide to getting a statement:
- **CAMS / KFintech:** recommended; every mutual fund in one PDF, emailed within minutes.
- **CDSL / NSDL:** for demat holders, who already get a monthly CAS.
- **MF Central:** an instant download.

**Email me these steps** sends the same guide, with the official links and a link back to Portfolio IQ, from operations to the address the visitor gave in step 1. The Leads tab's **CAS help email** column records when it was sent. Each lead gets it at most once every 24 hours, and no more than `OPS.casHelpPerDay` go out per day in total. These limits stop the public web app being used to send spam.

The CAS itself can't be requested for the visitor: CAMS and KFintech's forms need a CAPTCHA, so the visitor fills them in, and the statement is emailed straight to them.

## Setup (about 5 minutes)

1. Create a new Google Sheet, for example **Muthaleetu Thisai · Portfolio IQ leads**. The tabs appear by themselves on the first record.
2. Open **Extensions → Apps Script**. Replace the editor's contents with [Code.gs](Code.gs), set the `OPS` block, and click **Save**.
3. Click **Deploy → New deployment**. Choose type **Web app**, then set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and approve the permissions. Google asks to edit your sheets and send email as you.
5. Copy the **Web app URL** (it ends in `/exec`). Opening it should show `{"ok":true,...}`.
6. Paste it into `index.html`, in the `MT_CONFIG` block:
   ```js
   captureSheetUrl: "https://script.google.com/macros/s/…/exec"
   ```

After you edit `Code.gs`, use **Deploy → Manage deployments → Edit → Version: New version**. The URL stays the same.

## Things to know

- **Keep the sheet private.** It holds PANs, contact details, addresses and full holdings. Share it only with the people who need it.
- **Consent is required.** The form's consent tick covers storing what people enter and what is in their statements, and contacting them. Keep it unless your legal review says otherwise.
- **The URL is public.** It sits in the website's code, so anyone who finds it could post rows. The script rejects records whose PAN, email, mobile or ARN are badly formed. If spam appears, add a CAPTCHA to the site.
- **Nothing is lost while the URL is empty.** Records wait in the visitor's browser and are sent on their next visit. A resent upload is written only once.
