/*!
 * artplayer-plugin-iframe.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[n]&&i[n],s=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!s[t]){if(!e[t]){var o="function"==typeof i[n]&&i[n];if(!r&&o)return o(t,!0);if(a)return a(t,!0);if(u&&"string"==typeof t)return u(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},p.cache={};var l=s[t]=new c.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return s[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=a,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return i[n]}}),i[n]=c;for(var f=0;f<t.length;f++)c(t[f]);if(r){var l=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd&&define((function(){return l}))}}({akNoT:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return p}));var o=e("@swc/helpers/src/_async_to_generator.mjs"),i=n.interopDefault(o),a=e("@swc/helpers/src/_class_call_check.mjs"),s=n.interopDefault(a),u=e("@swc/helpers/src/_create_class.mjs"),c=n.interopDefault(u),f=e("@swc/helpers/src/_ts_generator.mjs"),l=n.interopDefault(f),p=function(){"use strict";function e(t){var r=t.iframe,n=t.url;if((0,s.default)(this,e),r instanceof HTMLIFrameElement==!1)throw new Error('"option.iframe" needs to be a HTMLIFrameElement');if("string"!=typeof n)throw new Error('"option.url" needs to be a string');this.url=n,this.$iframe=r,this.promises={},this.injected=!1,this.destroyed=!1,this.messageCallback=function(){return null},this.onMessage=this.onMessage.bind(this),window.addEventListener("message",this.onMessage),this.$iframe.src=this.url}return(0,c.default)(e,[{key:"onMessage",value:function(e){var t=e.data,r=t.type,n=t.data,o=t.id;if("inject"===r)this.injected=!0;this.promises[o]&&("error"===r?this.promises[o].reject(new Error(n)):this.promises[o].resove(n),delete this.promises[o]),this.messageCallback&&this.messageCallback({type:r,data:n})}},{key:"postMessage",value:function(e){var t=e.type,r=e.data,n=this;return new Promise((function(e,o){(function n(){if(this.destroyed)o(new Error("The instance has been destroyed"));else if(this.injected){var i=Date.now();this.promises[i]={resove:e,reject:o},this.$iframe.contentWindow.postMessage({type:t,data:r,id:i},"*")}else setTimeout(n.bind(this),200)}).call(n)}))}},{key:"commit",value:function(e){if("function"!=typeof e)throw new Error('"commit.callback" needs to be a function');var t=e.toString(),r=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"));return this.postMessage({type:"commit",data:r})}},{key:"message",value:function(e){if("function"!=typeof e)throw new Error('"message.callback" needs to be a function');this.messageCallback=e}},{key:"destroy",value:function(){this.destroyed=!0,window.removeEventListener("message",this.onMessage)}}],[{key:"iframe",get:function(){return window.top!==window}},{key:"postMessage",value:function(t){var r=t.type,n=t.data,o=t.id,i=void 0===o?0:o;if(!e.iframe)throw new Error('The "ArtplayerPluginIframe.postMessage" method can only be used in iframe');window.parent.postMessage({type:r,data:n,id:i},"*")}},{key:"onMessage",value:function(t){return(0,i.default)((function(){var r,n,o,i,a,s,u,c;return(0,l.default)(this,(function(f){switch(f.label){case 0:if(!e.iframe)throw new Error('The "ArtplayerPluginIframe.onMessage" method can only be used in iframe');return r=t.data,n=r.type,o=r.data,i=r.id,"commit"===n?[3,1]:[3,7];case 1:return f.trys.push([1,5,,6]),o.match(/\bresolve\((.*?)\)/)?(a="return new Promise(function(resolve){\n".concat(o,"\n})"),[4,new Function(a)()]):[3,3];case 2:return s=f.sent(),e.postMessage({type:"response",data:s,id:i}),[3,4];case 3:u=new Function(o)(),e.postMessage({type:"response",data:u,id:i}),f.label=4;case 4:return[3,6];case 5:throw c=f.sent(),e.postMessage({type:"error",data:c.message,id:i}),c;case 6:case 7:return[3,8];case 8:return[2]}}))}))()}},{key:"inject",value:function(){if(!e.iframe)throw new Error('The "ArtplayerPluginIframe.inject" method can only be used in iframe');e.postMessage({type:"inject"}),window.addEventListener("message",e.onMessage)}}]),e}();"undefined"!=typeof window&&(window.ArtplayerPluginIframe=p)},{"@swc/helpers/src/_async_to_generator.mjs":"9vSoD","@swc/helpers/src/_class_call_check.mjs":"iwG1v","@swc/helpers/src/_create_class.mjs":"6rgu9","@swc/helpers/src/_ts_generator.mjs":"8UZjC","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"9vSoD":[function(e,t,r){function n(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,u,"next",e)}function u(e){n(a,o,i,s,u,"throw",e)}s(void 0)}))}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],iwG1v:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"6rgu9":[function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"8UZjC":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return o.__generator}));var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",(function(){return i})),n.export(r,"__assign",(function(){return a})),n.export(r,"__rest",(function(){return s})),n.export(r,"__decorate",(function(){return u})),n.export(r,"__param",(function(){return c})),n.export(r,"__metadata",(function(){return f})),n.export(r,"__awaiter",(function(){return l})),n.export(r,"__generator",(function(){return p})),n.export(r,"__createBinding",(function(){return d})),n.export(r,"__exportStar",(function(){return y})),n.export(r,"__values",(function(){return h})),n.export(r,"__read",(function(){return m})),n.export(r,"__spread",(function(){return w})),n.export(r,"__spreadArrays",(function(){return v})),n.export(r,"__spreadArray",(function(){return b})),n.export(r,"__await",(function(){return g})),n.export(r,"__asyncGenerator",(function(){return _})),n.export(r,"__asyncDelegator",(function(){return j})),n.export(r,"__asyncValues",(function(){return x})),n.export(r,"__makeTemplateObject",(function(){return O})),n.export(r,"__importStar",(function(){return E})),n.export(r,"__importDefault",(function(){return M})),n.export(r,"__classPrivateFieldGet",(function(){return k})),n.export(r,"__classPrivateFieldSet",(function(){return T})),n.export(r,"__classPrivateFieldIn",(function(){return S}));var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function f(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function p(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function y(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function b(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function _(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=o[e](t)).value instanceof g?Promise.resolve(r.value.v).then(u,c):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function u(e){s("next",e)}function c(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function j(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:g(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return P(t,e),t}function M(e){return e&&e.__esModule?e:{default:e}}function k(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function T(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function S(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}]},["akNoT"],"akNoT","parcelRequire4dc0");