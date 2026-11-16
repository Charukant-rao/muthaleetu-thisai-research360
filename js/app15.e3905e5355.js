(function(){const t=document.createElement("style");t.textContent=`
.th{position:fixed;inset:0;z-index:90;display:flex;align-items:center;justify-content:center;padding:14px;
  background:radial-gradient(900px 500px at 15% 10%,rgba(99,102,241,.28),transparent 60%),radial-gradient(800px 500px at 90% 95%,rgba(34,211,238,.18),transparent 60%),rgba(4,5,18,.94);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);animation:thIn .22s ease-out;color:#e9e8ff}
@keyframes thIn{from{opacity:0}to{opacity:1}}
@keyframes thUp{from{opacity:0;transform:translateY(14px) scale(.985)}to{opacity:1;transform:none}}
.th::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.35;
  background-image:linear-gradient(rgba(129,140,248,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(129,140,248,.07) 1px,transparent 1px);background-size:44px 44px;
  mask-image:radial-gradient(closest-side,#000,transparent)}
.th-x{position:absolute;top:14px;right:16px;z-index:3;width:46px;height:46px;border-radius:50%;display:grid;place-items:center;color:#fff;
  background:rgba(255,255,255,.08);border:1px solid rgba(165,180,252,.35);box-shadow:0 0 20px rgba(99,102,241,.35);transition:transform .15s,background .15s}
.th-x:hover{background:rgba(99,102,241,.45);transform:rotate(90deg)}
.th-stage{position:relative;z-index:1;display:flex;gap:22px;align-items:center;justify-content:center;max-width:100%;animation:thUp .28s ease-out}
.th-frame{position:relative;border-radius:18px;overflow:hidden;background:#000;
  box-shadow:0 0 0 1px rgba(165,180,252,.35),0 0 50px rgba(99,102,241,.45),0 30px 80px rgba(0,0,0,.6)}
.th-frame::after{content:"";position:absolute;inset:0;border-radius:18px;pointer-events:none;padding:1px;
  background:linear-gradient(135deg,rgba(129,140,248,.9),rgba(34,211,238,.6),rgba(240,195,90,.6));
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
.th-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.th-v .th-stage{flex-direction:column;gap:14px}
.th-v .th-frame{width:min(96vw,calc((100vh - 128px) * 16 / 9));aspect-ratio:16/9}
.th-v .th-info{width:min(96vw,calc((100vh - 128px) * 16 / 9));display:flex;gap:14px;align-items:center;justify-content:space-between}
.th-s .th-frame{height:calc(100vh - 36px);aspect-ratio:9/16;max-width:calc(100vw - 420px)}
.th-s .th-info{width:340px;flex-direction:column;align-items:stretch;display:flex;gap:14px}
.th-meta{min-width:0}
.th-kick{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#a5f3fc}
.th-kick i{width:8px;height:8px;border-radius:50%;background:#22d3ee;box-shadow:0 0 10px #22d3ee;animation:pulse 1.6s infinite}
.th-t{margin:6px 0 4px;font-size:clamp(16px,1.5vw,22px);font-weight:800;line-height:1.3;color:#fff;overflow-wrap:anywhere;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.th-s .th-t{-webkit-line-clamp:4}
.th-sub{font-size:13.5px;color:#a9a6d6}
.th-acts{display:flex;gap:10px;align-items:center;flex-wrap:wrap;flex:none}
.th-btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:10px 16px;font-weight:700;font-size:14px;color:#fff;text-decoration:none;
  background:rgba(255,255,255,.07);border:1px solid rgba(165,180,252,.35);transition:background .15s,box-shadow .15s}
.th-btn:hover{background:rgba(99,102,241,.4);box-shadow:0 0 18px rgba(99,102,241,.5)}
.th-btn.yt{background:linear-gradient(135deg,#ef4444,#b91c1c);border-color:transparent}
.th-btn.yt:hover{box-shadow:0 0 22px rgba(239,68,68,.55)}
.th-nav{position:fixed;top:50%;transform:translateY(-50%);z-index:2;width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-size:28px;line-height:1;color:#fff;
  background:rgba(255,255,255,.07);border:1px solid rgba(165,180,252,.35);box-shadow:0 0 24px rgba(99,102,241,.3);transition:background .15s,transform .15s}
.th-nav:hover{background:rgba(99,102,241,.5);transform:translateY(-50%) scale(1.06)}
.th-nav.prev{left:18px}.th-nav.next{right:18px}
.th-count{font-size:12px;font-weight:700;color:#a9a6d6;letter-spacing:.08em}
.th-hint{font-size:12px;color:#7d79b0}
@media (max-width:900px){
  .th{padding:8px;align-items:flex-start;overflow:auto}
  .th-stage{flex-direction:column;gap:12px;padding-top:56px}
  .th-v .th-frame,.th-v .th-info{width:calc(100vw - 16px)}
  .th-v .th-info{flex-direction:column;align-items:flex-start}
  .th-s .th-frame{height:auto;width:min(calc(100vw - 16px),calc((100vh - 230px) * 9 / 16));max-width:none}
  .th-s .th-info{width:min(calc(100vw - 16px),420px)}
  .th-nav{display:none}
  .th-hint{display:none}
}`,document.head.appendChild(t)})();const TH_X='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';function thList(t){return t==="s"?DB.shorts||[]:DB.vids||[]}function theater(t,n){const a=thList(t),i=a.findIndex(p=>p.id===n),e=a[i];if(!e)return;const r="https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?autoplay=1&rel=0&playsinline=1&modestbranding=1",s=t==="s"?"https://www.youtube.com/shorts/"+encodeURIComponent(e.id):"https://www.youtube.com/watch?v="+encodeURIComponent(e.id),d=[e.chTitle,e.views?t==="s"?e.views:e.views+" views":"",e.ago].filter(Boolean).map(esc).join(" · "),l=a.length>1?'<button class="th-nav prev" data-act="thnav" data-d="-1" aria-label="Previous">‹</button><button class="th-nav next" data-act="thnav" data-d="1" aria-label="Next">›</button>':"",c=`<div class="th-acts"><a class="th-btn yt" href="${esc(s)}" target="_blank" rel="noopener">${IC.yt} Open in YouTube</a>${a.length>1?'<button class="th-btn" data-act="thnav" data-d="1">Next ›</button>':""}</div>`;$("#layer").innerHTML=`<div class="th th-${t}" data-act="closemodal-bg" role="dialog" aria-modal="true" aria-label="${esc(e.t)}" data-kind="${t}" data-id="${esc(e.id)}">
    <button class="th-x" data-act="closemodal" aria-label="Close">${TH_X}</button>${l}
    <div class="th-stage" data-act="closemodal-bg">
      <div class="th-frame"><iframe src="${r}" title="${esc(e.t)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
      <div class="th-info"><div class="th-meta"><span class="th-kick"><i></i>${t==="s"?"Now playing · Short":"Now playing"}</span><h3 class="th-t">${esc(e.t)}</h3><div class="th-sub">${d}</div>${t==="s"&&a.length>1?`<div class="th-count" style="margin-top:10px">${i+1} / ${a.length}</div>`:""}</div>
        ${c}${t==="s"?'<div class="th-hint">Use the ← → keys to move between shorts. Esc to close.</div>':""}</div>
    </div></div>`;const o=$("#layer .th-x");o&&o.focus()}window.videoModal=function(t){(DB.vids||[]).some(n=>n.id===t)&&theater("v",t)},window.shortModal=function(t){theater("s",t)};function thStep(t){const n=$("#layer .th");if(!n)return;const a=thList(n.dataset.kind),i=a.findIndex(e=>e.id===n.dataset.id);i<0||a.length<2||theater(n.dataset.kind,a[(i+t+a.length)%a.length].id)}document.addEventListener("click",t=>{const n=t.target.closest('[data-act="thnav"]');n&&(t.preventDefault(),thStep(Number(n.dataset.d)))}),document.addEventListener("keydown",t=>{$("#layer .th")&&(t.key==="ArrowRight"&&(t.preventDefault(),thStep(1)),t.key==="ArrowLeft"&&(t.preventDefault(),thStep(-1)))});
