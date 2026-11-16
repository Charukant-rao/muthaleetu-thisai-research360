(function(){if(!(typeof MT_THEMES>"u")){MT_THEMES.some(a=>a.id==="diwali")||MT_THEMES.push({id:"diwali",name:"Diwali 2026",desc:"Festive look for Deepavali: night-sky navy header with gold sparkles, marigold garland, glowing diyas and saffron buttons."});try{localStorage.getItem("mt_site_theme")==="diwali"&&mtThemeApply("diwali")}catch{}}})(),(function(){const a='html[data-mt="diwali"]',e=(i,d)=>`${i}[data-theme="dark"]{${d}}@media (prefers-color-scheme: dark){${i}:not([data-theme="light"]){${d}}}`,t=(i,d,c)=>`${i}[data-theme="dark"] ${d}{${c}}@media (prefers-color-scheme: dark){${i}:not([data-theme="light"]) ${d}{${c}}}`,r="radial-gradient(1.5px 1.5px at 12% 30%,#ffe9a8 50%,transparent 51%),radial-gradient(1.5px 1.5px at 28% 70%,#fff 50%,transparent 51%),radial-gradient(2px 2px at 46% 22%,#ffd166 50%,transparent 51%),radial-gradient(1.5px 1.5px at 63% 64%,#fff 50%,transparent 51%),radial-gradient(2px 2px at 78% 28%,#ffe9a8 50%,transparent 51%),radial-gradient(1.5px 1.5px at 91% 72%,#ffd166 50%,transparent 51%)",n="linear-gradient(120deg,#0b1f45 0%,#174f92 48%,#3b1a5c 100%)",f=`
${a}{--bg:#fff8ec;--surface:#fffdf8;--surface-2:#fff9ef;--surface-3:#fdf0d9;--line:#f0dcb8;--line-warm:#f0dcb8;--ink:#1d1630;--ink-2:#43385a;--muted:#7a6b5d;--chip:#fdf0d9;--chip-ink:#6b3a0b;
  --navy:#174f92;--navy-2:#1d5fa6;--primary:#174f92;--primary-2:#123f75;--primary-soft:#fdf0d9;--blue:#1d5fa6;--accent:#e8590c;--accent-2:#c2410c;--accent-soft:#fff1e0;--accent-ink:#b4460a;--active:#e8590c;--teal-2:#e8590c;
  --info-bg:#fff1e0;--info-ink:#8a3a06;--gold:#d99a00;--gold-2:#ffd166;--gold-soft:#fff3d1;--footer:#1a0f2e;--teal:#1a0f2e;--card-dark:#2a1440;
  --shadow:0 1px 2px rgba(120,60,0,.05),0 10px 26px rgba(160,90,0,.09);--shadow-lg:0 26px 60px rgba(60,20,60,.25);--r-lg:18px;--r-md:12px;
  --mt-name1:#174f92;--mt-name2:#25a34a;--mt-em:#e8590c;
  --mt-hero:${n};--mt-foot:linear-gradient(160deg,#0b1f45,#1a0f2e 55%,#3b1a5c);
  --mt-btn:linear-gradient(135deg,#f08c00,#d9480f);--mt-btn-h:linear-gradient(135deg,#d9480f,#b03a0c);--mt-btn-sh:0 8px 20px rgba(217,72,15,.28);--mt-pill:rgba(255,209,102,.22);--mt-cta:linear-gradient(135deg,#ffd166,#f59f00);
  --f-serif:"Fraunces",Georgia,serif}
${e(a,"--bg:#0c0a18;--surface:#161228;--surface-2:#120f22;--surface-3:#1f1a36;--line:#2e2748;--line-warm:#2e2748;--ink:#f5efe2;--ink-2:#d9cfbd;--muted:#a597b8;--chip:#1f1a36;--chip-ink:#ffd98a;--navy:#1d5fa6;--navy-2:#2a6fb8;--primary:#8cc4f5;--primary-2:#6aaeea;--primary-soft:#1f1a36;--blue:#8cc4f5;--accent:#ffb627;--accent-2:#f59f00;--accent-soft:#2a1f12;--accent-ink:#ffd166;--active:#ffb627;--teal-2:#ffb627;--info-bg:#2a1f12;--info-ink:#ffd166;--gold:#ffb627;--gold-2:#ffd166;--gold-soft:#2a1f12;--footer:#07050f;--teal:#07050f;--card-dark:#161228;--mt-name1:#8cc4f5;--mt-name2:#3ccf6a;--mt-em:#ffb627;--mt-foot:linear-gradient(160deg,#07122a,#07050f 55%,#1f0d33);--mt-btn:linear-gradient(135deg,#ffb627,#f08c00);--mt-btn-h:linear-gradient(135deg,#f08c00,#d9480f);--mt-btn-sh:0 8px 20px rgba(255,182,39,.20);")}
${a} body{background:radial-gradient(900px 420px at 100% 0%,rgba(255,182,39,.10),transparent 60%),radial-gradient(800px 420px at 0% 30%,rgba(232,89,12,.06),transparent 60%),var(--bg);background-attachment:fixed}
${a} .mast{background:${r},${n}!important;border-bottom:0}
${a} .mast .brand-name{color:#cfe6fb!important}
${a} .mast .brand-name span{color:#7be39c!important}
${a} .mast .brand-sub{color:#ffe2a3!important}
${a} .mast .icon-btn,${a} .mast .lang,${a} .mast .seg,${a} .mast .search-in,${a} .mast .uc,${a} .mast .mast-r > button:not(.btn-red){background:rgba(255,255,255,.12)!important;border-color:rgba(255,209,102,.35)!important;color:#fff!important}
${a} .mast .brand svg,${a} .mast .brand .mt-logo,${a} .mast .brand img{background:#fff;border-radius:50%;box-shadow:0 0 0 3px rgba(255,209,102,.55),0 0 18px rgba(255,182,39,.55)}
${a} .mast .seg button:not(.on),${a} .mast .lang button:not(.on){color:#fff!important}
${a} .mast .search-in input{color:#fff}
${a} .mast .search-in input::placeholder{color:rgba(255,255,255,.7)}
${a} .mast .uc *{color:#fff!important}
${a} .nav{background:radial-gradient(circle at 12px 1px,#ffb627 0 6px,#e8590c 6px 8px,transparent 8.5px) 0 100%/24px 13px repeat-x,linear-gradient(var(--bg),var(--bg)) 0 100%/100% 13px no-repeat,linear-gradient(90deg,#5a1236,#7a1d3b 50%,#5a1236)!important;border-bottom:0;padding-bottom:13px;backdrop-filter:none}
${a} .nav a{color:#ffe9c2!important}
${a} .nav a:hover{background:rgba(255,209,102,.16)!important;color:#fff!important}
${a} .nav a.on{background:linear-gradient(135deg,#ffd166,#f59f00)!important;color:#3a1505!important}
${a} .hero2{background:${r},${n};border-radius:26px;margin:30px auto 0;max-width:1248px;padding:44px 0!important;box-shadow:var(--shadow-lg);position:relative;overflow:hidden}
${a} .hero2::after{content:"";position:absolute;right:-60px;top:-60px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(255,209,102,.45),rgba(255,182,39,.12) 45%,transparent 70%);pointer-events:none}
${a} .hero2 h1,${a} .hero2 h1 *{color:#fff!important}
${a} .hero2 h1 em{color:#ffd166!important}
${a} .hero2 p{color:rgba(255,255,255,.86)!important}
${a} .hero2 .btn-ghost,${a} .hero2 .btn:not(.btn-o){background:rgba(255,255,255,.12)!important;color:#fff!important;border-color:rgba(255,209,102,.4)!important}
${a} .card,${a} .ta-big,${a} .ta-row,${a} .post,${a} .rx-box,${a} .tool{border-color:#f0dcb8}
${a} .rx-box,${a} .tool{border-top:3px solid #ffb627}
${a} .sec-h h2{font-weight:800}
${a} .sec-h h2 em{font-style:normal;background:linear-gradient(90deg,#e8590c,#d99a00);-webkit-background-clip:text;background-clip:text;color:transparent!important}
${a} .sec-h h2::after{content:" ✦";color:#ffb627;font-size:.7em;vertical-align:middle}
${a} .tr-fire{color:#e8590c}
${a} .foot{border-top:4px solid #ffb627}
${t(a,".nav","background:radial-gradient(circle at 12px 1px,#ffb627 0 6px,#e8590c 6px 8px,transparent 8.5px) 0 100%/24px 13px repeat-x,linear-gradient(var(--bg),var(--bg)) 0 100%/100% 13px no-repeat,linear-gradient(90deg,#2e0a1e,#43112b 50%,#2e0a1e)!important")}
${t(a,".mast","background:"+r+",linear-gradient(120deg,#050d22,#0b2546 48%,#1f0d33)!important")}
${t(a,".sec-h h2 em","background:linear-gradient(90deg,#ffb627,#ffd166);-webkit-background-clip:text;background-clip:text")}
${[".card",".ta-big",".ta-row",".post",".rx-box",".tool"].map(i=>t(a,i,"border-color:#2e2748")).join("")}
${t(a,".rx-box","border-top-color:#ffb627")}${t(a,".tool","border-top-color:#ffb627")}
@media (max-width:700px){${a} .hero2{border-radius:0;margin-top:0}}

/* ---- festive greeting strip ---- */
#mtDiwali{display:none}
${a} #mtDiwali{display:block;background:linear-gradient(90deg,#fff3d1,#ffe8c2 50%,#fff3d1);border-bottom:1px solid #f0dcb8}
${a} #mtDiwali.x{display:none}
#mtDiwali .dw{max-width:1248px;margin:0 auto;padding:10px 20px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
#mtDiwali .dw-d{display:flex;gap:6px;align-items:flex-end}
#mtDiwali .dw-t{flex:1;min-width:200px;font-size:14px;color:#5a2a06;line-height:1.4}
#mtDiwali .dw-t b{font-family:"Fraunces",Georgia,serif;font-size:17px;color:#b4460a;margin-right:6px}
#mtDiwali .dw-go{background:linear-gradient(135deg,#f08c00,#d9480f);color:#fff;border:0;border-radius:999px;padding:8px 16px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 6px 14px rgba(217,72,15,.25)}
#mtDiwali .dw-x{background:transparent;border:0;color:#8a5a2a;font-size:20px;line-height:1;cursor:pointer;padding:4px 6px}
#mtDiwali .fl{transform-origin:50% 100%;animation:mtFl 1.6s ease-in-out infinite alternate}
#mtDiwali .dw-d svg:nth-child(2) .fl{animation-delay:.4s}
#mtDiwali .dw-d svg:nth-child(3) .fl{animation-delay:.8s}
@keyframes mtFl{0%{transform:scale(1,1) rotate(-3deg);opacity:.9}100%{transform:scale(.92,1.12) rotate(3deg);opacity:1}}
@media (prefers-reduced-motion: reduce){#mtDiwali .fl{animation:none}}
${t(a,"#mtDiwali","background:linear-gradient(90deg,#1f1430,#2a1a1a 50%,#1f1430);border-bottom-color:#2e2748")}
${t(a,"#mtDiwali .dw-t","color:#f5e3c0")}
${t(a,"#mtDiwali .dw-t b","color:#ffd166")}
${t(a,"#mtDiwali .dw-x","color:#d9cfbd")}
@media (max-width:700px){#mtDiwali .dw{padding:10px 14px;gap:10px}#mtDiwali .dw-t{font-size:13px}#mtDiwali .dw-d svg:nth-child(n+2){display:none}}
`,o=document.createElement("style");o.id="mt-theme-diwali",o.textContent=f,document.head.appendChild(o)})();let mtDiyaN=0;function mtDiya(){const a="dwg"+ ++mtDiyaN;return`<svg width="34" height="30" viewBox="0 0 34 30" aria-hidden="true"><defs><radialGradient id="${a}" cx="50%" cy="60%" r="50%"><stop offset="0" stop-color="#fff6c2"/><stop offset=".5" stop-color="#ffb627"/><stop offset="1" stop-color="#e8590c"/></radialGradient></defs><circle cx="17" cy="11" r="9" fill="#ffd166" opacity=".25"/><path class="fl" d="M17 3 C20 8 21 11 17 15 C13 11 14 8 17 3 Z" fill="url(#${a})"/><path d="M3 17 H31 C30 24 24 28 17 28 C10 28 4 24 3 17 Z" fill="#c2410c"/><path d="M3 17 H31 C30 19 27 20 17 20 C7 20 4 19 3 17 Z" fill="#f08c00"/><circle cx="10" cy="23" r="1.3" fill="#ffd166"/><circle cx="17" cy="24.5" r="1.3" fill="#ffd166"/><circle cx="24" cy="23" r="1.3" fill="#ffd166"/></svg>`}function mtDiwaliStrip(){let a=document.getElementById("mtDiwali");const e=document.querySelector("nav.nav");if(!e)return;a||(a=document.createElement("div"),a.id="mtDiwali",e.insertAdjacentElement("afterend",a));let t=!1;try{t=sessionStorage.getItem("mt_dw_x")==="1"}catch{}a.classList.toggle("x",t);const r=typeof S<"u"&&S.lang==="ta",n=r?"ta":"en";if(a.dataset.k===n)return;a.dataset.k=n;const f=r?"<b>இனிய தீபாவளி நல்வாழ்த்துகள்!</b>ஒளியின் திருநாள் உங்கள் இல்லத்திலும் உங்கள் நிதி இலக்குகளிலும் ஒளி சேர்க்கட்டும்.":"<b>Happy Diwali!</b>May the festival of lights brighten your home and your financial goals. Warm wishes from Muthaleetu Thisai.",o=r?"விநியோகஸ்தரைக் கண்டறியுங்கள்":"Find a Distributor";a.innerHTML=`<div class="dw"><div class="dw-d">${mtDiya()}${mtDiya()}${mtDiya()}</div><div class="dw-t">${f}</div><button class="dw-go" data-dw="go">${o}</button><button class="dw-x" data-dw="x" aria-label="Close">×</button></div>`}(function(){const a=render;window.render=function(){const e=a.apply(this,arguments);try{mtDiwaliStrip()}catch{}return e},setTimeout(()=>{try{mtDiwaliStrip()}catch{}},0),window.addEventListener("click",e=>{const t=e.target.closest&&e.target.closest("[data-dw]");if(t){if(e.preventDefault(),t.dataset.dw==="x"){try{sessionStorage.setItem("mt_dw_x","1")}catch{}const r=document.getElementById("mtDiwali");r&&r.classList.add("x");return}t.dataset.dw==="go"&&(go("distributors"),window.scrollTo(0,0))}})})(),(function(){if(typeof mtThemePreview!="function")return;const a=mtThemePreview;if(window.mtThemePreview=function(e){if(e!=="diwali")return a(e);const t="radial-gradient(1.5px 1.5px at 20% 40%,#ffe9a8 50%,transparent 51%),radial-gradient(2px 2px at 55% 25%,#ffd166 50%,transparent 51%),radial-gradient(1.5px 1.5px at 85% 60%,#fff 50%,transparent 51%),linear-gradient(120deg,#0b1f45,#174f92 48%,#3b1a5c)";return`<div class="thm-pv" style="background:#fff8ec"><div class="h" style="background:${t};font-family:Fraunces,Georgia,serif"><span style="width:18px;height:18px;border-radius:50%;border:3px solid #1d5fa6;background:#fff;box-shadow:0 0 8px #ffb627"></span><span style="color:#cfe6fb">Muthaleetu</span><span style="color:#7be39c">Thisai</span></div><div class="n" style="background:linear-gradient(90deg,#5a1236,#7a1d3b,#5a1236);position:relative"><div style="position:absolute;left:0;right:0;bottom:-7px;height:7px;background:radial-gradient(circle at 6px 0,#ffb627 0 3.5px,#e8590c 3.5px 4.5px,transparent 5px) 0 0/12px 7px repeat-x"></div></div><div class="b" style="padding-top:14px"><div class="c" style="background:${t};border-radius:12px"></div><div class="c" style="background:#fffdf8;border:1px solid #f0dcb8;border-top:3px solid #ffb627;border-radius:12px"></div></div><div class="k" style="background:linear-gradient(135deg,#f08c00,#d9480f)"></div></div>`},typeof mtThemeTab=="function"){const e=mtThemeTab;window.mtThemeTab=function(){return e().split("All three use the logo colours.").join("Every theme keeps the logo colours in the name. Switch to Diwali 2026 for the festival and back after it.")}}})();
