"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkinstalling_webpack"] = self["webpackChunkinstalling_webpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Roboto);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  gap: 200px;\\r\\n  width: 100%;\\r\\n  margin-top: 15px;\\r\\n  font-size: 32px;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  text-decoration: none;\\r\\n  padding: 10px 30px;\\r\\n  color: rgb(14, 13, 13);\\r\\n}\\r\\n\\r\\n.logo a {\\r\\n  display: block;\\r\\n  font-weight: bold;\\r\\n  margin-left: 100px;\\r\\n  color: rgb(14, 13, 13);\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.my-movies {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.borderbox {\\r\\n  width: 100%;\\r\\n  border: 3px solid black;\\r\\n  padding: 2.5%;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.footerText {\\r\\n  font-family: Roboto, sans-serif;\\r\\n  margin-bottom: 0;\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.endblackbox {\\r\\n  /* margin-top: 0; */\\r\\n  background-color: grey;\\r\\n  height: 2rem;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  height: auto;\\r\\n  padding-top: 40px;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  gap: 40px;\\r\\n  margin: 50px 200px;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-heart:active {\\r\\n  background: red;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  width: 98%;\\r\\n  height: 100vh;\\r\\n  z-index: 99;\\r\\n  background-color: white;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 1rem;\\r\\n  transform: scale(0.1);\\r\\n  text-align: center;\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.popupContent {\\r\\n  overflow: scroll;\\r\\n  height: 75%;\\r\\n  border-radius: 6px;\\r\\n  border: 2px solid black;\\r\\n  color: #333;\\r\\n  padding: 4%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.open {\\r\\n  visibility: visible;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n.closebutton {\\r\\n  font-size: 50px;\\r\\n  font-weight: bolder;\\r\\n  position: fixed;\\r\\n  right: 50px;\\r\\n  top: 40px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.firstline {\\r\\n  display: flex;\\r\\n  width: 80%;\\r\\n  justify-content: space-around;\\r\\n  padding-top: 2%;\\r\\n  font-size: 30px;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.secondline {\\r\\n  font-family: Roboto, sans-serif;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.inputname {\\r\\n  width: 60%;\\r\\n  height: 2rem;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.popupCommentButton {\\r\\n  width: 25%;\\r\\n  height: 2rem;\\r\\n}\\r\\n\\r\\n.commentsContainer {\\r\\n  display: flex;\\r\\n  width: 20%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.countercomment {\\r\\n  font-family: Roboto, sans-serif;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://installing-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://installing-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://installing-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://installing-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://installing-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://installing-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://installing-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://installing-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://installing-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://installing-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayMovies.js */ \"./src/modules/displayMovies.js\");\n/* harmony import */ var _modules_addcomment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addcomment.js */ \"./src/modules/addcomment.js\");\n/* harmony import */ var _modules_fetchcomment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fetchcomment.js */ \"./src/modules/fetchcomment.js\");\n/* harmony import */ var _modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _modules_addlike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addlike.js */ \"./src/modules/addlike.js\");\n/* harmony import */ var _modules_fetchlike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetchlike.js */ \"./src/modules/fetchlike.js\");\n/* eslint-disable no-alert */\r\n/* eslint-disable no-unused-vars */\r\n// eslint-disable-next-line no-unused-vars\r\n// import _ from 'lodash';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst movies = document.querySelector('.movie-info');\r\nconst id = [1, 2, 3, 4, 5, 6];\r\nconst popup = document.querySelector('.pop-up');\r\nconst closebutton = document.querySelector('.closebutton');\r\nconst popupContentLoad = document.querySelector('.popupContentLoad');\r\nconst popupCommentButton = document.querySelector('.popupCommentButton');\r\nconst inputname = document.querySelector('.inputname');\r\nconst textarea = document.querySelector('.textarea');\r\nconst commentsload = document.querySelector('.commentsload');\r\nconst countercomment = document.querySelector('.countercomment');\r\nlet nooflikes;\r\n\r\nid.forEach((movie) => {\r\n  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie).then(async (res) => {\r\n    nooflikes = 0;\r\n    const likesdisplay = await (0,_modules_fetchlike_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n    likesdisplay.forEach((element) => {\r\n      if (parseInt(element.item_id, 10) === movie) {\r\n        nooflikes = element.likes;\r\n      }\r\n    });\r\n    movies.innerHTML += `<div id=\"${movie}\" class=\"movie-img\">\r\n    <img src=\"${res.image.medium}\">\r\n    <section class='movie-desk'>\r\n      <p class=\"movie-title\">${res.name}</p>\r\n      <div class=\"likeContainer\">\r\n      <button id=\"${movie}\" class=\"like-button\"><i class=\"fa-regular fa-heart like\"></i></button>\r\n        <p class=\"likesnumber\">No. of likes are: ${nooflikes}</p>\r\n      </div>\r\n    </section>\r\n    <button class=\"comment-button\">Comment</button></div>`;\r\n  });\r\n});\r\n\r\nlet ID = '';\r\nlet commentCounter = 0;\r\nfunction openPopUp() {\r\n  popup.classList.add('open');\r\n}\r\nfunction closePopUp() {\r\n  popup.classList.remove('open');\r\n}\r\n\r\nmovies.addEventListener('click', async (e) => {\r\n  ID = e.target.parentElement.id;\r\n  if (e.target.classList.contains('comment-button')) {\r\n    (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.parentElement.id).then(async (res) => {\r\n      openPopUp();\r\n      popupContentLoad.innerHTML = `<div>\r\n      <img id=\"${e.target.parentElement.id}\" src=\"${res.image.medium}\"></div>\r\n      <div class=\"firstline\">\r\n      <span class=\"firstlineItemone\">Categories: ${res.genres.join(', ')}</span>\r\n      <span class=\"firstlineItemtwo\">Rating: ${res.rating.average}</span>\r\n      </div>\r\n      <div class=\"secondline\">${res.summary}\r\n      </div>`;\r\n      await (0,_modules_fetchcomment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ID);\r\n      commentCounter = (0,_modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n      countercomment.innerHTML = `( ${commentCounter} )`;\r\n    });\r\n  }\r\n  if (e.target.classList.contains('like')) {\r\n    await (0,_modules_addlike_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n      item_id: ID,\r\n    });\r\n    const likesdisplay = await (0,_modules_fetchlike_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n    likesdisplay.forEach((element) => {\r\n      if (element.item_id === ID) {\r\n        nooflikes = element.likes;\r\n      }\r\n    });\r\n    e.target.parentElement.parentElement.innerHTML = `<button id=\"${ID}\" class=\"like-button\"><i class=\"fa-regular fa-heart like\"></i></button>\r\n    <p class=\"likesnumber\">No. of likes are: ${nooflikes}</p>`;\r\n  }\r\n});\r\n\r\nclosebutton.addEventListener('click', () => {\r\n  commentsload.innerHTML = '';\r\n  commentCounter = 0;\r\n  closePopUp();\r\n});\r\n\r\npopupCommentButton.addEventListener('click', () => {\r\n  (0,_modules_addcomment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    item_id: ID,\r\n    username: inputname.value,\r\n    comment: textarea.value,\r\n  });\r\n  commentsload.innerHTML += `<p><span>Just now ${inputname.value}: ${textarea.value}</p>`;\r\n  commentCounter = (0,_modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  countercomment.innerHTML = `( ${commentCounter} )`;\r\n  inputname.value = '';\r\n  textarea.value = '';\r\n});\r\n\n\n//# sourceURL=webpack://installing-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/addcomment.js":
/*!***********************************!*\
  !*** ./src/modules/addcomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addcomment = (Obj) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/comments', {\r\n  method: 'POST',\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  },\r\n  body: JSON.stringify(Obj),\r\n}).then((res) => res)\r\n  .then((output) => output);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addcomment);\n\n//# sourceURL=webpack://installing-webpack/./src/modules/addcomment.js?");

/***/ }),

