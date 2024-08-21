"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,A=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(A,l(l({ref:t},u),{},{components:a})):n.createElement(A,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:3},l="Backfilling Airflow DAGs Using Marquez",o={unversionedId:"guides/airflow-backfill-dags",id:"guides/airflow-backfill-dags",title:"Backfilling Airflow DAGs Using Marquez",description:"Adapted from a blog post by Willy Lulciuc",source:"@site/docs/guides/airflow-backfill-dags.md",sourceDirName:"guides",slug:"/guides/airflow-backfill-dags",permalink:"/docs/guides/airflow-backfill-dags",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/guides/airflow-backfill-dags.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using OpenLineage with Spark",permalink:"/docs/guides/spark"},next:{title:"Using Marquez with dbt",permalink:"/docs/guides/dbt"}},d={},s=[{value:"Adapted from a blog post by Willy Lulciuc",id:"adapted-from-a-blog-post-by-willy-lulciuc",level:4},{value:"Exploring Lineage Metadata using Marquez",id:"exploring-lineage-metadata-using-marquez",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Query the Lineage Graph",id:"query-the-lineage-graph",level:3},{value:"Backfill a DAG Run",id:"backfill-a-dag-run",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backfilling-airflow-dags-using-marquez"},"Backfilling Airflow DAGs Using Marquez"),(0,i.kt)("h4",{id:"adapted-from-a-blog-post-by-willy-lulciuc"},"Adapted from a ",(0,i.kt)("a",{parentName:"h4",href:"https://openlineage.io/blog/backfilling-airflow-dags-using-marquez/"},"blog post")," by Willy Lulciuc"),(0,i.kt)("p",null,"This tutorial covers the use of lineage metadata in Airflow to backfill DAGs. Thanks to data lineage, backfilling does not have to be a tedious chore.  "),(0,i.kt)("p",null,"Airflow supports backfilling DAG runs for a historical time window with a given start and end date. If a DAG (",(0,i.kt)("inlineCode",{parentName:"p"},"example.etl_orders_7_days"),") started failing on 2021-06-06, for example, you might want to reprocess the daily table partitions for that week (assuming all partitions have been backfilled upstream). This is possible using the ",(0,i.kt)("a",{parentName:"p",href:"https://openlineage.io/blog/backfilling-airflow-dags-using-marquez/"},"Airflow CLI"),". In order to run the backfill for ",(0,i.kt)("inlineCode",{parentName:"p"},"example.etl_orders_7_days")," using Airflow, create an Airflow instance and execute the following backfill command in a terminal window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Backfill weekly food orders\n$ airflow dags backfill \\\n    --start-date 2021-06-06 \\\n    --end-date 2021-06-06 \\\n    example.etl_orders_7_days\n")),(0,i.kt)("p",null,"Unfortunately, backfills are rarely so straightforward. Some questions remain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How quickly can data quality issues be identified and explored?"),(0,i.kt)("li",{parentName:"ul"},"What alerting rules should be in place to notify downstream DAGs of possible upstream processing issues or failures?"),(0,i.kt)("li",{parentName:"ul"},"What effects (if any) would upstream DAGs have on downstream DAGs if dataset consumption were delayed?")),(0,i.kt)("p",null,"Managing lineage metadata with Marquez clears up much of the ambiguity that has surrounded backfilling. The key is to maintain inter-DAG dependencies and catalog historical runs of DAGs."),(0,i.kt)("h2",{id:"exploring-lineage-metadata-using-marquez"},"Exploring Lineage Metadata using Marquez"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sample data (for the dataset used here, follow the instructions in the ",(0,i.kt)("a",{parentName:"li",href:"https://marquezproject.github.io/marquez/quickstart.html#write-sample-lineage-metadata-to-marquez"},"Write Sample Lineage Metadata to Marquez")," section of Marquez's ",(0,i.kt)("a",{parentName:"li",href:"https://marquezproject.github.io/marquez/quickstart.html"},"quickstart")," guide)"),(0,i.kt)("li",{parentName:"ul"},"Docker 17.05+"),(0,i.kt)("li",{parentName:"ul"},"Docker Desktop"),(0,i.kt)("li",{parentName:"ul"},"Docker Compose"),(0,i.kt)("li",{parentName:"ul"},"jq")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are using macOS Monterey (macOS 12), port 5000 will have to be released by ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682332"},"disabling the AirPlay Receiver"),". Also, port 3000 will need to be free if access to the Marquez web UI is desired.")),(0,i.kt)("h3",{id:"query-the-lineage-graph"},"Query the Lineage Graph"),(0,i.kt)("p",null,'After running the seed command in the quickstart guide, check to make sure Marquez is up by visiting http://localhost:3000. The page should display an empty Marquez instance and a message saying there is no data. Also, it should be possible to see the server output from requests in the terminal window where Marquez is running. This window should remain open. As you progress through the tutorial, feel free to experiment with the web UI. Use truncated strings (e.g., "example.etl_orders_7_days" instead of "job:food_delivery:example.etl_orders_7_days") to find the datasets referenced below.'),(0,i.kt)("p",null,"In Marquez, each dataset and job has its own globally unique node ID that can be used to query the lineage graph. The LineageAPI returns a set of nodes consisting of edges. An edge is directed and has a defined origin and destination. A lineage graph may contain the following node types: ",(0,i.kt)("inlineCode",{parentName:"p"},"dataset:<namespace>:<dataset>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"job:<namespace>:<job>"),"."),(0,i.kt)("p",null,"Start by querying the lineage graph of the seed data via the CLI.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"etl_orders_7_days")," DAG has the node ID ",(0,i.kt)("inlineCode",{parentName:"p"},"job:food_delivery:example.etl_orders_7_days"),". To see the graph, run the following in a new terminal window: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -X GET "http://localhost:5000/api/v1-beta/lineage?nodeId=job:food_delivery:example.etl_orders_7_days"\n')),(0,i.kt)("p",null,"Notice in the returned lineage graph that the DAG input datasets are ",(0,i.kt)("inlineCode",{parentName:"p"},"public.categories"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"public.orders"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"public.menus"),", while ",(0,i.kt)("inlineCode",{parentName:"p"},"public.orders_7_days")," is the output dataset. The response should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "graph": [{\n    "id": "job:food_delivery:example.etl_orders_7_days",\n    "type": "JOB",\n    "data": {\n      "type": "BATCH",\n      "id": {\n        "namespace": "food_delivery",\n        "name": "example.etl_orders_7_days"\n      },\n      "name": "example.etl_orders_7_days",\n      "createdAt": "2021-06-06T14:50:13.931946Z",\n      "updatedAt": "2021-06-06T14:57:54.037399Z",\n      "namespace": "food_delivery",\n      "inputs": [\n        {"namespace": "food_delivery", "name": "public.categories"},\n        {"namespace": "food_delivery", "name": "public.menu_items"},\n        {"namespace": "food_delivery", "name": "public.orders"},\n        {"namespace": "food_delivery", "name": "public.menus"}\n      ],\n      "outputs": [\n        {"namespace": "food_delivery", "name": "public.orders_7_days"}\n      ],\n      "location": "https://github.com/example/jobs/blob/2294bc15eb49071f38425dc927e48655530a2f2e/etl_orders_7_days.py",\n        "context": {\n          "sql": "INSERT INTO orders_7_days (order_id, placed_on, discount_id, menu_id, restaurant_id, menu_item_id, category_id)\\n  SELECT o.id AS order_id, o.placed_on, o.discount_id, m.id AS menu_id, m.restaurant_id, mi.id AS menu_item_id, c.id AS category_id\\n    FROM orders AS o\\n   INNER JOIN menu_items AS mi\\n      ON menu_items.id = o.menu_item_id\\n   INNER JOIN categories AS c\\n      ON c.id = mi.category_id\\n   INNER JOIN menu AS m\\n      ON m.id = c.menu_id\\n   WHERE o.placed_on >= NOW() - interval \'7 days\';"\n        },\n        "description": "Loads newly placed orders weekly.",\n        "latestRun": {\n          "id": "5c7f0dc4-d3c1-4f16-9ac3-dc86c5da37cc",\n          "createdAt": "2021-06-06T14:50:36.853459Z",\n          "updatedAt": "2021-06-06T14:57:54.037399Z",\n          "nominalStartTime": "2021-06-06T14:54:00Z",\n          "nominalEndTime": "2021-06-06T14:57:00Z",\n          "state": "FAILED",\n          "startedAt": "2021-06-06T14:54:14.037399Z",\n          "endedAt": "2021-06-06T14:57:54.037399Z",\n          "durationMs": 220000,\n          "args": {},\n          "location": "https://github.com/example/jobs/blob/2294bc15eb49071f38425dc927e48655530a2f2e/etl_orders_7_days.py",\n          "context": {\n            "sql": "INSERT INTO orders_7_days (order_id, placed_on, discount_id, menu_id, restaurant_id, menu_item_id, category_id)\\n  SELECT o.id AS order_id, o.placed_on, o.discount_id, m.id AS menu_id, m.restaurant_id, mi.id AS menu_item_id, c.id AS category_id\\n    FROM orders AS o\\n   INNER JOIN menu_items AS mi\\n      ON menu_items.id = o.menu_item_id\\n   INNER JOIN categories AS c\\n      ON c.id = mi.category_id\\n   INNER JOIN menu AS m\\n      ON m.id = c.menu_id\\n   WHERE o.placed_on >= NOW() - interval \'7 days\';"\n          },\n          "facets": {}\n        }\n      },\n      "inEdges": [\n        {"origin": "dataset:food_delivery:public.categories", "destination": "job:food_delivery:example.etl_orders_7_days"}, "destination": "job:food_delivery:example.etl_orders_7_days"},\n        {"origin": "dataset:food_delivery:public.orders", "destination": "job:food_delivery:example.etl_orders_7_days"},\n        {"origin": "dataset:food_delivery:public.menus", "destination": "job:food_delivery:example.etl_orders_7_days"}\n      ],\n      "outEdges": [\n        {"origin": "job:food_delivery:example.etl_orders_7_days", "destination": "dataset:food_delivery:public.orders_7_days"}\n      ]\n    }\n  }, ...]\n}\n')),(0,i.kt)("p",null,"To see a visualization of the graph, search the web UI with ",(0,i.kt)("inlineCode",{parentName:"p"},"public.delivery_7_days"),"."),(0,i.kt)("h3",{id:"backfill-a-dag-run"},"Backfill a DAG Run"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Backfill",src:a(46069).Z,width:"843",height:"532"})),(0,i.kt)("p",null,"Figure 1: Backfilled daily table partitions"),(0,i.kt)("p",null,"To run a backfill for ",(0,i.kt)("inlineCode",{parentName:"p"},"example.etl_orders_7_days")," using the DAG lineage metadata stored in Marquez, query the lineage graph for the upstream DAG where an error originated. In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"example.etl_orders")," DAG upstream of ",(0,i.kt)("inlineCode",{parentName:"p"},"example.etl_orders_7_days")," failed to write some of the daily table partitions needed for the weekly food order trends report. To fix the weekly trends report, backfill the missing daily table partitions ",(0,i.kt)("inlineCode",{parentName:"p"},"public.orders_2021_06_04"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"public.orders_2021_06_05"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"public.orders_2021_06_06")," using the Airflow CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Backfill daily food orders\n$ airflow dags backfill \\\n    --start-date 2021-06-04 \\\n    --end-date 2021-06-06 \\\n    example.etl_orders\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DAG Deps",src:a(9030).Z,width:"958",height:"373"})),(0,i.kt)("p",null,"Figure 2: Airflow inter-DAG dependencies"),(0,i.kt)("p",null,"Then, using the script ",(0,i.kt)("inlineCode",{parentName:"p"},"backfill.sh")," defined below, we can easily backfill all DAGs downstream of ",(0,i.kt)("inlineCode",{parentName:"p"},"example.etl_orders"),":"),(0,i.kt)("p",null,"(Note: Make sure you have jq installed before running ",(0,i.kt)("inlineCode",{parentName:"p"},"backfill.sh"),".)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#!/bin/bash\n#\n# Backfill DAGs automatically using lineage metadata stored in Marquez.\n#\n# Usage: $ ./backfill.sh <start-date> <end-date> <dag-id>\n\u200b\nset -e\n\u200b\n# Backfills DAGs downstream of the given node ID, recursively.\nbackfill_downstream_of() {\n  node_id="${1}"\n  # Get out edges for node ID\n  out_edges=($(echo $lineage_graph \\\n    | jq -r --arg NODE_ID "${node_id}" \'.graph[] | select(.id==$NODE_ID) | .outEdges[].destination\'))\n  for out_edge in "${out_edges[@]}"; do\n    # Run backfill if out edge is a job node (i.e. <dataset> => <job>)\n    if [[ "${out_edge}" = job:* ]]; then\n      dag_id="${out_edge##*:}"\n      echo "backfilling ${dag_id}..."\n      airflow backfill --start_date "${start_date}" --end_date "${start_date}" "${dag_id}"\n    fi\n    # Follow out edges downstream, recursively\n    backfill_downstream_of "${out_edge}"\n  done\n}\n\u200b\nstart_date="${1}"\nend_date="${2}"\ndag_id="${3}"\n\u200b\n# (1) Build job node ID (format: \'job:<namespace>:<job>\')\nnode_id="job:food_delivery:${dag_id}"\n\u200b\n# (2) Get lineage graph\nlineage_graph=$(curl -s -X GET "http://localhost:5000/api/v1-beta/lineage?nodeId=${node_id}")\n\u200b\n# (3) Run backfill\nbackfill_downstream_of "${node_id}"\n')),(0,i.kt)("p",null,"When run, the script should output all backfilled DAGs to the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./backfill.sh 2021-06-06 2021-06-06 example.etl_orders\nbackfilling example.etl_orders_7_days...\nbackfilling example.etl_delivery_7_days...\nbackfilling example.delivery_times_7_days...\n")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The lineage metadata provided by Marquez can make the task of backfilling much easier. But lineage metadata can also help avoid the need to backfill altogether. Since Marquez collects DAG run metadata that can be viewed using the Runs API, building automated processes to check DAG run states and notify teams of upstream data quality issues is just one possible preventive measure."),(0,i.kt)("p",null,"Explore Marquez's opinionated Metadata API and define your own automated process(es) for analyzing lineage metadata! Also, join our Slack channel or reach out to us on Twitter if you have questions."))}p.isMDXComponent=!0},46069:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},9030:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/inter-dag-deps-08d66946b7fa85e1280b3a6bbc3d7b76.png"}}]);