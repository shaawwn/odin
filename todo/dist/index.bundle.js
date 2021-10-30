/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: flex-start;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n}\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: flex-start;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n}\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCalendar": () => (/* binding */ loadCalendar)
/* harmony export */ });
// console.log("Loading monthly todo calendar....")


let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dt = new Date()
let current = 0;
let monthTodo = document.getElementsByName('monthly') // Container for the calendar, when a month is changed, this gets reset and replaced with currently selected month

function loadCalendar() {
    // console.log("MONTH + CURRENT", dt.getMonth(), current)
    // let date = dt.getDate();
    // let day = dt.getDay()
    let year = dt.getFullYear()
    let month = dt.getMonth() + current;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year:'numeric',
        month:'numeric',
        day:'numeric',
    })

    const lastDateString = lastDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const nextPaddingDays = weekdays.length - weekdays.indexOf(lastDateString.split(', ')[0]);

    // Create elements and set attributes
    const monthlyDiv = document.createElement('div')
    monthlyDiv.classList.add('todo-box')
    monthlyDiv.style.display = 'none';
    monthlyDiv.setAttribute('name', 'monthly')

    const calendarContainer = document.createElement('div');
    const calendar = document.createElement('div');
    const monthHeader = document.createElement('p')
    const calendarHeader = document.createElement('div');

    calendar.classList.add('calendar')
    calendarHeader.classList.add('cal-header-container');
    monthHeader.classList.add('month-header');
    monthHeader.innerText = months[month];

    // calendarContainer.appendChild(monthHeader);
    calendarContainer.appendChild(addMonthHeader(month));
    calendarContainer.appendChild(calendar);

    // Add weekday headers
    calendar.appendChild(addWeekdayHeader())

    // Add day squares to calendar
    addDaySquares(calendar, paddingDays, daysInMonth, nextPaddingDays)

    monthlyDiv.appendChild(calendarContainer)
    // return monthlyDiv
    // calendarContainer.append(addModal('monthly'))
    return calendarContainer;
}


function addMonthHeader(month) {
    // Add the name of the current month at the top of the calendar, as well as the ability to switch months

    // 'Current' defaults to the given month parameter (current month), adding/subtracting form current will switch months
    // let current = 0;
    const monthHeader = document.createElement('div');
    monthHeader.classList.add('month-header-container');

    const monthTitle = document.createElement('p')
    monthTitle.classList.add('month-header');
    monthTitle.innerText = months[month];
    const previousMonth = document.createElement('button');
    const nextMonth = document.createElement('button');

    addMonthNavigation(previousMonth, 'previous');
    addMonthNavigation(nextMonth, 'next');

    previousMonth.classList.add('btn');
    previousMonth.classList.add('month-nav')
    nextMonth.classList.add('month-nav');
    nextMonth.classList.add('btn')

    previousMonth.innerText = '<'
    nextMonth.innerText = '>'

    monthHeader.appendChild(previousMonth);
    monthHeader.appendChild(monthTitle);
    monthHeader.appendChild(nextMonth);

    return monthHeader;
}

function addWeekdayHeader() {
    // Add weekday headers to the calendar('Monday', 'Tuesday', 'etc)
    const weekdayHeader = document.createElement('div');
    weekdayHeader.classList.add('cal-header-container');
    
    for (let i = 0; i < weekdays.length;i++) {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('cal-header');
        dayHeader.innerText = weekdays[i];
        weekdayHeader.appendChild(dayHeader)
    }
    return weekdayHeader;
}

function addMonthNavigation(button, direction) {
    // Add click listeners to previous/next month Buttons to switch months in the calendar
    let month = document.getElementsByName('monthly')
    let monthCalendar = document.getElementsByClassName('calendar')
    button.addEventListener('click', () => {
        // Nav moves left or right
        if(direction === 'previous') {
            current -= 1
            current = checkCurrent(current);
            monthTodo[0].innerHTML = '';
            monthTodo[0].appendChild(loadCalendar())
        } else if(direction === 'next') {
            current += 1
            current = checkCurrent(current)
            monthTodo[0].innerHTML = '';
            monthTodo[0].appendChild(loadCalendar())
        }
    })
}

function checkCurrent(current) {
    // Resets 'current' to 0 if greater than 12, since numbers higher than that are out of index for months
    if(current + dt.getMonth() > 11) {
        console.log("Invalid current", current + dt.getMonth())
        return -dt.getMonth()
    } else if(dt.getMonth() + current < 0) {
        // Roll over so that it will return index 12 for December, return the difference between 12 and dt.getMonth()
        console.log("Previous year")
        return 11 - dt.getMonth()
    }
    console.log("Valid current", current)
    return current

}


function addDaySquares(calendar, paddingDays, daysInMonth, nextPaddingDays) {
    for(let i = 0; i < paddingDays + daysInMonth + nextPaddingDays - 1; i++) {
        let calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');

        if (i < paddingDays || i >= paddingDays + daysInMonth) {
            calendarDay.classList.add('padding')
        } else {
            calendarDay.innerText = (i - paddingDays) + 1
            calendarDay.addEventListener('click', () => {
                openModal(calendarDay)
            })
        }
        calendar.appendChild(calendarDay);
    }
}


function addModal(todoType) {
    // Add a modal to the calendar for adding new Todos, potentially not unique to calendar, so maybe move to another file and export
    // 4 types of todos: Today(Unique), Daily, Weekly, Monthly, adjust the form accordingly
    
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const todoForm = document.createElement('div');
    todoForm.classList.add('add-todo');



    // Create a form for adding new Todos, and add it to the todo form div
    if(todoType === 'daily') {
        pass
    } else if(todoType === 'today') {
        pass
    } else if(todoType === 'weekly') {
        pass
    } else if(todoType === 'monthly') {
        // Here's where I add stuff for now

        const monthDate = document.createElement('p');
        const todo = document.createElement('input');
        const todoDesc = document.createElement('textarea');
        const submitBtn = document.createElement('input');
        const closeBtn = document.createElement('span');

        monthDate.classList.add('header');
        monthDate.classList.add('modal-header')
        // monthDate.innerText = months[dt.getMonth()]
        todo.type = 'text';
        todo.placeholder = 'Add todo'
        todoDesc.placeholder = 'Add a description of the todo here'
        submitBtn.type = 'submit';
        submitBtn.value = 'Add Todo'
        submitBtn.classList.add('btn')
        closeBtn.classList.add('close-btn');
        closeBtn.innerText = 'X';
        closeBtn.addEventListener('click', () => {
            closeModal(modal)
        })

        todoForm.appendChild(monthDate)
        todoForm.appendChild(todo)
        todoForm.appendChild(todoDesc)
        todoForm.appendChild(submitBtn)
        todoForm.appendChild(closeBtn);
    }

    // todoForm.appendChild(todo)
    // todoForm.appendChild(submitBtn)
    modal.appendChild(todoForm);
    return modal
}

function closeModal(modal) {
    // By clicking a close button close any open modal
    modal.style.display = 'none';
}

function openModal(day) {
    // Add an event lsitener to open up the add todo modal
    let modal = document.getElementsByClassName('modal');
    let modalHeader = document.getElementsByClassName('modal-header')[0];
    let monthDate = months[dt.getMonth() + current] + " " + day.innerText

    modalHeader.innerText = ''
    modalHeader.innerText = months[dt.getMonth() + current] + " " + day.innerText
    modal[0].style.display = 'block';
}

function printDateInfo(date) {

    console.log("Date: ", date.getDate())
    console.log("Day: ", weekdays[date.getDay()])
    console.log("Year: ", date.getFullYear())
    console.log("Month: ", months[date.getMonth()])

    let dateParams = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    console.log("Formated date string", date.toLocaleDateString('en-US', dateParams))

    // Can get days in month by getting the date of the last day in a month.
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let firstDay = new Date(date.getYear(), date.getMonth(), 1).getDay()
    console.log("Days in month: ", daysInMonth, firstDay)


}

