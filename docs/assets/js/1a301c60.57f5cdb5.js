"use strict";(self.webpackChunkhotpot_docs=self.webpackChunkhotpot_docs||[]).push([[133],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),N=m(a),g=r,o=N["".concat(d,".").concat(g)]||N[g]||u[g]||l;return a?n.createElement(o,p(p({ref:e},k),{},{components:a})):n.createElement(o,p({ref:e},k))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4080:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,title:"Token"},p=void 0,i={unversionedId:"graph/token",id:"graph/token",title:"Token",description:"PlatformEntity",source:"@site/docs/graph/token.md",sourceDirName:"graph",slug:"/graph/token",permalink:"/docs/docs/graph/token",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graph/token.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Token"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/docs/graph/overview"},next:{title:"Governance",permalink:"/docs/docs/graph/governance"}},d={},m=[{value:"PlatformEntity",id:"platformentity",level:3},{value:"TokenType",id:"tokentype",level:3},{value:"BondingCurveType",id:"bondingcurvetype",level:3},{value:"TokenEntity",id:"tokenentity",level:3},{value:"TokenUpgradeHistory",id:"tokenupgradehistory",level:3},{value:"PriceByDay|PriceByHour",id:"pricebydaypricebyhour",level:3},{value:"TradeVolumeByDay|TradeVolumeByHour",id:"tradevolumebydaytradevolumebyhour",level:3},{value:"Member",id:"member",level:3},{value:"MintBurnEntity",id:"mintburnentity",level:3}],k={toc:m};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"platformentity"},"PlatformEntity"),(0,r.kt)("p",null,"\u5de5\u5382\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Factory \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u5c5e\u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addr"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Factory \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treasury"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fd\u5e93\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mintTax"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u94f8\u9020\u624b\u7eed\u8d39\u8d39\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burnTax"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u9500\u6bc1\u624b\u7eed\u8d39\u8d39\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tvl"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u9501\u4ed3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"daoNum"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"dao \u7684\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u6210\u5458\u6570")))),(0,r.kt)("h3",{id:"tokentype"},"TokenType"),(0,r.kt)("p",null,"\u5df2\u7ecf\u5b9e\u73b0\u7684\u4ee3\u5e01\u7c7b\u578b\uff1aERC20\u3001ERC721 \u7b49"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"impl"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0\u5730\u5740")))),(0,r.kt)("h3",{id:"bondingcurvetype"},"BondingCurveType"),(0,r.kt)("p",null,"\u5df2\u7ecf\u5b9e\u73b0\u7684 BondingCurve \u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"impl"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0\u5730\u5740")))),(0,r.kt)("h3",{id:"tokenentity"},"TokenEntity"),(0,r.kt)("p",null,"\u6bcf\u4e2a Dao \u5bf9\u5e94\u7684\u4ee3\u5e01\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u5408\u7ea6\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u5c5e\u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addr"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u5408\u7ea6\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"factory"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5de5\u5382\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u7b80\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metaUri"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01 metadata \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supply"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u4f9b\u5e94\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bondingCurveType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"bondingCurve \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"bondingCurve \u7684\u53c2\u6570\uff08hexString\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mintTax"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u65b9\u94f8\u9020\u624b\u7eed\u8d39\u8d39\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burnTax"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u65b9\u9500\u6bc1\u624b\u7eed\u8d39\u8d39\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paused"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5df2\u6682\u505c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doomsDays"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7533\u8bf7\u9500\u6bc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destoryed"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5df2\u9500\u6bc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treasury"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fd\u5e93\u94b1\u5305\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"marketCap"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e02\u503c\uff08currentPrice","*","supply\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5e01\u672c\u4f4d\u4ef7\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lockValue"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9501\u4ed3\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treasuryFee"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fd\u5e93\u624b\u7eed\u8d39\u6536\u53d6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u5458\u6570\uff08\u6301\u5e01\u4eba\u6570\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txCount"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Governor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"governance#governor_project"},"Governor_Project")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6cbb\u7406\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tradeVolumesByDay"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tradevolumebydaytradevolumebyhour"},"TradeVolumeByDay"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u65e5\u4ea4\u6613\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tradeVolumesByHour"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tradevolumebydaytradevolumebyhour"},"TradeVolumeByHour"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u65f6\u4ea4\u6613\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priceByDay"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#pricebydaypricebyhour"},"PriceByDay"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u65e5\u4ef7\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priceByHour"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#pricebydaypricebyhour"},"PriceByHour"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u65f6\u4ef7\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mintBurnTxs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mintburnentity"},"MintBurnEntity"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9500\u6bc1\u94f8\u9020\u4ea4\u6613\u8bb0\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"members"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#member"},"Member"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u5458\u4fe1\u606f")))),(0,r.kt)("h3",{id:"tokenupgradehistory"},"TokenUpgradeHistory"),(0,r.kt)("p",null,"\u4ee3\u5e01\u5b9e\u73b0\u66f4\u65b0\u5386\u53f2"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u54c8\u5e0c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tokenentity"},"TokenEntity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upgradeTo"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u66f4\u65b0\u5230\u7684\u5b9e\u73b0\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u540e\u8c03\u7528\u7684\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operator"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u54c8\u5e0c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\uff1arequest\u3001reject\u3001upgrade")))),(0,r.kt)("h3",{id:"pricebydaypricebyhour"},"PriceByDay|PriceByHour"),(0,r.kt)("p",null,"\u6bcf\u65e5/\u5c0f\u65f6\u5e01\u672c\u4f4d\u4ef7\u683c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},'tokenId+"',"|",'"+\u6309\u5929/\u5c0f\u65f6\u53d6\u6574\u7684\u65f6\u95f4\u6233')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u4f4e\u4ef7\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u9ad8\u4ef7\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closePrice"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u76d8\u4ef7\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenTvl"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u603b\u9501\u4ed3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platformTvl"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u603b\u9501\u4ed3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u5929/\u5c0f\u65f6\u53d6\u6574\u7684\u65f6\u95f4\u6233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tokenentity"},"TokenEntity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u4fe1\u606f")))),(0,r.kt)("h3",{id:"tradevolumebydaytradevolumebyhour"},"TradeVolumeByDay|TradeVolumeByHour"),(0,r.kt)("p",null,"\u6bcf\u65e5/\u5c0f\u65f6\u5e01\u672c\u4f4d\u4ea4\u6613\u91cf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},'tokenId+"',"|",'"+\u6309\u5929/\u5c0f\u65f6\u53d6\u6574\u7684\u65f6\u95f4\u6233')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u5929/\u5c0f\u65f6\u53d6\u6574\u7684\u65f6\u95f4\u6233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tokenentity"},"TokenEntity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u4fe1\u606f")))),(0,r.kt)("h3",{id:"member"},"Member"),(0,r.kt)("p",null,"\u7528\u6237\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4ee3\u5e01\u5730\u5740+"',"|",'"+\u7528\u6237\u94b1\u5305\u5730\u5740')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tokenentity"},"TokenEntity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c token \u4e3a ERC721\uff0c\u5219\u8bb0\u5f55\u7528\u6237\u6301\u6709\u7684 ERC721 \u7684 tokenId\uff0c\u5426\u5219\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c token \u4e3a ERC20\uff0c\u5219\u8bb0\u5f55\u7528\u6237\u7684\u4ee3\u5e01\u4f59\u989d\uff0c\u5426\u5219\u4e3a\u7a7a")))),(0,r.kt)("h3",{id:"mintburnentity"},"MintBurnEntity"),(0,r.kt)("p",null,"\u94f8\u9020\u9500\u6bc1\u4ea4\u6613\u8bb0\u5f55"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u589e id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u54c8\u5e0c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockNum"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u533a\u5757\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u65f6\u95f4\u6233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u65b9\u5411\uff1a(0 \u94f8\u9020,1 \u9500\u6bc1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u53d1\u8d77\u4eba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u54ea\u9500\u6bc1\uff0c\u6216\u94f8\u9020\u7ed9\u8c01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"erc20Amount"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u94f8\u9020\u6216\u9500\u6bc1\u7684\u4ee3\u5e01\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nativeAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u94f8\u9020\u6d88\u8017\u7684 nativeToken \u6570\u91cf\u6216\u9500\u6bc1\u8fd4\u56de\u7684 nativeToken \u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tokenentity"},"TokenEntity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u4fe1\u606f")))))}u.isMDXComponent=!0}}]);