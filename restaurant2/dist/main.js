/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hogsheadsign.jpg */ "./src/images/hogsheadsign.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/parchment.jpeg */ "./src/images/parchment.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/harry-potter);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Globals */\n/* Font imported from https://www.cdnfonts.com/harry-potter.font */\nhtml, body, #content {\n    font-family: 'Harry Potter', sans-serif;\n    color: white;\n    height: 100%;\n    padding: 0px;\n    margin: 0px;\n    background-color: purple;\n}\n\n\n.parallax {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    height: 65%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    /* Fonts */\n    display: flex;\n    color: black;\n    text-align: center;\n    font-size: 48px;\n}\n\n.parallax-btn {\n    border-radius: 5px;\n    /* background-color: purple; */\n    font-size: 48px;\n}\n\n.banner-header {\n    font-size: 100px;\n    margin-bottom:10px;\n    margin-top: 0px;\n}\n\n.container-header-md {\n    font-size: 64px;\n}\n\n.banner-header-sm {\n    font-size: 36px;\n    margin-bottom: 5px;\n}\n\n/* Navigation Bar */\n\n.navbar {\n    display: flex;\n    justify-content: center;\n    background-color: rgb(146, 76, 146);\n    /* color: white; */\n    width: 100%;\n    /* padding: 5px; */\n}\n\n.navItem {\n    /* border: 2px solid black; */\n    font-size: 36px;\n    margin-left: 15px;\n    margin-right: 15px;\n    height: 100%;\n    padding: 5px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n}\n\n.navItem:hover {\n    background-color: purple;\n}\n\n/* Containers */\n.container{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    /* background-color: purple; */\n    /* color: white; */\n}\n\n.container-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* height: 100%; */\n}\n\n.container-menu {\n    /* display: none; */\n}\n\n.container > h1 {\n    font-size: 100px;\n}\n\n.basic {\n    border: 3px solid black;\n    width: 80%;\n\n}\n\n#about {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: purple; */\n    padding: 20px;\n}\n\n.about-detail {\n    width: 50%;\n    border-radius: 10px;\n    background-color: rgb(146, 76, 146);\n    font-size: 36px;\n    text-align: center;\n    padding: 10px;\n    border: 7px solid rgb(54, 12, 82);\n    color: white;\n    margin-bottom: 20px;\n}\n\n.menu {\n    display: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    width: 80%;\n    color: rgb(80, 55, 41);\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 100px;\n}\n\n.menu-category {\n    width: 40%;\n}\n\n.menu-header {\n    /* text-decoration: underline; */\n    margin-bottom: 0px;\n}\n\n.menu-item {\n    font-size: 48px;\n}\n\n\n/* Images */\n.background-image {\n    position: fixed;\n    width: 100%;\n    z-index: -1;\n}\n\n\n/* Misc */\n\n.linebreak {\n    border: 0px;\n    height: 5px;\n    background-color: black;\n    width: 90%;\n}\n\n/* Testing */\n.test {\n    color: red;\n    font-family: 'Harry Potter', sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ,kEAAkE;AAElE;IACI,uCAAuC;IACvC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,wBAAwB;AAC5B;;;AAGA;IACI,yDAAkD;IAClD,WAAW;IACX,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;;IAEtB,UAAU;IACV,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,uBAAuB;IACvB,mCAAmC;IACnC,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,eAAe;AACf;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,mCAAmC;IACnC,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yDAAgD;IAChD,UAAU;IACV,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;;AAGA,WAAW;AACX;IACI,eAAe;IACf,WAAW;IACX,WAAW;AACf;;;AAGA,SAAS;;AAET;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,UAAU;AACd;;AAEA,YAAY;AACZ;IACI,UAAU;IACV,uCAAuC;AAC3C","sourcesContent":["/* Globals */\n/* Font imported from https://www.cdnfonts.com/harry-potter.font */\n@import url('https://fonts.cdnfonts.com/css/harry-potter');\nhtml, body, #content {\n    font-family: 'Harry Potter', sans-serif;\n    color: white;\n    height: 100%;\n    padding: 0px;\n    margin: 0px;\n    background-color: purple;\n}\n\n\n.parallax {\n    background-image: url('./images/hogsheadsign.jpg');\n    height: 65%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    /* Fonts */\n    display: flex;\n    color: black;\n    text-align: center;\n    font-size: 48px;\n}\n\n.parallax-btn {\n    border-radius: 5px;\n    /* background-color: purple; */\n    font-size: 48px;\n}\n\n.banner-header {\n    font-size: 100px;\n    margin-bottom:10px;\n    margin-top: 0px;\n}\n\n.container-header-md {\n    font-size: 64px;\n}\n\n.banner-header-sm {\n    font-size: 36px;\n    margin-bottom: 5px;\n}\n\n/* Navigation Bar */\n\n.navbar {\n    display: flex;\n    justify-content: center;\n    background-color: rgb(146, 76, 146);\n    /* color: white; */\n    width: 100%;\n    /* padding: 5px; */\n}\n\n.navItem {\n    /* border: 2px solid black; */\n    font-size: 36px;\n    margin-left: 15px;\n    margin-right: 15px;\n    height: 100%;\n    padding: 5px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n}\n\n.navItem:hover {\n    background-color: purple;\n}\n\n/* Containers */\n.container{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    /* background-color: purple; */\n    /* color: white; */\n}\n\n.container-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* height: 100%; */\n}\n\n.container-menu {\n    /* display: none; */\n}\n\n.container > h1 {\n    font-size: 100px;\n}\n\n.basic {\n    border: 3px solid black;\n    width: 80%;\n\n}\n\n#about {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: purple; */\n    padding: 20px;\n}\n\n.about-detail {\n    width: 50%;\n    border-radius: 10px;\n    background-color: rgb(146, 76, 146);\n    font-size: 36px;\n    text-align: center;\n    padding: 10px;\n    border: 7px solid rgb(54, 12, 82);\n    color: white;\n    margin-bottom: 20px;\n}\n\n.menu {\n    display: none;\n    background-image: url('./images/parchment.jpeg');\n    width: 80%;\n    color: rgb(80, 55, 41);\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 100px;\n}\n\n.menu-category {\n    width: 40%;\n}\n\n.menu-header {\n    /* text-decoration: underline; */\n    margin-bottom: 0px;\n}\n\n.menu-item {\n    font-size: 48px;\n}\n\n\n/* Images */\n.background-image {\n    position: fixed;\n    width: 100%;\n    z-index: -1;\n}\n\n\n/* Misc */\n\n.linebreak {\n    border: 0px;\n    height: 5px;\n    background-color: black;\n    width: 90%;\n}\n\n/* Testing */\n.test {\n    color: red;\n    font-family: 'Harry Potter', sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/butterbeer.jpg":
/*!***********************************!*\
  !*** ./src/images/butterbeer.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28cb99ca622deecb14a6.jpg";

/***/ }),

