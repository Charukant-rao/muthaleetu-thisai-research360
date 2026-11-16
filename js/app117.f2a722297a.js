(function(){const e=document.createElement("style");e.textContent=`
.md-cover .md-cv{width:auto;aspect-ratio:auto;overflow:visible;border:0;border-radius:0;display:flex;flex-direction:column;align-items:stretch;gap:10px}
.md-cover .md-cvp{width:100%;height:auto;aspect-ratio:16/9;box-sizing:border-box}
.md-cover .md-cvp:not(:has(img)){cursor:pointer}
.md-cover .md-cvb{display:flex;gap:8px;flex-wrap:wrap}
.md-cover .md-cvb .btn{flex:1 1 auto;justify-content:center}
.md-cover .md-file input{font-size:0}
.md-cover>small{display:block;margin-top:6px}
`,document.head.appendChild(e)})(),document.addEventListener("click",e=>{const t=e.target.closest&&e.target.closest(".md-cover .md-cvp");if(!t||t.querySelector("img"))return;const o=t.closest(".md-cover").querySelector("#md_cover");o&&o.click()});
