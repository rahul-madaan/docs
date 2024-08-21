"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"At Manta, OpenLineage Opens Doors to New Insights",date:new Date("2022-10-31T00:00:00.000Z"),authors:["Ostic"],description:"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers."},i=void 0,s={permalink:"/blog/manta-integration",source:"@site/blog/manta-integration/index.mdx",title:"At Manta, OpenLineage Opens Doors to New Insights",description:"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers.",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[],readingTime:1.76,hasTruncateMarker:!0,authors:[{name:"Ernie Ostic",title:"SVP of Product at Manta",key:"Ostic"}],frontMatter:{title:"At Manta, OpenLineage Opens Doors to New Insights",date:"2022-10-31T00:00:00.000Z",authors:["Ostic"],description:"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers."},prevItem:{title:"What's in a Namespace?",permalink:"/blog/whats-in-a-namespace"},nextItem:{title:"Pursuing Lineage from Airflow using Custom Extractors",permalink:"/blog/extractors"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers."),(0,o.kt)("p",null,"Here at ",(0,o.kt)("a",{parentName:"p",href:"https://getmanta.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"},"MANTA"),", we are very excited to be working closely with ",(0,o.kt)("a",{parentName:"p",href:"https://openlineage.io/"},"OpenLineage")," and, more importantly, with the OpenLineage Community.  As a leader in lineage analysis, we see first-hand the complexity required to achieve effective lineage, and the benefits of having an accepted standard for the sharing of operational lineage metadata. OpenLineage moves everything in the direction of enhanced interoperability, and helps to ensure that enterprises have maximum flexibility for current and future tool selection.  "),(0,o.kt)("p",null,"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers, many of whom are enterprise organizations and need this level of granularity. This is especially important for new technologies such as ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),", whose integration with OpenLineage continues to evolve.  Apache Airflow, as an example, is increasingly being utilized by our customers as part of their process orchestration portfolio; as such, these companies need lineage coverage for these operations. "),(0,o.kt)("p",null,"Having a recognized industry standard for lineage capture and reporting is an enabler for enhanced metadata management and governance. OpenLineage helps to ensure increased consistency in pipeline analysis, especially as more and more solutions appear in the Cloud, and in the general marketplace, for the transformation, enrichment, and overall movement of information through new and future dataflows. Vendors like MANTA will continue to offer creative and purposeful solutions that answer key questions and meet the end-to-end requirements of the business. For selected technologies, OpenLineage enables us to do this faster and simpler.   "),(0,o.kt)("p",null,"Eighteen months ago, we started our investigation into OpenLineage. After working with various customers earlier this year, we decided to double down on our investment and get more involved with the OpenLineage Community.  Throughout our journey, we\u2019ve found this growing community to be welcoming, helpful, and collaborative. MANTA is pleased to contribute however we can to this important open source project.  Are you ready to join?"),(0,o.kt)("p",null,"For more information about MANTA's data lineage solution, visit ",(0,o.kt)("a",{parentName:"p",href:"https://getmanta.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"},"our website"),"."),(0,o.kt)("p",null,"To learn more about contributing to OpenLineage, check out the project's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/CONTRIBUTING.md"},"new contributor guide"),"."))}c.isMDXComponent=!0}}]);