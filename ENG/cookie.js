!function(e){if(e.cookieChoices)return e.cookieChoices;var t=e.document,i="textContent"in t.body,o=function(){var e="displayCookieConsent",o="cookieChoiceInfo",n="cookieChoiceDismiss";function a(e,t){i?e.textContent=t:e.innerText=t}function r(e){var i=t.createElement("span");return a(i,e),i}function c(e){var i=t.createElement("a");return a(i,e),i.id=n,i.href="#",i.style.marginLeft="24px",i}function l(e,i){var o=t.createElement("a");return a(o,e),o.id="policy",o.href=i,o.target="_blank",o.style.marginLeft="8px",o}function d(){var i;return(i=new Date).setFullYear(i.getFullYear()+1),t.cookie=e+"=y; expires="+i.toGMTString(),s(),!1}function p(i,a,p,u,h){if(!t.cookie.match(new RegExp(e+"=([^;]+)"))){s();var f=h?function(e,i,n,a){var d=t.createElement("div");d.id=o;var p=t.createElement("div");p.style.cssText="position:absolute;width:100%;height:100%;z-index:999;top:0;left:0;opacity:0.5;filter:alpha(opacity=50);background-color:#ccc;";var s=t.createElement("div");s.style.cssText="position:relative;left:-50%;margin-top:-25%;background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;";var u=t.createElement("div");u.style.cssText="z-index:1000;position:absolute;left:50%;top:50%";var h=c(i);return h.style.display="block",h.style.textAlign="right",h.style.marginTop="8px",s.appendChild(r(e)),n&&a&&s.appendChild(l(n,a)),s.appendChild(h),u.appendChild(s),d.appendChild(p),d.appendChild(u),d}(i,a,p,u):function(e,i,n,a){var d=t.createElement("div");return d.id=o,d.style.cssText="position:fixed;bottom:0;width:100%;background-color:#fafafa;margin:0; left:0; bottom:0;padding:4px;z-index:1000;text-align:center;",d.appendChild(r(e)),n&&a&&d.appendChild(l(n,a)),d.appendChild(c(i)),d}(i,a,p,u),C=t.createDocumentFragment();C.appendChild(f),t.body.appendChild(C.cloneNode(!0)),t.getElementById(n).onclick=d}}function s(){var e=t.getElementById(o);null!=e&&e.parentNode.removeChild(e)}var u={showCookieConsentBar:function(e,t,i,o){p(e,t,i,o,!1)},showCookieConsentDialog:function(e,t,i,o){p(e,t,i,o,!0)}};return u}();e.cookieChoices=o}(this),document.addEventListener("DOMContentLoaded",function(e){cookieChoices.showCookieConsentBar("This site uses cookie in order to  improve the services offered to you such as the experience of the readers. If you choose to continue surfing our site we consider that you have read and accepted the cookie policy (the use of cookie). Please read our it.","I AGREE","Cookie Policy","cookiepolicy.html")});