/***/ "./src/images/hogsheadsign.jpg":
/*!*************************************!*\
  !*** ./src/images/hogsheadsign.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31fae82307eb158b7ece.jpg";

/***/ }),

/***/ "./src/images/parchment.jpeg":
/*!***********************************!*\
  !*** ./src/images/parchment.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6a83b1126af2f1bf54b.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_butterbeer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/butterbeer.jpg */ "./src/images/butterbeer.jpg");
/* harmony import */ var _images_hogsheadsign_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hogsheadsign.jpg */ "./src/images/hogsheadsign.jpg");



console.log("Loading scripts....")


function loadPageContent() {
    // Main function to load HTML content
    // let domBody = document.body;
    let domBody = document.createElement('div');
    domBody.id = 'content';
    // domBody.appendChild(navBar());
    domBody.appendChild(createBanner());
    domBody.appendChild(loadParallax())
    domBody.appendChild(navBar());



    // Load Menu/About
    domBody.appendChild(loadMenu())
    domBody.appendChild(loadAbout())


    document.body.appendChild(domBody)
}

function createBanner() {
    // Create and return the banner image for the website
    let banner = document.createElement('div');

    let welcomeTo = document.createElement('p'); 
    let hogsHead = document.createElement('p');
    hogsHead.classList.add('banner-header');
    welcomeTo.classList.add('banner-header-sm')

    welcomeTo.innerText = 'Welcome to';
    hogsHead.innerText = "Hog's Head Inn";

    banner.appendChild(welcomeTo);
    banner.appendChild(hogsHead);

    banner.classList.add('container');

    return banner;
}

