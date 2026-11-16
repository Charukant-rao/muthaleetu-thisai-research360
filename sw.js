/* Lets phones offer "Install app" / "Add to Home screen". It does not store pages, so visitors always get
   the latest version of the site; when the phone is offline it shows a short message instead of an error. */
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><body style="font-family:system-ui,sans-serif;padding:32px;text-align:center"><h2>You are offline</h2><p>Please check your internet connection and try again.</p><p>இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.</p></body>',
    { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