/***/ "./src/modules/addlike.js":
/*!********************************!*\
  !*** ./src/modules/addlike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addlike = (Obj) => fetch(\r\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/likes',\r\n  {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n    body: JSON.stringify(Obj),\r\n  },\r\n).then((res) => res);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addlike);\r\n\n\n//# sourceURL=webpack://installing-webpack/./src/modules/addlike.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounterFunction = () => {\r\n  const commentsload = document.querySelector('.commentsload');\r\n  let counter = 0;\r\n  counter = commentsload.getElementsByTagName('p').length;\r\n  return counter;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounterFunction);\n\n//# sourceURL=webpack://installing-webpack/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchData)\n/* harmony export */ });\nasync function fetchData(id) {\r\n  const fetching = await fetch(`https://api.tvmaze.com/shows/${id}`)\r\n    .then((response) => response.json());\r\n  return fetching;\r\n}\r\n\n\n//# sourceURL=webpack://installing-webpack/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/fetchcomment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchcomment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchcomment)\n/* harmony export */ });\nconst commentsload = document.querySelector('.commentsload');\r\n\r\nasync function fetchcomment(id) {\r\n  commentsload.innerHTML = '';\r\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/comments?item_id=${id}`)\r\n    .then((res) => res.json())\r\n    .then((output) => {\r\n      output.forEach((comment) => {\r\n        commentsload.innerHTML += `<p><span>${comment.creation_date} ${comment.username}: ${comment.comment}</span></p>`;\r\n      });\r\n    });\r\n}\n\n//# sourceURL=webpack://installing-webpack/./src/modules/fetchcomment.js?");

/***/ }),

/***/ "./src/modules/fetchlike.js":
/*!**********************************!*\
  !*** ./src/modules/fetchlike.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchlike)\n/* harmony export */ });\nasync function fetchlike() {\r\n  return fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1RjuQJrVTvT45Mcm7X6n/likes',\r\n  )\r\n    .then((res) => res.json())\r\n    .then((output) => output);\r\n}\r\n\n\n//# sourceURL=webpack://installing-webpack/./src/modules/fetchlike.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);