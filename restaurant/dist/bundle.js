(()=>{"use strict";var e,n,t,r,o,i,a,c,d,s,l,p,u,m,f={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\n    margin: 0px;\n    background-color: rgb(36, 57, 77);\n}\n\np {\n    margin: 0px;\n}\n\nh1 {\n    color: blue;\n}\n\n#content {\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\nheader {\n    text-align: center;\n}\n\n#navbar {\n    display: flex;\n    flex-direction: row;\n    color: white;\n    justify-content: space-evenly;\n    /* font-size: 48px; */\n    padding: 0px;\n}\n\n.nav-item {\n    margin-bottom: 0px;\n    margin-top: 0px;\n    /* margin: auto; */\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 36px\n}\n\n.nav-item:hover {\n    color: rgb(81, 102, 160);\n}\n\n#jumbo {\n    position: relative;\n    width: 100vw;\n    display: block;\n    text-align: center;\n    margin-bottom: 0px;\n}\n\n#biz-name {\n    font-size: 72px;\n    font-family:Arial, Helvetica, sans-serif;\n    color: rgb(249, 249, 249);\n    position: absolute;\n    width: 100%;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.biz-details {\n    position: absolute;\n    width: 100%;\n    color: white;\n    bottom: 10%;\n    font-size: 36px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#biz-description {\n    text-align: center;\n    margin: auto;\n    width: 55%;\n    color: white;\n    padding: 20px;\n    font-size: 24px;\n}\n.jumbo-image {\n\n    width: 100%;\n    height: auto;\n}\n\n#bottom-border {\n    width: 100%;\n    height: 50px;\n    background-color: black;\n    /* margin-bottom: 0px; */\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: 0px;\n}\n\n#bottom-text {\n    color: white;\n    text-align: center;\n    width: 140px;\n}\n\n#media {\n    width: 100%;\n    text-align: center;\n}\n\n/* This is how you can scale different sized images and \nkeep aspect scale mostly */\n.menu-image {\n    float: left;\n    width:  100vw;\n    height: auto;\n    object-fit: cover;\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(n[u].references++,n[u].updater(m)):n.push({identifier:p,updater:o(m,r),references:1}),a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},756:(e,n,t)=>{e.exports=t.p+"a89a6303c2f9b7c06793.jpeg"},794:(e,n,t)=>{e.exports=t.p+"ad2c39f25aab85ed946e.jpeg"},703:(e,n,t)=>{e.exports=t.p+"f2098818d06558fb65de.jpeg"},786:(e,n,t)=>{e.exports=t.p+"a840f9c3a935926b43ed.jpeg"}},h={};function b(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,b),t.exports}b.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return b.d(n,{a:n}),n},b.d=(e,n)=>{for(var t in n)b.o(n,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var n=b.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),e=b(379),n=b.n(e),t=b(795),r=b.n(t),o=b(569),i=b.n(o),a=b(565),c=b.n(a),d=b(216),s=b.n(d),l=b(589),p=b.n(l),u=b(426),(m={}).styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,b(756),b(786),b(703),b(794),console.log("Scripts loading....."),function(){let e=document.createElement("div");e.setAttribute("id","navbar");let n=document.createElement("h4"),t=document.createElement("h4"),r=document.createElement("h4");n.classList.add("nav-item"),t.classList.add("nav-item"),r.classList.add("nav-item"),n.innerText="Home",t.innerText="Menu",r.innerText="Contact",e.appendChild(n),e.appendChild(t),e.appendChild(r),document.querySelector("#content").appendChild(e)}(),function(){const e=document.createElement("div");e.setAttribute("id","jumbo");const n=document.createElement("h1");n.setAttribute("id","biz-name"),n.innerText="Village Top Tavern";const t=document.createElement("div");t.classList.add("biz-details");const r=document.createElement("p"),o=document.createElement("p");r.innerText="Open daily from 4pm-12am!",o.innerText="Call and make a reservation today!",t.appendChild(r),t.appendChild(o);const i=document.createElement("img");i.classList.add("jumbo-image"),i.setAttribute("src","./media_test/crowded-bar.png"),e.appendChild(n),e.appendChild(t),e.append(i),document.querySelector("#content").appendChild(e)}(),function(){let e=document.createElement("div");e.setAttribute("id","biz-description");let n=document.createElement("p");n.innerText="VTT is your go to place for good food, good drinks, and good atmospohere! Happy hour from 4-6 daily!",e.appendChild(n),document.querySelector("#content").appendChild(e)}(),function(){let e=document.createElement("div");e.setAttribute("id","bottom-border");let n=document.createElement("div");n.setAttribute("id","bottom-text"),n.innerText="Village Top Tavern 555 Main St. Smalltown, USA",e.appendChild(n),document.querySelector("#content").appendChild(e)}()})();