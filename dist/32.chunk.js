webpackJsonp([32],{3:function(n,e,t){"use strict";function r(n){t(53)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(44),o=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);var l=t(55),d=t(8),s=r,p=d(o.a,l.a,!1,s,null,null);e.default=p.exports},44:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(2),a=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default={components:{vSpinner:(0,a.default)("v-spinner")},props:{scrollTop:Number,service:Object,loading:Boolean},data:function(){return{panelHeaderStyling:{height:"128px"},background2ScrollStyling:{opacity:1,display:"block"},foregroundTopStyling:{height:"64px",opacity:1,display:"block"}}},watch:{scrollTop:function(n){var e=1-n*(1/64);n<64?(this.panelHeaderStyling.height=128-n+"px",this.foregroundTopStyling.height=64-n+"px",this.foregroundTopStyling.opacity=e,this.background2ScrollStyling.opacity=e,this.foregroundTopStyling.display="block",this.background2ScrollStyling.display="block"):(this.panelHeaderStyling.height="64px",this.foregroundTopStyling.height="0px",this.foregroundTopStyling.display="none",this.background2ScrollStyling.display="none")}},computed:{background1Styling:function(){return{"background-color":this.service.color}},background2Styling:function(){return Object.assign({"background-color":this.service.color,"background-image":"url("+this.service.logo+")"},this.background2ScrollStyling)}},methods:{triggerRefresh:function(){this.$emit("refresh")}}}},53:function(n,e,t){var r=t(54);"string"==typeof r&&(r=[[n.i,r,""]]);var a={};a.transform=void 0;t(10)(r,a);r.locals&&(n.exports=r.locals)},54:function(n,e,t){e=n.exports=t(9)(void 0),e.push([n.i,"\n.refresh-button {\n  border-radius: 100%;\n  height: 45px;\n  margin: 12px 2px;\n  padding: 8px;\n  width: 45px;\n  display: none !important;\n}\n.panel-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  height: 50px !important;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.panel-header .panel-header--background {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.panel-header .panel-header--background1, .panel-header .panel-header--background2 {\n      background-repeat: no-repeat;\n      height: 100%;\n      position: absolute;\n      width: 100%;\n}\n.panel-header .panel-header--background2 {\n      background-position: right -20px center;\n      background-size: auto 60px;\n      display: none !important;\n}\n.panel-header .panel-header--foreground {\n    color: #fff;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n}\n.panel-header .panel-header--foreground-top {\n    display: none !important;\n}\n.panel-header .panel-header--foreground-top,\n  .panel-header .panel-header--foreground-bottom {\n    float: left;\n    height: 64px;\n    width: 100%;\n}\n.panel-header .panel-header--foreground-bottom {\n    padding: 0 16px;\n}\n.panel-header .panel-header--url {\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 64px;\n    text-decoration: none;\n}\n",""])},55:function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"panel-header",style:n.panelHeaderStyling},[r("div",{staticClass:"panel-header--background"},[r("div",{staticClass:"panel-header--background1",style:n.background1Styling}),n._v(" "),r("div",{staticClass:"panel-header--background2",style:n.background2Styling})]),n._v(" "),r("div",{staticClass:"panel-header--foreground"},[r("div",{staticClass:"panel-header--foreground-top",style:n.foregroundTopStyling},[r("div",{staticClass:"refresh-button ripple",on:{click:n.triggerRefresh}},[r("transition",{attrs:{name:"loader",mode:"out-in"}},[n.loading?r("v-spinner",{attrs:{border:5,width:25}}):r("img",{attrs:{src:t(56),alt:"Refresh "+n.service.name}})],1)],1)]),n._v(" "),r("div",{staticClass:"panel-header--foreground-bottom"},[r("a",{staticClass:"panel-header--url",attrs:{href:n.service.url}},[n._v(n._s(n.service.name))])])])])},a=[],o={render:r,staticRenderFns:a};e.a=o},56:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjkzIDM4NSAyNCAyNCI+PHN0eWxlPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGQ9Ik0tMjc1LjQgMzkxLjRjLTEuNC0xLjUtMy40LTIuNC01LjYtMi40LTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhjMy43IDAgNi44LTIuNSA3LjctNmgtMmMtMSAyLjMtMyA0LTUuNyA0LTMuMyAwLTYtMi43LTYtNnMyLjctNiA2LTZjMS43IDAgMyAuNyA0LjIgMS44bC0zLjIgMy4yaDd2LTdsLTIuNCAyLjR6IiBjbGFzcz0ic3QwIi8+PC9zdmc+"}});