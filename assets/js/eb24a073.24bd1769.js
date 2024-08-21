"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,title:"Build"},o="Build",l={unversionedId:"development/developing/spark/setup",id:"development/developing/spark/setup",title:"Build",description:"Java 17",source:"@site/docs/development/developing/spark/setup.md",sourceDirName:"development/developing/spark",slug:"/development/developing/spark/setup",permalink:"/docs/development/developing/spark/setup",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/developing/spark/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Build"},sidebar:"tutorialSidebar",previous:{title:"Metrics Backends",permalink:"/docs/development/developing/java/adding_metrics"},next:{title:"Integrating with Spark extensions",permalink:"/docs/development/developing/spark/built_in_lineage"}},p={},s=[{value:"Java 17",id:"java-17",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Testing",id:"testing",level:2},{value:"Build jar",id:"build-jar",level:2},{value:"Contributing",id:"contributing",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build"},"Build"),(0,a.kt)("h2",{id:"java-17"},"Java 17"),(0,a.kt)("p",null,"Testing requires a Java 17 JVM to test the Scala Spark components.\nUse your favourite tool (sdkman, ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/libexec/java_home"),") to set ",(0,a.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," environmental variables properly."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"The integration depends on four libraries that are build locally ",(0,a.kt)("inlineCode",{parentName:"p"},"openlineage-java"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-extension-interfaces"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-extension-entrypoint")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"openlineage-sql-java"),",\nso before any testing or building of a package you need to publish the appropriate artifacts to local maven repository.\nTo build the packages you need to execute."),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"openlineage-java")," in local maven repo run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ../../client/java/ && ./gradlew publishToMavenLocal\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-extension-interfaces")," run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ../../integration/spark-extension-interfaces && ./gradlew publishToMavenLocal\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-extension-entrypoint")," run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ../../integration/spark-extension-entrypoint && ./gradlew publishToMavenLocal\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"openlineage-sql-java")," run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"../../integration/sql/iface-java/ && ./script/compile.sh\n../../integration/sql/iface-java/ && ./script/build.sh\n")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"To run the tests, from the current directory run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew test\n")),(0,a.kt)("p",null,"To run the integration tests, from the current directory run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew integrationTest\n")),(0,a.kt)("h2",{id:"build-jar"},"Build jar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew shadowJar\n")),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"If contributing changes, additions or fixes to the Spark integration, please include the following header in any new ",(0,a.kt)("inlineCode",{parentName:"p"},".java")," files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/* \n/* Copyright 2018-2024 contributors to the OpenLineage project\n/* SPDX-License-Identifier: Apache-2.0 \n*/\n")),(0,a.kt)("p",null,"A Github Action checks for headers in new ",(0,a.kt)("inlineCode",{parentName:"p"},".java")," files when pull requests are opened."),(0,a.kt)("p",null,"Thank you for your contributions to the project!"))}c.isMDXComponent=!0}}]);