(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0cd7":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:t._$s(0,"sc","segmented-control"),class:t._$s(0,"c",["text"===t.styleType?"segmented-control--text":"segmented-control--button"]),style:t._$s(0,"s",{borderColor:"text"===t.styleType?"":t.activeColor}),attrs:{_i:0}},t._l(t._$s(1,"f",{forItems:t.values}),(function(a,n,i,s){return e("view",{key:t._$s(1,"f",{forIndex:i,key:n}),staticClass:t._$s("1-"+s,"sc","segmented-control__item"),class:t._$s("1-"+s,"c",["text"===t.styleType?"":"segmented-control__item--button",n===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===n&&"button"===t.styleType?"segmented-control__item--button--first":"",n===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""]),style:t._$s("1-"+s,"s",{backgroundColor:n===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:n===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"}),attrs:{_i:"1-"+s},on:{click:function(a){return t._onClick(n)}}},[e("view",[e("text",{staticClass:t._$s("3-"+s,"sc","segmented-control__text"),class:t._$s("3-"+s,"c","text"===t.styleType&&n===t.currentIndex?"segmented-control__item--text":""),style:t._$s("3-"+s,"s",{color:n===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}),attrs:{_i:"3-"+s}},[t._v(t._$s("3-"+s,"t0-0",t._s(a)))])])])})),0)},i=[]},"0de9":function(t,a,e){"use strict";function n(t){var a=Object.prototype.toString.call(t);return a.substring(8,a.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function s(t,a){switch(n(a)){case"Function":return"function() { [native code] }";default:return a}}function o(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];console[t].apply(console,e)}function l(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];var o=a.shift();if(i())return a.push(a.pop().replace("at ","uni-app:///")),console[o].apply(console,a);var l=a.map((function(t){var a=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===a||"[object array]"===a)try{t="---BEGIN:JSON---"+JSON.stringify(t,s)+"---END:JSON---"}catch(i){t=a}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=n(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t})),E="";if(l.length>1){var m=l.pop();E=l.join("---COMMA---"),0===m.indexOf(" at ")?E+=m:E+="---COMMA---"+m}else E=l[0];console[o](E)}e.r(a),e.d(a,"log",(function(){return o})),e.d(a,"default",(function(){return l}))},1156:function(t,a,e){"use strict";e.r(a);var n=e("aef5"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},2921:function(t,a,e){"use strict";e.r(a);var n=e("8291"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"3f52":function(t,a,e){"use strict";e.r(a);var n=e("2921");for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);var s=e("f0c5"),o=Object(s["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);a["default"]=o.exports},"4ea4":function(t,a){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},7037:function(t,a){function e(a){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,e(a)}t.exports=e,t.exports.__esModule=!0,t.exports["default"]=t.exports},"76de":function(t,a,e){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var a=this.constructor;return this.then((function(e){return a.resolve(t()).then((function(){return e}))}),(function(e){return a.resolve(t()).then((function(){throw e}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(e("ed88").default)}))},8291:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};a.default=e}).call(this,e("0de9")["default"])},"8bbf":function(t,a){t.exports=Vue},"8c11":function(t,a,e){"use strict";var n=e("4ea4"),i=n(e("9523"));e("76de");var s=n(e("8bbf")),o=n(e("3f52"));function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}s.default.config.productionTip=!1,o.default.mpType="app";var E=new s.default(function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){(0,i.default)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},o.default));E.$mount()},9523:function(t,a,e){var n=e("a395");t.exports=function(t,a,e){return a=n(a),a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},"9aa7":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var n={uniSegmentedControl:e("9dd8").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view",[n("view",{staticClass:t._$s(1,"sc","content"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","player-videodisc"),attrs:{_i:2}},[n("image",{attrs:{src:t._$s(3,"a-src",e("ed92")),_i:3}}),n("image",{staticClass:t._$s(4,"sc","rotateImg"),style:t._$s(4,"s",t.styleObj),attrs:{src:t._$s(4,"a-src",t.audioData[0].view_image),_i:4}})]),n("view",{staticClass:t._$s(5,"sc","player-box"),attrs:{_i:5}},[n("view",{staticClass:t._$s(6,"sc","player-slider"),attrs:{_i:6}},[n("view",{staticClass:t._$s(7,"sc","player-currentTime"),attrs:{_i:7}},[t._v(t._$s(7,"t0-0",t._s(t.audioCurTime[0]))+t._$s(7,"t0-1",t._s(t.audioCurTime[1])))]),n("slider",{staticClass:t._$s(8,"sc","slider"),attrs:{max:t._$s(8,"a-max",t.duration),value:t._$s(8,"a-value",t.currentTime),_i:8},on:{change:t.changeProgress}}),n("view",{staticClass:t._$s(9,"sc","player-duration"),attrs:{_i:9}},[t._v(t._$s(9,"t0-0",t._s(t.longth)))])]),n("view",{staticClass:t._$s(10,"sc","play-bar"),attrs:{_i:10}},[n("view",{attrs:{_i:11},on:{click:t.pre}},[n("text",{staticClass:t._$s(12,"sc","cuIcon-backwardfill"),attrs:{_i:12}})]),n("view",{staticClass:t._$s(13,"sc","play-menu"),attrs:{_i:13}},[n("text",{staticClass:t._$s(14,"sc","cuIcon-playfill"),class:t._$s(14,"c",t.isPlay?"cuIcon-stop":"cuIcon-playfill"),attrs:{_i:14},on:{click:t.playMusic}})]),n("view",{attrs:{_i:15},on:{click:t.next}},[n("text",{staticClass:t._$s(16,"sc","cuIcon-play_forward_fill"),attrs:{_i:16}})])])])]),n("view",{staticClass:t._$s(17,"sc","play-list"),attrs:{_i:17}},[n("view",[n("view",{staticClass:t._$s(19,"sc","text-underline"),attrs:{_i:19}})])]),n("view",[n("view",{staticClass:t._$s(21,"sc","uni-padding-wrap uni-common-mt"),attrs:{_i:21}},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#007aff",_i:22},on:{clickItem:t.onClickItem}})],1)]),t._l(t._$s(23,"f",{forItems:t.audioData}),(function(a,e,i,s){return n("view",{key:t._$s(23,"f",{forIndex:i,key:"23-"+s}),staticClass:t._$s("23-"+s,"sc","play-list-content"),attrs:{_i:"23-"+s},on:{click:function(e){return t.changeAudio(a)}}},[n("view",{staticClass:t._$s("24-"+s,"sc","play-list-content-title"),attrs:{_i:"24-"+s}},[t._v(t._$s("24-"+s,"t0-0",t._s(a.name)))])])}))],2)},s=[]},"9dd8":function(t,a,e){"use strict";e.r(a);var n=e("0cd7"),i=e("bab2");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var o=e("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"0052eeee",null,!1,n["a"],void 0);a["default"]=l.exports},"9e06":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};a.default=n},a395:function(t,a,e){var n=e("7037")["default"],i=e("e50d");t.exports=function(t){var a=i(t,"string");return"symbol"===n(a)?a:String(a)},t.exports.__esModule=!0,t.exports["default"]=t.exports},aef5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.createInnerAudioContext();i.autoplay=!1;var s={data:function(){return{items:["\u5176\u4ed6","\u539f\u521b","\u65e0\u635f","\u7ffb\u5531"],classMusicList:{"\u5176\u4ed6":[{name:"All of me.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/All%20of%20me.mp3",longth:""},{name:"Another day of sun-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/Another%20day%20of%20sun-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"lonely Christmas - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/lonely%20Christmas%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"shape of you - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/shape%20of%20you%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4e4c\u5170\u5df4\u6258\u7684\u4e00\u6574\u591c.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E4%B9%8C%E5%85%B0%E5%B7%B4%E6%89%98%E7%9A%84%E4%B8%80%E6%95%B4%E5%A4%9C.mp3",longth:""},{name:"\u4f46\u613f\u4eba\u957f\u4e45 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E4%BD%86%E6%84%BF%E4%BA%BA%E9%95%BF%E4%B9%85%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4fe9\u4fe9\u76f8\u5fd8 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E4%BF%A9%E4%BF%A9%E7%9B%B8%E5%BF%98%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5306\u5306 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%8C%86%E5%8C%86%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u53ef\u80fd\u5426.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%8F%AF%E8%83%BD%E5%90%A6.mp3",longth:""},{name:"\u5915\u9633\u4e4b\u6b4c-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%95%E9%98%B3%E4%B9%8B%E6%AD%8C-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5916\u9762\u7684\u4e16\u754c - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u591c\u673a-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%9C%E6%9C%BA-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u592a\u9633-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%AA%E9%98%B3-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5c0f\u534a - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E5%8D%8A%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5c0f\u6a58\u732b-\u4e0d\u67d3.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E4%B8%8D%E6%9F%93.mp3",longth:""},{name:"\u5c0f\u6a58\u732b-\u5973\u4eba\u82b1.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E5%A5%B3%E4%BA%BA%E8%8A%B1.mp3",longth:""},{name:"\u5c0f\u6a58\u732b-\u5b8c\u7f8e\u5b64\u72ec.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E5%AE%8C%E7%BE%8E%E5%AD%A4%E7%8B%AC.mp3",longth:""},{name:"\u5c0f\u6a58\u732b-\u6c34\u661f\u8bb0.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E6%B0%B4%E6%98%9F%E8%AE%B0.mp3",longth:""},{name:"\u5c0f\u6a58\u732b-\u767d\u5c71\u8336.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E7%99%BD%E5%B1%B1%E8%8C%B6.mp3",longth:""},{name:"\u5f80\u540e\u4f59\u751f - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5fc3\u52a8-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%BF%83%E5%8A%A8-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u602a\u4f60\u8fc7\u5206\u7f8e\u4e3d.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%80%AA%E4%BD%A0%E8%BF%87%E5%88%86%E7%BE%8E%E4%B8%BD.mp3",longth:""},{name:"\u6211 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%88%91%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u63a2\u6e05\u6c34\u6cb3.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%8E%A2%E6%B8%85%E6%B0%B4%E6%B2%B3.mp3",longth:""},{name:"\u665a\u5a5a.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%99%9A%E5%A9%9A.mp3",longth:""},{name:"\u68a6\u4e00\u573a.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%A2%A6%E4%B8%80%E5%9C%BA.mp3",longth:""},{name:"\u6bcf\u5929\u7231\u4f60\u591a\u4e00\u4e9b - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%AF%8F%E5%A4%A9%E7%88%B1%E4%BD%A0%E5%A4%9A%E4%B8%80%E4%BA%9B%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6c5f\u6e56\u513f\u5973-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%B1%9F%E6%B9%96%E5%84%BF%E5%A5%B3-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6d6a\u5b50\u56de\u5934-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%B5%AA%E5%AD%90%E5%9B%9E%E5%A4%B4-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u76db\u590f\u7684\u679c\u5b9e-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E7%9B%9B%E5%A4%8F%E7%9A%84%E6%9E%9C%E5%AE%9E-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u80e1\u5e7f\u751f-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E8%83%A1%E5%B9%BF%E7%94%9F-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u865a\u62df-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E8%99%9A%E6%8B%9F-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u9192\u7740\u9189-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E9%86%92%E7%9D%80%E9%86%89-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u963f\u695a\u59d1\u5a18-\u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E9%98%BF%E6%A5%9A%E5%A7%91%E5%A8%98-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""}],"\u539f\u521b":[{name:"\u5251\u4e0e\u5bb6\u56ed - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E5%89%91%E4%B8%8E%E5%AE%B6%E5%9B%AD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u544a\u4e00\u6bb5\u843d - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E5%91%8A%E4%B8%80%E6%AE%B5%E8%90%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u8c01\u80fd\u6ca1\u70b9\u75c5 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E8%B0%81%E8%83%BD%E6%B2%A1%E7%82%B9%E7%97%85%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u9648\u4e00\u53d1\u513f - \u5f26\u4e0a\u6709\u6625\u79cb.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E5%BC%A6%E4%B8%8A%E6%9C%89%E6%98%A5%E7%A7%8B.mp3",longth:""},{name:"\u9648\u4e00\u53d1\u513f - \u7ae5\u8bdd\u9547.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3",longth:""},{name:"\u9648\u4e00\u53d1\u513f - \u963f\u5a46\u8bf4.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E9%98%BF%E5%A9%86%E8%AF%B4.mp3",longth:""}],"\u65e0\u635f":[{name:"\u5251\u4e0e\u5bb6\u56ed.flac",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E5%89%91%E4%B8%8E%E5%AE%B6%E5%9B%AD.flac",longth:""},{name:"\u5f26\u4e0a\u6709\u6625\u79cb.flac",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E5%BC%A6%E4%B8%8A%E6%9C%89%E6%98%A5%E7%A7%8B.flac",longth:""},{name:"\u7ae5\u8bdd\u9547.flac",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E7%AB%A5%E8%AF%9D%E9%95%87.flac",longth:""},{name:"\u963f\u5a46\u8bf4.flac",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E9%98%BF%E5%A9%86%E8%AF%B4.flac",longth:""}],"\u7ffb\u5531":[{name:"17.3.11\u9648\u4e00\u53d1\u513f-\u8c22\u8c22\u4f60\u7684\u7231\uff08\u7206\u5218\u7ee7\u82ac\uff09.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/17.3.11%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF-%E8%B0%A2%E8%B0%A2%E4%BD%A0%E7%9A%84%E7%88%B1%EF%BC%88%E7%88%86%E5%88%98%E7%BB%A7%E8%8A%AC%EF%BC%89.mp3",longth:""},{name:"Bizarre love triangle - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Bizarre%20love%20triangle%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"City of Stars - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/City%20of%20Stars%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"Darling - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Darling%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"Dying In The Sun - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Dying%20In%20The%20Sun%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"Let her go - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Let%20her%20go%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"New Soul - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/New%20Soul%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"Remember me - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Remember%20me%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"When Christmas Comes To Town - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/When%20Christmas%20Comes%20To%20Town%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"lost stars - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/lost%20stars%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4e00\u526a\u6885 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%B8%80%E5%89%AA%E6%A2%85%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4e00\u6b21\u5c31\u597d - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%B8%80%E6%AC%A1%E5%B0%B1%E5%A5%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4e0b\u4e2a\u661f\u671f\u53bb\u82f1\u56fd - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%B8%8B%E4%B8%AA%E6%98%9F%E6%9C%9F%E5%8E%BB%E8%8B%B1%E5%9B%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4eb2\u5bc6\u7231\u4eba - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%BA%B2%E5%AF%86%E7%88%B1%E4%BA%BA%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4eba\u95f4 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%BA%BA%E9%97%B4%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u4f60\u5728\u7ec8\u70b9\u7b49\u6211 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%BD%A0%E5%9C%A8%E7%BB%88%E7%82%B9%E7%AD%89%E6%88%91%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u514b\u535c\u52d2 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%85%8B%E5%8D%9C%E5%8B%92%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5341\u4e07\u6beb\u5347\u6cea\u6c34 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%8D%81%E4%B8%87%E6%AF%AB%E5%8D%87%E6%B3%AA%E6%B0%B4%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5386\u5386\u4e07\u4e61 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%8E%86%E5%8E%86%E4%B8%87%E4%B9%A1%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5929\u9ed1\u9ed1 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%A4%A9%E9%BB%91%E9%BB%91%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5947\u5999\u80fd\u529b\u6b4c - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%A5%87%E5%A6%99%E8%83%BD%E5%8A%9B%E6%AD%8C%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5979\u6765\u542c\u6211\u7684\u6f14\u5531\u4f1a - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%A5%B9%E6%9D%A5%E5%90%AC%E6%88%91%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5b9d\u8d1d - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%AE%9D%E8%B4%9D%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5c0f\u5e78\u8fd0 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%B0%8F%E5%B9%B8%E8%BF%90%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5f53\u4f60\u8001\u4e86 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%BD%93%E4%BD%A0%E8%80%81%E4%BA%86%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u5ffd\u7136\u4e4b\u95f4 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%BF%BD%E7%84%B6%E4%B9%8B%E9%97%B4%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6027\u7a7a\u5c71 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%80%A7%E7%A9%BA%E5%B1%B1%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u60c5\u4eba - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%83%85%E4%BA%BA%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6162\u6162\u559c\u6b22\u4f60 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%85%A2%E6%85%A2%E5%96%9C%E6%AC%A2%E4%BD%A0%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6210\u90fd - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%88%90%E9%83%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6253\u9519\u4e86 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%89%93%E9%94%99%E4%BA%86%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u6728\u5170\u661f - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%9C%A8%E5%85%B0%E6%98%9F%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u7275\u4e1d\u620f - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E7%89%B5%E4%B8%9D%E6%88%8F%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u77dc\u6301 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E7%9F%9C%E6%8C%81%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u7b11\u7ea2\u5c18 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E7%AC%91%E7%BA%A2%E5%B0%98%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u8463\u5c0f\u59d0 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E8%91%A3%E5%B0%8F%E5%A7%90%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u8d70\u9a6c - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E8%B5%B0%E9%A9%AC%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u8ffd\u68a6\u4eba - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E8%BF%BD%E6%A2%A6%E4%BA%BA%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u9047\u89c1 - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%81%87%E8%A7%81%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u9648\u4e00\u53d1\u513f - can't take my eyes off you.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20can%27t%20take%20my%20eyes%20off%20you.mp3",longth:""},{name:"\u9648\u4e00\u53d1\u513f - \u5199\u4e00\u9996\u6b4c - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E5%86%99%E4%B8%80%E9%A6%96%E6%AD%8C%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""},{name:"\u9c7c - \u9648\u4e00\u53d1\u513f.mp3",file:"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%B1%BC%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3",longth:""}]},current:0,audioData:[{file:"http://app.tiantai.com.cn/uploads/20200819/a25100936ec5d372c6805e5b476dbd59.mp3",longth:"02:49",name:""}],nowFullDuration:0,duration:"100",currentTime:60,audioDuration:["0","00"],audioCurTime:["0","00"],longth:"",isPlay:!1,timer:null,system:"",styleObj:{borderRadius:"50%",height:"80rpx",width:"80rpx",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50% )",transformOrigin:"center"},rotateTimer:null,rotateDeg:0}},onUnload:function(){this.isPlay=!1,i.destroy()},onLoad:function(t){var e=this;this.audioData=this.classMusicList.\u5176\u4ed6,i.src=this.audioData[0].file,this.longth=this.audioData[0].longth,this.system=uni.getSystemInfoSync().platform,i.onEnded((function(t){clearInterval(a.timer),clearInterval(a.rotateTimer),e.timer=null,e.rotateTimer=null,e.isPlay=!1,i.seek(0),e.audioCurTime=["0","00"],e.currentTime=0}))},onShow:function(){},onReady:function(){var t=this;uni.setNavigationBarTitle({title:t.audioData[0].name}),setInterval((function(){t.nowFullDuration<t.currentTime&&t.next()}),3e3)},methods:{changeAudio:function(t){this.currentTime=0,this.isPlay=!1,clearInterval(this.timer),this.timer=null,clearInterval(this.rotateTimer),this.rotateTimer=null,this.longth=t.longth,this.audioCurTime=["0","00"],this.duration=0,i.seek(0),i.src=t.file,uni.setNavigationBarTitle({title:t.name}),this.playMusic()},next:function(){var t=this;clearInterval(this.rotateTimer),this.rotateTimer=null;var a=i.src;this.current=0,this.audioData.filter((function(e,n,s){if(e.file==a)if(n+1>=s.length){clearInterval(t.timer);t.isPlay=!1,i.seek(0),t.currentTime=0,t.audioCurTime=["0","00"],i.src=t.audioData[0].file,t.longth=t.audioData[0].longth,uni.setNavigationBarTitle({title:t.audioData[0].name})}else{clearInterval(t.timer);t.isPlay=!1,i.seek(0),t.currentTime=0,t.audioCurTime=["0","00"],i.src=t.audioData[n+1].file,t.longth=t.audioData[n+1].longth,uni.setNavigationBarTitle({title:t.audioData[n+1].name})}})),this.playMusic()},pre:function(){var t=this;clearInterval(this.rotateTimer),this.rotateTimer=null;var a=i.src;this.current=0,this.audioData.filter((function(e,n,s){if(e.file==a)if(0==n){clearInterval(t.timer);t.isPlay=!1,i.seek(0),t.currentTime=0,t.audioCurTime=["0","00"],i.src=t.audioData[s.length-1].file,t.longth=t.audioData[s.length-1].longth,uni.setNavigationBarTitle({title:t.audioData[s.length-1].name})}else{clearInterval(t.timer);t.isPlay=!1,i.seek(0),t.currentTime=0,t.audioCurTime=["0","00"],i.src=t.audioData[n-1].file,t.longth=t.audioData[n-1].longth,uni.setNavigationBarTitle({title:t.audioData[n-1].name})}})),this.playMusic()},playMusic:function(){var t=this,a=i.duration,e=i.currentTime;i.onCanplay((function(){t.nowFullDuration=i.duration})),this.duration=a,this.currentTime=e,this.audioCurTime[0]=Math.floor(Math.floor(e)/60),this.audioCurTime[1]=Math.floor(e)%60,this.isPlay?(this.isPlay=!1,clearInterval(this.timer),clearInterval(this.rotateTimer),this.timer=null,this.rotateTimer=null,i.pause()):(this.isPlay=!0,this.rotateTimer=setInterval((function(){t.rotateDeg++,t.styleObj.transform="translate(-50%,-50%) rotate(".concat(t.rotateDeg,"deg)")}),50),i.play(),this.timer=setInterval((function(){t.currentTime++,t.audioCurTime[1]>58?(t.audioCurTime[0]++,t.audioCurTime[1]=0,t.audioCurTime[1]++):t.audioCurTime[1]++}),1e3))},changeProgress:function(t){i.seek(t.detail.value),"ios"==this.system?(this.audioCurTime[0]=Math.floor(Math.floor(t.detail.value)/60),this.audioCurTime[1]=Math.floor(t.detail.value)%60,clearInterval(this.timer),clearInterval(this.rotateTimer),this.timer=null,this.rotateTimer=null,this.isPlay=!1,i.pause()):(clearInterval(this.timer),clearInterval(this.rotateTimer),this.timer=null,this.rotateTimer=null,this.isPlay=!1,this.playMusic())},onClickItem:function(t){this.current!==t.currentIndex&&(this.current=t.currentIndex,this.audioData=this.classMusicList[this.items[t.currentIndex]])}}};e.default=s},bab2:function(t,a,e){"use strict";e.r(a);var n=e("9e06"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},e50d:function(t,a,e){var n=e("7037")["default"];t.exports=function(t,a){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,a||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},ed88:function(t,a,e){"use strict";e.r(a);var n=e("9aa7"),i=e("1156");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var o=e("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);a["default"]=l.exports},ed92:function(t,a){t.exports="/static/record.png"},f0c5:function(t,a,e){"use strict";function n(t,a,e,n,i,s,o,l,E,m){var r,c="function"===typeof t?t.options:t;if(E){c.components||(c.components={});var B=Object.prototype.hasOwnProperty;for(var u in E)B.call(E,u)&&!B.call(c.components,u)&&(c.components[u]=E[u])}if(m&&("function"===typeof m.beforeCreate&&(m.beforeCreate=[m.beforeCreate]),(m.beforeCreate||(m.beforeCreate=[])).unshift((function(){this[m.__module]=this})),(c.mixins||(c.mixins=[])).push(m)),a&&(c.render=a,c.staticRenderFns=e,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(r=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=r):i&&(r=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),r)if(c.functional){c._injectStyles=r;var f=c.render;c.render=function(t,a){return r.call(a),f(t,a)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,r):[r]}return{exports:t,options:c}}e.d(a,"a",(function(){return n}))}},[["8c11","app-config"]]]);