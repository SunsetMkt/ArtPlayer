/*!
 * artplayer-plugin-libass.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,n,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[n]&&s[n],i=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!i[t]){if(!e[t]){var o="function"==typeof s[n]&&s[n];if(!r&&o)return o(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var f=i[t]=new c.Module(t);e[t][0].call(f.exports,d,f,f.exports,this)}return i[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=i,c.parent=a,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return s[n]}}),s[n]=c;for(var u=0;u<t.length;u++)c(t[u]);if(r){var f=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define((function(){return f}))}}({"7Csdv":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./adapter"),s=n.interopDefault(o);function a(e){return function(t){var r=new(0,s.default)(t,e);return{name:"artplayerPluginLibass",libass:r.libass,visible:r.visible,init:r.init.bind(r),switch:r.switch.bind(r),show:r.show.bind(r),hide:r.hide.bind(r),destroy:r.destroy.bind(r)}}}r.default=a,"undefined"!=typeof window&&(window.artplayerPluginLibass=a)},{"./adapter":"9NihZ","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"9NihZ":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return S}));var o=e("@swc/helpers/src/_async_to_generator.mjs"),s=n.interopDefault(o),a=e("@swc/helpers/src/_class_call_check.mjs"),i=n.interopDefault(a),l=e("@swc/helpers/src/_class_private_method_get.mjs"),c=n.interopDefault(l),u=e("@swc/helpers/src/_class_private_method_init.mjs"),f=n.interopDefault(u),d=e("@swc/helpers/src/_create_class.mjs"),p=n.interopDefault(d),h=e("@swc/helpers/src/_object_spread.mjs"),v=n.interopDefault(h),m=e("@swc/helpers/src/_object_spread_props.mjs"),y=n.interopDefault(m),b=e("@swc/helpers/src/_sliced_to_array.mjs"),w=n.interopDefault(b),g=e("@swc/helpers/src/_ts_generator.mjs"),j=n.interopDefault(g),_=e("libass-wasm"),k=n.interopDefault(_),x="[Script Info]\nScriptType: v4.00+",O=new WeakSet,E=new WeakSet,T=new WeakSet,M=new WeakSet,P=new WeakSet,L=new WeakSet,F=new WeakSet,C=new WeakSet,S=function(){"use strict";function e(t,r){(0,i.default)(this,e),(0,f.default)(this,O),(0,f.default)(this,E),(0,f.default)(this,T),(0,f.default)(this,M),(0,f.default)(this,P),(0,f.default)(this,L),(0,f.default)(this,F),(0,f.default)(this,C);var n=t.constructor,o=t.template;this.art=t,this.$video=o.$video,this.$webvtt=o.$subtitle,this.utils=n.utils,this.libass=null,t.once("ready",this.init.bind(this,r))}return(0,p.default)(e,[{key:"init",value:function(e){var t=this;return(0,s.default)((function(){var r,n,o,s;return(0,j.default)(this,(function(a){switch(a.label){case 0:return(0,c.default)(t,C,B).call(t),[4,(0,c.default)(t,O,A).call(t,e)];case 1:return a.sent(),(0,c.default)(t,E,R).call(t),t.art.emit("artplayerPluginLibass:init",t),(s=null===(r=t.art)||void 0===r||null===(n=r.option)||void 0===n||null===(o=n.subtitle)||void 0===o?void 0:o.url)&&"ass"===t.utils.getExt(s)&&t.switch(s),[2]}}))}))()}},{key:"switch",value:function(e){this.art.emit("artplayerPluginLibass:switch",e),e&&"ass"===this.utils.getExt(e)?(this.currentType="ass",this.libass.freeTrack(),this.libass.setTrackByUrl((0,c.default)(this,P,U).call(this,e)),this.visible=this.art.subtitle.show):(this.currentType="webvtt",this.hide(),this.libass.freeTrack())}},{key:"setVisibility",value:function(e){this.visible=e}},{key:"setOffset",value:function(e){this.timeOffset=e}},{key:"active",get:function(){return"ass"===this.currentType}},{key:"visible",get:function(){return!!this.libass&&"none"!==this.libass.canvasParent.style.display},set:function(e){this.art.emit("artplayerPluginLibass:visible",e),(0,c.default)(this,M,D).call(this,!this.active),this.libass.canvasParent&&(this.libass.canvasParent.style.display=e?"block":"none",e&&this.libass.resize())}},{key:"timeOffset",get:function(){return this.libass.timeOffset},set:function(e){this.art.emit("artplayerPluginLibass:timeOffset",e),this.libass.timeOffset=e}},{key:"show",value:function(){this.visible=!0}},{key:"hide",value:function(){this.visible=!1}},{key:"destroy",value:function(){this.art.emit("artplayerPluginLibass:destroy"),(0,c.default)(this,T,W).call(this),this.libass.dispose(),URL.revokeObjectURL(this.workerScriptUrl),this.libass=null}}]),e}();function A(){return I.apply(this,arguments)}function I(){return I=(0,s.default)((function(){var e,t,r,n,o,s,a,i=arguments;return(0,j.default)(this,(function(l){switch(l.label){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},t=this,e.fallbackFont?(e.workerUrl||(e.workerUrl="https://cdnjs.cloudflare.com/ajax/libs/libass-wasm/4.1.0/js/subtitles-octopus-worker.js"),e.availableFonts&&(e.availableFonts=Object.entries(e.availableFonts).reduce((function(e,r){var n=(0,w.default)(r,2),o=n[0],s=n[1];return e[o]=(0,c.default)(t,P,U).call(t,s),e}),{})),n=this,o=k.default.bind,s=[(0,v.default)({subContent:x,video:this.$video},e)],a={},[4,(0,c.default)(this,F,H).call(this,e)]):[2,this.utils.errorHandle(e.fallbackFont,"artplayerPluginLibass: fallbackFont is required")];case 1:return n.libass=new(o.apply(k.default,[void 0,y.default.apply(void 0,s.concat([(a.workerUrl=l.sent(),a.fallbackFont=(0,c.default)(this,P,U).call(this,e.fallbackFont),a.fonts=null===(r=e.fonts)||void 0===r?void 0:r.map((function(e){return(0,c.default)(t,P,U).call(t,e)})),a)]))])),this.libass.canvasParent.className="artplayer-plugin-libass",this.libass.canvasParent.style.cssText="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            user-select: none;\n            pointer-events: none;\n            z-index: 20;",[2]}}))})),I.apply(this,arguments)}function R(){this.switchHandler=this.switch.bind(this),this.visibleHandler=this.setVisibility.bind(this),this.offsetHandler=this.setOffset.bind(this),this.art.on("subtitle",this.visibleHandler),this.art.on("subtitleLoad",this.switchHandler),this.art.on("subtitleOffset",this.offsetHandler),this.art.once("destroy",this.destroy.bind(this))}function W(){this.art.off("subtitle",this.visibleHandler),this.art.off("subtitleLoad",this.switchHandler),this.art.off("subtitleOffset",this.offsetHandler)}function D(e){this.$webvtt.style.visibility=e?"visible":"hidden"}function U(e){return(0,c.default)(this,L,z).call(this,e)?e:new URL(e,document.baseURI).toString()}function z(e){return/^https?:\/\//.test(e)}function H(e){var t=e.workerUrl,r=e.wasmUrl,n=this;return new Promise((function(e){fetch(t).then((function(e){return e.text()})).then((function(o){var s=o;s=s.replace(/wasmBinaryFile\s*=\s*"(subtitles-octopus-worker\.wasm)"/g,(function(e,o){return r=r?(0,c.default)(n,P,U).call(n,r):new URL(o,t).toString(),'wasmBinaryFile = "'.concat(r,'"')}));var a=new Blob([s],{type:"text/javascript"});e(URL.createObjectURL(a))}))}))}function B(){var e=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){var t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));t instanceof WebAssembly.Module&&(e=new WebAssembly.Instance(t)instanceof WebAssembly.Instance)}}catch(e){}this.utils.errorHandle(e,"Browser does not support WebAssembly")}},{"@swc/helpers/src/_async_to_generator.mjs":"2p9xV","@swc/helpers/src/_class_call_check.mjs":"lRst4","@swc/helpers/src/_class_private_method_get.mjs":"2meGs","@swc/helpers/src/_class_private_method_init.mjs":"gdwvz","@swc/helpers/src/_create_class.mjs":"kHKtY","@swc/helpers/src/_object_spread.mjs":"baPRy","@swc/helpers/src/_object_spread_props.mjs":"kftCS","@swc/helpers/src/_sliced_to_array.mjs":"eomev","@swc/helpers/src/_ts_generator.mjs":"5mlAy","libass-wasm":"gKNB2","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"2p9xV":[function(e,t,r){function n(e,t,r,n,o,s,a){try{var i=e[s](a),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,o)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var a=e.apply(t,r);function i(e){n(a,o,s,i,l,"next",e)}function l(e){n(a,o,s,i,l,"throw",e)}i(void 0)}))}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"8MTyn":[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],lRst4:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"2meGs":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],gdwvz:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_check_private_redeclaration.mjs"),s=n.interopDefault(o);r.default=function(e,t){(0,s.default)(e,t),t.add(e)}},{"./_check_private_redeclaration.mjs":"gmvUY","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],gmvUY:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],kHKtY:[function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],baPRy:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_define_property.mjs"),s=n.interopDefault(o);r.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){(0,s.default)(e,t,r[t])}))}return e}},{"./_define_property.mjs":"fAVM2","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],fAVM2:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],kftCS:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],eomev:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_array_with_holes.mjs"),s=n.interopDefault(o),a=e("./_iterable_to_array.mjs"),i=n.interopDefault(a),l=e("./_non_iterable_rest.mjs"),c=n.interopDefault(l),u=e("./_unsupported_iterable_to_array.mjs"),f=n.interopDefault(u);r.default=function(e,t){return(0,s.default)(e)||(0,i.default)(e,t)||(0,f.default)(e,t)||(0,c.default)()}},{"./_array_with_holes.mjs":"dKJk0","./_iterable_to_array.mjs":"iczW7","./_non_iterable_rest.mjs":"2iYgy","./_unsupported_iterable_to_array.mjs":"idAo4","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],dKJk0:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){if(Array.isArray(e))return e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],iczW7:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"2iYgy":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],idAo4:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_array_like_to_array.mjs"),s=n.interopDefault(o);r.default=function(e,t){if(e){if("string"==typeof e)return(0,s.default)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,s.default)(e,t):void 0}}},{"./_array_like_to_array.mjs":"7Feax","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"7Feax":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"5mlAy":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",(function(){return o.__generator}));var o=e("tslib")},{tslib:"7bays","@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],"7bays":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",(function(){return s})),n.export(r,"__assign",(function(){return a})),n.export(r,"__rest",(function(){return i})),n.export(r,"__decorate",(function(){return l})),n.export(r,"__param",(function(){return c})),n.export(r,"__metadata",(function(){return u})),n.export(r,"__awaiter",(function(){return f})),n.export(r,"__generator",(function(){return d})),n.export(r,"__createBinding",(function(){return p})),n.export(r,"__exportStar",(function(){return h})),n.export(r,"__values",(function(){return v})),n.export(r,"__read",(function(){return m})),n.export(r,"__spread",(function(){return y})),n.export(r,"__spreadArrays",(function(){return b})),n.export(r,"__spreadArray",(function(){return w})),n.export(r,"__await",(function(){return g})),n.export(r,"__asyncGenerator",(function(){return j})),n.export(r,"__asyncDelegator",(function(){return _})),n.export(r,"__asyncValues",(function(){return k})),n.export(r,"__makeTemplateObject",(function(){return x})),n.export(r,"__importStar",(function(){return E})),n.export(r,"__importDefault",(function(){return T})),n.export(r,"__classPrivateFieldGet",(function(){return M})),n.export(r,"__classPrivateFieldSet",(function(){return P})),n.export(r,"__classPrivateFieldIn",(function(){return L}));var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)};function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function l(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{l(n.next(e))}catch(e){s(e)}}function i(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}l((n=n.apply(e,t||[])).next())}))}function d(e,t){var r,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var p=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function h(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||p(t,e,r)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,s=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var s=arguments[t],a=0,i=s.length;a<i;a++,o++)n[o]=s[a];return n}function w(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function j(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),s=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){s.push([e,t,r,n])>1||i(e,t)}))})}function i(e,t){try{(r=o[e](t)).value instanceof g?Promise.resolve(r.value.v).then(l,c):u(s[0][2],r)}catch(e){u(s[0][3],e)}var r}function l(e){i("next",e)}function c(e){i("throw",e)}function u(e,t){e(t),s.shift(),s.length&&i(s[0][0],s[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:g(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function k(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=v(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(t,e,r);return O(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function M(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function P(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function L(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"8MTyn"}],gKNB2:[function(e,t,r){"use strict";"function"==typeof SubtitlesOctopusOnLoad&&SubtitlesOctopusOnLoad(),t.exports&&(t.exports=function(e){var t=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){var r=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));r instanceof WebAssembly.Module&&(t=new WebAssembly.Instance(r)instanceof WebAssembly.Instance)}}catch(e){}console.log("WebAssembly support detected: "+(t?"yes":"no"));var n=this;function o(){n.setCurrentTime(n.video.currentTime+n.timeOffset)}function s(){n.setIsPaused(!1,n.video.currentTime+n.timeOffset)}function a(){n.setIsPaused(!0,n.video.currentTime+n.timeOffset)}function i(){n.video.removeEventListener("timeupdate",o,!1)}function l(){n.video.addEventListener("timeupdate",o,!1);var e=n.video.currentTime+n.timeOffset;n.setCurrentTime(e)}function c(){n.setRate(n.video.playbackRate)}function u(){n.setIsPaused(!0,n.video.currentTime+n.timeOffset)}function f(e){e.target.removeEventListener(e.type,f,!1),n.resize()}function d(){var e=n.renderFramesData,t=performance.now();n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height);for(var r=0;r<e.canvases.length;r++){var o=e.canvases[r];n.bufferCanvas.width=o.w,n.bufferCanvas.height=o.h;var s=new Uint8ClampedArray(o.buffer);if(n.hasAlphaBug)for(var a=3;a<s.length;a+=4)s[a]=s[a]>=1?s[a]:1;var i=new ImageData(s,o.w,o.h);n.bufferCanvasCtx.putImageData(i,0,0),n.ctx.drawImage(n.bufferCanvas,o.x,o.y)}if(n.debug){var l=Math.round(performance.now()-t),c=e.blendTime;void 0!==c?console.log("render: "+Math.round(e.spentTime-c)+" ms, blend: "+Math.round(c)+" ms, draw: "+l+" ms; TOTAL="+Math.round(e.spentTime+l)+" ms"):console.log(Math.round(e.spentTime)+" ms (+ "+l+" ms draw)"),n.renderStart=performance.now()}}function p(){var e=n.renderFramesData,t=performance.now();n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height);for(var r=0;r<e.bitmaps.length;r++){var o=e.bitmaps[r];n.ctx.drawImage(o.bitmap,o.x,o.y)}if(n.debug){var s=Math.round(performance.now()-t);console.log(e.bitmaps.length+" bitmaps, libass: "+Math.round(e.libassTime)+"ms, decode: "+Math.round(e.decodeTime)+"ms, draw: "+s+"ms"),n.renderStart=performance.now()}}n.canvas=e.canvas,n.renderMode=e.renderMode||(e.lossyRender?"lossy":"wasm-blend"),n.libassMemoryLimit=e.libassMemoryLimit||0,n.libassGlyphLimit=e.libassGlyphLimit||0,n.targetFps=e.targetFps||24,n.prescaleFactor=e.prescaleFactor||1,n.prescaleHeightLimit=e.prescaleHeightLimit||1080,n.maxRenderHeight=e.maxRenderHeight||0,n.dropAllAnimations=e.dropAllAnimations||!1,n.isOurCanvas=!1,n.video=e.video,n.canvasParent=null,n.fonts=e.fonts||[],n.availableFonts=e.availableFonts||[],n.fallbackFont=e.fallbackFont||"default.woff2",n.lazyFileLoading=e.lazyFileLoading||!1,n.onReadyEvent=e.onReady,n.workerUrl=t?e.workerUrl||"subtitles-octopus-worker.js":e.legacyWorkerUrl||"subtitles-octopus-worker-legacy.js",n.subUrl=e.subUrl,n.subContent=e.subContent||null,n.onErrorEvent=e.onError,n.debug=e.debug||!1,n.lastRenderTime=0,n.pixelRatio=window.devicePixelRatio||1,n.timeOffset=e.timeOffset||0,n.hasAlphaBug=!1,function(){if("function"==typeof ImageData.prototype.constructor)try{return void new window.ImageData(new Uint8ClampedArray([0,0,0,0]),1,1)}catch(e){console.log("detected that ImageData is not constructable despite browser saying so")}var e=document.createElement("canvas").getContext("2d");window.ImageData=function(){var t=0;if(arguments[0]instanceof Uint8ClampedArray)var r=arguments[t++];var n=arguments[t++],o=arguments[t],s=e.createImageData(n,o);return r&&s.data.set(r),s}}(),n.workerError=function(e){if(console.error("Worker error: ",e),n.onErrorEvent&&n.onErrorEvent(e),!n.debug)throw n.dispose(),new Error("Worker error: "+e)},n.init=function(){window.Worker?(n.worker||(n.worker=new Worker(n.workerUrl),n.worker.addEventListener("message",n.onWorkerMessage),n.worker.addEventListener("error",n.workerError)),n.workerActive=!1,n.createCanvas(),n.setVideo(e.video),n.setSubUrl(e.subUrl),n.worker.postMessage({target:"worker-init",width:n.canvas.width,height:n.canvas.height,URL:document.URL,currentScript:n.workerUrl,preMain:!0,renderMode:n.renderMode,subUrl:n.subUrl,subContent:n.subContent,fonts:n.fonts,availableFonts:n.availableFonts,fallbackFont:n.fallbackFont,lazyFileLoading:n.lazyFileLoading,debug:n.debug,targetFps:n.targetFps,libassMemoryLimit:n.libassMemoryLimit,libassGlyphLimit:n.libassGlyphLimit,dropAllAnimations:n.dropAllAnimations})):n.workerError("worker not supported")},n.createCanvas=function(){n.canvas||(n.video?(n.isOurCanvas=!0,n.canvas=document.createElement("canvas"),n.canvas.className="libassjs-canvas",n.canvas.style.display="none",n.canvasParent=document.createElement("div"),n.canvasParent.className="libassjs-canvas-parent",n.canvasParent.appendChild(n.canvas),n.video.nextSibling?n.video.parentNode.insertBefore(n.canvasParent,n.video.nextSibling):n.video.parentNode.appendChild(n.canvasParent)):n.canvas||n.workerError("Don't know where to render: you should give video or canvas in options.")),n.ctx=n.canvas.getContext("2d"),n.bufferCanvas=document.createElement("canvas"),n.bufferCanvasCtx=n.bufferCanvas.getContext("2d"),n.bufferCanvas.width=1,n.bufferCanvas.height=1;var e=new Uint8ClampedArray([0,255,0,0]),t=new ImageData(e,1,1);n.bufferCanvasCtx.clearRect(0,0,1,1),n.ctx.clearRect(0,0,1,1);var r=n.ctx.getImageData(0,0,1,1).data;n.bufferCanvasCtx.putImageData(t,0,0),n.ctx.drawImage(n.bufferCanvas,0,0);var o=n.ctx.getImageData(0,0,1,1).data;n.hasAlphaBug=r[1]!=o[1],n.hasAlphaBug&&console.log("Detected a browser having issue with transparent pixels, applying workaround")},n.setVideo=function(e){n.video=e,n.video&&(n.video.addEventListener("timeupdate",o,!1),n.video.addEventListener("playing",s,!1),n.video.addEventListener("pause",a,!1),n.video.addEventListener("seeking",i,!1),n.video.addEventListener("seeked",l,!1),n.video.addEventListener("ratechange",c,!1),n.video.addEventListener("waiting",u,!1),document.addEventListener("fullscreenchange",n.resizeWithTimeout,!1),document.addEventListener("mozfullscreenchange",n.resizeWithTimeout,!1),document.addEventListener("webkitfullscreenchange",n.resizeWithTimeout,!1),document.addEventListener("msfullscreenchange",n.resizeWithTimeout,!1),window.addEventListener("resize",n.resizeWithTimeout,!1),"undefined"!=typeof ResizeObserver&&(n.ro=new ResizeObserver(n.resizeWithTimeout),n.ro.observe(n.video)),n.video.videoWidth>0?n.resize():n.video.addEventListener("loadedmetadata",f,!1))},n.getVideoPosition=function(){var e=n.video.videoWidth/n.video.videoHeight,t=n.video.offsetWidth,r=n.video.offsetHeight,o=t,s=r;return t/r>e?o=Math.floor(r*e):s=Math.floor(t/e),{width:o,height:s,x:(t-o)/2,y:(r-s)/2}},n.setSubUrl=function(e){n.subUrl=e},n.renderFrameData=null,n.workerActive=!1,n.frameId=0,n.onWorkerMessage=function(e){n.workerActive||(n.workerActive=!0,n.onReadyEvent&&n.onReadyEvent());var t=e.data;switch(t.target){case"stdout":console.log(t.content);break;case"console-log":console.log.apply(console,JSON.parse(t.content));break;case"console-debug":console.debug.apply(console,JSON.parse(t.content));break;case"console-info":console.info.apply(console,JSON.parse(t.content));break;case"console-warn":console.warn.apply(console,JSON.parse(t.content));break;case"console-error":console.error.apply(console,JSON.parse(t.content));break;case"stderr":console.error(t.content);break;case"window":window[t.method]();break;case"canvas":switch(t.op){case"getContext":n.ctx=n.canvas.getContext(t.type,t.attributes);break;case"resize":n.resize(t.width,t.height);break;case"renderCanvas":n.lastRenderTime<t.time&&(n.lastRenderTime=t.time,n.renderFramesData=t,window.requestAnimationFrame(d));break;case"renderFastCanvas":n.lastRenderTime<t.time&&(n.lastRenderTime=t.time,n.renderFramesData=t,window.requestAnimationFrame(p));break;case"setObjectProperty":n.canvas[t.object][t.property]=t.value;break;default:throw"eh?"}break;case"tick":n.frameId=t.id,n.worker.postMessage({target:"tock",id:n.frameId});break;case"custom":if(!n.onCustomMessage)throw"Custom message received but client onCustomMessage not implemented.";n.onCustomMessage(e);break;case"setimmediate":n.worker.postMessage({target:"setimmediate"});break;case"get-events":case"get-styles":case"ready":break;default:throw"what? "+t.target}},n.resize=function(e,t,r,o){var s=null;if(r=r||0,o=o||0,(!e||!t)&&n.video){var a=function(e,t){var r=n.prescaleFactor<=0?1:n.prescaleFactor;if(t<=0||e<=0)e=0,t=0;else{var o=r<1?-1:1,s=t;o*s*r<=o*n.prescaleHeightLimit?s*=r:o*s<o*n.prescaleHeightLimit&&(s=n.prescaleHeightLimit),n.maxRenderHeight>0&&s>n.maxRenderHeight&&(s=n.maxRenderHeight),e*=s/t,t=s}return{width:e,height:t}}((s=n.getVideoPosition()).width*n.pixelRatio,s.height*n.pixelRatio);e=a.width,t=a.height;var i=n.canvasParent.getBoundingClientRect().top-n.video.getBoundingClientRect().top;r=s.y-i,o=s.x}e&&t?n.canvas.width==e&&n.canvas.height==t&&n.canvas.style.top==r&&n.canvas.style.left==o||(n.canvas.width=e,n.canvas.height=t,null!=s&&(n.canvasParent.style.position="relative",n.canvas.style.display="block",n.canvas.style.position="absolute",n.canvas.style.width=s.width+"px",n.canvas.style.height=s.height+"px",n.canvas.style.top=r+"px",n.canvas.style.left=o+"px",n.canvas.style.pointerEvents="none"),n.worker.postMessage({target:"canvas",width:n.canvas.width,height:n.canvas.height})):n.video||console.error("width or height is 0. You should specify width & height for resize.")},n.resizeWithTimeout=function(){n.resize(),setTimeout(n.resize,100)},n.runBenchmark=function(){n.worker.postMessage({target:"runBenchmark"})},n.customMessage=function(e,t){t=t||{},n.worker.postMessage({target:"custom",userData:e,preMain:t.preMain})},n.setCurrentTime=function(e){n.worker.postMessage({target:"video",currentTime:e})},n.setTrackByUrl=function(e){n.worker.postMessage({target:"set-track-by-url",url:e})},n.setTrack=function(e){n.worker.postMessage({target:"set-track",content:e})},n.freeTrack=function(e){n.worker.postMessage({target:"free-track"})},n.render=n.setCurrentTime,n.setIsPaused=function(e,t){n.worker.postMessage({target:"video",isPaused:e,currentTime:t})},n.setRate=function(e){n.worker.postMessage({target:"video",rate:e})},n.dispose=function(){n.worker.postMessage({target:"destroy"}),n.worker.terminate(),n.worker.removeEventListener("message",n.onWorkerMessage),n.worker.removeEventListener("error",n.workerError),n.workerActive=!1,n.worker=null,n.video&&(n.video.removeEventListener("timeupdate",o,!1),n.video.removeEventListener("playing",s,!1),n.video.removeEventListener("pause",a,!1),n.video.removeEventListener("seeking",i,!1),n.video.removeEventListener("seeked",l,!1),n.video.removeEventListener("ratechange",c,!1),n.video.removeEventListener("waiting",u,!1),n.video.removeEventListener("loadedmetadata",f,!1),document.removeEventListener("fullscreenchange",n.resizeWithTimeout,!1),document.removeEventListener("mozfullscreenchange",n.resizeWithTimeout,!1),document.removeEventListener("webkitfullscreenchange",n.resizeWithTimeout,!1),document.removeEventListener("msfullscreenchange",n.resizeWithTimeout,!1),window.removeEventListener("resize",n.resizeWithTimeout,!1),n.video.parentNode.removeChild(n.canvasParent),n.video=null),n.ro&&(n.ro.disconnect(),n.ro=null),n.onCustomMessage=null,n.onErrorEvent=null,n.onReadyEvent=null},n.fetchFromWorker=function(e,t,r){try{var o=e.target,s=setTimeout((function(){i(Error("Error: Timeout while try to fetch "+o))}),5e3),a=function(e){e.data.target==o&&(t(e.data),n.worker.removeEventListener("message",a),n.worker.removeEventListener("error",i),clearTimeout(s))},i=function(e){r(e),n.worker.removeEventListener("message",a),n.worker.removeEventListener("error",i),clearTimeout(s)};n.worker.addEventListener("message",a),n.worker.addEventListener("error",i),n.worker.postMessage(e)}catch(e){r(e)}},n.createEvent=function(e){n.worker.postMessage({target:"create-event",event:e})},n.getEvents=function(e,t){n.fetchFromWorker({target:"get-events"},(function(t){e(t.events)}),t)},n.setEvent=function(e,t){n.worker.postMessage({target:"set-event",event:e,index:t})},n.removeEvent=function(e){n.worker.postMessage({target:"remove-event",index:e})},n.createStyle=function(e){n.worker.postMessage({target:"create-style",style:e})},n.getStyles=function(e,t){n.fetchFromWorker({target:"get-styles"},(function(t){e(t.styles)}),t)},n.setStyle=function(e,t){n.worker.postMessage({target:"set-style",style:e,index:t})},n.removeStyle=function(e){n.worker.postMessage({target:"remove-style",index:e})},n.init()})},{}]},["7Csdv"],"7Csdv","parcelRequire03dd");