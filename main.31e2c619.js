parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".contact__form"),t=document.querySelectorAll(".contact__field");function n(e){e.preventDefault(),t.forEach(function(e){e.value=""})}e.addEventListener("submit",n);var c=document.querySelector(".mobile-nav-button"),o=document.querySelector(".mobile-nav-button__icon"),i=document.querySelector(".mobile-nav");c.addEventListener("click",function(){o.classList.toggle("mobile-nav-button__icon--active"),document.body.classList.toggle("page__body--no-scroll"),i.classList.toggle("mobile-nav--active")}),window.addEventListener("hashchange",function(){"#popup-menu"!==window.location.hash&&(o.classList.remove("mobile-nav-button__icon--active"),document.body.classList.remove("page__body--no-scroll"),i.classList.remove("mobile-nav--active"))});var r=document.querySelector(".features__article"),l=document.querySelector(".features__btn-left"),a=document.querySelector(".features__btn-right"),s=document.querySelector(".features__counter"),u=1,d=r.children.length;function _(e){(u=e)>d-1?u=0:u<0&&(u=d-1),s.textContent="0"+(u+1).toString(),r.style.transform="translateX(".concat(100*-u,"%)")}a.addEventListener("click",function(){_(u+1)}),l.addEventListener("click",function(){_(u-1)});for(var v=document.querySelector(".benefits__slider-list"),f=document.querySelector(".benefits__prev"),m=document.querySelector(".benefits__next"),b=document.querySelector(".benefits__dot-container"),y=0,L=v.children.length,h=function(e){b.children[e].addEventListener("click",function(){q(e)})},S=0;S<b.children.length;S++)h(S);function g(e){var t=b.querySelector(".benefits__dot--active");t&&t.classList.remove("benefits__dot--active"),b.children[e].classList.add("benefits__dot--active")}function q(e){(y=e)>L-1?y=0:y<0&&(y=L-1),g(y),v.style.transform="translateX(".concat(100*-y,"%)")}m.addEventListener("click",function(){q(y+1)}),f.addEventListener("click",function(){q(y-1)}),q(0);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.31e2c619.js.map