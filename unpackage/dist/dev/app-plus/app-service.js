(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/main.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 19));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 20));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***********************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/pages.json ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!**********************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/pages/index/index.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************************************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/Workspace/Hbuilder/FaMama/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniSegmentedControl:
      __webpack_require__(/*! @/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue */ 10)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "content"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "player-videodisc"),
              attrs: { _i: 2 },
            },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../static/record.png */ 16)),
                  _i: 3,
                },
              }),
              _c("image", {
                staticClass: _vm._$s(4, "sc", "rotateImg"),
                style: _vm._$s(4, "s", _vm.styleObj),
                attrs: {
                  src: _vm._$s(4, "a-src", _vm.audioData[0].view_image),
                  _i: 4,
                },
              }),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "player-box"), attrs: { _i: 5 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(6, "sc", "player-slider"),
                  attrs: { _i: 6 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(7, "sc", "player-currentTime"),
                      attrs: { _i: 7 },
                    },
                    [
                      _vm._v(
                        _vm._$s(7, "t0-0", _vm._s(_vm.audioCurTime[0])) +
                          _vm._$s(7, "t0-1", _vm._s(_vm.audioCurTime[1]))
                      ),
                    ]
                  ),
                  _c("slider", {
                    staticClass: _vm._$s(8, "sc", "slider"),
                    attrs: {
                      max: _vm._$s(8, "a-max", _vm.duration),
                      value: _vm._$s(8, "a-value", _vm.currentTime),
                      _i: 8,
                    },
                    on: { change: _vm.changeProgress },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(9, "sc", "player-duration"),
                      attrs: { _i: 9 },
                    },
                    [_vm._v(_vm._$s(9, "t0-0", _vm._s(_vm.longth)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "play-bar"),
                  attrs: { _i: 10 },
                },
                [
                  _c("view", { attrs: { _i: 11 }, on: { click: _vm.pre } }, [
                    _c("text", {
                      staticClass: _vm._$s(12, "sc", "cuIcon-backwardfill"),
                      attrs: { _i: 12 },
                    }),
                  ]),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(13, "sc", "play-menu"),
                      attrs: { _i: 13 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(14, "sc", "cuIcon-playfill"),
                        class: _vm._$s(
                          14,
                          "c",
                          _vm.isPlay ? "cuIcon-stop" : "cuIcon-playfill"
                        ),
                        attrs: { _i: 14 },
                        on: { click: _vm.playMusic },
                      }),
                    ]
                  ),
                  _c("view", { attrs: { _i: 15 }, on: { click: _vm.next } }, [
                    _c("text", {
                      staticClass: _vm._$s(
                        16,
                        "sc",
                        "cuIcon-play_forward_fill"
                      ),
                      attrs: { _i: 16 },
                    }),
                  ]),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(17, "sc", "play-list"), attrs: { _i: 17 } },
        [
          _c("view", [
            _c("view", {
              staticClass: _vm._$s(19, "sc", "text-underline"),
              attrs: { _i: 19 },
            }),
          ]),
        ]
      ),
      _c("view", [
        _c(
          "view",
          {
            staticClass: _vm._$s(21, "sc", "uni-padding-wrap uni-common-mt"),
            attrs: { _i: 21 },
          },
          [
            _c("uni-segmented-control", {
              attrs: {
                current: _vm.current,
                values: _vm.items,
                "style-type": "text",
                "active-color": "#007aff",
                _i: 22,
              },
              on: { clickItem: _vm.onClickItem },
            }),
          ],
          1
        ),
      ]),
      _vm._l(
        _vm._$s(23, "f", { forItems: _vm.audioData }),
        function (item, index, $20, $30) {
          return _c(
            "view",
            {
              key: _vm._$s(23, "f", { forIndex: $20, key: 23 + "-" + $30 }),
              staticClass: _vm._$s("23-" + $30, "sc", "play-list-content"),
              attrs: { _i: "23-" + $30 },
              on: {
                click: function ($event) {
                  return _vm.changeAudio(item)
                },
              },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    "24-" + $30,
                    "sc",
                    "play-list-content-title"
                  ),
                  attrs: { _i: "24-" + $30 },
                },
                [_vm._v(_vm._$s("24-" + $30, "t0-0", _vm._s(item.name)))]
              ),
            ]
          )
        }
      ),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*********************************************************************************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-segmented-control.vue?vue&type=template&id=064e9cd1&scoped=true& */ 11);\n/* harmony import */ var _uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-segmented-control.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"064e9cd1\",\n  null,\n  false,\n  _uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEk7QUFDOUk7QUFDeUU7QUFDTDs7O0FBR3BFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSw0R0FBTTtBQUNSLEVBQUUscUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zZWdtZW50ZWQtY29udHJvbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY0ZTljZDEmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktc2VnbWVudGVkLWNvbnRyb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc2VnbWVudGVkLWNvbnRyb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNjRlOWNkMVwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktc2VnbWVudGVkLWNvbnRyb2wvY29tcG9uZW50cy91bmktc2VnbWVudGVkLWNvbnRyb2wvdW5pLXNlZ21lbnRlZC1jb250cm9sLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue?vue&type=template&id=064e9cd1&scoped=true& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-segmented-control.vue?vue&type=template&id=064e9cd1&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_template_id_064e9cd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/Workspace/Hbuilder/FaMama/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue?vue&type=template&id=064e9cd1&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "segmented-control"),
      class: _vm._$s(0, "c", [
        _vm.styleType === "text"
          ? "segmented-control--text"
          : "segmented-control--button",
      ]),
      style: _vm._$s(0, "s", {
        borderColor: _vm.styleType === "text" ? "" : _vm.activeColor,
      }),
      attrs: { _i: 0 },
    },
    _vm._l(
      _vm._$s(1, "f", { forItems: _vm.values }),
      function (item, index, $20, $30) {
        return _c(
          "view",
          {
            key: _vm._$s(1, "f", { forIndex: $20, key: index }),
            staticClass: _vm._$s("1-" + $30, "sc", "segmented-control__item"),
            class: _vm._$s("1-" + $30, "c", [
              _vm.styleType === "text" ? "" : "segmented-control__item--button",
              index === _vm.currentIndex && _vm.styleType === "button"
                ? "segmented-control__item--button--active"
                : "",
              index === 0 && _vm.styleType === "button"
                ? "segmented-control__item--button--first"
                : "",
              index === _vm.values.length - 1 && _vm.styleType === "button"
                ? "segmented-control__item--button--last"
                : "",
            ]),
            style: _vm._$s("1-" + $30, "s", {
              backgroundColor:
                index === _vm.currentIndex && _vm.styleType === "button"
                  ? _vm.activeColor
                  : "",
              borderColor:
                (index === _vm.currentIndex && _vm.styleType === "text") ||
                _vm.styleType === "button"
                  ? _vm.activeColor
                  : "transparent",
            }),
            attrs: { _i: "1-" + $30 },
            on: {
              click: function ($event) {
                return _vm._onClick(index)
              },
            },
          },
          [
            _c("view", [
              _c(
                "text",
                {
                  staticClass: _vm._$s(
                    "3-" + $30,
                    "sc",
                    "segmented-control__text"
                  ),
                  class: _vm._$s(
                    "3-" + $30,
                    "c",
                    _vm.styleType === "text" && index === _vm.currentIndex
                      ? "segmented-control__item--text"
                      : ""
                  ),
                  style: _vm._$s("3-" + $30, "s", {
                    color:
                      index === _vm.currentIndex
                        ? _vm.styleType === "text"
                          ? _vm.activeColor
                          : "#fff"
                        : _vm.styleType === "text"
                        ? "#000"
                        : _vm.activeColor,
                  }),
                  attrs: { _i: "3-" + $30 },
                },
                [_vm._v(_vm._$s("3-" + $30, "t0-0", _vm._s(item)))]
              ),
            ]),
          ]
        )
      }
    ),
    0
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!**********************************************************************************************************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-segmented-control.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_segmented_control_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRtQixDQUFnQiwyb0JBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlZ21lbnRlZC1jb250cm9sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VnbWVudGVkLWNvbnRyb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/Workspace/Hbuilder/FaMama/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * SegmentedControl 分段器\n * @description 用作不同视图的显示\n * @tutorial https://ext.dcloud.net.cn/plugin?id=54\n * @property {Number} current 当前选中的tab索引值，从0计数\n * @property {String} styleType = [button|text] 分段器样式类型\n * \t@value button 按钮类型\n * \t@value text 文字类型\n * @property {String} activeColor 选中的标签背景色与边框颜色\n * @property {Array} values 选项数组\n * @event {Function} clickItem 组件触发点击事件时触发，e={currentIndex}\n */\nvar _default2 = {\n  name: 'UniSegmentedControl',\n  emits: ['clickItem'],\n  props: {\n    current: {\n      type: Number,\n      default: 0\n    },\n    values: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    activeColor: {\n      type: String,\n      default: '#2979FF'\n    },\n    styleType: {\n      type: String,\n      default: 'button'\n    }\n  },\n  data: function data() {\n    return {\n      currentIndex: 0\n    };\n  },\n  watch: {\n    current: function current(val) {\n      if (val !== this.currentIndex) {\n        this.currentIndex = val;\n      }\n    }\n  },\n  created: function created() {\n    this.currentIndex = this.current;\n  },\n  methods: {\n    _onClick: function _onClick(index) {\n      if (this.currentIndex !== index) {\n        this.currentIndex = index;\n        this.$emit('clickItem', {\n          currentIndex: index\n        });\n      }\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXNlZ21lbnRlZC1jb250cm9sL2NvbXBvbmVudHMvdW5pLXNlZ21lbnRlZC1jb250cm9sL3VuaS1zZWdtZW50ZWQtY29udHJvbC52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJjdXJyZW50IiwidHlwZSIsImRlZmF1bHQiLCJ2YWx1ZXMiLCJhY3RpdmVDb2xvciIsInN0eWxlVHlwZSIsImRhdGEiLCJjdXJyZW50SW5kZXgiLCJ3YXRjaCIsImNyZWF0ZWQiLCJtZXRob2RzIiwiX29uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSxnQkFhQTtFQUNBQTtFQUNBQztFQUNBQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FFO01BQ0FIO01BQ0FDO0lBQ0E7SUFDQUc7TUFDQUo7TUFDQUM7SUFDQTtFQUNBO0VBQ0FJO0lBQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FSO01BQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBUztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7VUFDQUo7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgOmNsYXNzPVwiW3N0eWxlVHlwZSA9PT0gJ3RleHQnPydzZWdtZW50ZWQtY29udHJvbC0tdGV4dCcgOiAnc2VnbWVudGVkLWNvbnRyb2wtLWJ1dHRvbicgXVwiXHJcblx0XHQ6c3R5bGU9XCJ7IGJvcmRlckNvbG9yOiBzdHlsZVR5cGUgPT09ICd0ZXh0JyA/ICcnIDogYWN0aXZlQ29sb3IgfVwiIGNsYXNzPVwic2VnbWVudGVkLWNvbnRyb2xcIj5cclxuXHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB2YWx1ZXNcIiA6Y2xhc3M9XCJbIHN0eWxlVHlwZSA9PT0gJ3RleHQnID8gJyc6ICdzZWdtZW50ZWQtY29udHJvbF9faXRlbS0tYnV0dG9uJyxcclxuXHRcdGluZGV4ID09PSBjdXJyZW50SW5kZXgmJnN0eWxlVHlwZSA9PT0gJ2J1dHRvbicgPyAnc2VnbWVudGVkLWNvbnRyb2xfX2l0ZW0tLWJ1dHRvbi0tYWN0aXZlJzogJycsXHJcblx0XHRpbmRleCA9PT0gMCYmc3R5bGVUeXBlID09PSAnYnV0dG9uJyA/ICdzZWdtZW50ZWQtY29udHJvbF9faXRlbS0tYnV0dG9uLS1maXJzdCc6ICcnLFxyXG5cdFx0XHRpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCAtIDEmJnN0eWxlVHlwZSA9PT0gJ2J1dHRvbicgPyAnc2VnbWVudGVkLWNvbnRyb2xfX2l0ZW0tLWJ1dHRvbi0tbGFzdCc6ICcnIF1cIiA6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogaW5kZXggPT09IGN1cnJlbnRJbmRleCAmJiBzdHlsZVR5cGUgPT09ICdidXR0b24nID8gYWN0aXZlQ29sb3IgOiAnJyxib3JkZXJDb2xvcjogaW5kZXggPT09IGN1cnJlbnRJbmRleCYmc3R5bGVUeXBlID09PSAndGV4dCd8fHN0eWxlVHlwZSA9PT0gJ2J1dHRvbic/YWN0aXZlQ29sb3I6J3RyYW5zcGFyZW50JyB9XCJcclxuXHRcdFx0Y2xhc3M9XCJzZWdtZW50ZWQtY29udHJvbF9faXRlbVwiIEBjbGljaz1cIl9vbkNsaWNrKGluZGV4KVwiPlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJ7Y29sb3I6XHJcblx0XHRcdFx0ICAgIGluZGV4ID09PSBjdXJyZW50SW5kZXhcclxuXHRcdFx0XHQgICAgICA/IHN0eWxlVHlwZSA9PT0gJ3RleHQnXHJcblx0XHRcdFx0ICAgICAgICA/IGFjdGl2ZUNvbG9yXHJcblx0XHRcdFx0ICAgICAgICA6ICcjZmZmJ1xyXG5cdFx0XHRcdCAgICAgIDogc3R5bGVUeXBlID09PSAndGV4dCdcclxuXHRcdFx0XHQgICAgICAgID8gJyMwMDAnXHJcblx0XHRcdFx0ICAgICAgICA6IGFjdGl2ZUNvbG9yfVwiIGNsYXNzPVwic2VnbWVudGVkLWNvbnRyb2xfX3RleHRcIiA6Y2xhc3M9XCJzdHlsZVR5cGUgPT09ICd0ZXh0JyAmJiBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ3NlZ21lbnRlZC1jb250cm9sX19pdGVtLS10ZXh0JzogJydcIj57eyBpdGVtIH19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogU2VnbWVudGVkQ29udHJvbCDliIbmrrXlmahcclxuXHQgKiBAZGVzY3JpcHRpb24g55So5L2c5LiN5ZCM6KeG5Zu+55qE5pi+56S6XHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTU0XHJcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IGN1cnJlbnQg5b2T5YmN6YCJ5Lit55qEdGFi57Si5byV5YC877yM5LuOMOiuoeaVsFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdHlsZVR5cGUgPSBbYnV0dG9ufHRleHRdIOWIhuauteWZqOagt+W8j+exu+Wei1xyXG5cdCAqIFx0QHZhbHVlIGJ1dHRvbiDmjInpkq7nsbvlnotcclxuXHQgKiBcdEB2YWx1ZSB0ZXh0IOaWh+Wtl+exu+Wei1xyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBhY3RpdmVDb2xvciDpgInkuK3nmoTmoIfnrb7og4zmma/oibLkuI7ovrnmoYbpopzoibJcclxuXHQgKiBAcHJvcGVydHkge0FycmF5fSB2YWx1ZXMg6YCJ6aG55pWw57uEXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xpY2tJdGVtIOe7hOS7tuinpuWPkeeCueWHu+S6i+S7tuaXtuinpuWPke+8jGU9e2N1cnJlbnRJbmRleH1cclxuXHQgKi9cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVNlZ21lbnRlZENvbnRyb2wnLFxyXG5cdFx0ZW1pdHM6IFsnY2xpY2tJdGVtJ10sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRjdXJyZW50OiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsdWVzOiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjdGl2ZUNvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcjMjk3OUZGJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdHlsZVR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2J1dHRvbidcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y3VycmVudEluZGV4OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRjdXJyZW50KHZhbCkge1xyXG5cdFx0XHRcdGlmICh2YWwgIT09IHRoaXMuY3VycmVudEluZGV4KSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IHZhbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRfb25DbGljayhpbmRleCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRJbmRleCAhPT0gaW5kZXgpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXhcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrSXRlbScsIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudEluZGV4OiBpbmRleFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5zZWdtZW50ZWQtY29udHJvbCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogMzZweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHQvKiAjaWZkZWYgSDUgKi9cclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnNlZ21lbnRlZC1jb250cm9sX19pdGVtIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5zZWdtZW50ZWQtY29udHJvbF9faXRlbS0tYnV0dG9uIHtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG5cdH1cclxuXHJcblx0LnNlZ21lbnRlZC1jb250cm9sX19pdGVtLS1idXR0b24tLWZpcnN0IHtcclxuXHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcblx0fVxyXG5cclxuXHQuc2VnbWVudGVkLWNvbnRyb2xfX2l0ZW0tLWJ1dHRvbi0tbGFzdCB7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuXHR9XHJcblxyXG5cdC5zZWdtZW50ZWQtY29udHJvbF9faXRlbS0tdGV4dCB7XHJcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcblx0XHRwYWRkaW5nOiA2cHggMDtcblx0fVxyXG5cclxuXHQuc2VnbWVudGVkLWNvbnRyb2xfX3RleHQge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!******************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/static/record.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/record.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcmVjb3JkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVtQixDQUFnQixzb0JBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/Workspace/Hbuilder/FaMama/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar audioContext = uni.createInnerAudioContext();\naudioContext.autoplay = false;\nvar _default = {\n  data: function data() {\n    return {\n      items: ['其他', '原创', '无损', '翻唱'],\n      classMusicList: {\n        \"其他\": [{\n          \"name\": \"All of me.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/All%20of%20me.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"Another day of sun-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/Another%20day%20of%20sun-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"lonely Christmas - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/lonely%20Christmas%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"shape of you - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/shape%20of%20you%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"乌兰巴托的一整夜.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E4%B9%8C%E5%85%B0%E5%B7%B4%E6%89%98%E7%9A%84%E4%B8%80%E6%95%B4%E5%A4%9C.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"但愿人长久 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E4%BD%86%E6%84%BF%E4%BA%BA%E9%95%BF%E4%B9%85%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"俩俩相忘 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E4%BF%A9%E4%BF%A9%E7%9B%B8%E5%BF%98%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"匆匆 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%8C%86%E5%8C%86%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"可能否.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%8F%AF%E8%83%BD%E5%90%A6.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"夕阳之歌-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%95%E9%98%B3%E4%B9%8B%E6%AD%8C-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"外面的世界 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"夜机-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%9C%E6%9C%BA-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"太阳-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%A4%AA%E9%98%B3-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小半 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E5%8D%8A%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小橘猫-不染.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E4%B8%8D%E6%9F%93.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小橘猫-女人花.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E5%A5%B3%E4%BA%BA%E8%8A%B1.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小橘猫-完美孤独.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E5%AE%8C%E7%BE%8E%E5%AD%A4%E7%8B%AC.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小橘猫-水星记.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E6%B0%B4%E6%98%9F%E8%AE%B0.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小橘猫-白山茶.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%B0%8F%E6%A9%98%E7%8C%AB-%E7%99%BD%E5%B1%B1%E8%8C%B6.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"往后余生 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"心动-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E5%BF%83%E5%8A%A8-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"怪你过分美丽.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%80%AA%E4%BD%A0%E8%BF%87%E5%88%86%E7%BE%8E%E4%B8%BD.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"我 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%88%91%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"探清水河.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%8E%A2%E6%B8%85%E6%B0%B4%E6%B2%B3.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"晚婚.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%99%9A%E5%A9%9A.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"梦一场.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%A2%A6%E4%B8%80%E5%9C%BA.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"每天爱你多一些 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%AF%8F%E5%A4%A9%E7%88%B1%E4%BD%A0%E5%A4%9A%E4%B8%80%E4%BA%9B%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"江湖儿女-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%B1%9F%E6%B9%96%E5%84%BF%E5%A5%B3-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"浪子回头-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E6%B5%AA%E5%AD%90%E5%9B%9E%E5%A4%B4-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"盛夏的果实-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E7%9B%9B%E5%A4%8F%E7%9A%84%E6%9E%9C%E5%AE%9E-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"胡广生-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E8%83%A1%E5%B9%BF%E7%94%9F-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"虚拟-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E8%99%9A%E6%8B%9F-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"醒着醉-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E9%86%92%E7%9D%80%E9%86%89-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"阿楚姑娘-陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%85%B6%E4%BB%96/%E9%98%BF%E6%A5%9A%E5%A7%91%E5%A8%98-%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }],\n        \"原创\": [{\n          \"name\": \"剑与家园 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E5%89%91%E4%B8%8E%E5%AE%B6%E5%9B%AD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"告一段落 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E5%91%8A%E4%B8%80%E6%AE%B5%E8%90%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"谁能没点病 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E8%B0%81%E8%83%BD%E6%B2%A1%E7%82%B9%E7%97%85%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"陈一发儿 - 弦上有春秋.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E5%BC%A6%E4%B8%8A%E6%9C%89%E6%98%A5%E7%A7%8B.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"陈一发儿 - 童话镇.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"陈一发儿 - 阿婆说.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E5%8E%9F%E5%88%9B/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E9%98%BF%E5%A9%86%E8%AF%B4.mp3\",\n          \"longth\": \"\"\n        }],\n        \"无损\": [{\n          \"name\": \"剑与家园.flac\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E5%89%91%E4%B8%8E%E5%AE%B6%E5%9B%AD.flac\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"弦上有春秋.flac\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E5%BC%A6%E4%B8%8A%E6%9C%89%E6%98%A5%E7%A7%8B.flac\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"童话镇.flac\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E7%AB%A5%E8%AF%9D%E9%95%87.flac\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"阿婆说.flac\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E6%97%A0%E6%8D%9F/%E9%98%BF%E5%A9%86%E8%AF%B4.flac\",\n          \"longth\": \"\"\n        }],\n        \"翻唱\": [{\n          \"name\": \"17.3.11陈一发儿-谢谢你的爱（爆刘继芬）.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/17.3.11%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF-%E8%B0%A2%E8%B0%A2%E4%BD%A0%E7%9A%84%E7%88%B1%EF%BC%88%E7%88%86%E5%88%98%E7%BB%A7%E8%8A%AC%EF%BC%89.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"Bizarre love triangle - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Bizarre%20love%20triangle%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"City of Stars - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/City%20of%20Stars%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"Darling - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Darling%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"Dying In The Sun - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Dying%20In%20The%20Sun%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"Let her go - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Let%20her%20go%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"New Soul - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/New%20Soul%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"Remember me - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/Remember%20me%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"When Christmas Comes To Town - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/When%20Christmas%20Comes%20To%20Town%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"lost stars - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/lost%20stars%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"一剪梅 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%B8%80%E5%89%AA%E6%A2%85%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"一次就好 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%B8%80%E6%AC%A1%E5%B0%B1%E5%A5%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"下个星期去英国 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%B8%8B%E4%B8%AA%E6%98%9F%E6%9C%9F%E5%8E%BB%E8%8B%B1%E5%9B%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"亲密爱人 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%BA%B2%E5%AF%86%E7%88%B1%E4%BA%BA%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"人间 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%BA%BA%E9%97%B4%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"你在终点等我 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E4%BD%A0%E5%9C%A8%E7%BB%88%E7%82%B9%E7%AD%89%E6%88%91%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"克卜勒 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%85%8B%E5%8D%9C%E5%8B%92%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"十万毫升泪水 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%8D%81%E4%B8%87%E6%AF%AB%E5%8D%87%E6%B3%AA%E6%B0%B4%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"历历万乡 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%8E%86%E5%8E%86%E4%B8%87%E4%B9%A1%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"天黑黑 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%A4%A9%E9%BB%91%E9%BB%91%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"奇妙能力歌 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%A5%87%E5%A6%99%E8%83%BD%E5%8A%9B%E6%AD%8C%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"她来听我的演唱会 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%A5%B9%E6%9D%A5%E5%90%AC%E6%88%91%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"宝贝 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%AE%9D%E8%B4%9D%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"小幸运 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%B0%8F%E5%B9%B8%E8%BF%90%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"当你老了 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%BD%93%E4%BD%A0%E8%80%81%E4%BA%86%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"忽然之间 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E5%BF%BD%E7%84%B6%E4%B9%8B%E9%97%B4%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"性空山 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%80%A7%E7%A9%BA%E5%B1%B1%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"情人 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%83%85%E4%BA%BA%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"慢慢喜欢你 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%85%A2%E6%85%A2%E5%96%9C%E6%AC%A2%E4%BD%A0%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"成都 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%88%90%E9%83%BD%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"打错了 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%89%93%E9%94%99%E4%BA%86%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"木兰星 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E6%9C%A8%E5%85%B0%E6%98%9F%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"牵丝戏 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E7%89%B5%E4%B8%9D%E6%88%8F%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"矜持 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E7%9F%9C%E6%8C%81%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"笑红尘 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E7%AC%91%E7%BA%A2%E5%B0%98%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"董小姐 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E8%91%A3%E5%B0%8F%E5%A7%90%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"走马 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E8%B5%B0%E9%A9%AC%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"追梦人 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E8%BF%BD%E6%A2%A6%E4%BA%BA%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"遇见 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%81%87%E8%A7%81%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"陈一发儿 - can't take my eyes off you.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20can%27t%20take%20my%20eyes%20off%20you.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"陈一发儿 - 写一首歌 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E5%86%99%E4%B8%80%E9%A6%96%E6%AD%8C%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }, {\n          \"name\": \"鱼 - 陈一发儿.mp3\",\n          \"file\": \"https://fa-mama.oss-cn-beijing.aliyuncs.com/aizalmw/%E7%BF%BB%E5%94%B1/%E9%B1%BC%20-%20%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF.mp3\",\n          \"longth\": \"\"\n        }]\n      },\n      current: 0,\n      audioData: [{\n        file: \"http://app.tiantai.com.cn/uploads/20200819/a25100936ec5d372c6805e5b476dbd59.mp3\",\n        longth: \"02:49\",\n        name: \"\"\n      }],\n      nowFullDuration: 0,\n      duration: '100',\n      currentTime: 60,\n      audioDuration: ['0', '00'],\n      audioCurTime: ['0', '00'],\n      longth: '',\n      isPlay: false,\n      timer: null,\n      system: '',\n      styleObj: {\n        borderRadius: '50%',\n        height: '80rpx',\n        width: '80rpx',\n        position: 'absolute',\n        top: '50%',\n        left: '50%',\n        transform: 'translate(-50%,-50% )',\n        transformOrigin: 'center'\n      },\n      rotateTimer: null,\n      rotateDeg: 0\n    };\n  },\n  onUnload: function onUnload() {\n    this.isPlay = false;\n    audioContext.destroy();\n  },\n  onLoad: function onLoad(e) {\n    var _this = this;\n    this.audioData = this.classMusicList.其他;\n    audioContext.src = this.audioData[0].file;\n    this.longth = this.audioData[0].longth;\n    this.system = uni.getSystemInfoSync().platform;\n    audioContext.onEnded(function (e) {\n      clearInterval(a.timer);\n      clearInterval(a.rotateTimer);\n      _this.timer = null;\n      _this.rotateTimer = null;\n      _this.isPlay = false;\n      audioContext.seek(0);\n      _this.audioCurTime = ['0', '00'];\n      _this.currentTime = 0;\n    });\n  },\n  onShow: function onShow() {},\n  onReady: function onReady() {\n    var a = this;\n    uni.setNavigationBarTitle({\n      title: a.audioData[0].name\n    });\n\n    // 检查是否完播\n    setInterval(function () {\n      if (a.nowFullDuration < a.currentTime) {\n        a.next();\n      }\n    }, 3000);\n  },\n  methods: {\n    // audio player part : in this part we'd like to show the similar layouts and functions as wangyi music. created by Hsi (1563792476@qq.com)\n    // in order to avoid syntax error of playing time , use backend data to show duration time instead of calculating by yourself\n    changeAudio: function changeAudio(info) {\n      this.currentTime = 0;\n      this.isPlay = false;\n      clearInterval(this.timer);\n      this.timer = null;\n      clearInterval(this.rotateTimer);\n      this.rotateTimer = null;\n      this.longth = info.longth;\n      this.audioCurTime = ['0', '00'];\n      this.duration = 0;\n      audioContext.seek(0);\n      audioContext.src = info.file;\n      uni.setNavigationBarTitle({\n        title: info.name\n      });\n      this.playMusic();\n    },\n    next: function next() {\n      var _this2 = this;\n      // next song function, the main thought of next song function is that we should find out the index of song which is playing. \n      // first of all , clear the timer and stop rotating cover, and then find out the index \n      clearInterval(this.rotateTimer);\n      this.rotateTimer = null;\n      var src = audioContext.src;\n      this.current = 0;\n      //tips: (complex array may cause performance issues)\n      this.audioData.filter(function (currentValue, index, arr) {\n        if (currentValue.file == src) {\n          if (index + 1 >= arr.length) {\n            clearInterval(_this2.timer);\n            var timer = null;\n            _this2.isPlay = false;\n            // once click next button , pause and reset playingtime \n            audioContext.seek(0);\n            _this2.currentTime = 0;\n            _this2.audioCurTime = ['0', '00'];\n            audioContext.src = _this2.audioData[0].file;\n            _this2.longth = _this2.audioData[0].longth;\n            uni.setNavigationBarTitle({\n              title: _this2.audioData[0].name\n            });\n          } else {\n            clearInterval(_this2.timer);\n            var _timer = null;\n            _this2.isPlay = false;\n            audioContext.seek(0);\n            _this2.currentTime = 0;\n            _this2.audioCurTime = ['0', '00'];\n            audioContext.src = _this2.audioData[index + 1].file;\n            _this2.longth = _this2.audioData[index + 1].longth;\n            uni.setNavigationBarTitle({\n              title: _this2.audioData[index + 1].name\n            });\n          }\n        } else {}\n      });\n      this.playMusic();\n    },\n    pre: function pre() {\n      var _this3 = this;\n      clearInterval(this.rotateTimer);\n      this.rotateTimer = null;\n      var src = audioContext.src;\n      this.current = 0;\n      this.audioData.filter(function (currentValue, index, arr) {\n        if (currentValue.file == src) {\n          if (index == 0) {\n            clearInterval(_this3.timer);\n            var timer = null;\n            _this3.isPlay = false;\n            audioContext.seek(0);\n            _this3.currentTime = 0;\n            _this3.audioCurTime = ['0', '00'];\n            audioContext.src = _this3.audioData[arr.length - 1].file;\n            _this3.longth = _this3.audioData[arr.length - 1].longth;\n            uni.setNavigationBarTitle({\n              title: _this3.audioData[arr.length - 1].name\n            });\n          } else {\n            clearInterval(_this3.timer);\n            var _timer2 = null;\n            _this3.isPlay = false;\n            audioContext.seek(0);\n            _this3.currentTime = 0;\n            _this3.audioCurTime = ['0', '00'];\n            audioContext.src = _this3.audioData[index - 1].file;\n            _this3.longth = _this3.audioData[index - 1].longth;\n            uni.setNavigationBarTitle({\n              title: _this3.audioData[index - 1].name\n            });\n          }\n        } else {}\n      });\n      this.playMusic();\n    },\n    playMusic: function playMusic() {\n      var _this4 = this;\n      // reset duration time by clicking midbutton only \n      var duration = audioContext.duration;\n      var currentTime = audioContext.currentTime;\n      // 计算总时长\n      audioContext.onCanplay(function () {\n        _this4.nowFullDuration = audioContext.duration;\n      });\n      this.duration = duration;\n      this.currentTime = currentTime;\n      this.audioCurTime[0] = Math.floor(Math.floor(currentTime) / 60);\n      this.audioCurTime[1] = Math.floor(currentTime) % 60;\n      if (this.isPlay) {\n        this.isPlay = false;\n        clearInterval(this.timer);\n        clearInterval(this.rotateTimer);\n        this.timer = null;\n        this.rotateTimer = null;\n        audioContext.pause();\n      } else {\n        this.isPlay = true;\n        this.rotateTimer = setInterval(function () {\n          _this4.rotateDeg++;\n          _this4.styleObj.transform = \"translate(-50%,-50%) rotate(\".concat(_this4.rotateDeg, \"deg)\");\n        }, 50);\n        audioContext.play();\n        this.timer = setInterval(function () {\n          _this4.currentTime++;\n          if (_this4.audioCurTime[1] > 58) {\n            _this4.audioCurTime[0]++;\n            _this4.audioCurTime[1] = 0;\n            _this4.audioCurTime[1]++;\n          } else {\n            _this4.audioCurTime[1]++;\n          }\n        }, 1000);\n      }\n    },\n    changeProgress: function changeProgress(e) {\n      // ios 拖动slider 会出现漂移，定位不准，苹果暂时用拖动时暂停播放来规避\n      // ios pause music when dragging , Android could still play\n      audioContext.seek(e.detail.value);\n      // pause music when dragging , in order to load timer repeatly\n      if (this.system == 'ios') {\n        this.audioCurTime[0] = Math.floor(Math.floor(e.detail.value) / 60);\n        this.audioCurTime[1] = Math.floor(e.detail.value) % 60;\n        clearInterval(this.timer);\n        clearInterval(this.rotateTimer);\n        this.timer = null;\n        this.rotateTimer = null;\n        this.isPlay = false;\n        audioContext.pause();\n      } else {\n        clearInterval(this.timer);\n        clearInterval(this.rotateTimer);\n        this.timer = null;\n        this.rotateTimer = null;\n        this.isPlay = false;\n        this.playMusic();\n      }\n    },\n    // 分段器单击事件\n    onClickItem: function onClickItem(e) {\n      if (this.current !== e.currentIndex) {\n        this.current = e.currentIndex;\n        this.audioData = this.classMusicList[this.items[e.currentIndex]];\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImF1ZGlvQ29udGV4dCIsInVuaSIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwiYXV0b3BsYXkiLCJkYXRhIiwiaXRlbXMiLCJjbGFzc011c2ljTGlzdCIsImN1cnJlbnQiLCJhdWRpb0RhdGEiLCJmaWxlIiwibG9uZ3RoIiwibmFtZSIsIm5vd0Z1bGxEdXJhdGlvbiIsImR1cmF0aW9uIiwiY3VycmVudFRpbWUiLCJhdWRpb0R1cmF0aW9uIiwiYXVkaW9DdXJUaW1lIiwiaXNQbGF5IiwidGltZXIiLCJzeXN0ZW0iLCJzdHlsZU9iaiIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidHJhbnNmb3JtT3JpZ2luIiwicm90YXRlVGltZXIiLCJyb3RhdGVEZWciLCJvblVubG9hZCIsImRlc3Ryb3kiLCJvbkxvYWQiLCJlIiwi5YW25LuWIiwic3JjIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybSIsIm9uRW5kZWQiLCJjbGVhckludGVydmFsIiwiYSIsInNlZWsiLCJvblNob3ciLCJvblJlYWR5Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJzZXRJbnRlcnZhbCIsIm5leHQiLCJtZXRob2RzIiwiY2hhbmdlQXVkaW8iLCJpbmZvIiwicGxheU11c2ljIiwiZmlsdGVyIiwiY3VycmVudFZhbHVlIiwiaW5kZXgiLCJhcnIiLCJsZW5ndGgiLCJwcmUiLCJvbkNhbnBsYXkiLCJNYXRoIiwiZmxvb3IiLCJwYXVzZSIsInBsYXkiLCJjaGFuZ2VQcm9ncmVzcyIsImRldGFpbCIsInZhbHVlIiwib25DbGlja0l0ZW0iLCJjdXJyZW50SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuXG5jb25zdCBhdWRpb0NvbnRleHQgPSB1bmkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcbmF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IGZhbHNlO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpdGVtczogWyflhbbku5YnLCAn5Y6f5YibJywgJ+aXoOaNnycsICfnv7vllLEnXSxcblx0XHRcdGNsYXNzTXVzaWNMaXN0OiB7XCLlhbbku5ZcIjpbe1wibmFtZVwiOlwiQWxsIG9mIG1lLm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni9BbGwlMjBvZiUyMG1lLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwiQW5vdGhlciBkYXkgb2Ygc3VuLemZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvQW5vdGhlciUyMGRheSUyMG9mJTIwc3VuLSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcImxvbmVseSBDaHJpc3RtYXMgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2L2xvbmVseSUyMENocmlzdG1hcyUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCJzaGFwZSBvZiB5b3UgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2L3NoYXBlJTIwb2YlMjB5b3UlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5LmM5YWw5be05omY55qE5LiA5pW05aScLm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTQlQjklOEMlRTUlODUlQjAlRTUlQjclQjQlRTYlODklOTglRTclOUElODQlRTQlQjglODAlRTYlOTUlQjQlRTUlQTQlOUMubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLkvYbmhL/kurrplb/kuYUgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNCVCRCU4NiVFNiU4NCVCRiVFNCVCQSVCQSVFOSU5NSVCRiVFNCVCOSU4NSUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLkv6nkv6nnm7jlv5ggLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNCVCRiVBOSVFNCVCRiVBOSVFNyU5QiVCOCVFNSVCRiU5OCUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLljIbljIYgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNSU4QyU4NiVFNSU4QyU4NiUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLlj6/og73lkKYubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNSU4RiVBRiVFOCU4MyVCRCVFNSU5MCVBNi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuWklemYs+S5i+atjC3pmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNSVBNCU5NSVFOSU5OCVCMyVFNCVCOSU4QiVFNiVBRCU4Qy0lRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLlpJbpnaLnmoTkuJbnlYwgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNSVBNCU5NiVFOSU5RCVBMiVFNyU5QSU4NCVFNCVCOCU5NiVFNyU5NSU4QyUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLlpJzmnLot6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTUlQTQlOUMlRTYlOUMlQkEtJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5aSq6ZizLemZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU1JUE0JUFBJUU5JTk4JUIzLSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuWwj+WNiiAtIOmZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU1JUIwJThGJUU1JThEJThBJTIwLSUyMCVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuWwj+apmOeMqy3kuI3mn5MubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNSVCMCU4RiVFNiVBOSU5OCVFNyU4QyVBQi0lRTQlQjglOEQlRTYlOUYlOTMubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLlsI/mqZjnjKst5aWz5Lq66IqxLm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTUlQjAlOEYlRTYlQTklOTglRTclOEMlQUItJUU1JUE1JUIzJUU0JUJBJUJBJUU4JThBJUIxLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5bCP5qmY54yrLeWujOe+juWtpOeLrC5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU1JUIwJThGJUU2JUE5JTk4JUU3JThDJUFCLSVFNSVBRSU4QyVFNyVCRSU4RSVFNSVBRCVBNCVFNyU4QiVBQy5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuWwj+apmOeMqy3msLTmmJ/orrAubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNSVCMCU4RiVFNiVBOSU5OCVFNyU4QyVBQi0lRTYlQjAlQjQlRTYlOTglOUYlRTglQUUlQjAubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLlsI/mqZjnjKst55m95bGx6Iy2Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTUlQjAlOEYlRTYlQTklOTglRTclOEMlQUItJUU3JTk5JUJEJUU1JUIxJUIxJUU4JThDJUI2Lm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5b6A5ZCO5L2Z55SfIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTUlQkUlODAlRTUlOTAlOEUlRTQlQkQlOTklRTclOTQlOUYlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5b+D5YqoLemZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU1JUJGJTgzJUU1JThBJUE4LSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuaAquS9oOi/h+WIhue+juS4vS5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU2JTgwJUFBJUU0JUJEJUEwJUU4JUJGJTg3JUU1JTg4JTg2JUU3JUJFJThFJUU0JUI4JUJELm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5oiRIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTYlODglOTElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5o6i5riF5rC05rKzLm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTYlOEUlQTIlRTYlQjglODUlRTYlQjAlQjQlRTYlQjIlQjMubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLmmZrlqZoubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNiU5OSU5QSVFNSVBOSU5QS5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuaipuS4gOWcui5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU2JUEyJUE2JUU0JUI4JTgwJUU1JTlDJUJBLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5q+P5aSp54ix5L2g5aSa5LiA5LqbIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTYlQUYlOEYlRTUlQTQlQTklRTclODglQjElRTQlQkQlQTAlRTUlQTQlOUElRTQlQjglODAlRTQlQkElOUIlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5rGf5rmW5YS/5aWzLemZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU2JUIxJTlGJUU2JUI5JTk2JUU1JTg0JUJGJUU1JUE1JUIzLSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIua1quWtkOWbnuWktC3pmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFNiVCNSVBQSVFNSVBRCU5MCVFNSU5QiU5RSVFNSVBNCVCNC0lRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLnm5vlpI/nmoTmnpzlrp4t6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTclOUIlOUIlRTUlQTQlOEYlRTclOUElODQlRTYlOUUlOUMlRTUlQUUlOUUtJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6IOh5bm/55SfLemZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU4JTgzJUExJUU1JUI5JUJGJUU3JTk0JTlGLSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuiZmuaLny3pmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JTg1JUI2JUU0JUJCJTk2LyVFOCU5OSU5QSVFNiU4QiU5Ri0lRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLphpLnnYDphokt6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNSU4NSVCNiVFNCVCQiU5Ni8lRTklODYlOTIlRTclOUQlODAlRTklODYlODktJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6Zi/5qWa5aeR5aiYLemZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTUlODUlQjYlRTQlQkIlOTYvJUU5JTk4JUJGJUU2JUE1JTlBJUU1JUE3JTkxJUU1JUE4JTk4LSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9XSxcIuWOn+WIm1wiOlt7XCJuYW1lXCI6XCLliZHkuI7lrrblm60gLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JThFJTlGJUU1JTg4JTlCLyVFNSU4OSU5MSVFNCVCOCU4RSVFNSVBRSVCNiVFNSU5QiVBRCUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLlkYrkuIDmrrXokL0gLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JThFJTlGJUU1JTg4JTlCLyVFNSU5MSU4QSVFNCVCOCU4MCVFNiVBRSVCNSVFOCU5MCVCRCUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLosIHog73msqHngrnnl4UgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JThFJTlGJUU1JTg4JTlCLyVFOCVCMCU4MSVFOCU4MyVCRCVFNiVCMiVBMSVFNyU4MiVCOSVFNyU5NyU4NSUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLpmYjkuIDlj5HlhL8gLSDlvKbkuIrmnInmmKXnp4subXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JThFJTlGJUU1JTg4JTlCLyVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRiUyMC0lMjAlRTUlQkMlQTYlRTQlQjglOEElRTYlOUMlODklRTYlOTglQTUlRTclQTclOEIubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLpmYjkuIDlj5HlhL8gLSDnq6Xor53plYcubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JThFJTlGJUU1JTg4JTlCLyVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRiUyMC0lMjAlRTclQUIlQTUlRTglQUYlOUQlRTklOTUlODcubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLpmYjkuIDlj5HlhL8gLSDpmL/lqYbor7QubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU1JThFJTlGJUU1JTg4JTlCLyVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRiUyMC0lMjAlRTklOTglQkYlRTUlQTklODYlRTglQUYlQjQubXAzXCIsXCJsb25ndGhcIjpcIlwifV0sXCLml6DmjZ9cIjpbe1wibmFtZVwiOlwi5YmR5LiO5a625ZutLmZsYWNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTYlOTclQTAlRTYlOEQlOUYvJUU1JTg5JTkxJUU0JUI4JThFJUU1JUFFJUI2JUU1JTlCJUFELmZsYWNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIuW8puS4iuacieaYpeeniy5mbGFjXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU2JTk3JUEwJUU2JThEJTlGLyVFNSVCQyVBNiVFNCVCOCU4QSVFNiU5QyU4OSVFNiU5OCVBNSVFNyVBNyU4Qi5mbGFjXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLnq6Xor53plYcuZmxhY1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNiU5NyVBMCVFNiU4RCU5Ri8lRTclQUIlQTUlRTglQUYlOUQlRTklOTUlODcuZmxhY1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6Zi/5amG6K+0LmZsYWNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTYlOTclQTAlRTYlOEQlOUYvJUU5JTk4JUJGJUU1JUE5JTg2JUU4JUFGJUI0LmZsYWNcIixcImxvbmd0aFwiOlwiXCJ9XSxcIue/u+WUsVwiOlt7XCJuYW1lXCI6XCIxNy4zLjEx6ZmI5LiA5Y+R5YS/LeiwouiwouS9oOeahOeIse+8iOeIhuWImOe7p+iKrO+8iS5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTclQkYlQkIlRTUlOTQlQjEvMTcuMy4xMSVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi0lRTglQjAlQTIlRTglQjAlQTIlRTQlQkQlQTAlRTclOUElODQlRTclODglQjElRUYlQkMlODglRTclODglODYlRTUlODglOTglRTclQkIlQTclRTglOEElQUMlRUYlQkMlODkubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCJCaXphcnJlIGxvdmUgdHJpYW5nbGUgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU3JUJGJUJCJUU1JTk0JUIxL0JpemFycmUlMjBsb3ZlJTIwdHJpYW5nbGUlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwiQ2l0eSBvZiBTdGFycyAtIOmZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTclQkYlQkIlRTUlOTQlQjEvQ2l0eSUyMG9mJTIwU3RhcnMlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwiRGFybGluZyAtIOmZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTclQkYlQkIlRTUlOTQlQjEvRGFybGluZyUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCJEeWluZyBJbiBUaGUgU3VuIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS9EeWluZyUyMEluJTIwVGhlJTIwU3VuJTIwLSUyMCVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIkxldCBoZXIgZ28gLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU3JUJGJUJCJUU1JTk0JUIxL0xldCUyMGhlciUyMGdvJTIwLSUyMCVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIk5ldyBTb3VsIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS9OZXclMjBTb3VsJTIwLSUyMCVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIlJlbWVtYmVyIG1lIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS9SZW1lbWJlciUyMG1lJTIwLSUyMCVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRi5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIldoZW4gQ2hyaXN0bWFzIENvbWVzIFRvIFRvd24gLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU3JUJGJUJCJUU1JTk0JUIxL1doZW4lMjBDaHJpc3RtYXMlMjBDb21lcyUyMFRvJTIwVG93biUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCJsb3N0IHN0YXJzIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS9sb3N0JTIwc3RhcnMlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5LiA5Ymq5qKFIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTQlQjglODAlRTUlODklQUElRTYlQTIlODUlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5LiA5qyh5bCx5aW9IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTQlQjglODAlRTYlQUMlQTElRTUlQjAlQjElRTUlQTUlQkQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5LiL5Liq5pif5pyf5Y676Iux5Zu9IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTQlQjglOEIlRTQlQjglQUElRTYlOTglOUYlRTYlOUMlOUYlRTUlOEUlQkIlRTglOEIlQjElRTUlOUIlQkQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5Lqy5a+G54ix5Lq6IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTQlQkElQjIlRTUlQUYlODYlRTclODglQjElRTQlQkElQkElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5Lq66Ze0IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTQlQkElQkElRTklOTclQjQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5L2g5Zyo57uI54K5562J5oiRIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTQlQkQlQTAlRTUlOUMlQTglRTclQkIlODglRTclODIlQjklRTclQUQlODklRTYlODglOTElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5YWL5Y2c5YuSIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlODUlOEIlRTUlOEQlOUMlRTUlOEIlOTIlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5Y2B5LiH5q+r5Y2H5rOq5rC0IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlOEQlODElRTQlQjglODclRTYlQUYlQUIlRTUlOEQlODclRTYlQjMlQUElRTYlQjAlQjQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5Y6G5Y6G5LiH5LmhIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlOEUlODYlRTUlOEUlODYlRTQlQjglODclRTQlQjklQTElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5aSp6buR6buRIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQTQlQTklRTklQkIlOTElRTklQkIlOTElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5aWH5aaZ6IO95Yqb5q2MIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQTUlODclRTUlQTYlOTklRTglODMlQkQlRTUlOEElOUIlRTYlQUQlOEMlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5aW55p2l5ZCs5oiR55qE5ryU5ZSx5LyaIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQTUlQjklRTYlOUQlQTUlRTUlOTAlQUMlRTYlODglOTElRTclOUElODQlRTYlQkMlOTQlRTUlOTQlQjElRTQlQkMlOUElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5a6d6LSdIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQUUlOUQlRTglQjQlOUQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5bCP5bm46L+QIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQjAlOEYlRTUlQjklQjglRTglQkYlOTAlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5b2T5L2g6ICB5LqGIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQkQlOTMlRTQlQkQlQTAlRTglODAlODElRTQlQkElODYlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5b+954S25LmL6Ze0IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTUlQkYlQkQlRTclODQlQjYlRTQlQjklOEIlRTklOTclQjQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5oCn56m65bGxIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTYlODAlQTclRTclQTklQkElRTUlQjElQjElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5oOF5Lq6IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTYlODMlODUlRTQlQkElQkElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5oWi5oWi5Zac5qyi5L2gIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTYlODUlQTIlRTYlODUlQTIlRTUlOTYlOUMlRTYlQUMlQTIlRTQlQkQlQTAlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5oiQ6YO9IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTYlODglOTAlRTklODMlQkQlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5omT6ZSZ5LqGIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTYlODklOTMlRTklOTQlOTklRTQlQkElODYlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi5pyo5YWw5pifIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTYlOUMlQTglRTUlODUlQjAlRTYlOTglOUYlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi54m15Lid5oiPIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTclODklQjUlRTQlQjglOUQlRTYlODglOEYlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi55+c5oyBIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTclOUYlOUMlRTYlOEMlODElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi56yR57qi5bCYIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTclQUMlOTElRTclQkElQTIlRTUlQjAlOTglMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6JGj5bCP5aeQIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTglOTElQTMlRTUlQjAlOEYlRTUlQTclOTAlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6LWw6amsIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTglQjUlQjAlRTklQTklQUMlMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6L+95qKm5Lq6IC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTglQkYlQkQlRTYlQTIlQTYlRTQlQkElQkElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6YGH6KeBIC0g6ZmI5LiA5Y+R5YS/Lm1wM1wiLFwiZmlsZVwiOlwiaHR0cHM6Ly9mYS1tYW1hLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9haXphbG13LyVFNyVCRiVCQiVFNSU5NCVCMS8lRTklODElODclRTglQTclODElMjAtJTIwJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGLm1wM1wiLFwibG9uZ3RoXCI6XCJcIn0se1wibmFtZVwiOlwi6ZmI5LiA5Y+R5YS/IC0gY2FuJ3QgdGFrZSBteSBleWVzIG9mZiB5b3UubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU3JUJGJUJCJUU1JTk0JUIxLyVFOSU5OSU4OCVFNCVCOCU4MCVFNSU4RiU5MSVFNSU4NCVCRiUyMC0lMjBjYW4lMjd0JTIwdGFrZSUyMG15JTIwZXllcyUyMG9mZiUyMHlvdS5tcDNcIixcImxvbmd0aFwiOlwiXCJ9LHtcIm5hbWVcIjpcIumZiOS4gOWPkeWEvyAtIOWGmeS4gOmmluatjCAtIOmZiOS4gOWPkeWEvy5tcDNcIixcImZpbGVcIjpcImh0dHBzOi8vZmEtbWFtYS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYWl6YWxtdy8lRTclQkYlQkIlRTUlOTQlQjEvJUU5JTk5JTg4JUU0JUI4JTgwJUU1JThGJTkxJUU1JTg0JUJGJTIwLSUyMCVFNSU4NiU5OSVFNCVCOCU4MCVFOSVBNiU5NiVFNiVBRCU4QyUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifSx7XCJuYW1lXCI6XCLpsbwgLSDpmYjkuIDlj5HlhL8ubXAzXCIsXCJmaWxlXCI6XCJodHRwczovL2ZhLW1hbWEub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2FpemFsbXcvJUU3JUJGJUJCJUU1JTk0JUIxLyVFOSVCMSVCQyUyMC0lMjAlRTklOTklODglRTQlQjglODAlRTUlOEYlOTElRTUlODQlQkYubXAzXCIsXCJsb25ndGhcIjpcIlwifV19LFxuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdGF1ZGlvRGF0YTogW3tcblx0XHRcdFx0XHRmaWxlOiBcImh0dHA6Ly9hcHAudGlhbnRhaS5jb20uY24vdXBsb2Fkcy8yMDIwMDgxOS9hMjUxMDA5MzZlYzVkMzcyYzY4MDVlNWI0NzZkYmQ1OS5tcDNcIixcblx0XHRcdFx0XHRsb25ndGg6IFwiMDI6NDlcIixcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0bm93RnVsbER1cmF0aW9uOiAwLFxuXHRcdFx0ZHVyYXRpb246ICcxMDAnLFxuXHRcdFx0Y3VycmVudFRpbWU6IDYwLFxuXHRcdFx0YXVkaW9EdXJhdGlvbjogWycwJywgJzAwJ10sXG5cdFx0XHRhdWRpb0N1clRpbWU6IFsnMCcsICcwMCddLFxuXHRcdFx0bG9uZ3RoOiAnJyxcblx0XHRcdGlzUGxheTogZmFsc2UsXG5cdFx0XHR0aW1lcjogbnVsbCxcblx0XHRcdHN5c3RlbTogJycsXG5cdFx0XHRzdHlsZU9iajoge1xuXHRcdFx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxuXHRcdFx0XHRoZWlnaHQ6ICc4MHJweCcsXG5cdFx0XHRcdHdpZHRoOiAnODBycHgnLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0bGVmdDogJzUwJScsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLC01MCUgKScsXG5cdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlcidcblx0XHRcdH0sXG5cdFx0XHRyb3RhdGVUaW1lcjogbnVsbCxcblx0XHRcdHJvdGF0ZURlZzogMFxuXHRcdH1cblx0fSxcblx0b25VbmxvYWQoKSB7XG5cdFx0dGhpcy5pc1BsYXkgPSBmYWxzZVxuXHRcdGF1ZGlvQ29udGV4dC5kZXN0cm95KClcblx0fSxcblx0b25Mb2FkKGUpIHtcblx0XHR0aGlzLmF1ZGlvRGF0YSA9IHRoaXMuY2xhc3NNdXNpY0xpc3Qu5YW25LuWXG5cdFx0YXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuYXVkaW9EYXRhWzBdLmZpbGVcblx0XHR0aGlzLmxvbmd0aCA9IHRoaXMuYXVkaW9EYXRhWzBdLmxvbmd0aFxuXHRcdHRoaXMuc3lzdGVtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cblx0XHRhdWRpb0NvbnRleHQub25FbmRlZCgoZSkgPT4ge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChhLnRpbWVyKVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChhLnJvdGF0ZVRpbWVyKVxuXHRcdFx0dGhpcy50aW1lciA9IG51bGxcblx0XHRcdHRoaXMucm90YXRlVGltZXIgPSBudWxsXG5cdFx0XHR0aGlzLmlzUGxheSA9IGZhbHNlXG5cdFx0XHRhdWRpb0NvbnRleHQuc2VlaygwKTtcblx0XHRcdHRoaXMuYXVkaW9DdXJUaW1lID0gWycwJywgJzAwJ11cblx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwXG5cdFx0fSlcblx0XHRcblx0XHRcblx0fSxcblx0b25TaG93KCkge30sXG5cdG9uUmVhZHkoKSB7XG5cdFx0bGV0IGEgPSB0aGlzXG5cdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG5cdFx0XHR0aXRsZTogYS5hdWRpb0RhdGFbMF0ubmFtZVxuXHRcdH0pO1xuXHRcdFxuXHRcdC8vIOajgOafpeaYr+WQpuWujOaSrVxuXHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKGEubm93RnVsbER1cmF0aW9uIDwgYS5jdXJyZW50VGltZSkge1xuXHRcdFx0XHRhLm5leHQoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH0sIDMwMDApXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvLyBhdWRpbyBwbGF5ZXIgcGFydCA6IGluIHRoaXMgcGFydCB3ZSdkIGxpa2UgdG8gc2hvdyB0aGUgc2ltaWxhciBsYXlvdXRzIGFuZCBmdW5jdGlvbnMgYXMgd2FuZ3lpIG11c2ljLiBjcmVhdGVkIGJ5IEhzaSAoMTU2Mzc5MjQ3NkBxcS5jb20pXG5cdFx0Ly8gaW4gb3JkZXIgdG8gYXZvaWQgc3ludGF4IGVycm9yIG9mIHBsYXlpbmcgdGltZSAsIHVzZSBiYWNrZW5kIGRhdGEgdG8gc2hvdyBkdXJhdGlvbiB0aW1lIGluc3RlYWQgb2YgY2FsY3VsYXRpbmcgYnkgeW91cnNlbGZcblx0XHRjaGFuZ2VBdWRpbyhpbmZvKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMFxuXHRcdFx0dGhpcy5pc1BsYXkgPSBmYWxzZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHRcdFx0dGhpcy50aW1lciA9IG51bGxcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5yb3RhdGVUaW1lcilcblx0XHRcdHRoaXMucm90YXRlVGltZXIgPSBudWxsXG5cdFx0XHR0aGlzLmxvbmd0aCA9IGluZm8ubG9uZ3RoXG5cdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZSA9IFsnMCcsICcwMCddXG5cdFx0XHR0aGlzLmR1cmF0aW9uID0gMFxuXHRcdFx0YXVkaW9Db250ZXh0LnNlZWsoMCk7XG5cdFx0XHRhdWRpb0NvbnRleHQuc3JjID0gaW5mby5maWxlXG5cdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcblx0XHRcdFx0dGl0bGU6IGluZm8ubmFtZVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnBsYXlNdXNpYygpXG5cdFx0fSxcblx0XHRuZXh0KCkge1xuXHRcdFx0Ly8gbmV4dCBzb25nIGZ1bmN0aW9uLCB0aGUgbWFpbiB0aG91Z2h0IG9mIG5leHQgc29uZyBmdW5jdGlvbiBpcyB0aGF0IHdlIHNob3VsZCBmaW5kIG91dCB0aGUgaW5kZXggb2Ygc29uZyB3aGljaCBpcyBwbGF5aW5nLiBcblx0XHRcdC8vIGZpcnN0IG9mIGFsbCAsIGNsZWFyIHRoZSB0aW1lciBhbmQgc3RvcCByb3RhdGluZyBjb3ZlciwgYW5kIHRoZW4gZmluZCBvdXQgdGhlIGluZGV4IFxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnJvdGF0ZVRpbWVyKVxuXHRcdFx0dGhpcy5yb3RhdGVUaW1lciA9IG51bGxcblx0XHRcdGxldCBzcmMgPSBhdWRpb0NvbnRleHQuc3JjXG5cdFx0XHR0aGlzLmN1cnJlbnQgPSAwXG5cdFx0XHQvL3RpcHM6IChjb21wbGV4IGFycmF5IG1heSBjYXVzZSBwZXJmb3JtYW5jZSBpc3N1ZXMpXG5cdFx0XHR0aGlzLmF1ZGlvRGF0YS5maWx0ZXIoKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycikgPT4ge1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlLmZpbGUgPT0gc3JjKSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4ICsgMSA+PSBhcnIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpXG5cdFx0XHRcdFx0XHRsZXQgdGltZXIgPSBudWxsXG5cdFx0XHRcdFx0XHR0aGlzLmlzUGxheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Ly8gb25jZSBjbGljayBuZXh0IGJ1dHRvbiAsIHBhdXNlIGFuZCByZXNldCBwbGF5aW5ndGltZSBcblx0XHRcdFx0XHRcdGF1ZGlvQ29udGV4dC5zZWVrKDApO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDBcblx0XHRcdFx0XHRcdHRoaXMuYXVkaW9DdXJUaW1lID0gWycwJywgJzAwJ11cblx0XHRcdFx0XHRcdGF1ZGlvQ29udGV4dC5zcmMgPSB0aGlzLmF1ZGlvRGF0YVswXS5maWxlXG5cdFx0XHRcdFx0XHR0aGlzLmxvbmd0aCA9IHRoaXMuYXVkaW9EYXRhWzBdLmxvbmd0aFxuXHRcdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmF1ZGlvRGF0YVswXS5uYW1lXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpXG5cdFx0XHRcdFx0XHRsZXQgdGltZXIgPSBudWxsXG5cdFx0XHRcdFx0XHR0aGlzLmlzUGxheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YXVkaW9Db250ZXh0LnNlZWsoMCk7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMFxuXHRcdFx0XHRcdFx0dGhpcy5hdWRpb0N1clRpbWUgPSBbJzAnLCAnMDAnXVxuXHRcdFx0XHRcdFx0YXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuYXVkaW9EYXRhW2luZGV4ICsgMV0uZmlsZVxuXHRcdFx0XHRcdFx0dGhpcy5sb25ndGggPSB0aGlzLmF1ZGlvRGF0YVtpbmRleCArIDFdLmxvbmd0aFxuXHRcdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmF1ZGlvRGF0YVtpbmRleCArIDFdLm5hbWVcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge31cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5wbGF5TXVzaWMoKVxuXHRcdH0sXG5cdFx0cHJlKCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnJvdGF0ZVRpbWVyKVxuXHRcdFx0dGhpcy5yb3RhdGVUaW1lciA9IG51bGxcblx0XHRcdGxldCBzcmMgPSBhdWRpb0NvbnRleHQuc3JjXG5cdFx0XHR0aGlzLmN1cnJlbnQgPSAwXG5cdFx0XHR0aGlzLmF1ZGlvRGF0YS5maWx0ZXIoKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycikgPT4ge1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlLmZpbGUgPT0gc3JjKSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID09IDApIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcblx0XHRcdFx0XHRcdGxldCB0aW1lciA9IG51bGxcblx0XHRcdFx0XHRcdHRoaXMuaXNQbGF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRhdWRpb0NvbnRleHQuc2VlaygwKTtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwXG5cdFx0XHRcdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZSA9IFsnMCcsICcwMCddXG5cdFx0XHRcdFx0XHRhdWRpb0NvbnRleHQuc3JjID0gdGhpcy5hdWRpb0RhdGFbYXJyLmxlbmd0aCAtIDFdLmZpbGVcblx0XHRcdFx0XHRcdHRoaXMubG9uZ3RoID0gdGhpcy5hdWRpb0RhdGFbYXJyLmxlbmd0aCAtIDFdLmxvbmd0aFxuXHRcdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmF1ZGlvRGF0YVthcnIubGVuZ3RoIC0gMV0ubmFtZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcblx0XHRcdFx0XHRcdGxldCB0aW1lciA9IG51bGxcblx0XHRcdFx0XHRcdHRoaXMuaXNQbGF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRhdWRpb0NvbnRleHQuc2VlaygwKTtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwXG5cdFx0XHRcdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZSA9IFsnMCcsICcwMCddXG5cdFx0XHRcdFx0XHRhdWRpb0NvbnRleHQuc3JjID0gdGhpcy5hdWRpb0RhdGFbaW5kZXggLSAxXS5maWxlXG5cdFx0XHRcdFx0XHR0aGlzLmxvbmd0aCA9IHRoaXMuYXVkaW9EYXRhW2luZGV4IC0gMV0ubG9uZ3RoXG5cdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHRoaXMuYXVkaW9EYXRhW2luZGV4IC0gMV0ubmFtZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge31cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5wbGF5TXVzaWMoKVxuXHRcdH0sXG5cdFx0cGxheU11c2ljKCkge1xuXHRcdFx0XG5cdFx0XHQvLyByZXNldCBkdXJhdGlvbiB0aW1lIGJ5IGNsaWNraW5nIG1pZGJ1dHRvbiBvbmx5IFxuXHRcdFx0bGV0IGR1cmF0aW9uID0gYXVkaW9Db250ZXh0LmR1cmF0aW9uO1xuXHRcdFx0bGV0IGN1cnJlbnRUaW1lID0gYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuXHRcdFx0Ly8g6K6h566X5oC75pe26ZW/XG5cdFx0XHRhdWRpb0NvbnRleHQub25DYW5wbGF5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5ub3dGdWxsRHVyYXRpb24gPSBhdWRpb0NvbnRleHQuZHVyYXRpb25cblx0XHRcdH0pXG5cdFx0XHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZVswXSA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihjdXJyZW50VGltZSkgLyA2MCk7XG5cdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZVsxXSA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUpICUgNjA7XG5cdFx0XHRpZiAodGhpcy5pc1BsYXkpIHtcblx0XHRcdFx0dGhpcy5pc1BsYXkgPSBmYWxzZTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMucm90YXRlVGltZXIpXG5cdFx0XHRcdHRoaXMudGltZXIgPSBudWxsXG5cdFx0XHRcdHRoaXMucm90YXRlVGltZXIgPSBudWxsXG5cdFx0XHRcdGF1ZGlvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc1BsYXkgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnJvdGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucm90YXRlRGVnKytcblx0XHRcdFx0XHR0aGlzLnN0eWxlT2JqLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoJHt0aGlzLnJvdGF0ZURlZ31kZWcpYFxuXHRcdFx0XHR9LCA1MClcblx0XHRcdFx0YXVkaW9Db250ZXh0LnBsYXkoKTtcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lKytcblx0XHRcdFx0XHRpZiAodGhpcy5hdWRpb0N1clRpbWVbMV0gPiA1OCkge1xuXHRcdFx0XHRcdFx0dGhpcy5hdWRpb0N1clRpbWVbMF0rK1xuXHRcdFx0XHRcdFx0dGhpcy5hdWRpb0N1clRpbWVbMV0gPSAwXG5cdFx0XHRcdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZVsxXSsrXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuYXVkaW9DdXJUaW1lWzFdKytcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDEwMDApXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGFuZ2VQcm9ncmVzcyhlKSB7XG5cdFx0XHQvLyBpb3Mg5ouW5Yqoc2xpZGVyIOS8muWHuueOsOa8guenu++8jOWumuS9jeS4jeWHhu+8jOiLueaenOaaguaXtueUqOaLluWKqOaXtuaaguWBnOaSreaUvuadpeinhOmBv1xuXHRcdFx0Ly8gaW9zIHBhdXNlIG11c2ljIHdoZW4gZHJhZ2dpbmcgLCBBbmRyb2lkIGNvdWxkIHN0aWxsIHBsYXlcblx0XHRcdGF1ZGlvQ29udGV4dC5zZWVrKGUuZGV0YWlsLnZhbHVlKTtcblx0XHRcdC8vIHBhdXNlIG11c2ljIHdoZW4gZHJhZ2dpbmcgLCBpbiBvcmRlciB0byBsb2FkIHRpbWVyIHJlcGVhdGx5XG5cdFx0XHRpZiAodGhpcy5zeXN0ZW0gPT0gJ2lvcycpIHtcblx0XHRcdFx0dGhpcy5hdWRpb0N1clRpbWVbMF0gPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoZS5kZXRhaWwudmFsdWUpIC8gNjApO1xuXHRcdFx0XHR0aGlzLmF1ZGlvQ3VyVGltZVsxXSA9IE1hdGguZmxvb3IoZS5kZXRhaWwudmFsdWUpICUgNjA7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnJvdGF0ZVRpbWVyKVxuXHRcdFx0XHR0aGlzLnRpbWVyID0gbnVsbFxuXHRcdFx0XHR0aGlzLnJvdGF0ZVRpbWVyID0gbnVsbFxuXHRcdFx0XHR0aGlzLmlzUGxheSA9IGZhbHNlXG5cdFx0XHRcdGF1ZGlvQ29udGV4dC5wYXVzZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMucm90YXRlVGltZXIpXG5cdFx0XHRcdHRoaXMudGltZXIgPSBudWxsXG5cdFx0XHRcdHRoaXMucm90YXRlVGltZXIgPSBudWxsXG5cdFx0XHRcdHRoaXMuaXNQbGF5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucGxheU11c2ljKClcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOWIhuauteWZqOWNleWHu+S6i+S7tlxuXHRcdG9uQ2xpY2tJdGVtKGUpIHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnQgIT09IGUuY3VycmVudEluZGV4KSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IGUuY3VycmVudEluZGV4XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmF1ZGlvRGF0YSA9IHRoaXMuY2xhc3NNdXNpY0xpc3RbdGhpcy5pdGVtc1tlLmN1cnJlbnRJbmRleF1dXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 20 */
/*!********************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/App.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************!*\
  !*** G:/Workspace/Hbuilder/FaMama/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 22);\n/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUU6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/Workspace/Hbuilder/FaMama/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ })
],[[0,"app-config"]]]);