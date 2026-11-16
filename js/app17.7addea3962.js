(function(){const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",document.head.appendChild(a);const e=document.createElement("style");e.textContent=`
.rd{--ar-serif:"Lora",Georgia,"Times New Roman",serif}
.rd.th-sepia{--bg:#f4ecdf;--surface:#fbf6ee;--surface-2:#f7f0e4;--surface-3:#efe5d3;--line:#e4d7c1;--ink:#3a2e22;--ink-2:#5a4a38;--muted:#86735c}
.rd.th-dark{--bg:#0c0b1d;--surface:#15132c;--surface-2:#121027;--surface-3:#1d1a3b;--line:#2a2650;--ink:#ecebf8;--ink-2:#c9c6e4;--muted:#9a96bf;--accent:#818cf8;--accent-soft:#1f1d48;--accent-ink:#c7d2fe;color-scheme:dark}
.rd.ff-sans .ar-body{font-family:var(--f-body)}
.ar{max-width:1240px;margin:0 auto;padding:26px 22px 10px}
.ar-top{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.ar-back{display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-weight:600;font-size:15px;font-family:var(--ar-serif)}
.ar-back:hover{color:var(--accent)}
.ar-pill{border:1px solid color-mix(in srgb,#16a34a 45%,transparent);background:color-mix(in srgb,#16a34a 10%,var(--surface));color:#15803d;border-radius:999px;padding:6px 16px;font-family:var(--ar-serif);font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:13px}
.rd.th-dark .ar-pill{color:#4ade80}
.ar h1.ar-t{font-family:var(--ar-serif);font-weight:600;font-size:clamp(30px,4.3vw,58px);line-height:1.22;margin:26px 0 12px;color:var(--ink);letter-spacing:-.005em}
.ar-meta{display:flex;gap:10px;flex-wrap:wrap;align-items:center;color:var(--muted);font-size:14px;margin-bottom:24px}
.ar-meta .dot{opacity:.5}
.ar-hero{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:28px;align-items:stretch}
.ar-img{position:relative;border-radius:26px;overflow:hidden;min-height:340px;box-shadow:0 20px 50px rgba(15,23,42,.18)}
.ar-img .art{position:absolute;inset:0;border-radius:0;height:auto;width:auto}
.ar-tag{position:absolute;left:22px;top:22px;z-index:2;background:rgba(15,23,42,.65);border:1px solid rgba(255,255,255,.18);color:#a7f3d0;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;backdrop-filter:blur(6px)}
.ar-sum{border:1px solid color-mix(in srgb,#3b82f6 30%,var(--line));background:color-mix(in srgb,#3b82f6 7%,var(--surface));border-radius:26px;padding:26px 28px;display:flex;flex-direction:column;gap:14px}
.ar-sum h4{margin:0;font-family:var(--ar-serif);color:#1d4ed8;letter-spacing:.12em;text-transform:uppercase;font-size:14px}
.rd.th-dark .ar-sum h4{color:#93c5fd}
.ar-sum p{margin:0;font-family:var(--ar-serif);font-size:18px;line-height:1.7;color:var(--ink-2)}
.ar-sum .facts{margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px}
.ar-sum .facts div{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:10px 12px}
.ar-sum .facts small{display:block;color:var(--muted);font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}
.ar-sum .facts b{font-size:15px}
.ar-auth{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin:28px 0;padding:20px 26px;border-radius:24px;background:color-mix(in srgb,#f59e0b 8%,var(--surface));border:1px solid color-mix(in srgb,#f59e0b 30%,var(--line))}
.ar-auth .ring{padding:3px;border-radius:22px;background:linear-gradient(135deg,#f59e0b,#d97706);flex:none}
.ar-auth .ring .av{border-radius:19px;display:grid;border:3px solid var(--surface)}
.ar-auth .nm{flex:1;min-width:0}
.ar-auth .nm b{font-family:var(--ar-serif);font-size:21px;display:inline-flex;align-items:center;gap:8px}
.ar-auth .nm b svg{color:#3b82f6}
.ar-auth .nm div{font-family:var(--ar-serif);color:var(--ink-2);font-size:15px;margin-top:2px}
.ar-pbtn{border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:10px 20px;font-family:var(--ar-serif);font-weight:700;font-size:15px;color:var(--ink)}
.ar-pbtn:hover{border-color:var(--accent);color:var(--accent)}
.ar-main{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:34px;align-items:start}
.ar-card{background:var(--surface);border:1px solid var(--line);border-radius:26px;padding:clamp(22px,3.4vw,52px);box-shadow:0 1px 2px rgba(15,23,42,.04)}
.ar-body{font-family:var(--ar-serif);font-size:var(--rd-fs,20px);line-height:1.85;color:var(--ink)}
.ar-body p{margin:0 0 1.2em;white-space:pre-wrap}
.ar-body h2{font-family:var(--ar-serif);font-size:1.3em;font-weight:700;margin:1.6em 0 .6em;color:var(--ink);line-height:1.35}
.ar-body h3{font-family:var(--ar-serif);font-size:1.12em;font-weight:700;margin:1.4em 0 .5em}
.ar-body ul{margin:0 0 1.2em;padding-left:1.3em}.ar-body li{margin:.3em 0}
.ar-body blockquote{margin:1.4em 0;padding:4px 0 4px 20px;border-left:4px solid var(--accent);font-style:italic;color:var(--ink-2)}
.ar-talk{margin:30px 0 10px;padding:28px 32px;border-radius:24px;background:color-mix(in srgb,#10b981 9%,var(--surface));border:1px solid color-mix(in srgb,#10b981 35%,var(--line))}
.ar-talk .k{display:flex;align-items:center;gap:10px;color:#047857;font-family:var(--ar-serif);font-weight:700;letter-spacing:.1em;text-transform:uppercase;font-size:14px}
.rd.th-dark .ar-talk .k{color:#34d399}
.ar-talk h3{font-family:var(--ar-serif);font-size:21px;line-height:1.55;margin:12px 0 18px;color:var(--ink)}
.ar-wa{display:inline-flex;align-items:center;gap:10px;background:#059669;color:#fff;border-radius:14px;padding:13px 24px;font-weight:700;font-size:15.5px;text-decoration:none;box-shadow:0 10px 24px rgba(5,150,105,.3)}
.ar-wa:hover{background:#047857}
.ar-hr{border:0;border-top:1px solid var(--line);margin:30px 0}
.ar-disc{padding:22px 24px;border-radius:18px;background:var(--surface-2);border:1px solid var(--line);font-family:var(--ar-serif)}
.ar-disc b{display:block;font-size:16.5px;margin-bottom:6px}
.ar-disc p{margin:0;color:var(--muted);font-size:15.5px;line-height:1.75}
.ar-acts{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:24px}
.ar-side{position:sticky;top:76px;display:flex;flex-direction:column;gap:20px}
.ar-box{background:var(--surface);border:1px solid var(--line);border-radius:26px;padding:26px 30px}
.ar-box h4{margin:0 0 6px;font-family:var(--ar-serif);letter-spacing:.1em;text-transform:uppercase;font-size:16px;padding-bottom:16px;border-bottom:1px solid var(--line)}
.ar-li{display:block;width:100%;text-align:left;padding:18px 0;border-bottom:1px solid var(--line)}
.ar-li small{font-family:var(--ar-serif);font-size:13.5px;color:var(--muted)}
.ar-li small b{color:#16a34a;letter-spacing:.06em;text-transform:uppercase;margin-right:6px}
.ar-li span{display:block;font-family:var(--ar-serif);font-size:17px;color:var(--ink);margin-top:4px;line-height:1.4}
.ar-li:hover span{color:var(--accent)}
.ar-see{display:block;width:100%;text-align:center;margin-top:16px;color:#16a34a;font-family:var(--ar-serif);font-weight:700}
.ar-cmt{margin-top:28px}
.ar-cmt h3{font-family:var(--ar-serif);font-size:22px;margin:0 0 14px}
.ar-band{margin:46px 22px 30px;border-radius:30px;background:#0f172a;color:#fff;padding:40px clamp(20px,3.4vw,48px);box-shadow:0 30px 60px rgba(15,23,42,.25)}
.ar-band .hd{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;max-width:1240px;margin:0 auto 24px}
.ar-band .k{color:#f59e0b;font-family:var(--ar-serif);font-weight:700;letter-spacing:.1em;text-transform:uppercase;font-size:15px}
.ar-band h3{font-family:var(--ar-serif);font-size:clamp(22px,2.4vw,28px);margin:8px 0 0;color:#fff}
.ar-arw{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.06);color:#cbd5e1;font-size:22px;display:inline-grid;place-items:center;margin-left:10px}
.ar-arw:hover{background:rgba(255,255,255,.14);color:#fff}
.ar-rail{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(280px,500px);gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;max-width:1240px;margin:0 auto}
.ar-rail::-webkit-scrollbar{display:none}
.ar-mr{scroll-snap-align:start;text-align:left;background:#070b1d;border:1px solid rgba(148,163,184,.2);border-radius:22px;padding:24px;display:flex;flex-direction:column;gap:14px;color:#fff;transition:border-color .15s,transform .15s}
.ar-mr:hover{border-color:rgba(245,158,11,.6);transform:translateY(-2px)}
.ar-mr .r1{display:flex;justify-content:space-between;gap:10px;font-family:var(--ar-serif)}
.ar-mr .r1 b{color:#f59e0b;text-transform:uppercase;letter-spacing:.04em}
.ar-mr .r1 span{color:#64748b;text-transform:uppercase}
.ar-mr h4{margin:0;font-family:var(--ar-serif);font-size:19px;line-height:1.4}
.ar-mr .go{color:#60a5fa;font-family:var(--ar-serif);font-weight:700;margin-top:auto}
.ar-mr .st{color:#94a3b8;font-size:12.5px}
.ar-top-btn{position:fixed;right:26px;bottom:26px;z-index:5;width:64px;height:64px;border-radius:50%;background:#1d4ed8;color:#fff;font-size:26px;display:grid;place-items:center;box-shadow:0 14px 30px rgba(29,78,216,.45);opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s,transform .2s}
.ar-top-btn.on{opacity:1;pointer-events:auto;transform:none}
.ar-set{position:fixed;left:0;top:42%;z-index:5;width:60px;height:62px;border-radius:0 20px 20px 0;background:var(--surface);border:1px solid var(--line);border-left:0;box-shadow:0 10px 30px rgba(15,23,42,.12);display:grid;place-items:center;color:var(--ink)}
.ar-pop{position:fixed;left:70px;top:calc(42% - 40px);z-index:6;width:270px;background:var(--surface);border:1px solid var(--line);border-radius:20px;box-shadow:0 24px 50px rgba(15,23,42,.22);padding:18px;display:none}
.ar-pop.on{display:block}
.ar-pop h5{margin:0 0 8px;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.ar-pop .seg2{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:16px}
.ar-pop .seg2 button{border:1px solid var(--line);border-radius:10px;padding:8px 4px;font-weight:700;font-size:13px;color:var(--ink-2);background:var(--surface-2)}
.ar-pop .seg2 button.on{border-color:var(--accent);color:var(--accent);background:var(--accent-soft)}
@media (max-width:1000px){.ar-hero,.ar-main{grid-template-columns:1fr}.ar-side{position:static}.ar-img{min-height:240px}}
@media (max-width:640px){.ar{padding:18px 14px}.ar-band{margin:30px 10px;border-radius:22px;padding:26px 18px}.ar-set{width:46px;height:50px}.ar-pop{left:56px;width:240px}.ar-top-btn{width:52px;height:52px;right:16px;bottom:16px}.ar-talk{padding:22px}}`,document.head.appendChild(e)})();const AR_VERIFIED='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-label="Verified"><path d="M20 6L9 17l-5-5"/></svg>',AR_SLIDERS='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',AR_CHAT='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>';try{UI.rdTheme=localStorage.getItem("mt_rdth")||"light",UI.rdFont=localStorage.getItem("mt_rdff")||"serif"}catch{UI.rdTheme="light",UI.rdFont="serif"}(!UI.rdFs||UI.rdFs===18)&&(UI.rdFs=20);function arDate(a){const e=new Date(a||"");return isNaN(e)?"":e.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function arBody(a){return String(a||"").split(NL+NL).map(r=>r.trim()).filter(Boolean).map((r,i)=>{if(r.startsWith("### "))return`<h3>${esc(r.slice(4))}</h3>`;if(r.startsWith("## "))return`<h2>${esc(r.slice(3))}</h2>`;if(r.startsWith("> "))return`<blockquote>${esc(r.slice(2))}</blockquote>`;const t=r.split(NL);if(t.length>1&&t.every(n=>n.trim().startsWith("- ")))return`<ul>${t.map(n=>`<li>${esc(n.trim().slice(2))}</li>`).join("")}</ul>`;const o=r.slice(-1);return i>0&&t.length===1&&r.length<=80&&".,;!".indexOf(o)<0?`<h2>${esc(r)}</h2>`:`<p>${esc(r)}</p>`}).join("")}function arScore(a){return likeCount("article",a.id)*3+cmFor("article",a.id).filter(e=>!e.removed).length*2}function arTalk(a,e,r){if(a.source==="public")return"";const i=esc(e.display_name),t=r&&typeof waUrl=="function"?waUrl(r.whatsapp):"";let o;return t?o=`<a class="ar-wa" href="${esc(t+"?text="+encodeURIComponent("Hi "+e.display_name+", I read your article: "+a.t))}" target="_blank" rel="noopener noreferrer">${AR_CHAT} WhatsApp-ல் பேசுங்கள் →</a>`:S.signedIn?o=`<button class="ar-wa" data-act="pro" data-id="${e.id}">${AR_CHAT} View ${i}'s contact details →</button>`:o=`<button class="ar-wa" data-act="login">${AR_CHAT} Sign in to contact ${i} →</button>`,`<div class="ar-talk"><div class="k">${AR_CHAT} Talk to the author</div><h3>Have questions about this article? Talk to ${i} directly on WhatsApp.</h3>${o}</div>`}window.rdHtml=function(a,e){const r=a.source==="public",i=author(a.author),t=(DB.pubs||[]).find(s=>s.id===a.author),o=CATS[a.c]||"Article",n=cmFor("article",a.id).filter(s=>!s.removed).length,g=likeCount("article",a.id),d=pubArticles().filter(s=>String(s.id)!==String(a.id)),l=d.filter(s=>s.c===a.c),p=(l.length?l:d).slice(0,5),f=(l.length>=2?l:d).slice().sort((s,c)=>arScore(c)-arScore(s)).slice(0,10),m=r?a.contributor||"Reader":i.display_name,u=r?avatar({id:a.contributor||"p",display_name:a.contributor||"Reader"},72):avatar(i,72);return`<div class="${["rd",UI.rdTheme==="sepia"?"th-sepia":UI.rdTheme==="dark"?"th-dark":"",UI.rdFont==="sans"?"ff-sans":""].join(" ")}" role="dialog" aria-modal="true" aria-label="${esc(a.t)}" data-id="${esc(a.id)}" style="--rd-fs:${UI.rdFs}px">
  <div class="rd-prog"><i></i></div>
  <div class="rd-bar"><button class="rd-ib" data-act="closemodal" aria-label="Back">${RD_BACK}<span class="t">Back</span></button><div class="rd-brand">Muthaleetu <span>Thisai</span></div>
    <button class="rd-ib" data-act="rdcopy" data-id="${esc(a.id)}" aria-label="Share">${ico.share}<span class="t">Share</span></button>
    <button class="rd-ib" data-act="closemodal" aria-label="Close">${ico.x}</button></div>
  <button class="ar-set" data-act="arset" aria-label="Reading settings" aria-expanded="false">${AR_SLIDERS}</button>
  <div class="ar-pop" role="dialog" aria-label="Reading settings">
    <h5>Text size</h5><div class="seg2"><button data-act="rdfs" data-d="-1">A-</button><button data-act="arfs0">Reset</button><button data-act="rdfs" data-d="1">A+</button></div>
    <h5>Font</h5><div class="seg2" style="grid-template-columns:1fr 1fr"><button class="${UI.rdFont!=="sans"?"on":""}" data-act="arff" data-v="serif" style="font-family:Lora,serif">Serif</button><button class="${UI.rdFont==="sans"?"on":""}" data-act="arff" data-v="sans">Sans</button></div>
    <h5>Page colour</h5><div class="seg2" style="margin:0"><button class="${UI.rdTheme==="light"?"on":""}" data-act="arth" data-v="light">Light</button><button class="${UI.rdTheme==="sepia"?"on":""}" data-act="arth" data-v="sepia">Sepia</button><button class="${UI.rdTheme==="dark"?"on":""}" data-act="arth" data-v="dark">Dark</button></div>
  </div>
  <button class="ar-top-btn" data-act="artop" aria-label="Back to top">↑</button>
  <div class="ar">
    <div class="ar-top"><button class="ar-back" data-act="closemodal">← All Articles</button><span class="ar-pill">${esc(o)}</span></div>
    <h1 class="ar-t">${esc(a.t)}</h1>
    <div class="ar-meta"><span>${esc(m)}</span><span class="dot">•</span><span>${arDate(a.at)}</span><span class="dot">•</span><span>${rdMins(a)} min read</span>${r?'<span class="dot">•</span><span class="cat-chip pub-chip">From the public</span>':""}${a.removed?'<span class="status st-new">Removed by admin</span>':""}</div>
    <div class="ar-hero"><div class="ar-img"><span class="ar-tag">${esc(o)}</span>${art(a.art||"desk",a.id)}</div>
      <aside class="ar-sum"><h4>Quick summary</h4><p>${esc(a.s||"Read the full article below.")}</p>
        <div class="facts"><div><small>Read time</small><b>${rdMins(a)} min</b></div><div><small>Published</small><b>${arDate(a.at)||"Recently"}</b></div><div><small>Likes</small><b>${g}</b></div><div><small>Comments</small><b>${n}</b></div></div></aside></div>
    <div class="ar-auth">${r?`<span class="ring">${u}</span><div class="nm"><b>${esc(m)}</b><div>Public contributor</div></div>`:`<span class="ring">${u}</span><div class="nm"><b>${esc(i.display_name)} ${AR_VERIFIED}</b><div>${esc(i.title||t&&t.title||ROLE_LABEL[i.role]||"Publisher")}</div></div>${S.signedIn&&i.id!==myId()?followBtn(i.id,!0):""}<button class="ar-pbtn" data-act="pro" data-id="${i.id}">View Profile →</button>`}</div>
    <div class="ar-main"><div>
      <div class="ar-card"><div class="ar-body">${e?'<div class="skel" style="height:20px;margin:12px 0"></div><div class="skel" style="height:20px;margin:12px 0;width:94%"></div><div class="skel" style="height:20px;margin:12px 0;width:86%"></div><div class="skel" style="height:20px;margin:12px 0;width:90%"></div>':arBody(a.body)}</div>
        ${arTalk(a,i,t)}
        <hr class="ar-hr">
        <div class="ar-disc"><b>Regulatory &amp; Risk Disclaimer</b><p>Mutual fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. Information provided by Muthaleetu Thisai is solely for educational and awareness purposes and is not a recommendation to buy or sell any scheme.</p></div>
        <div class="ar-acts">${likeBtn("article",a.id)}<button class="lk" data-act="rdjump">${ico.msg}<span class="num">${n}</span> Comment${n===1?"":"s"}</button>${isAdmin()&&!a.removed?`<button class="lk" data-act="xrm" data-k="article" data-id="${esc(a.id)}">${IC.ban} Remove</button>`:""}</div>
        ${rdShare(a)}
      </div>
      <section class="ar-cmt ar-card" id="rd-cm"><h3>Comments (${n})</h3>${commentsBlock("article",a.id)}</section>
    </div>
    <aside class="ar-side">${p.length?`<div class="ar-box"><h4>More from ${esc(l.length?o:"Muthaleetu Thisai")}</h4>${p.map(s=>`<button class="ar-li" data-act="article" data-id="${esc(s.id)}"><small><b>${esc(CATS[s.c]||"Article")}</b>· ${arDate(s.at)}</small><span>${esc(s.t)}</span></button>`).join("")}<button class="ar-see" data-act="arall">See more articles →</button></div>`:""}
      ${r?"":`<div class="ar-box"><h4>About the author</h4><div style="display:flex;gap:12px;align-items:center;margin-top:14px">${avatar(i,52)}<div><b>${esc(i.display_name)}</b><br><small class="muted">${t?`${t.followers||0} followers · ${t.articles||0} articles`:esc(ROLE_LABEL[i.role]||"")}</small></div></div><p style="font-family:var(--ar-serif);color:var(--ink-2);margin:12px 0 0">${esc(t&&t.bio||"Writes about mutual funds and personal finance on Muthaleetu Thisai.")}</p></div>`}
    </aside></div>
  </div>
  ${f.length?`<section class="ar-band"><div class="hd"><div><div class="k">${esc(l.length>=2?o:"Articles")}</div><h3>Most Read in ${esc(l.length>=2?o:"Muthaleetu Thisai")}</h3></div><div style="flex:none"><button class="ar-arw" data-act="arrail" data-d="-1" aria-label="Previous">←</button><button class="ar-arw" data-act="arrail" data-d="1" aria-label="Next">→</button></div></div>
    <div class="ar-rail">${f.map(s=>`<button class="ar-mr" data-act="article" data-id="${esc(s.id)}"><div class="r1"><b>${esc(CATS[s.c]||"Article")}</b><span>${arDate(s.at)}</span></div><h4>${esc(s.t)}</h4><div class="st">${likeCount("article",s.id)} likes · ${cmFor("article",s.id).filter(c=>!c.removed).length} comments · ${rdMins(s)} min read</div><div class="go">Read Now →</div></button>`).join("")}</div></section>`:""}
  </div>`},document.addEventListener("click",a=>{const e=a.target.closest("[data-act]"),r=document.querySelector("#layer .rd");if(r&&!a.target.closest(".ar-pop")&&!a.target.closest('[data-act="arset"]')){const t=r.querySelector(".ar-pop");t&&t.classList.remove("on")}if(!e||!r||!e.closest("#layer .rd"))return;const i=e.dataset.act;if(i==="arset"){const t=r.querySelector(".ar-pop");t&&(t.classList.toggle("on"),e.setAttribute("aria-expanded",String(t.classList.contains("on"))))}if(i==="arfs0"){UI.rdFs=20;try{localStorage.setItem("mt_rdfs","20")}catch{}r.style.setProperty("--rd-fs","20px")}if(i==="arff"){UI.rdFont=e.dataset.v;try{localStorage.setItem("mt_rdff",UI.rdFont)}catch{}r.classList.toggle("ff-sans",UI.rdFont==="sans"),r.querySelectorAll('[data-act="arff"]').forEach(t=>t.classList.toggle("on",t.dataset.v===UI.rdFont))}if(i==="arth"){UI.rdTheme=e.dataset.v;try{localStorage.setItem("mt_rdth",UI.rdTheme)}catch{}r.classList.remove("th-sepia","th-dark"),UI.rdTheme!=="light"&&r.classList.add("th-"+UI.rdTheme),r.querySelectorAll('[data-act="arth"]').forEach(t=>t.classList.toggle("on",t.dataset.v===UI.rdTheme))}if(i==="artop"&&r.scrollTo({top:0,behavior:"smooth"}),i==="arrail"){const t=r.querySelector(".ar-rail");t&&t.scrollBy({left:Number(e.dataset.d)*Math.max(300,t.clientWidth*.8),behavior:"smooth"})}i==="arall"&&(closeModal(),go("articles"))}),document.addEventListener("scroll",a=>{const e=a.target;if(!e||!e.classList||!e.classList.contains("rd"))return;const r=e.querySelector(".ar-top-btn");r&&r.classList.toggle("on",e.scrollTop>600)},!0);const _articleModal17=articleModal;window.articleModal=function(a){_articleModal17(a);const e=rdFind(a);if(!e||e.body!=null)return;let r=0;const i=setInterval(()=>{r++;const t=document.querySelector("#layer .rd");if(!t||t.dataset.id!==String(e.id)||r>80){clearInterval(i);return}if(e.body!=null){clearInterval(i);const o=t.querySelector(".ar-body");o&&(o.innerHTML=arBody(e.body));const n=t.querySelector(".ar-meta");n&&(n.innerHTML=n.innerHTML.replace(/[0-9]+ min read/,rdMins(e)+" min read"))}},100)};
