"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[5479],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},d="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||y[c]||a;return n?l.createElement(k,s(s({ref:e},u),{},{components:n})):l.createElement(k,s({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22918:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const a={},s="Query Frontend User Messages Cursor",i={type:"api",id:"query-frontend-user-messages-cursor",unversionedId:"query-frontend-user-messages-cursor",title:"Query Frontend User Messages Cursor",description:"",slug:"/query-frontend-user-messages-cursor",frontMatter:{},api:{tags:["frontend_users"],operationId:"query_frontend_user_messages_cursor_api_v1_frontend_users__auth_method___username__messages_cursor_get",parameters:[{required:!0,schema:{title:"Auth Method",type:"string"},name:"auth_method",in:"path"},{required:!0,schema:{title:"Username",type:"string"},name:"username",in:"path"},{required:!1,schema:{title:"Before",type:"string"},name:"before",in:"query"},{required:!1,schema:{title:"After",type:"string"},name:"after",in:"query"},{required:!1,schema:{title:"Only Roots",type:"boolean",default:!1},name:"only_roots",in:"query"},{required:!1,schema:{title:"Include Deleted",type:"boolean",default:!1},name:"include_deleted",in:"query"},{required:!1,schema:{title:"Max Count",maximum:1e3,exclusiveMinimum:0,type:"integer",default:10},name:"max_count",in:"query"},{required:!1,schema:{title:"Desc",type:"boolean",default:!1},name:"desc",in:"query"},{required:!1,schema:{title:"Lang",type:"string"},name:"lang",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MessagePage",required:["sort_key","items","order"],type:"object",properties:{prev:{title:"Prev",type:"string"},next:{title:"Next",type:"string"},sort_key:{title:"Sort Key",type:"string"},items:{title:"Items",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"},review_result:{title:"Review Result",type:"boolean"},review_count:{title:"Review Count",type:"integer"}},description:"Represents a message in a conversation between the user and the assistant."}},order:{title:"Order",enum:["asc","desc"],type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],description:"Query Frontend User Messages Cursor",method:"get",path:"/api/v1/frontend_users/{auth_method}/{username}/messages/cursor",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Query Frontend User Messages Cursor",description:{type:"text/plain"},url:{path:["api","v1","frontend_users",":auth_method",":username","messages","cursor"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"before",value:"<string>"},{description:{content:"",type:"text/plain"},key:"after",value:"<string>"},{description:{content:"",type:"text/plain"},key:"only_roots",value:"false"},{description:{content:"",type:"text/plain"},key:"include_deleted",value:"false"},{description:{content:"",type:"text/plain"},key:"max_count",value:"10"},{description:{content:"",type:"text/plain"},key:"desc",value:"false"},{description:{content:"",type:"text/plain"},key:"lang",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"auth_method"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"username"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/query-frontend-user-messages-cursor",previous:{title:"Mark Frontend User Messages Deleted",permalink:"/Open-Assistant/api/mark-frontend-user-messages-deleted"},next:{title:"Get Message Stats",permalink:"/Open-Assistant/api/get-message-stats"}},o=[],p={toc:o},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-frontend-user-messages-cursor"},"Query Frontend User Messages Cursor"),(0,r.kt)("p",null,"Query Frontend User Messages Cursor"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"auth_method"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"username"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Username"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"before"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Before"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"after"),(0,r.kt)("span",{style:{opacity:"0.6"}}," After"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"only_roots"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Only Roots"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"include_deleted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Include Deleted"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"max_count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 1000")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"desc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Desc"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lang"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Lang"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"prev"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Prev"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"next"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Next"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"sort_key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Sort Key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"items"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"frontend_message_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lang"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Lang"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"is_assistant"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"emojis"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_emojis"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"parent_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"review_result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Review Result"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"review_count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Review Count"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"order"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Order"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"asc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"desc"),"]"))))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"422")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"msg"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);