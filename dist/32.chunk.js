webpackJsonp([32],{2:function(e,n,t){"use strict";function r(e){t(49)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(51),a=t.n(o),i=t(52),l=t(7),d=r,s=l(a.a,i.a,!1,d,null,null);n.default=s.exports},49:function(e,n,t){var r=t(50);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(9)(r,o);r.locals&&(e.exports=r.locals)},50:function(e,n,t){n=e.exports=t(8)(void 0),n.push([e.i,"\n.refresh-button {\n  border-radius: 100%;\n  height: 45px;\n  margin: 12px 2px;\n  padding: 8px;\n  width: 45px;\n}\n.panel-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  height: 128px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.panel-header .panel-header--background {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.panel-header .panel-header--background1, .panel-header .panel-header--background2 {\n      background-repeat: no-repeat;\n      height: 100%;\n      position: absolute;\n      width: 100%;\n}\n.panel-header .panel-header--background2 {\n      background-position: right -20px center;\n      background-size: auto 60px;\n}\n.panel-header .panel-header--foreground {\n    color: #fff;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n}\n.panel-header .panel-header--foreground-top,\n  .panel-header .panel-header--foreground-bottom {\n    float: left;\n    height: 64px;\n    width: 100%;\n}\n.panel-header .panel-header--foreground-bottom {\n    padding: 0 16px;\n}\n.panel-header .panel-header--url {\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 64px;\n    text-decoration: none;\n}\n",""])},51:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(10),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default={components:{vSpinner:(0,o.default)("v-spinner")},props:{scrollTop:Number,service:Object,loading:Boolean},data:function(){return{panelHeaderStyling:{height:"128px"},background2ScrollStyling:{opacity:1,display:"block"},foregroundTopStyling:{height:"64px",opacity:1,display:"block"}}},watch:{scrollTop:function(e){var n=1-e*(1/64);e<64?(this.panelHeaderStyling.height=128-e+"px",this.foregroundTopStyling.height=64-e+"px",this.foregroundTopStyling.opacity=n,this.background2ScrollStyling.opacity=n,this.foregroundTopStyling.display="block",this.background2ScrollStyling.display="block"):(this.panelHeaderStyling.height="64px",this.foregroundTopStyling.height="0px",this.foregroundTopStyling.display="none",this.background2ScrollStyling.display="none")}},computed:{background1Styling:function(){return{"background-color":this.service.color}},background2Styling:function(){return Object.assign({"background-color":this.service.color,"background-image":"url("+this.service.logo+")"},this.background2ScrollStyling)}},methods:{triggerRefresh:function(){this.$emit("refresh")}}}},52:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"panel-header",style:e.panelHeaderStyling},[r("div",{staticClass:"panel-header--background"},[r("div",{staticClass:"panel-header--background1",style:e.background1Styling}),e._v(" "),r("div",{staticClass:"panel-header--background2",style:e.background2Styling})]),e._v(" "),r("div",{staticClass:"panel-header--foreground"},[r("div",{staticClass:"panel-header--foreground-top",style:e.foregroundTopStyling},[r("div",{staticClass:"refresh-button ripple",on:{click:e.triggerRefresh}},[r("transition",{attrs:{name:"loader",mode:"out-in"}},[e.loading?r("v-spinner",{attrs:{border:5,width:25}}):r("img",{attrs:{src:t(53),alt:"Refresh "+e.service.name}})],1)],1)]),e._v(" "),r("div",{staticClass:"panel-header--foreground-bottom"},[r("a",{staticClass:"panel-header--url",attrs:{href:e.service.url}},[e._v(e._s(e.service.name))])])])])},o=[],a={render:r,staticRenderFns:o};n.a=a},53:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjkzIDM4NSAyNCAyNCI+PHN0eWxlPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGQ9Ik0tMjc1LjQgMzkxLjRjLTEuNC0xLjUtMy40LTIuNC01LjYtMi40LTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhjMy43IDAgNi44LTIuNSA3LjctNmgtMmMtMSAyLjMtMyA0LTUuNyA0LTMuMyAwLTYtMi43LTYtNnMyLjctNiA2LTZjMS43IDAgMyAuNyA0LjIgMS44bC0zLjIgMy4yaDd2LTdsLTIuNCAyLjR6IiBjbGFzcz0ic3QwIi8+PC9zdmc+"}});