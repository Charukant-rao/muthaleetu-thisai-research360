(function(){const e=document.createElement("style");e.textContent=`
.ad-band{margin:-22px auto 26px!important;position:relative}
.adb-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}
.ad-band .adb-grid .adr{max-width:none;margin:0;height:100%;padding:10px;gap:12px}
.ad-band .adb-grid .adr .ad-th{flex-basis:92px;width:92px;height:92px}
.ad-band .adb-grid .adr .ad-tt{font-size:15px}
.ad-band .adb-grid .adr .ad-cta{margin-top:6px}
.ad-band .adb-grid .adr .ad-risk{font-size:10.5px}
.ta-big .ax-cover{aspect-ratio:2 / 1!important}
.ta-row.rx-new .rk{font-family:inherit;font-size:10.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.ta-list .rx-ad{margin:0!important;padding:0!important;max-width:none}
.ta-list .rx-ad .adr{max-width:none;margin:0;padding:10px}
.ta-list .rx-ad .adr .ad-th{flex-basis:76px;width:76px;height:76px}
.rx{display:flex;flex-direction:column;gap:14px}
.rx-box{border:1px solid var(--line);border-radius:16px;background:var(--surface);padding:14px}
.rx-box h3{font-size:15px;margin:0 0 10px;display:flex;align-items:center;gap:8px}
.rx-it{display:grid;grid-template-columns:22px 56px minmax(0,1fr);gap:10px;align-items:center;padding:8px 0;border-top:1px solid var(--line);width:100%;text-align:left;background:none;border-left:0;border-right:0;border-bottom:0;color:inherit;cursor:pointer;font:inherit}
.rx-it:first-of-type{border-top:0;padding-top:0}
.rx-it .n{font-weight:800;color:var(--accent);font-size:15px;text-align:center}
.rx-it .t{position:relative;width:56px;height:40px;border-radius:8px;overflow:hidden;background:var(--surface-3)}
.rx-it .t .art{position:absolute;inset:0;width:100%;height:100%!important;border-radius:0!important}
.rx-it .t .art img{width:100%;height:100%;object-fit:cover}
.rx-it b{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:13.5px;line-height:1.3}
.rx-it small{color:var(--muted);font-size:12px}
.rx-pub{display:flex;gap:10px;align-items:center;padding:8px 0;border-top:1px solid var(--line)}
.rx-pub:first-of-type{border-top:0;padding-top:0}
.rx-pub > button{flex:1;min-width:0;text-align:left;background:none;border:0;padding:0;color:inherit;cursor:pointer;font:inherit}
.rx-pub small{color:var(--muted);font-size:12px}
.rx-tool{display:flex;gap:10px;align-items:center;width:100%;padding:9px 10px;border-radius:12px;border:1px solid var(--line);background:var(--surface);color:inherit;cursor:pointer;text-align:left;font:inherit;margin-top:8px}
.rx-tool:first-of-type{margin-top:0}
.rx-tool:hover{border-color:var(--primary)}
.rx-tool .ic{flex:0 0 34px;height:34px;border-radius:10px;display:grid;place-items:center;background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary)}
.rx-tool .ic svg{width:18px;height:18px}
.rx-tool b{display:block;font-size:13.5px}
.rx-tool small{display:block;color:var(--muted);font-size:12px}
.rx-cta{border-radius:16px;padding:16px;background:linear-gradient(135deg,#1e1b4b,#3730a3);color:#fff}
.rx-cta b{display:block;font-size:15.5px;margin-bottom:4px}
.rx-cta p{margin:0 0 12px;font-size:13px;opacity:.85;line-height:1.45}
.rx .rx-ad{margin:0!important;padding:0!important;max-width:none}
.rx .rx-ad .adr{max-width:none;margin:0;padding:10px;gap:12px}.rx .rx-ad .adr .ad-th{flex-basis:76px;width:76px;height:76px}.rx .rx-ad .adr .ad-tt{font-size:14.5px}.rx .rx-ad .adr .ad-risk{font-size:10.5px}
.feedgrid > aside{position:sticky;top:84px}
.pp-grid{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:28px;align-items:start}
.pp-grid > aside{position:sticky;top:84px}
@media (max-width:980px){.pp-grid{grid-template-columns:1fr}.pp-grid > aside,.feedgrid > aside{position:static}.feedgrid > aside .rx-more{display:none}}
@media (max-width:700px){.adb-grid > :nth-child(n+2){display:none}.ad-band{margin:-26px auto 22px!important}.ta-big .ax-cover{aspect-ratio:16 / 9!important}}
`,document.head.appendChild(e)})();const RX_IC={calc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8"/></svg>',quiz:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></svg>'};function rxTools(){return`<div class="rx-box rx-more"><h3>Free tools</h3>
    <button class="rx-tool" data-act="go" data-r="calculator"><span class="ic">${RX_IC.calc}</span><span><b>SIP return calculator</b><small>See how a monthly SIP can grow</small></span></button>
    <button class="rx-tool" data-act="go" data-r="quiz"><span class="ic">${RX_IC.quiz}</span><span><b>Know your risk profile</b><small>Six quick questions</small></span></button>
    <button class="rx-tool" data-act="go" data-r="distributors"><span class="ic">${RX_IC.pin}</span><span><b>Find a Distributor</b><small>Search by name, ARN or city</small></span></button></div>`}function rxTrending(e){let a=[];try{a=(typeof trArticles=="function"?trArticles():pubArticles()).slice(0,e||4)}catch{a=[]}if(!a.length)return"";const t=r=>r.source==="public"?r.contributor||"Reader":typeof author=="function"&&author(r.author).display_name||"";return`<div class="rx-box rx-more"><h3>Trending articles</h3>${a.map((r,o)=>`<button class="rx-it" data-act="article" data-id="${esc(r.id)}"><span class="n">${o+1}</span><span class="t">${art(r.art||"desk",r.id)}</span><span style="min-width:0"><b data-notr>${esc(r.t)}</b><small data-notr>${esc(t(r))}</small></span></button>`).join("")}</div>`}function rxPubs(e){let a=[];try{a=(typeof trPublishers=="function"?trPublishers():DB.pubs||[]).filter(t=>t.id!==myId()).slice(0,e||4)}catch{a=[]}return a.length?`<div class="rx-box"><h3>Publishers to follow</h3>${a.map(t=>`<div class="rx-pub">${avatar(t,36)}<button data-act="pro" data-id="${esc(t.id)}"><b>${esc(t.display_name)}</b><br><small>${Number(t.followers||0)} followers · ${Number(t.articles||0)} articles</small></button>${S.signedIn?followBtn(t.id,!0):""}</div>`).join("")}<button class="btn btn-ghost btn-sm" style="width:100%;margin-top:10px" data-act="go" data-r="publishers">See all publishers</button></div>`:""}function rxAd(e,a){try{if(typeof adFor!="function")return"";const t=adFor(e);if(!t.length)return"";const r=t[(a||0)%t.length];return`<div class="ad-band rx-ad">${adRowHtml(r)}</div>`}catch{return""}}function rxDistCta(){return`<div class="rx-cta rx-more"><b>Looking for a mutual fund distributor?</b><p>Find AMFI registered distributors near you and call or WhatsApp them directly.</p><button class="btn btn-sm" style="background:#fde68a;color:#3b2a00;border:0" data-act="go" data-r="distributors">Find a Distributor ${ico.arrow||""}</button></div>`}(function(){if(typeof trArtSec!="function")return;const e=trArtSec;window.trArtSec=function(){const t=e.apply(this,arguments);let r=[];try{r=trArticles()}catch{}if(!r.length||t.indexOf('<div class="ta-list">')<0)return t;const o=5,s=r.length-1;let d="";if(s<o){const c=new Set(r.map(i=>i.id)),n=pubArticles().filter(i=>!c.has(i.id)).sort((i,u)=>new Date(u.at||0)-new Date(i.at||0)).slice(0,o-s),x=i=>i.source==="public"?i.contributor||"Reader":author(i.author).display_name;d=n.map(i=>`<div class="ta-row rx-new"><span class="rk">New</span><button class="th" data-act="article" data-id="${esc(i.id)}" aria-label="Read ${esc(i.t)}">${art(i.art||"desk",i.id)}</button><div style="min-width:0"><h4><button data-act="article" data-id="${esc(i.id)}" data-notr>${esc(i.t)}</button></h4><div class="mt"><span data-notr>${esc(x(i))}</span><span>${ago(i.at)}</span></div></div></div>`).join(""),s+n.length<3&&(d+=a())}const l=t.lastIndexOf('<button class="btn btn-ghost" data-act="go" data-r="articles">Browse all articles');if(l>0)return t.slice(0,l)+d+t.slice(l);const p=t.lastIndexOf("</div></div></div></section>");return p>0?t.slice(0,p)+d+t.slice(p):t};function a(){try{const t=adFor("home");return t.length?`<div class="ad-band rx-ad">${adRowHtml(t[t.length-1])}</div>`:""}catch{return""}}})(),(function(){const e=pageHome;window.pageHome=function(){const a=e.apply(this,arguments);if((UI.route||"home")!=="home")return a;const t=a.indexOf('data-r="publishers">See all publishers</button></aside>');if(t<0)return a;const r=a.indexOf("</aside>",t);return a.slice(0,r)+`<div class="rx" style="margin-top:16px">${rxDistCta()}${rxAd("home",1)}</div>`+a.slice(r)}})(),(function(){const e=pagePosts;window.pagePosts=function(){const a=e.apply(this,arguments),t='<div class="page"><div class="wrap" style="max-width:860px">';return a.indexOf(t)!==0?a:`<div class="page"><div class="wrap"><div class="pp-grid"><div style="min-width:0">${a.slice(t.length,a.lastIndexOf("</div></div>"))}</div><aside class="rx">${rxPubs(4)}${rxAd("posts",0)}${rxTrending(4)}${rxTools()}</aside></div></div></div>`}})(),(function(){if(typeof adFill!="function")return;const e=adFill;window.adFill=function(){const a=e.apply(this,arguments);try{const t=document.getElementById("main");if(!t)return a;const r=[...t.querySelectorAll(":scope > .ad-band")];if(!r.length)return a;const o=adFor(UI.route||"home");if(!o.length)return a;const s=Math.min(3,o.length);r.forEach((d,l)=>{const p=o.map(n=>n.id).join(",")+"|"+l+"|"+s;if(d.dataset.rx===p)return;const c=[];for(let n=0;n<s;n++)c.push(o[(l*s+n+1)%o.length]);d.innerHTML=`<div class="adb-grid">${c.map(n=>adRowHtml(n)).join("")}</div>`,d.dataset.rx=p,c.forEach(n=>{try{adView(n)}catch{}})})}catch{}return a}})();
