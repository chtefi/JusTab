webpackJsonp([36],{10:function(t,e,n){"use strict";function r(t){return function(){return n(43)("./"+t).then(function(t){return t.default})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},114:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(11),a=r(i),u=n(1),s=r(u),c=n(115),p=r(c),f=n(41),h=r(f),l=n(42),v=r(l),d=n(10),y=r(d),m=(0,y.default)("options/v-options"),g=(0,y.default)("options/v-options-google-calendar"),b=(0,y.default)("options/v-options-gmail"),w=(0,y.default)("options/v-options-couch-potato"),x=(0,y.default)("options/v-options-designer-news"),k=(0,y.default)("options/v-options-hacker-news"),E=(0,y.default)("options/v-options-github"),_=(0,y.default)("options/v-options-product-hunt"),R=(0,y.default)("options/v-options-dribbble"),O=(0,y.default)("options/v-options-reddit"),C=(0,y.default)("options/v-options-nzbget"),j=(0,y.default)("options/v-options-sonarr"),A=(0,y.default)("options/v-options-support"),S=(0,y.default)("options/v-options-transmission");a.default.use(s.default),a.default.mixin(v.default),a.default.mixin({methods:o({},(0,u.mapActions)(["updateServiceSettings","reloadService"]),{saveData:function(t,e,n){var r={};r[e]=n,this.updateServiceSettings({serviceId:t,changes:r}),this.reloadService({serviceId:t})}})}),a.default.use(p.default);var T=[{path:"/",redirect:"/googlecalendar"},{path:"/googlecalendar",component:g},{path:"/gmail",component:b},{path:"/couchpotato",component:w},{path:"/designernews",component:x},{path:"/hackernews",component:k},{path:"/github",component:E},{path:"/producthunt",component:_},{path:"/dribbble",component:R},{path:"/reddit",component:O},{path:"/nzbget",component:C},{path:"/sonarr",component:j},{path:"/transmission",component:S},{path:"/support",component:A}],$=new p.default({routes:T});new a.default({el:".options",store:h.default,router:$,beforeCreate:function(){this.$store.dispatch("loadServices")},render:function(t){return t(m)}})},115:function(t,e,n){"use strict";function r(t,e){}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function a(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){void 0===e&&(e={});var r,o=n||s;try{r=o(t||"")}catch(t){r={}}for(var i in e)r[i]=e[i];return r}function s(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=Bt(n.shift()),o=n.length>0?Bt(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function c(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return It(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(It(e)):r.push(It(e)+"="+It(t)))}),r.join("&")}return It(e)+"="+It(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function p(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=f(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:l(e,o),matched:t?h(t):[]};return n&&(a.redirectedFrom=l(n,o)),Object.freeze(a)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=f(t[n]);return e}return t}function h(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function l(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||c;return(n||"/")+i(r)+o}function v(t,e){return e===Vt?t===e:!!e&&(t.path&&e.path?t.path.replace(Ht,"")===e.path.replace(Ht,"")&&t.hash===e.hash&&d(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&d(t.query,e.query)&&d(t.params,e.params)))}function d(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?d(r,o):String(r)===String(o)})}function y(t,e){return 0===t.path.replace(Ht,"/").indexOf(e.path.replace(Ht,"/"))&&(!e.hash||t.hash===e.hash)&&m(t.query,e.query)}function m(t,e){for(var n in e)if(!(n in t))return!1;return!0}function g(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function b(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=b(e.children)))return e}}function w(t){if(!w.installed||Lt!==t){w.installed=!0,Lt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",qt),t.component("router-link",Nt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}function x(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function k(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function E(t){return t.replace(/\/\//g,"/")}function _(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Zt.exec(t));){var s=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],v=n[4],d=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=n[2]||u,k=v||d;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?S(k):m?".*":"[^"+A(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function R(t,e){return j(_(t,e))}function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function j(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?O:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Jt(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[s].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?C(f):u(f),!e[s].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){return t.keys=e,t}function $(t){return t.sensitive?"":"i"}function P(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return T(t,e)}function L(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(M(t[o],e,n).source);return T(new RegExp("(?:"+r.join("|")+")",$(n)),e)}function q(t,e,n){return U(_(t,n),e,n)}function U(t,e,n){Jt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=A(u);else{var s=A(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var p=A(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",T(new RegExp("^"+i,$(n)),e)}function M(t,e,n){return Jt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?P(t,e):Jt(t)?L(t,e,n):q(t,e,n)}function z(t,e,n){try{return(te[t]||(te[t]=Xt.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function I(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){B(o,i,a,t)});for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function B(t,e,n,r,o,i){var a=r.path,u=r.name,s=r.pathToRegexpOptions||{},c=V(a,o,s.strict);"boolean"==typeof r.caseSensitive&&(s.sensitive=r.caseSensitive);var p={path:c,regex:H(c,s),components:r.components||{default:r.component},instances:{},name:u,parent:o,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach(function(r){var o=i?E(i+"/"+r.path):void 0;B(t,e,n,r,p,o)}),void 0!==r.alias){(Array.isArray(r.alias)?r.alias:[r.alias]).forEach(function(i){var a={path:i,children:r.children};B(t,e,n,a,o,p.path||"/")})}e[p.path]||(t.push(p.path),e[p.path]=p),u&&(n[u]||(n[u]=p))}function H(t,e){var n=Xt(t,[],e);return n}function V(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:E(e.path+"/"+t)}function D(t,e,n,r){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){o=F({},o),o._normalized=!0;var i=F(F({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;o.path=z(a,i,"path "+e.path)}return o}var s=k(o.path||""),c=e&&e.path||"/",p=s.path?x(s.path,c,n||o.append):c,f=u(s.query,o.query,r&&r.options.parseQuery),h=o.hash||s.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function F(t,e){for(var n in e)t[n]=e[n];return t}function N(t,e){function n(t){I(t,s,c,f)}function r(t,n,r){var o=D(t,n,!1,e),i=o.name;if(i){var u=f[i];if(!u)return a(null,o);var p=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),n&&"object"==typeof n.params)for(var h in n.params)!(h in o.params)&&p.indexOf(h)>-1&&(o.params[h]=n.params[h]);if(u)return o.path=z(u.path,o.params,'named route "'+i+'"'),a(u,o,r)}else if(o.path){o.params={};for(var l=0;l<s.length;l++){var v=s[l],d=c[v];if(K(d.regex,o.path,o.params))return a(d,o,r)}}return a(null,o)}function o(t,n){var o=t.redirect,i="function"==typeof o?o(p(t,n,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,n);var u=i,s=u.name,c=u.path,h=n.query,l=n.hash,v=n.params;if(h=u.hasOwnProperty("query")?u.query:h,l=u.hasOwnProperty("hash")?u.hash:l,v=u.hasOwnProperty("params")?u.params:v,s){f[s];return r({_normalized:!0,name:s,query:h,hash:l,params:v},void 0,n)}if(c){var d=J(c,t);return r({_normalized:!0,path:z(d,v,'redirect route with path "'+d+'"'),query:h,hash:l},void 0,n)}return a(null,n)}function i(t,e,n){var o=z(n,e.params,'aliased route with path "'+n+'"'),i=r({_normalized:!0,path:o});if(i){var u=i.matched,s=u[u.length-1];return e.params=i.params,a(s,e)}return a(null,e)}function a(t,n,r){return t&&t.redirect?o(t,r||n):t&&t.matchAs?i(t,n,t.matchAs):p(t,n,r,e)}var u=I(t),s=u.pathList,c=u.pathMap,f=u.nameMap;return{match:r,addRoutes:n}}function K(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=u)}return!0}function J(t,e){return x(t,e.parent?e.parent.path:"/",!0)}function X(){window.history.replaceState({key:it()},""),window.addEventListener("popstate",function(t){Q(),t.state&&t.state.key&&at(t.state.key)})}function Y(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=W(),i=o(e,n,r?t:null);i&&("function"==typeof i.then?i.then(function(e){rt(e,t)}).catch(function(t){}):rt(i,t))})}}function Q(){var t=it();t&&(ee[t]={x:window.pageXOffset,y:window.pageYOffset})}function W(){var t=it();if(t)return ee[t]}function G(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function Z(t){return nt(t.x)||nt(t.y)}function tt(t){return{x:nt(t.x)?t.x:window.pageXOffset,y:nt(t.y)?t.y:window.pageYOffset}}function et(t){return{x:nt(t.x)?t.x:0,y:nt(t.y)?t.y:0}}function nt(t){return"number"==typeof t}function rt(t,e){var n="object"==typeof t;if(n&&"string"==typeof t.selector){var r=document.querySelector(t.selector);if(r){var o=t.offset&&"object"==typeof t.offset?t.offset:{};o=et(o),e=G(r,o)}else Z(t)&&(e=tt(t))}else n&&Z(t)&&(e=tt(t));e&&window.scrollTo(e.x,e.y)}function ot(){return re.now().toFixed(3)}function it(){return oe}function at(t){oe=t}function ut(t,e){Q();var n=window.history;try{e?n.replaceState({key:oe},"",t):(oe=ot(),n.pushState({key:oe},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function st(t){ut(t,!0)}function ct(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function pt(t){return function(e,n,r){var i=!1,a=0,u=null;ft(t,function(t,e,n,s){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var c,p=vt(function(e){lt(e)&&(e=e.default),t.resolved="function"==typeof e?e:Lt.extend(e),n.components[s]=e,--a<=0&&r()}),f=vt(function(t){var e="Failed to resolve async component "+s+": "+t;u||(u=o(t)?t:new Error(e),r(u))});try{c=t(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||r()}}function ft(t,e){return ht(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function ht(t){return Array.prototype.concat.apply([],t)}function lt(t){return t.__esModule||ie&&"Module"===t[Symbol.toStringTag]}function vt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}function dt(t){if(!t)if(Kt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function yt(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function mt(t,e,n,r){var o=ft(t,function(t,r,o,i){var a=gt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return ht(r?o.reverse():o)}function gt(t,e){return"function"!=typeof t&&(t=Lt.extend(t)),t.options[e]}function bt(t){return mt(t,"beforeRouteLeave",xt,!0)}function wt(t){return mt(t,"beforeRouteUpdate",xt)}function xt(t,e){if(e)return function(){return t.apply(e,arguments)}}function kt(t,e,n){return mt(t,"beforeRouteEnter",function(t,r,o,i){return Et(t,o,i,e,n)})}function Et(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){_t(t,e.instances,n,o)})})}}function _t(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){_t(t,e,n,r)},16)}function Rt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function Ot(t){var e=Rt(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}function Ct(){var t=jt();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function jt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function At(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function St(t){ne?ut(At(t)):window.location.hash=t}function Tt(t){ne?st(At(t)):window.location.replace(At(t))}function $t(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Pt(t,e,n){var r="hash"===n?"#"+e:e;return t?E(t+"/"+r):r}Object.defineProperty(e,"__esModule",{value:!0});var Lt,qt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,u=e.data;u.routerView=!0;for(var s=o.$createElement,c=n.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&h++,o._inactive&&(l=!0),o=o.$parent;if(u.routerViewDepth=h,l)return s(f[c],u,r);var v=p.matched[h];if(!v)return f[c]=null,s();var d=f[c]=v.components[c];u.registerRouteInstance=function(t,e){var n=v.instances[c];(e&&n!==t||!e&&n===t)&&(v.instances[c]=e)},(u.hook||(u.hook={})).prepatch=function(t,e){v.instances[c]=e.componentInstance};var y=u.props=i(p,v.props&&v.props[c]);if(y){y=u.props=a({},y);var m=u.attrs=u.attrs||{};for(var g in y)d.props&&g in d.props||(m[g]=y[g],delete y[g])}return s(d,u,r)}},Ut=/[!'()*]/g,Mt=function(t){return"%"+t.charCodeAt(0).toString(16)},zt=/%2C/g,It=function(t){return encodeURIComponent(t).replace(Ut,Mt).replace(zt,",")},Bt=decodeURIComponent,Ht=/\/?$/,Vt=p(null,{path:"/"}),Dt=[String,Object],Ft=[String,Array],Nt={name:"router-link",props:{to:{type:Dt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Ft,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,u=o.href,s={},c=n.options.linkActiveClass,f=n.options.linkExactActiveClass,h=null==c?"router-link-active":c,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,w=i.path?p(null,i,null,n):a;s[m]=v(r,w),s[d]=this.exact?s[m]:y(r,w);var x=function(t){g(t)&&(e.replace?n.replace(i):n.push(i))},k={click:g};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var E={class:s};if("a"===this.tag)E.on=k,E.attrs={href:u};else{var _=b(this.$slots.default);if(_){_.isStatic=!1;var R=Lt.util.extend;(_.data=R({},_.data)).on=k;(_.data.attrs=R({},_.data.attrs)).href=u}else E.on=k}return t(this.tag,E,this.$slots.default)}},Kt="undefined"!=typeof window,Jt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Xt=M,Yt=_,Qt=R,Wt=j,Gt=U,Zt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Xt.parse=Yt,Xt.compile=Qt,Xt.tokensToFunction=Wt,Xt.tokensToRegExp=Gt;var te=Object.create(null),ee=Object.create(null),ne=Kt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),re=Kt&&window.performance&&window.performance.now?window.performance:Date,oe=ot(),ie="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ae=function(t,e){this.router=t,this.base=dt(e),this.current=Vt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ae.prototype.listen=function(t){this.cb=t},ae.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ae.prototype.onError=function(t){this.errorCbs.push(t)},ae.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},ae.prototype.confirmTransition=function(t,e,n){var i=this,a=this.current,u=function(t){o(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)};if(v(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var s=yt(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(bt(p),this.router.beforeHooks,wt(c),f.map(function(t){return t.beforeEnter}),pt(f));this.pending=t;var l=function(e,n){if(i.pending!==t)return u();try{e(t,a,function(t){!1===t||o(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):n(t)})}catch(t){u(t)}};ct(h,l,function(){var n=[];ct(kt(f,n,function(){return i.current===t}).concat(i.router.resolveHooks),l,function(){if(i.pending!==t)return u();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},ae.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var ue=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&X();var i=Rt(this.base);window.addEventListener("popstate",function(t){var n=r.current,a=Rt(r.base);r.current===Vt&&a===i||r.transitionTo(a,function(t){o&&Y(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){ut(E(r.base+t.fullPath)),Y(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){st(E(r.base+t.fullPath)),Y(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(Rt(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?ut(e):st(e)}},e.prototype.getCurrentLocation=function(){return Rt(this.base)},e}(ae),se=function(t){function e(e,n,r){t.call(this,e,n),r&&Ot(this.base)||Ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,n=e.options.scrollBehavior,r=ne&&n;r&&X(),window.addEventListener(ne?"popstate":"hashchange",function(){var e=t.current;Ct()&&t.transitionTo(jt(),function(n){r&&Y(t.router,n,e,!0),ne||Tt(n.fullPath)})})},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){St(t.fullPath),Y(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),Y(r.router,t,i,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;jt()!==e&&(t?St(e):Tt(e))},e.prototype.getCurrentLocation=function(){return jt()},e}(ae),ce=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ae),pe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=N(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ne&&!1!==t.fallback,this.fallback&&(e="hash"),Kt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new se(this,t.base,this.fallback);break;case"abstract":this.history=new ce(this,t.base)}},fe={currentRoute:{configurable:!0}};pe.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},fe.currentRoute.get=function(){return this.history&&this.history.current},pe.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof ue)n.transitionTo(n.getCurrentLocation());else if(n instanceof se){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},pe.prototype.beforeEach=function(t){return $t(this.beforeHooks,t)},pe.prototype.beforeResolve=function(t){return $t(this.resolveHooks,t)},pe.prototype.afterEach=function(t){return $t(this.afterHooks,t)},pe.prototype.onReady=function(t,e){this.history.onReady(t,e)},pe.prototype.onError=function(t){this.history.onError(t)},pe.prototype.push=function(t,e,n){this.history.push(t,e,n)},pe.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},pe.prototype.go=function(t){this.history.go(t)},pe.prototype.back=function(){this.go(-1)},pe.prototype.forward=function(){this.go(1)},pe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},pe.prototype.resolve=function(t,e,n){var r=D(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:Pt(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},pe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Vt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(pe.prototype,fe),pe.install=w,pe.version="2.8.1",Kt&&window.Vue&&window.Vue.use(pe),e.default=pe},42:function(t,e,n){"use strict";function r(t,e){var n=document.createElement("div");n.classList.add("ripple__element"),e.appendChild(n);var r=e.getBoundingClientRect(),o=t.clientY-r.top,i=t.clientX-r.left;n.style.top=o+"px",n.style.left=i+"px",n.style.transform="scale(20)"}function o(){var t=this.querySelector(".ripple__element");t&&a(t,300).then(function(){t.parentNode&&t.parentNode.removeChild(t)})}function i(t){for(var e=t.querySelectorAll(".ripple__element"),n=0;n<e.length;n++){var r=e[n];r.parentNode.removeChild(r)}}function a(t,e){return new Promise(function(n){t.style.opacity=0,setTimeout(function(){n()},e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{_showRipple:function(t){var e=t.target.closest(".ripple, .ripple--no");i(e),e&&e.classList.contains("ripple")&&(r(t,e),e.addEventListener("mouseup",o),e.addEventListener("mouseleave",o))}}}},43:function(t,e,n){function r(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./options/v-options":[33,0,29],"./options/v-options-couch-potato":[20,17,29],"./options/v-options-couch-potato.vue":[20,17,29],"./options/v-options-designer-news":[21,16,29],"./options/v-options-designer-news.vue":[21,16,29],"./options/v-options-dribbble":[22,4,29],"./options/v-options-dribbble.vue":[22,4,29],"./options/v-options-github":[23,15,29],"./options/v-options-github.vue":[23,15,29],"./options/v-options-gmail":[24,14,29],"./options/v-options-gmail.vue":[24,14,29],"./options/v-options-google-calendar":[25,3,29],"./options/v-options-google-calendar.vue":[25,3,29],"./options/v-options-hacker-news":[26,13,29],"./options/v-options-hacker-news.vue":[26,13,29],"./options/v-options-menu":[16,1,29],"./options/v-options-menu.vue":[16,1,29],"./options/v-options-nzbget":[27,12,29],"./options/v-options-nzbget.vue":[27,12,29],"./options/v-options-product-hunt":[28,11,29],"./options/v-options-product-hunt.vue":[28,11,29],"./options/v-options-reddit":[29,2,29],"./options/v-options-reddit.vue":[29,2,29],"./options/v-options-sonarr":[30,10,29],"./options/v-options-sonarr.vue":[30,10,29],"./options/v-options-support":[31,6,29],"./options/v-options-support.vue":[31,6,29],"./options/v-options-transmission":[32,9,29],"./options/v-options-transmission.vue":[32,9,29],"./options/v-options.vue":[33,0,29],"./v-button":[14,28,29],"./v-button.vue":[14,28,29],"./v-checkbox":[13,27,29],"./v-checkbox.vue":[13,27,29],"./v-fab":[3,33,29],"./v-fab.vue":[3,33,29],"./v-input":[12,26,29],"./v-input.vue":[12,26,29],"./v-page-header":[18,21,29],"./v-page-header.vue":[18,21,29],"./v-panel":[4,31,29],"./v-panel-error":[34,8,29],"./v-panel-error.vue":[34,8,29],"./v-panel-header":[2,32,29],"./v-panel-header.vue":[2,32,29],"./v-panel-image":[35,20,29],"./v-panel-image.vue":[35,20,29],"./v-panel-item":[37,5,29],"./v-panel-item-button":[36,18,29],"./v-panel-item-button.vue":[36,18,29],"./v-panel-item-content":[19,19,29],"./v-panel-item-content.vue":[19,19,29],"./v-panel-item.vue":[37,5,29],"./v-panel-subheader":[38,25,29],"./v-panel-subheader.vue":[38,25,29],"./v-panel.vue":[4,31,29],"./v-select":[17,24,29],"./v-select.vue":[17,24,29],"./v-service-actions":[39,7,29],"./v-service-actions.vue":[39,7,29],"./v-spinner":[40,23,29],"./v-spinner.vue":[40,23,29],"./v-switch":[15,22,29],"./v-switch.vue":[15,22,29],"./v-tab":[6,30,29],"./v-tab.vue":[6,30,29]};r.keys=function(){return Object.keys(o)},r.id=43,t.exports=r}},[114]);