function loadParallax() {
    // Create an fixed background image that can be scrolled over
    let parallaxDiv = document.createElement('div');
    parallaxDiv.classList.add('parallax');

    // parallaxDiv.appendChild(parallaxButton('Menu'));
    // parallaxDiv.appendChild(parallaxButton('Contact'));
    return parallaxDiv;
}

function parallaxButton(keyword) {
    // Create a button to add to the parallax
    let parallaxBtn = document.createElement('div');
    parallaxBtn.classList.add('parallax-btn');
    parallaxBtn.innerText = keyword

    return parallaxBtn;
}
// Navbar

function navBar() {
    // Tabbed browsing for menu/contact/about
    let navBar = document.createElement('div');
    navBar.classList.add('navbar');

    navBar.appendChild(createNavItem('About'));
    navBar.appendChild(createNavItem('Menu'));
    navBar.appendChild(createNavItem('Contact'));
    return navBar;
}

function createNavItem(keyword) {
    // Create a tab for adding to the navbar
    let navBarItem = document.createElement('div');
    navBarItem.classList.add('navItem');
    navBarItem.innerText = keyword;

    return navBarItem;
}

// Create Tabbed content

function loadAbout() {
    // Basic details for the restaurant
    let aboutDiv = document.createElement('div');
    let desc = "The Hog's Head Inn is a slightly disreputable inn and pub in the all-wizarding village of Hogsmeade. It is located one or two streets off of the High Street, the Hog’s Head Inn has been a fixture of Hogsmeade for several years. The Inn is owned and operated by Aberforth Dumbledore."
    let hours = "Open Daily 24 hours!";
    let directions = "";
    aboutDiv.id = 'about'

    aboutDiv.appendChild(aboutDetail(desc))
    aboutDiv.appendChild(aboutDetail(hours));
    return aboutDiv;

}

function aboutDetail(keyword) {
    // An individual about detail
    let aboutDetail = document.createElement('div');
    aboutDetail.classList.add('about-detail');

    // aboutDetail.innerText = "The Hog's Head Inn is a slightly disreputable inn and pub in the all-wizarding village of Hogsmeade. It is located one or two streets off of the High Street, the Hog’s Head Inn has been a fixture of Hogsmeade for several years. The Inn is owned and operated by Aberforth Dumbledore."
    aboutDetail.innerText = keyword;
    return aboutDetail
}

function loadMenu() {
    // Load the pages body content
    let bodyContainer = document.createElement('div');
    let menuContainer = document.createElement('div');
    let bodyHeader = document.createElement('h1');

    // bodyContainer.classList.add('container');
    // bodyContainer.classList.add('container-body')
    // bodyContainer.classList.add('container-menu');

    menuContainer.classList.add('container');
    menuContainer.classList.add('container-body')
    menuContainer.classList.add('container-menu');
    menuContainer.style.display = 'none';

    bodyHeader.innerText = "Menu";
    menuContainer.appendChild(bodyHeader)
    menuContainer.appendChild(createMenu())
    return menuContainer;
}

function loadContact() {
    // Contact information for the restaurant
    let contactDiv = document.createElement('div');


    return contactDiv;
}

function createMenu() {
    // Creeate the elements and populate the menu
    let menu = document.createElement('div');
    let food = document.createElement('div');
    let drinks = document.createElement('div');

    food.classList.add('menu-category');
    food.classList.add('food');
    drinks.classList.add('menu-category');
    drinks.classList.add('drinks');
    menu.classList.add('menu');

    menu.appendChild(food);
    menu.appendChild(drinks);
    menuItems(food, drinks)
    return menu;
}

