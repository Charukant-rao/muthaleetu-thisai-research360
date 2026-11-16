(function(){const t=document.createElement("style");t.textContent=`
.mtp-me .mtp-cover .mtp-role{position:absolute;right:20px;top:18px;z-index:2;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:rgba(255,255,255,.18);padding:5px 12px;border-radius:999px;backdrop-filter:blur(6px)}
.mtp-me .mtp-cover.adm{background:linear-gradient(120deg,#0f2f5c 0%,#164a8a 45%,#1a7a6a 80%,#c99a1d 100%)}
.mtp-me .mtp-tag{left:24px}
.mtp-me .mtp-id .sub .pl-badge{margin:0}
.mtp-me .mtp-acts{flex-wrap:wrap;justify-content:flex-end}
.mtp-me .mtp-acts .ig-btn{white-space:nowrap;border-radius:12px;padding:9px 16px;font-size:14px;font-weight:700;display:inline-flex;gap:6px;align-items:center;border:1.5px solid var(--line);background:var(--surface);color:var(--ink);cursor:pointer}
.mtp-me .mtp-acts .ig-btn:hover{border-color:#1b6aa6;color:#1b6aa6}
.mtp-me .mtp-acts .ig-btn.pri{background:linear-gradient(135deg,#1b6aa6,#25a34a);color:#fff;border:0}
.mtp-me .mtp-acts .ig-btn svg{width:16px;height:16px}
.mtp-me .mtp-stats{grid-template-columns:repeat(var(--n,3),1fr)}
.mtp-me .mtp-stat:nth-child(4) .i{background:rgba(124,58,237,.12);color:#7c3aed}
.mtp-me .mtp-addbio{border:0;background:none;color:#1b6aa6;font-weight:700;padding:0;cursor:pointer;font-size:14px}
.mtp-tabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin:20px 0 16px;padding:5px;border-radius:16px;background:color-mix(in srgb,var(--line) 55%,transparent)}
.mtp-tabs::-webkit-scrollbar{display:none}
.mtp-tabs button{flex:1 0 auto;display:flex;gap:7px;align-items:center;justify-content:center;border:0;background:none;padding:10px 14px;border-radius:11px;font-weight:800;font-size:14px;color:var(--muted);cursor:pointer;white-space:nowrap}
.mtp-tabs button svg{width:16px;height:16px}
.mtp-tabs button .n{font-size:12px;padding:1px 8px;border-radius:999px;background:color-mix(in srgb,var(--line) 75%,transparent)}
.mtp-tabs button.on{background:var(--surface);color:var(--ink);box-shadow:0 4px 12px rgba(15,23,42,.1)}
.mtp-tabs button.on .n{background:linear-gradient(135deg,#1b6aa6,#25a34a);color:#fff}
.mtp-me #ptbody .ig-grid{gap:12px}
.mtp-me #ptbody .ig-grid .ig-tile{border-radius:18px;overflow:hidden;box-shadow:0 6px 16px rgba(15,23,42,.08)}
.mtp-me #ptbody .ig-grid .ig-tile .ig-txt{background:linear-gradient(150deg,#123f78,#1b6aa6 55%,#25a34a)}
.mtp-me #ptbody .ig-set{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
@media (max-width:700px){
 .mtp-me .mtp-stats{grid-template-columns:repeat(min(var(--n,3),4),1fr)}
 .mtp-me .mtp-acts{justify-content:stretch}
 .mtp-me .mtp-acts .ig-btn{flex:1 1 auto;justify-content:center;padding:9px 12px;white-space:nowrap}
 .mtp-me .mtp-acts .ig-btn.ig-ic{flex:0 0 auto}
 .mtp-me .mtp-cover .mtp-role{right:14px;top:14px}
 .mtp-me #ptbody .ig-grid{gap:8px}
}
`,document.head.appendChild(t)})();const MTP_ME_IC={heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>',fol:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6"/></svg>'};window.pageProfile=function(){if(!S.signedIn)return`<div class="page"><div class="wrap" style="max-width:640px"><div class="card" style="text-align:center"><h2>Sign in to your profile</h2><p class="muted">Follow publishers, like articles and manage your account.</p><button class="btn btn-o" data-act="login">${sb?"Sign in":"Continue (demo)"}</button></div></div></div>`;const t=S.profile,e=isPub(),p=isAdmin(),n=myId(),r=typeof mpPosts=="function"?mpPosts():[],l=typeof mpArts=="function"?mpArts():[],f=DB.follows.filter(a=>a.publisher===n).length,d=DB.follows.filter(a=>a.follower===n).length,b=DB.likes.filter(a=>a.user_id===n).length,g=e||r.length||l.length;UI.ptab==="myposts"&&(UI.ptab="grid"),(UI.ptab==="settings"||UI.ptab==="proposals")&&(UI.ptab="me"),(UI.ptab==="premium"||UI.ptab==="prefs")&&(UI.igSet=UI.ptab,UI.ptab="me");const c=(g?[["grid","Posts",MTP_IC.posts,r.length],["myarticles","Articles",MTP_IC.arts,l.length]]:[]).concat([["liked","Liked",MTP_ME_IC.heart,b],["following","Following",MTP_ME_IC.fol,d],["me","Settings",IG.gear]]);c.some(a=>a[0]===UI.ptab)||(UI.ptab=c[0][0]);const i=(a,m,s,o,y)=>`<button class="mtp-stat" ${a?`data-act="ptab" data-v="${a}"`:'type="button"'}><span class="i">${m}</span><span><b>${igNum(s)}</b><small>${igPl(s,o,y)}</small></span></button>`,u=g?[i("grid",MTP_IC.posts,r.length,"Post","Posts"),i("myarticles",MTP_IC.arts,l.length,"Article","Articles"),e?i("",MTP_IC.ppl,f,"Follower","Followers"):"",i("following",MTP_ME_IC.fol,d,"Following","Following")].filter(Boolean):[i("liked",MTP_ME_IC.heart,b,"Liked","Liked"),i("following",MTP_ME_IC.fol,d,"Following","Following")],x='<button class="ig-btn" data-act="igedit">Edit profile</button>'+(e?`<button class="ig-btn pri" data-act="go" data-r="posts">${IG.plus} New post</button><button class="ig-btn" data-act="write">${ico.pen} Write</button>`:'<button class="ig-btn pri" data-act="go" data-r="publishers">Find publishers</button>')+(p?`<button class="ig-btn" data-act="go" data-r="admin">${ico.shield} Admin</button>`:"")+`<button class="ig-btn ig-ic" data-act="ptab" data-v="me" aria-label="Settings">${IG.gear}</button>`,v=typeof plBadge=="function"?plBadge():"",h=e&&(t.title||t.arn)?`<span data-notr>${esc(t.title||"")}${t.arn?" · "+esc(t.arn):""}</span>`:"",w=p?"Admin":e?"Publisher":S.premium?"Premium member":"Member",$=`<div class="mtp-about"><h4>About</h4>${t.bio?`<p data-notr>${esc(t.bio)}</p>`:'<button class="mtp-addbio" data-act="igedit">+ Add a bio</button>'}</div>`;return`<div class="page mtp-page"><div class="wrap"><div class="mtp-card"><div class="pmx-wrap mtp mtp-me">
    <div class="mtp-cover ${p?"adm":""}">${mtpPattern()}<span class="mtp-tag">Muthaleetu Thisai</span><span class="mtp-role">${w}</span></div>
    <div class="mtp-head">
      <div class="mtp-ph">${avatar({id:n||"me",display_name:t.name,avatar_url:t.avatar_url||t.avatar},132)}${e?`<span class="mtp-badge" title="Verified publisher">${MTP_IC.cmp}</span>`:""}</div>
      <div class="mtp-acts">${x}</div>
    </div>
    <div class="mtp-id"><h2 data-notr>${esc(t.name||"My profile")}</h2><div class="sub">${rbadge(S.role)}${h}${v}</div></div>
    <div class="mtp-body">
      <div class="mtp-stats" style="--n:${u.length}">${u.join("")}</div>
      ${$}
      <nav class="mtp-tabs" role="tablist">${c.map(([a,m,s,o])=>`<button class="${UI.ptab===a?"on":""}" role="tab" aria-selected="${UI.ptab===a}" data-act="ptab" data-v="${a}">${s}<span>${m}</span>${o!=null&&o!==""?`<span class="n">${o}</span>`:""}</button>`).join("")}</nav>
      <div id="ptbody">${igBody()}</div>
    </div>
  </div></div></div></div>`},(function(){const t={Liked:"விரும்பியவை",Following:"பின்தொடர்பவை",Settings:"அமைப்புகள்","Edit profile":"சுயவிவரத்தைத் திருத்து","Find publishers":"வெளியீட்டாளர்களைக் கண்டறி","New post":"புதிய பதிவு",Write:"எழுது",Admin:"நிர்வாகம்",Publisher:"வெளியீட்டாளர்",Member:"உறுப்பினர்","Premium member":"பிரீமியம் உறுப்பினர்","+ Add a bio":"+ உங்களைப் பற்றி சேர்க்கவும்"};window.MT_TA_EXTRA?Object.assign(window.MT_TA_EXTRA,t):window.MT_TA_EXTRA=t,window.MT_TA_DICT&&Object.keys(t).forEach(e=>{e in window.MT_TA_DICT||(window.MT_TA_DICT[e]=t[e])})})();