document.addEventListener("DOMContentLoaded", () => {

})


// printDateInfo(dt)


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "loadTodoBox": () => (/* binding */ loadTodoBox),
/* harmony export */   "addTodoContainer": () => (/* binding */ addTodoContainer),
/* harmony export */   "addBanner": () => (/* binding */ addBanner),
/* harmony export */   "addSidebar": () => (/* binding */ addSidebar)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoclass.js */ "./src/todoclass.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");

// import { testJSON } from './tests.js';






console.log("Scripts loading....")
const storage = localStorage;
const generalTodos = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Project('general');
// storage.setItem('general', JSON.stringify(generalTodos))
// storage.clear()


function loadPage(projectName) {
    // Main function for adding elements to the DOM

    document.body.innerHTML = '';

    let contentDiv = document.createElement('div') // Content div is all elements of the the body after the banner
    contentDiv.id = 'content'
    document.body.appendChild(addBanner())
    document.body.appendChild(contentDiv)
    contentDiv.appendChild(addSidebar())

    addTodoContainer(projectName)
    addListeners();
}


function addBanner() {
    // Add a header banner for the webpage
    let banner = document.createElement('div')
    let bannerHeader = document.createElement('p');

    banner.id = 'banner';
    bannerHeader.classList.add('header')

    bannerHeader.innerText = "User's Todo List";

    banner.appendChild(bannerHeader);

    return banner
}


function addSidebar() {
    // Add the sidebar to the DOM
    let sidebar = document.createElement('div');
    let addProjectBtn = document.createElement('button');
    let boxes = ['Today', 'Daily', 'Weekly', 'Monthly']
    let linebreak = document.createElement('hr');

    sidebar.id = 'sidebar';
    sidebar.classList.add('container');
    addProjectBtn.classList.add('btn');
    linebreak.classList.add('linebreak');

    addProjectBtn.innerText = '+ Project';
    addProjectBtn.addEventListener('click', () => {
        addNewProject()
    })

    for(let i = 0; i < boxes.length; i++) {
        let navHeader = document.createElement('p')
        navHeader.classList.add('box-item');
        navHeader.innerText = boxes[i];

        sidebar.appendChild(navHeader)
    }
    sidebar.appendChild(linebreak);
    sidebar.appendChild(addProjectBtn);

    return sidebar;
}


function addTodoContainer(projectName) {
    // Add containers for each todo category to be displayed in 'mailbox' style
    // Load 'general' by default
    const todoBoxes = ['today', 'daily', 'weekly', 'monthly'];
    const content = document.querySelector('#content')
    const boxContainer = document.createElement('div');

    const parseTodos = JSON.parse(storage[projectName])

    boxContainer.id = 'box-container';

    for (let i = 0; i < todoBoxes.length;i++) {

        let boxDiv = document.createElement('div');
        let boxDivHeader = document.createElement('p');
        const addBtn = addTodoBtn(projectName);

        boxDivHeader.classList.add('header');
        boxDiv.classList.add('todo-box');
        boxDiv.setAttribute('name', todoBoxes[i])
        addBtn.innerText = 'Add Todo';


        boxDivHeader.innerText = todoBoxes[i][0].toUpperCase() + todoBoxes[i].slice(1) + ' Todos';
        boxDiv.appendChild(boxDivHeader);
        boxDiv.appendChild(addBtn);

        if(todoBoxes[i] === 'monthly') {
            // Calendar functions in a different way, so add later
            boxDiv.appendChild((0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__.loadCalendar)());
            boxContainer.appendChild(boxDiv)
        }
        if(todoBoxes[i] === 'daily') {
            let dailyTodos = loadTodos('daily', projectName);
            boxDiv.appendChild(addTodos(dailyTodos))
            boxDiv.style.display = 'none';
        } 
        if(todoBoxes[i] === 'weekly') {
            let weeklyTodos = loadTodos('weekly', projectName);
            boxDiv.appendChild(addTodos(weeklyTodos))
            boxDiv.style.display = 'none'
        }
        if(todoBoxes[i] === 'today') { // This just sets today to display by default, everything else is set to 'none'
            let todayTodos = loadTodos('today', projectName)
            boxDiv.appendChild(addTodos(todayTodos))
            boxDiv.style.display = 'flex';
        }

        boxContainer.appendChild(boxDiv);
    }
    boxContainer.appendChild((0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addModal)())
    content.appendChild(boxContainer);
}

function addTodos(todos) {
    // Parse todos and add to container, todos is an array of todos

    if(todos.length === 0) {
        const noTodos = document.createElement('h1');
        noTodos.classList.add('header')
        noTodos.innerText = 'You have no Todos!'
        return noTodos
    } else {
        // Load and add the todos 
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');

        for (let i = 0; i < todos.length;i++) {
            let newTodo = document.createElement('div');
            let checkBox = document.createElement('i');
            let todoName = document.createElement('p');
            let todoDesc = document.createElement('p');

            todoName.innerText = todos[i].title
            todoDesc.innerText = todos[i].desc;
            newTodo.appendChild(checkBox);
            newTodo.appendChild(todoName);
            newTodo.appendChild(todoDesc);

            newTodo.classList.add('todo-card');

            todoContainer.appendChild(newTodo);

            newTodo.addEventListener('click', () => {
                if(newTodo.className.search('finished') != -1) {
                    newTodo.classList.remove('finished')

                } else {
                    newTodo.classList.add('finished')
                }
            })
        }
        return todoContainer
    }

}

function loadTodos(todo, projectName) {
    // Load todos based on project name, or by all as default

    const projectStorage = JSON.parse(storage[projectName]);
    const todoList = []

    for (let i = 0; i < projectStorage.todos[todo].length;i++) {

        todoList.push(projectStorage.todos[todo][i])
    }
    return todoList
}

function addTodoForm(projectName) {
    // Create a form and add to modal
    const todoForm = document.createElement('div');
    todoForm.classList.add('todo-form');

    const todoHeader = document.createElement('p');
    const todoName = document.createElement('input');
    const todoDesc = document.createElement('textarea');
    const todoType = document.createElement('select')
    const closeBtn = document.createElement('button');
    const submitBtn = addTodoBtn()

    todoName.classList.add('form-input');
    todoDesc.classList.add('form-input');
    todoType.classList.add('form-input');
    closeBtn.classList.add('close-btn');

    todoHeader.innerText = 'Add new Todo';
    todoName.placeholder = 'Enter a name for your todo';
    todoDesc.placeholder = 'Enter a brief description of your todo';
    closeBtn.innerText = 'X';
    submitBtn.value = 'Add Todo'

    const todoTypes = ['today', 'daily', 'weekly', 'monthly'];

    for (let i = 0; i < todoTypes.length;i++) {
        let option = document.createElement('option');
        option.value = todoTypes[i]
        option.innerText = todoTypes[i][0].toUpperCase() + todoTypes[i].slice(1)
        todoType.appendChild(option)
    }

    closeBtn.addEventListener('click', () => {
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)()
    })

    submitBtn.addEventListener('click', () => {
        let newTodo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Todo (todoType.value, todoName.value, todoDesc.value)
        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addTodo)(todoType.value, newTodo, projectName)

        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)()
        loadPage(projectName);

    })
    
    todoForm.appendChild(closeBtn);
    todoForm.appendChild(todoHeader);
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoDesc);
    todoForm.appendChild(todoType);
    todoForm.appendChild(submitBtn);

    
    return todoForm
}


