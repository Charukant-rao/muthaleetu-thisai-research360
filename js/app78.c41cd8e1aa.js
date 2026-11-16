(function(){const t=document.createElement("style");t.id="mtHeaderCase",t.textContent=`
:where(h1,h2,h3,h4,h5,h6,#navlinks a,#mast button,button,.btn,a.btn,label,.field > label,th,legend,summary,
  .ptab,.x7-tab,.pill,.chip,.tab,.tabs button,.seg button,.mini-badge,.rbadge,.x7-badge,.status,.x7-st,.lp-tag,.pp-tag,
  .modal-h h3,.sec-h h1,.sec-h h2,.sec-h h3,.brand-sub,#foot a,#foot h4,#foot h5,.mi,.menu a,.dd a,.x7-pstats small,.x7-dates small,.x7-kv dt,select,option,optgroup,.x7-join b,.mfd-join b,.lp-card h4){text-transform:capitalize}
/* running text and people's own writing stay exactly as typed */
:where(.ar-body,.rd-body,.post-b,.ig-txt,.ig-ttl,.news-t,.cmt,.comment,.x7-sum,.x7-bio,textarea,input,[contenteditable="true"]) :where(h1,h2,h3,h4,h5,h6,button,a,label,th,span,b,strong){text-transform:none}
:where(button,.btn,label) :where(p,small,.muted,.desc){text-transform:none}
:where(.x7-web a,a[href^="mailto:"],a[href^="http"]:not(.btn)){text-transform:none}
/* START FREE */
.bp-go,.x7-join [data-act="becomepub"]{text-transform:uppercase!important;letter-spacing:.04em}
`,document.head.appendChild(t)})();
