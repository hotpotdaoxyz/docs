"use strict";(self.webpackChunkhotpot_docs=self.webpackChunkhotpot_docs||[]).push([[173],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},k=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=d(a),u=n,N=g["".concat(i,".").concat(u)]||g[u]||m[u]||l;return a?r.createElement(N,o(o({ref:e},k),{},{components:a})):r.createElement(N,o({ref:e},k))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=g;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7414:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:2,title:"Governance"},o=void 0,p={unversionedId:"graph/governance",id:"graph/governance",title:"Governance",description:"\u6cbb\u7406\u76f8\u5173\u7684 graph \u5b57\u6bb5\u89e3\u91ca",source:"@site/docs/graph/governance.md",sourceDirName:"graph",slug:"/graph/governance",permalink:"/docs/docs/graph/governance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graph/governance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Governance"},sidebar:"tutorialSidebar",previous:{title:"Token",permalink:"/docs/docs/graph/token"}},i={},d=[{value:"Governor_Project",id:"governor_project",level:3},{value:"Governor_User",id:"governor_user",level:3},{value:"Governor_UserProject",id:"governor_userproject",level:3},{value:"Governor_Proposal",id:"governor_proposal",level:3},{value:"Governor_VotingPower",id:"governor_votingpower",level:3},{value:"Governor_Strategy",id:"governor_strategy",level:3},{value:"Governor_Vote",id:"governor_vote",level:3},{value:"Governor_Timelock",id:"governor_timelock",level:3},{value:"Governor_Transaction",id:"governor_transaction",level:3}],k={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6cbb\u7406\u76f8\u5173\u7684 graph \u5b57\u6bb5\u89e3\u91ca"),(0,n.kt)("h3",{id:"governor_project"},"Governor_Project"),(0,n.kt)("p",null,"\u6cbb\u7406\u6570\u636e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e3b\u952e\uff0c\u4e3a\u5bf9\u5e94\u6cbb\u7406\u5408\u7ea6\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currentStrategy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_strategy"},"Governor_Strategy")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d Governor \u4f7f\u7528\u7684\u6295\u7968\u7b56\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timelock"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_timelock"},"Governor_Timelock")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"token"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"token/#tokenentity"},"TokenEntity")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposals"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_proposal"},"Governor_Proposal"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Governor \u53d1\u8d77\u8fc7\u7684\u63d0\u6848")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"users"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_userproject"},"Governor_UserProject"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Governor \u53c2\u4e0e\u8fc7\u6295\u7968\u7684\u7528\u6237")))),(0,n.kt)("h3",{id:"governor_user"},"Governor_User"),(0,n.kt)("p",null,"\u7528\u6237\u4e0e\u9879\u76ee\u7ed1\u5b9a\u5173\u7cfb"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"voteHistory"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_vote"},"Governor_Vote")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u6295\u7968\u5386\u53f2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalHistory"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_proposal"},"Governor_Proposal"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u63d0\u6848\u5386\u53f2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"projects"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_userproject"},"Governor_UserProject"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u53c2\u4e0e\u8fc7\u7684\u9879\u76ee")))),(0,n.kt)("h3",{id:"governor_userproject"},"Governor_UserProject"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},'userId + "',"|",'" + projectId')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gov"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_project"},"Governor_Project")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u9879\u76ee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_user"},"Governor_User")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7528\u6237")))),(0,n.kt)("h3",{id:"governor_proposal"},"Governor_Proposal"),(0,n.kt)("p",null,"\u63d0\u6848"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},'proposalId+"',"|",'"+\u6cbb\u7406\u5408\u7ea6\u5730\u5740')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gov"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_project"},"Governor_Project")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_user"},"Governor_User")),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u4eba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"eta"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"timelock \u7684 ETA\uff0c\u4e3a 0 \u65f6\u4ee3\u8868\u63d0\u6848\u5df2\u901a\u8fc7\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709 queue \u5230 timelock \u91cc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startBlock"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u5f00\u59cb\u533a\u5757")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"endBlock"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u7ed3\u675f\u533a\u5757")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"agreeVotes"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u540c\u610f\u7968\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"againstVotes"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53cd\u5bf9\u7968\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"abstainVotes"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f03\u6743\u7968\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u72b6\u6001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u63cf\u8ff0\uff0c\u5982\u679c\u6709\u591a\u4e2a\u5b57\u6bb5\uff0c\u5efa\u8bae\u6253\u5305\u6210 ipfs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votingDelay"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u5f00\u59cb\u5ef6\u8fdf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votingPeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u5468\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalThreshold"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u63d0\u6848\u9608\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quorumVotes"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6cd5\u5b9a\u4eba\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7968\u7b56\u7565\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyReference"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7968\u7b56\u7565\u5f15\u7528\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7968\u7b56\u7565\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"targets"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"values"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528 value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"signatures"),(0,n.kt)("td",{parentName:"tr",align:null},"String[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u6267\u884c\u51fd\u6570\u7b7e\u540d\uff08encode \u524d\uff09\uff0c\u5982 balanceOf(address)\uff0c\u82e5\u51fd\u6570\u7b7e\u540d\u5df2\u7ecf encode \u5728 calldata \u91cc\u9762\uff0c\u53ef\u4ee5\u4e0d\u4f20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"calldatas"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u53c2\u6570\uff08encode \u540e\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_vote"},"Governor_Vote"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u8bb0\u5f55")))),(0,n.kt)("h3",{id:"governor_votingpower"},"Governor_VotingPower"),(0,n.kt)("p",null,"\u63d0\u6848\u8ba1\u7968\u6743\u91cd\u7edf\u8ba1"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},'referenceAddr+ "',"|",'"+userId')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reference"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u5f15\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7528\u6237")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delegateTo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_votingpower"},"Governor_VotingPower")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7528\u6237\u5728\u5bf9\u5e94\u9879\u76ee\u5df2\u5c06\u6295\u7968\u6743\u91cd\u59d4\u6258\u7ed9\u8c01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delegated"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_votingpower"},"Governor_VotingPower")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u7528\u6237\u88ab\u8c01\u59d4\u6258\u8fc7\uff08\u6682\u672a\u5b9e\u73b0\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votePower"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u6743\u91cd")))),(0,n.kt)("h3",{id:"governor_strategy"},"Governor_Strategy"),(0,n.kt)("p",null,"\u63d0\u6848\u8ba1\u7968\u7b56\u7565"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"projectId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votingDelay"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u5f00\u59cb\u5ef6\u8fdf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votingPeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u5468\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalThreshold"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u63d0\u6848\u9608\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quorumVotes"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6cd5\u5b9a\u4eba\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7968\u7b56\u7565\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7968\u7b56\u7565\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyReference"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7968\u7b56\u7565\u5f15\u7528\u5730\u5740")))),(0,n.kt)("h3",{id:"governor_vote"},"Governor_Vote"),(0,n.kt)("p",null,"\u63d0\u6848\u6295\u7968\u8bb0\u5f55"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},'proposalId + "',"|",'"+\u6cbb\u7406\u5408\u7ea6\u5730\u5740+"',"|",'" + voter \u94b1\u5305\u5730\u5740')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposal"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_proposal"},"Governor_Proposal")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u5bf9\u5e94\u7684\u63d0\u6848")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"voter"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_user"},"Governor_User")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u4eba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"power"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6743\u91cd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"support"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u7ed3\u679c\uff1aagainst\uff0cagree \u6216 abstain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reason"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u539f\u56e0")))),(0,n.kt)("h3",{id:"governor_timelock"},"Governor_Timelock"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 project \u4e2d\u7684 timelock \u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gov"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_project"},"Governor_Project")),(0,n.kt)("td",{parentName:"tr",align:null},"timelock \u5bf9\u5e94\u7684\u9879\u76ee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delay"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transactions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_transaction"},"Governor_Transaction"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"timelock \u4e2d\u6240\u6709\u7684\u4ea4\u6613")))),(0,n.kt)("h3",{id:"governor_transaction"},"Governor_Transaction"),(0,n.kt)("p",null,"Timelock \u4e2d\u7684\u4ea4\u6613"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"timelock \u4e2d\u7684\u4ea4\u6613 hash\uff0ckeccak256(abi.encode(target, value, signature, data, eta));")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timelock"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#governor_timelock"},"Governor_Timelock")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5bf9\u5e94\u7684 timelock")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528 value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"signature"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u51fd\u6570\u7b7e\u540d\uff08encode \u524d\uff09\uff0c\u5982 balanceOf(address)\uff0c\u82e5\u51fd\u6570\u7b7e\u540d\u5df2\u7ecf encode \u5728 calldata \u91cc\u9762\uff0c\u53ef\u4ee5\u4e0d\u4f20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"calldata"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u53c2\u6570\uff08encode \u540e\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"eta"),(0,n.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9884\u8ba1\u53ef\u6267\u884c\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u72b6\u6001\uff1aCanceled\uff0cExecuted \u6216 Queued")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transactionHash"),(0,n.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u6267\u884c\u54c8\u5e0c")))))}m.isMDXComponent=!0}}]);