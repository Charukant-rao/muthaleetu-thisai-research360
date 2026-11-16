/* /js/app81.js */
try{
(function(){if(typeof authModal!="function")return;const l=()=>{try{return lpFreeOn()}catch{return!0}},u=()=>{try{return lpUntilText()}catch{return"31 Dec 2026"}},i=()=>{try{return lpMonthly()}catch{return 2}};function a(){if(!l())return;const t=document.getElementById("layer");if(!t)return;const e=t.querySelector('form[data-form="auth"]');if(!e)return;const r=e.querySelector(".plan-chosen span");r&&/₹|year|month|pay/i.test(r.textContent)&&/Publisher/i.test(r.textContent)&&(r.innerHTML="<b>Publisher</b> · Free until "+u()),e.querySelectorAll("button").forEach(n=>{/continue to payment/i.test(n.textContent)&&(n.textContent="Create account")}),t.querySelectorAll("p").forEach(n=>{/you choose Publisher|you will pay|WELCOME50|a year,/i.test(n.textContent)&&(n.textContent="Publish up to "+i()+" articles a month in Tamil or English, free until "+u()+". No payment needed.")})}const s=window.authModal;window.authModal=function(){const t=s.apply(this,arguments);try{a()}catch{}return t};let o=null;const c=()=>{const t=document.getElementById("layer");t&&new MutationObserver(()=>{o||(o=setTimeout(()=>{o=null;try{a()}catch{}},0))}).observe(t,{childList:!0,subtree:!0,characterData:!0})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c()})();

}catch(e){setTimeout(function(){throw e})}
/* /js/app82.js */
try{
(function(){const t=document.createElement("style");t.textContent="@media (max-width:640px){#mast .mast-r .icon-btn[data-act='theme']{display:none!important}}",document.head.appendChild(t)})();

}catch(e){setTimeout(function(){throw e})}