"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4434],{1912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=a(1527),s=a(2175);function r(e){const t={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,n.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," list"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.del,{children:"scan"})]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.del,{children:"presign"})]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," blocking"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"datadir"}),": Set the path to the cacache data directory"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can refer to [",(0,n.jsx)(t.code,{children:"CacacheBuilder"}),"]'s docs for more information"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Cacache;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Cacache::default();\n    builder.datadir("/tmp/opendal/cacache");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}var l=a(5431),i=a(2860);const o={title:"Cacache"},u=void 0,d={id:"services/cacache",title:"Cacache",description:"Cacache services support.",source:"@site/docs/services/cacache.mdx",sourceDirName:"services",slug:"/services/cacache",permalink:"/docs/services/cacache",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/cacache.mdx",tags:[],version:"current",lastUpdatedBy:"zjregee",lastUpdatedAt:1709718570,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Cacache"},sidebar:"docs",previous:{title:"Azdls",permalink:"/docs/services/azdls"},next:{title:"COS",permalink:"/docs/services/cos"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/zkat/cacache-rs",children:"Cacache"})," services support."]}),"\n","\n",(0,n.jsx)(c,{components:e.components}),"\n",(0,n.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z,{value:"rust",label:"Rust",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::services::Cacache;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    \n    let mut map = HashMap::new();\n    map.insert("datadir".to_string(), "/tmp/opendal/cacache".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Cacache, map)?;\n    Ok(())\n}\n'})})}),(0,n.jsx)(i.Z,{value:"node.js",label:"Node.js",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { Operator } from  require('opendal');\n\nasync function main() {\n    const op = new Operator(\"cacache\", {\n        datadir: '/tmp/opendal/cacache'\n    });\n}\n"})})}),(0,n.jsx)(i.Z,{value:"python",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("cacache", {\n    "datadir": "/tmp/opendal/cacache"\n})\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},2860:(e,t,a)=>{a.d(t,{Z:()=>c});a(959);var n=a(6259);const s={tabItem:"tabItem_CbVR"};var r=a(1527);function c(e){let{children:t,hidden:a,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,c),hidden:a,children:t})}},5431:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(959),s=a(6259),r=a(2990),c=a(8903),l=a(3133),i=a(563),o=a(351),u=a(3026);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,c.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=p(e),[c,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,d]=m({queryString:a,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),x=(()=>{const e=o??b;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=a(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var j=a(1527);function v(e){let{className:t,block:a,selectedValue:n,selectValue:c,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),s=l[a].value;s!==n&&(o(t),c(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(k,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(t))}},2175:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>c});var n=a(959);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);