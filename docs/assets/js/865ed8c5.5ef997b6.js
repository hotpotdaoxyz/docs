"use strict";(self.webpackChunkhotpot_docs=self.webpackChunkhotpot_docs||[]).push([[344],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,k=c["".concat(u,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1165:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={label:"Bonding Curve",title:"Bonding Curve",sidebar_position:3},o="IBondingCurve",i={unversionedId:"contracts/Reference/bondingCurve",id:"contracts/Reference/bondingCurve",title:"Bonding Curve",description:"Hotpot \u4ee3\u5e01\u8ba1\u7b97 Bonding Curve \u63a5\u53e3\uff0c\u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003\u4ee5\u4e0b",source:"@site/docs/contracts/Reference/bondingCurve.md",sourceDirName:"contracts/Reference",slug:"/contracts/Reference/bondingCurve",permalink:"/docs/docs/contracts/Reference/bondingCurve",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/contracts/Reference/bondingCurve.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{label:"Bonding Curve",title:"Bonding Curve",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hotpot Token",permalink:"/docs/docs/contracts/Reference/hotpotToken"},next:{title:"Governor",permalink:"/docs/docs/contracts/Reference/governor"}},u={},p=[{value:"IBondingCurve",id:"ibondingcurve-1",level:2},{value:"BondingCurveType",id:"bondingcurvetype",level:3},{value:"Return Values",id:"return-values",level:4},{value:"calculateMintAmountFromBondingCurve",id:"calculatemintamountfrombondingcurve",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"calculateMintAmountFromBondingCurve",id:"calculatemintamountfrombondingcurve-1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values-2",level:4}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ibondingcurve"},"IBondingCurve"),(0,a.kt)("p",null,"Hotpot \u4ee3\u5e01\u8ba1\u7b97 Bonding Curve \u63a5\u53e3\uff0c\u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003\u4ee5\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hotpotlabs/contracts/master/contracts/bondingCurve/ExpMixedBondingSwap.sol"},"Exponential"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hotpotlabs/contracts/master/contracts/bondingCurve/LinearMixedBondingSwap.sol"},"Linear"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hotpotlabs/contracts/master/contracts/bondingCurve/SqrtMixedBondingSwap.sol"},"Squareroot")))),(0,a.kt)("h2",{id:"ibondingcurve-1"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/hotpotlabs/contracts/master/contracts/interfaces/IBondingCurve.sol"},"IBondingCurve")),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"bondingcurvetype"},"BondingCurveType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function BondingCurveType() external view returns (string memory)\n")),(0,a.kt)("p",null,"\u83b7\u53d6 BodingCurve \u7684\u7c7b\u578b"),(0,a.kt)("h4",{id:"return-values"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Index/Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"BondingCurve \u7684\u7c7b\u578b")))),(0,a.kt)("h3",{id:"calculatemintamountfrombondingcurve"},"calculateMintAmountFromBondingCurve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," function calculateMintAmountFromBondingCurve(\n        uint256 tokens,\n        uint256 totalSupply,\n        bytes memory parameters\n    ) external view returns (uint256 x, uint256 y)\n")),(0,a.kt)("p",null,"\u8ba1\u7b97\u5f53 y \u589e\u957f tokens \u65f6 \uff0cx \u7684\u589e\u91cf"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokens"),(0,a.kt)("td",{parentName:"tr",align:null},"uint256"),(0,a.kt)("td",{parentName:"tr",align:null},"\u539f\u751f\u4ee3\u5e01\u7684\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalSupply"),(0,a.kt)("td",{parentName:"tr",align:null},"uint256"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d Hotpot \u4ee3\u5e01\u7684\u4f9b\u5e94\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"BondingCurve \u51fd\u6570\u7684\u5404\u9879\u53c2\u6570")))),(0,a.kt)("h4",{id:"return-values-1"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Index/Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"x \u7684\u53d8\u5316\u6570\u91cf\uff0c\u5373 Hotpot \u4ee3\u5e01\u7684\u94f8\u9020\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"y \u7684\u53d8\u5316\u6570\u91cf\uff0c\u5373\u94f8\u9020\u65f6\u6240\u9700\u7684\u539f\u751f\u4ee3\u5e01\u6570\u91cf")))),(0,a.kt)("h3",{id:"calculatemintamountfrombondingcurve-1"},"calculateMintAmountFromBondingCurve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," function calculateBurnAmountFromBondingCurve(\n        uint256 tokens,\n        uint256 totalSupply,\n        bytes memory parameters\n    ) external view returns (uint256 x, uint256 y)\n")),(0,a.kt)("p",null,"\u8ba1\u7b97\u5f53 x \u51cf\u5c11 tokens \u65f6\uff0cy \u7684\u5dee\u503c"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokens"),(0,a.kt)("td",{parentName:"tr",align:null},"uint256"),(0,a.kt)("td",{parentName:"tr",align:null},"Hotpot \u4ee3\u5e01\u7684\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalSupply"),(0,a.kt)("td",{parentName:"tr",align:null},"uint256"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d Hotpot \u4ee3\u5e01\u7684\u4f9b\u5e94\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"BondingCurve \u51fd\u6570\u7684\u5404\u9879\u53c2\u6570")))),(0,a.kt)("h4",{id:"return-values-2"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Index/Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"x \u7684\u53d8\u5316\u6570\u91cf\uff0c\u5373 Hotpot \u4ee3\u5e01\u7684\u9500\u6bc1\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"y \u7684\u53d8\u5316\u6570\u91cf\uff0c\u5373\u9500\u6bc1\u8fd4\u56de\u7684\u539f\u751f\u4ee3\u5e01\u6570\u91cf")))))}d.isMDXComponent=!0}}]);