webpackJsonp([1,23],{131:function(n,e,t){var i=t(132);"string"==typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(9)(i,o);i.locals&&(n.exports=i.locals)},132:function(n,e,t){e=n.exports=t(8)(void 0),e.push([n.i,"\n.switch {\n  user-select: none;\n}\n.switch .switch--label {\n    cursor: pointer;\n}\n.switch .switch--checkbox {\n    display: block;\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    width: 0;\n}\n.switch .switch--checkbox:checked + .switch--lever {\n      background-color: #80cdae;\n}\n.switch .switch--checkbox:checked + .switch--lever::after {\n      background-color: #009d5f;\n      left: 16px;\n}\n.switch .switch--checkbox:checked:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 128, 128, 0.1);\n}\n.switch .switch--checkbox:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n.switch .switch--checkbox[disabled] + .switch--lever {\n      cursor: default;\n}\n.switch .switch--checkbox[disabled] + .switch--lever::after,\n    .switch .switch--checkbox[disabled]:checked + .switch--lever::after {\n      background-color: #bdbdbd;\n}\n.switch .switch--lever {\n    background-color: #bcbcbc;\n    border-radius: 14px;\n    content: '';\n    display: inline-block;\n    height: 14px;\n    position: relative;\n    transition: background .3s ease;\n    vertical-align: middle;\n    width: 36px;\n}\n.switch .switch--lever::after {\n      background-color: #f1f1f1;\n      border-radius: 20px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4);\n      content: '';\n      display: inline-block;\n      height: 20px;\n      left: 0;\n      position: absolute;\n      top: -3px;\n      transition: left linear .08s, background linear .08s, box-shadow .1s ease;\n      width: 20px;\n}\n",""])},133:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{name:String,value:Boolean},methods:{toggleService:function(){this.$emit("input",this.name,!this.value)}}}},134:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"switch ripple--no"},[t("label",{staticClass:"switch--label",on:{click:n.toggleService}},[t("input",{staticClass:"switch--checkbox",attrs:{type:"checkbox",name:n.name},domProps:{checked:n.value}}),n._v(" "),t("span",{staticClass:"switch--lever"})])])},o=[],r={render:i,staticRenderFns:o};e.a=r},135:function(n,e,t){var i=t(136);"string"==typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(9)(i,o);i.locals&&(n.exports=i.locals)},136:function(n,e,t){e=n.exports=t(8)(void 0),e.push([n.i,"\n.options-menu {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  float: left;\n  height: calc(100vh - 64px);\n  overflow: scroll;\n  padding: 8px 0 48px;\n  position: relative;\n  transition: width 400ms;\n  width: 256px;\n  z-index: 100;\n}\n.options-menu--link {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 16px 0 8px;\n    position: relative;\n    text-decoration: none;\n    transition: background-color 150ms;\n}\n.options-menu--link:hover, .options-menu--link.router-link-active {\n      background-color: #ebebeb;\n}\n.options-menu--switch {\n    float: right;\n}\n.options-menu--drag-handle {\n    background-image: url("+t(137)+");\n    background-position: 50%;\n    background-repeat: no-repeat;\n    cursor: ns-resize;\n    float: left;\n    height: 100%;\n    margin-right: 8px;\n    width: 20px;\n}\n.options-menu--support {\n    background-color: #fff;\n    border-top: solid 1px #ececec;\n    bottom: 0;\n    position: fixed;\n    width: 256px;\n    z-index: 10;\n    z-index: 10;\n}\n@media screen and (max-width: 580px) {\n.options-menu {\n    background-color: #fff;\n    left: 0;\n    position: absolute;\n    top: 64px;\n    width: 0;\n}\n.options-menu.options-menu__show {\n      width: 265px;\n}\n}\n",""])},137:function(n,e){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Ik0zLDE1aDE4di0ySDNWMTV6IE0zLDE5aDE4di0ySDNWMTl6IE0zLDExaDE4VjlIM1YxMXogTTMsNXYyaDE4VjVIM3oiLz4NCjwvc3ZnPg0K"},138:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},r=t(1),c=t(139),a=i(c),u=t(15),s=i(u);e.default={props:{showMenu:Boolean},components:{vSwitch:s.default},computed:o({},(0,r.mapGetters)(["sortedServices"])),methods:{onInput:function(n,e){this.saveData(n.id,e,!n.active)}},mounted:function(){(0,a.default)([this.$el],{moves:function(n,e,t){return t.className.includes("options-menu--drag-handle")},direction:"vertical"}).on("dragend",function(){var n=[],e=document.querySelectorAll(".options-menu--link"),t=!0,i=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var a=r.value,u=a.getAttribute("data-id");u&&n.push(u)}}catch(n){i=!0,o=n}finally{try{!t&&c.return&&c.return()}finally{if(i)throw o}}localStorage.setItem("serviceOrder",n),chrome.runtime.sendMessage({name:"loadServices"})})}}},139:function(n,e,t){"use strict";(function(e){function i(n,e){function t(n){return-1!==ln.containers.indexOf(n)||sn.isContainer(n)}function i(n){var e=n?"remove":"add";o(k,e,"mousedown",I),o(k,e,"mouseup",D)}function a(n){o(k,n?"remove":"add","mousemove",C)}function h(n){var e=n?"remove":"add";x[e](k,"selectstart",S),x[e](k,"click",S)}function g(){i(!0),D({})}function S(n){an&&n.preventDefault()}function I(n){if(nn=n.clientX,en=n.clientY,!(1!==r(n)||n.metaKey||n.ctrlKey)){var e=n.target,t=N(e);t&&(an=t,a(),"mousedown"===n.type&&(p(e)?e.focus():n.preventDefault()))}}function C(n){if(an){if(0===r(n))return void D({});if(void 0===n.clientX||n.clientX!==nn||void 0===n.clientY||n.clientY!==en){if(sn.ignoreInputTextSelection){var e=b("clientX",n),t=b("clientY",n);if(p(E.elementFromPoint(e,t)))return}var i=an;a(!0),h(),B(),T(i);var o=c($);K=b("pageX",n)-o.left,q=b("pageY",n)-o.top,y.add(rn||$,"gu-transit"),G(),Z(n)}}}function N(n){if(!(ln.dragging&&Q||t(n))){for(var e=n;v(n)&&!1===t(v(n));){if(sn.invalid(n,e))return;if(!(n=v(n)))return}var i=v(n);if(i&&!sn.invalid(n,e)){if(sn.moves(n,i,e,m(n)))return{item:n,source:i}}}}function M(n){return!!N(n)}function O(n){var e=N(n);e&&T(e)}function T(n){H(n.item,n.source)&&(rn=n.item.cloneNode(!0),ln.emit("cloned",rn,n.item,"copy")),U=n.source,$=n.item,tn=on=m(n.item),ln.dragging=!0,ln.emit("drag",$,U)}function L(){return!1}function B(){if(ln.dragging){var n=rn||$;R(n,v(n))}}function _(){an=!1,a(!0),h(!0)}function D(n){if(_(),ln.dragging){var e=rn||$,t=b("clientX",n),i=b("clientY",n),o=u(Q,t,i),r=A(o,t,i);r&&(rn&&sn.copySortSource||!rn||r!==U)?R(e,r):sn.removeOnSpill?j():X()}}function R(n,e){var t=v(n);rn&&sn.copySortSource&&e===U&&t.removeChild($),P(e)?ln.emit("cancel",n,U,U):ln.emit("drop",n,e,U,on),z()}function j(){if(ln.dragging){var n=rn||$,e=v(n);e&&e.removeChild(n),ln.emit(rn?"cancel":"remove",n,e,U),z()}}function X(n){if(ln.dragging){var e=arguments.length>0?n:sn.revertOnSpill,t=rn||$,i=v(t),o=P(i);!1===o&&e&&(rn?i&&i.removeChild(rn):U.insertBefore(t,tn)),o||e?ln.emit("cancel",t,U,U):ln.emit("drop",t,i,U,on),z()}}function z(){var n=rn||$;_(),V(),n&&y.rm(n,"gu-transit"),cn&&clearTimeout(cn),ln.dragging=!1,un&&ln.emit("out",n,un,U),ln.emit("dragend",n),U=$=rn=tn=on=cn=un=null}function P(n,e){var t;return t=void 0!==e?e:Q?on:m(rn||$),n===U&&t===tn}function A(n,e,i){for(var o=n;o&&!function(){if(!1===t(o))return!1;var r=J(o,n),c=F(o,r,e,i);return!!P(o,c)||sn.accepts($,o,U,c)}();)o=v(o);return o}function Z(n){function e(n){ln.emit(n,c,un,U)}if(Q){n.preventDefault();var t=b("clientX",n),i=b("clientY",n),o=t-K,r=i-q;Q.style.left=o+"px",Q.style.top=r+"px";var c=rn||$,a=u(Q,t,i),s=A(a,t,i),l=null!==s&&s!==un;(l||null===s)&&(function(){un&&e("out")}(),un=s,function(){l&&e("over")}());var d=v(c);if(s===U&&rn&&!sn.copySortSource)return void(d&&d.removeChild(c));var f,p=J(s,a);if(null!==p)f=F(s,p,t,i);else{if(!0!==sn.revertOnSpill||rn)return void(rn&&d&&d.removeChild(c));f=tn,s=U}(null===f&&l||f!==c&&f!==m(c))&&(on=f,s.insertBefore(c,f),ln.emit("shadow",c,s,U))}}function Y(n){y.rm(n,"gu-hide")}function W(n){ln.dragging&&y.add(n,"gu-hide")}function G(){if(!Q){var n=$.getBoundingClientRect();Q=$.cloneNode(!0),Q.style.width=d(n)+"px",Q.style.height=f(n)+"px",y.rm(Q,"gu-transit"),y.add(Q,"gu-mirror"),sn.mirrorContainer.appendChild(Q),o(k,"add","mousemove",Z),y.add(sn.mirrorContainer,"gu-unselectable"),ln.emit("cloned",Q,$,"mirror")}}function V(){Q&&(y.rm(sn.mirrorContainer,"gu-unselectable"),o(k,"remove","mousemove",Z),v(Q).removeChild(Q),Q=null)}function J(n,e){for(var t=e;t!==n&&v(t)!==n;)t=v(t);return t===k?null:t}function F(n,e,t,i){function o(n){return n?m(e):e}var r="horizontal"===sn.direction;return e!==n?function(){var n=e.getBoundingClientRect();return o(r?t>n.left+d(n)/2:i>n.top+f(n)/2)}():function(){var e,o,c,a=n.children.length;for(e=0;e<a;e++){if(o=n.children[e],c=o.getBoundingClientRect(),r&&c.left+c.width/2>t)return o;if(!r&&c.top+c.height/2>i)return o}return null}()}function H(n,e){return"boolean"==typeof sn.copy?sn.copy:sn.copy(n,e)}1===arguments.length&&!1===Array.isArray(n)&&(e=n,n=[]);var Q,U,$,K,q,nn,en,tn,on,rn,cn,an,un=null,sn=e||{};void 0===sn.moves&&(sn.moves=l),void 0===sn.accepts&&(sn.accepts=l),void 0===sn.invalid&&(sn.invalid=L),void 0===sn.containers&&(sn.containers=n||[]),void 0===sn.isContainer&&(sn.isContainer=s),void 0===sn.copy&&(sn.copy=!1),void 0===sn.copySortSource&&(sn.copySortSource=!1),void 0===sn.revertOnSpill&&(sn.revertOnSpill=!1),void 0===sn.removeOnSpill&&(sn.removeOnSpill=!1),void 0===sn.direction&&(sn.direction="vertical"),void 0===sn.ignoreInputTextSelection&&(sn.ignoreInputTextSelection=!0),void 0===sn.mirrorContainer&&(sn.mirrorContainer=E.body);var ln=w({containers:sn.containers,start:O,end:B,cancel:X,remove:j,destroy:g,canMove:M,dragging:!1});return!0===sn.removeOnSpill&&ln.on("over",Y).on("out",W),i(),ln}function o(n,t,i,o){var r={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},c={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},a={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};e.navigator.pointerEnabled?x[t](n,c[i],o):e.navigator.msPointerEnabled?x[t](n,a[i],o):(x[t](n,r[i],o),x[t](n,i,o))}function r(n){if(void 0!==n.touches)return n.touches.length;if(void 0!==n.which&&0!==n.which)return n.which;if(void 0!==n.buttons)return n.buttons;var e=n.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function c(n){var e=n.getBoundingClientRect();return{left:e.left+a("scrollLeft","pageXOffset"),top:e.top+a("scrollTop","pageYOffset")}}function a(n,t){return void 0!==e[t]?e[t]:k.clientHeight?k[n]:E.body[n]}function u(n,e,t){var i,o=n||{},r=o.className;return o.className+=" gu-hide",i=E.elementFromPoint(e,t),o.className=r,i}function s(){return!1}function l(){return!0}function d(n){return n.width||n.right-n.left}function f(n){return n.height||n.bottom-n.top}function v(n){return n.parentNode===E?null:n.parentNode}function p(n){return"INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName||h(n)}function h(n){return!!n&&("false"!==n.contentEditable&&("true"===n.contentEditable||h(v(n))))}function m(n){return n.nextElementSibling||function(){var e=n;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}()}function g(n){return n.targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n}function b(n,e){var t=g(e),i={pageX:"clientX",pageY:"clientY"};return n in i&&!(n in t)&&i[n]in t&&(n=i[n]),t[n]}var w=t(140),x=t(144),y=t(147),E=document,k=E.documentElement;n.exports=i}).call(e,t(45))},140:function(n,e,t){"use strict";var i=t(141),o=t(142);n.exports=function(n,e){var t=e||{},r={};return void 0===n&&(n={}),n.on=function(e,t){return r[e]?r[e].push(t):r[e]=[t],n},n.once=function(e,t){return t._once=!0,n.on(e,t),n},n.off=function(e,t){var i=arguments.length;if(1===i)delete r[e];else if(0===i)r={};else{var o=r[e];if(!o)return n;o.splice(o.indexOf(t),1)}return n},n.emit=function(){var e=i(arguments);return n.emitterSnapshot(e.shift()).apply(this,e)},n.emitterSnapshot=function(e){var c=(r[e]||[]).slice(0);return function(){var r=i(arguments),a=this||n;if("error"===e&&!1!==t.throws&&!c.length)throw 1===r.length?r[0]:r;return c.forEach(function(i){t.async?o(i,r,a):i.apply(a,r),i._once&&n.off(e,i)}),n}},n}},141:function(n,e){n.exports=function(n,e){return Array.prototype.slice.call(n,e)}},142:function(n,e,t){"use strict";var i=t(143);n.exports=function(n,e,t){n&&i(function(){n.apply(t||null,e||[])})}},143:function(n,e,t){(function(e){var t,i="function"==typeof e;t=i?function(n){e(n)}:function(n){setTimeout(n,0)},n.exports=t}).call(e,t(65).setImmediate)},144:function(n,e,t){"use strict";(function(e){function i(n,e,t,i){return n.addEventListener(e,t,i)}function o(n,e,t){return n.attachEvent("on"+e,s(n,e,t))}function r(n,e,t,i){return n.removeEventListener(e,t,i)}function c(n,e,t){var i=l(n,e,t);if(i)return n.detachEvent("on"+e,i)}function a(n,e,t){var i=-1===v.indexOf(e)?function(){return new f(e,{detail:t})}():function(){var n;return p.createEvent?(n=p.createEvent("Event"),n.initEvent(e,!0,!0)):p.createEventObject&&(n=p.createEventObject()),n}();n.dispatchEvent?n.dispatchEvent(i):n.fireEvent("on"+e,i)}function u(n,t,i){return function(t){var o=t||e.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,i.call(n,o)}}function s(n,e,t){var i=l(n,e,t)||u(n,e,t);return g.push({wrapper:i,element:n,type:e,fn:t}),i}function l(n,e,t){var i=d(n,e,t);if(i){var o=g[i].wrapper;return g.splice(i,1),o}}function d(n,e,t){var i,o;for(i=0;i<g.length;i++)if(o=g[i],o.element===n&&o.type===e&&o.fn===t)return i}var f=t(145),v=t(146),p=e.document,h=i,m=r,g=[];e.addEventListener||(h=o,m=c),n.exports={add:h,remove:m,fabricate:a}}).call(e,t(45))},145:function(n,e,t){(function(e){var t=e.CustomEvent;n.exports=function(){try{var n=new t("cat",{detail:{foo:"bar"}});return"cat"===n.type&&"bar"===n.detail.foo}catch(n){}return!1}()?t:"function"==typeof document.createEvent?function(n,e){var t=document.createEvent("CustomEvent");return e?t.initCustomEvent(n,e.bubbles,e.cancelable,e.detail):t.initCustomEvent(n,!1,!1,void 0),t}:function(n,e){var t=document.createEventObject();return t.type=n,e?(t.bubbles=Boolean(e.bubbles),t.cancelable=Boolean(e.cancelable),t.detail=e.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(e,t(45))},146:function(n,e,t){"use strict";(function(e){var t=[],i="",o=/^on/;for(i in e)o.test(i)&&t.push(i.slice(2));n.exports=t}).call(e,t(45))},147:function(n,e,t){"use strict";function i(n){var e=c[n];return e?e.lastIndex=0:c[n]=e=new RegExp(a+n+u,"g"),e}function o(n,e){var t=n.className;t.length?i(e).test(t)||(n.className+=" "+e):n.className=e}function r(n,e){n.className=n.className.replace(i(e)," ").trim()}var c={},a="(?:^|\\s)",u="(?:\\s|$)";n.exports={add:o,rm:r}},148:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nav",{class:["options-menu",{"options-menu__show":n.showMenu}]},[n._l(n.sortedServices,function(e){return t("router-link",{key:e.id,staticClass:"options-menu--link ripple",attrs:{to:e.optionsPath,"data-id":e.id},nativeOn:{mousedown:function(e){n._showRipple(e)}}},[t("span",{staticClass:"options-menu--drag-handle"}),n._v("\n    "+n._s(e.name)+"\n    "),t("v-switch",{staticClass:"options-menu--switch",attrs:{value:e.active,"service-id":e.id,name:e.functionName+"Active"},on:{input:function(t){n.onInput(e,t)}}})],1)}),n._v(" "),t("router-link",{staticClass:"options-menu--link options-menu--support",attrs:{to:"/support"}},[n._v("\n    Support\n  ")])],2)},o=[],r={render:i,staticRenderFns:o};e.a=r},15:function(n,e,t){"use strict";function i(n){t(131)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(133),r=t.n(o),c=t(134),a=t(7),u=i,s=a(r.a,c.a,!1,u,null,null);e.default=s.exports},16:function(n,e,t){"use strict";function i(n){t(135)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(138),r=t.n(o),c=t(148),a=t(7),u=i,s=a(r.a,c.a,!1,u,null,null);e.default=s.exports}});