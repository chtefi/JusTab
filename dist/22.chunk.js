webpackJsonp([22],{153:function(n,e,i){var t=i(154);"string"==typeof t&&(t=[[n.i,t,""]]);var a={};a.transform=void 0;i(9)(t,a);t.locals&&(n.exports=t.locals)},154:function(n,e,i){e=n.exports=i(8)(void 0),e.push([n.i,"\n.page-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  background-color: #4285f4;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n  height: 64px;\n  line-height: 64px;\n  padding-left: 272px;\n  transition: padding 400ms, background .3s;\n  width: 100vw;\n}\n.page-header--menu-icon {\n    cursor: pointer;\n    display: none;\n    margin-right: 8px;\n    vertical-align: middle;\n}\n.page-header--title {\n    display: inline;\n}\n@media screen and (max-width: 580px) {\n.page-header {\n    padding-left: 8px;\n}\n.page-header--menu-icon {\n      display: inline;\n}\n}\n",""])},155:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,color:String},methods:{onMenuClick:function(){this.$emit("toggle")}}}},156:function(n,e,i){"use strict";var t=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page-header",style:{"background-color":n.color}},[t("img",{staticClass:"page-header--menu-icon",attrs:{src:i(157),alt:"Toggle menu"},on:{click:n.onMenuClick}}),n._v(" "),t("div",{staticClass:"page-header--title"},[n._v("\n    "+n._s(n.title)+"\n  ")])])},a=[],o={render:t,staticRenderFns:a};e.a=o},157:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6Ii8+PC9zdmc+"},18:function(n,e,i){"use strict";function t(n){i(153)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(155),o=i.n(a),r=i(156),s=i(7),c=t,d=s(o.a,r.a,!1,c,null,null);e.default=d.exports}});