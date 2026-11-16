(function(){const o=document.createElement("style");o.textContent=`
.mt-logo{display:block;overflow:hidden}
.mt-logo .ml-n,.mt-logo .ml-bar,.mt-logo .ml-coin,.mt-logo .ml-ring,.mt-logo .ml-arc,.mt-logo .ml-pt,.mt-logo .ml-txt{transform-box:view-box}
.mt-logo .ml-n{transform-origin:1000px 935px;animation:mlSwing 1.5s cubic-bezier(.3,1.6,.5,1) .35s both, mlSway 6s ease-in-out 2.2s 3}
.mt-logo .ml-bar{transform-origin:0 1130px;animation:mlGrow .7s cubic-bezier(.2,1.3,.4,1) both}
.mt-logo .ml-bar.b2{animation-delay:.12s}.mt-logo .ml-bar.b3{animation-delay:.24s}
.mt-logo .ml-coin{transform-origin:1130px 1085px;animation:mlPop .6s cubic-bezier(.2,1.6,.4,1) .9s both}
.mt-logo .ml-shine{animation:mlShine 4.5s ease-in-out 1.6s 3 forwards}
.mt-logo .ml-ring{stroke-dasharray:2700;animation:mlDraw 1.1s ease-out both}
.mt-logo .ml-arc{stroke-dasharray:800;animation:mlDraw 1.2s ease-out .2s both}
.mt-logo .ml-pt{transform-origin:1000px 935px;animation:mlFade .5s ease-out .7s both}
.mt-logo .ml-txt{animation:mlFade .8s ease-out .5s both}
.mt-logo .ml-glow{transform-origin:1000px 935px;animation:mlGlow 3.5s ease-in-out 1.8s 4 forwards}
.mt-logo:hover .ml-n,button:hover > .mt-logo .ml-n,a:hover > .mt-logo .ml-n{animation:mlSpin 1.1s cubic-bezier(.3,1.25,.5,1) both}
@keyframes mlSwing{0%{transform:rotate(-140deg);opacity:0}25%{opacity:1}100%{transform:rotate(0deg);opacity:1}}
@keyframes mlSway{0%,100%{transform:rotate(0deg)}20%{transform:rotate(-7deg)}40%{transform:rotate(4deg)}55%{transform:rotate(0deg)}}
@keyframes mlSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes mlGrow{0%{transform:scaleY(0)}100%{transform:scaleY(1)}}
@keyframes mlPop{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes mlDraw{0%{stroke-dashoffset:2700}100%{stroke-dashoffset:0}}
@keyframes mlFade{0%{opacity:0}100%{opacity:1}}
@keyframes mlShine{0%,70%{transform:translateX(-420px)}100%{transform:translateX(420px)}}
@keyframes mlGlow{0%,100%{opacity:0;transform:scale(.96)}50%{opacity:.55;transform:scale(1.02)}}
.brand .mt-logo{width:58px;height:61px;margin:0;flex:none}
.foot .mt-logo{width:84px;height:84px}
:root[data-theme="dark"] .mt-logo .ml-txt{fill:#8cc4f5}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]) .mt-logo .ml-txt{fill:#8cc4f5}}
.foot .mt-logo .ml-txt{fill:#8cc4f5}
.as-brand .mt-logo{width:84px;height:84px}
.mt-splash{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:var(--bg,#f8f7fc);transition:opacity .45s ease,visibility .45s}
.mt-splash.out{opacity:0;visibility:hidden}
.mt-splash .mt-logo{width:min(300px,62vw);height:min(300px,62vw)}
@media (max-width:640px){.brand .mt-logo{width:46px;height:48px}}
@media (prefers-reduced-motion: reduce){.mt-logo *{animation:none!important}.mt-splash{display:none}}
`,document.head.appendChild(o)})();let mlSeq=0;function mtLogo(o){const t=++mlSeq,e="mlg"+t,a="mlm"+t,r="mlc"+t,i="mlt"+t,n="mlb"+t,h="mls"+t,m="mlrb"+t,c="mlrg"+t,f="mlcl"+t,p="mlcr"+t,d="mlbg"+t,g="mlpt"+t,l="mlag"+t,x=(b,s)=>`<g class="ml-n">
      <polygon points="1345,575 932,868 1000,935" fill="${s||"#25a34a"}"/>
      <polygon points="1345,575 1000,935 1068,1002" fill="${s||"#1b8a45"}"/>
      <polygon points="645,1292 932,868 1000,935" fill="${s||"#2266b0"}"/>
      <polygon points="645,1292 1000,935 1068,1002" fill="${s||"#174f92"}"/></g>`;return`<svg class="mt-logo${o?" full":""}" viewBox="${o?"250 180 1500 1580":"460 400 1080 1080"}" role="img" aria-label="Muthaleetu Thisai logo" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${e}" gradientUnits="userSpaceOnUse" x1="640" y1="1300" x2="1360" y2="570"><stop offset="0" stop-color="#174f92"/><stop offset=".5" stop-color="#1c6aa6"/><stop offset="1" stop-color="#25a34a"/></linearGradient><linearGradient id="${m}" gradientUnits="userSpaceOnUse" x1="0" y1="500" x2="0" y2="1370"><stop offset="0" stop-color="#1d5fa6"/><stop offset="1" stop-color="#164c8c"/></linearGradient><linearGradient id="${c}" gradientUnits="userSpaceOnUse" x1="0" y1="500" x2="0" y2="1370"><stop offset="0" stop-color="#25a34a"/><stop offset=".45" stop-color="#1f9446"/><stop offset="1" stop-color="#175a94"/></linearGradient><linearGradient id="${d}" gradientUnits="userSpaceOnUse" x1="0" y1="630" x2="0" y2="1135"><stop offset="0" stop-color="#25a34a"/><stop offset=".55" stop-color="#1a7a6a"/><stop offset="1" stop-color="#174f92"/></linearGradient><linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="968" y1="0" x2="1032" y2="0"><stop offset=".5" stop-color="#1d5fa6"/><stop offset=".5" stop-color="#25a34a"/></linearGradient><linearGradient id="${l}" gradientUnits="userSpaceOnUse" x1="0" y1="740" x2="0" y2="1390"><stop offset="0" stop-color="#25a34a"/><stop offset=".5" stop-color="#1b7c6c"/><stop offset="1" stop-color="#174f92"/></linearGradient><clipPath id="${f}"><rect x="0" y="0" width="1000" height="2000"/></clipPath><clipPath id="${p}"><rect x="1000" y="0" width="1000" height="2000"/></clipPath>
    <linearGradient id="${r}" gradientUnits="userSpaceOnUse" x1="1010" y1="960" x2="1250" y2="1230"><stop offset="0" stop-color="#27a84c"/><stop offset=".6" stop-color="#16876a"/><stop offset="1" stop-color="#11695f"/></linearGradient>
    <linearGradient id="${h}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <mask id="${a}" maskUnits="userSpaceOnUse" x="0" y="0" width="2000" height="2000"><rect x="0" y="0" width="2000" height="2000" fill="#fff"/><g class="ml-n"><polygon points="1345,575 932,868 645,1292 1068,1002" fill="#000" stroke="#000" stroke-width="46" stroke-linejoin="round"/></g></mask>
    <mask id="${a}c" maskUnits="userSpaceOnUse" x="0" y="0" width="2000" height="2000"><rect x="0" y="0" width="2000" height="2000" fill="#fff"/><circle cx="1000" cy="935" r="44" fill="#000"/><text x="1130" y="1150" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="200" fill="#000">&#8377;</text></mask>
    ${o?`<path id="${i}" d="M 455 935 A 545 545 0 0 1 1545 935"/><path id="${n}" d="M 400 935 A 600 600 0 0 0 1600 935"/>`:""}
  </defs>
  <circle class="ml-glow" cx="1000" cy="935" r="470" fill="none" stroke="url(#${e})" stroke-width="10" opacity="0"/>
  <g mask="url(#${a})">
    <g clip-path="url(#${f})"><circle class="ml-ring" cx="1000" cy="935" r="425" fill="none" stroke="url(#${m})" stroke-width="58" transform="rotate(-90 1000 935)"/></g><g clip-path="url(#${p})"><circle class="ml-ring" cx="1000" cy="935" r="425" fill="none" stroke="url(#${c})" stroke-width="58" transform="rotate(-90 1000 935)"/></g>
    <g class="ml-pt">
      <polygon points="1000,428 968,492 1032,492" fill="url(#${g})"/><polygon points="1000,1442 968,1378 1032,1378" fill="#174f92"/>
      <polygon points="487,935 551,903 551,967" fill="#1d5fa6"/><polygon points="1513,935 1449,903 1449,967" fill="#22994a"/></g>
    <g fill="url(#${d})">
      <rect class="ml-bar b1" x="720" y="838" width="86" height="300"/>
      <rect class="ml-bar b2" x="834" y="734" width="86" height="400"/>
      <rect class="ml-bar b3" x="948" y="630" width="86" height="500"/></g>
    <g class="ml-coin">
      <path d="M 1084 913 A 178 178 0 1 1 953 1100" fill="none" stroke="url(#${r})" stroke-width="26" stroke-linecap="butt"/>
      <circle cx="1130" cy="1085" r="148" fill="url(#${r})" mask="url(#${a}c)"/></g>
  </g>
  <g mask="url(#${a}c)">${x()}</g>
  ${o?`<g class="ml-txt" fill="#164a8a" font-family="'Plus Jakarta Sans','Segoe UI',Arial,sans-serif" font-weight="900" letter-spacing="12">
      <text font-size="185"><textPath href="#${i}" startOffset="50%" text-anchor="middle">MUTHALEETU</textPath></text>
      <text font-size="185" dominant-baseline="hanging"><textPath href="#${n}" startOffset="50%" text-anchor="middle">THISAI</textPath></text></g>
    <path class="ml-arc" d="M 418 748 A 610 610 0 0 0 580 1378" fill="none" stroke="url(#${l})" stroke-width="34" stroke-linecap="round"/>
    <path class="ml-arc" d="M 1582 748 A 610 610 0 0 1 1420 1378" fill="none" stroke="url(#${l})" stroke-width="34" stroke-linecap="round"/>`:""}
</svg>`}function mlSwap(o){(o||document).querySelectorAll('svg[viewBox="0 0 60 60"]').forEach(t=>{if(!t.closest(".brand,.as-brand,.foot,#foot,.mast"))return;const e=document.createElement("span");e.innerHTML=mtLogo(!0),t.replaceWith(e.firstElementChild)})}new MutationObserver(o=>{for(const t of o)if(t.addedNodes.length){mlSwap();break}}).observe(document.body,{childList:!0,subtree:!0}),mlSwap(),(function(){try{const o=mtLogo(!1).replace(/class="[^"]*"/g,"").replace("<svg ",'<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" ');let t=document.querySelector('link[rel="icon"]');t||(t=document.createElement("link"),t.rel="icon",document.head.appendChild(t)),t.type="image/svg+xml",t.href="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(o)}catch{}})(),(function(){try{if(sessionStorage.getItem("mt_splash"))return;sessionStorage.setItem("mt_splash","1")}catch{return}if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=document.createElement("div");o.className="mt-splash",o.setAttribute("aria-hidden","true"),o.innerHTML=mtLogo(!0),document.body.appendChild(o);const t=()=>{o.classList.add("out"),setTimeout(()=>o.remove(),500)};setTimeout(t,2e3),o.addEventListener("click",t)})();
