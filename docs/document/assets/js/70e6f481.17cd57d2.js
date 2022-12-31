"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[12],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9711:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),o=["components"],i={title:"Control Plugin",sidebar_position:5},p=void 0,c={unversionedId:"en/Plugins/control",id:"en/Plugins/control",title:"Control Plugin",description:"Demo",source:"@site/docs/en/Plugins/control.mdx",sourceDirName:"en/Plugins",slug:"/en/Plugins/control",permalink:"/document/en/Plugins/control",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Control Plugin",sidebar_position:5},sidebar:"en",previous:{title:"Hls Quality Plugin",permalink:"/document/en/Plugins/hls-quality"},next:{title:"Add select in the controls",permalink:"/document/en/Questions/Create_selector_in_the_controls"}},u={},s=[{value:"Demo",id:"demo",level:2},{value:"Install",id:"install",level:2},{value:"Install from <code>npm</code>:",id:"install-from-npm",level:3},{value:"Install from <code>yarn</code>:",id:"install-from-yarn",level:3},{value:"Install from <code>script</code>:",id:"install-from-script",level:3},{value:"Use",id:"use",level:2},{value:"Api",id:"api",level:2},{value:"enable",id:"enable",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://artplayer.org/?libs=./uncompiled/artplayer-plugin-control/index.js&example=control"},"View Demo")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("h3",{id:"install-from-npm"},"Install from ",(0,a.kt)("inlineCode",{parentName:"h3"},"npm"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install artplayer-plugin-control\n")),(0,a.kt)("h3",{id:"install-from-yarn"},"Install from ",(0,a.kt)("inlineCode",{parentName:"h3"},"yarn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add artplayer-plugin-control\n")),(0,a.kt)("h3",{id:"install-from-script"},"Install from ",(0,a.kt)("inlineCode",{parentName:"h3"},"script"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- local --\x3e\n<script src="path/to/artplayer-plugin-control.js"><\/script>\n\n\x3c!-- jsdelivr --\x3e\n<script src="https://cdn.jsdelivr.net/npm/artplayer-plugin-control/dist/artplayer-plugin-control.js"><\/script>\n\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/artplayer-plugin-control/dist/artplayer-plugin-control.js"><\/script>\n')),(0,a.kt)("p",null,"Then you can access the plugin function through ",(0,a.kt)("inlineCode",{parentName:"p"},"window.artplayerPluginControl")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("div",{className:"run-code","data-libs":"./uncompiled/artplayer-plugin-control/index.js"},"\u25b6 Run Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    fullscreen: true,\n    fullscreenWeb: true,\n    plugins: [\n        artplayerPluginControl(),\n    ],\n});\n")),(0,a.kt)("h2",{id:"api"},"Api"),(0,a.kt)("h3",{id:"enable"},"enable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Getter/Setter"))),(0,a.kt)("p",null,"Whether to enable the new control UI"),(0,a.kt)("div",{className:"run-code","data-libs":"./uncompiled/artplayer-plugin-control/index.js"},"\u25b6 Run Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    fullscreen: true,\n    fullscreenWeb: true,\n    controls: [\n        {\n            position: 'right',\n            html: '<button type=\"button\">Switcher UI</button>',\n            click: function () {\n                const { enable } = art.plugins.artplayerPluginControl;\n                art.plugins.artplayerPluginControl.enable = !enable;\n            },\n        },\n    ],\n    plugins: [\n        artplayerPluginControl(),\n    ],\n});\n``\n")))}m.isMDXComponent=!0}}]);