function addTodoBtn(projectName) {
    // Create the button and listener for adding todos
    const todoBtn = document.createElement('button'); // Use a span?
    todoBtn.classList.add('add-todo-btn');
    todoBtn.classList.add('btn');
    // todoBtn.setAttribute('name', todoType)

    todoBtn.innerText = 'Add Todo';
    todoBtn.addEventListener('click', () => {
        let modal = document.querySelectorAll('.modal')
        modal[0].innerHTML = '';
        console.log("MODAL", modal)
        let todoForm = addTodoForm(projectName);
        modal[0].appendChild(todoForm);
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(modal);
    })
    return todoBtn;
}

function addNewProject() {
    // Add the form for creating a new project
    const modal = document.querySelector('.modal');
    const boxContainer = document.querySelector('#box-container');

    // modal.classList.add('modal')
    const newProjectForm = document.createElement('div');
    const newProjectHeader = document.createElement('p');
    const projectName = document.createElement('input');
    const projectDescription = document.createElement('textarea')
    const submitBtn = document.createElement('button');


    newProjectForm.classList.add('modal-form');
    newProjectHeader.classList.add('header');
    submitBtn.classList.add('btn');
    submitBtn.innerText = 'Add Project';

    newProjectHeader.innerText = 'Add New Project';
    newProjectForm.appendChild(newProjectHeader);
    newProjectForm.appendChild(projectName);
    newProjectForm.appendChild(projectDescription);
    newProjectForm.appendChild(submitBtn);

    modal.appendChild(newProjectForm);

    modal.style.display = 'block';
    boxContainer.appendChild(modal);
}


function addListeners() {
    // Add listeners to DOM elements
    let todoOptions = document.getElementsByClassName('box-item');
    for (let i = 0; i < todoOptions.length;i++) {
        todoOptions[i].addEventListener('click', () => {
            let keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1);
            let todobox = document.getElementsByName(keyword)[0];
            loadTodoBox(keyword)
        })
    }
}


function loadTodoBox(todo) {
    // Display given todobox

    const todayBox = document.getElementsByName('today')[0];
    const dailyBox = document.getElementsByName('daily')[0];
    const weeklyBox = document.getElementsByName('weekly')[0];
    const monthlyBox = document.getElementsByName('monthly')[0];
    if(todo === 'today') {
        todayBox.style.display = 'block';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'daily') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'block';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'weekly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'block';
        monthlyBox.style.display = 'none';
    } else if (todo === 'monthly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'block';
    }
}


loadPage('general');
// addListeners();



/***/ }),

/***/ "./src/todoclass.js":
/*!**************************!*\
  !*** ./src/todoclass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "weeklyTodo": () => (/* binding */ weeklyTodo),
/* harmony export */   "monthlyTodo": () => (/* binding */ monthlyTodo),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
// Classes for todo objects
console.log('loading todo objects...')

let storage = localStorage

// console.log(storage)


class Todo {
    // Type: Due, Daily, Weekly, Monthly
    constructor(type, title, desc) {
        this.type = type;
        this.title = title;
        this.desc = desc;
    }
}

class weeklyTodo extends Todo {
    // Weekly todos, day: Day of the week
    constructor(type, title, desc, day) {
        super(type, title, desc);
        this.day = day
    }
}


class monthlyTodo extends Todo {
    constructor(type, title, desc, date) {
        super(type, title, desc);
        this.date;
    }
}


class Project {
    constructor(name) {
        this.name = name;
        this.todos = {
            'today': [],
            'daily': [],
            'weekly': [],
            'monthly': [],
        }
    }

}


let newProject = new Project('default')


function addTodo() {

}


/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "addModal": () => (/* binding */ addModal),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass.js */ "./src/todoclass.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


// Manage Adding/Updating Todos here

// Storage
const storage = localStorage
// const allTodos = {
//     'due': [],
//     'daily': [],
//     'weekly': [],
//     'monthly': [],
// }


// const newProject = {
//     'due': [],
//     'daily': [],
//     'weekly': [],
//     'monthly': [],
// }

// storage.setItem('new project', JSON.stringify(newProject))
// console.log(storage)


function checkLocalStorage(todoType, storage) {
    // Check status of local storage, if none exists, initialize, else do nothing
    if(storage.getItem(todoType) === null) {
        console.log("Storage is not created yet")
        if (todoType === 'weekly') {
            storage.setItem('weekly', JSON.stringify(weekly))
        } else if(todoType === 'daily') {
            storage.setItem('daily', JSON.stringify(daily))
        } else if(todoType === 'monthly') {
            storage.setItem('monthly', JSON.stringify(monthly))
        }
        return JSON.parse(storage.getItem(todoType))
    } else {
        // return true
        return JSON.parse(storage.getItem(todoType))
        // console.group("STORAGE CHECK", storage.getItem(todoType))
    }
}

function test() {
    // console.log("Todo js file loading...")
}


function addModal() {
    // Create a modal for adding Todos to Daily/Weekly
    const modal = document.createElement('div');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerText = 'X'
    closeBtn.addEventListener('click', () => {
        closeModal(modal)
    })
    modal.appendChild(closeBtn)
    modal.classList.add('modal')
    // modal.setAttribute('name', todoType)
    console.log("Adding modal...")


    // Add input for creating a new Todo
    // modal.style.display = 'block'; // Testing only
    // modal.appendChild(addTodoForm())
    return modal
}


function addTodoForm() {
    const todoAdd = document.createElement('div');
    todoAdd.classList.add('add-todo');

    const todoHeader = document.createElement('p');
    const todo = document.createElement('input');
    const todoDesc = document.createElement('textarea'); // To be added later
    const submitBtn = document.createElement('button');
    const closeBtn = document.createElement('span');

    let options = ['daily', 'weekly', 'monthly']

    todoHeader.classList.add('modal-header');
    submitBtn.classList.add('btn');

    todoHeader.innerText = 'Submit new Todo'
    submitBtn.innerText = 'Add Todo'
    todo.placeholder = 'Add a new todo';
    todoDesc.placeholder = 'Brief description of todo'

    todoAdd.appendChild(todoHeader);
    todoAdd.appendChild(todo);

    for(let i = 0; i < options.length; i++){
        const radioDiv = document.createElement('div');
        radioDiv.classList.add('checkbox');

        let choice = document.createElement('input');

        choice.type = 'checkbox';
 
        let label = document.createElement('label');

        label.for = choice;
        label.innerText = options[i][0].toUpperCase() + options[i].slice(1);

        choice.value = options[i]

        radioDiv.appendChild(choice);
        radioDiv.appendChild(label)
        todoAdd.appendChild(radioDiv);
    }

    todoAdd.appendChild(submitBtn);
    todoAdd.appendChild(closeBtn);

    submitBtn.addEventListener('click', () => {

        addTodo(todo.value)
    })
    return todoAdd;
}

function checkRadioBtn(button) {

    button.addEventListener('click', () => {
        console.log(button)
        if(button.checked === false) {
            button.checked = true
        } else if(button.checked === true){
            button.checked = false
        }
    })

}

let mondayTodo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__.weeklyTodo('weekly', 'Test', 'This is a new test', 'monday');

function addTodo(todoType, todo, projectName) {
    // Add a todo to local storage

    let todoProject = JSON.parse(storage[projectName])
    
    todoProject['todos'][todoType].push(todo)
    storage.setItem(projectName, JSON.stringify(todoProject))
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadTodoBox)(todoType)
}

function addProject(projectName) {
    // Add a new project to todo list, project is JSON object, same as allTodos
    // that is stored within allTodos
    const newProject = {
        'due': [],
        'daily': [],
        'weekly': [],
        'monthly': [],
    }
    storage.setItem(projectName, newProject);
}


