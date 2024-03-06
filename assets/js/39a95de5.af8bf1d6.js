"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[5737],{1851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>j,frontMatter:()=>u,metadata:()=>p,toc:()=>x});var s=t(1527),i=t(2175);function r(e){const n={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"rename"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"scan"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"presign"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endpoint"}),": Set the endpoint for backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"container"}),": Swift container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token"}),": Swift personal access token."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to [",(0,s.jsx)(n.code,{children:"SwiftBuilder"}),"]'s public API docs for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Swift;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create Swift backend builder\n    let mut builder = Swift::default();\n    \n    // Set the root for swift, all operations will happen under this root\n    builder.root("/path/to/dir");\n    // set the endpoint of Swift backend\n    builder.endpoint("https://openstack-controller.example.com:8080/v1/account");\n    // set the container name of Swift workspace\n    builder.container("container");\n    // set the auth token for builder\n    builder.token("token");\n\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var o=t(5431),c=t(2860);function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"compatible-services",children:"Compatible Services"}),"\n",(0,s.jsx)(n.h3,{id:"openstack-swift",children:"OpenStack Swift"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.openstack.org/swift/latest/",children:"OpenStack Swift"})," is the default implementations of swift services."]}),"\n",(0,s.jsx)(n.p,{children:"To connect to OpenStack Swift, we need to set:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endpoint"}),": The endpoint of OpenStack Swift, for example: ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8080/v1/AUTH_test"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"container"}),": The name of OpenStack Swift container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token"}),": OpenStack Swift container personal access token."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,ignore",children:'builder.endpoint("http://127.0.0.1:8080/v1/AUTH_test");\nbuilder.container("container");\nbuilder.token("token");\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"endpoint"})," is the full URL that serves as the access point to all containers under an OpenStack Swift account. It represents the entry point for accessing the resources of the account. Alongside ",(0,s.jsx)(n.code,{children:"endpoint"}),", ",(0,s.jsx)(n.code,{children:"token"})," is used as a credential to verify the user's identity and authorize access to the relevant resources. Both ",(0,s.jsx)(n.code,{children:"endpoint"})," and ",(0,s.jsx)(n.code,{children:"token"})," can be obtained through OpenStack Swift authentication service."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"endpoint"})," consists of server address and port, API version, authenticated account ID. For instance, it might appear as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"http://127.0.0.1:8080/v1/AUTH_test"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"http://192.168.66.88:8080/swift/v1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"https://openstack-controller.example.com:8080/v1/account"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Please note that the exact format of ",(0,s.jsx)(n.code,{children:"endpoint"})," may vary depending on the deployment configuration and version of swift services. Users can refer to the specific services documentation for the correct ",(0,s.jsx)(n.code,{children:"endpoint"})," format and authentication method."]}),"\n",(0,s.jsx)(n.p,{children:"For more information, refer:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/object-store/",children:"OpenStack Swift API"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.openstack.org/swift/latest/api/object_api_v1_overview.html",children:"OpenStack Swift Authentication"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ceph-rados-gateway",children:"Ceph Rados Gateway"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.ceph.com/en/quincy/radosgw/",children:"Ceph Rados Gateway"})," supports a RESTful API that is compatible with the basic data access model of OpenStack Swift API."]}),"\n",(0,s.jsx)(n.p,{children:"To connect to Ceph Rados Gateway, we need to set:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endpoint"}),": The endpoint of swift services, for example: ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8080/swift/v1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"container"}),": The name of swift container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"token"}),": swift container personal access token."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,ignore",children:'builder.endpoint("http://127.0.0.1:8080/swift/v1");\nbuilder.container("container");\nbuilder.token("token");\n'})}),"\n",(0,s.jsx)(n.p,{children:"For more information, refer:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.ceph.com/en/latest/radosgw/swift/#api",children:"Ceph Rados Gateway Swift API"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.ceph.com/en/latest/radosgw/swift/auth/",children:"Ceph Rados Gateway Swift Authentication"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const u={title:"Swift"},h=void 0,p={id:"services/swift",title:"Swift",description:"OpenStack Swift and compatible services support.",source:"@site/docs/services/swift.mdx",sourceDirName:"services",slug:"/services/swift",permalink:"/docs/services/swift",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/swift.mdx",tags:[],version:"current",lastUpdatedBy:"zjregee",lastUpdatedAt:1709718570,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Swift"},sidebar:"docs",previous:{title:"Supabase",permalink:"/docs/services/supabase"},next:{title:"TiKV",permalink:"/docs/services/tikv"}},f={},x=[{value:"Via Config",id:"via-config",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.openstack.org/api-ref/object-store/",children:"OpenStack Swift"})," and compatible services support."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about swift-compatible services, refer to ",(0,s.jsx)(n.a,{href:"#compatible-services",children:"Compatible Services"}),"."]}),"\n","\n",(0,s.jsx)(a,{components:e.components}),"\n",(0,s.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n",(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(c.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n\n    map.insert("endpoint".to_string(), "http://127.0.0.1:8080/v1/AUTH_test".to_string());\n    map.insert("container".to_string(), "test_container".to_string());\n    map.insert("token".to_string(), "test_token".to_string());\n    map.insert("root".to_string(), "/".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Swift, map)?;\n\n    Ok(())\n}\n'})})}),(0,s.jsx)(c.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("swift", {\n    endpoint: "http://127.0.0.1:8080/v1/AUTH_test",\n    container: "test_container",\n    token: "test_token",\n    root: "/",\n  });\n}\n'})})}),(0,s.jsx)(c.Z,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("swift",\n    endpoint="http://127.0.0.1:8080/v1/AUTH_test"\n    container="test_container",\n    token="test_token",\n    root="/",\n)\n'})})})]}),"\n","\n","\n",(0,s.jsx)(d,{components:e.components})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>a});t(959);var s=t(6259);const i={tabItem:"tabItem_CbVR"};var r=t(1527);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,a),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>g});var s=t(959),i=t(6259),r=t(2990),a=t(8903),o=t(3133),c=t(563),l=t(351),d=t(3026);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[l,u]=f({queryString:t,groupId:i}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),j=(()=>{const e=l??x;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=t(3499);const j={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var b=t(1527);function v(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==s&&(l(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(k,{...e,...n})]})}function g(e){const n=(0,m.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(959);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);