/*!
 * artplayer-plugin-iframe.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,r,t,n,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[n]&&s[n],i=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(r,t){if(!i[r]){if(!e[r]){var o="function"==typeof s[n]&&s[n];if(!t&&o)return o(r,!0);if(a)return a(r,!0);if(c&&"string"==typeof r)return c(r);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},p.cache={};var l=i[r]=new u.Module(r);e[r][0].call(l.exports,p,l,l.exports,this)}return i[r].exports;function p(e){var r=p.resolve(e);return!1===r?{}:u(r)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=i,u.parent=a,u.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return s[n]}}),s[n]=u;for(var f=0;f<r.length;f++)u(r[f]);if(t){var l=u(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd&&define((function(){return l}))}}({akNoT:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",(function(){return p}));var o=e("@swc/helpers/src/_async_to_generator.mjs"),s=n.interopDefault(o),a=e("@swc/helpers/src/_class_call_check.mjs"),i=n.interopDefault(a),c=e("@swc/helpers/src/_create_class.mjs"),u=n.interopDefault(c),f=e("@swc/helpers/src/_ts_generator.mjs"),l=n.interopDefault(f),p=function(){"use strict";function e(r){var t=r.iframe,n=r.url;if((0,i.default)(this,e),t instanceof HTMLIFrameElement==!1)throw new Error('"option.iframe" needs to be a HTMLIFrameElement');if("string"!=typeof n)throw new Error('"option.url" needs to be a string');this.url=n,this.$iframe=t,this.promises={},this.injected=!1,this.destroyed=!1,this.messageCallback=function(){return null},this.onMessage=this.onMessage.bind(this),window.addEventListener("message",this.onMessage),this.$iframe.src=this.url}return(0,u.default)(e,[{key:"onMessage",value:function(e){var r=e.data,t=r.type,n=r.data,o=r.id;if("inject"===t)this.injected=!0;this.promises[o]&&("error"===t?this.promises[o].reject(new Error(n)):this.promises[o].resove(n),delete this.promises[o]),this.messageCallback&&this.messageCallback({type:t,data:n})}},{key:"postMessage",value:function(e){var r=e.type,t=e.data,n=this;return new Promise((function(e,o){(function n(){if(this.destroyed)o(new Error("The instance has been destroyed"));else if(this.injected){var s=Date.now();this.promises[s]={resove:e,reject:o},this.$iframe.contentWindow.postMessage({type:r,data:t,id:s},"*")}else setTimeout(n.bind(this),200)}).call(n)}))}},{key:"commit",value:function(e){if("function"!=typeof e)throw new Error('"commit.callback" needs to be a function');var r=e.toString(),t=r.substring(r.indexOf("{")+1,r.lastIndexOf("}"));return this.postMessage({type:"commit",data:t})}},{key:"message",value:function(e){if("function"!=typeof e)throw new Error('"message.callback" needs to be a function');this.messageCallback=e}},{key:"destroy",value:function(){this.destroyed=!0,window.removeEventListener("message",this.onMessage)}}],[{key:"iframe",get:function(){return window.top!==window}},{key:"postMessage",value:function(r){var t=r.type,n=r.data,o=r.id,s=void 0===o?0:o;if(!e.iframe)throw new Error('The "ArtplayerPluginIframe.postMessage" method can only be used in iframe');window.parent.postMessage({type:t,data:n,id:s},"*")}},{key:"onMessage",value:function(r){return(0,s.default)((function(){var t,n,o,s,a,i,c,u;return(0,l.default)(this,(function(f){switch(f.label){case 0:if(!e.iframe)throw new Error('The "ArtplayerPluginIframe.onMessage" method can only be used in iframe');return t=r.data,n=t.type,o=t.data,s=t.id,"commit"===n?[3,1]:[3,7];case 1:return f.trys.push([1,5,,6]),o.match(/\bresolve\((.*?)\)/)?(a="return new Promise(function(resolve){\n".concat(o,"\n})"),[4,new Function(a)()]):[3,3];case 2:return i=f.sent(),e.postMessage({type:"response",data:i,id:s}),[3,4];case 3:c=new Function(o)(),e.postMessage({type:"response",data:c,id:s}),f.label=4;case 4:return[3,6];case 5:throw u=f.sent(),e.postMessage({type:"error",data:u.message,id:s}),u;case 6:case 7:return[3,8];case 8:return[2]}}))}))()}},{key:"inject",value:function(){if(!e.iframe)throw new Error('The "ArtplayerPluginIframe.inject" method can only be used in iframe');e.postMessage({type:"inject"}),window.addEventListener("message",e.onMessage)}}]),e}();"undefined"!=typeof window&&(window.ArtplayerPluginIframe=p)},{"@swc/helpers/src/_async_to_generator.mjs":"9vSoD","@swc/helpers/src/_class_call_check.mjs":"iwG1v","@swc/helpers/src/_create_class.mjs":"6rgu9","@swc/helpers/src/_ts_generator.mjs":"8UZjC","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"9vSoD":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",(function(){return o._}));var o=e("../esm/_async_to_generator.js")},{"../esm/_async_to_generator.js":"eONSn","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],eONSn:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,r,t,n,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var a=e.apply(r,t);function i(e){o(a,n,s,i,c,"next",e)}function c(e){o(a,n,s,i,c,"throw",e)}i(void 0)}))}}n.defineInteropFlag(t),n.export(t,"_async_to_generator",(function(){return s})),n.export(t,"_",(function(){return s}))},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,r,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach((function(t){"default"===t||"__esModule"===t||r.hasOwnProperty(t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})})),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],iwG1v:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",(function(){return o._}));var o=e("../esm/_class_call_check.js")},{"../esm/_class_call_check.js":"9iJMm","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"9iJMm":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}n.defineInteropFlag(t),n.export(t,"_class_call_check",(function(){return o})),n.export(t,"_",(function(){return o}))},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"6rgu9":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",(function(){return o._}));var o=e("../esm/_create_class.js")},{"../esm/_create_class.js":"21IOT","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"21IOT":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}n.defineInteropFlag(t),n.export(t,"_create_class",(function(){return s})),n.export(t,"_",(function(){return s}))},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"8UZjC":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",(function(){return o._}));var o=e("../esm/_ts_generator.js")},{"../esm/_ts_generator.js":"6Xyd0","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"6Xyd0":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"_",(function(){return o.__generator})),n.export(t,"_ts_generator",(function(){return o.__generator}));var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"__extends",(function(){return i})),n.export(t,"__assign",(function(){return c})),n.export(t,"__rest",(function(){return u})),n.export(t,"__decorate",(function(){return f})),n.export(t,"__param",(function(){return l})),n.export(t,"__esDecorate",(function(){return p})),n.export(t,"__runInitializers",(function(){return d})),n.export(t,"__propKey",(function(){return y})),n.export(t,"__setFunctionName",(function(){return h})),n.export(t,"__metadata",(function(){return m})),n.export(t,"__awaiter",(function(){return _})),n.export(t,"__generator",(function(){return v})),n.export(t,"__createBinding",(function(){return w})),n.export(t,"__exportStar",(function(){return b})),n.export(t,"__values",(function(){return j})),n.export(t,"__read",(function(){return g})),n.export(t,"__spread",(function(){return x})),n.export(t,"__spreadArrays",(function(){return O})),n.export(t,"__spreadArray",(function(){return P})),n.export(t,"__await",(function(){return E})),n.export(t,"__asyncGenerator",(function(){return I})),n.export(t,"__asyncDelegator",(function(){return k})),n.export(t,"__asyncValues",(function(){return M})),n.export(t,"__makeTemplateObject",(function(){return T})),n.export(t,"__importStar",(function(){return S})),n.export(t,"__importDefault",(function(){return F})),n.export(t,"__classPrivateFieldGet",(function(){return W})),n.export(t,"__classPrivateFieldSet",(function(){return C})),n.export(t,"__classPrivateFieldIn",(function(){return A}));var o=e("@swc/helpers/src/_type_of.mjs"),s=n.interopDefault(o),a=function(e,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},a(e,r)};function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}var c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)};function u(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function f(e,r,t,n){var o,s=arguments.length,a=s<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(r,t,a):o(r,t))||a);return s>3&&a&&Object.defineProperty(r,t,a),a}function l(e,r){return function(t,n){r(t,n,e)}}function p(e,r,t,n,o,s){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var i,c=n.kind,u="getter"===c?"get":"setter"===c?"set":"value",f=!r&&e?n.static?e:e.prototype:null,l=r||(f?Object.getOwnPropertyDescriptor(f,n.name):{}),p=!1,d=t.length-1;d>=0;d--){var y={};for(var h in n)y[h]="access"===h?{}:n[h];for(var h in n.access)y.access[h]=n.access[h];y.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a(e||null))};var m=(0,t[d])("accessor"===c?{get:l.get,set:l.set}:l[u],y);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(i=a(m.get))&&(l.get=i),(i=a(m.set))&&(l.set=i),(i=a(m.init))&&o.push(i)}else(i=a(m))&&("field"===c?o.push(i):l[u]=i)}f&&Object.defineProperty(f,n.name,l),p=!0}function d(e,r,t){for(var n=arguments.length>2,o=0;o<r.length;o++)t=n?r[o].call(e,t):r[o].call(e);return n?t:void 0}function y(e){return"symbol"===(void 0===e?"undefined":(0,s.default)(e))?e:"".concat(e)}function h(e,r,t){return"symbol"===(void 0===r?"undefined":(0,s.default)(r))&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",r):r})}function m(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)}function _(e,r,t,n){return new(t||(t=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,i)}c((n=n.apply(e,r||[])).next())}))}function v(e,r){var t,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var w=Object.create?function(e,r,t,n){void 0===n&&(n=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,o)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]};function b(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||w(r,e,t)}function j(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,s=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=s.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=s.return)&&t.call(s)}finally{if(o)throw o.error}}return a}function x(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(g(arguments[r]));return e}function O(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),o=0;for(r=0;r<t;r++)for(var s=arguments[r],a=0,i=s.length;a<i;a++,o++)n[o]=s[a];return n}function P(e,r,t){if(t||2===arguments.length)for(var n,o=0,s=r.length;o<s;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function I(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=t.apply(e,r||[]),s=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(r){return new Promise((function(t,n){s.push([e,r,t,n])>1||i(e,r)}))})}function i(e,r){try{(t=o[e](r)).value instanceof E?Promise.resolve(t.value.v).then(c,u):f(s[0][2],t)}catch(e){f(s[0][3],e)}var t}function c(e){i("next",e)}function u(e){i("throw",e)}function f(e,r){e(r),s.shift(),s.length&&i(s[0][0],s[0][1])}}function k(e){var r,t;return r={},n("next"),n("throw",(function(e){throw e})),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=e[n]?function(r){return(t=!t)?{value:E(e[n](r)),done:!1}:o?o(r):r}:o}}function M(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e=j(e),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise((function(n,o){(function(e,r,t,n){Promise.resolve(n).then((function(r){e({value:r,done:t})}),r)})(n,o,(r=e[t](r)).done,r.value)}))}}}function T(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}var D=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};function S(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&w(r,e,t);return D(r,e),r}function F(e){return e&&e.__esModule?e:{default:e}}function W(e,r,t,n){if("a"===t&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof r?e!==r||!n:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?n:"a"===t?n.call(e):n?n.value:r.get(e)}function C(e,r,t,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof r?e!==r||!o:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,t):o?o.value=t:r.set(e,t),t}function A(e,r){if(null===r||"object"!=typeof r&&"function"!=typeof r)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?r===e:e.has(r)}},{"@swc/helpers/src/_type_of.mjs":"78qx0","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"78qx0":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",(function(){return o._}));var o=e("../esm/_type_of.js")},{"../esm/_type_of.js":"felZi","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],felZi:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}n.defineInteropFlag(t),n.export(t,"_type_of",(function(){return o})),n.export(t,"_",(function(){return o}))},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}]},["akNoT"],"akNoT","parcelRequire4dc0");