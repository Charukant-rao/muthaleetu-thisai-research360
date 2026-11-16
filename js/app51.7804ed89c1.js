const MT_THEMES=[{id:"fintech",name:"Clean fintech",desc:"White background, navy and green accents, soft rounded cards and crisp sans-serif headings."},{id:"editorial",name:"Editorial news",desc:"Paper-white background, strong serif headlines, thin rules and a navy masthead bar."},{id:"gradient",name:"Bold gradient",desc:"Navy to teal gradient header and hero, green buttons and rounded glassy cards."}];function mtThemeApply(r){MT_THEMES.some(a=>a.id===r)||(r="fintech"),document.documentElement.setAttribute("data-mt",r);try{localStorage.setItem("mt_site_theme",r)}catch{}}try{mtThemeApply(localStorage.getItem("mt_site_theme")||"fintech")}catch{mtThemeApply("fintech")}(function(){const r='html[data-mt="fintech"]',a='html[data-mt="editorial"]',t='html[data-mt="gradient"]',e="html[data-mt]",o=(i,c)=>`${i}[data-theme="dark"]{${c}}@media (prefers-color-scheme: dark){${i}:not([data-theme="light"]){${c}}}`,n=(i,c,s)=>`${i}[data-theme="dark"] ${c}{${s}}@media (prefers-color-scheme: dark){${i}:not([data-theme="light"]) ${c}{${s}}}`,d="--bg:#08121f;--surface:#0f1c2e;--surface-2:#0d1928;--surface-3:#16263c;--line:#203550;--line-warm:#203550;--ink:#e6eef8;--ink-2:#c3d2e4;--muted:#8fa3bd;--chip:#16263c;--chip-ink:#c3d2e4;--navy:#1d5fa6;--navy-2:#2a6fb8;--primary:#8cc4f5;--primary-2:#6aaeea;--primary-soft:#132a45;--blue:#8cc4f5;--accent:#3ccf6a;--accent-2:#2fb85b;--accent-soft:#10301d;--accent-ink:#7be39c;--active:#3ccf6a;--teal-2:#3ccf6a;--info-bg:#132a45;--info-ink:#8cc4f5;--gold:#3ccf6a;--gold-2:#7be39c;--gold-soft:#10301d;--footer:#050d17;--teal:#050d17;--card-dark:#0f1c2e;--mt-name1:#8cc4f5;--mt-name2:#3ccf6a;--mt-em:#3ccf6a;--mt-btn:linear-gradient(135deg,#2fb85b,#25a34a);--mt-btn-h:linear-gradient(135deg,#25a34a,#1b8a45);--mt-pill:#1d5fa6;",m=`
${e}{--mt-navy:#174f92;--mt-blue:#1d5fa6;--mt-green:#25a34a;--mt-teal:#1b7c6c;--mt-sky:#8cc4f5;--mt-name1:#174f92;--mt-name2:#25a34a;--mt-em:#25a34a;
  --mt-hero:linear-gradient(135deg,#174f92 0%,#1d5fa6 55%,#1b7c6c 100%);--mt-foot:linear-gradient(180deg,#0f3463,#0a2547);
  --mt-btn:linear-gradient(135deg,#1d5fa6,#174f92);--mt-btn-h:linear-gradient(135deg,#174f92,#123f75);--mt-btn-sh:0 6px 16px rgba(23,79,146,.22);--mt-pill:#174f92;--mt-cta:linear-gradient(135deg,#2fb85b,#25a34a)}
${r}{--bg:#f4f7fb;--surface:#ffffff;--surface-2:#f8fafd;--surface-3:#eef3f9;--line:#e1e8f1;--line-warm:#e1e8f1;--ink:#0d1b2e;--ink-2:#33445c;--muted:#64748b;--chip:#eef3f9;--chip-ink:#33445c;
  --navy:#174f92;--navy-2:#1d5fa6;--primary:#174f92;--primary-2:#123f75;--primary-soft:#e8f0fa;--blue:#1d5fa6;--accent:#25a34a;--accent-2:#1b8a45;--accent-soft:#e6f6eb;--accent-ink:#17703a;--active:#25a34a;--teal-2:#25a34a;
  --info-bg:#e8f0fa;--info-ink:#174f92;--gold:#25a34a;--gold-2:#7be39c;--gold-soft:#e6f6eb;--footer:#0a2547;--teal:#0a2547;--card-dark:#0f3463;
  --shadow:0 1px 2px rgba(13,27,46,.04),0 8px 24px rgba(13,27,46,.06);--shadow-lg:0 24px 60px rgba(13,27,46,.18);--r-lg:16px;--r-md:12px;--f-serif:"Plus Jakarta Sans","Segoe UI",system-ui,sans-serif}
${o(r,d)}
${a}{--bg:#f7f3ea;--surface:#fffdf7;--surface-2:#fbf8f0;--surface-3:#f1ebdd;--line:#e2d9c6;--line-warm:#e2d9c6;--ink:#161616;--ink-2:#3a3a3a;--muted:#6b665c;--chip:#f1ebdd;--chip-ink:#3a3a3a;
  --navy:#174f92;--navy-2:#1d5fa6;--primary:#174f92;--primary-2:#123f75;--primary-soft:#e9eff6;--blue:#174f92;--accent:#1f8a43;--accent-2:#17703a;--accent-soft:#e7f2e9;--accent-ink:#17703a;--active:#1f8a43;--teal-2:#1f8a43;
  --info-bg:#e9eff6;--info-ink:#174f92;--gold:#1f8a43;--gold-2:#7be39c;--gold-soft:#e7f2e9;--footer:#111;--teal:#111;--card-dark:#1a1a1a;
  --shadow:none;--shadow-lg:0 18px 40px rgba(0,0,0,.18);--r-lg:6px;--r-md:4px;--r-sm:3px;--mt-btn:#174f92;--mt-btn-h:#123f75;--mt-btn-sh:none;--mt-foot:#111;--mt-pill:transparent;--mt-hero:#174f92}
${o(a,d+"--bg:#0e0e0c;--surface:#171714;--surface-2:#141411;--surface-3:#1f1f1b;--line:#2e2c26;--line-warm:#2e2c26;--ink:#efece4;--ink-2:#cfcabe;--muted:#9a958a;--footer:#000;--mt-foot:#000;--shadow:none;--mt-pill:transparent;")}
${t}{--bg:#eef4f8;--surface:#ffffff;--surface-2:#f6fafc;--surface-3:#e9f1f6;--line:#d9e6ee;--line-warm:#d9e6ee;--ink:#0b1d2c;--ink-2:#2c4255;--muted:#5d7385;--chip:#e9f1f6;--chip-ink:#2c4255;
  --navy:#174f92;--navy-2:#1b7c6c;--primary:#174f92;--primary-2:#1b7c6c;--primary-soft:#e5f0f6;--blue:#1d5fa6;--accent:#25a34a;--accent-2:#1b8a45;--accent-soft:#e3f5e9;--accent-ink:#17703a;--active:#25a34a;--teal-2:#25a34a;
  --info-bg:#e5f0f6;--info-ink:#174f92;--gold:#25a34a;--gold-2:#9be7b2;--gold-soft:#e3f5e9;--footer:#0c2c4f;--teal:#0c2c4f;--card-dark:#0f3463;
  --shadow:0 2px 6px rgba(23,79,146,.06),0 14px 34px rgba(23,79,146,.10);--shadow-lg:0 30px 70px rgba(23,79,146,.25);--r-lg:22px;--r-md:16px;
  --mt-btn:linear-gradient(135deg,#2fb85b,#1b8a45);--mt-btn-h:linear-gradient(135deg,#25a34a,#17703a);--mt-btn-sh:0 8px 20px rgba(37,163,74,.30);--mt-pill:rgba(255,255,255,.18);--mt-foot:linear-gradient(160deg,#174f92,#0f3463 55%,#1b7c6c);--f-serif:"Plus Jakarta Sans","Segoe UI",system-ui,sans-serif}
${o(t,d+"--mt-pill:rgba(255,255,255,.14);--mt-foot:linear-gradient(160deg,#0b2546,#061426 60%,#0d3b33);")}

/* ---- brand name in logo colours, every theme ---- */
${e} .brand-name{color:var(--mt-name1)!important;font-weight:800}
${e} .brand-name span{color:var(--mt-name2)!important}
${e} .foot .brand-name{color:#8cc4f5!important}
${e} .foot .brand-name span{color:#4fd37a!important}

/* ---- shared pieces that used the old indigo and gold ---- */
${e} .btn-o{background:var(--mt-btn)!important;color:#fff!important;box-shadow:var(--mt-btn-sh)}
${e} .btn-o:hover{background:var(--mt-btn-h)!important}
${e} .ig-btn.pri{background:var(--mt-btn)!important;color:#fff!important}
${e} .sec-h h2 em,${e} .hero2 h1 em{color:var(--mt-em)!important}
${e} .foot{background:var(--mt-foot)!important}
${e} .foot .muted,${e} .foot ul,${e} .reg{color:#c9d8ea}
${e} .lead,${e} .doc-h,${e} .rd-next,${e} .rx-cta,${e} .plan-cta,${e} .auth-side{background:var(--mt-hero)!important}
${e} .h2-art::before{background:var(--mt-hero)!important}
${e} .bp-band{background:radial-gradient(500px 220px at 90% 0%,rgba(140,196,245,.35),transparent 60%),var(--mt-hero)!important;box-shadow:0 14px 40px rgba(23,79,146,.25)!important}
${e} .bp-band .bp-go,${e} .rx-cta .btn{background:linear-gradient(135deg,#7be39c,#3ccf6a)!important;color:#0b2a17!important}
${e} .auth-side li svg{color:#0b2a17!important;background:#7be39c!important}
${e} .rd-prog i,${e} .pl-bar i{background:var(--mt-green)!important}
${e} .nt-ic,${e} .nt-u{background:var(--mt-blue)!important}
${e} .tp-ring{background:conic-gradient(#174f92,#1d5fa6,#25a34a,#1b7c6c,#174f92)!important}
${e} .ig-ring.pub{background:conic-gradient(#174f92,#25a34a,#1b7c6c,#174f92)!important}
${e} .nav a.on{background:var(--mt-pill);color:#fff}
${e} .r-publisher,${e} .rbadge.r-publisher{background:var(--primary-soft);color:var(--primary)}

/* ================= 1. CLEAN FINTECH ================= */
${r} h1,${r} .sec-h h2,${r} .hero2 h1,${r} .auth-side h2,${r} .ta-big h3,${r} .ta-row h4,${r} .rd h1{font-family:var(--f-display)!important;letter-spacing:-.02em}
${r} .sec-h h2 em,${r} .hero2 h1 em{font-style:normal}
${r} .mast{background:#fff;border-bottom:1px solid var(--line)}
${r} .nav{background:rgba(255,255,255,.92);border-bottom:1px solid var(--line)}
${r} .nav a.on{background:#174f92;color:#fff}
${r} .nav a:hover{background:#eef3f9}
${r} .card,${r} .ta-big,${r} .ta-row,${r} .post,${r} .rx-box{border-color:var(--line)}
${r} .tr-fire{color:#25a34a}
${n(r,".mast","background:var(--surface)")}
${n(r,".nav","background:rgba(15,28,46,.92)")}
${n(r,".nav a:hover","background:var(--surface-3)")}

/* ================= 2. EDITORIAL NEWS ================= */
${a} body{background:var(--bg)}
${a} h1,${a} .sec-h h2,${a} .hero2 h1,${a} .ta-big h3,${a} .ta-row h4,${a} .brand-name{font-family:"Fraunces",Georgia,"Times New Roman",serif!important}
${a} .mast{background:var(--surface);border-bottom:3px double #161616}
${a} .nav{background:#174f92!important;border-bottom:0;backdrop-filter:none}
${a} .nav .wrap{padding-block:0;gap:0}
${a} .nav a{color:rgba(255,255,255,.82)!important;border-radius:0!important;padding:12px 16px!important;font-size:13px;text-transform:uppercase;letter-spacing:.06em;font-weight:700}
${a} .nav a:hover{background:rgba(255,255,255,.08)!important;color:#fff!important}
${a} .nav a.on{background:transparent!important;color:#fff!important;box-shadow:inset 0 -3px 0 #4fd37a}
${a} .nav a svg{opacity:.85}
${a} .sec-h{border-top:2px solid var(--ink);padding-top:12px}
${a} .sec-h h2{font-weight:800}
${a} .sec-h h2 em{font-style:italic}
${a} .btn,${a} .btn-o,${a} .ig-btn,${a} .pill{border-radius:3px!important}
${a} .btn-o{box-shadow:none!important}
${a} .card,${a} .ta-big,${a} .ta-row,${a} .post,${a} .rx-box,${a} .adr,${a} .adq,${a} .adc,${a} .tool,${a} .rv-quota{border-radius:4px!important;box-shadow:none!important;border:1px solid var(--line)!important}
${a} .ta-big .ax-cover,${a} .ax-cover{border-radius:0!important}
${a} .tr-fire{color:#b91c1c}
${a} .hero2 h1{font-weight:800}
${a} .foot{border-top:4px solid #174f92}
${n(a,".nav","background:#0b2546!important")}
${n(a,".mast","border-bottom-color:#efece4")}

/* ================= 3. BOLD GRADIENT ================= */
${t} body{background:radial-gradient(1200px 500px at 100% 0%,rgba(27,124,108,.10),transparent 60%),radial-gradient(900px 500px at 0% 20%,rgba(23,79,146,.08),transparent 60%),var(--bg);background-attachment:fixed}
${t} .mast{background:linear-gradient(120deg,#174f92,#1d5fa6 50%,#1b7c6c)!important;border-bottom:0}
${t} .mast .brand-name{color:#cfe6fb!important}
${t} .mast .brand-name span{color:#7be39c!important}
${t} .mast .brand-sub{color:rgba(255,255,255,.75)!important}
${t} .mast .icon-btn,${t} .mast .lang,${t} .mast .seg,${t} .mast .search-in,${t} .mast .uc,${t} .mast .mast-r > button:not(.btn-red){background:rgba(255,255,255,.14)!important;border-color:rgba(255,255,255,.22)!important;color:#fff!important}
${t} .mast .brand svg,${t} .mast .brand .mt-logo,${t} .mast .brand img{background:#fff;border-radius:50%;box-shadow:0 0 0 3px rgba(255,255,255,.25)}
${t} .mast .seg button:not(.on),${t} .mast .lang button:not(.on){color:#fff!important}
${t} .mast .search-in input{color:#fff}
${t} .mast .search-in input::placeholder{color:rgba(255,255,255,.7)}
${t} .mast .uc *{color:#fff!important}
${t} .nav{background:linear-gradient(120deg,#123f75,#16547f 50%,#166b5d)!important;border-bottom:0}
${t} .nav a{color:rgba(255,255,255,.85)!important}
${t} .nav a:hover{background:rgba(255,255,255,.12)!important;color:#fff!important}
${t} .nav a.on{background:#fff!important;color:#174f92!important}
${t} .hero2{background:var(--mt-hero);border-radius:28px;margin:22px auto 0;max-width:1248px;padding:44px 0!important;box-shadow:var(--shadow-lg)}
${t} .hero2 h1,${t} .hero2 h1 *{color:#fff!important}
${t} .hero2 h1 em{color:#7be39c!important}
${t} .hero2 p{color:rgba(255,255,255,.85)!important}
${t} .hero2 .btn-ghost,${t} .hero2 .btn:not(.btn-o){background:rgba(255,255,255,.14)!important;color:#fff!important;border-color:rgba(255,255,255,.3)!important}
${t} .card,${t} .ta-big,${t} .ta-row,${t} .post,${t} .rx-box,${t} .tool{background:rgba(255,255,255,.82);backdrop-filter:blur(10px);border-color:rgba(23,79,146,.10)}
${t} .sec-h h2{font-weight:800;letter-spacing:-.02em}
${t} .sec-h h2 em{font-style:normal;background:linear-gradient(90deg,#1d5fa6,#25a34a);-webkit-background-clip:text;background-clip:text;color:transparent!important}
${t} .tr-fire{color:#1b7c6c}
${[".card",".ta-big",".ta-row",".post",".rx-box",".tool"].map(i=>n(t,i,"background:rgba(15,28,46,.82)")).join("")}
${n(t,".mast","background:linear-gradient(120deg,#0b2546,#0f3463 50%,#0d3b33)!important")}
${n(t,".nav","background:linear-gradient(120deg,#08203d,#0b2c48 50%,#0a2f29)!important")}
${n(t,".nav a.on","background:#8cc4f5!important;color:#08121f!important")}
@media (max-width:700px){${t} .hero2{border-radius:0;margin-top:0}}

/* ---- admin theme picker ---- */
.thm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:16px}
.thm{border:2px solid var(--line);border-radius:16px;overflow:hidden;background:var(--surface);display:flex;flex-direction:column}
.thm.on{border-color:#25a34a;box-shadow:0 0 0 4px rgba(37,163,74,.15)}
.thm-pv{height:150px;position:relative;overflow:hidden}
.thm-pv .h{height:34px;display:flex;align-items:center;gap:6px;padding:0 10px;font:800 12px/1 "Plus Jakarta Sans",sans-serif}
.thm-pv .n{height:20px}
.thm-pv .b{padding:10px;display:grid;grid-template-columns:1.4fr 1fr;gap:8px}
.thm-pv .c{height:62px;border-radius:8px}
.thm-pv .k{height:16px;width:70px;border-radius:999px;margin:0 10px}
.thm-b{padding:12px 14px 14px;display:flex;flex-direction:column;gap:8px;flex:1}
.thm-b h4{margin:0;font-size:15.5px}
.thm-b p{margin:0;font-size:13px;color:var(--muted);flex:1}
.thm-b .row{display:flex;gap:8px;flex-wrap:wrap}
`,f=document.createElement("style");f.id="mt-themes",f.textContent=m,document.head.appendChild(f)})();async function mtThemeLoad(){try{if(typeof sb>"u"||!sb)return;const r=await sb.from("mt_settings").select("value").eq("key","site_theme").maybeSingle(),a=r&&r.data&&r.data.value&&r.data.value.theme;a&&!UI.thmPreview&&mtThemeApply(a),UI.thmSaved=a||"fintech",UI.route==="admin"&&UI.adm==="theme"&&render()}catch{}}setTimeout(mtThemeLoad,50);function mtThemePreview(r){const a={fintech:{bg:"#f4f7fb",h:"#ffffff",hb:"1px solid #e1e8f1",n:"#ffffff",c:"#ffffff",cb:"1px solid #e1e8f1",k:"#174f92",r:"10px",font:"Plus Jakarta Sans,sans-serif"},editorial:{bg:"#f7f3ea",h:"#fffdf7",hb:"3px double #161616",n:"#174f92",c:"#fffdf7",cb:"1px solid #e2d9c6",k:"#174f92",r:"3px",font:"Fraunces,Georgia,serif"},gradient:{bg:"#eef4f8",h:"linear-gradient(120deg,#174f92,#1d5fa6 50%,#1b7c6c)",hb:"0",n:"linear-gradient(120deg,#123f75,#16547f 50%,#166b5d)",c:"rgba(255,255,255,.9)",cb:"1px solid #d9e6ee",k:"linear-gradient(135deg,#2fb85b,#1b8a45)",r:"14px",font:"Plus Jakarta Sans,sans-serif"}}[r],t=r==="gradient"?"#cfe6fb":"#174f92",e=r==="gradient"?"#7be39c":"#25a34a";return`<div class="thm-pv" style="background:${a.bg}"><div class="h" style="background:${a.h};border-bottom:${a.hb};font-family:${a.font}"><span style="width:18px;height:18px;border-radius:50%;border:3px solid #1d5fa6;background:#fff"></span><span style="color:${t}">Muthaleetu</span><span style="color:${e}">Thisai</span></div><div class="n" style="background:${a.n}"></div><div class="b"><div class="c" style="background:${r==="gradient"?"linear-gradient(135deg,#174f92,#1b7c6c)":a.c};border:${a.cb};border-radius:${a.r}"></div><div class="c" style="background:${a.c};border:${a.cb};border-radius:${a.r}"></div></div><div class="k" style="background:${a.k}"></div></div>`}function mtThemeTab(){const r=document.documentElement.getAttribute("data-mt"),a=UI.thmSaved||"fintech";return`<div class="card md" style="margin-top:16px"><h3 style="margin:0 0 4px">Site theme</h3><small class="muted">Pick how the whole site looks for every visitor. All three use the logo colours. Visitors can still switch light or dark mode themselves.</small>
    ${UI.thmPreview?`<div class="rv-note" style="margin-top:12px">You are previewing <b>${esc((MT_THEMES.find(t=>t.id===r)||{}).name||"")}</b>. Only you can see it until you press Use this theme.</div>`:""}
    <div class="thm-grid">${MT_THEMES.map(t=>`<div class="thm ${a===t.id?"on":""}">${mtThemePreview(t.id)}<div class="thm-b"><h4>${esc(t.name)} ${a===t.id?'<span class="rv-st live" style="margin-left:6px">In use</span>':""}</h4><p>${esc(t.desc)}</p><div class="row"><button class="btn btn-sm btn-ghost" data-act="thmprev" data-v="${t.id}">Preview</button>${a===t.id?"":`<button class="btn btn-sm btn-o" data-act="thmuse" data-v="${t.id}">Use this theme</button>`}</div></div></div>`).join("")}</div></div>`}(function(){const r=pageAdmin;window.pageAdmin=function(){if(!isAdmin())return r();const a=UI.adm==="theme",t=UI.adm;a&&(UI.adm="moderation");let e=r();UI.adm=t,a&&(e=e.split('class="ptab on"').join('class="ptab"'));const o=e.indexOf('<div class="ptabs"');if(o<0)return e;const n=e.indexOf("</div>",o);if(e=e.slice(0,n)+`<button class="ptab${a?" on":""}" role="tab" data-act="xadm" data-v="theme">Site theme</button>`+e.slice(n),!a)return e;const d=e.indexOf("</div>",o)+6;return e.slice(0,d)+mtThemeTab()+"</div></div>"}})(),window.addEventListener("click",async r=>{const a=r.target.closest&&r.target.closest("[data-act]");if(!a||!isAdmin())return;const t=a.dataset.act,e=a.dataset.v;if(t==="xadm"&&e==="theme"){r.preventDefault(),r.stopImmediatePropagation(),UI.adm="theme",mtThemeLoad(),render();return}if(t==="thmprev"){r.preventDefault(),UI.thmPreview=!0,mtThemeApply(e),render();return}if(t==="thmuse"){r.preventDefault(),a.disabled=!0;const o=await sb.from("mt_settings").upsert({key:"site_theme",value:{theme:e},updated_at:new Date().toISOString(),updated_by:myId()},{onConflict:"key"});if(a.disabled=!1,o.error){toast("Could not save: "+o.error.message);return}UI.thmPreview=!1,UI.thmSaved=e,mtThemeApply(e),toast("Theme saved. Every visitor now sees "+((MT_THEMES.find(n=>n.id===e)||{}).name||e)+"."),render();return}},!0),(function(){const r=go;window.go=function(a){return UI.thmPreview&&a!=="admin"&&(UI.thmPreview=!1,UI.thmSaved&&mtThemeApply(UI.thmSaved)),r.apply(this,arguments)}})();
