"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},i="Developing With OpenLineage",l={unversionedId:"development/developing/developing",id:"development/developing/developing",title:"Developing With OpenLineage",description:"As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there's great chance that existing OpenLineage integration won't cover your needs.",source:"@site/docs/development/developing/developing.md",sourceDirName:"development/developing",slug:"/development/developing/",permalink:"/docs/development/developing/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/developing/developing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/faq"},next:{title:"Setup a development environment",permalink:"/docs/development/developing/python/setup"}},p={},s=[{value:"Clients",id:"clients",level:3},{value:"API Documentation",id:"api-documentation",level:3},{value:"Common Library (Python)",id:"common-library-python",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"SQL parser",id:"sql-parser",level:3},{value:"Contributing",id:"contributing",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developing-with-openlineage"},"Developing With OpenLineage"),(0,o.kt)("p",null,"As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there's great chance that existing OpenLineage integration won't cover your needs."),(0,o.kt)("p",null,"However, OpenLineage project also provides libraries you could use to write your own integration. "),(0,o.kt)("h3",{id:"clients"},"Clients"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/docs/client/python"},"Python")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/client/java/"},"Java"),", we've created clients that you can use to properly create and emit OpenLineage events to HTTP, Kafka, and other consumers."),(0,o.kt)("h3",{id:"api-documentation"},"API Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openlineage.io/apidocs/openapi/"},"OpenAPI documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openlineage.io/apidocs/javadoc/"},"Java Doc"))),(0,o.kt)("h3",{id:"common-library-python"},"Common Library (Python)"),(0,o.kt)("p",null,"Getting lineage from systems like BigQuery or Redshift isn't necessarily tied to orchestrator or processing engine you're using. For this reason, we've extracted\nthat functionality from our Airflow library and ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/openlineage-integration-common/"},"packaged it for separate use"),". "),(0,o.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"The list of available environment variables for ",(0,o.kt)("strong",{parentName:"p"},"Python")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/client/python#environment-variables"},"here"),".\nThe list of available environment variables for ",(0,o.kt)("strong",{parentName:"p"},"Java")," can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/client/java/#environment-variables"},"here"),"."),(0,o.kt)("h3",{id:"sql-parser"},"SQL parser"),(0,o.kt)("p",null,"We've created SQL parser that allows you to extract lineage from SQL statements. The parser is implemented in Rust; however, it's also available as a ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/openlineage-sql/"},"Python library"),".\nYou can take a look at its code on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/sql"},"GitHub"),"."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"If contributing changes, additions or fixes, please include the following header in any new files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/*\n/* Copyright 2018-2024 contributors to the OpenLineage project\n/* SPDX-License-Identifier: Apache-2.0 \n*/\n")),(0,o.kt)("p",null,"There is a pre-commit step that checks license in headers for new files when pull requests are opened."),(0,o.kt)("p",null,"Thanks for your contributions to the project!"))}d.isMDXComponent=!0}}]);