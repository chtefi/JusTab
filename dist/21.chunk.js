webpackJsonp([21],{18:function(n,e,t){"use strict";function i(n){t(270)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(272),o=t.n(a),r=t(273),s=t(8),d=i,l=s(o.a,r.a,!1,d,null,null);e.default=l.exports},270:function(n,e,t){var i=t(271);"string"==typeof i&&(i=[[n.i,i,""]]);var a={};a.transform=void 0;t(10)(i,a);i.locals&&(n.exports=i.locals)},271:function(n,e,t){e=n.exports=t(9)(void 0),e.push([n.i,"\n.page-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  background-color: #4285f4;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n  height: 64px;\n  line-height: 64px;\n  padding-left: 272px;\n  transition: padding 400ms, background .3s;\n  width: 100vw;\n}\n.page-header--menu-icon {\n    cursor: pointer;\n    display: none;\n    margin-right: 8px;\n    vertical-align: middle;\n}\n.page-header--title {\n    display: inline;\n}\n@media screen and (max-width: 580px) {\n.page-header {\n    padding-left: 8px;\n}\n.page-header--menu-icon {\n      display: inline;\n}\n}\n",""])},272:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,color:String},methods:{onMenuClick:function(){this.$emit("toggle")}}}},273:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"page-header",style:{"background-color":n.color}},[i("img",{staticClass:"page-header--menu-icon",attrs:{src:t(274),alt:"Toggle menu"},on:{click:n.onMenuClick}}),n._v(" "),i("div",{staticClass:"page-header--title"},[n._v("\n    "+n._s(n.title)+"\n  ")])])},a=[],o={render:i,staticRenderFns:a};e.a=o},274:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4="}});