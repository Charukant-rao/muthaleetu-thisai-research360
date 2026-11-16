/* /js/app38.js */
try{
(function(){const r=ensureCalc;let n=!1;window.ensureCalc=function(){return calcUrl?!0:window.__CALC_B64?r():(n||(n=!0,fetch("/premium-suite",{cache:"no-cache"}).then(e=>{if(!e.ok)throw new Error("missing");return e.text()}).then(e=>{if(e.length<1e4||e.indexOf("<html")<0)throw new Error("bad");mountSuite(e)}).catch(()=>{r()}).finally(()=>{n=!1})),!0)}})();

}catch(e){setTimeout(function(){throw e})}
/* /js/app39.js */
try{
(function(){const s=document.createElement("style");s.textContent=`
.mast{position:sticky;top:0;z-index:45;background:var(--surface)!important}
.nav{background:var(--surface)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.nav{top:var(--mast-h,0px)!important}
body.mt-sc .mast{box-shadow:0 6px 18px rgba(15,23,42,.08)}
.preview,.filters{top:calc(var(--hdr-h,64px) + 12px)!important}
.prem-side{top:calc(var(--hdr-h,64px) + 10px)!important;max-height:calc(100vh - var(--hdr-h,64px) - 20px)!important}
.ar-side,.pc-sum{top:calc(var(--hdr-h,64px) + 12px)!important}
.mm-bulk{top:calc(var(--hdr-h,64px) + 8px)!important}
html{scroll-padding-top:calc(var(--hdr-h,64px) + 8px)}
`,document.head.appendChild(s);const n=document.documentElement;function o(){const t=document.getElementById("mast"),r=document.querySelector(".nav"),e=t?t.offsetHeight:0,p=r?r.offsetHeight:0;n.style.getPropertyValue("--mast-h")!==e+"px"&&n.style.setProperty("--mast-h",e+"px"),n.style.getPropertyValue("--hdr-h")!==e+p+"px"&&n.style.setProperty("--hdr-h",e+p+"px")}let a=!1;function c(){const t=window.scrollY||0;!a&&t>70?(a=!0,document.body.classList.add("mt-sc"),o()):a&&t<12&&(a=!1,document.body.classList.remove("mt-sc"),o())}window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",o);try{const t=new ResizeObserver(o),r=document.getElementById("mast"),e=document.querySelector(".nav");r&&t.observe(r),e&&t.observe(e)}catch{}o(),c()})();

}catch(e){setTimeout(function(){throw e})}