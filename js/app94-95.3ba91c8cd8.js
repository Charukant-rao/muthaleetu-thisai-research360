/* /js/app94.js */
try{
(function(){if(typeof window.brFix!="function")return;const n=window.brFix,a=()=>{const e=new Set,r=t=>{t=String(t||"").trim(),t&&/Fortune|FISPL/.test(t)&&e.add(t)};try{r(S.profile&&S.profile.name)}catch{}try{(DB.pubs||[]).forEach(t=>r(t.display_name))}catch{}try{(DB.members||[]).forEach(t=>{r(t.display_name),r(t.name)})}catch{}try{(DB.admUsers||[]).forEach(t=>{r(t.display_name),r(t.name)})}catch{}try{Object.values(DB.profiles||{}).forEach(t=>r(t&&t.display_name))}catch{}return e};window.brFix=function(e){if(!e)return e;const r=String(e).trim();return r&&/Fortune|FISPL/.test(r)&&a().has(r)?e:n.apply(this,arguments)},setTimeout(()=>{try{render()}catch{}},0)})();

}catch(e){setTimeout(function(){throw e})}
/* /js/app95.js */
try{
(function(){const e=document.createElement("style");if(e.textContent=".mm-pubtag{display:inline-block;margin-left:8px;font-size:11.5px;font-weight:700;border-radius:999px;padding:2px 9px;background:#e8f4ec;color:#166534;vertical-align:middle;text-transform:capitalize}",document.head.appendChild(e),typeof mmRole=="function"){const n=mmRole;window.mmRole=function(t){const i=n.apply(this,arguments);return t&&t.role==="admin"?i+`<span class="mm-pubtag">${typeof S<"u"&&S.lang==="ta"?"வெளியீட்டாளர்":"Publisher"}</span>`:i}}if(typeof mmMatch=="function"){const n=mmMatch;window.mmMatch=function(t){return UI.mmF==="publisher"&&t&&t.role==="admin"?n.call(this,Object.assign({},t,{role:"publisher"})):n.apply(this,arguments)}}})();

}catch(e){setTimeout(function(){throw e})}