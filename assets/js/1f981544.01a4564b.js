"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[9890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,b=u["".concat(i,".").concat(y)]||u[y]||c[y]||o;return r?a.createElement(b,l(l({ref:t},d),{},{components:r})):a.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52394:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},l="Update Leaderboards All",p={type:"api",id:"update-leaderboards-all",unversionedId:"update-leaderboards-all",title:"Update Leaderboards All",description:"",slug:"/update-leaderboards-all",frontMatter:{},api:{tags:["leaderboards"],operationId:"update_leaderboards_all_api_v1_leaderboards_update_post",responses:{204:{description:"Successful Response"}},security:[{"api-key":[]},{"api-key":[]}],description:"Update Leaderboards All",method:"post",path:"/api/v1/leaderboards/update",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Update Leaderboards All",description:{type:"text/plain"},url:{path:["api","v1","leaderboards","update"],host:["{{baseUrl}}"],query:[],variable:[]},method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/update-leaderboards-all",previous:{title:"Update Leaderboard Time Frame",permalink:"/Open-Assistant/api/update-leaderboard-time-frame"},next:{title:"Get Text Toxicity",permalink:"/Open-Assistant/api/get-text-toxicity"}},i=[],s={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-leaderboards-all"},"Update Leaderboards All"),(0,n.kt)("p",null,"Update Leaderboards All"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"204")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response"))),(0,n.kt)("div",null))))))}u.isMDXComponent=!0}}]);