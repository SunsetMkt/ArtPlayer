/*!
 * artplayer-plugin-vtt-thumbnail.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[n]&&i[n],a=u.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,r){if(!a[t]){if(!e[t]){var o="function"==typeof i[n]&&i[n];if(!r&&o)return o(t,!0);if(u)return u(t,!0);if(c&&"string"==typeof t)return c(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},p.cache={};var s=a[t]=new l.Module(t);e[t][0].call(s.exports,p,s,s.exports,this)}return a[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=u,l.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return i[n]}}),i[n]=l;for(var f=0;f<t.length;f++)l(t[f]);if(r){var s=l(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd&&define((function(){return s}))}}({"2Oq25":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("@swc/helpers/src/_async_to_generator.mjs"),i=n.interopDefault(o),u=e("@swc/helpers/src/_ts_generator.mjs"),a=n.interopDefault(u),c=e("./getVttArray"),l=n.interopDefault(c);function f(e){return t=(0,i.default)((function(t){var r,n,o,u,c,f,s;return(0,a.default)(this,(function(p){switch(p.label){case 0:return r=t.constructor,n=r.utils,o=n.setStyle,u=n.clamp,c=t.template.$progress,f=t.events.proxy,[4,(0,l.default)(e.vtt)];case 1:return s=p.sent(),t.controls.add({name:"thumbnails",position:"top",index:20,style:e.style||{},mounted:function(e){f(c,"mousemove",function(){var r=(0,i.default)((function(r){var n,i,l,f;return(0,a.default)(this,(function(a){return o(e,"display","block"),n=function(e,t){var r=e.template.$progress,n=r.getBoundingClientRect().left,o=u(t.pageX-n,0,r.clientWidth);return{width:o,second:o/r.clientWidth*e.duration}}(t,r),i=n.second,l=n.width,(f=s.find((function(e){return i>=e.start&&i<=e.end})))?(o(e,"backgroundImage","url(".concat(f.url,")")),o(e,"height","".concat(f.h,"px")),o(e,"width","".concat(f.w,"px")),o(e,"backgroundPosition","-".concat(f.x,"px -").concat(f.y,"px")),l<=f.w/2?o(e,"left",0):l>c.clientWidth-f.w/2?o(e,"left","".concat(c.clientWidth-f.w,"px")):o(e,"left","".concat(l-f.w/2,"px")),[2]):[2,o(e,"display","none")]}))}));return function(e){return r.apply(this,arguments)}}()),f(c,"mouseleave",(function(){o(e,"display","none")})),t.on("hover",(function(t){t||o(e,"display","none")}))}}),[2,{name:"artplayerPluginVttThumbnail"}]}}))})),function(e){return t.apply(this,arguments)};var t}r.default=f,"undefined"!=typeof window&&(window.artplayerPluginVttThumbnail=f)},{"@swc/helpers/src/_async_to_generator.mjs":"9vSoD","@swc/helpers/src/_ts_generator.mjs":"8UZjC","./getVttArray":"iUpz3","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"9vSoD":[function(e,t,r){function n(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,o)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var u=e.apply(t,r);function a(e){n(u,o,i,a,c,"next",e)}function c(e){n(u,o,i,a,c,"throw",e)}a(void 0)}))}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"8UZjC":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return o.__generator}));var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",(function(){return i})),n.export(r,"__assign",(function(){return u})),n.export(r,"__rest",(function(){return a})),n.export(r,"__decorate",(function(){return c})),n.export(r,"__param",(function(){return l})),n.export(r,"__metadata",(function(){return f})),n.export(r,"__awaiter",(function(){return s})),n.export(r,"__generator",(function(){return p})),n.export(r,"__createBinding",(function(){return d})),n.export(r,"__exportStar",(function(){return h})),n.export(r,"__values",(function(){return y})),n.export(r,"__read",(function(){return v})),n.export(r,"__spread",(function(){return m})),n.export(r,"__spreadArrays",(function(){return b})),n.export(r,"__spreadArray",(function(){return w})),n.export(r,"__await",(function(){return _})),n.export(r,"__asyncGenerator",(function(){return g})),n.export(r,"__asyncDelegator",(function(){return j})),n.export(r,"__asyncValues",(function(){return x})),n.export(r,"__makeTemplateObject",(function(){return O})),n.export(r,"__importStar",(function(){return S})),n.export(r,"__importDefault",(function(){return D})),n.export(r,"__classPrivateFieldGet",(function(){return T})),n.export(r,"__classPrivateFieldSet",(function(){return I})),n.export(r,"__classPrivateFieldIn",(function(){return E}));var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,r,u):o(t,r))||u);return i>3&&u&&Object.defineProperty(t,r,u),u}function l(e,t){return function(r,n){t(r,n,e)}}function f(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))}function p(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function h(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)n[o]=i[u];return n}function w(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function g(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=o[e](t)).value instanceof _?Promise.resolve(r.value.v).then(c,l):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function c(e){a("next",e)}function l(e){a("throw",e)}function f(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function j(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:_(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=y(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return P(t,e),t}function D(e){return e&&e.__esModule?e:{default:e}}function T(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function I(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function E(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iUpz3:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("@swc/helpers/src/_async_to_generator.mjs"),i=n.interopDefault(o),u=e("@swc/helpers/src/_ts_generator.mjs"),a=n.interopDefault(u);function c(e){var t,r,n,o=e.split("."),i=o[0].split(":")||[],u=(t=o[1]||"0",r=3,n="0",t.length>r?String(t):((r-=t.length)>n.length&&(n+=n.repeat(r/n.length)),String(t)+n.slice(0,r))),a=Number(u)/1e3;return 3600*Number(i[i.length-3]||0)+60*Number(i[i.length-2]||0)+Number(i[i.length-1]||0)+a}function l(){return l=(0,i.default)((function(){var e,t,r,n,o,i,u,l,f,s,p,d,h,y,v,m,b,w,_,g=arguments;return(0,a.default)(this,(function(a){switch(a.label){case 0:return e=g.length>0&&void 0!==g[0]?g[0]:"",[4,fetch(e)];case 1:return[4,a.sent().text()];case 2:for(t=a.sent(),r=t.split(/[\n\r]/gm).filter((function(e){return e.trim()})),n=[],o=1;o<r.length;o+=2)if(i=r[o],(u=r[o+1]).trim()){for(l=/((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)(?: ?--> ?)((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)/,f=i.match(l),s=/(.*)#(\w{4})=(.*)/i,p=u.match(s),d=Math.floor(c(f[1])),h=Math.floor(c(f[2])),y=p[1],/^\/|((https?|ftp|file):\/\/)/i.test(y)||((v=e.split("/")).pop(),v.push(y),y=v.join("/")),m={start:d,end:h,url:y},b=p[2].split(""),w=p[3].split(","),_=0;_<b.length;_++)m[b[_]]=w[_];n.push(m)}return[2,n]}}))})),l.apply(this,arguments)}r.default=function(){return l.apply(this,arguments)}},{"@swc/helpers/src/_async_to_generator.mjs":"9vSoD","@swc/helpers/src/_ts_generator.mjs":"8UZjC","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}]},["2Oq25"],"2Oq25","parcelRequire4dc0");