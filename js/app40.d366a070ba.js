(function(){const t=document.createElement("style");t.textContent=`
.modal.mtp-modal{width:min(900px,100%);overflow:hidden}
.modal.mtp-modal .modal-h{display:none}
.modal.mtp-modal .modal-b{padding:0}
.mtp-cover{position:relative;height:150px;background:linear-gradient(120deg,#123f78 0%,#1b6aa6 45%,#1a8a6a 75%,#25a34a 100%);overflow:hidden}
.mtp-cover svg.mtp-pat{position:absolute;right:-60px;top:-90px;width:340px;height:340px;opacity:.18;animation:mtpSpin 60s linear infinite}
.mtp-cover::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 15% 120%,rgba(255,255,255,.22),transparent 55%)}
@keyframes mtpSpin{to{transform:rotate(360deg)}}
.mtp-x{position:absolute;top:12px;right:12px;z-index:2;width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;display:grid;place-items:center;cursor:pointer;backdrop-filter:blur(6px)}
.mtp-x:hover{background:rgba(255,255,255,.3)}
.mtp-x svg{width:18px;height:18px}
.mtp-tag{position:absolute;left:24px;top:16px;z-index:2;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.85)}
.mtp-head{display:flex;gap:20px;align-items:flex-end;padding:0 24px;margin-top:-58px;position:relative;z-index:1;flex-wrap:wrap}
.mtp-ph{position:relative;flex:none}
.mtp-ph .av{width:116px!important;height:116px!important;font-size:46px!important;border-radius:30px!important;border:5px solid var(--surface);box-shadow:0 12px 28px rgba(18,63,120,.25)}
.mtp-ph img{width:116px;height:116px;border-radius:30px;border:5px solid var(--surface);object-fit:cover}
.mtp-badge{position:absolute;right:-6px;bottom:-4px;width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#25a34a,#1b6aa6);border:3px solid var(--surface);display:grid;place-items:center;color:#fff}
.mtp-badge svg{width:16px;height:16px}
.mtp-id{padding:12px 24px 0}
.mtp-id h2{margin:0;font-family:var(--f-serif,Georgia,serif);font-size:26px;line-height:1.15;color:var(--ink)}
.mtp-id .sub{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px;font-size:14px;color:var(--muted)}
.mtp-ver{display:inline-flex;gap:5px;align-items:center;font-size:11.5px;font-weight:800;color:#1a8a4a;background:rgba(37,163,74,.12);padding:3px 9px;border-radius:999px}
.mtp-ver svg{width:12px;height:12px}
.mtp-acts{display:flex;gap:8px;padding-bottom:6px;margin-left:auto}
.mtp-acts .btn{border-radius:12px;padding:9px 18px;font-size:14px;text-decoration:none}
.mtp-acts .mtp-follow{background:linear-gradient(135deg,#1b6aa6,#25a34a);color:#fff;border:0}
.mtp-acts .mtp-follow.on{background:var(--surface);color:var(--ink);border:1.5px solid var(--line)}
.mtp-acts .mtp-ic{padding:9px 11px}
.mtp-body{padding:16px 24px 24px}
.mtp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.mtp-stat{display:flex;gap:12px;align-items:center;padding:12px 14px;border:1px solid var(--line);border-radius:16px;background:var(--surface);text-align:left;cursor:pointer;color:inherit;font:inherit}
.mtp-stat:hover{border-color:#1b6aa6}
.mtp-stat .i{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;flex:none;background:rgba(27,106,166,.1);color:#1b6aa6}
.mtp-stat:nth-child(2) .i{background:rgba(37,163,74,.12);color:#1a8a4a}
.mtp-stat:nth-child(3) .i{background:rgba(212,160,23,.14);color:#b0860f}
.mtp-stat .i svg{width:18px;height:18px}
.mtp-stat b{display:block;font-family:var(--f-serif,Georgia,serif);font-size:22px;line-height:1;color:var(--ink)}
.mtp-stat small{color:var(--muted);font-size:12.5px}
.mtp-about{margin-top:14px;padding:16px 18px;border-radius:16px;background:linear-gradient(135deg,rgba(27,106,166,.06),rgba(37,163,74,.06));border:1px solid var(--line)}
.mtp-about h4{margin:0 0 6px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.mtp-about p{margin:0;font-size:15px;line-height:1.55;color:var(--ink)}
.mtp-soc{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.mtp-soc a{display:inline-flex;gap:6px;align-items:center;font-size:13px;font-weight:700;color:var(--ink);text-decoration:none;background:var(--surface);border:1px solid var(--line);padding:6px 12px;border-radius:10px}
.mtp-soc a:hover{border-color:#1b6aa6;color:#1b6aa6}
.mtp-soc a svg{width:14px;height:14px}
.mtp-seg{position:relative;display:grid;grid-template-columns:1fr 1fr;margin:20px 0 16px;padding:4px;border-radius:14px;background:color-mix(in srgb,var(--line) 55%,transparent)}
.mtp-seg .knob{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:10px;background:var(--surface);box-shadow:0 4px 12px rgba(15,23,42,.1);transition:transform .25s ease}
.mtp-seg.is-art .knob{transform:translateX(100%)}
.mtp-seg button{position:relative;z-index:1;border:0;background:none;padding:10px;font-weight:800;font-size:14px;color:var(--muted);cursor:pointer;display:flex;gap:8px;align-items:center;justify-content:center}
.mtp-seg button.on{color:var(--ink)}
.mtp-seg button svg{width:16px;height:16px}
.mtp-seg .n{font-size:12px;padding:1px 8px;border-radius:999px;background:color-mix(in srgb,var(--line) 70%,transparent)}
.mtp-posts{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.mtp-posts .ig-tile{border-radius:18px;overflow:hidden;aspect-ratio:4/5;box-shadow:0 6px 16px rgba(15,23,42,.08)}
.mtp-posts .ig-tile .ig-txt{background:linear-gradient(150deg,#123f78,#1b6aa6 55%,#25a34a)}
.mtp-arts{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.mtp-art{display:flex;gap:12px;align-items:stretch;padding:10px;border:1px solid var(--line);border-radius:16px;background:var(--surface);text-align:left;cursor:pointer;color:inherit;font:inherit;transition:transform .15s ease,box-shadow .15s ease}
.mtp-art:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(15,23,42,.1)}
.mtp-art .th{position:relative;width:96px;height:80px;flex:none;border-radius:12px;overflow:hidden}
.mtp-art .th > *{width:100%;height:100%}
.mtp-art .tx{min-width:0;display:flex;flex-direction:column;gap:5px;justify-content:center}
.mtp-art .cat{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#1a8a4a}
.mtp-art h5{margin:0;font-size:14.5px;line-height:1.35;color:var(--ink);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.mtp-art small{color:var(--muted);font-size:12px;display:flex;gap:8px;align-items:center}
.mtp-art .st{font-size:11px;font-weight:800;color:#b45309}
.mtp-page{padding:24px 0 48px}
.mtp-card{background:var(--surface);border:1px solid var(--line);border-radius:26px;overflow:hidden;box-shadow:0 18px 40px rgba(15,23,42,.08);max-width:1040px;margin:0 auto}
.mtp-page .mtp-cover{height:220px}
.mtp-page .mtp-cover svg.mtp-pat{width:460px;height:460px;top:-120px}
.mtp-page .mtp-head{margin-top:-64px;padding:0 32px}
.mtp-page .mtp-ph .av,.mtp-page .mtp-ph img{width:132px!important;height:132px!important;font-size:52px!important;border-radius:34px!important}
.mtp-page .mtp-id{padding:14px 32px 0}
.mtp-page .mtp-id h2{font-size:32px}
.mtp-page .mtp-body{padding:20px 32px 32px}
.mtp-page .mtp-posts{grid-template-columns:repeat(4,1fr)}
.mtp-x{left:14px;right:auto}
.mtp-tag{left:62px;top:24px}
@media (max-width:700px){
 .mtp-page{padding:0 0 24px}
 .mtp-page .wrap{padding-inline:0}
 .mtp-card{border-radius:0;border-left:0;border-right:0;box-shadow:none}
 .mtp-page .mtp-cover{height:140px}
 .mtp-page .mtp-head{margin-top:-48px;padding:0 16px}
 .mtp-page .mtp-ph .av,.mtp-page .mtp-ph img{width:96px!important;height:96px!important;font-size:38px!important;border-radius:26px!important}
 .mtp-page .mtp-id{padding:10px 16px 0}
 .mtp-page .mtp-id h2{font-size:24px}
 .mtp-page .mtp-body{padding:14px 16px 18px}
 .mtp-page .mtp-posts{grid-template-columns:repeat(2,1fr)}
 .mtp-cover{height:120px}
 .mtp-head{padding:0 16px;margin-top:-48px;gap:12px}
 .mtp-ph .av,.mtp-ph img{width:92px!important;height:92px!important;font-size:36px!important;border-radius:24px!important}
 .mtp-id{padding:10px 16px 0}
 .mtp-id h2{font-size:22px}
 .mtp-acts{width:100%;margin-left:0}
 .mtp-acts .btn{flex:1;justify-content:center}
 .mtp-acts .mtp-ic{flex:0 0 auto}
 .mtp-body{padding:14px 16px 18px}
 .mtp-stats{gap:8px}
 .mtp-stat{flex-direction:column;gap:6px;text-align:center;padding:10px 6px}
 .mtp-stat b{font-size:19px}
 .mtp-posts{grid-template-columns:repeat(2,1fr);gap:10px}
 .mtp-arts{grid-template-columns:1fr}
}
`,document.head.appendChild(t)})();const MTP_IC={back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',chk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',cmp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',posts:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',arts:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',ppl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/></svg>'};function mtpPattern(){let t="";for(let e=0;e<16;e++){const p=e*22.5,r=e%4===0?28:14;t+=`<line x1="100" y1="8" x2="100" y2="${8+r}" transform="rotate(${p} 100 100)"/>`}return`<svg class="mtp-pat" viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width="2.4"><circle cx="100" cy="100" r="92"/><circle cx="100" cy="100" r="62"/><circle cx="100" cy="100" r="30"/>${t}<path d="M100 40 112 100 100 160 88 100z" fill="#fff" stroke="none" opacity=".7"/></svg>`}function mtpArtCard(t){const e=typeof axMins=="function"?axMins(t):null,p=typeof vwChip=="function"?vwChip("article",t.id):"";return`<button class="mtp-art" data-act="article" data-id="${esc(t.id)}"><span class="th">${art(t.art||"desk",t.id)}</span><span class="tx"><span class="cat">${esc(typeof CATS<"u"&&CATS[t.c]||"Article")}</span><h5 data-notr>${esc(t.t||"Untitled")}</h5><small>${t.d?fdate(t.d):""}${e?` · ${e} min read`:""} ${p}</small></span></button>`}function mtpBody(t){const e=livePosts().filter(r=>r.author===t),p=pubArticles().filter(r=>r.author===t&&r.source!=="public");return UI.pmTab==="articles"?p.length?`<div class="mtp-arts">${p.map(mtpArtCard).join("")}</div>`:igEmpty(MTP_IC.arts,"No articles yet","Articles from this publisher will appear here."):e.length?`<div class="mtp-posts ig-grid">${e.map(igPostTile).join("")}</div>`:igEmpty(MTP_IC.posts,"No posts yet","Posts from this publisher will appear here.")}function mtpHTML(t){UI.pmOpen=t;const e=Object.assign({},author(t),(DB.pubs||[]).find(o=>o.id===t)||{}),p=t===myId(),r=livePosts().filter(o=>o.author===t),a=pubArticles().filter(o=>o.author===t&&o.source!=="public"),n=e.followers!=null?Number(e.followers):DB.follows.filter(o=>o.publisher===t).length,l=waUrl(e.whatsapp),m=telUrl(e.phone),g=e.role==="publisher"||e.role==="admin";UI.pmTab!=="grid"&&UI.pmTab!=="articles"&&(UI.pmTab="grid"),UI.pmFor!==t&&(UI.pmFor=t,UI.pmTab=r.length||!a.length?"grid":"articles");const h=esc(e.display_name||"Publisher"),b=p?'<button class="btn btn-ghost" data-act="ppedit">Edit profile</button>':S.signedIn?iFollow(t)?`<button class="btn mtp-follow on" data-act="xfollow" data-id="${t}">${MTP_IC.chk.replace("<svg ",'<svg width="14" height="14" ')} Following</button>`:`<button class="btn mtp-follow" data-act="xfollow" data-id="${t}">Follow</button>`:'<button class="btn mtp-follow" data-act="login">Follow</button>',u=p?"":l?`<a class="btn btn-ghost" href="${esc(l)}" target="_blank" rel="noopener noreferrer">${SOC_IC.wa} Message</a>`:S.signedIn?"":'<button class="btn btn-ghost" data-act="login">Message</button>',f=!p&&m?`<a class="btn btn-ghost mtp-ic" href="${esc(m)}" aria-label="Call">${SOC_IC.ph}</a>`:"",d=["fb","ig","li"].map(o=>{const s=socialUrl(o,e[{fb:"facebook",ig:"instagram",li:"linkedin"}[o]]);return s?`<a href="${esc(s)}" target="_blank" rel="noopener noreferrer">${SOC_IC.ln} ${SOC_NAME[o]}</a>`:""}).join(""),v=e.title?`<span data-notr>${esc(e.title)}</span>`:`<span>${ROLE_LABEL[e.role]||"Publisher"}</span>`,c=(o,s,x,y,$)=>`<button class="mtp-stat" ${o?`data-act="pmtab" data-v="${o}"`:'type="button"'}><span class="i">${s}</span><span><b>${igNum(x)}</b><small>${igPl(x,y,$)}</small></span></button>`,w=e.bio||d?`<div class="mtp-about"><h4>About</h4>${e.bio?`<p data-notr>${esc(e.bio)}</p>`:""}${d?`<div class="mtp-soc">${d}</div>`:""}</div>`:"",i=UI.pmTab==="articles",k=`<div class="mtp-seg ${i?"is-art":""}" role="tablist"><span class="knob"></span>
    <button class="${i?"":"on"}" role="tab" aria-selected="${!i}" data-act="pmtab" data-v="grid">${MTP_IC.posts} Posts <span class="n">${r.length}</span></button>
    <button class="${i?"on":""}" role="tab" aria-selected="${i}" data-act="pmtab" data-v="articles">${MTP_IC.arts} Articles <span class="n">${a.length}</span></button></div>`;return`<div class="pmx-wrap mtp" data-pm="${esc(t)}">
    <div class="mtp-cover">${mtpPattern()}<span class="mtp-tag">Muthaleetu Thisai</span><button class="mtp-x" data-act="mtpback" aria-label="Back">${MTP_IC.back}</button></div>
    <div class="mtp-head">
      <div class="mtp-ph">${avatar(e,116)}${g?`<span class="mtp-badge" title="Verified publisher">${MTP_IC.cmp}</span>`:""}</div>
      <div class="mtp-acts">${b}${u}${f}</div>
    </div>
    <div class="mtp-id"><h2 data-notr>${h}</h2><div class="sub">${v}${g?`<span class="mtp-ver">${MTP_IC.chk} Verified publisher</span>`:""}</div></div>
    <div class="mtp-body">
      <div class="mtp-stats">${c("grid",MTP_IC.posts,r.length,"Post","Posts")}${c("articles",MTP_IC.arts,a.length,"Article","Articles")}${c("",MTP_IC.ppl,n,"Follower","Followers")}</div>
      ${w}${k}<div id="pmxbody">${mtpBody(t)}</div>
    </div></div>`}function mtpShow(t){const e=UI.pubPage;if(!e)return;const p=document.getElementById("main");if(!p)return;p.innerHTML=`<div class="page mtp-page"><div class="wrap"><div class="mtp-card">${mtpHTML(e)}</div></div></div>`;const r=document.getElementById("calcHost");r&&(r.hidden=!0),document.querySelectorAll("#navlinks .on,#navlinks [aria-current]").forEach(a=>{a.classList.remove("on"),a.removeAttribute("aria-current")}),t&&window.scrollTo({top:0,behavior:"auto"})}window.proModal=function(t){if(!t)return;const e=UI.pubPage===t;UI.pubPage=t,document.querySelector("#layer .scrim")&&closeModal();try{location.hash!=="#publisher/"+t&&history.pushState({mtp:t},"","#publisher/"+t)}catch{}mtpShow(!e)},(function(){const t=render;window.render=function(){const a=t.apply(this,arguments);return UI.pubPage&&mtpShow(!1),a};const e=go;window.go=function(){return UI.pubPage=null,e.apply(this,arguments)};const p=()=>{const a=location.hash||"";return a.indexOf("#publisher/")===0?decodeURIComponent(a.slice(11)):null};window.addEventListener("hashchange",()=>{const a=p();a?a!==UI.pubPage&&(UI.pubPage=a,mtpShow(!0)):UI.pubPage&&(UI.pubPage=null,render(),window.scrollTo({top:0,behavior:"auto"}))}),document.addEventListener("click",a=>{a.target.closest&&a.target.closest('[data-act="mtpback"]')&&(a.preventDefault(),history.state&&history.state.mtp?history.back():(UI.pubPage=null,go(UI.route||"publishers")))});const r=p();if(r){let a=0;const n=setInterval(()=>{if(a++,DB.pubs&&DB.pubs.length||a>20){clearInterval(n),UI.pubPage=r;try{history.replaceState({mtp:r},"","#publisher/"+r)}catch{}mtpShow(!0)}},250)}})(),(function(){const t={About:"பற்றி",Post:"பதிவு",Posts:"பதிவுகள்",Article:"கட்டுரை",Articles:"கட்டுரைகள்",Follower:"பின்தொடர்பவர்",Followers:"பின்தொடர்பவர்கள்","min read":"நிமிட வாசிப்பு"};window.MT_TA_EXTRA?Object.assign(window.MT_TA_EXTRA,t):window.MT_TA_EXTRA=t,window.MT_TA_DICT&&Object.keys(t).forEach(e=>{e in window.MT_TA_DICT||(window.MT_TA_DICT[e]=t[e])})})();