function openModal() {
    // Open the modal when the appreopriate element is clicked (in this case the Add todo button)
    let modal = document.querySelector('.modal')
    
    modal.style.display = 'block';
    console.log("Opening modal", modal)

}

function closeModal() {
    // Close a modal when user hits the X in the top of the screen on the modal (or clicks outside modal)
    let modal = document.querySelector('.modal');
    modal.innerHTML = '';
    modal.style.display = 'none';
}


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLEtBQUs7O0FBRUw7QUFDQSwwQkFBMEIsK0NBQUk7QUFDOUIsUUFBUSxtREFBTzs7QUFFZixRQUFRLHNEQUFVO0FBQ2xCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BWQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDhEO0FBQzRDO0FBQzFHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUJBQXFCLHFEQUFVOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNoTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXBhZ2UtaGVpZ2h0OiAxMDB2aDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyNSU7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcblxcbi5saW5lYnJlYWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnRlc3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogR2VuZXJhbCBzZWxlY3RvcnMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBCYW5uZXIgKi9cXG5cXG4jYmFubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmJveC1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLyogVG9kbyBjb250ZW50ICovXFxuXFxuI2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbn1cXG5cXG4udG9kby1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWJveCA+IC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbn1cXG5cXG4udG9kby1ib3ggPiB1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbi50b2RvLWJveCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbnVsID4gbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLWNhcmQgPiBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FsLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzUsIDc1LCA3NSk7XFxufVxcblxcbi5jYWwtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuLm1vbnRoLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vbnRoLWhlYWRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5tb250aC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM4cHg7XFxufVxcblxcbi5jYWxlbmRhci1kYXkge1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZWJhci13aWR0aCkpOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBwIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG4ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gW3R5cGV+PSd0ZXh0J10ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gdGV4dGFyZWEge1xcblxcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDBweDsgKi9cXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjpyZ2IoNDAsNDAsNDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1mb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udG9kby1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcbi5mb3JtLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIC8qICAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIFxcbn1cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNzUsNzUpO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLDIzMCwyMzApO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICAvKiByaWdodDogMTBweDsgKi9cXG4gICAgLyogdG9wOiAxMHB4OyAqL1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuLyogQ2FsZW5kYXIgTW9kYWwgKi9cXG4ucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLCAubmF2LWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXFxuLnRlc3QtYm94IHtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxSEFBcUg7SUFDckgsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0NBQWtDO0FBQ3RD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QStCO0FBQ25DOztBQUVBO0lBQ0k7Ozs7d0JBSW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLGtDQUFrQztBQUN0Qzs7OztBQUlBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7OztBQUdKOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXBhZ2UtaGVpZ2h0OiAxMDB2aDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyNSU7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcblxcbi5saW5lYnJlYWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnRlc3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogR2VuZXJhbCBzZWxlY3RvcnMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBCYW5uZXIgKi9cXG5cXG4jYmFubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmJveC1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLyogVG9kbyBjb250ZW50ICovXFxuXFxuI2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbn1cXG5cXG4udG9kby1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWJveCA+IC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbn1cXG5cXG4udG9kby1ib3ggPiB1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbi50b2RvLWJveCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbnVsID4gbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLWNhcmQgPiBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FsLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzUsIDc1LCA3NSk7XFxufVxcblxcbi5jYWwtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuLm1vbnRoLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vbnRoLWhlYWRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5tb250aC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM4cHg7XFxufVxcblxcbi5jYWxlbmRhci1kYXkge1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZWJhci13aWR0aCkpOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBwIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG4ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gW3R5cGV+PSd0ZXh0J10ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gdGV4dGFyZWEge1xcblxcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDBweDsgKi9cXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjpyZ2IoNDAsNDAsNDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1mb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udG9kby1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcbi5mb3JtLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIC8qICAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIFxcbn1cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNzUsNzUpO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLDIzMCwyMzApO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICAvKiByaWdodDogMTBweDsgKi9cXG4gICAgLyogdG9wOiAxMHB4OyAqL1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuLyogQ2FsZW5kYXIgTW9kYWwgKi9cXG4ucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLCAubmF2LWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXFxuLnRlc3QtYm94IHtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY29uc29sZS5sb2coXCJMb2FkaW5nIG1vbnRobHkgdG9kbyBjYWxlbmRhci4uLi5cIilcblxuXG5sZXQgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbmxldCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXVxubGV0IGR0ID0gbmV3IERhdGUoKVxubGV0IGN1cnJlbnQgPSAwO1xubGV0IG1vbnRoVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JykgLy8gQ29udGFpbmVyIGZvciB0aGUgY2FsZW5kYXIsIHdoZW4gYSBtb250aCBpcyBjaGFuZ2VkLCB0aGlzIGdldHMgcmVzZXQgYW5kIHJlcGxhY2VkIHdpdGggY3VycmVudGx5IHNlbGVjdGVkIG1vbnRoXG5cbmZ1bmN0aW9uIGxvYWRDYWxlbmRhcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1PTlRIICsgQ1VSUkVOVFwiLCBkdC5nZXRNb250aCgpLCBjdXJyZW50KVxuICAgIC8vIGxldCBkYXRlID0gZHQuZ2V0RGF0ZSgpO1xuICAgIC8vIGxldCBkYXkgPSBkdC5nZXREYXkoKVxuICAgIGxldCB5ZWFyID0gZHQuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBtb250aCA9IGR0LmdldE1vbnRoKCkgKyBjdXJyZW50O1xuXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSlcbiAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMClcblxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBmaXJzdERheU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICB5ZWFyOidudW1lcmljJyxcbiAgICAgICAgbW9udGg6J251bWVyaWMnLFxuICAgICAgICBkYXk6J251bWVyaWMnLFxuICAgIH0pXG5cbiAgICBjb25zdCBsYXN0RGF0ZVN0cmluZyA9IGxhc3REYXlPZk1vbnRoLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICB9KVxuXG4gICAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrZGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuICAgIGNvbnN0IG5leHRQYWRkaW5nRGF5cyA9IHdlZWtkYXlzLmxlbmd0aCAtIHdlZWtkYXlzLmluZGV4T2YobGFzdERhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBzZXQgYXR0cmlidXRlc1xuICAgIGNvbnN0IG1vbnRobHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vbnRobHlEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1ib3gnKVxuICAgIG1vbnRobHlEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb250aGx5RGl2LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtb250aGx5JylcblxuICAgIGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGNhbGVuZGFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhcicpXG4gICAgY2FsZW5kYXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlci1jb250YWluZXInKTtcbiAgICBtb250aEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb250aC1oZWFkZXInKTtcbiAgICBtb250aEhlYWRlci5pbm5lclRleHQgPSBtb250aHNbbW9udGhdO1xuXG4gICAgLy8gY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGhIZWFkZXIpO1xuICAgIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE1vbnRoSGVhZGVyKG1vbnRoKSk7XG4gICAgY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuXG4gICAgLy8gQWRkIHdlZWtkYXkgaGVhZGVyc1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGFkZFdlZWtkYXlIZWFkZXIoKSlcblxuICAgIC8vIEFkZCBkYXkgc3F1YXJlcyB0byBjYWxlbmRhclxuICAgIGFkZERheVNxdWFyZXMoY2FsZW5kYXIsIHBhZGRpbmdEYXlzLCBkYXlzSW5Nb250aCwgbmV4dFBhZGRpbmdEYXlzKVxuXG4gICAgbW9udGhseURpdi5hcHBlbmRDaGlsZChjYWxlbmRhckNvbnRhaW5lcilcbiAgICAvLyByZXR1cm4gbW9udGhseURpdlxuICAgIC8vIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZChhZGRNb2RhbCgnbW9udGhseScpKVxuICAgIHJldHVybiBjYWxlbmRhckNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBhZGRNb250aEhlYWRlcihtb250aCkge1xuICAgIC8vIEFkZCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBtb250aCBhdCB0aGUgdG9wIG9mIHRoZSBjYWxlbmRhciwgYXMgd2VsbCBhcyB0aGUgYWJpbGl0eSB0byBzd2l0Y2ggbW9udGhzXG5cbiAgICAvLyAnQ3VycmVudCcgZGVmYXVsdHMgdG8gdGhlIGdpdmVuIG1vbnRoIHBhcmFtZXRlciAoY3VycmVudCBtb250aCksIGFkZGluZy9zdWJ0cmFjdGluZyBmb3JtIGN1cnJlbnQgd2lsbCBzd2l0Y2ggbW9udGhzXG4gICAgLy8gbGV0IGN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IG1vbnRoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9udGhIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbW9udGhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1vbnRoVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyJyk7XG4gICAgbW9udGhUaXRsZS5pbm5lclRleHQgPSBtb250aHNbbW9udGhdO1xuICAgIGNvbnN0IHByZXZpb3VzTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXh0TW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGFkZE1vbnRoTmF2aWdhdGlvbihwcmV2aW91c01vbnRoLCAncHJldmlvdXMnKTtcbiAgICBhZGRNb250aE5hdmlnYXRpb24obmV4dE1vbnRoLCAnbmV4dCcpO1xuXG4gICAgcHJldmlvdXNNb250aC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBwcmV2aW91c01vbnRoLmNsYXNzTGlzdC5hZGQoJ21vbnRoLW5hdicpXG4gICAgbmV4dE1vbnRoLmNsYXNzTGlzdC5hZGQoJ21vbnRoLW5hdicpO1xuICAgIG5leHRNb250aC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuXG4gICAgcHJldmlvdXNNb250aC5pbm5lclRleHQgPSAnPCdcbiAgICBuZXh0TW9udGguaW5uZXJUZXh0ID0gJz4nXG5cbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChwcmV2aW91c01vbnRoKTtcbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChtb250aFRpdGxlKTtcbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChuZXh0TW9udGgpO1xuXG4gICAgcmV0dXJuIG1vbnRoSGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRXZWVrZGF5SGVhZGVyKCkge1xuICAgIC8vIEFkZCB3ZWVrZGF5IGhlYWRlcnMgdG8gdGhlIGNhbGVuZGFyKCdNb25kYXknLCAnVHVlc2RheScsICdldGMpXG4gICAgY29uc3Qgd2Vla2RheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtkYXlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlci1jb250YWluZXInKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtkYXlzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgY29uc3QgZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYWwtaGVhZGVyJyk7XG4gICAgICAgIGRheUhlYWRlci5pbm5lclRleHQgPSB3ZWVrZGF5c1tpXTtcbiAgICAgICAgd2Vla2RheUhlYWRlci5hcHBlbmRDaGlsZChkYXlIZWFkZXIpXG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5SGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRNb250aE5hdmlnYXRpb24oYnV0dG9uLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIHByZXZpb3VzL25leHQgbW9udGggQnV0dG9ucyB0byBzd2l0Y2ggbW9udGhzIGluIHRoZSBjYWxlbmRhclxuICAgIGxldCBtb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JylcbiAgICBsZXQgbW9udGhDYWxlbmRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGVuZGFyJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIE5hdiBtb3ZlcyBsZWZ0IG9yIHJpZ2h0XG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgY3VycmVudCAtPSAxXG4gICAgICAgICAgICBjdXJyZW50ID0gY2hlY2tDdXJyZW50KGN1cnJlbnQpO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKVxuICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgKz0gMVxuICAgICAgICAgICAgY3VycmVudCA9IGNoZWNrQ3VycmVudChjdXJyZW50KVxuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tDdXJyZW50KGN1cnJlbnQpIHtcbiAgICAvLyBSZXNldHMgJ2N1cnJlbnQnIHRvIDAgaWYgZ3JlYXRlciB0aGFuIDEyLCBzaW5jZSBudW1iZXJzIGhpZ2hlciB0aGFuIHRoYXQgYXJlIG91dCBvZiBpbmRleCBmb3IgbW9udGhzXG4gICAgaWYoY3VycmVudCArIGR0LmdldE1vbnRoKCkgPiAxMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgY3VycmVudFwiLCBjdXJyZW50ICsgZHQuZ2V0TW9udGgoKSlcbiAgICAgICAgcmV0dXJuIC1kdC5nZXRNb250aCgpXG4gICAgfSBlbHNlIGlmKGR0LmdldE1vbnRoKCkgKyBjdXJyZW50IDwgMCkge1xuICAgICAgICAvLyBSb2xsIG92ZXIgc28gdGhhdCBpdCB3aWxsIHJldHVybiBpbmRleCAxMiBmb3IgRGVjZW1iZXIsIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDEyIGFuZCBkdC5nZXRNb250aCgpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJldmlvdXMgeWVhclwiKVxuICAgICAgICByZXR1cm4gMTEgLSBkdC5nZXRNb250aCgpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiVmFsaWQgY3VycmVudFwiLCBjdXJyZW50KVxuICAgIHJldHVybiBjdXJyZW50XG5cbn1cblxuXG5mdW5jdGlvbiBhZGREYXlTcXVhcmVzKGNhbGVuZGFyLCBwYWRkaW5nRGF5cywgZGF5c0luTW9udGgsIG5leHRQYWRkaW5nRGF5cykge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYWRkaW5nRGF5cyArIGRheXNJbk1vbnRoICsgbmV4dFBhZGRpbmdEYXlzIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBjYWxlbmRhckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYWxlbmRhckRheS5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1kYXknKTtcblxuICAgICAgICBpZiAoaSA8IHBhZGRpbmdEYXlzIHx8IGkgPj0gcGFkZGluZ0RheXMgKyBkYXlzSW5Nb250aCkge1xuICAgICAgICAgICAgY2FsZW5kYXJEYXkuY2xhc3NMaXN0LmFkZCgncGFkZGluZycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxlbmRhckRheS5pbm5lclRleHQgPSAoaSAtIHBhZGRpbmdEYXlzKSArIDFcbiAgICAgICAgICAgIGNhbGVuZGFyRGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChjYWxlbmRhckRheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJEYXkpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCh0b2RvVHlwZSkge1xuICAgIC8vIEFkZCBhIG1vZGFsIHRvIHRoZSBjYWxlbmRhciBmb3IgYWRkaW5nIG5ldyBUb2RvcywgcG90ZW50aWFsbHkgbm90IHVuaXF1ZSB0byBjYWxlbmRhciwgc28gbWF5YmUgbW92ZSB0byBhbm90aGVyIGZpbGUgYW5kIGV4cG9ydFxuICAgIC8vIDQgdHlwZXMgb2YgdG9kb3M6IFRvZGF5KFVuaXF1ZSksIERhaWx5LCBXZWVrbHksIE1vbnRobHksIGFkanVzdCB0aGUgZm9ybSBhY2NvcmRpbmdseVxuICAgIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuXG5cbiAgICAvLyBDcmVhdGUgYSBmb3JtIGZvciBhZGRpbmcgbmV3IFRvZG9zLCBhbmQgYWRkIGl0IHRvIHRoZSB0b2RvIGZvcm0gZGl2XG4gICAgaWYodG9kb1R5cGUgPT09ICdkYWlseScpIHtcbiAgICAgICAgcGFzc1xuICAgIH0gZWxzZSBpZih0b2RvVHlwZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAnd2Vla2x5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAnbW9udGhseScpIHtcbiAgICAgICAgLy8gSGVyZSdzIHdoZXJlIEkgYWRkIHN0dWZmIGZvciBub3dcblxuICAgICAgICBjb25zdCBtb250aERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG1vbnRoRGF0ZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgbW9udGhEYXRlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpXG4gICAgICAgIC8vIG1vbnRoRGF0ZS5pbm5lclRleHQgPSBtb250aHNbZHQuZ2V0TW9udGgoKV1cbiAgICAgICAgdG9kby50eXBlID0gJ3RleHQnO1xuICAgICAgICB0b2RvLnBsYWNlaG9sZGVyID0gJ0FkZCB0b2RvJ1xuICAgICAgICB0b2RvRGVzYy5wbGFjZWhvbGRlciA9ICdBZGQgYSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBoZXJlJ1xuICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkIFRvZG8nXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobW9udGhEYXRlKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYylcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgfVxuXG4gICAgLy8gdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kbylcbiAgICAvLyB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHJldHVybiBtb2RhbFxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgLy8gQnkgY2xpY2tpbmcgYSBjbG9zZSBidXR0b24gY2xvc2UgYW55IG9wZW4gbW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoZGF5KSB7XG4gICAgLy8gQWRkIGFuIGV2ZW50IGxzaXRlbmVyIHRvIG9wZW4gdXAgdGhlIGFkZCB0b2RvIG1vZGFsXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKTtcbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1oZWFkZXInKVswXTtcbiAgICBsZXQgbW9udGhEYXRlID0gbW9udGhzW2R0LmdldE1vbnRoKCkgKyBjdXJyZW50XSArIFwiIFwiICsgZGF5LmlubmVyVGV4dFxuXG4gICAgbW9kYWxIZWFkZXIuaW5uZXJUZXh0ID0gJydcbiAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSBtb250aHNbZHQuZ2V0TW9udGgoKSArIGN1cnJlbnRdICsgXCIgXCIgKyBkYXkuaW5uZXJUZXh0XG4gICAgbW9kYWxbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIHByaW50RGF0ZUluZm8oZGF0ZSkge1xuXG4gICAgY29uc29sZS5sb2coXCJEYXRlOiBcIiwgZGF0ZS5nZXREYXRlKCkpXG4gICAgY29uc29sZS5sb2coXCJEYXk6IFwiLCB3ZWVrZGF5c1tkYXRlLmdldERheSgpXSlcbiAgICBjb25zb2xlLmxvZyhcIlllYXI6IFwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgY29uc29sZS5sb2coXCJNb250aDogXCIsIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldKVxuXG4gICAgbGV0IGRhdGVQYXJhbXMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJGb3JtYXRlZCBkYXRlIHN0cmluZ1wiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBkYXRlUGFyYW1zKSlcblxuICAgIC8vIENhbiBnZXQgZGF5cyBpbiBtb250aCBieSBnZXR0aW5nIHRoZSBkYXRlIG9mIHRoZSBsYXN0IGRheSBpbiBhIG1vbnRoLlxuICAgIGxldCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG4gICAgbGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0RGF5KClcbiAgICBjb25zb2xlLmxvZyhcIkRheXMgaW4gbW9udGg6IFwiLCBkYXlzSW5Nb250aCwgZmlyc3REYXkpXG5cblxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbn0pXG5cblxuLy8gcHJpbnREYXRlSW5mbyhkdClcbmV4cG9ydCB7IGxvYWRDYWxlbmRhciB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgeyB0ZXN0SlNPTiB9IGZyb20gJy4vdGVzdHMuanMnO1xuaW1wb3J0IHsgVG9kbywgd2Vla2x5VG9kbywgbW9udGhseVRvZG8sIFByb2plY3QgfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyB0ZXN0LCBhZGRQcm9qZWN0LCBhZGRUb2RvLCBhZGRNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi90b2Rvcy5qcyc7XG5pbXBvcnQgeyBsb2FkQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyLmpzJztcblxuXG5cbmNvbnNvbGUubG9nKFwiU2NyaXB0cyBsb2FkaW5nLi4uLlwiKVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbmNvbnN0IGdlbmVyYWxUb2RvcyA9IG5ldyBQcm9qZWN0KCdnZW5lcmFsJyk7XG4vLyBzdG9yYWdlLnNldEl0ZW0oJ2dlbmVyYWwnLCBKU09OLnN0cmluZ2lmeShnZW5lcmFsVG9kb3MpKVxuLy8gc3RvcmFnZS5jbGVhcigpXG5cblxuZnVuY3Rpb24gbG9hZFBhZ2UocHJvamVjdE5hbWUpIHtcbiAgICAvLyBNYWluIGZ1bmN0aW9uIGZvciBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIERPTVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy8gQ29udGVudCBkaXYgaXMgYWxsIGVsZW1lbnRzIG9mIHRoZSB0aGUgYm9keSBhZnRlciB0aGUgYmFubmVyXG4gICAgY29udGVudERpdi5pZCA9ICdjb250ZW50J1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQmFubmVyKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkU2lkZWJhcigpKVxuXG4gICAgYWRkVG9kb0NvbnRhaW5lcihwcm9qZWN0TmFtZSlcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRCYW5uZXIoKSB7XG4gICAgLy8gQWRkIGEgaGVhZGVyIGJhbm5lciBmb3IgdGhlIHdlYnBhZ2VcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgYmFubmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYmFubmVyLmlkID0gJ2Jhbm5lcic7XG4gICAgYmFubmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBiYW5uZXJIZWFkZXIuaW5uZXJUZXh0ID0gXCJVc2VyJ3MgVG9kbyBMaXN0XCI7XG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVySGVhZGVyKTtcblxuICAgIHJldHVybiBiYW5uZXJcbn1cblxuXG5mdW5jdGlvbiBhZGRTaWRlYmFyKCkge1xuICAgIC8vIEFkZCB0aGUgc2lkZWJhciB0byB0aGUgRE9NXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBib3hlcyA9IFsnVG9kYXknLCAnRGFpbHknLCAnV2Vla2x5JywgJ01vbnRobHknXVxuICAgIGxldCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgbGluZWJyZWFrLmNsYXNzTGlzdC5hZGQoJ2xpbmVicmVhaycpO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lclRleHQgPSAnKyBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGROZXdQcm9qZWN0KClcbiAgICB9KVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbmF2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JveC1pdGVtJyk7XG4gICAgICAgIG5hdkhlYWRlci5pbm5lclRleHQgPSBib3hlc1tpXTtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdkhlYWRlcilcbiAgICB9XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvQ29udGFpbmVyKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGNvbnRhaW5lcnMgZm9yIGVhY2ggdG9kbyBjYXRlZ29yeSB0byBiZSBkaXNwbGF5ZWQgaW4gJ21haWxib3gnIHN0eWxlXG4gICAgLy8gTG9hZCAnZ2VuZXJhbCcgYnkgZGVmYXVsdFxuICAgIGNvbnN0IHRvZG9Cb3hlcyA9IFsndG9kYXknLCAnZGFpbHknLCAnd2Vla2x5JywgJ21vbnRobHknXTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcGFyc2VUb2RvcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG5cbiAgICBib3hDb250YWluZXIuaWQgPSAnYm94LWNvbnRhaW5lcic7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Cb3hlcy5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgbGV0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYm94RGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRUb2RvQnRuKHByb2plY3ROYW1lKTtcblxuICAgICAgICBib3hEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpO1xuICAgICAgICBib3hEaXYuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb0JveGVzW2ldKVxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcblxuXG4gICAgICAgIGJveERpdkhlYWRlci5pbm5lclRleHQgPSB0b2RvQm94ZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9Cb3hlc1tpXS5zbGljZSgxKSArICcgVG9kb3MnO1xuICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYm94RGl2SGVhZGVyKTtcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnbW9udGhseScpIHtcbiAgICAgICAgICAgIC8vIENhbGVuZGFyIGZ1bmN0aW9ucyBpbiBhIGRpZmZlcmVudCB3YXksIHNvIGFkZCBsYXRlclxuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKTtcbiAgICAgICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpXG4gICAgICAgIH1cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICBsZXQgZGFpbHlUb2RvcyA9IGxvYWRUb2RvcygnZGFpbHknLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3MoZGFpbHlUb2RvcykpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBcbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnd2Vla2x5Jykge1xuICAgICAgICAgICAgbGV0IHdlZWtseVRvZG9zID0gbG9hZFRvZG9zKCd3ZWVrbHknLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3Mod2Vla2x5VG9kb3MpKVxuICAgICAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgICBpZih0b2RvQm94ZXNbaV0gPT09ICd0b2RheScpIHsgLy8gVGhpcyBqdXN0IHNldHMgdG9kYXkgdG8gZGlzcGxheSBieSBkZWZhdWx0LCBldmVyeXRoaW5nIGVsc2UgaXMgc2V0IHRvICdub25lJ1xuICAgICAgICAgICAgbGV0IHRvZGF5VG9kb3MgPSBsb2FkVG9kb3MoJ3RvZGF5JywgcHJvamVjdE5hbWUpXG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3ModG9kYXlUb2RvcykpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpO1xuICAgIH1cbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJveENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zKSB7XG4gICAgLy8gUGFyc2UgdG9kb3MgYW5kIGFkZCB0byBjb250YWluZXIsIHRvZG9zIGlzIGFuIGFycmF5IG9mIHRvZG9zXG5cbiAgICBpZih0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3Qgbm9Ub2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5vVG9kb3MuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICAgICAgbm9Ub2Rvcy5pbm5lclRleHQgPSAnWW91IGhhdmUgbm8gVG9kb3MhJ1xuICAgICAgICByZXR1cm4gbm9Ub2Rvc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvYWQgYW5kIGFkZCB0aGUgdG9kb3MgXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgdG9kb05hbWUuaW5uZXJUZXh0ID0gdG9kb3NbaV0udGl0bGVcbiAgICAgICAgICAgIHRvZG9EZXNjLmlubmVyVGV4dCA9IHRvZG9zW2ldLmRlc2M7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XG5cbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYobmV3VG9kby5jbGFzc05hbWUuc2VhcmNoKCdmaW5pc2hlZCcpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0NvbnRhaW5lclxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb3ModG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBMb2FkIHRvZG9zIGJhc2VkIG9uIHByb2plY3QgbmFtZSwgb3IgYnkgYWxsIGFzIGRlZmF1bHRcblxuICAgIGNvbnN0IHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgdG9kb0xpc3QucHVzaChwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXVtpXSlcbiAgICB9XG4gICAgcmV0dXJuIHRvZG9MaXN0XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Gb3JtKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBhbmQgYWRkIHRvIG1vZGFsXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0b2RvVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBhZGRUb2RvQnRuKClcblxuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdG9kb1R5cGUuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnQWRkIG5ldyBUb2RvJztcbiAgICB0b2RvTmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIG5hbWUgZm9yIHlvdXIgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBicmllZiBkZXNjcmlwdGlvbiBvZiB5b3VyIHRvZG8nO1xuICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9ICdYJztcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkIFRvZG8nXG5cbiAgICBjb25zdCB0b2RvVHlwZXMgPSBbJ3RvZGF5JywgJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UeXBlcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdG9kb1R5cGVzW2ldXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0b2RvVHlwZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9UeXBlc1tpXS5zbGljZSgxKVxuICAgICAgICB0b2RvVHlwZS5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH0pXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8gKHRvZG9UeXBlLnZhbHVlLCB0b2RvTmFtZS52YWx1ZSwgdG9kb0Rlc2MudmFsdWUpXG4gICAgICAgIGFkZFRvZG8odG9kb1R5cGUudmFsdWUsIG5ld1RvZG8sIHByb2plY3ROYW1lKVxuXG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgICAgICBsb2FkUGFnZShwcm9qZWN0TmFtZSk7XG5cbiAgICB9KVxuICAgIFxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9UeXBlKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgXG4gICAgcmV0dXJuIHRvZG9Gb3JtXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0J0bihwcm9qZWN0TmFtZSkge1xuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGFuZCBsaXN0ZW5lciBmb3IgYWRkaW5nIHRvZG9zXG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyBVc2UgYSBzcGFuP1xuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJyk7XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAvLyB0b2RvQnRuLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRvZG9UeXBlKVxuXG4gICAgdG9kb0J0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nO1xuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpXG4gICAgICAgIG1vZGFsWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1PREFMXCIsIG1vZGFsKVxuICAgICAgICBsZXQgdG9kb0Zvcm0gPSBhZGRUb2RvRm9ybShwcm9qZWN0TmFtZSk7XG4gICAgICAgIG1vZGFsWzBdLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQnRuO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIC8vIEFkZCB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgYm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveC1jb250YWluZXInKTtcblxuICAgIC8vIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9ybScpO1xuICAgIG5ld1Byb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgbmV3UHJvamVjdEhlYWRlci5pbm5lclRleHQgPSAnQWRkIE5ldyBQcm9qZWN0JztcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SGVhZGVyKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gQWRkIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICBsZXQgdG9kb09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gtaXRlbScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb09wdGlvbnMubGVuZ3RoO2krKykge1xuICAgICAgICB0b2RvT3B0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBrZXl3b3JkID0gdG9kb09wdGlvbnNbaV0uaW5uZXJUZXh0WzBdLnRvTG93ZXJDYXNlKCkgKyB0b2RvT3B0aW9uc1tpXS5pbm5lclRleHQuc2xpY2UoMSk7XG4gICAgICAgICAgICBsZXQgdG9kb2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGtleXdvcmQpWzBdO1xuICAgICAgICAgICAgbG9hZFRvZG9Cb3goa2V5d29yZClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gbG9hZFRvZG9Cb3godG9kbykge1xuICAgIC8vIERpc3BsYXkgZ2l2ZW4gdG9kb2JveFxuXG4gICAgY29uc3QgdG9kYXlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndG9kYXknKVswXTtcbiAgICBjb25zdCBkYWlseUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkYWlseScpWzBdO1xuICAgIGNvbnN0IHdlZWtseUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd3ZWVrbHknKVswXTtcbiAgICBjb25zdCBtb250aGx5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ21vbnRobHknKVswXTtcbiAgICBpZih0b2RvID09PSAndG9kYXknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZih0b2RvID09PSAnZGFpbHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZih0b2RvID09PSAnd2Vla2x5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vbnRobHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKHRvZG8gPT09ICdtb250aGx5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59XG5cblxubG9hZFBhZ2UoJ2dlbmVyYWwnKTtcbi8vIGFkZExpc3RlbmVycygpO1xuXG5leHBvcnQgeyBsb2FkUGFnZSwgYWRkTGlzdGVuZXJzLCBsb2FkVG9kb0JveCwgYWRkVG9kb0NvbnRhaW5lciwgYWRkQmFubmVyLCBhZGRTaWRlYmFyIH0iLCIvLyBDbGFzc2VzIGZvciB0b2RvIG9iamVjdHNcbmNvbnNvbGUubG9nKCdsb2FkaW5nIHRvZG8gb2JqZWN0cy4uLicpXG5cbmxldCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlXG5cbi8vIGNvbnNvbGUubG9nKHN0b3JhZ2UpXG5cblxuY2xhc3MgVG9kbyB7XG4gICAgLy8gVHlwZTogRHVlLCBEYWlseSwgV2Vla2x5LCBNb250aGx5XG4gICAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGRlc2MpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIH1cbn1cblxuY2xhc3Mgd2Vla2x5VG9kbyBleHRlbmRzIFRvZG8ge1xuICAgIC8vIFdlZWtseSB0b2RvcywgZGF5OiBEYXkgb2YgdGhlIHdlZWtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB0aXRsZSwgZGVzYywgZGF5KSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHRpdGxlLCBkZXNjKTtcbiAgICAgICAgdGhpcy5kYXkgPSBkYXlcbiAgICB9XG59XG5cblxuY2xhc3MgbW9udGhseVRvZG8gZXh0ZW5kcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB0aXRsZSwgZGVzYywgZGF0ZSkge1xuICAgICAgICBzdXBlcih0eXBlLCB0aXRsZSwgZGVzYyk7XG4gICAgICAgIHRoaXMuZGF0ZTtcbiAgICB9XG59XG5cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9zID0ge1xuICAgICAgICAgICAgJ3RvZGF5JzogW10sXG4gICAgICAgICAgICAnZGFpbHknOiBbXSxcbiAgICAgICAgICAgICd3ZWVrbHknOiBbXSxcbiAgICAgICAgICAgICdtb250aGx5JzogW10sXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5sZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0JylcblxuXG5mdW5jdGlvbiBhZGRUb2RvKCkge1xuXG59XG5leHBvcnQge1RvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvLCBQcm9qZWN0fSIsImltcG9ydCB7IFRvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSwgYWRkTGlzdGVuZXJzLCBsb2FkVG9kb0JveCwgYWRkVG9kb0NvbnRhaW5lciwgYWRkQmFubmVyLCBhZGRTaWRlYmFyIH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBNYW5hZ2UgQWRkaW5nL1VwZGF0aW5nIFRvZG9zIGhlcmVcblxuLy8gU3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuLy8gY29uc3QgYWxsVG9kb3MgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG4vLyBzdG9yYWdlLnNldEl0ZW0oJ25ldyBwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cbmZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKHRvZG9UeXBlLCBzdG9yYWdlKSB7XG4gICAgLy8gQ2hlY2sgc3RhdHVzIG9mIGxvY2FsIHN0b3JhZ2UsIGlmIG5vbmUgZXhpc3RzLCBpbml0aWFsaXplLCBlbHNlIGRvIG5vdGhpbmdcbiAgICBpZihzdG9yYWdlLmdldEl0ZW0odG9kb1R5cGUpID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcmFnZSBpcyBub3QgY3JlYXRlZCB5ZXRcIilcbiAgICAgICAgaWYgKHRvZG9UeXBlID09PSAnd2Vla2x5Jykge1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKCd3ZWVrbHknLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHkpKVxuICAgICAgICB9IGVsc2UgaWYodG9kb1R5cGUgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgnZGFpbHknLCBKU09OLnN0cmluZ2lmeShkYWlseSkpXG4gICAgICAgIH0gZWxzZSBpZih0b2RvVHlwZSA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oJ21vbnRobHknLCBKU09OLnN0cmluZ2lmeShtb250aGx5KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yYWdlLmdldEl0ZW0odG9kb1R5cGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbSh0b2RvVHlwZSkpXG4gICAgICAgIC8vIGNvbnNvbGUuZ3JvdXAoXCJTVE9SQUdFIENIRUNLXCIsIHN0b3JhZ2UuZ2V0SXRlbSh0b2RvVHlwZSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVG9kbyBqcyBmaWxlIGxvYWRpbmcuLi5cIilcbn1cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCgpIHtcbiAgICAvLyBDcmVhdGUgYSBtb2RhbCBmb3IgYWRkaW5nIFRvZG9zIHRvIERhaWx5L1dlZWtseVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgfSlcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgLy8gbW9kYWwuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpXG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgbW9kYWwuLi5cIilcblxuXG4gICAgLy8gQWRkIGlucHV0IGZvciBjcmVhdGluZyBhIG5ldyBUb2RvXG4gICAgLy8gbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIFRlc3Rpbmcgb25seVxuICAgIC8vIG1vZGFsLmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKCkpXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0Zvcm0oKSB7XG4gICAgY29uc3QgdG9kb0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9BZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBUbyBiZSBhZGRlZCBsYXRlclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J11cblxuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnU3VibWl0IG5ldyBUb2RvJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXG4gICAgdG9kby5wbGFjZWhvbGRlciA9ICdBZGQgYSBuZXcgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnQnJpZWYgZGVzY3JpcHRpb24gb2YgdG9kbydcblxuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblxuICAgICAgICBsZXQgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICBjaG9pY2UudHlwZSA9ICdjaGVja2JveCc7XG4gXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgbGFiZWwuZm9yID0gY2hvaWNlO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBvcHRpb25zW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBvcHRpb25zW2ldLnNsaWNlKDEpO1xuXG4gICAgICAgIGNob2ljZS52YWx1ZSA9IG9wdGlvbnNbaV1cblxuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgdG9kb0FkZC5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XG4gICAgfVxuXG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGFkZFRvZG8odG9kby52YWx1ZSlcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQWRkO1xufVxuXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKGJ1dHRvbikge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgICAgIGlmKGJ1dHRvbi5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZihidXR0b24uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmxldCBtb25kYXlUb2RvID0gbmV3IHdlZWtseVRvZG8oJ3dlZWtseScsICdUZXN0JywgJ1RoaXMgaXMgYSBuZXcgdGVzdCcsICdtb25kYXknKTtcblxuZnVuY3Rpb24gYWRkVG9kbyh0b2RvVHlwZSwgdG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSB0b2RvIHRvIGxvY2FsIHN0b3JhZ2VcblxuICAgIGxldCB0b2RvUHJvamVjdCA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG4gICAgXG4gICAgdG9kb1Byb2plY3RbJ3RvZG9zJ11bdG9kb1R5cGVdLnB1c2godG9kbylcbiAgICBzdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9Qcm9qZWN0KSlcbiAgICBsb2FkVG9kb0JveCh0b2RvVHlwZSlcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIC8vIEFkZCBhIG5ldyBwcm9qZWN0IHRvIHRvZG8gbGlzdCwgcHJvamVjdCBpcyBKU09OIG9iamVjdCwgc2FtZSBhcyBhbGxUb2Rvc1xuICAgIC8vIHRoYXQgaXMgc3RvcmVkIHdpdGhpbiBhbGxUb2Rvc1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4gICAgICAgICdkdWUnOiBbXSxcbiAgICAgICAgJ2RhaWx5JzogW10sXG4gICAgICAgICd3ZWVrbHknOiBbXSxcbiAgICAgICAgJ21vbnRobHknOiBbXSxcbiAgICB9XG4gICAgc3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBuZXdQcm9qZWN0KTtcbn1cblxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgLy8gT3BlbiB0aGUgbW9kYWwgd2hlbiB0aGUgYXBwcmVvcHJpYXRlIGVsZW1lbnQgaXMgY2xpY2tlZCAoaW4gdGhpcyBjYXNlIHRoZSBBZGQgdG9kbyBidXR0b24pXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmcgbW9kYWxcIiwgbW9kYWwpXG5cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAvLyBDbG9zZSBhIG1vZGFsIHdoZW4gdXNlciBoaXRzIHRoZSBYIGluIHRoZSB0b3Agb2YgdGhlIHNjcmVlbiBvbiB0aGUgbW9kYWwgKG9yIGNsaWNrcyBvdXRzaWRlIG1vZGFsKVxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5leHBvcnQgeyB0ZXN0LCBhZGRQcm9qZWN0LCBhZGRUb2RvLCBhZGRNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=