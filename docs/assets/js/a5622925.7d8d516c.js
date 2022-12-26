"use strict";(self.webpackChunkhotpot_docs=self.webpackChunkhotpot_docs||[]).push([[1],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),u=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(a),k=n,c=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return a?r.createElement(c,o(o({ref:e},d),{},{components:a})):r.createElement(c,o({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9604:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={label:"Governor",title:"Governor",sidebar_position:4},o="Governor",p={unversionedId:"contracts/Reference/governor",id:"contracts/Reference/governor",title:"Governor",description:"Governor",source:"@site/docs/contracts/Reference/governor.md",sourceDirName:"contracts/Reference",slug:"/contracts/Reference/governor",permalink:"/docs/docs/contracts/Reference/governor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/contracts/Reference/governor.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{label:"Governor",title:"Governor",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bonding Curve",permalink:"/docs/docs/contracts/Reference/bondingCurve"},next:{title:"Governor Strategy",permalink:"/docs/docs/contracts/Reference/governorStrategy"}},i={},u=[{value:"Governor",id:"governor-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"propose",id:"propose",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values",level:4},{value:"queue",id:"queue",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"execute",id:"execute",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"cancel",id:"cancel",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"castVote",id:"castvote",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"state",id:"state",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"Proposal",id:"proposal",level:3},{value:"Strategy",id:"strategy",level:3}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"governor"},"Governor"),(0,n.kt)("h2",{id:"governor-1"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/hotpotlabs/contracts/master/contracts/governor/Governor.sol"},"Governor")),(0,n.kt)("h1",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"constructor(\n        address strategyReference_,\n        address strategy_,\n        uint256 votingPeriod_,\n        uint256 votingDelay_,\n        uint256 proposalThreshold_,\n        uint256 quorumVotes,\n        uint256 timelockDelay\n    )\n")),(0,n.kt)("p",null,"\u6784\u9020\u51fd\u6570"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategyReference","_"),(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6cbb\u7406\u4ee3\u5e01\u5408\u7ea6\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategy","_"),(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6cbb\u7406\u7b56\u7565\u5408\u7ea6\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votingPeriod","_"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u6301\u7eed\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"votingDelay","_"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u5f00\u59cb\u6295\u7968\u5ef6\u8fdf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalThreshold","_"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u63d0\u6848\u9700\u8981\u7684\u9608\u503c\uff0c\u5982\u679c\u662f ratio \u7b56\u7565\uff0c\u9700\u8981\u5c0f\u4e8e 10000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quorumVotes"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u901a\u8fc7\u9700\u8981\u7684\u7968\u6570\uff0c\u5982\u679c\u662f ratio \u7b56\u7565\uff0c\u9700\u8981\u5c0f\u4e8e 10000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timelockDelay"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"timelock \u7684\u9501\u5b9a\u5468\u671f")))),(0,n.kt)("h3",{id:"propose"},"propose"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function propose(\n        address[] memory targets,\n        uint256[] memory values,\n        string[] memory signatures,\n        bytes[] memory calldatas,\n        string memory description\n    ) public returns (uint256)\n")),(0,n.kt)("p",null,"\u53d1\u8d77\u63d0\u6848"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"targets"),(0,n.kt)("td",{parentName:"tr",align:null},"address[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u8981\u8c03\u7528\u7684\u5408\u7ea6\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"values"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u8981\u8c03\u7528\u5408\u7ea6\u65f6\u8981\u9644\u5e26\u7684 msg.value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"signatures"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u8981\u8c03\u7528\u5408\u7ea6\u65f6\u7528\u7684 methodId\uff0c\u53ef\u4ee5\u4e3a\u7a7a\uff0c\u4e3a\u7a7a\u65f6\u8bf7\u5c06 methodId \u6253\u5305\u8fdb calldatas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"calldatas"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u8981\u8c03\u7528\u5408\u7ea6\u65f6\u7528\u7684 calldata\uff0csignatures \u4e0d\u4e3a\u7a7a\u65f6\u5c06\u62fc\u63a5\u6210 signatures+calldatas \u7684\u683c\u5f0f\u8c03\u7528\u5408\u7ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848\u63cf\u8ff0")))),(0,n.kt)("h4",{id:"return-values"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Index/Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848 ID")))),(0,n.kt)("h3",{id:"queue"},"queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function queue(uint256 proposalId) external\n")),(0,n.kt)("p",null,"\u5c06\u901a\u8fc7\u7684\u63d0\u6848\u52a0\u5165 Timelock \u961f\u5217\u4e2d\u7b49\u5f85\u6267\u884c"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalId"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848 ID")))),(0,n.kt)("h3",{id:"execute"},"execute"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function execute(uint256 proposalId) external payable\n")),(0,n.kt)("p",null,"\u6267\u884c\u5728 timelock \u4e2d\u53ef\u6267\u884c\u7684\u63d0\u6848"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalId"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848 ID")))),(0,n.kt)("h3",{id:"cancel"},"cancel"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function cancel(uint256 proposalId) external\n")),(0,n.kt)("p",null,"\u53d6\u6d88\u63d0\u6848\uff0c\u53ef\u7531\u53d1\u8d77\u4eba\u4e3b\u52a8\u53d6\u6d88\uff0c\u6216\u53d1\u8d77\u63d0\u6848\u4eba\u5728 Timelock \u7684 delay \u5468\u671f\u5185\u6743\u91cd\u5c0f\u4e8e\u53d1\u8d77\u63d0\u6848\u9608\u503c\u65f6\uff0c\u53ef\u7531\u7b2c\u4e09\u65b9\u53d6\u6d88\u63d0\u6848\uff08\u63d0\u6848\u4eba\u5c5e\u4e8e\u767d\u540d\u5355\u65f6\uff0c\u9700\u8981\u7531 whitelistGuardian \u8fdb\u884c\u53d6\u6d88\uff09"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalId"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848 ID")))),(0,n.kt)("h3",{id:"castvote"},"castVote"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function castVote(uint256 proposalId, uint8 support) external\n")),(0,n.kt)("p",null,"\u5bf9\u6307\u5b9a\u63d0\u6848\u8fdb\u884c\u6295\u7968"),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalId"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"support"),(0,n.kt)("td",{parentName:"tr",align:null},"uint8"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6295\u7968\u65b9\u5411\uff1a 0=\u53cd\u5bf9\uff0c1=\u540c\u610f\uff0c2=\u5f03\u6743")))),(0,n.kt)("h3",{id:"state"},"state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"function state(uint256 proposalId) public view returns (ProposalState)\n")),(0,n.kt)("p",null,"\u83b7\u53d6\u63d0\u6848\u72b6\u6001"),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proposalId"),(0,n.kt)("td",{parentName:"tr",align:null},"uint256"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u6848 ID")))),(0,n.kt)("h4",{id:"return-values-1"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Index/Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"ProposalState"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u63d0\u6848\u72b6\u6001")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    enum ProposalState {\n        Pending,//\u5f85\u6295\u7968\n        Active,//\u6295\u7968\u4e2d\n        Canceled,//\u5df2\u53d6\u6d88\n        Defeated,//\u5931\u8d25\n        Succeeded,//\u6210\u529f\n        Queued,//\u5728timelock\u961f\u5217\u4e2d\u5f85\u6267\u884c\n        Expired,//\u5df2\u8d85\u65f6\n        Executed//\u5df2\u6267\u884c\n    }\n")),(0,n.kt)("h1",{id:"struct"},"Struct"),(0,n.kt)("h3",{id:"proposal"},"Proposal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    struct Proposal {\n        uint256 id;//\u63d0\u6848ID\n        address proposer;//\u63d0\u6848\u4eba\n        uint256 eta;//\u63d0\u6848\u901a\u8fc7\u540e\u9884\u8ba1\u53ef\u6267\u884c\u65f6\u95f4\n        uint256 startBlock;//\u63d0\u6848\u5f00\u59cb\u533a\u5757\n        uint256 endBlock;//\u63d0\u6848\u7ed3\u675f\u533a\u5757\n        uint256 forVotes;//\u63d0\u6848\u540c\u610f\u7968\u6570\n        uint256 againstVotes;//\u63d0\u6848\u53cd\u5bf9\u7968\u6570\n        uint256 abstainVotes;//\u63d0\u6848\u5f03\u6743\u7968\u6570\n        bool canceled;//\u63d0\u6848\u662f\u5426\u88ab\u53d6\u6d88\n        bool executed;//\u63d0\u6848\u662f\u5426\u88ab\u6267\u884c\n        string description;//\u63d0\u6848\u63cf\u8ff0,\u4e00\u822c\u4e3aipfs\u7684cid\n        Strategy strategy;//\u63d0\u6848\u7b56\u7565\n    }\n")),(0,n.kt)("h3",{id:"strategy"},"Strategy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    struct Strategy {\n        uint256 votingPeriod;//\u63d0\u6848\u6295\u7968\u6301\u7eed\u5468\u671f\n        uint256 votingDelay;//\u63d0\u6848pending\u5468\u671f\n        uint256 proposalThreshold;//\u53d1\u8d77\u63d0\u6848\u9700\u8981\u7684\u9608\u503c\uff0c\u5982\u679c\u4e3aratio\u7b56\u7565\uff0c\u9700\u8981\u5c0f\u4e8e10000\n        uint256 quorumVotes;//\u63d0\u6848\u901a\u8fc7\u9700\u8981\u7684\u9608\u503c,\u5982\u679c\u4e3aratio\u7b56\u7565,\u9700\u8981\u5c0f\u4e8e10000\n        address addr;//\u7b56\u7565\u5408\u7ea6\u7684\u5730\u5740\n        address referenceAddr;//\u6cbb\u7406\u4ee3\u5e01\n    }\n")))}m.isMDXComponent=!0}}]);