/**
 * Util name: Ripple
 * Ripple JS
 * Last Updated: 06/02/2023
 */
!function(b,e){var f;document.onpointerdown=function(a){var g,h=a.target;if(f){var j=f;f=null,setTimeout(function(){j.parentNode&&j.parentNode.removeChild(j)},400)}for(h;h.classList&&!h.classList.contains(b);)h=h.parentNode;if(h&&h.classList&&h.classList.contains(b)){var k=a.x-h.getBoundingClientRect().left,l=a.y-h.getBoundingClientRect().top,i=Math.max(k,h.offsetWidth-k),m=Math.max(l,h.offsetHeight-l);i=Math.sqrt(i*i+m*m);var q=getComputedStyle(h).color,d="rgba"+q.slice(3,-1)+", 0.18)",m=cEl("i",{class:[e]});h.appendChild(m);var g=cEl("i",{style:{top:l-i+"px",left:k-i+"px",height:2*i+"px",width:2*i+"px",transform:"scale(0)",backgroundColor:d}});m.appendChild(g),f=m;var r=setTimeout(function(){g.style.transform="scale(1)"},24);document.onpointerup=document.onpointercancel=function(){document.onpointerup=document.onpointercancel=document.onpointermove=null,f.firstChild.style.opacity="0"},document.onpointermove=function(b){(a.rippleWidth<4-b.rippleWidth||a.rippleWidth>-4-b.rippleWidth||a.y<4-b.y||a.y>-4-b.y)&&(clearTimeout(r),document.onpointercancel())}}}}("ripple","ripple_container");
