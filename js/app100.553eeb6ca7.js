(function(){const o=document.createElement("style");o.textContent=`
.art-photo{background:#0f172a;overflow:hidden}
.art.art-photo img.cv-bg{position:absolute!important;inset:-12%!important;width:124%!important;height:124%!important;max-width:none!important;object-fit:cover!important;filter:blur(18px) saturate(1.1) brightness(.9);opacity:.85;display:block;transform:none!important}
.art.art-photo img.cv-fg{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;display:block;z-index:1}
`,document.head.appendChild(o);const i=window.art;window.art=function(t,r,n){if(typeof mdOk=="function"&&mdOk(t)){const a=esc(t);return`<div class="art art-photo" ${n||""}><img class="cv-bg" src="${a}" alt="" aria-hidden="true" loading="lazy"><img class="cv-fg" src="${a}" alt="" loading="lazy"></div>`}return i.apply(this,arguments)};try{render()}catch{}})();
