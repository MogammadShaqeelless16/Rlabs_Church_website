function subsplashEmbed(e,t,r){t=t.replace(/^\/|\/$/g,""),e=e.replace(/^\/|\/$/g,"")
var a=t,n=getSapurl(window.location.search);-1===(a+=n?"/"+(n=(n=atob(n)).replace(/^\/|\/$/g,"")):"/"+e).indexOf("embed")&&(-1===a.indexOf("?")?a+="?embed=true":a+="&embed=true")
var i=document.createElement("iframe")
i.setAttribute("id",r),i.setAttribute("webkitallowfullscreen",!0),i.setAttribute("mozallowfullscreen",!0),i.setAttribute("allowfullscreen",!0),i.setAttribute("width","100%"),i.setAttribute("height","1000"),i.setAttribute("frameborder","0"),i.setAttribute("scrolling","no"),i.setAttribute("style","border:none; overflow: hidden;"),i.setAttribute("src",a),document.getElementById(r).parentElement.replaceChild(i,document.getElementById(r))
var o=document.getElementById(r).getBoundingClientRect().top,l=0
window.addEventListener("message",function(e){var t=e.data.eventType
if(e.data.pageHeight&&(document.getElementById(r).height=e.data.pageHeight,"route transition"===t&&l>0&&(o<200?window.scrollTo(0,0):window.scrollTo(0,o-60))),e.data.pageUrl){var a=getSapurl(window.location.search),n=window.location.href
n=a?n.replace(/(sapurl=)[^\&]+/,"$1"+e.data.pageUrl):n+"?sapurl="+e.data.pageUrl,"route transition"===t&&l>0&&window.history.replaceState({path:n},"",n)}"route transition"===t&&l++})}function getSapurl(e){var t=window.location.search.match(/sapurl=([^&]*)/)
if(t&&t[1])return t[1]}