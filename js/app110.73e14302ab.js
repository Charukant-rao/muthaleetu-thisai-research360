(function(){const d=document.createElement("style");d.textContent=`
.md-tbl,.mfd-tbl{border-collapse:separate!important;border-spacing:0!important}
.md-tbl th,.md-tbl td{border:0!important;border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important}
.md-tbl tr>:last-child{border-right:0!important}.md-tbl tbody tr:last-child td{border-bottom:0!important}
.md-tbl thead th{box-shadow:inset 0 -1px 0 var(--line)}
@media (min-width:701px){
 .mfd-tbl th,.mfd-tbl td{border:0!important;border-right:1px solid #d5e0ec!important;border-bottom:1px solid #d5e0ec!important}
 .mfd-tbl th{border-bottom:2px solid #b9c9dc!important}
 .mfd-tbl tr>:last-child{border-right:0!important}.mfd-tbl tbody tr:last-child td{border-bottom:0!important}
 html[data-theme="dark"] .mfd-tbl th,html[data-theme="dark"] .mfd-tbl td{border-color:#2a4262!important}
}
html.y10-scr .md-tbl tr:hover td,html.y10-scr .mfd-tbl tbody tr:hover td{background:inherit!important}
html.y10-scr .mfd-tbl tbody tr:nth-child(even):hover td{background:color-mix(in srgb,var(--surface-3) 45%,transparent)!important}
.md-tw,.mfd-tw{-webkit-overflow-scrolling:touch}`,document.head.appendChild(d);const o=document.documentElement;let e=null,r=!1;const l=()=>{r||(r=!0,o.classList.add("y10-scr")),clearTimeout(e),e=setTimeout(()=>{r=!1,o.classList.remove("y10-scr")},140)};window.addEventListener("scroll",l,{passive:!0}),document.addEventListener("scroll",a=>{const t=a.target;t&&t.classList&&(t.classList.contains("md-tw")||t.classList.contains("mfd-tw"))&&l()},{passive:!0,capture:!0})})();
