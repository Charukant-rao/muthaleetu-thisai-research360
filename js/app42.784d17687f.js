(function(){const t=document.createElement("style");t.textContent=`
.pf-bar{display:none}
body.mt-pfull{overflow:hidden}
body.mt-pfull #calcHost{position:fixed;inset:0;z-index:60;padding:0;display:flex;flex-direction:column;background:var(--bg)}
body.mt-pfull #calcHost .pf-bar{display:flex;align-items:center;gap:12px;height:58px;padding:0 16px;background:var(--surface);border-bottom:1px solid var(--line);flex:none}
.pf-bar .pf-logo{display:flex;align-items:center;gap:10px;border:0;background:none;cursor:pointer;padding:0;color:var(--ink)}
.pf-bar .pf-logo .mt-logo{width:36px;height:36px}
.pf-bar .pf-crown{display:inline-flex;gap:6px;align-items:center;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#8a6a10;background:rgba(212,160,23,.16);padding:5px 10px;border-radius:999px}
.pf-bar .pf-crown svg{width:14px;height:14px}
.pf-bar .pf-title{font-weight:800;font-size:16px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.pf-bar .pf-sp{flex:1}
.pf-bar .btn{border-radius:10px;padding:8px 14px;font-size:13.5px;white-space:nowrap}
body.mt-pfull #calcHost > .prem-grid{flex:1;min-height:0;max-width:none;width:100%;margin:0;padding:12px;gap:12px;align-items:stretch}
body.mt-pfull .prem-side{position:static!important;top:auto!important;max-height:none!important;height:100%;overflow:auto}
body.mt-pfull .prem-main{height:100%;min-height:0}
body.mt-pfull #calcFrame{height:100%!important;min-height:0;border-radius:12px}
@media (max-width:1000px){
 body.mt-pfull #calcHost > .prem-grid{grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr);padding:8px;gap:8px}
 body.mt-pfull .prem-side{height:auto;overflow-x:auto;overflow-y:hidden}
}
@media (max-width:640px){
 body.mt-pfull #calcHost .pf-bar{height:52px;padding:0 10px;gap:8px}
 .pf-bar .pf-crown,.pf-bar .pf-new{display:none!important}
 .pf-bar .pf-title{font-size:14.5px}
 body.mt-pfull #calcHost > .prem-grid{padding:6px}
 body.mt-pfull #calcFrame{border-radius:10px}
}
`,document.head.appendChild(t)})();const PF_IC={back:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',ext:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>'};function pfTitle(){try{return premItem(UI.prem)[1]}catch{return"Planning suite"}}function pfBar(){const t=document.getElementById("calcHost");if(!t)return;let e=t.querySelector(".pf-bar");e||(e=document.createElement("div"),e.className="pf-bar",e.innerHTML=`<button class="pf-logo" data-act="go" data-r="home" aria-label="Muthaleetu Thisai home">${typeof mtLogo=="function"?mtLogo(!1):""}</button>
      <span class="pf-crown">${ico.shield} Premium Access</span><span class="pf-title" id="pfTitle"></span><span class="pf-sp"></span>
      <button class="btn btn-ghost pf-new" data-act="calcfull">${PF_IC.ext} Open in new tab</button>
      <button class="btn btn-o pf-exit" data-act="go" data-r="home">${PF_IC.back} Exit</button>`,t.insertBefore(e,t.firstChild));const n=document.getElementById("pfTitle");n&&(n.textContent=pfTitle())}function pfSync(){const t=document.getElementById("calcHost"),e=!!t&&!t.hidden&&UI.route==="premium"&&!UI.pubPage;document.body.classList.toggle("mt-pfull",e),e&&pfBar()}(function(){const t=render;window.render=function(){const e=t.apply(this,arguments);return pfSync(),e},document.addEventListener("click",e=>{e.target.closest&&e.target.closest('[data-act="premgo"]')&&setTimeout(pfBar,0)}),window.addEventListener("hashchange",()=>setTimeout(pfSync,0)),pfSync()})(),(function(){const t={"Open in new tab":"புதிய தாவலில் திற",Exit:"வெளியேறு"};window.MT_TA_EXTRA?Object.assign(window.MT_TA_EXTRA,t):window.MT_TA_EXTRA=t,window.MT_TA_DICT&&Object.keys(t).forEach(e=>{e in window.MT_TA_DICT||(window.MT_TA_DICT[e]=t[e])})})();
