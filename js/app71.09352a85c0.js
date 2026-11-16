(function(){const d=document.createElement("style");d.textContent=`
.mfd-view{flex:none}
.mfd-view button{display:inline-flex;gap:6px;align-items:center}
.mfd-tw{margin-top:14px;border:1px solid var(--line);border-radius:14px;overflow:auto;background:var(--surface);box-shadow:0 6px 18px rgba(15,23,42,.05)}
.mfd-tbl{width:100%;border-collapse:collapse;font-size:14px}
.mfd-tbl th{position:sticky;top:0;z-index:1;text-align:left;font-size:12px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);background:var(--surface-3);padding:11px 12px;white-space:nowrap;border-bottom:1px solid var(--line)}
.mfd-tbl th button{all:unset;cursor:pointer;display:inline-flex;gap:4px;align-items:center}
.mfd-tbl th button:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:4px}
.mfd-tbl th .so{font-size:10px;opacity:.45}
.mfd-tbl th.on .so{opacity:1;color:var(--primary)}
.mfd-tbl td{padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:middle}
.mfd-tbl tbody tr:last-child td{border-bottom:0}
.mfd-tbl tbody tr:hover td{background:color-mix(in srgb,var(--primary) 5%,transparent)}
.mfd-tbl .n{color:var(--muted);font-variant-numeric:tabular-nums;width:1%}
.mfd-tbl .who{display:flex;gap:10px;align-items:center;min-width:180px}
.mfd-tbl .who b{display:block;line-height:1.3}
.mfd-tbl .arn{font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums}
.mfd-tbl .arn .mfd-ok{margin-left:6px}
.mfd-tbl .pin{font-variant-numeric:tabular-nums;white-space:nowrap}
.mfd-tbl .ct{display:flex;gap:6px;flex-wrap:nowrap}
/* full grid: a border round every cell */
@media (min-width:701px){
 .mfd-tw{border:1px solid #c9d6e5}
 .mfd-tbl{border-collapse:collapse}
 .mfd-tbl th,.mfd-tbl td{border:1px solid #d5e0ec}
 .mfd-tbl th{border-bottom:2px solid #b9c9dc;background:var(--surface-3)}
 .mfd-tbl tr > :first-child{border-left:0}
 .mfd-tbl tr > :last-child{border-right:0}
 .mfd-tbl thead tr:first-child th{border-top:0}
 .mfd-tbl tbody tr:last-child td{border-bottom:0}
 .mfd-tbl td{vertical-align:middle}
 .mfd-tbl tbody tr:nth-child(even) td{background:color-mix(in srgb,var(--surface-3) 45%,transparent)}
 .mfd-tbl .n{text-align:center}
 .mfd-tbl td[data-l="State"],.mfd-tbl td:nth-child(5){white-space:nowrap}
}
html[data-theme="dark"] .mfd-tw,html[data-theme="dark"] .mfd-tbl th,html[data-theme="dark"] .mfd-tbl td{border-color:#2a4262}
@media (prefers-color-scheme: dark){html:not([data-theme="light"]) .mfd-tw,html:not([data-theme="light"]) .mfd-tbl th,html:not([data-theme="light"]) .mfd-tbl td{border-color:#2a4262}}
.mfd-tbl .cd{display:flex;flex-direction:column;gap:3px;margin-bottom:7px;min-width:190px}
.mfd-tbl .cd a,.mfd-cd a{display:inline-flex;gap:6px;align-items:center;color:var(--ink);font-weight:600;font-size:13.5px;text-decoration:none;white-space:nowrap;text-transform:none}
@media (min-width:701px){.mfd-tbl .cd{min-width:max-content}}
@media (max-width:380px){.mfd-tbl .cd a,.mfd-cd a{white-space:normal;overflow-wrap:anywhere}}
.mfd-tbl .cd a:hover,.mfd-cd a:hover{color:var(--primary);text-decoration:underline}
.mfd-tbl .cd svg,.mfd-cd svg{flex:none;color:var(--primary)}
.mfd-cd{display:flex;flex-direction:column;gap:5px;padding:8px 10px;border-radius:10px;background:var(--surface-2,var(--chip))}
.mfd-tbl .ct a{padding:5px 10px;font-size:12.5px;white-space:nowrap}
@media (max-width:700px){
 .mfd-tw{overflow:visible;border:0;background:none;box-shadow:none}
 .mfd-tbl thead{display:none}
 .mfd-tbl,.mfd-tbl tbody,.mfd-tbl tr,.mfd-tbl td{display:block;width:auto}
 .mfd-tbl tr{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:10px 12px;margin-bottom:10px}
 .mfd-tbl td{border:0;padding:3px 0;display:grid;grid-template-columns:84px 1fr;gap:8px;align-items:center}
 .mfd-tbl td::before{content:attr(data-l);font-size:12px;font-weight:700;color:var(--muted)}
 .mfd-tbl td.n{display:none}
 .mfd-tbl td.wh{display:block;padding-bottom:6px}
 .mfd-tbl td.wh::before{content:none}
 .mfd-tbl td.cc{display:block;padding-top:8px}
 .mfd-tbl td.cc::before{content:none}
 .mfd-tbl .ct a{flex:1 1 0;text-align:center;justify-content:center}
 .mfd-tbl tbody tr:hover td{background:none}
 .mfd-view{width:100%}
 .mfd-view button{flex:1;justify-content:center}
}`,document.head.appendChild(d)})();const MFD_ICO_T='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/></svg>',MFD_ICO_C='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>';(function(){try{DIR.view=localStorage.getItem("mt_mfd_view")==="cards"?"cards":"table"}catch{DIR.view="table"}DIR.sort=null,DIR.dir=1;function d(){const t=DIR.view;return`<div class="seg mfd-view" role="group" aria-label="View"><button type="button" class="${t==="table"?"on":""}" aria-pressed="${t==="table"}" data-act="mfdview" data-v="table">${MFD_ICO_T}Table</button><button type="button" class="${t==="cards"?"on":""}" aria-pressed="${t==="cards"}" data-act="mfdview" data-v="cards">${MFD_ICO_C}Cards</button></div>`}function o(t,a){if(a==="arn"){const e=mfdDigits(t.arn);return e?Number(e):1/0}return String(a==="name"?t.name:a==="city"?[t.city,t.area].filter(Boolean).join(" "):t.state||"").toLowerCase()}function r(t,a){const e=DIR.sort===t,i=e?DIR.dir>0?"▲":"▼":"▲▼";return`<th class="${e?"on":""}" aria-sort="${e?DIR.dir>0?"ascending":"descending":"none"}"><button type="button" data-act="mfdsort" data-v="${t}">${a}<span class="so" aria-hidden="true">${i}</span></button></th>`}const n=t=>S.lang==="ta"&&window.MT_TA_DICT&&window.MT_TA_DICT[t]||t;function l(t,a){const e="https://wa.me/91"+t.phone+"?text="+encodeURIComponent("Hello "+t.name+", I found you on Muthaleetu Thisai (Find a Distributor). I would like to know about mutual funds."),i=t.verified?'<span class="mfd-ok" title="Our team matched this ARN with the AMFI list">ARN checked</span>':"";return`<tr><td class="n">${a+1}</td>
      <td class="wh" data-l="${n("Distributor")}"><div class="who"><b>${esc(t.name)}</b></div></td>
      <td data-l="${n("ARN")}"><span class="arn">${esc(mfdDigits(t.arn)||t.arn)}${i}</span></td>
      <td data-l="${n("Area / City")}">${esc([t.area,t.city].filter(Boolean).join(", "))}</td>
      <td data-l="${n("State")}">${esc(t.state||"")}</td>
      <td data-l="${n("Pincode")}"><span class="pin">${esc(t.pincode||"")}</span></td>
      <td class="cc" data-l="${n("Contact Details")}"><div class="cd">${t.phone?`<a href="tel:+91${esc(t.phone)}" class="num">${MFD_PH}${esc(mfdFmtPhone(t.phone))}</a>`:""}${t.email?`<a href="mailto:${esc(t.email)}">${MFD_EM}${esc(t.email)}</a>`:""}</div><div class="ct"><a class="btn btn-sm btn-o" href="tel:+91${esc(t.phone)}">Call</a><a class="btn btn-sm btn-ghost" href="${esc(e)}" target="_blank" rel="noopener noreferrer">WhatsApp</a><a class="btn btn-sm btn-ghost" href="mailto:${esc(t.email)}">Email</a></div></td></tr>`}const s=mfdResults;window.mfdResults=function(){if(DIR.view!=="table"||!Array.isArray(DIR.list))return s.apply(this,arguments);const t=DIR.list.filter(mfdMatch);if(!DIR.list.length||!t.length)return s.apply(this,arguments);if(DIR.sort){const e=DIR.sort,i=DIR.dir;t.sort((b,p)=>{const c=o(b,e),f=o(p,e);return c<f?-i:c>f?i:0})}return`<p class="mfd-count">${t.length===1?"1 distributor":t.length.toLocaleString("en-IN")+" distributors"}${DIR.state?" in "+esc(DIR.state):""}</p>`+`<div class="mfd-tw"><table class="mfd-tbl"><thead><tr><th>#</th>${r("name","Distributor")}${r("arn","ARN")}${r("city","Area / City")}${r("state","State")}<th>Pincode</th><th>Contact Details</th></tr></thead><tbody>${t.map(l).join("")}</tbody></table></div>`};const m=pageDistributors;if(window.pageDistributors=function(){const t=m.apply(this,arguments),a=t.indexOf("</select></div>");return a<0?t:t.slice(0,a)+"</select>"+d()+"</div>"+t.slice(a+15)},document.addEventListener("click",t=>{const a=t.target.closest&&t.target.closest('[data-act="mfdview"],[data-act="mfdsort"]');if(a){if(t.preventDefault(),t.stopPropagation(),a.dataset.act==="mfdview"){DIR.view=a.dataset.v==="cards"?"cards":"table";try{localStorage.setItem("mt_mfd_view",DIR.view)}catch{}document.querySelectorAll(".mfd-view button").forEach(e=>{const i=e.dataset.v===DIR.view;e.classList.toggle("on",i),e.setAttribute("aria-pressed",String(i))})}else{const e=a.dataset.v;DIR.sort===e?DIR.dir=-DIR.dir:(DIR.sort=e,DIR.dir=1)}if(mfdPaint(),S.lang==="ta")try{trAll()}catch{}}},!0),UI.route==="distributors")try{render()}catch{}})(),(function(){const d={"Contact Details":"தொடர்பு விவரங்கள்",Table:"அட்டவணை",Cards:"அட்டைகள்",Distributor:"விநியோகஸ்தர்","Area / City":"பகுதி / நகரம்",State:"மாநிலம்",Pincode:"அஞ்சல் குறியீடு",Contact:"தொடர்பு",Call:"அழை",Email:"மின்னஞ்சல்","ARN checked":"ARN சரிபார்க்கப்பட்டது"};window.MT_TA_EXTRA?Object.assign(window.MT_TA_EXTRA,d):window.MT_TA_EXTRA=d;function o(){if(window.MT_TA_DICT){Object.keys(d).forEach(r=>{r in window.MT_TA_DICT||(window.MT_TA_DICT[r]=d[r])});try{trPrefixes=null}catch{}return!0}return!1}if(!o()){let r=0;const n=setInterval(()=>{if(r++,o()){clearInterval(n);try{S.lang==="ta"&&trAll()}catch{}}else r>200&&clearInterval(n)},300)}})();
