"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"0.26.0",sidebar_position:9963},l="0.26.0 - 2023-05-18",o={unversionedId:"releases/0_26_0",id:"releases/0_26_0",title:"0.26.0",description:"Added",source:"@site/docs/releases/0_26_0.md",sourceDirName:"releases",slug:"/releases/0_26_0",permalink:"/docs/releases/0_26_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_26_0.md",tags:[],version:"current",sidebarPosition:9963,frontMatter:{title:"0.26.0",sidebar_position:9963},sidebar:"tutorialSidebar",previous:{title:"0.27.1",permalink:"/docs/releases/0_27_1"},next:{title:"0.25.0",permalink:"/docs/releases/0_25_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0260---2023-05-18"},"0.26.0 - 2023-05-18"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proxy: Fluentd proxy support (experimental)")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1757"},(0,a.kt)("inlineCode",{parentName:"a"},"#1757"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Adds a Fluentd data collector as a proxy to buffer Openlineage events and send them to multiple backends (among many other purposes). Also implements a Fluentd Openlineage parser to validate incoming HTTP events at the beginning of the pipeline. See the ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/OpenLineage/OpenLineage/tree/main/proxy/fluentd"},"readme")," file for more details."))),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Python client: use Hatchling over setuptools to orchestrate Python env setup")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1856"},(0,a.kt)("inlineCode",{parentName:"a"},"#1856"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gaborbernat"},"@gaborbernat"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Replaces setuptools with Hatchling for building the backend. Also includes a number of fixes, including to type definitions in ",(0,a.kt)("inlineCode",{parentName:"em"},"transport")," and elsewhere."))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: support single file datasets")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1855"},(0,a.kt)("inlineCode",{parentName:"a"},"#1855"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Fixes the naming of single file datasets so they are no longer named using the parent directory's path: ",(0,a.kt)("inlineCode",{parentName:"em"},"spark.read.csv('file.csv')"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: fix ",(0,a.kt)("inlineCode",{parentName:"strong"},"logicalPlan")," serialization issue on Databricks")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1858"},(0,a.kt)("inlineCode",{parentName:"a"},"#1858"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Disables the ",(0,a.kt)("inlineCode",{parentName:"em"},"spark_unknown")," facet by default to turn off serialization of ",(0,a.kt)("inlineCode",{parentName:"em"},"logicalPlan"),"."))))}d.isMDXComponent=!0}}]);