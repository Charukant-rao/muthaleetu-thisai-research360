(function(){const t=document.createElement("style");t.textContent=`
.rd{position:fixed;inset:0;z-index:85;overflow-y:auto;overscroll-behavior:contain;background:var(--bg);color:var(--ink);animation:rdIn .22s ease-out}
@keyframes rdIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
html.rd-open,html.rd-open body{overflow:hidden}
.rd-prog{position:sticky;top:0;z-index:4;height:3px;background:transparent}
.rd-prog i{display:block;height:3px;width:0;background:linear-gradient(90deg,#6366f1,#22d3ee,#f0c35a);box-shadow:0 0 10px rgba(99,102,241,.6)}
.rd-bar{position:sticky;top:3px;z-index:3;display:flex;align-items:center;gap:10px;padding:10px 18px;background:color-mix(in srgb,var(--surface) 88%,transparent);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.rd-bar .rd-brand{font-family:var(--f-serif);font-weight:700;font-size:16px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}
.rd-bar .rd-brand span{color:var(--gold)}
.rd-ib{height:38px;min-width:38px;padding:0 12px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:6px;font-weight:700;font-size:13.5px;border:1px solid var(--line);background:var(--surface);color:var(--ink-2)}
.rd-ib:hover{border-color:var(--accent);color:var(--accent-ink)}
.rd-wrap{max-width:780px;margin:0 auto;padding:34px 20px 20px}
.rd-meta{display:flex;gap:8px;align-items:center;flex-wrap:wrap;font-size:13px;color:var(--muted)}
.rd h1.rd-t{font-family:var(--f-serif);font-size:clamp(28px,4.2vw,46px);line-height:1.15;margin:14px 0 14px;color:var(--ink);letter-spacing:-.01em}
.rd .rd-lead{font-size:clamp(17px,1.6vw,20px);line-height:1.6;color:var(--ink-2);margin:0 0 22px}
.rd-auth{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:14px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.rd-auth .who{display:flex;align-items:center;gap:12px;flex:1;min-width:0;text-align:left}
.rd-auth b{display:block}
.rd-hero{margin:24px 0;border-radius:20px;overflow:hidden;box-shadow:var(--shadow)}
.rd-hero .art{position:relative;inset:auto;display:block;width:100%;height:clamp(220px,36vw,400px);border-radius:0}
.rd-body{font-size:var(--rd-fs,18px);line-height:1.85;color:var(--ink)}
.rd-body p{max-width:none!important;margin:0 0 1.15em}
.rd-acts{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:26px 0 8px}
.rd-share{margin:18px 0 6px;padding:16px 18px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.rd-share h4,.rd-sec h3{margin:0 0 12px;font-size:12.5px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
.rd-share .row{display:flex;gap:8px;flex-wrap:wrap}
.rd-sh{display:inline-flex;align-items:center;gap:7px;border-radius:999px;padding:8px 14px;font-weight:700;font-size:13.5px;text-decoration:none;color:#fff}
.rd-sh.wa{background:#16a34a}.rd-sh.fb{background:#1d4ed8}.rd-sh.x{background:#111827}.rd-sh.li{background:#0a66c2}.rd-sh.tg{background:#0284c7}
.rd-sh.cp{background:var(--surface-3);color:var(--ink)}.rd-sh:hover{filter:brightness(1.1)}
.rd-sec{margin-top:30px}
.rd-about{display:flex;gap:16px;align-items:flex-start;padding:20px;border-radius:18px;background:var(--surface);border:1px solid var(--line)}
.rd-about p{margin:6px 0 10px;color:var(--ink-2)}
.rd-cm{padding:18px 20px;border-radius:18px;background:var(--surface);border:1px solid var(--line)}
.rd-more{background:var(--surface-2);border-top:1px solid var(--line);margin-top:40px;padding:34px 20px 50px}
.rd-more .in{max-width:1180px;margin:0 auto}
.rd-more h2{font-family:var(--f-serif);font-size:26px;margin:0 0 18px}
.rd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}
.rd-card{display:flex;flex-direction:column;text-align:left;border-radius:18px;overflow:hidden;background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s}
.rd-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(30,27,75,.16)}
.rd-card .art{position:relative;inset:auto;display:block;width:100%;height:160px;border-radius:0;flex:none}
.rd-card .b{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px}
.rd-card h4{margin:0;font-size:16px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rd-card small{color:var(--muted)}
.rd-next{display:flex;align-items:center;gap:14px;margin-top:26px;padding:16px 18px;border-radius:18px;text-align:left;width:100%;color:#fff;background:linear-gradient(135deg,#1e1b4b,#4338ca)}
.rd-next small{color:#c7d2fe;font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:11.5px}
.rd-next b{display:block;font-size:17px;line-height:1.35}
@media (max-width:640px){.rd-wrap{padding:22px 16px}.rd-bar{padding:8px 12px}.rd-ib .t{display:none}}`,document.head.appendChild(t)})();const RD_BACK='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';try{UI.rdFs=Number(localStorage.getItem("mt_rdfs"))||18}catch{UI.rdFs=18}function rdFind(t){let a=(DB.articles||[]).find(e=>String(e.id)===String(t));if(!a){const e=(S.myArticles||[]).find(r=>String(r.id)===String(t));e&&(a={id:e.id,author:myId(),t:e.t,c:e.c,s:e.s,art:e.art,body:e.body,status:e.status,removed:e.removed,at:e.d})}return a}function rdUrl(t){return location.origin+"/#article/"+encodeURIComponent(t.id)}function rdMins(t){const a=((t.s||"")+" "+(t.body||"")).split(" ").filter(Boolean).length;return Math.max(1,Math.round(a/200))}function rdShare(t){const a=rdUrl(t),e=t.t,r=encodeURIComponent;return`<div class="rd-share"><h4>Share this article</h4><div class="row">
    <a class="rd-sh wa" href="https://wa.me/?text=${r(e+" "+a)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a class="rd-sh fb" href="https://www.facebook.com/sharer/sharer.php?u=${r(a)}" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a class="rd-sh x" href="https://twitter.com/intent/tweet?text=${r(e)}&url=${r(a)}" target="_blank" rel="noopener noreferrer">X</a>
    <a class="rd-sh li" href="https://www.linkedin.com/sharing/share-offsite/?url=${r(a)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a class="rd-sh tg" href="https://t.me/share/url?url=${r(a)}&text=${r(e)}" target="_blank" rel="noopener noreferrer">Telegram</a>
    <button class="rd-sh cp" data-act="rdcopy" data-id="${esc(t.id)}">${ico.share} Copy link</button></div></div>`}function rdMore(t){const a=pubArticles().filter(r=>String(r.id)!==String(t.id)),e=r=>(r.c===t.c?2:0)+(r.author===t.author&&t.source!=="public"?1:0);return a.map((r,i)=>({x:r,s:e(r),i})).sort((r,i)=>i.s-r.s||r.i-i.i).slice(0,6).map(r=>r.x)}function rdCard(t){const a=t.source==="public"?t.contributor||"Reader":author(t.author).display_name;return`<button class="rd-card" data-act="article" data-id="${esc(t.id)}">${art(t.art||"desk",t.id)}<div class="b"><small>${CATS[t.c]||"Article"} · ${rdMins(t)} min read</small><h4>${esc(t.t)}</h4><small>${esc(a)} · ${ago(t.at)}</small></div></button>`}function rdHtml(t,a){const e=t.source==="public",r=author(t.author),i=e?`<div class="who">${avatar({id:t.contributor||"p",display_name:t.contributor||"Reader"},46)}<span><b>${esc(t.contributor||"Reader")}</b><span class="rbadge r-public">Public contributor</span></span></div>`:`<button class="who" data-act="pro" data-id="${r.id}">${avatar(r,46)}<span><b>${esc(r.display_name)}</b>${rbadge(r.role)} ${r.title?`<small class="muted">${esc(r.title)}</small>`:""}</span></button>${S.signedIn&&r.id!==myId()?followBtn(r.id,!0):S.signedIn?"":`<button class="btn btn-sm btn-t" data-act="xfollow" data-id="${r.id}">${IC.plus} Follow</button>`}`,s=rdMore(t),d=s[0],n=cmFor("article",t.id).filter(l=>!l.removed).length,o=(DB.pubs||[]).find(l=>l.id===t.author);return`<div class="rd" role="dialog" aria-modal="true" aria-label="${esc(t.t)}" data-id="${esc(t.id)}" style="--rd-fs:${UI.rdFs}px">
  <div class="rd-prog"><i></i></div>
  <div class="rd-bar"><button class="rd-ib" data-act="closemodal" aria-label="Back">${RD_BACK}<span class="t">Back</span></button><div class="rd-brand">Muthaleetu <span>Thisai</span></div>
    <button class="rd-ib" data-act="rdfs" data-d="-1" aria-label="Smaller text">A-</button><button class="rd-ib" data-act="rdfs" data-d="1" aria-label="Bigger text">A+</button>
    <button class="rd-ib" data-act="rdcopy" data-id="${esc(t.id)}" aria-label="Copy link">${ico.share}<span class="t">Share</span></button>
    <button class="rd-ib" data-act="closemodal" aria-label="Close">${ico.x}</button></div>
  <article class="rd-wrap">
    <div class="rd-meta"><span class="cat-chip">${CATS[t.c]||"Article"}</span>${e?'<span class="cat-chip pub-chip">From the public</span>':""}<span>${ago(t.at)}</span><span>·</span><span>${rdMins(t)} min read</span>${t.removed?'<span class="status st-new">Removed by admin</span>':""}</div>
    <h1 class="rd-t">${esc(t.t)}</h1>${t.s?`<p class="rd-lead">${esc(t.s)}</p>`:""}
    <div class="rd-auth">${i}</div>
    <div class="rd-hero">${art(t.art||"desk",t.id)}</div>
    <div class="rd-body">${a?'<div class="skel" style="height:18px;margin:10px 0"></div><div class="skel" style="height:18px;margin:10px 0;width:92%"></div><div class="skel" style="height:18px;margin:10px 0;width:80%"></div>':paras(t.body)}</div>
    <p class="disc" style="margin-top:22px">Mutual fund investments are subject to market risks, read all scheme related documents carefully.</p>
    <div class="rd-acts">${likeBtn("article",t.id)}<button class="lk" data-act="rdjump">${ico.msg}<span class="num">${n}</span> Comment${n===1?"":"s"}</button>${isAdmin()&&!t.removed?`<button class="lk" data-act="xrm" data-k="article" data-id="${esc(t.id)}">${IC.ban} Remove</button>`:""}</div>
    ${rdShare(t)}
    ${e?"":`<section class="rd-sec"><h3>About the author</h3><div class="rd-about">${avatar(r,64)}<div style="min-width:0;flex:1"><b style="font-size:17px">${esc(r.display_name)}</b> ${rbadge(r.role)}${r.title?`<div class="muted" style="font-size:13.5px">${esc(r.title)}</div>`:""}<p>${esc(o&&o.bio||"Writes about mutual funds and personal finance on Muthaleetu Thisai.")}</p>${o?`<small class="muted">${o.followers||0} followers · ${o.articles||0} articles</small><br>`:""}<button class="btn btn-sm btn-ghost" style="margin-top:10px" data-act="pro" data-id="${r.id}">View profile</button></div></div></section>`}
    <section class="rd-sec" id="rd-cm"><h3>Comments (${n})</h3><div class="rd-cm">${commentsBlock("article",t.id)}</div></section>
    ${d?`<button class="rd-next" data-act="article" data-id="${esc(d.id)}"><span style="flex:1;min-width:0"><small>Read next</small><b>${esc(d.t)}</b></span><span style="font-size:26px">›</span></button>`:""}
  </article>
  ${s.length?`<section class="rd-more"><div class="in"><h2>More articles</h2><div class="rd-grid">${s.map(rdCard).join("")}</div></div></section>`:""}
  </div>`}window.articleModal=function(t){const a=rdFind(t);if(!a)return;const e=a.body==null&&sb;$("#layer").innerHTML=rdHtml(a,e),document.documentElement.classList.add("rd-open");try{location.hash!=="#article/"+encodeURIComponent(a.id)&&history.replaceState(null,"","#article/"+encodeURIComponent(a.id))}catch{}const r=$("#layer .rd");r&&(r.scrollTop=0,r.focus&&r.setAttribute("tabindex","-1"),r.focus({preventScroll:!0})),e&&sb.from("mt_articles").select("body").eq("id",a.id).maybeSingle().then(i=>{a.body=i.data&&i.data.body||"";const s=$("#layer .rd .rd-body");if(s&&$("#layer .rd").dataset.id===String(a.id)){s.innerHTML=paras(a.body);const d=$("#layer .rd .rd-meta");d&&(d.innerHTML=d.innerHTML.replace(/[0-9]+ min read/,rdMins(a)+" min read"))}})};const _closeModal16=closeModal;window.closeModal=function(){_closeModal16(),document.documentElement.classList.remove("rd-open");try{location.hash.startsWith("#article/")&&history.replaceState(null,"","#"+(UI.route||"home"))}catch{}};function rdRefresh(){const t=$("#layer .rd");if(!t)return;const a=t.scrollTop,e=rdFind(t.dataset.id);if(!e)return;$("#layer").innerHTML=rdHtml(e,!1);const r=$("#layer .rd");r&&(r.scrollTop=a)}document.addEventListener("click",t=>{const a=t.target.closest("[data-act]");if(!a||!a.closest("#layer .rd"))return;const e=a.dataset.act;if(e==="rdfs"){UI.rdFs=Math.max(15,Math.min(24,UI.rdFs+Number(a.dataset.d)));try{localStorage.setItem("mt_rdfs",String(UI.rdFs))}catch{}$("#layer .rd").style.setProperty("--rd-fs",UI.rdFs+"px")}if(e==="rdcopy"){const r=rdFind(a.dataset.id);if(r){const i=rdUrl(r);navigator.share&&matchMedia("(max-width:760px)").matches?navigator.share({title:r.t,text:r.s||r.t,url:i}).catch(()=>{}):copy(r.t+NL+i)}}if(e==="rdjump"){const r=document.getElementById("rd-cm");r&&r.scrollIntoView({behavior:"smooth"})}e==="xfollow"&&setTimeout(rdRefresh,60)}),document.addEventListener("scroll",t=>{const a=t.target;if(!a||!a.classList||!a.classList.contains("rd"))return;const e=a.querySelector(".rd-prog i");if(!e)return;const r=a.scrollHeight-a.clientHeight;e.style.width=(r>0?Math.min(100,a.scrollTop/r*100):0)+"%"},!0),(function(){const t=()=>{const r=location.hash;return r.startsWith("#article/")?decodeURIComponent(r.slice(9)):""};let a=0;const e=setInterval(()=>{a++;const r=t();if(!r){clearInterval(e);return}rdFind(r)?(clearInterval(e),articleModal(r)):a>60&&clearInterval(e)},250);window.addEventListener("hashchange",()=>{const r=t();r&&rdFind(r)&&!($("#layer .rd")&&$("#layer .rd").dataset.id===r)&&articleModal(r)})})();
