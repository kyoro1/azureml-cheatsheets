(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[89],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),s=o,d=g["".concat(c,".").concat(s)]||g[s]||m[s]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1475:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(4034),o=t(9973),i=(t(7294),t(3905)),a={title:"\u30e1\u30c8\u30ea\u30c3\u30af",description:"Guide to metric logging in Azure ML.",keywords:["metric","logging"]},l={unversionedId:"cheatsheets/python/v1/logging",id:"cheatsheets/python/v1/logging",isDocsHomePage:!1,title:"\u30e1\u30c8\u30ea\u30c3\u30af",description:"Guide to metric logging in Azure ML.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cheatsheets/python/v1/logging.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/logging",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/logging",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/logging.md",version:"current",frontMatter:{title:"\u30e1\u30c8\u30ea\u30c3\u30af",description:"Guide to metric logging in Azure ML.",keywords:["metric","logging"]},sidebar:"pythonSidebar",previous:{title:"\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/script-run-config"},next:{title:"\u5206\u6563 GPU \u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/distributed-training"}},c=[{value:"\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u8a18\u9332",id:"\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u8a18\u9332",children:[{value:"<code>log</code>",id:"log",children:[]},{value:"<code>log_row</code>",id:"log_row",children:[]}]},{value:"\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b",id:"\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b",children:[{value:"SDK \u304b\u3089\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b",id:"sdk-\u304b\u3089\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b",children:[]}]},{value:"\u4f8b",id:"\u4f8b",children:[{value:"MLFlow \u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b",id:"mlflow-\u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b",children:[]},{value:"PyTorch Lightning \u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b",id:"pytorch-lightning-\u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b",children:[]}]}],p={toc:c};function u(e){var n=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u8a18\u9332"},"\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u8a18\u9332"),(0,i.kt)("p",null,"\u30e1\u30c8\u30ea\u30c3\u30af\u306f Azure ML \u306e\u5404\u5b9f\u884c\u306b\u7d10\u4ed8\u3051\u3066\u8a18\u9332\u3055\u308c\u3001\u8907\u6570\u306e\u5b9f\u884c\u306f\u4e00\u3064\u306e\u5b9f\u9a13\u306b\u7d10\u4ed8\u3051\u3089\u308c\u3066\u8a18\u9332\u3055\u308c\u307e\u3059\u3002\n\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u5c65\u6b74\u306e\u4fdd\u5b58\u3068\u53ef\u8996\u5316\u3092\u884c\u3044\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"log"},(0,i.kt)("inlineCode",{parentName:"h3"},"log")),(0,i.kt)("p",null,"\u3042\u308b\u30e1\u30c8\u30ea\u30c3\u30af\u306e 1 \u3064\u306e\u5024\u3092\u5b9f\u884c\u306b\u8a18\u9332\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Run\nrun = Run.get_context()\nrun.log('metric-name', metric_value)\n")),(0,i.kt)("p",null,"\u3042\u308b\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u540c\u4e00\u306e\u5b9f\u884c\u306b\u5bfe\u3057\u3066\u8907\u6570\u56de\u8a18\u9332\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u3001\u8a18\u9332\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30c3\u30af\u306f\u30c1\u30e3\u30fc\u30c8\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"log_row"},(0,i.kt)("inlineCode",{parentName:"h3"},"log_row")),(0,i.kt)("p",null,"\u3042\u308b\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8907\u6570\u306e\u5217\u3068\u3057\u3066\u8a18\u9332\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from azureml.core import Run\nrun = Run.get_context()\nrun.log_row("Y over X", x=1, y=0.4)\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u305d\u306e\u4ed6\u306e\u8a18\u9332\u30aa\u30d7\u30b7\u30e7\u30f3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u8a18\u9332\u306b\u4f7f\u308f\u308c\u308b\u4e00\u822c\u7684\u306a API \u306f\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/machine-learning/how-to-log-view-metrics#data-types"},"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("h2",{id:"\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b"},"\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b"),(0,i.kt)("p",null,"\u30e1\u30c8\u30ea\u30c3\u30af\u306f Azure ML Studio \u306e\u4e2d\u3067\u81ea\u52d5\u7684\u306b\u8868\u793a\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"\u3053\u3061\u3089"),"\u306e\u30ea\u30f3\u30af\u5148\u304b\u3001SDK \u304b\u3089\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run.get_workspace_url()\n")),(0,i.kt)("p",null,'"\u30e1\u30c8\u30ea\u30c3\u30af"\u30bf\u30d6\u3092\u9078\u629e\u3057\u3001\u8868\u793a\u3057\u305f\u3044\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u9078\u629e\u3057\u307e\u3059\u3002'),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6897).Z})),(0,i.kt)("h3",{id:"sdk-\u304b\u3089\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b"},"SDK \u304b\u3089\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8868\u793a\u3059\u308b"),(0,i.kt)("p",null,"\u5b9f\u884c\u306b\u8a18\u9332\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002(\u8a73\u7d30: ",(0,i.kt)("a",{parentName:"p",href:"run"},"\u5b9f\u9a13\u3068\u5b9f\u884c"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"metrics = run.get_metrics()\n# \u30e1\u30c8\u30ea\u30c3\u30af\u306f Dict[str, List[float]] \u5f62\u5f0f\u306b\u306a\u3063\u3066\u304a\u308a\u3001\n# \u30e1\u30c8\u30ea\u30c3\u30af\u540d\u3068 list \u5f62\u5f0f\u306e\u5024\u304c\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u3066\u5b9f\u884c\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\nmetrics.get('metric-name')\n# \u8a18\u9332\u3055\u308c\u305f\u9806\u306b\u4e26\u3093\u3060\u30e1\u30c8\u30ea\u30c3\u30af\u306e\u30ea\u30b9\u30c8\n")),(0,i.kt)("p",null,"\u5b9f\u9a13",(0,i.kt)("inlineCode",{parentName:"p"},"my-experiment"),"\u306e\u30e1\u30c8\u30ea\u30c3\u30af",(0,i.kt)("inlineCode",{parentName:"p"},"my-metric"),"\u306e\u3059\u3079\u3066\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3059\u308b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"experiments = ws.experiments\n# \u5b9f\u9a13\u540d\u3068\u5b9f\u9a13\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ea\u30b9\u30c8\n\nexp = experiments['my-experiment']\nfor run in exp.get_runs():\n    metrics = run.get_metrics()\n\n    my_metric = metrics.get('my-metric')\n    if my_metric:\n        print(my_metric)\n")),(0,i.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,i.kt)("h3",{id:"mlflow-\u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b"},"MLFlow \u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mlflow.org/"},"MLFlow")," \u3092\u4f7f\u3063\u3066 Azure ML \u306b\u30e1\u30c8\u30ea\u30c3\u30af\u3092\u8a18\u9332\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Run\n\n# \u30b3\u30fc\u30c9\u304b\u3089\u5b9f\u884c\u4e2d\u306e\u5b9f\u9a13\u3084\u5b9f\u884c\u304c\u542b\u307e\u308c\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u63a5\u7d9a\u3059\u308b\nrun = Run.get_context()\nws = run.experiment.workspace\n\n# \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092 ml-flow-tracking-uri \u306b\u95a2\u9023\u4ed8\u3051\u308b\nmlflow_url = ws.get_mlflow_tracking_uri()\n")),(0,i.kt)("h3",{id:"pytorch-lightning-\u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b"},"PyTorch Lightning \u3092\u4f7f\u3063\u3066\u8a18\u9332\u3059\u308b"),(0,i.kt)("p",null,"\u3053\u306e\u4f8b\u306f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lightning \u306e",(0,i.kt)("inlineCode",{parentName:"li"},"TensorBoardLogger"),"\u3092\u542b\u307f\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Azure ML \u306e",(0,i.kt)("inlineCode",{parentName:"li"},"Run.get_context()"),"\u3092\u4f7f\u3063\u3066 Lightning \u306e",(0,i.kt)("inlineCode",{parentName:"li"},"MLFlowLogger"),"\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Azure ML \u306e\u5b9f\u884c\u306e\u4e00\u90e8\u3068\u3057\u3066\u4f7f\u3046\u3068\u304d\u306f\u3053\u306e\u30ed\u30ac\u30fc\u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import pytorch_lightning as pl\n\nrun = None\ntry:\n    from azureml.core.run import Run, _OfflineRun\n    run = Run.get_context()\n    if isinstance(run, _OfflineRun):\n        run = None\nexcept ImportError:\n    print(\"Couldn't import azureml.core.run.Run\")\n\ndef get_logger():\n    tb_logger = pl.loggers.TensorBoardLogger('logs/')\n    logger = [tb_logger]\n\n    if run is not None:\n        mlflow_url = run.experiment.workspace.get_mlflow_tracking_uri()\n        mlf_logger = pl.loggers.MLFlowLogger(\n          experiment_name=run.experiment.name,\n          tracking_uri=mlflow_url,\n          )\n        mlf_logger._run_id = run.id\n        logger.append(mlf_logger)\n\n    return logger\n")),(0,i.kt)("p",null,"\u3053\u3053\u3067\u3053\u306e\u30ed\u30ac\u30fc\u3092 lightning \u306e",(0,i.kt)("inlineCode",{parentName:"p"},"Trainer"),"\u30af\u30e9\u30b9\u306b\u542b\u3081\u307e\u3059:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"logger = get_logger()\n\ntrainer = pl.Trainer.from_argparse_args(\n    args=args,\n    logger=logger,\n    )\ntrainer.fit(model)\n")))}u.isMDXComponent=!0},6897:function(e,n,t){"use strict";n.Z=t.p+"assets/images/view-metrics-bf212fe7a27fb2be34c9c410a57c99f4.png"}}]);