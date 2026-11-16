/* /js/app113.js */
try{
(function(){const p="2026-12-31",s=()=>new Date(Date.now()+198e5).toISOString().slice(0,10),n=(t,e)=>typeof S<"u"&&S.lang==="ta"?e:t,o=document.createElement("style");o.textContent=`
#ptry{display:none;background:linear-gradient(90deg,#0b4a8b,#0060AA 55%,#3f8f2e);color:#fff}
#ptry.on{display:block}
#ptry .wrap{display:flex;align-items:center;gap:12px;min-height:46px;padding-top:6px;padding-bottom:6px}
#ptry .pt-go{flex:1;min-width:0;display:flex;align-items:center;gap:10px;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer;padding:0}
#ptry .pt-ic{flex:0 0 auto;width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
#ptry .pt-ic svg{width:17px;height:17px}
#ptry .pt-t{min-width:0;font-size:14.5px;line-height:1.3}
#ptry .pt-t b{font-weight:800}
#ptry .pt-free{display:inline-block;margin-left:6px;font-size:12px;font-weight:800;background:#fde68a;color:#7a4b00;border-radius:999px;padding:2px 9px;vertical-align:1px;white-space:nowrap}
#ptry .pt-btn{flex:0 0 auto;margin-left:auto;display:inline-flex;align-items:center;gap:6px;background:#fff;color:#0b4a8b;border-radius:10px;padding:7px 14px;font-weight:800;font-size:13.5px;white-space:nowrap}
#ptry .pt-btn svg{width:15px;height:15px}
#ptry .pt-x{flex:0 0 auto;width:30px;height:30px;border:0;border-radius:8px;background:transparent;color:#fff;font-size:20px;line-height:1;cursor:pointer;opacity:.8}
#ptry .pt-x:hover{opacity:1;background:rgba(255,255,255,.14)}
#ptry .pt-go:hover .pt-btn{filter:brightness(.95)}
@media(max-width:640px){#ptry .wrap{gap:8px}#ptry .pt-ic{display:none}#ptry .pt-t{font-size:13px}#ptry .pt-d{display:none}#ptry .pt-free{display:block;width:max-content;margin:3px 0 0}#ptry .pt-btn{padding:6px 10px;font-size:12.5px}}`,document.head.appendChild(o);let a=!1;try{a=sessionStorage.getItem("mt_ptry_x")==="1"}catch{}function l(){let t=document.getElementById("ptry");if(t)return t;const e=document.getElementById("main");return e?(t=document.createElement("div"),t.id="ptry",t.setAttribute("data-notr","1"),t.setAttribute("role","region"),t.setAttribute("aria-label","Premium Calculators"),e.parentNode.insertBefore(t,e),t):null}function r(){const t=l();if(!t)return;const e=!a&&s()<=p&&!(UI.route==="calculator"&&UI.calcTab==="pro")&&UI.route!=="admin"&&!document.body.classList.contains("pcx-on");if(t.classList.toggle("on",e),!e)return;const i=(S.lang||"")+"|"+(S.signedIn?1:0);t.dataset.k!==i&&(t.dataset.k=i,t.innerHTML=`<div class="wrap"><button type="button" class="pt-go" data-ptry="go">
        <span class="pt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/></svg></span>
        <span class="pt-t"><b>${n("Try Premium Calculators","பிரீமியம் கால்குலேட்டர்களை முயற்சி செய்யுங்கள்")}</b><span class="pt-d"> – ${n("client plans, 30+ calculators, loan planner","வாடிக்கையாளர் திட்டங்கள், 30+ கால்குலேட்டர்கள், கடன் திட்டமிடல்")}</span><span class="pt-free">${n("FREE till 31 Dec 2026","31 டிச 2026 வரை இலவசம்")}</span></span>
        <span class="pt-btn">${S.signedIn?n("Try now","முயற்சி செய்"):n("Sign in & try","உள்நுழைந்து முயல்")}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></span></button>
      <button type="button" class="pt-x" data-ptry="x" aria-label="${n("Hide","மறை")}" title="${n("Hide","மறை")}">×</button></div>`)}document.addEventListener("click",t=>{const e=t.target.closest&&t.target.closest("[data-ptry]");if(e){if(t.preventDefault(),e.dataset.ptry==="x"){a=!0;try{sessionStorage.setItem("mt_ptry_x","1")}catch{}r();return}UI.calcTab="pro",go("calculator"),S.signedIn&&typeof pcOpen=="function"&&pcOpen("")}});const c=render;window.render=function(){const t=c.apply(this,arguments);try{r()}catch{}return t},new MutationObserver(()=>{try{r()}catch{}}).observe(document.body,{attributes:!0,attributeFilter:["class"]});try{r()}catch{}})();

}catch(e){setTimeout(function(){throw e})}
/* /js/app114.js */
try{
(function(){if(typeof pageCalc!="function")return;const o=(a,r)=>typeof S<"u"&&S.lang==="ta"?r:a,e=document.createElement("style");e.textContent=`
.cg-sw{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:18px 0 6px;max-width:820px}
.cg-b{display:flex;align-items:center;gap:12px;text-align:left;border:1.5px solid var(--line);background:var(--surface,#fff);border-radius:16px;padding:14px 16px;font:inherit;color:var(--ink);cursor:pointer;transition:box-shadow .15s,border-color .15s}
.cg-b .i{flex:0 0 auto;width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center}
.cg-b .i svg{width:22px;height:22px}
.cg-b b{display:block;font-size:16px;line-height:1.2}.cg-b small{display:block;font-size:12.5px;color:var(--muted);margin-top:2px}
.cg-b.free .i{color:var(--primary,#2563eb);background:color-mix(in srgb,var(--primary,#2563eb) 11%,var(--surface,#fff))}
.cg-b.free.on{border-color:var(--primary,#2563eb);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary,#2563eb) 18%,transparent)}
.cg-b.gold{border-color:#e7c766;background:linear-gradient(135deg,#fff8e1,#fdecb4)}
.cg-b.gold .i{color:#fff;background:linear-gradient(135deg,#e9b93a,#b8860b)}
.cg-b.gold b{color:#7a5400}.cg-b.gold small{color:#8a6a1f}
.cg-b.gold .tag{display:inline-block;margin-top:6px;font-size:11px;font-weight:800;color:#5a3d00;background:#f6d365;border-radius:999px;padding:3px 9px;white-space:nowrap}
.cg-b.gold.on{border-color:#c9971c;background:linear-gradient(135deg,#f8d977,#d4a017);box-shadow:0 0 0 3px rgba(212,160,23,.28)}
.cg-b.gold.on b,.cg-b.gold.on small{color:#3d2a00}.cg-b.gold.on .tag{background:#fff;color:#7a5400}
.cg-b:hover{box-shadow:0 4px 14px rgba(15,23,42,.08)}
html[data-theme="dark"] .cg-b.gold:not(.on){background:linear-gradient(135deg,#3a2c0a,#4a3810);border-color:#8a6a1f}
html[data-theme="dark"] .cg-b.gold:not(.on) b{color:#f6d365}html[data-theme="dark"] .cg-b.gold:not(.on) small{color:#e3c77a}
.cg-free .ptabs{margin-top:10px!important}
/* gold Premium panel */
.pc-hero{background:linear-gradient(135deg,#3b2a05,#7a5a10 50%,#c9971c)!important}
.pc-tag{background:rgba(246,211,101,.22)!important;border-color:rgba(246,211,101,.6)!important;color:#fde68a}
.pc-go{background:linear-gradient(135deg,#f8d977,#e0ad2a)!important;color:#3d2a00!important}
.pc-tile .i{color:#a87a0c!important;background:#fdf1cc!important}
.pc-tile:hover{border-color:#d4a017!important}
/* the Try Premium banner in gold too */
#ptry{background:linear-gradient(90deg,#3b2a05,#7a5a10 45%,#c9971c)!important}#ptry .pt-btn{background:linear-gradient(135deg,#f8d977,#e0ad2a)!important;color:#3d2a00!important}#ptry .pt-ic{background:rgba(246,211,101,.25)!important;color:#fde68a}
html[data-theme="dark"] .pc-tile .i{background:#3a2c0a!important;color:#f6d365!important}
@media(max-width:560px){.cg-sw{gap:8px}.cg-b{padding:10px;gap:8px;flex-direction:column;align-items:flex-start}.cg-b .i{width:34px;height:34px}.cg-b b{font-size:14.5px}.cg-b small{display:none}}`,document.head.appendChild(e);const n=a=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`,l=pageCalc;window.pageCalc=function(){const a=UI.calcTab==="pro";!a&&UI.calcTab&&(UI.cgFree=UI.calcTab);let r=l.apply(this,arguments);const t=r.indexOf('<div class="ptabs" role="tablist"');if(t<0)return r;const c=r.indexOf("</div>",t)+6,i=r.slice(t,c).replace(/<button[^>]*data-v="pro"[^>]*>[\s\S]*?<\/button>/,""),d=`<div class="cg-sw" role="tablist" data-notr>
      <button type="button" role="tab" aria-selected="${!a}" class="cg-b free${a?"":" on"}" data-cg="free"><span class="i">${n('<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/>')}</span><span><b>${o("Free Calculators","இலவசக் கால்குலேட்டர்கள்")}</b><small>${o("SIP, lumpsum, goals, SWP and risk quiz","SIP, மொத்தத் தொகை, இலக்கு, SWP, ரிஸ்க் கேள்விகள்")}</small></span></button>
      <button type="button" role="tab" aria-selected="${a}" class="cg-b gold${a?" on":""}" data-act="qctab" data-v="pro"><span class="i">${n('<path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5z"/>')}</span><span><b>${o("Premium Calculators","பிரீமியம் கால்குலேட்டர்கள்")}</b><small>${o("Client plans, 30+ calculators, loan planner","வாடிக்கையாளர் திட்டங்கள், 30+ கால்குலேட்டர்கள், கடன் திட்டமிடல்")}</small><span class="tag">${o("FREE till 31 Dec 2026","31 டிச 2026 வரை இலவசம்")}</span></span></button></div>`;return r.slice(0,t)+d+(a?"":`<div class="cg-free">${i}</div>`)+r.slice(c)},document.addEventListener("click",a=>{a.target.closest&&a.target.closest('[data-cg="free"]')&&(a.preventDefault(),UI.calcTab=UI.cgFree||"quick",render())})})();

}catch(e){setTimeout(function(){throw e})}