webpackJsonp([0,2,23,25],{10:function(e,n,t){function o(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=v[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(l(o.parts[r],n))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(l(o.parts[r],n));v[o.id]={id:o.id,refs:1,parts:a}}}}function i(e,n){for(var t=[],o={},i=0;i<e.length;i++){var r=e[i],a=n.base?r[0]+n.base:r[0],c=r[1],s=r[2],u=r[3],l={css:c,media:s,sourceMap:u};o[a]?o[a].parts.push(l):t.push(o[a]={id:a,parts:[l]})}return t}function r(e,n){var t=m(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),x.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=x.indexOf(e);n>=0&&x.splice(n,1)}function c(e){var n=document.createElement("style");return e.attrs.type="text/css",u(n,e.attrs),r(e,n),n}function s(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(n,e.attrs),r(e,n),n}function u(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function l(e,n){var t,o,i,r;if(n.transform&&e.css){if(!(r=n.transform(e.css)))return function(){};e.css=r}if(n.singleton){var u=b++;t=g||(g=c(n)),o=d.bind(null,t,u,!1),i=d.bind(null,t,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(n),o=p.bind(null,t,n),i=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(n),o=f.bind(null,t),i=function(){a(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}function d(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function f(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function p(e,n,t){var o=t.css,i=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=w(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var v={},h=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var n={};return function(t){return void 0===n[t]&&(n[t]=e.call(this,t)),n[t]}}(function(e){return document.querySelector(e)}),g=null,b=0,x=[],w=t(47);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=h()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=i(e,n);return o(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var c=t[a],s=v[c.id];s.refs--,r.push(s)}if(e){o(i(e,n),n)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete v[s.id]}}}};var y=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},124:function(e,n,t){var o=t(125);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(10)(o,i);o.locals&&(e.exports=o.locals)},125:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.switch {\n  user-select: none;\n}\n.switch .switch--label {\n    cursor: pointer;\n}\n.switch .switch--checkbox {\n    display: block;\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    width: 0;\n}\n.switch .switch--checkbox:checked + .switch--lever {\n      background-color: #80cdae;\n}\n.switch .switch--checkbox:checked + .switch--lever::after {\n      background-color: #009d5f;\n      left: 16px;\n}\n.switch .switch--checkbox:checked:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 128, 128, 0.1);\n}\n.switch .switch--checkbox:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n.switch .switch--checkbox[disabled] + .switch--lever {\n      cursor: default;\n}\n.switch .switch--checkbox[disabled] + .switch--lever::after,\n    .switch .switch--checkbox[disabled]:checked + .switch--lever::after {\n      background-color: #bdbdbd;\n}\n.switch .switch--lever {\n    background-color: #bcbcbc;\n    border-radius: 14px;\n    content: '';\n    display: inline-block;\n    height: 14px;\n    position: relative;\n    transition: background .3s ease;\n    vertical-align: middle;\n    width: 36px;\n}\n.switch .switch--lever::after {\n      background-color: #f1f1f1;\n      border-radius: 20px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4);\n      content: '';\n      display: inline-block;\n      height: 20px;\n      left: 0;\n      position: absolute;\n      top: -3px;\n      transition: left linear .08s, background linear .08s, box-shadow .1s ease;\n      width: 20px;\n}\n",""])},126:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{name:String,value:Boolean},methods:{toggleService:function(){this.$emit("input",this.name,!this.value)}}}},127:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"switch ripple--no"},[t("label",{staticClass:"switch--label",on:{click:e.toggleService}},[t("input",{staticClass:"switch--checkbox",attrs:{type:"checkbox",name:e.name},domProps:{checked:e.value}}),e._v(" "),t("span",{staticClass:"switch--lever"})])])},i=[];n.a={render:o,staticRenderFns:i}},128:function(e,n,t){var o=t(129);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(10)(o,i);o.locals&&(e.exports=o.locals)},129:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.options-menu {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  float: left;\n  height: calc(100vh - 64px);\n  overflow: scroll;\n  padding: 8px 0 48px;\n  position: relative;\n  transition: width 400ms;\n  width: 256px;\n  z-index: 100;\n}\n.options-menu--link {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 16px 0 8px;\n    position: relative;\n    text-decoration: none;\n    transition: background-color 150ms;\n}\n.options-menu--link:hover, .options-menu--link.router-link-active {\n      background-color: #ebebeb;\n}\n.options-menu--switch {\n    float: right;\n}\n.options-menu--drag-handle {\n    background-image: url("+t(130)+");\n    background-position: 50%;\n    background-repeat: no-repeat;\n    cursor: ns-resize;\n    float: left;\n    height: 100%;\n    margin-right: 8px;\n    width: 20px;\n}\n.options-menu--support {\n    background-color: #fff;\n    border-top: solid 1px #ececec;\n    bottom: 0;\n    position: fixed;\n    width: 256px;\n    z-index: 10;\n    z-index: 10;\n}\n@media screen and (max-width: 580px) {\n.options-menu {\n    background-color: #fff;\n    left: 0;\n    position: absolute;\n    top: 64px;\n    width: 0;\n}\n.options-menu.options-menu__show {\n      width: 265px;\n}\n}\n",""])},130:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Ik0zLDE1aDE4di0ySDNWMTV6IE0zLDE5aDE4di0ySDNWMTl6IE0zLDExaDE4VjlIM1YxMXogTTMsNXYyaDE4VjVIM3oiLz4NCjwvc3ZnPg0K"},131:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(1),a=t(132),c=o(a),s=t(15),u=o(s);n.default={props:{showMenu:Boolean},components:{vSwitch:u.default},computed:i({},(0,r.mapGetters)(["sortedServices"])),methods:{onInput:function(e,n,t){console.log(e),this.saveData(e.id,n,!e.active)}},mounted:function(){(0,c.default)([this.$el],{moves:function(e,n,t){return t.className.includes("options-menu--drag-handle")},direction:"vertical"}).on("dragend",function(e){var n=[],t=document.querySelectorAll(".options-menu--link"),o=!0,i=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var e=a.value,s=e.getAttribute("data-id");s&&n.push(s)}}catch(e){i=!0,r=e}finally{try{!o&&c.return&&c.return()}finally{if(i)throw r}}localStorage.setItem("serviceOrder",n),chrome.runtime.sendMessage({name:"loadServices"})})}}},132:function(e,n,t){"use strict";(function(n){function o(e,n){function t(e){return-1!==ue.containers.indexOf(e)||se.isContainer(e)}function o(e){var n=e?"remove":"add";i(C,n,"mousedown",S),i(C,n,"mouseup",L)}function c(e){i(C,e?"remove":"add","mousemove",_)}function h(e){var n=e?"remove":"add";w[n](C,"selectstart",k),w[n](C,"click",k)}function g(){o(!0),L({})}function k(e){ae&&e.preventDefault()}function S(e){if(ee=e.clientX,ne=e.clientY,!(1!==r(e)||e.metaKey||e.ctrlKey)){var n=e.target,t=E(n);t&&(ae=t,c(),"mousedown"===e.type&&(v(n)?n.focus():e.preventDefault()))}}function _(e){if(ae){if(0===r(e))return void L({});if(void 0===e.clientX||e.clientX!==ee||void 0===e.clientY||e.clientY!==ne){if(se.ignoreInputTextSelection){var n=b("clientX",e),t=b("clientY",e);if(v(I.elementFromPoint(n,t)))return}var o=ae;c(!0),h(),j(),O(o);var i=a(Q);K=b("pageX",e)-i.left,q=b("pageY",e)-i.top,y.add(ie||Q,"gu-transit"),F(),Z(e)}}}function E(e){if(!(ue.dragging&&H||t(e))){for(var n=e;p(e)&&!1===t(p(e));){if(se.invalid(e,n))return;if(!(e=p(e)))return}var o=p(e);if(o&&!se.invalid(e,n)){if(se.moves(e,o,n,m(e)))return{item:e,source:o}}}}function M(e){return!!E(e)}function T(e){var n=E(e);n&&O(n)}function O(e){J(e.item,e.source)&&(ie=e.item.cloneNode(!0),ue.emit("cloned",ie,e.item,"copy")),V=e.source,Q=e.item,te=oe=m(e.item),ue.dragging=!0,ue.emit("drag",Q,V)}function N(){return!1}function j(){if(ue.dragging){var e=ie||Q;B(e,p(e))}}function R(){ae=!1,c(!0),h(!0)}function L(e){if(R(),ue.dragging){var n=ie||Q,t=b("clientX",e),o=b("clientY",e),i=s(H,t,o),r=U(i,t,o);r&&(ie&&se.copySortSource||!ie||r!==V)?B(n,r):se.removeOnSpill?A():P()}}function B(e,n){var t=p(e);ie&&se.copySortSource&&n===V&&t.removeChild(Q),D(n)?ue.emit("cancel",e,V,V):ue.emit("drop",e,n,V,oe),z()}function A(){if(ue.dragging){var e=ie||Q,n=p(e);n&&n.removeChild(e),ue.emit(ie?"cancel":"remove",e,n,V),z()}}function P(e){if(ue.dragging){var n=arguments.length>0?e:se.revertOnSpill,t=ie||Q,o=p(t),i=D(o);!1===i&&n&&(ie?o&&o.removeChild(ie):V.insertBefore(t,te)),i||n?ue.emit("cancel",t,V,V):ue.emit("drop",t,o,V,oe),z()}}function z(){var e=ie||Q;R(),G(),e&&y.rm(e,"gu-transit"),re&&clearTimeout(re),ue.dragging=!1,ce&&ue.emit("out",e,ce,V),ue.emit("dragend",e),V=Q=ie=te=oe=re=ce=null}function D(e,n){var t;return t=void 0!==n?n:H?oe:m(ie||Q),e===V&&t===te}function U(e,n,o){for(var i=e;i&&!function(){if(!1===t(i))return!1;var r=W(i,e),a=$(i,r,n,o);return!!D(i,a)||se.accepts(Q,i,V,a)}();)i=p(i);return i}function Z(e){function n(e){ue.emit(e,a,ce,V)}if(H){e.preventDefault();var t=b("clientX",e),o=b("clientY",e),i=t-K,r=o-q;H.style.left=i+"px",H.style.top=r+"px";var a=ie||Q,c=s(H,t,o),u=U(c,t,o),l=null!==u&&u!==ce;(l||null===u)&&(function(){ce&&n("out")}(),ce=u,function(){l&&n("over")}());var d=p(a);if(u===V&&ie&&!se.copySortSource)return void(d&&d.removeChild(a));var f,v=W(u,c);if(null!==v)f=$(u,v,t,o);else{if(!0!==se.revertOnSpill||ie)return void(ie&&d&&d.removeChild(a));f=te,u=V}(null===f&&l||f!==a&&f!==m(a))&&(oe=f,u.insertBefore(a,f),ue.emit("shadow",a,u,V))}}function X(e){y.rm(e,"gu-hide")}function Y(e){ue.dragging&&y.add(e,"gu-hide")}function F(){if(!H){var e=Q.getBoundingClientRect();H=Q.cloneNode(!0),H.style.width=d(e)+"px",H.style.height=f(e)+"px",y.rm(H,"gu-transit"),y.add(H,"gu-mirror"),se.mirrorContainer.appendChild(H),i(C,"add","mousemove",Z),y.add(se.mirrorContainer,"gu-unselectable"),ue.emit("cloned",H,Q,"mirror")}}function G(){H&&(y.rm(se.mirrorContainer,"gu-unselectable"),i(C,"remove","mousemove",Z),p(H).removeChild(H),H=null)}function W(e,n){for(var t=n;t!==e&&p(t)!==e;)t=p(t);return t===C?null:t}function $(e,n,t,o){function i(e){return e?m(n):n}var r="horizontal"===se.direction;return n!==e?function(){var e=n.getBoundingClientRect();return i(r?t>e.left+d(e)/2:o>e.top+f(e)/2)}():function(){var n,i,a,c=e.children.length;for(n=0;n<c;n++){if(i=e.children[n],a=i.getBoundingClientRect(),r&&a.left+a.width/2>t)return i;if(!r&&a.top+a.height/2>o)return i}return null}()}function J(e,n){return"boolean"==typeof se.copy?se.copy:se.copy(e,n)}1===arguments.length&&!1===Array.isArray(e)&&(n=e,e=[]);var H,V,Q,K,q,ee,ne,te,oe,ie,re,ae,ce=null,se=n||{};void 0===se.moves&&(se.moves=l),void 0===se.accepts&&(se.accepts=l),void 0===se.invalid&&(se.invalid=N),void 0===se.containers&&(se.containers=e||[]),void 0===se.isContainer&&(se.isContainer=u),void 0===se.copy&&(se.copy=!1),void 0===se.copySortSource&&(se.copySortSource=!1),void 0===se.revertOnSpill&&(se.revertOnSpill=!1),void 0===se.removeOnSpill&&(se.removeOnSpill=!1),void 0===se.direction&&(se.direction="vertical"),void 0===se.ignoreInputTextSelection&&(se.ignoreInputTextSelection=!0),void 0===se.mirrorContainer&&(se.mirrorContainer=I.body);var ue=x({containers:se.containers,start:T,end:j,cancel:P,remove:A,destroy:g,canMove:M,dragging:!1});return!0===se.removeOnSpill&&ue.on("over",X).on("out",Y),o(),ue}function i(e,t,o,i){var r={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},a={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};n.navigator.pointerEnabled?w[t](e,a[o],i):n.navigator.msPointerEnabled?w[t](e,c[o],i):(w[t](e,r[o],i),w[t](e,o,i))}function r(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function a(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,t){return void 0!==n[t]?n[t]:C.clientHeight?C[e]:I.body[e]}function s(e,n,t){var o,i=e||{},r=i.className;return i.className+=" gu-hide",o=I.elementFromPoint(n,t),i.className=r,o}function u(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function f(e){return e.height||e.bottom-e.top}function p(e){return e.parentNode===I?null:e.parentNode}function v(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||h(e)}function h(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||h(p(e))))}function m(e){return e.nextElementSibling||function(){var n=e;do{n=n.nextSibling}while(n&&1!==n.nodeType);return n}()}function g(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function b(e,n){var t=g(n),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in t)&&o[e]in t&&(e=o[e]),t[e]}var x=t(133),w=t(139),y=t(142),I=document,C=I.documentElement;e.exports=o}).call(n,t(48))},133:function(e,n,t){"use strict";var o=t(134),i=t(135);e.exports=function(e,n){var t=n||{},r={};return void 0===e&&(e={}),e.on=function(n,t){return r[n]?r[n].push(t):r[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var o=arguments.length;if(1===o)delete r[n];else if(0===o)r={};else{var i=r[n];if(!i)return e;i.splice(i.indexOf(t),1)}return e},e.emit=function(){var n=o(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var a=(r[n]||[]).slice(0);return function(){var r=o(arguments),c=this||e;if("error"===n&&!1!==t.throws&&!a.length)throw 1===r.length?r[0]:r;return a.forEach(function(o){t.async?i(o,r,c):o.apply(c,r),o._once&&e.off(n,o)}),e}},e}},134:function(e,n){e.exports=function(e,n){return Array.prototype.slice.call(e,n)}},135:function(e,n,t){"use strict";var o=t(136);e.exports=function(e,n,t){e&&o(function(){e.apply(t||null,n||[])})}},136:function(e,n,t){(function(n){var t,o="function"==typeof n;t=o?function(e){n(e)}:function(e){setTimeout(e,0)},e.exports=t}).call(n,t(137).setImmediate)},137:function(e,n,t){function o(e,n){this._id=e,this._clearFn=n}var i=Function.prototype.apply;n.setTimeout=function(){return new o(i.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new o(i.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},n))},t(138),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},138:function(e,n,t){(function(e,n){!function(e,t){"use strict";function o(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var o={callback:e,args:n};return u[s]=o,c(s),s++}function i(e){delete u[e]}function r(e){var n=e.callback,o=e.args;switch(o.length){case 0:n();break;case 1:n(o[0]);break;case 2:n(o[0],o[1]);break;case 3:n(o[0],o[1],o[2]);break;default:n.apply(t,o)}}function a(e){if(l)setTimeout(a,0,e);else{var n=u[e];if(n){l=!0;try{r(n)}finally{i(e),l=!1}}}}if(!e.setImmediate){var c,s=1,u={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?function(){c=function(e){n.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?function(){var n="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&a(+t.data.slice(n.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),c=function(t){e.postMessage(n+t,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},c=function(n){e.port2.postMessage(n)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var e=d.documentElement;c=function(n){var t=d.createElement("script");t.onreadystatechange=function(){a(n),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}():function(){c=function(e){setTimeout(a,0,e)}}(),f.setImmediate=o,f.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(n,t(48),t(43))},139:function(e,n,t){"use strict";(function(n){function o(e,n,t,o){return e.addEventListener(n,t,o)}function i(e,n,t){return e.attachEvent("on"+n,u(e,n,t))}function r(e,n,t,o){return e.removeEventListener(n,t,o)}function a(e,n,t){var o=l(e,n,t);if(o)return e.detachEvent("on"+n,o)}function c(e,n,t){var o=-1===p.indexOf(n)?function(){return new f(n,{detail:t})}():function(){var e;return v.createEvent?(e=v.createEvent("Event"),e.initEvent(n,!0,!0)):v.createEventObject&&(e=v.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+n,o)}function s(e,t,o){return function(t){var i=t||n.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,o.call(e,i)}}function u(e,n,t){var o=l(e,n,t)||s(e,n,t);return g.push({wrapper:o,element:e,type:n,fn:t}),o}function l(e,n,t){var o=d(e,n,t);if(o){var i=g[o].wrapper;return g.splice(o,1),i}}function d(e,n,t){var o,i;for(o=0;o<g.length;o++)if(i=g[o],i.element===e&&i.type===n&&i.fn===t)return o}var f=t(140),p=t(141),v=n.document,h=o,m=r,g=[];n.addEventListener||(h=i,m=a),e.exports={add:h,remove:m,fabricate:c}}).call(n,t(48))},140:function(e,n,t){(function(n){var t=n.CustomEvent;e.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?t:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(n,t(48))},141:function(e,n,t){"use strict";(function(n){var t=[],o="",i=/^on/;for(o in n)i.test(o)&&t.push(o.slice(2));e.exports=t}).call(n,t(48))},142:function(e,n,t){"use strict";function o(e){var n=a[e];return n?n.lastIndex=0:a[e]=n=new RegExp(c+e+s,"g"),n}function i(e,n){var t=e.className;t.length?o(n).test(t)||(e.className+=" "+n):e.className=n}function r(e,n){e.className=e.className.replace(o(n)," ").trim()}var a={},c="(?:^|\\s)",s="(?:\\s|$)";e.exports={add:i,rm:r}},143:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{class:["options-menu",{"options-menu__show":e.showMenu}]},[e._l(e.sortedServices,function(n){return t("router-link",{key:n.id,staticClass:"options-menu--link ripple",attrs:{to:n.optionsPath,"data-id":n.id},nativeOn:{mousedown:function(n){e._showRipple(n)}}},[t("span",{staticClass:"options-menu--drag-handle"}),e._v("\n    "+e._s(n.name)+"\n    "),t("v-switch",{staticClass:"options-menu--switch",attrs:{value:n.active,"service-id":n.id,name:n.functionName+"Active"},on:{input:function(t){e.onInput(n,t)}}})],1)}),e._v(" "),t("router-link",{staticClass:"options-menu--link options-menu--support",attrs:{to:"/support"}},[e._v("\n    Support\n  ")])],2)},i=[];n.a={render:o,staticRenderFns:i}},148:function(e,n,t){var o=t(149);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(10)(o,i);o.locals&&(e.exports=o.locals)},149:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.page-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  background-color: #4285f4;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n  height: 64px;\n  line-height: 64px;\n  padding-left: 272px;\n  transition: padding 400ms, background .3s;\n  width: 100vw;\n}\n.page-header--menu-icon {\n    cursor: pointer;\n    display: none;\n    margin-right: 8px;\n    vertical-align: middle;\n}\n.page-header--title {\n    display: inline;\n}\n@media screen and (max-width: 580px) {\n.page-header {\n    padding-left: 8px;\n}\n.page-header--menu-icon {\n      display: inline;\n}\n}\n",""])},15:function(e,n,t){"use strict";function o(e){t(124)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(126),r=t.n(i),a=t(127),c=t(8),s=o,u=c(r.a,a.a,s,null,null);n.default=u.exports},150:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{title:String,color:String},methods:{onMenuClick:function(){this.$emit("toggle")}}}},151:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"page-header",style:{"background-color":e.color}},[o("img",{staticClass:"page-header--menu-icon",attrs:{src:t(152),alt:"Toggle menu"},on:{click:e.onMenuClick}}),e._v(" "),o("div",{staticClass:"page-header--title"},[e._v("\n    "+e._s(e.title)+"\n  ")])])},i=[];n.a={render:o,staticRenderFns:i}},152:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4="},16:function(e,n,t){"use strict";function o(e){t(128)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(131),r=t.n(i),a=t(143),c=t(8),s=o,u=c(r.a,a.a,s,null,null);n.default=u.exports},18:function(e,n,t){"use strict";function o(e){t(148)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(150),r=t.n(i),a=t(151),c=t(8),s=o,u=c(r.a,a.a,s,null,null);n.default=u.exports},186:function(e,n,t){var o=t(187);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;t(10)(o,i);o.locals&&(e.exports=o.locals)},187:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.ripple {\n  cursor: pointer;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n  will-change: opacity, transform;\n}\n.ripple__element {\n    background-color: rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    height: 10px;\n    margin: -10px 0 0 -10px;\n    pointer-events: none;\n    position: absolute;\n    transition-duration: 400ms;\n    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    width: 10px;\n    z-index: -10;\n}\n* {\n  box-sizing: border-box;\n}\nhtml,\nhtml a {\n  -webkit-font-smoothing: antialiased;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\nbody {\n  font-family: 'Roboto', 'Helvetica Neue', 'Lucida Grande', sans-serif;\n  margin: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 0;\n  width: 0;\n}\n.options--label {\n  color: #aaaaaa;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 5px;\n  pointer-events: none;\n}\n.options--view {\n  height: calc(100vh - 64px);\n  overflow: scroll;\n  padding: 8px 16px;\n  position: relative;\n  width: calc(100vw - 256px);\n}\n@media screen and (max-width: 580px) {\n.options--view {\n    width: 100vw;\n}\n}\n",""])},188:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(16),a=o(r),c=t(18),s=o(c),u=t(1);n.default={components:{vOptionsMenu:a.default,vPageHeader:s.default},data:function(){return{showMenu:!1}},computed:i({},(0,u.mapState)({services:"services",service:function(e){var n=this;return e.services.find(function(e){return e.optionsPath===n.$route.path})}}),{headerColor:function(){return this.service?this.service.color:"/support"===this.$route.path?"#03a9f4":"white"},pageTitle:function(){return this.service?this.service.name:"/support"===this.$route.path?"Support":void 0}}),methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}}},189:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-page-header",{attrs:{title:e.pageTitle,color:e.headerColor},on:{toggle:e.toggleMenu}}),e._v(" "),t("v-options-menu",{attrs:{"show-menu":e.showMenu}}),e._v(" "),t("div",{staticClass:"options--view"},[t("router-view")],1)],1)},i=[];n.a={render:o,staticRenderFns:i}},32:function(e,n,t){"use strict";function o(e){t(186)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(188),r=t.n(i),a=t(189),c=t(8),s=o,u=c(r.a,a.a,s,null,null);n.default=u.exports},47:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},8:function(e,n){e.exports=function(e,n,t,o,i){var r,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(r=e,a=e.default);var s="function"==typeof a?a.options:a;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),o&&(s._scopeId=o);var u;if(i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):t&&(u=t),u){var l=s.functional,d=l?s.render:s.beforeCreate;l?s.render=function(e,n){return u.call(n),d(e,n)}:s.beforeCreate=d?[].concat(d,u):[u]}return{esModule:r,exports:a,options:s}}},9:function(e,n){function t(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=o(i);return[t].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[t].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}}});