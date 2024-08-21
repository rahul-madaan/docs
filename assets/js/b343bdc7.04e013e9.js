"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,p(p({ref:t},m),{},{components:a})):n.createElement(h,p({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52817:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"1.15.0",sidebar_position:9942},p="1.15.0 - 2024-05-24",o={unversionedId:"releases/1_15_0",id:"releases/1_15_0",title:"1.15.0",description:"Added",source:"@site/docs/releases/1_15_0.md",sourceDirName:"releases",slug:"/releases/1_15_0",permalink:"/docs/releases/1_15_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_15_0.md",tags:[],version:"current",sidebarPosition:9942,frontMatter:{title:"1.15.0",sidebar_position:9942},sidebar:"tutorialSidebar",previous:{title:"1.16.0",permalink:"/docs/releases/1_16_0"},next:{title:"1.14.0",permalink:"/docs/releases/1_14_0"}},l={},s=[{value:"Added",id:"added",level:3},{value:"Removed",id:"removed",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1150---2024-05-24"},"1.15.0 - 2024-05-24"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: handle Iceberg tables with nested and complex field types")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2706"},(0,r.kt)("inlineCode",{parentName:"a"},"#2706"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Creates ",(0,r.kt)("inlineCode",{parentName:"em"},"SchemaDatasetFacet")," with nested fields for Iceberg tables with list, map and struct columns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: handle Avro schema with nested and complex field types")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2711"},(0,r.kt)("inlineCode",{parentName:"a"},"#2711"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Creates ",(0,r.kt)("inlineCode",{parentName:"em"},"SchemaDatasetFacet")," with nested fields for Avro schemas with complex types (union, record, map, array, fixed).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add facets to Spark application events")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2677"},(0,r.kt)("inlineCode",{parentName:"a"},"#2677"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for Spark application start and stop events in the ",(0,r.kt)("inlineCode",{parentName:"em"},"ExecutionContext")," interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add nested fields to ",(0,r.kt)("inlineCode",{parentName:"strong"},"SchemaDatasetFieldsFacet"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2689"},(0,r.kt)("inlineCode",{parentName:"a"},"#2689"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds nested Spark Dataframe fields support to ",(0,r.kt)("inlineCode",{parentName:"em"},"SchemaDatasetFieldsFacet"),". Also include field comment as ",(0,r.kt)("inlineCode",{parentName:"em"},"description"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add ",(0,r.kt)("inlineCode",{parentName:"strong"},"SparkApplicationDetailsFacet"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2688"},(0,r.kt)("inlineCode",{parentName:"a"},"#2688"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds ",(0,r.kt)("inlineCode",{parentName:"em"},"SparkApplicationDetailsFacet")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"runEvent"),"s emitted on Spark application start."))),(0,r.kt)("h3",{id:"removed"},"Removed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: remove Airflow < 2.3.0 support")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2710"},(0,r.kt)("inlineCode",{parentName:"a"},"#2710"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes Airflow < 2.3.0 support.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integration: use v2 Python facets")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2693"},(0,r.kt)("inlineCode",{parentName:"a"},"#2693"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Migrates integrations from removed v1 facets to v2 Python facets."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: improve job suffix assigning mechanism")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2665"},(0,r.kt)("inlineCode",{parentName:"a"},"#2665"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"For some catalog handlers, the mechanism was creating different dataset identifiers on START and COMPLETE depending on whether a dataset was created or not. This improves the mechanism to assign a deterministic job suffix based on the output dataset at the moment of a start event. ",(0,r.kt)("strong",{parentName:"em"},"Note"),": this may change job names in some scenarios.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: fix empty dataset name for ",(0,r.kt)("inlineCode",{parentName:"strong"},"AthenaExtractor"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2700"},(0,r.kt)("inlineCode",{parentName:"a"},"#2700"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The dataset name should not be empty when passing only a bucket as S3 output in Athena.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: fix ",(0,r.kt)("inlineCode",{parentName:"strong"},"SchemaDatasetFacet")," for Protobuf repeated primitive types")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2685"},(0,r.kt)("inlineCode",{parentName:"a"},"#2685"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes issues with the Protobuf schema converter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python: clean up Python client code, add logging.")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2653"},(0,r.kt)("inlineCode",{parentName:"a"},"#2653"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Cleans up client code, refactors logging in all Python modules.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL: catch ",(0,r.kt)("inlineCode",{parentName:"strong"},"TokenizerError"),"s, ",(0,r.kt)("inlineCode",{parentName:"strong"},"PanicException"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2703"},(0,r.kt)("inlineCode",{parentName:"a"},"#2703"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The SQL parser now catches and handles these errors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python: suppress warning on importing v1 module in ",(0,r.kt)("strong",{parentName:"strong"},"init"),".py.")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2713"},(0,r.kt)("inlineCode",{parentName:"a"},"#2713"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Suppresses the deprecation warning when v1 facets are used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integration/Java/Python: use UUIDv7 instead of UUIDv4")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2686"},(0,r.kt)("inlineCode",{parentName:"a"},"#2686"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2687"},(0,r.kt)("inlineCode",{parentName:"a"},"#2687"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Uses UUIDv7 instead of UUIDv4 for ",(0,r.kt)("inlineCode",{parentName:"em"},"runEvent"),"s. The new UUID version produces monotonically increasing values, which leads to more performant queries on the OL consumer side. ",(0,r.kt)("strong",{parentName:"em"},"Note"),": UUID version is an implementation detail and can be changed in the future."))))}d.isMDXComponent=!0}}]);