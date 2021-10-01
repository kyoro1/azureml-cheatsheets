(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[442],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4775:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),o={title:"Deployment",description:"One-time website deployment setup."},l={unversionedId:"misc/deployment",id:"misc/deployment",isDocsHomePage:!1,title:"Deployment",description:"One-time website deployment setup.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/misc/deployment.md",sourceDirName:"misc",slug:"/misc/deployment",permalink:"/azureml-cheatsheets/ja/docs/misc/deployment",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/misc/deployment.md",version:"current",frontMatter:{title:"Deployment",description:"One-time website deployment setup."}},s=[{value:"Deployment",id:"deployment",children:[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Manual",id:"manual",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"This article describes the one-time process for deploying the cheat sheeets as a GitHub Pages website."),(0,i.kt)("p",null,"This repo has GitHub actions in place that automate deployment by watching the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch.\nIf you are interested in how deployment works then read on!"),(0,i.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"We use GitHub actions to automate deployment. Set up was as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generated new SSH key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NB. Since there was an existing ssh key tied the repo a new key was generated (in a different location) ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/.ssh/id_rsa")))),(0,i.kt)("li",{parentName:"ul"},"Add public key to repo's ",(0,i.kt)("a",{parentName:"li",href:"https://developer.github.com/v3/guides/managing-deploy-keys/"},"deploy key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NB. Allow write access"))),(0,i.kt)("li",{parentName:"ul"},"Add private key as ",(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"GitHub secret"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We use repo-level (not org level) secret"),(0,i.kt)("li",{parentName:"ul"},"Secret is named ",(0,i.kt)("inlineCode",{parentName:"li"},"GH_PAGES_DEPLOY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xclip -sel clip < /tmp/.ssh/id_rsa"))))),(0,i.kt)("h3",{id:"manual"},"Manual"),(0,i.kt)("p",null,"It is possible to make manual deployments without use of the GitHub action above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy\n")),(0,i.kt)("p",null,"If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}u.isMDXComponent=!0}}]);