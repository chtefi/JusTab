webpackJsonp([2,22],{15:function(e,n,t){"use strict";function o(e){t(245)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(247),r=t.n(i),c=t(248),a=t(8),u=o,s=a(r.a,c.a,!1,u,null,null);n.default=s.exports},16:function(e,n,t){"use strict";function o(e){t(249)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(252),r=t.n(i),c=t(265),a=t(8),u=o,s=a(r.a,c.a,!1,u,null,null);n.default=s.exports},245:function(e,n,t){var o=t(246);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(10)(o,i);o.locals&&(e.exports=o.locals)},246:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.switch {\n  user-select: none;\n}\n.switch .switch--label {\n    cursor: pointer;\n}\n.switch .switch--checkbox {\n    display: block;\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    width: 0;\n}\n.switch .switch--checkbox:checked + .switch--lever {\n      background-color: #80cdae;\n}\n.switch .switch--checkbox:checked + .switch--lever::after {\n      background-color: #009d5f;\n      left: 16px;\n}\n.switch .switch--checkbox:checked:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 128, 128, 0.1);\n}\n.switch .switch--checkbox:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n.switch .switch--checkbox[disabled] + .switch--lever {\n      cursor: default;\n}\n.switch .switch--checkbox[disabled] + .switch--lever::after,\n    .switch .switch--checkbox[disabled]:checked + .switch--lever::after {\n      background-color: #bdbdbd;\n}\n.switch .switch--lever {\n    background-color: #bcbcbc;\n    border-radius: 14px;\n    content: '';\n    display: inline-block;\n    height: 14px;\n    position: relative;\n    transition: background .3s ease;\n    vertical-align: middle;\n    width: 36px;\n}\n.switch .switch--lever::after {\n      background-color: #f1f1f1;\n      border-radius: 20px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4);\n      content: '';\n      display: inline-block;\n      height: 20px;\n      left: 0;\n      position: absolute;\n      top: -3px;\n      transition: left linear .08s, background linear .08s, box-shadow .1s ease;\n      width: 20px;\n}\n",""])},247:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{name:String,value:Boolean},methods:{toggleService:function(){this.$emit("input",this.name,!this.value)}}}},248:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"switch ripple--no"},[t("label",{staticClass:"switch--label",on:{click:e.toggleService}},[t("input",{staticClass:"switch--checkbox",attrs:{type:"checkbox",name:e.name},domProps:{checked:e.value}}),e._v(" "),t("span",{staticClass:"switch--lever"})])])},i=[],r={render:o,staticRenderFns:i};n.a=r},249:function(e,n,t){var o=t(250);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(10)(o,i);o.locals&&(e.exports=o.locals)},250:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.options-menu {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  float: left;\n  height: calc(100vh - 64px);\n  overflow: scroll;\n  padding: 8px 0 48px;\n  position: relative;\n  transition: width 400ms;\n  width: 256px;\n  z-index: 100;\n}\n.options-menu--link {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 16px 0 8px;\n    position: relative;\n    text-decoration: none;\n    transition: background-color 150ms;\n}\n.options-menu--link:hover, .options-menu--link.router-link-active {\n      background-color: #ebebeb;\n}\n.options-menu--switch {\n    float: right;\n}\n.options-menu--drag-handle {\n    background-image: url("+t(251)+");\n    background-position: 50%;\n    background-repeat: no-repeat;\n    cursor: ns-resize;\n    float: left;\n    height: 100%;\n    margin-right: 8px;\n    width: 20px;\n}\n.options-menu--support {\n    background-color: #fff;\n    border-top: solid 1px #ececec;\n    bottom: 0;\n    position: fixed;\n    width: 256px;\n    z-index: 10;\n    z-index: 10;\n}\n@media screen and (max-width: 580px) {\n.options-menu {\n    background-color: #fff;\n    left: 0;\n    position: absolute;\n    top: 64px;\n    width: 0;\n}\n.options-menu.options-menu__show {\n      width: 265px;\n}\n}\n",""])},251:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Ik0zLDE1aDE4di0ySDNWMTV6IE0zLDE5aDE4di0ySDNWMTl6IE0zLDExaDE4VjlIM1YxMXogTTMsNXYyaDE4VjVIM3oiLz4NCjwvc3ZnPg0K"},252:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(2),c=t(253),a=o(c),u=t(15),s=o(u);n.default={props:{showMenu:Boolean},components:{vSwitch:s.default},computed:i({},(0,r.mapGetters)(["sortedServices"])),methods:{onInput:function(e,n,t){this.saveData(e.id,n,!e.active)}},mounted:function(){(0,a.default)([this.$el],{moves:function(e,n,t){return t.className.includes("options-menu--drag-handle")},direction:"vertical"}).on("dragend",function(e){var n=[],t=document.querySelectorAll(".options-menu--link"),o=!0,i=!1,r=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done);o=!0){var e=c.value,u=e.getAttribute("data-id");u&&n.push(u)}}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}localStorage.setItem("serviceOrder",n),chrome.runtime.sendMessage({name:"loadServices"})})}}},253:function(e,n,t){"use strict";(function(n){function o(e,n){function t(e){return-1!==se.containers.indexOf(e)||ue.isContainer(e)}function o(e){var n=e?"remove":"add";i(I,n,"mousedown",k),i(I,n,"mouseup",B)}function a(e){i(I,e?"remove":"add","mousemove",S)}function m(e){var n=e?"remove":"add";y[n](I,"selectstart",E),y[n](I,"click",E)}function g(){o(!0),B({})}function E(e){ce&&e.preventDefault()}function k(e){if(ee=e.clientX,ne=e.clientY,!(1!==r(e)||e.metaKey||e.ctrlKey)){var n=e.target,t=C(n);t&&(ce=t,a(),"mousedown"===e.type&&(v(n)?n.focus():e.preventDefault()))}}function S(e){if(ce){if(0===r(e))return void B({});if(void 0===e.clientX||e.clientX!==ee||void 0===e.clientY||e.clientY!==ne){if(ue.ignoreInputTextSelection){var n=b("clientX",e),t=b("clientY",e);if(v(T.elementFromPoint(n,t)))return}var o=ce;a(!0),m(),L(),N(o);var i=c($);K=b("pageX",e)-i.left,q=b("pageY",e)-i.top,x.add(ie||$,"gu-transit"),F(),Z(e)}}}function C(e){if(!(se.dragging&&Q||t(e))){for(var n=e;p(e)&&!1===t(p(e));){if(ue.invalid(e,n))return;if(!(e=p(e)))return}var o=p(e);if(o&&!ue.invalid(e,n)){if(ue.moves(e,o,n,h(e)))return{item:e,source:o}}}}function _(e){return!!C(e)}function M(e){var n=C(e);n&&N(n)}function N(e){H(e.item,e.source)&&(ie=e.item.cloneNode(!0),se.emit("cloned",ie,e.item,"copy")),U=e.source,$=e.item,te=oe=h(e.item),se.dragging=!0,se.emit("drag",$,U)}function O(){return!1}function L(){if(se.dragging){var e=ie||$;D(e,p(e))}}function j(){ce=!1,a(!0),m(!0)}function B(e){if(j(),se.dragging){var n=ie||$,t=b("clientX",e),o=b("clientY",e),i=u(Q,t,o),r=z(i,t,o);r&&(ie&&ue.copySortSource||!ie||r!==U)?D(n,r):ue.removeOnSpill?R():A()}}function D(e,n){var t=p(e);ie&&ue.copySortSource&&n===U&&t.removeChild($),X(n)?se.emit("cancel",e,U,U):se.emit("drop",e,n,U,oe),P()}function R(){if(se.dragging){var e=ie||$,n=p(e);n&&n.removeChild(e),se.emit(ie?"cancel":"remove",e,n,U),P()}}function A(e){if(se.dragging){var n=arguments.length>0?e:ue.revertOnSpill,t=ie||$,o=p(t),i=X(o);!1===i&&n&&(ie?o&&o.removeChild(ie):U.insertBefore(t,te)),i||n?se.emit("cancel",t,U,U):se.emit("drop",t,o,U,oe),P()}}function P(){var e=ie||$;j(),G(),e&&x.rm(e,"gu-transit"),re&&clearTimeout(re),se.dragging=!1,ae&&se.emit("out",e,ae,U),se.emit("dragend",e),U=$=ie=te=oe=re=ae=null}function X(e,n){var t;return t=void 0!==n?n:Q?oe:h(ie||$),e===U&&t===te}function z(e,n,o){for(var i=e;i&&!function(){if(!1===t(i))return!1;var r=V(i,e),c=J(i,r,n,o);return!!X(i,c)||ue.accepts($,i,U,c)}();)i=p(i);return i}function Z(e){function n(e){se.emit(e,c,ae,U)}if(Q){e.preventDefault();var t=b("clientX",e),o=b("clientY",e),i=t-K,r=o-q;Q.style.left=i+"px",Q.style.top=r+"px";var c=ie||$,a=u(Q,t,o),s=z(a,t,o),l=null!==s&&s!==ae;(l||null===s)&&(function(){ae&&n("out")}(),ae=s,function(){l&&n("over")}());var d=p(c);if(s===U&&ie&&!ue.copySortSource)return void(d&&d.removeChild(c));var f,v=V(s,a);if(null!==v)f=J(s,v,t,o);else{if(!0!==ue.revertOnSpill||ie)return void(ie&&d&&d.removeChild(c));f=te,s=U}(null===f&&l||f!==c&&f!==h(c))&&(oe=f,s.insertBefore(c,f),se.emit("shadow",c,s,U))}}function Y(e){x.rm(e,"gu-hide")}function W(e){se.dragging&&x.add(e,"gu-hide")}function F(){if(!Q){var e=$.getBoundingClientRect();Q=$.cloneNode(!0),Q.style.width=d(e)+"px",Q.style.height=f(e)+"px",x.rm(Q,"gu-transit"),x.add(Q,"gu-mirror"),ue.mirrorContainer.appendChild(Q),i(I,"add","mousemove",Z),x.add(ue.mirrorContainer,"gu-unselectable"),se.emit("cloned",Q,$,"mirror")}}function G(){Q&&(x.rm(ue.mirrorContainer,"gu-unselectable"),i(I,"remove","mousemove",Z),p(Q).removeChild(Q),Q=null)}function V(e,n){for(var t=n;t!==e&&p(t)!==e;)t=p(t);return t===I?null:t}function J(e,n,t,o){function i(e){return e?h(n):n}var r="horizontal"===ue.direction;return n!==e?function(){var e=n.getBoundingClientRect();return i(r?t>e.left+d(e)/2:o>e.top+f(e)/2)}():function(){var n,i,c,a=e.children.length;for(n=0;n<a;n++){if(i=e.children[n],c=i.getBoundingClientRect(),r&&c.left+c.width/2>t)return i;if(!r&&c.top+c.height/2>o)return i}return null}()}function H(e,n){return"boolean"==typeof ue.copy?ue.copy:ue.copy(e,n)}1===arguments.length&&!1===Array.isArray(e)&&(n=e,e=[]);var Q,U,$,K,q,ee,ne,te,oe,ie,re,ce,ae=null,ue=n||{};void 0===ue.moves&&(ue.moves=l),void 0===ue.accepts&&(ue.accepts=l),void 0===ue.invalid&&(ue.invalid=O),void 0===ue.containers&&(ue.containers=e||[]),void 0===ue.isContainer&&(ue.isContainer=s),void 0===ue.copy&&(ue.copy=!1),void 0===ue.copySortSource&&(ue.copySortSource=!1),void 0===ue.revertOnSpill&&(ue.revertOnSpill=!1),void 0===ue.removeOnSpill&&(ue.removeOnSpill=!1),void 0===ue.direction&&(ue.direction="vertical"),void 0===ue.ignoreInputTextSelection&&(ue.ignoreInputTextSelection=!0),void 0===ue.mirrorContainer&&(ue.mirrorContainer=T.body);var se=w({containers:ue.containers,start:M,end:L,cancel:A,remove:R,destroy:g,canMove:_,dragging:!1});return!0===ue.removeOnSpill&&se.on("over",Y).on("out",W),o(),se}function i(e,t,o,i){var r={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},c={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},a={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};n.navigator.pointerEnabled?y[t](e,c[o],i):n.navigator.msPointerEnabled?y[t](e,a[o],i):(y[t](e,r[o],i),y[t](e,o,i))}function r(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function c(e){var n=e.getBoundingClientRect();return{left:n.left+a("scrollLeft","pageXOffset"),top:n.top+a("scrollTop","pageYOffset")}}function a(e,t){return void 0!==n[t]?n[t]:I.clientHeight?I[e]:T.body[e]}function u(e,n,t){var o,i=e||{},r=i.className;return i.className+=" gu-hide",o=T.elementFromPoint(n,t),i.className=r,o}function s(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function f(e){return e.height||e.bottom-e.top}function p(e){return e.parentNode===T?null:e.parentNode}function v(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||m(p(e))))}function h(e){return e.nextElementSibling||function(){var n=e;do{n=n.nextSibling}while(n&&1!==n.nodeType);return n}()}function g(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function b(e,n){var t=g(n),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in t)&&o[e]in t&&(e=o[e]),t[e]}var w=t(254),y=t(261),x=t(264),T=document,I=T.documentElement;e.exports=o}).call(n,t(165))},254:function(e,n,t){"use strict";var o=t(255),i=t(256);e.exports=function(e,n){var t=n||{},r={};return void 0===e&&(e={}),e.on=function(n,t){return r[n]?r[n].push(t):r[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var o=arguments.length;if(1===o)delete r[n];else if(0===o)r={};else{var i=r[n];if(!i)return e;i.splice(i.indexOf(t),1)}return e},e.emit=function(){var n=o(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var c=(r[n]||[]).slice(0);return function(){var r=o(arguments),a=this||e;if("error"===n&&!1!==t.throws&&!c.length)throw 1===r.length?r[0]:r;return c.forEach(function(o){t.async?i(o,r,a):o.apply(a,r),o._once&&e.off(n,o)}),e}},e}},255:function(e,n){e.exports=function(e,n){return Array.prototype.slice.call(e,n)}},256:function(e,n,t){"use strict";var o=t(257);e.exports=function(e,n,t){e&&o(function(){e.apply(t||null,n||[])})}},257:function(e,n,t){(function(n){var t,o="function"==typeof n;t=o?function(e){n(e)}:function(e){setTimeout(e,0)},e.exports=t}).call(n,t(258).setImmediate)},258:function(e,n,t){function o(e,n){this._id=e,this._clearFn=n}var i=Function.prototype.apply;n.setTimeout=function(){return new o(i.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new o(i.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},n))},t(259),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},259:function(e,n,t){(function(e,n){!function(e,t){"use strict";function o(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var o={callback:e,args:n};return s[u]=o,a(u),u++}function i(e){delete s[e]}function r(e){var n=e.callback,o=e.args;switch(o.length){case 0:n();break;case 1:n(o[0]);break;case 2:n(o[0],o[1]);break;case 3:n(o[0],o[1],o[2]);break;default:n.apply(t,o)}}function c(e){if(l)setTimeout(c,0,e);else{var n=s[e];if(n){l=!0;try{r(n)}finally{i(e),l=!1}}}}if(!e.setImmediate){var a,u=1,s={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?function(){a=function(e){n.nextTick(function(){c(e)})}}():function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?function(){var n="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&c(+t.data.slice(n.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),a=function(t){e.postMessage(n+t,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){c(e.data)},a=function(n){e.port2.postMessage(n)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var e=d.documentElement;a=function(n){var t=d.createElement("script");t.onreadystatechange=function(){c(n),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}():function(){a=function(e){setTimeout(c,0,e)}}(),f.setImmediate=o,f.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(n,t(165),t(260))},260:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function r(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function c(){m&&p&&(m=!1,p.length?v=p.concat(v):h=-1,v.length&&a())}function a(){if(!m){var e=i(c);m=!0;for(var n=v.length;n;){for(p=v,v=[];++h<n;)p&&p[h].run();h=-1,n=v.length}p=null,m=!1,r(e)}}function u(e,n){this.fun=e,this.array=n}function s(){}var l,d,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,v=[],m=!1,h=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];v.push(new u(e,n)),1!==v.length||m||i(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},261:function(e,n,t){"use strict";(function(n){function o(e,n,t,o){return e.addEventListener(n,t,o)}function i(e,n,t){return e.attachEvent("on"+n,s(e,n,t))}function r(e,n,t,o){return e.removeEventListener(n,t,o)}function c(e,n,t){var o=l(e,n,t);if(o)return e.detachEvent("on"+n,o)}function a(e,n,t){var o=-1===p.indexOf(n)?function(){return new f(n,{detail:t})}():function(){var e;return v.createEvent?(e=v.createEvent("Event"),e.initEvent(n,!0,!0)):v.createEventObject&&(e=v.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+n,o)}function u(e,t,o){return function(t){var i=t||n.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,o.call(e,i)}}function s(e,n,t){var o=l(e,n,t)||u(e,n,t);return g.push({wrapper:o,element:e,type:n,fn:t}),o}function l(e,n,t){var o=d(e,n,t);if(o){var i=g[o].wrapper;return g.splice(o,1),i}}function d(e,n,t){var o,i;for(o=0;o<g.length;o++)if(i=g[o],i.element===e&&i.type===n&&i.fn===t)return o}var f=t(262),p=t(263),v=n.document,m=o,h=r,g=[];n.addEventListener||(m=i,h=c),e.exports={add:m,remove:h,fabricate:a}}).call(n,t(165))},262:function(e,n,t){(function(n){var t=n.CustomEvent;e.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?t:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(n,t(165))},263:function(e,n,t){"use strict";(function(n){var t=[],o="",i=/^on/;for(o in n)i.test(o)&&t.push(o.slice(2));e.exports=t}).call(n,t(165))},264:function(e,n,t){"use strict";function o(e){var n=c[e];return n?n.lastIndex=0:c[e]=n=new RegExp(a+e+u,"g"),n}function i(e,n){var t=e.className;t.length?o(n).test(t)||(e.className+=" "+n):e.className=n}function r(e,n){e.className=e.className.replace(o(n)," ").trim()}var c={},a="(?:^|\\s)",u="(?:\\s|$)";e.exports={add:i,rm:r}},265:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{class:["options-menu",{"options-menu__show":e.showMenu}]},[e._l(e.sortedServices,function(n){return t("router-link",{key:n.id,staticClass:"options-menu--link ripple",attrs:{to:n.optionsPath,"data-id":n.id},nativeOn:{mousedown:function(n){e._showRipple(n)}}},[t("span",{staticClass:"options-menu--drag-handle"}),e._v("\n    "+e._s(n.name)+"\n    "),t("v-switch",{staticClass:"options-menu--switch",attrs:{value:n.active,"service-id":n.id,name:n.functionName+"Active"},on:{input:function(t){e.onInput(n,t)}}})],1)}),e._v(" "),t("router-link",{staticClass:"options-menu--link options-menu--support",attrs:{to:"/support"}},[e._v("\n    Support\n  ")])],2)},i=[],r={render:o,staticRenderFns:i};n.a=r}});