function menuItems(food, drinks) {
    // Create the menu items, return a list that can then be added to the menu div

    let foodHeader = document.createElement('p');
    let drinkHeader = document.createElement('p');
    foodHeader.classList.add('container-header-md');
    drinkHeader.classList.add('container-header-md');
    foodHeader.classList.add('menu-header');
    drinkHeader.classList.add('menu-header');

    foodHeader.innerText = 'Food';
    drinkHeader.innerText = 'Drinks'

    food.appendChild(foodHeader);
    drinks.appendChild(drinkHeader)
    
    food.appendChild(addLineBreak());
    drinks.appendChild(addLineBreak())
    // Try not to hard code this, instead create a text file with the menu items, and then convert that, later
    let foodItems = {
        'Chocolate Frogs': '4',
        'Corned Beef Sandwich': '10',
        'Treacle Tarts': '12',
        'Pumpkin Pasty': '10',
        'Bouillabaisse': '14',
        'Full English Breakfast': '15',
        'Haggis': '14',
        "Shepards Pie": '16',
        
    }

    let drinkItems = {
        'Butterbeer': '8',
        'Hog Head Ale': '9',
        'Goblin Lager': '7',
        'Coffee': '4',
        'Fizzbuzz Soda': '3',

    }

    let foodNames = Object.keys(foodItems);
    let drinkNames = Object.keys(drinkItems);

    // Populate Food menu
    populateMenu(food, foodItems);
    populateMenu(drinks, drinkItems);
}

function populateMenu(menuCat, menuItems) {
    let menuNames = Object.keys(menuItems);
    for (let i = 0; i < menuNames.length;i++) {
        let div = document.createElement('p');
        div.classList.add('menu-item');
        div.innerText = `${menuNames[i]} ${menuItems[menuNames[i]]}`;

        menuCat.appendChild(div);
    }
}

function addLineBreak() {
    // Create a linebreak that can be added to other elements
    let linebreak = document.createElement('hr');
    linebreak.classList.add('linebreak');
    return linebreak;
}

loadPageContent()

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
console.log("Loading frontpage navigation scripts...")

let aboutPage = document.querySelector('#about');
let menuPage = document.querySelector('.container-menu');

function navBarListeners() {
    // Add event listeners to navbar buttons;
    let navbarButtons = document.querySelectorAll('.navItem')

    navbarButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.innerText === 'Menu') {
                aboutPage.style.display = 'none';
                // contactPage.style.display = 'none';
                menuPage.style.display = 'flex'
            } else if(button.innerText === 'About') {
                console.log('About')
                aboutPage.style.display = 'flex';
                // contactPage.style.display = 'none';
                menuPage.style.display = 'none';
            } else if(button.innerText === 'Contact') {
                aboutPage.style.display = 'none';
                // contactPage.style.display = 'none';
                menuPage.style.display = 'flex'
                console.log("Contact")
            }
        })
    })
}

