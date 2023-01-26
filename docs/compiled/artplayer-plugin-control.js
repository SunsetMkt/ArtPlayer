/*!
 * artplayer-plugin-control.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(t,r,e,o,n){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof a[o]&&a[o],i=l.cache||{},p="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(r,e){if(!i[r]){if(!t[r]){var n="function"==typeof a[o]&&a[o];if(!e&&n)return n(r,!0);if(l)return l(r,!0);if(p&&"string"==typeof r)return p(r);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(e){var o=t[r][1][e];return null!=o?o:e},d.cache={};var c=i[r]=new s.Module(r);t[r][0].call(c.exports,d,c,c.exports,this)}return i[r].exports;function d(t){var r=d.resolve(t);return!1===r?{}:s(r)}}s.isParcelRequire=!0,s.Module=function(t){this.id=t,this.bundle=s,this.exports={}},s.modules=t,s.cache=i,s.parent=l,s.register=function(r,e){t[r]=[function(t,r){r.exports=e},{}]},Object.defineProperty(s,"root",{get:function(){return a[o]}}),a[o]=s;for(var u=0;u<r.length;u++)s(r[u]);if(e){var c=s(e);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({"16V0T":[function(t,r,e){var o=t("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(e);var n=t("bundle-text:./style.less"),a=o.interopDefault(n);function l(){return t=>{!function(t){const{version:r,utils:{errorHandle:e}}=t.constructor,o=r.split(".").map(Number);e(o[0]+o[1]/100>=4.06,`Artplayer.js@${r} is not compatible the artplayerPluginControl@${l.version}. Please update it to version Artplayer.js@4.6.x`)}(t);const{template:{$bottom:r,$player:e},constructor:{utils:{append:o,secondToTime:n,addClass:a,removeClass:i,hasClass:p,isMobile:s}}}=t;if(s)return;const u="artplayer-plugin-control";a(e,u);const c=o(r,'<div class="apa-control-current"></div>'),d=o(r,'<div class="apa-control-duration"></div>'),f=["video:loadedmetadata","video:timeupdate","video:progress"];for(let r=0;r<f.length;r++)t.on(f[r],(()=>{c.innerText=n(t.currentTime),d.innerText=n(t.duration)}));return{name:"artplayerPluginControl",get enable(){return p(e,u)},set enable(t){t?a(e,u):i(e,u)}}}}if(e.default=l,l.env="production",l.version="1.0.0",l.build="2023-01-26 15:27:05","undefined"!=typeof document&&!document.getElementById("artplayer-plugin-control")){const t=document.createElement("style");t.id="artplayer-plugin-control",t.textContent=a.default,document.head.appendChild(t)}"undefined"!=typeof window&&(window.artplayerPluginControl=l)},{"bundle-text:./style.less":"klrMD","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],klrMD:[function(t,r,e){r.exports=".artplayer-plugin-control .art-bottom{height:68px;min-width:400px;max-width:600px;user-select:none;-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);pointer-events:auto;background-color:#000000b3;background-image:none;border-radius:10px;flex-direction:column;align-items:center;padding:0;font-size:13px;display:flex;position:absolute;bottom:10px;left:50%;transform:translate(-50%);box-shadow:0 10px 15px -3px #0003,0 4px 6px -4px #0003}.artplayer-plugin-control .art-bottom .art-progress{width:65%;justify-content:space-between;align-items:center;gap:10px;display:flex}.artplayer-plugin-control .art-bottom .art-progress .art-control-thumbnails{bottom:35px}.artplayer-plugin-control .art-bottom .art-progress .art-control-progress{width:100%}.artplayer-plugin-control .art-bottom .art-progress .art-control-progress .art-control-progress-inner,.artplayer-plugin-control .art-bottom .art-progress .art-control-progress .art-progress-loaded,.artplayer-plugin-control .art-bottom .art-progress .art-control-progress .art-progress-played{border-radius:5px}.artplayer-plugin-control .art-bottom .art-progress .art-progress-tip{top:-40px!important}.artplayer-plugin-control .art-bottom .art-controls{width:100%;height:auto;flex:1;padding:0 5px}.artplayer-plugin-control .art-bottom .art-controls .art-control-time,.artplayer-plugin-control .art-bottom .art-controls .art-controls-center{display:none}.artplayer-plugin-control .art-bottom .art-controls .art-volume-panel{width:60px!important}.artplayer-plugin-control .art-bottom .art-selector-list{background-color:#000c!important}.artplayer-plugin-control .art-bottom .apa-control-current,.artplayer-plugin-control .art-bottom .apa-control-duration{width:17.5%;justify-content:center;line-height:1;display:flex;position:absolute;top:10px}.artplayer-plugin-control .art-bottom .apa-control-current{left:0}.artplayer-plugin-control .art-bottom .apa-control-duration{right:0}.artplayer-plugin-control .art-settings{bottom:85px}.artplayer-plugin-control.art-control-show .art-subtitle{bottom:80px}.apa-control-current,.apa-control-duration{display:none}"},{}],"9pCYc":[function(t,r,e){e.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},e.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.exportAll=function(t,r){return Object.keys(t).forEach((function(e){"default"===e||"__esModule"===e||r.hasOwnProperty(e)||Object.defineProperty(r,e,{enumerable:!0,get:function(){return t[e]}})})),r},e.export=function(t,r,e){Object.defineProperty(t,r,{enumerable:!0,get:e})}},{}]},["16V0T"],"16V0T","parcelRequire4dc0");