"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[167],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),y=o,m=f["".concat(p,".").concat(y)]||f[y]||l[y]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"\u5982\u4f55\u5bfc\u5165\u7c7b\u578b",sidebar_position:4},p=void 0,u={unversionedId:"zh-cn/Questions/How_to_import_types",id:"zh-cn/Questions/How_to_import_types",title:"\u5982\u4f55\u5bfc\u5165\u7c7b\u578b",description:"\u6709\u65f6\u4f60\u4f1a\u4e22\u5931 TypeScript \u7684\u8bed\u6cd5\u63d0\u793a\uff0c\u8fd9\u65f6\u5019\u4f60\u53ef\u4ee5\u624b\u52a8\u5bfc\u5165\u7c7b\u578b",source:"@site/docs/zh-cn/Questions/How_to_import_types.mdx",sourceDirName:"zh-cn/Questions",slug:"/zh-cn/Questions/How_to_import_types",permalink:"/document/zh-cn/Questions/How_to_import_types",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5982\u4f55\u5bfc\u5165\u7c7b\u578b",sidebar_position:4},sidebar:"zh-cn",previous:{title:"\u5904\u7406\u5355\u4e2a\u7ec4\u4ef6",permalink:"/document/zh-cn/Questions/Handle_single_component"},next:{title:"\u600e\u4e48\u6dfb\u52a0\u8bbe\u7f6e\u9762\u677f",permalink:"/document/zh-cn/Questions/How_to_add_setting_panel"}},s={},l=[],f={toc:l};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6709\u65f6\u4f60\u4f1a\u4e22\u5931 ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7684\u8bed\u6cd5\u63d0\u793a\uff0c\u8fd9\u65f6\u5019\u4f60\u53ef\u4ee5\u624b\u52a8\u5bfc\u5165\u7c7b\u578b "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @typedef { import("artplayer/types/artplayer") } Artplayer\n */\n\n/**\n * @type {Artplayer} - \u4e00\u4e2a Artplayer \u5b9e\u4f8b\n */\nconst art1 = {};\n\n/**\n * @param {Artplayer}  art2 - \u4e00\u4e2a Artplayer \u5b9e\u4f8b\n */\nfunction getInstance(art2) {\n  //\n}\n')))}y.isMDXComponent=!0}}]);