navBarListeners()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYyxFQUFFLHdCQUF3Qjs7QUFFbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDak9BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Mi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudDIvLi9zcmMvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaG9nc2hlYWRzaWduLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BhcmNobWVudC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2hhcnJ5LXBvdHRlcik7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2xvYmFscyAqL1xcbi8qIEZvbnQgaW1wb3J0ZWQgZnJvbSBodHRwczovL3d3dy5jZG5mb250cy5jb20vaGFycnktcG90dGVyLmZvbnQgKi9cXG5odG1sLCBib2R5LCAjY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGFycnkgUG90dGVyJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuXFxuLnBhcmFsbGF4IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgLyogRm9udHMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnBhcmFsbGF4LWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOyAqL1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5iYW5uZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5jb250YWluZXItaGVhZGVyLW1kIHtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbn1cXG5cXG4uYmFubmVyLWhlYWRlci1zbSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIEJhciAqL1xcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgNzYsIDE0Nik7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cXG59XFxuXFxuLm5hdkl0ZW0ge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4vKiBDb250YWluZXJzICovXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuLmNvbnRhaW5lci1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyLW1lbnUge1xcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyID4gaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFzaWMge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDgwJTtcXG5cXG59XFxuXFxuI2Fib3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uYWJvdXQtZGV0YWlsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgNzYsIDE0Nik7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDdweCBzb2xpZCByZ2IoNTQsIDEyLCA4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBjb2xvcjogcmdiKDgwLCA1NSwgNDEpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5tZW51LWNhdGVnb3J5IHtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLm1lbnUtaGVhZGVyIHtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuXFxuLyogSW1hZ2VzICovXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuXFxuLyogTWlzYyAqL1xcblxcbi5saW5lYnJlYWsge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4vKiBUZXN0aW5nICovXFxuLnRlc3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ0hhcnJ5IFBvdHRlcicsIHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaLGtFQUFrRTtBQUVsRTtJQUNJLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJLHlEQUFrRDtJQUNsRCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCOztJQUV0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVOztBQUVkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5REFBZ0Q7SUFDaEQsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0EsV0FBVztBQUNYO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7OztBQUdBLFNBQVM7O0FBRVQ7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHbG9iYWxzICovXFxuLyogRm9udCBpbXBvcnRlZCBmcm9tIGh0dHBzOi8vd3d3LmNkbmZvbnRzLmNvbS9oYXJyeS1wb3R0ZXIuZm9udCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvaGFycnktcG90dGVyJyk7XFxuaHRtbCwgYm9keSwgI2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ0hhcnJ5IFBvdHRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcblxcbi5wYXJhbGxheCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvaG9nc2hlYWRzaWduLmpwZycpO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICAvKiBGb250cyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ucGFyYWxsYXgtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmJhbm5lci1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLmNvbnRhaW5lci1oZWFkZXItbWQge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxufVxcblxcbi5iYW5uZXItaGVhZGVyLXNtIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gQmFyICovXFxuXFxuLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCA3NiwgMTQ2KTtcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xcbn1cXG5cXG4ubmF2SXRlbSB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG59XFxuXFxuLm5hdkl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi8qIENvbnRhaW5lcnMgKi9cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbi5jb250YWluZXItbWVudSB7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi5jb250YWluZXIgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5iYXNpYyB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogODAlO1xcblxcbn1cXG5cXG4jYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hYm91dC1kZXRhaWwge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCA3NiwgMTQ2KTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHJnYig1NCwgMTIsIDgyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvcGFyY2htZW50LmpwZWcnKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgY29sb3I6IHJnYig4MCwgNTUsIDQxKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4ubWVudS1jYXRlZ29yeSB7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcblxcbi8qIEltYWdlcyAqL1xcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcblxcbi8qIE1pc2MgKi9cXG5cXG4ubGluZWJyZWFrIHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLyogVGVzdGluZyAqL1xcbi50ZXN0IHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdIYXJyeSBQb3R0ZXInLCBzYW5zLXNlcmlmO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEJ1dHRlckJlZXIgZnJvbSAnLi9pbWFnZXMvYnV0dGVyYmVlci5qcGcnO1xuaW1wb3J0IEhvZ3NIZWFkIGZyb20gJy4vaW1hZ2VzL2hvZ3NoZWFkc2lnbi5qcGcnO1xuY29uc29sZS5sb2coXCJMb2FkaW5nIHNjcmlwdHMuLi4uXCIpXG5cblxuZnVuY3Rpb24gbG9hZFBhZ2VDb250ZW50KCkge1xuICAgIC8vIE1haW4gZnVuY3Rpb24gdG8gbG9hZCBIVE1MIGNvbnRlbnRcbiAgICAvLyBsZXQgZG9tQm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgbGV0IGRvbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb21Cb2R5LmlkID0gJ2NvbnRlbnQnO1xuICAgIC8vIGRvbUJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xuICAgIGRvbUJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQmFubmVyKCkpO1xuICAgIGRvbUJvZHkuYXBwZW5kQ2hpbGQobG9hZFBhcmFsbGF4KCkpXG4gICAgZG9tQm9keS5hcHBlbmRDaGlsZChuYXZCYXIoKSk7XG5cblxuXG4gICAgLy8gTG9hZCBNZW51L0Fib3V0XG4gICAgZG9tQm9keS5hcHBlbmRDaGlsZChsb2FkTWVudSgpKVxuICAgIGRvbUJvZHkuYXBwZW5kQ2hpbGQobG9hZEFib3V0KCkpXG5cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tQm9keSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFubmVyKCkge1xuICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHRoZSBiYW5uZXIgaW1hZ2UgZm9yIHRoZSB3ZWJzaXRlXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IHdlbGNvbWVUbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgXG4gICAgbGV0IGhvZ3NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvZ3NIZWFkLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1oZWFkZXInKTtcbiAgICB3ZWxjb21lVG8uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWhlYWRlci1zbScpXG5cbiAgICB3ZWxjb21lVG8uaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8nO1xuICAgIGhvZ3NIZWFkLmlubmVyVGV4dCA9IFwiSG9nJ3MgSGVhZCBJbm5cIjtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZCh3ZWxjb21lVG8pO1xuICAgIGJhbm5lci5hcHBlbmRDaGlsZChob2dzSGVhZCk7XG5cbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYmFubmVyO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFyYWxsYXgoKSB7XG4gICAgLy8gQ3JlYXRlIGFuIGZpeGVkIGJhY2tncm91bmQgaW1hZ2UgdGhhdCBjYW4gYmUgc2Nyb2xsZWQgb3ZlclxuICAgIGxldCBwYXJhbGxheERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmFsbGF4RGl2LmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4Jyk7XG5cbiAgICAvLyBwYXJhbGxheERpdi5hcHBlbmRDaGlsZChwYXJhbGxheEJ1dHRvbignTWVudScpKTtcbiAgICAvLyBwYXJhbGxheERpdi5hcHBlbmRDaGlsZChwYXJhbGxheEJ1dHRvbignQ29udGFjdCcpKTtcbiAgICByZXR1cm4gcGFyYWxsYXhEaXY7XG59XG5cbmZ1bmN0aW9uIHBhcmFsbGF4QnV0dG9uKGtleXdvcmQpIHtcbiAgICAvLyBDcmVhdGUgYSBidXR0b24gdG8gYWRkIHRvIHRoZSBwYXJhbGxheFxuICAgIGxldCBwYXJhbGxheEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmFsbGF4QnRuLmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4LWJ0bicpO1xuICAgIHBhcmFsbGF4QnRuLmlubmVyVGV4dCA9IGtleXdvcmRcblxuICAgIHJldHVybiBwYXJhbGxheEJ0bjtcbn1cbi8vIE5hdmJhclxuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgLy8gVGFiYmVkIGJyb3dzaW5nIGZvciBtZW51L2NvbnRhY3QvYWJvdXRcbiAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oJ0Fib3V0JykpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXZJdGVtKCdNZW51JykpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXZJdGVtKCdDb250YWN0JykpO1xuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkl0ZW0oa2V5d29yZCkge1xuICAgIC8vIENyZWF0ZSBhIHRhYiBmb3IgYWRkaW5nIHRvIHRoZSBuYXZiYXJcbiAgICBsZXQgbmF2QmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhckl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2SXRlbScpO1xuICAgIG5hdkJhckl0ZW0uaW5uZXJUZXh0ID0ga2V5d29yZDtcblxuICAgIHJldHVybiBuYXZCYXJJdGVtO1xufVxuXG4vLyBDcmVhdGUgVGFiYmVkIGNvbnRlbnRcblxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIC8vIEJhc2ljIGRldGFpbHMgZm9yIHRoZSByZXN0YXVyYW50XG4gICAgbGV0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2MgPSBcIlRoZSBIb2cncyBIZWFkIElubiBpcyBhIHNsaWdodGx5IGRpc3JlcHV0YWJsZSBpbm4gYW5kIHB1YiBpbiB0aGUgYWxsLXdpemFyZGluZyB2aWxsYWdlIG9mIEhvZ3NtZWFkZS4gSXQgaXMgbG9jYXRlZCBvbmUgb3IgdHdvIHN0cmVldHMgb2ZmIG9mIHRoZSBIaWdoIFN0cmVldCwgdGhlIEhvZ+KAmXMgSGVhZCBJbm4gaGFzIGJlZW4gYSBmaXh0dXJlIG9mIEhvZ3NtZWFkZSBmb3Igc2V2ZXJhbCB5ZWFycy4gVGhlIElubiBpcyBvd25lZCBhbmQgb3BlcmF0ZWQgYnkgQWJlcmZvcnRoIER1bWJsZWRvcmUuXCJcbiAgICBsZXQgaG91cnMgPSBcIk9wZW4gRGFpbHkgMjQgaG91cnMhXCI7XG4gICAgbGV0IGRpcmVjdGlvbnMgPSBcIlwiO1xuICAgIGFib3V0RGl2LmlkID0gJ2Fib3V0J1xuXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXREZXRhaWwoZGVzYykpXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXREZXRhaWwoaG91cnMpKTtcbiAgICByZXR1cm4gYWJvdXREaXY7XG5cbn1cblxuZnVuY3Rpb24gYWJvdXREZXRhaWwoa2V5d29yZCkge1xuICAgIC8vIEFuIGluZGl2aWR1YWwgYWJvdXQgZGV0YWlsXG4gICAgbGV0IGFib3V0RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXREZXRhaWwuY2xhc3NMaXN0LmFkZCgnYWJvdXQtZGV0YWlsJyk7XG5cbiAgICAvLyBhYm91dERldGFpbC5pbm5lclRleHQgPSBcIlRoZSBIb2cncyBIZWFkIElubiBpcyBhIHNsaWdodGx5IGRpc3JlcHV0YWJsZSBpbm4gYW5kIHB1YiBpbiB0aGUgYWxsLXdpemFyZGluZyB2aWxsYWdlIG9mIEhvZ3NtZWFkZS4gSXQgaXMgbG9jYXRlZCBvbmUgb3IgdHdvIHN0cmVldHMgb2ZmIG9mIHRoZSBIaWdoIFN0cmVldCwgdGhlIEhvZ+KAmXMgSGVhZCBJbm4gaGFzIGJlZW4gYSBmaXh0dXJlIG9mIEhvZ3NtZWFkZSBmb3Igc2V2ZXJhbCB5ZWFycy4gVGhlIElubiBpcyBvd25lZCBhbmQgb3BlcmF0ZWQgYnkgQWJlcmZvcnRoIER1bWJsZWRvcmUuXCJcbiAgICBhYm91dERldGFpbC5pbm5lclRleHQgPSBrZXl3b3JkO1xuICAgIHJldHVybiBhYm91dERldGFpbFxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICAvLyBMb2FkIHRoZSBwYWdlcyBib2R5IGNvbnRlbnRcbiAgICBsZXQgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJvZHlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgLy8gYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAvLyBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1ib2R5JylcbiAgICAvLyBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1tZW51Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWJvZHknKVxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLW1lbnUnKTtcbiAgICBtZW51Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBib2R5SGVhZGVyLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keUhlYWRlcilcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSlcbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgLy8gQ29udGFjdCBpbmZvcm1hdGlvbiBmb3IgdGhlIHJlc3RhdXJhbnRcbiAgICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICByZXR1cm4gY29udGFjdERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICAvLyBDcmVlYXRlIHRoZSBlbGVtZW50cyBhbmQgcG9wdWxhdGUgdGhlIG1lbnVcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhdGVnb3J5Jyk7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gICAgZHJpbmtzLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2F0ZWdvcnknKTtcbiAgICBkcmlua3MuY2xhc3NMaXN0LmFkZCgnZHJpbmtzJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGZvb2QpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcbiAgICBtZW51SXRlbXMoZm9vZCwgZHJpbmtzKVxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBtZW51SXRlbXMoZm9vZCwgZHJpbmtzKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGl0ZW1zLCByZXR1cm4gYSBsaXN0IHRoYXQgY2FuIHRoZW4gYmUgYWRkZWQgdG8gdGhlIG1lbnUgZGl2XG5cbiAgICBsZXQgZm9vZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgZHJpbmtIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaGVhZGVyLW1kJyk7XG4gICAgZHJpbmtIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWhlYWRlci1tZCcpO1xuICAgIGZvb2RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICBkcmlua0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuXG4gICAgZm9vZEhlYWRlci5pbm5lclRleHQgPSAnRm9vZCc7XG4gICAgZHJpbmtIZWFkZXIuaW5uZXJUZXh0ID0gJ0RyaW5rcydcblxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZm9vZEhlYWRlcik7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rSGVhZGVyKVxuICAgIFxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoYWRkTGluZUJyZWFrKCkpO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChhZGRMaW5lQnJlYWsoKSlcbiAgICAvLyBUcnkgbm90IHRvIGhhcmQgY29kZSB0aGlzLCBpbnN0ZWFkIGNyZWF0ZSBhIHRleHQgZmlsZSB3aXRoIHRoZSBtZW51IGl0ZW1zLCBhbmQgdGhlbiBjb252ZXJ0IHRoYXQsIGxhdGVyXG4gICAgbGV0IGZvb2RJdGVtcyA9IHtcbiAgICAgICAgJ0Nob2NvbGF0ZSBGcm9ncyc6ICc0JyxcbiAgICAgICAgJ0Nvcm5lZCBCZWVmIFNhbmR3aWNoJzogJzEwJyxcbiAgICAgICAgJ1RyZWFjbGUgVGFydHMnOiAnMTInLFxuICAgICAgICAnUHVtcGtpbiBQYXN0eSc6ICcxMCcsXG4gICAgICAgICdCb3VpbGxhYmFpc3NlJzogJzE0JyxcbiAgICAgICAgJ0Z1bGwgRW5nbGlzaCBCcmVha2Zhc3QnOiAnMTUnLFxuICAgICAgICAnSGFnZ2lzJzogJzE0JyxcbiAgICAgICAgXCJTaGVwYXJkcyBQaWVcIjogJzE2JyxcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbGV0IGRyaW5rSXRlbXMgPSB7XG4gICAgICAgICdCdXR0ZXJiZWVyJzogJzgnLFxuICAgICAgICAnSG9nIEhlYWQgQWxlJzogJzknLFxuICAgICAgICAnR29ibGluIExhZ2VyJzogJzcnLFxuICAgICAgICAnQ29mZmVlJzogJzQnLFxuICAgICAgICAnRml6emJ1enogU29kYSc6ICczJyxcblxuICAgIH1cblxuICAgIGxldCBmb29kTmFtZXMgPSBPYmplY3Qua2V5cyhmb29kSXRlbXMpO1xuICAgIGxldCBkcmlua05hbWVzID0gT2JqZWN0LmtleXMoZHJpbmtJdGVtcyk7XG5cbiAgICAvLyBQb3B1bGF0ZSBGb29kIG1lbnVcbiAgICBwb3B1bGF0ZU1lbnUoZm9vZCwgZm9vZEl0ZW1zKTtcbiAgICBwb3B1bGF0ZU1lbnUoZHJpbmtzLCBkcmlua0l0ZW1zKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51KG1lbnVDYXQsIG1lbnVJdGVtcykge1xuICAgIGxldCBtZW51TmFtZXMgPSBPYmplY3Qua2V5cyhtZW51SXRlbXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudU5hbWVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICBkaXYuaW5uZXJUZXh0ID0gYCR7bWVudU5hbWVzW2ldfSAke21lbnVJdGVtc1ttZW51TmFtZXNbaV1dfWA7XG5cbiAgICAgICAgbWVudUNhdC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTGluZUJyZWFrKCkge1xuICAgIC8vIENyZWF0ZSBhIGxpbmVicmVhayB0aGF0IGNhbiBiZSBhZGRlZCB0byBvdGhlciBlbGVtZW50c1xuICAgIGxldCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGxpbmVicmVhay5jbGFzc0xpc3QuYWRkKCdsaW5lYnJlYWsnKTtcbiAgICByZXR1cm4gbGluZWJyZWFrO1xufVxuXG5sb2FkUGFnZUNvbnRlbnQoKVxuIiwiY29uc29sZS5sb2coXCJMb2FkaW5nIGZyb250cGFnZSBuYXZpZ2F0aW9uIHNjcmlwdHMuLi5cIilcblxubGV0IGFib3V0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xubGV0IG1lbnVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tZW51Jyk7XG5cbmZ1bmN0aW9uIG5hdkJhckxpc3RlbmVycygpIHtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIG5hdmJhciBidXR0b25zO1xuICAgIGxldCBuYXZiYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdkl0ZW0nKVxuXG4gICAgbmF2YmFyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGJ1dHRvbi5pbm5lclRleHQgPT09ICdNZW51Jykge1xuICAgICAgICAgICAgICAgIGFib3V0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRhY3RQYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgfSBlbHNlIGlmKGJ1dHRvbi5pbm5lclRleHQgPT09ICdBYm91dCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWJvdXQnKVxuICAgICAgICAgICAgICAgIGFib3V0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRhY3RQYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSBpZihidXR0b24uaW5uZXJUZXh0ID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgICAgICAgICBhYm91dFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBjb250YWN0UGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRhY3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5uYXZCYXJMaXN0ZW5lcnMoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==