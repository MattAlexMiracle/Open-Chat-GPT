"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[7913],{3905:(e,t,l)=>{l.d(t,{Zo:()=>_,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},_=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,_=r(e,["components","mdxType","originalType","parentName"]),u=o(l),k=a,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return l?n.createElement(d,p(p({ref:t},_),{},{components:l})):n.createElement(d,p({ref:t},_))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,p=new Array(i);p[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,p[1]=r;for(var o=2;o<i;o++)p[o]=l[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},53888:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=l(87462),a=(l(67294),l(3905));const i={},p="Get Backend Settings Full",r={type:"api",id:"get-backend-settings-full",unversionedId:"get-backend-settings-full",title:"Get Backend Settings Full",description:"",slug:"/get-backend-settings-full",frontMatter:{},api:{tags:["admin"],operationId:"get_backend_settings_full_api_v1_admin_backend_settings_full_get",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Settings",type:"object",properties:{PROJECT_NAME:{title:"Project Name",type:"string",default:"open-assistant backend",env_names:["project_name"]},API_V1_STR:{title:"Api V1 Str",type:"string",default:"/api/v1",env_names:["api_v1_str"]},OFFICIAL_WEB_API_KEY:{title:"Official Web Api Key",type:"string",default:"1234",env_names:["official_web_api_key"]},AUTH_INFO:{title:"Auth Info",type:"string",format:"binary",default:"NextAuth.js Generated Encryption Key",env_names:["auth_info"]},AUTH_SALT:{title:"Auth Salt",type:"string",format:"binary",default:"",env_names:["auth_salt"]},AUTH_LENGTH:{title:"Auth Length",type:"integer",default:32,env_names:["auth_length"]},AUTH_SECRET:{title:"Auth Secret",type:"string",format:"binary",default:"O/M2uIbGj+lDD2oyNa8ax4jEOJqCPJzO53UbWShmq98=",env_names:["auth_secret"]},AUTH_COOKIE_NAME:{title:"Auth Cookie Name",type:"string",default:"next-auth.session-token",env_names:["auth_cookie_name"]},POSTGRES_HOST:{title:"Postgres Host",type:"string",default:"localhost",env_names:["postgres_host"]},POSTGRES_PORT:{title:"Postgres Port",type:"string",default:"5432",env_names:["postgres_port"]},POSTGRES_USER:{title:"Postgres User",type:"string",default:"postgres",env_names:["postgres_user"]},POSTGRES_PASSWORD:{title:"Postgres Password",type:"string",default:"postgres",env_names:["postgres_password"]},POSTGRES_DB:{title:"Postgres Db",type:"string",default:"postgres",env_names:["postgres_db"]},DATABASE_URI:{title:"Database Uri",maxLength:65536,minLength:1,type:"string",format:"uri",env_names:["database_uri"]},DATABASE_MAX_TX_RETRY_COUNT:{title:"Database Max Tx Retry Count",type:"integer",default:3,env_names:["database_max_tx_retry_count"]},RATE_LIMIT:{title:"Rate Limit",type:"boolean",default:!0,env_names:["rate_limit"]},MESSAGE_SIZE_LIMIT:{title:"Message Size Limit",type:"integer",default:2e3,env_names:["message_size_limit"]},REDIS_HOST:{title:"Redis Host",type:"string",default:"localhost",env_names:["redis_host"]},REDIS_PORT:{title:"Redis Port",type:"string",default:"6379",env_names:["redis_port"]},DEBUG_USE_SEED_DATA:{title:"Debug Use Seed Data",type:"boolean",default:!1,env_names:["debug_use_seed_data"]},DEBUG_USE_SEED_DATA_PATH:{title:"Debug Use Seed Data Path",type:"string",format:"file-path",default:"/workspaces/Open-Assistant/backend/test_data/realistic/realistic_seed_data.json",env_names:["debug_use_seed_data_path"]},DEBUG_ALLOW_SELF_LABELING:{title:"Debug Allow Self Labeling",type:"boolean",default:!1,env_names:["debug_allow_self_labeling"]},DEBUG_ALLOW_DUPLICATE_TASKS:{title:"Debug Allow Duplicate Tasks",type:"boolean",default:!1,env_names:["debug_allow_duplicate_tasks"]},DEBUG_SKIP_EMBEDDING_COMPUTATION:{title:"Debug Skip Embedding Computation",type:"boolean",default:!1,env_names:["debug_skip_embedding_computation"]},DEBUG_SKIP_TOXICITY_CALCULATION:{title:"Debug Skip Toxicity Calculation",type:"boolean",default:!1,env_names:["debug_skip_toxicity_calculation"]},DEBUG_DATABASE_ECHO:{title:"Debug Database Echo",type:"boolean",default:!1,env_names:["debug_database_echo"]},DUPLICATE_MESSAGE_FILTER_WINDOW_MINUTES:{title:"Duplicate Message Filter Window Minutes",type:"integer",default:120,env_names:["duplicate_message_filter_window_minutes"]},HUGGING_FACE_API_KEY:{title:"Hugging Face Api Key",type:"string",default:"",env_names:["hugging_face_api_key"]},ROOT_TOKENS:{title:"Root Tokens",type:"array",items:{type:"string"},default:["1234"],env_names:["root_tokens"]},BACKEND_CORS_ORIGINS:{title:"Backend Cors Origins",type:"array",items:{maxLength:65536,minLength:1,type:"string",format:"uri"},default:[],env_names:["backend_cors_origins"]},UPDATE_ALEMBIC:{title:"Update Alembic",type:"boolean",default:!0,env_names:["update_alembic"]},tree_manager:{title:"Tree Manager",default:{max_active_trees:10,max_tree_depth:6,max_children_count:3,num_prompter_replies:1,goal_tree_size:15,num_reviews_initial_prompt:3,num_reviews_reply:3,p_full_labeling_review_prompt:1,p_full_labeling_review_reply_assistant:.1,p_full_labeling_review_reply_prompter:.1,acceptance_threshold_initial_prompt:.6,acceptance_threshold_reply:.6,num_required_rankings:3,p_activate_backlog_tree:.1,min_active_rankings_per_lang:0,labels_initial_prompt:["spam","lang_mismatch","quality","creativity","humor","toxicity","violence","not_appropriate","pii","hate_speech","sexual_content"],labels_assistant_reply:["spam","lang_mismatch","fails_task","quality","helpfulness","creativity","humor","toxicity","violence","not_appropriate","pii","hate_speech","sexual_content"],labels_prompter_reply:["spam","lang_mismatch","quality","humor","creativity","toxicity","violence","not_appropriate","pii","hate_speech","sexual_content"],mandatory_labels_initial_prompt:["spam"],mandatory_labels_assistant_reply:["spam"],mandatory_labels_prompter_reply:["spam"],rank_prompter_replies:!1,lonely_children_count:3,p_lonely_child_extension:.8,recent_tasks_span_sec:180},env_names:["tree_manager"],type:"object",properties:{max_active_trees:{title:"Max Active Trees",type:"integer",default:10},max_tree_depth:{title:"Max Tree Depth",type:"integer",default:6},max_children_count:{title:"Max Children Count",type:"integer",default:3},num_prompter_replies:{title:"Num Prompter Replies",type:"integer",default:1},goal_tree_size:{title:"Goal Tree Size",type:"integer",default:15},num_reviews_initial_prompt:{title:"Num Reviews Initial Prompt",type:"integer",default:3},num_reviews_reply:{title:"Num Reviews Reply",type:"integer",default:3},p_full_labeling_review_prompt:{title:"P Full Labeling Review Prompt",type:"number",default:1},p_full_labeling_review_reply_assistant:{title:"P Full Labeling Review Reply Assistant",type:"number",default:.1},p_full_labeling_review_reply_prompter:{title:"P Full Labeling Review Reply Prompter",type:"number",default:.1},acceptance_threshold_initial_prompt:{title:"Acceptance Threshold Initial Prompt",type:"number",default:.6},acceptance_threshold_reply:{title:"Acceptance Threshold Reply",type:"number",default:.6},num_required_rankings:{title:"Num Required Rankings",type:"integer",default:3},p_activate_backlog_tree:{title:"P Activate Backlog Tree",type:"number",default:.1},min_active_rankings_per_lang:{title:"Min Active Rankings Per Lang",type:"integer",default:0},labels_initial_prompt:{type:"array",items:{title:"TextLabel",enum:["spam","fails_task","lang_mismatch","pii","not_appropriate","hate_speech","sexual_content","moral_judgement","political_content","quality","toxicity","humor","helpfulness","creativity","violence"],type:"string",description:"A label for a piece of text."},default:["spam","lang_mismatch","quality","creativity","humor","toxicity","violence","not_appropriate","pii","hate_speech","sexual_content"]},labels_assistant_reply:{type:"array",items:{title:"TextLabel",enum:["spam","fails_task","lang_mismatch","pii","not_appropriate","hate_speech","sexual_content","moral_judgement","political_content","quality","toxicity","humor","helpfulness","creativity","violence"],type:"string",description:"A label for a piece of text."},default:["spam","lang_mismatch","fails_task","quality","helpfulness","creativity","humor","toxicity","violence","not_appropriate","pii","hate_speech","sexual_content"]},labels_prompter_reply:{type:"array",items:{title:"TextLabel",enum:["spam","fails_task","lang_mismatch","pii","not_appropriate","hate_speech","sexual_content","moral_judgement","political_content","quality","toxicity","humor","helpfulness","creativity","violence"],type:"string",description:"A label for a piece of text."},default:["spam","lang_mismatch","quality","humor","creativity","toxicity","violence","not_appropriate","pii","hate_speech","sexual_content"]},mandatory_labels_initial_prompt:{type:"array",items:{title:"TextLabel",enum:["spam","fails_task","lang_mismatch","pii","not_appropriate","hate_speech","sexual_content","moral_judgement","political_content","quality","toxicity","humor","helpfulness","creativity","violence"],type:"string",description:"A label for a piece of text."},default:["spam"]},mandatory_labels_assistant_reply:{type:"array",items:{title:"TextLabel",enum:["spam","fails_task","lang_mismatch","pii","not_appropriate","hate_speech","sexual_content","moral_judgement","political_content","quality","toxicity","humor","helpfulness","creativity","violence"],type:"string",description:"A label for a piece of text."},default:["spam"]},mandatory_labels_prompter_reply:{type:"array",items:{title:"TextLabel",enum:["spam","fails_task","lang_mismatch","pii","not_appropriate","hate_speech","sexual_content","moral_judgement","political_content","quality","toxicity","humor","helpfulness","creativity","violence"],type:"string",description:"A label for a piece of text."},default:["spam"]},rank_prompter_replies:{title:"Rank Prompter Replies",type:"boolean",default:!1},lonely_children_count:{title:"Lonely Children Count",type:"integer",default:3},p_lonely_child_extension:{title:"P Lonely Child Extension",type:"number",default:.8},recent_tasks_span_sec:{title:"Recent Tasks Span Sec",type:"integer",default:180}},description:"TreeManager configuration settings"},USER_STATS_INTERVAL_DAY:{title:"User Stats Interval Day",type:"integer",default:5,env_names:["user_stats_interval_day"]},USER_STATS_INTERVAL_WEEK:{title:"User Stats Interval Week",type:"integer",default:15,env_names:["user_stats_interval_week"]},USER_STATS_INTERVAL_MONTH:{title:"User Stats Interval Month",type:"integer",default:60,env_names:["user_stats_interval_month"]},USER_STATS_INTERVAL_TOTAL:{title:"User Stats Interval Total",type:"integer",default:240,env_names:["user_stats_interval_total"]},USER_STREAK_UPDATE_INTERVAL:{title:"User Streak Update Interval",type:"integer",default:4,env_names:["user_streak_update_interval"]},RATE_LIMIT_TASK_USER_TIMES:{title:"Rate Limit Task User Times",type:"integer",default:60,env_names:["rate_limit_task_user_times"]},RATE_LIMIT_TASK_USER_MINUTES:{title:"Rate Limit Task User Minutes",type:"integer",default:5,env_names:["rate_limit_task_user_minutes"]},RATE_LIMIT_TASK_API_TIMES:{title:"Rate Limit Task Api Times",type:"integer",default:1e4,env_names:["rate_limit_task_api_times"]},RATE_LIMIT_TASK_API_MINUTES:{title:"Rate Limit Task Api Minutes",type:"integer",default:1,env_names:["rate_limit_task_api_minutes"]}},additionalProperties:!1,description:"Base class for settings, allowing values to be overridden by environment variables.\n\nThis is useful in production for secrets you do not wish to save in code, it plays nicely with docker(-compose),\nHeroku and any 12 factor app design."}}}}},security:[{"api-key":[]},{"api-key":[]}],description:"Get Backend Settings Full",method:"get",path:"/api/v1/admin/backend_settings/full",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Backend Settings Full",description:{type:"text/plain"},url:{path:["api","v1","admin","backend_settings","full"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-backend-settings-full",previous:{title:"Create Api Client",permalink:"/Open-Assistant/api/create-api-client"},next:{title:"Get Backend Settings Public",permalink:"/Open-Assistant/api/get-backend-settings-public"}},s=[],o={toc:s},_="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(_,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-backend-settings-full"},"Get Backend Settings Full"),(0,a.kt)("p",null,"Get Backend Settings Full"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"PROJECT_NAME"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Project Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"API_V1_STR"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Api V1 Str"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"OFFICIAL_WEB_API_KEY"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Official Web Api Key"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"AUTH_INFO"),(0,a.kt)("span",{style:{opacity:"0.6"}}," binary"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"AUTH_SALT"),(0,a.kt)("span",{style:{opacity:"0.6"}}," binary"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"AUTH_LENGTH"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Length"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"AUTH_SECRET"),(0,a.kt)("span",{style:{opacity:"0.6"}}," binary"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"AUTH_COOKIE_NAME"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Cookie Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"POSTGRES_HOST"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Postgres Host"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"POSTGRES_PORT"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Postgres Port"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"POSTGRES_USER"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Postgres User"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"POSTGRES_PASSWORD"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Postgres Password"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"POSTGRES_DB"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Postgres Db"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DATABASE_URI"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," 1 \u2264 length \u2264 65536")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DATABASE_MAX_TX_RETRY_COUNT"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Database Max Tx Retry Count"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"RATE_LIMIT"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rate Limit"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"MESSAGE_SIZE_LIMIT"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message Size Limit"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"REDIS_HOST"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Redis Host"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"REDIS_PORT"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Redis Port"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_USE_SEED_DATA"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Debug Use Seed Data"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_USE_SEED_DATA_PATH"),(0,a.kt)("span",{style:{opacity:"0.6"}}," file-path"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_ALLOW_SELF_LABELING"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Debug Allow Self Labeling"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_ALLOW_DUPLICATE_TASKS"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Debug Allow Duplicate Tasks"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_SKIP_EMBEDDING_COMPUTATION"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Debug Skip Embedding Computation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_SKIP_TOXICITY_CALCULATION"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Debug Skip Toxicity Calculation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DEBUG_DATABASE_ECHO"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Debug Database Echo"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"DUPLICATE_MESSAGE_FILTER_WINDOW_MINUTES"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Duplicate Message Filter Window Minutes"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"HUGGING_FACE_API_KEY"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Hugging Face Api Key"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"ROOT_TOKENS"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"BACKEND_CORS_ORIGINS"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," 1 \u2264 length \u2264 65536")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"UPDATE_ALEMBIC"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Update Alembic"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"tree_manager"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"TreeManager configuration settings")),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"max_active_trees"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Max Active Trees"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"max_tree_depth"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Max Tree Depth"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"max_children_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Max Children Count"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"num_prompter_replies"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Num Prompter Replies"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"goal_tree_size"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Goal Tree Size"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"num_reviews_initial_prompt"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Num Reviews Initial Prompt"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"num_reviews_reply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Num Reviews Reply"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"p_full_labeling_review_prompt"),(0,a.kt)("span",{style:{opacity:"0.6"}}," P Full Labeling Review Prompt"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"p_full_labeling_review_reply_assistant"),(0,a.kt)("span",{style:{opacity:"0.6"}}," P Full Labeling Review Reply Assistant"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"p_full_labeling_review_reply_prompter"),(0,a.kt)("span",{style:{opacity:"0.6"}}," P Full Labeling Review Reply Prompter"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"acceptance_threshold_initial_prompt"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Acceptance Threshold Initial Prompt"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"acceptance_threshold_reply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Acceptance Threshold Reply"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"num_required_rankings"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Num Required Rankings"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"p_activate_backlog_tree"),(0,a.kt)("span",{style:{opacity:"0.6"}}," P Activate Backlog Tree"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"min_active_rankings_per_lang"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Min Active Rankings Per Lang"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"labels_initial_prompt"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TextLabel[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"spam"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fails_task"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lang_mismatch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_appropriate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hate_speech"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sexual_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moral_judgement"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"political_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quality"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toxicity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"humor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpfulness"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creativity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"violence"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"labels_assistant_reply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TextLabel[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"spam"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fails_task"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lang_mismatch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_appropriate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hate_speech"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sexual_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moral_judgement"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"political_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quality"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toxicity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"humor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpfulness"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creativity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"violence"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"labels_prompter_reply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TextLabel[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"spam"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fails_task"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lang_mismatch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_appropriate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hate_speech"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sexual_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moral_judgement"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"political_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quality"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toxicity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"humor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpfulness"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creativity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"violence"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"mandatory_labels_initial_prompt"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TextLabel[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"spam"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fails_task"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lang_mismatch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_appropriate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hate_speech"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sexual_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moral_judgement"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"political_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quality"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toxicity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"humor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpfulness"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creativity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"violence"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"mandatory_labels_assistant_reply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TextLabel[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"spam"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fails_task"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lang_mismatch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_appropriate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hate_speech"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sexual_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moral_judgement"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"political_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quality"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toxicity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"humor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpfulness"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creativity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"violence"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"mandatory_labels_prompter_reply"),(0,a.kt)("span",{style:{opacity:"0.6"}}," TextLabel[]"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"spam"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fails_task"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lang_mismatch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_appropriate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hate_speech"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sexual_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moral_judgement"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"political_content"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quality"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toxicity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"humor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"helpfulness"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creativity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"violence"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"rank_prompter_replies"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rank Prompter Replies"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"lonely_children_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Lonely Children Count"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"p_lonely_child_extension"),(0,a.kt)("span",{style:{opacity:"0.6"}}," P Lonely Child Extension"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"recent_tasks_span_sec"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Recent Tasks Span Sec"))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"USER_STATS_INTERVAL_DAY"),(0,a.kt)("span",{style:{opacity:"0.6"}}," User Stats Interval Day"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"USER_STATS_INTERVAL_WEEK"),(0,a.kt)("span",{style:{opacity:"0.6"}}," User Stats Interval Week"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"USER_STATS_INTERVAL_MONTH"),(0,a.kt)("span",{style:{opacity:"0.6"}}," User Stats Interval Month"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"USER_STATS_INTERVAL_TOTAL"),(0,a.kt)("span",{style:{opacity:"0.6"}}," User Stats Interval Total"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"USER_STREAK_UPDATE_INTERVAL"),(0,a.kt)("span",{style:{opacity:"0.6"}}," User Streak Update Interval"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"RATE_LIMIT_TASK_USER_TIMES"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rate Limit Task User Times"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"RATE_LIMIT_TASK_USER_MINUTES"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rate Limit Task User Minutes"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"RATE_LIMIT_TASK_API_TIMES"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rate Limit Task Api Times"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"RATE_LIMIT_TASK_API_MINUTES"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Rate Limit Task Api Minutes")))))))))))}u.isMDXComponent=!0}}]);