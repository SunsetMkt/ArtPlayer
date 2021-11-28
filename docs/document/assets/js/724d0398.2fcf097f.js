"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[873],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4230:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u6309\u94ae",sidebar_position:2},u=void 0,s={unversionedId:"zh-cn/Questions/Create button in the controls",id:"zh-cn/Questions/Create button in the controls",isDocsHomePage:!1,title:"\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u6309\u94ae",description:"\u6709\u65f6\u4f60\u9700\u8981\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u6309\u94ae\uff0c\u5982\u5f00\u5173\u6309\u94ae\u6216\u8005\u5355\u9009\u6309\u94ae\u7b49\u7b49\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u6837\u5f0f\u5e93\u5982 bootstrap",source:"@site/docs/zh-cn/Questions/Create button in the controls.md",sourceDirName:"zh-cn/Questions",slug:"/zh-cn/Questions/Create button in the controls",permalink:"/document/zh-cn/Questions/Create button in the controls",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u6309\u94ae",sidebar_position:2},sidebar:"zh-cn",previous:{title:"\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u5217\u8868",permalink:"/document/zh-cn/Questions/Create selector in the controls"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6709\u65f6\u4f60\u9700\u8981\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u6309\u94ae\uff0c\u5982\u5f00\u5173\u6309\u94ae\u6216\u8005\u5355\u9009\u6309\u94ae\u7b49\u7b49\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u6837\u5f0f\u5e93\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap")),(0,i.kt)("div",{className:"run-code"},"\u25b6 Run Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var time = 0;\nvar art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    controls: [\n        {\n            position: 'right',\n            html: '<button type=\"button\">Click Me!</button>',\n            click: function (_, event) {\n                // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e8b\u4ef6\u5bf9\u8c61\n                time += 1;\n                event.target.innerText = 'You Click ' + time;\n            },\n        },\n    ],\n});\n")))}f.isMDXComponent=!0}}]);