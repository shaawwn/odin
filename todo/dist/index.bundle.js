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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}"],"sourceRoot":""}]);
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
// const generalTodos = new Project('general');
// storage.setItem('general', JSON.stringify(generalTodos))
// storage.clear()
// console.log(storage)

function loadPage(projectName) {
    // Main function for adding elements to the DOM
    // console.log("STORAGE AT START OF LOADPAGE()", storage)
    document.body.innerHTML = '';
    // initialize storage if none
    if(storage.length === 0) {
        let generalTodos = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Project('general');
        storage.setItem('general', JSON.stringify(generalTodos))
        // storage.clear()
    }

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
            boxDiv.appendChild(addTodos(dailyTodos, projectName))
            boxDiv.style.display = 'none';
        } 
        if(todoBoxes[i] === 'weekly') {
            let weeklyTodos = loadTodos('weekly', projectName);
            boxDiv.appendChild(addTodos(weeklyTodos, projectName))
            boxDiv.style.display = 'none'
        }
        if(todoBoxes[i] === 'today') { // This just sets today to display by default, everything else is set to 'none'
            let todayTodos = loadTodos('today', projectName)
            boxDiv.appendChild(addTodos(todayTodos, projectName))
            boxDiv.style.display = 'flex';
        }

        boxContainer.appendChild(boxDiv);
    }
    boxContainer.appendChild((0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addModal)())
    content.appendChild(boxContainer);
}

function addTodos(todos, projectName) {
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
            // console.log("TODOS", todos[i])
            let newTodo = document.createElement('div');
            // let checkBox = document.createElement('i');
            let todoDetails = document.createElement('div');
            let todoName = document.createElement('p');
            let todoDesc = document.createElement('p');
            let todoBool = todos[i].finished
            let removeBtn = document.createElement('button');

            if(todoBool === true){
                todoDetails.classList.add('finished')
            } else if(todoBool === false) {
                todoDetails.classList.remove('finished')
            }
            todoName.innerText = todos[i].title
            todoDesc.innerText = todos[i].desc;
            removeBtn.innerText = 'Remove';
            removeBtn.classList.add('btn');
            removeBtn.classList.add('remove-btn');
            todoDetails.classList.add('todo-details');

            removeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.removeTodo)(todos[i], projectName)
            })

            todoDetails.appendChild(todoName);
            todoDetails.appendChild(todoDesc)
            newTodo.appendChild(todoDetails);
            newTodo.appendChild(removeBtn);

            newTodo.classList.add('todo-card');

            todoContainer.appendChild(newTodo);

            newTodo.addEventListener('click', () => {

                if(todoBool === false){

                    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.checkFinished)(todos[i], projectName)
                    todoDetails.classList.remove('finished')
                    loadPage(projectName)
                } else if(todoBool === true) {

                    (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.checkFinished)(todos[i], projectName)
                    todoDetails.classList.add('finished')
                    loadPage(projectName)
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
        // console.log("INDEX OF", projectStorage.todos[todo].indexOf(projectStorage.todos[todo][i]))
    }
    // console.log("loading todos function", todoList)

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
        console.log(JSON.parse(storage[projectName]).numTodos)
        let todoID = JSON.parse(storage[projectName]).numTodos;
        // console.log("ID: ", todoID)
        let newTodo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Todo (todoType.value, todoName.value, todoDesc.value, todoID)
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
        todayBox.style.display = 'flex';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'daily') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'flex';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'none';
    } else if(todo === 'weekly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'flex';
        monthlyBox.style.display = 'none';
    } else if (todo === 'monthly') {
        todayBox.style.display = 'none';
        dailyBox.style.display = 'none';
        weeklyBox.style.display = 'none';
        monthlyBox.style.display = 'flex';
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
    constructor(type, title, desc, id, finished=false) {
        this.type = type;
        this.title = title;
        this.desc = desc;
        this.finished = finished
        this.id = id
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
        this.numTodos = 0 // numTodo increments with each new todo, and functions as a unique ID for each todo
    }

}


// let newProject = new Project('default')


// function addTodo() {

// }


/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "addModal": () => (/* binding */ addModal),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "checkFinished": () => (/* binding */ checkFinished)
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
    todoProject['numTodos'] += 1;
    storage.setItem(projectName, JSON.stringify(todoProject))
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadTodoBox)(todoType)
}

function removeTodo(todo, projectName) {
    //Remove a todo when it's deleted/completed
    // Get 'type' of todo
    console.log(todo.type)
    let todoProject = JSON.parse(storage[projectName])
    let indexOfTodo = todoProject.todos[todo.type].findIndex(e => e.id === todo.id); // Changed title to id
    todoProject.todos[todo.type].splice(indexOfTodo, 1)
    storage.setItem(projectName, JSON.stringify(todoProject))
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)(projectName)

}


function checkFinished(todo, projectName) {
    // Mark a todo as finished or unfinished
    let todoProject = JSON.parse(storage[projectName])
    let indexOfTodo = todoProject.todos[todo.type].findIndex(e => e.id === todo.id);
    console.log(indexOfTodo)
    if(todo.finished === true) {
        todo.finished = false
        todoProject.todos[todo.type][indexOfTodo] = todo
        
    } else if(todo.finished === false) {
        todo.finished = true
        todoProject.todos[todo.type][indexOfTodo] = todo
    }
    storage.setItem(projectName, JSON.stringify(todoProject))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxRQUFRLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVB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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxtQkFBbUIscURBQXFEO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzWEE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEOEQ7QUFDNEM7QUFDMUc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLHFCQUFxQixxREFBVTs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBLElBQUksb0RBQVE7O0FBRVo7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekxBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wYWdlLWhlaWdodDogMTAwdmg7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjUlO1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcblxcbi5idG4ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcbi5idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbn1cXG5cXG5cXG4ubGluZWJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi50ZXN0IHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi8qIEdlbmVyYWwgc2VsZWN0b3JzICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogQmFubmVyICovXFxuXFxuI2Jhbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuXFxuLyogU2lkZWJhciAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWhlaWdodCk7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5ib3gtaXRlbSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLmJveC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IHJnYig1MCw1MCw1MCk7XFxufVxcblxcbi8qIFRvZG8gY29udGVudCAqL1xcblxcbiNib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwyMzAsMjMwKTtcXG59XFxuXFxuLnRvZG8tYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwyMzAsMjMwKTtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1ib3ggPiAuaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRvZG8tYm94ID4gdWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG5cXG4udG9kby1ib3ggPiBidXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG51bCA+IGxpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyA+IHAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxMDBweDtcXG59XFxuXFxuXFxuLmZpbmlzaGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJlbW92ZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCA2NiwgNjYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvZG8tY2FyZCA+IHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi50b2RvLWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4uY2FsZW5kYXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG5cXG4uY2FsZW5kYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogNzcwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jYWwtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3NSwgNzUsIDc1KTtcXG59XFxuXFxuLmNhbC1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5cXG4ubW9udGgtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9udGgtaGVhZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLm1vbnRoLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzhweDtcXG59XFxuXFxuLmNhbGVuZGFyLWRheSB7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcblxcbi8qIE1vZGFscyAqL1xcblxcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNyk7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7ICovXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogdmFyKC0tcGFnZS1oZWlnaHQpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IHAge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0biB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiAuYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBbdHlwZX49J3RleHQnXSB7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiB0ZXh0YXJlYSB7XFxuXFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0tYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogbGVmdDogMHB4OyAqL1xcbiAgICByaWdodDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYig1MCw1MCw1MCk7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOnJnYig0MCw0MCw0MCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBzZWxlY3R7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b2RvLWZvcm0gPiBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50b2RvLWZvcm0gPiAuY2xvc2UtYnRuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4OyBcXG59XFxuLmZvcm0taW5wdXQge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gICAgLyogICovXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgXFxufVxcbi5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSw3NSw3NSk7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzAsMjMwLDIzMCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4OyAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIC8qIHJpZ2h0OiAxMHB4OyAqL1xcbiAgICAvKiB0b3A6IDEwcHg7ICovXFxufVxcblxcbi5jbG9zZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG4vKiBDYWxlbmRhciBNb2RhbCAqL1xcbi5wYWRkaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIFxcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIsIC5uYXYtaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cXG4udGVzdC1ib3gge1xcbiAgICB3aWR0aDogMTUwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFIQUFxSDtJQUNySCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxrQ0FBa0M7QUFDdEM7OztBQUdBO0lBQ0ksb0NB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QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxLQUFLO0lBQ0wsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixrQ0FBa0M7O0FBRXRDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSTs7Ozt3QkFJb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksa0NBQWtDO0FBQ3RDOzs7O0FBSUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7O0FBR0o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcGFnZS1oZWlnaHQ6IDEwMHZoO1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI1JTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5cXG4uYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbi5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuXFxuXFxuLmxpbmVicmVhayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4udGVzdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNlbGVjdG9ycyAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEJhbm5lciAqL1xcblxcbiNiYW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4jc2lkZWJhciB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGhlaWdodDogdmFyKC0tcGFnZS1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4uYm94LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5ib3gtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGNvbG9yOiByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4vKiBUb2RvIGNvbnRlbnQgKi9cXG5cXG4jYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxufVxcblxcbi50b2RvLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tYm94ID4gLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigxMDAsMTAwLDEwMCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWJveCA+IHVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuLnRvZG8tYm94ID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxudWwgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50b2RvLWRldGFpbHMgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTAwcHg7XFxufVxcblxcblxcbi5maW5pc2hlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yZW1vdmUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgNjYsIDY2KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvLWNhcmQgPiBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2FsLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzUsIDc1LCA3NSk7XFxufVxcblxcbi5jYWwtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuXFxuLm1vbnRoLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vbnRoLWhlYWRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5tb250aC1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDM4cHg7XFxufVxcblxcbi5jYWxlbmRhci1kYXkge1xcbiAgICBtYXJnaW46IDFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2lkZWJhci13aWR0aCkpOyAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiBwIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG4ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gLmJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gW3R5cGV+PSd0ZXh0J10ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gdGV4dGFyZWEge1xcblxcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbC1mb3JtLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDBweDsgKi9cXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2IoNTAsNTAsNTApO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjpyZ2IoNDAsNDAsNDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby1mb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udG9kby1mb3JtID4gLmNsb3NlLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgXFxufVxcbi5mb3JtLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50b2RvLWZvcm0gPiBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIC8qICAqL1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIFxcbn1cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNzUsNzUpO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLDIzMCwyMzApO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICAvKiByaWdodDogMTBweDsgKi9cXG4gICAgLyogdG9wOiAxMHB4OyAqL1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuLyogQ2FsZW5kYXIgTW9kYWwgKi9cXG4ucGFkZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLCAubmF2LWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXFxuLnRlc3QtYm94IHtcXG4gICAgd2lkdGg6IDE1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY29uc29sZS5sb2coXCJMb2FkaW5nIG1vbnRobHkgdG9kbyBjYWxlbmRhci4uLi5cIilcblxuXG5sZXQgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbmxldCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXVxubGV0IGR0ID0gbmV3IERhdGUoKVxubGV0IGN1cnJlbnQgPSAwO1xubGV0IG1vbnRoVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JykgLy8gQ29udGFpbmVyIGZvciB0aGUgY2FsZW5kYXIsIHdoZW4gYSBtb250aCBpcyBjaGFuZ2VkLCB0aGlzIGdldHMgcmVzZXQgYW5kIHJlcGxhY2VkIHdpdGggY3VycmVudGx5IHNlbGVjdGVkIG1vbnRoXG5cbmZ1bmN0aW9uIGxvYWRDYWxlbmRhcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk1PTlRIICsgQ1VSUkVOVFwiLCBkdC5nZXRNb250aCgpLCBjdXJyZW50KVxuICAgIC8vIGxldCBkYXRlID0gZHQuZ2V0RGF0ZSgpO1xuICAgIC8vIGxldCBkYXkgPSBkdC5nZXREYXkoKVxuICAgIGxldCB5ZWFyID0gZHQuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBtb250aCA9IGR0LmdldE1vbnRoKCkgKyBjdXJyZW50O1xuXG4gICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSlcbiAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMClcblxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBmaXJzdERheU9mTW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICB5ZWFyOidudW1lcmljJyxcbiAgICAgICAgbW9udGg6J251bWVyaWMnLFxuICAgICAgICBkYXk6J251bWVyaWMnLFxuICAgIH0pXG5cbiAgICBjb25zdCBsYXN0RGF0ZVN0cmluZyA9IGxhc3REYXlPZk1vbnRoLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICB9KVxuXG4gICAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrZGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuICAgIGNvbnN0IG5leHRQYWRkaW5nRGF5cyA9IHdlZWtkYXlzLmxlbmd0aCAtIHdlZWtkYXlzLmluZGV4T2YobGFzdERhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBzZXQgYXR0cmlidXRlc1xuICAgIGNvbnN0IG1vbnRobHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vbnRobHlEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1ib3gnKVxuICAgIG1vbnRobHlEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb250aGx5RGl2LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtb250aGx5JylcblxuICAgIGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGNhbGVuZGFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhcicpXG4gICAgY2FsZW5kYXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlci1jb250YWluZXInKTtcbiAgICBtb250aEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb250aC1oZWFkZXInKTtcbiAgICBtb250aEhlYWRlci5pbm5lclRleHQgPSBtb250aHNbbW9udGhdO1xuXG4gICAgLy8gY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGhIZWFkZXIpO1xuICAgIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE1vbnRoSGVhZGVyKG1vbnRoKSk7XG4gICAgY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuXG4gICAgLy8gQWRkIHdlZWtkYXkgaGVhZGVyc1xuICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGFkZFdlZWtkYXlIZWFkZXIoKSlcblxuICAgIC8vIEFkZCBkYXkgc3F1YXJlcyB0byBjYWxlbmRhclxuICAgIGFkZERheVNxdWFyZXMoY2FsZW5kYXIsIHBhZGRpbmdEYXlzLCBkYXlzSW5Nb250aCwgbmV4dFBhZGRpbmdEYXlzKVxuXG4gICAgbW9udGhseURpdi5hcHBlbmRDaGlsZChjYWxlbmRhckNvbnRhaW5lcilcbiAgICAvLyByZXR1cm4gbW9udGhseURpdlxuICAgIC8vIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZChhZGRNb2RhbCgnbW9udGhseScpKVxuICAgIHJldHVybiBjYWxlbmRhckNvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBhZGRNb250aEhlYWRlcihtb250aCkge1xuICAgIC8vIEFkZCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBtb250aCBhdCB0aGUgdG9wIG9mIHRoZSBjYWxlbmRhciwgYXMgd2VsbCBhcyB0aGUgYWJpbGl0eSB0byBzd2l0Y2ggbW9udGhzXG5cbiAgICAvLyAnQ3VycmVudCcgZGVmYXVsdHMgdG8gdGhlIGdpdmVuIG1vbnRoIHBhcmFtZXRlciAoY3VycmVudCBtb250aCksIGFkZGluZy9zdWJ0cmFjdGluZyBmb3JtIGN1cnJlbnQgd2lsbCBzd2l0Y2ggbW9udGhzXG4gICAgLy8gbGV0IGN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IG1vbnRoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9udGhIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbW9udGhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1vbnRoVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyJyk7XG4gICAgbW9udGhUaXRsZS5pbm5lclRleHQgPSBtb250aHNbbW9udGhdO1xuICAgIGNvbnN0IHByZXZpb3VzTW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXh0TW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGFkZE1vbnRoTmF2aWdhdGlvbihwcmV2aW91c01vbnRoLCAncHJldmlvdXMnKTtcbiAgICBhZGRNb250aE5hdmlnYXRpb24obmV4dE1vbnRoLCAnbmV4dCcpO1xuXG4gICAgcHJldmlvdXNNb250aC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBwcmV2aW91c01vbnRoLmNsYXNzTGlzdC5hZGQoJ21vbnRoLW5hdicpXG4gICAgbmV4dE1vbnRoLmNsYXNzTGlzdC5hZGQoJ21vbnRoLW5hdicpO1xuICAgIG5leHRNb250aC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuXG4gICAgcHJldmlvdXNNb250aC5pbm5lclRleHQgPSAnPCdcbiAgICBuZXh0TW9udGguaW5uZXJUZXh0ID0gJz4nXG5cbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChwcmV2aW91c01vbnRoKTtcbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChtb250aFRpdGxlKTtcbiAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChuZXh0TW9udGgpO1xuXG4gICAgcmV0dXJuIG1vbnRoSGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRXZWVrZGF5SGVhZGVyKCkge1xuICAgIC8vIEFkZCB3ZWVrZGF5IGhlYWRlcnMgdG8gdGhlIGNhbGVuZGFyKCdNb25kYXknLCAnVHVlc2RheScsICdldGMpXG4gICAgY29uc3Qgd2Vla2RheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtkYXlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlci1jb250YWluZXInKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtkYXlzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgY29uc3QgZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYWwtaGVhZGVyJyk7XG4gICAgICAgIGRheUhlYWRlci5pbm5lclRleHQgPSB3ZWVrZGF5c1tpXTtcbiAgICAgICAgd2Vla2RheUhlYWRlci5hcHBlbmRDaGlsZChkYXlIZWFkZXIpXG4gICAgfVxuICAgIHJldHVybiB3ZWVrZGF5SGVhZGVyO1xufVxuXG5mdW5jdGlvbiBhZGRNb250aE5hdmlnYXRpb24oYnV0dG9uLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIHByZXZpb3VzL25leHQgbW9udGggQnV0dG9ucyB0byBzd2l0Y2ggbW9udGhzIGluIHRoZSBjYWxlbmRhclxuICAgIGxldCBtb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdtb250aGx5JylcbiAgICBsZXQgbW9udGhDYWxlbmRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGVuZGFyJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIE5hdiBtb3ZlcyBsZWZ0IG9yIHJpZ2h0XG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgY3VycmVudCAtPSAxXG4gICAgICAgICAgICBjdXJyZW50ID0gY2hlY2tDdXJyZW50KGN1cnJlbnQpO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKVxuICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgKz0gMVxuICAgICAgICAgICAgY3VycmVudCA9IGNoZWNrQ3VycmVudChjdXJyZW50KVxuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbW9udGhUb2RvWzBdLmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tDdXJyZW50KGN1cnJlbnQpIHtcbiAgICAvLyBSZXNldHMgJ2N1cnJlbnQnIHRvIDAgaWYgZ3JlYXRlciB0aGFuIDEyLCBzaW5jZSBudW1iZXJzIGhpZ2hlciB0aGFuIHRoYXQgYXJlIG91dCBvZiBpbmRleCBmb3IgbW9udGhzXG4gICAgaWYoY3VycmVudCArIGR0LmdldE1vbnRoKCkgPiAxMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgY3VycmVudFwiLCBjdXJyZW50ICsgZHQuZ2V0TW9udGgoKSlcbiAgICAgICAgcmV0dXJuIC1kdC5nZXRNb250aCgpXG4gICAgfSBlbHNlIGlmKGR0LmdldE1vbnRoKCkgKyBjdXJyZW50IDwgMCkge1xuICAgICAgICAvLyBSb2xsIG92ZXIgc28gdGhhdCBpdCB3aWxsIHJldHVybiBpbmRleCAxMiBmb3IgRGVjZW1iZXIsIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDEyIGFuZCBkdC5nZXRNb250aCgpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJldmlvdXMgeWVhclwiKVxuICAgICAgICByZXR1cm4gMTEgLSBkdC5nZXRNb250aCgpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiVmFsaWQgY3VycmVudFwiLCBjdXJyZW50KVxuICAgIHJldHVybiBjdXJyZW50XG5cbn1cblxuXG5mdW5jdGlvbiBhZGREYXlTcXVhcmVzKGNhbGVuZGFyLCBwYWRkaW5nRGF5cywgZGF5c0luTW9udGgsIG5leHRQYWRkaW5nRGF5cykge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYWRkaW5nRGF5cyArIGRheXNJbk1vbnRoICsgbmV4dFBhZGRpbmdEYXlzIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBjYWxlbmRhckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYWxlbmRhckRheS5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1kYXknKTtcblxuICAgICAgICBpZiAoaSA8IHBhZGRpbmdEYXlzIHx8IGkgPj0gcGFkZGluZ0RheXMgKyBkYXlzSW5Nb250aCkge1xuICAgICAgICAgICAgY2FsZW5kYXJEYXkuY2xhc3NMaXN0LmFkZCgncGFkZGluZycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxlbmRhckRheS5pbm5lclRleHQgPSAoaSAtIHBhZGRpbmdEYXlzKSArIDFcbiAgICAgICAgICAgIGNhbGVuZGFyRGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChjYWxlbmRhckRheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJEYXkpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCh0b2RvVHlwZSkge1xuICAgIC8vIEFkZCBhIG1vZGFsIHRvIHRoZSBjYWxlbmRhciBmb3IgYWRkaW5nIG5ldyBUb2RvcywgcG90ZW50aWFsbHkgbm90IHVuaXF1ZSB0byBjYWxlbmRhciwgc28gbWF5YmUgbW92ZSB0byBhbm90aGVyIGZpbGUgYW5kIGV4cG9ydFxuICAgIC8vIDQgdHlwZXMgb2YgdG9kb3M6IFRvZGF5KFVuaXF1ZSksIERhaWx5LCBXZWVrbHksIE1vbnRobHksIGFkanVzdCB0aGUgZm9ybSBhY2NvcmRpbmdseVxuICAgIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuXG5cbiAgICAvLyBDcmVhdGUgYSBmb3JtIGZvciBhZGRpbmcgbmV3IFRvZG9zLCBhbmQgYWRkIGl0IHRvIHRoZSB0b2RvIGZvcm0gZGl2XG4gICAgaWYodG9kb1R5cGUgPT09ICdkYWlseScpIHtcbiAgICAgICAgcGFzc1xuICAgIH0gZWxzZSBpZih0b2RvVHlwZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAnd2Vla2x5Jykge1xuICAgICAgICBwYXNzXG4gICAgfSBlbHNlIGlmKHRvZG9UeXBlID09PSAnbW9udGhseScpIHtcbiAgICAgICAgLy8gSGVyZSdzIHdoZXJlIEkgYWRkIHN0dWZmIGZvciBub3dcblxuICAgICAgICBjb25zdCBtb250aERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG1vbnRoRGF0ZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgbW9udGhEYXRlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpXG4gICAgICAgIC8vIG1vbnRoRGF0ZS5pbm5lclRleHQgPSBtb250aHNbZHQuZ2V0TW9udGgoKV1cbiAgICAgICAgdG9kby50eXBlID0gJ3RleHQnO1xuICAgICAgICB0b2RvLnBsYWNlaG9sZGVyID0gJ0FkZCB0b2RvJ1xuICAgICAgICB0b2RvRGVzYy5wbGFjZWhvbGRlciA9ICdBZGQgYSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBoZXJlJ1xuICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkIFRvZG8nXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobW9udGhEYXRlKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYylcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgfVxuXG4gICAgLy8gdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kbylcbiAgICAvLyB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHJldHVybiBtb2RhbFxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgLy8gQnkgY2xpY2tpbmcgYSBjbG9zZSBidXR0b24gY2xvc2UgYW55IG9wZW4gbW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoZGF5KSB7XG4gICAgLy8gQWRkIGFuIGV2ZW50IGxzaXRlbmVyIHRvIG9wZW4gdXAgdGhlIGFkZCB0b2RvIG1vZGFsXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKTtcbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1oZWFkZXInKVswXTtcbiAgICBsZXQgbW9udGhEYXRlID0gbW9udGhzW2R0LmdldE1vbnRoKCkgKyBjdXJyZW50XSArIFwiIFwiICsgZGF5LmlubmVyVGV4dFxuXG4gICAgbW9kYWxIZWFkZXIuaW5uZXJUZXh0ID0gJydcbiAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSBtb250aHNbZHQuZ2V0TW9udGgoKSArIGN1cnJlbnRdICsgXCIgXCIgKyBkYXkuaW5uZXJUZXh0XG4gICAgbW9kYWxbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIHByaW50RGF0ZUluZm8oZGF0ZSkge1xuXG4gICAgY29uc29sZS5sb2coXCJEYXRlOiBcIiwgZGF0ZS5nZXREYXRlKCkpXG4gICAgY29uc29sZS5sb2coXCJEYXk6IFwiLCB3ZWVrZGF5c1tkYXRlLmdldERheSgpXSlcbiAgICBjb25zb2xlLmxvZyhcIlllYXI6IFwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgY29uc29sZS5sb2coXCJNb250aDogXCIsIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldKVxuXG4gICAgbGV0IGRhdGVQYXJhbXMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJGb3JtYXRlZCBkYXRlIHN0cmluZ1wiLCBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBkYXRlUGFyYW1zKSlcblxuICAgIC8vIENhbiBnZXQgZGF5cyBpbiBtb250aCBieSBnZXR0aW5nIHRoZSBkYXRlIG9mIHRoZSBsYXN0IGRheSBpbiBhIG1vbnRoLlxuICAgIGxldCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpXG4gICAgbGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0RGF5KClcbiAgICBjb25zb2xlLmxvZyhcIkRheXMgaW4gbW9udGg6IFwiLCBkYXlzSW5Nb250aCwgZmlyc3REYXkpXG5cblxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbn0pXG5cblxuLy8gcHJpbnREYXRlSW5mbyhkdClcbmV4cG9ydCB7IGxvYWRDYWxlbmRhciB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgeyB0ZXN0SlNPTiB9IGZyb20gJy4vdGVzdHMuanMnO1xuaW1wb3J0IHsgVG9kbywgd2Vla2x5VG9kbywgbW9udGhseVRvZG8sIFByb2plY3QgfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyB0ZXN0LCBhZGRQcm9qZWN0LCBhZGRUb2RvLCByZW1vdmVUb2RvLCBhZGRNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjaGVja0ZpbmlzaGVkIH0gZnJvbSAnLi90b2Rvcy5qcyc7XG5pbXBvcnQgeyBsb2FkQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyLmpzJztcblxuXG5cbmNvbnNvbGUubG9nKFwiU2NyaXB0cyBsb2FkaW5nLi4uLlwiKVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbi8vIGNvbnN0IGdlbmVyYWxUb2RvcyA9IG5ldyBQcm9qZWN0KCdnZW5lcmFsJyk7XG4vLyBzdG9yYWdlLnNldEl0ZW0oJ2dlbmVyYWwnLCBKU09OLnN0cmluZ2lmeShnZW5lcmFsVG9kb3MpKVxuLy8gc3RvcmFnZS5jbGVhcigpXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5mdW5jdGlvbiBsb2FkUGFnZShwcm9qZWN0TmFtZSkge1xuICAgIC8vIE1haW4gZnVuY3Rpb24gZm9yIGFkZGluZyBlbGVtZW50cyB0byB0aGUgRE9NXG4gICAgLy8gY29uc29sZS5sb2coXCJTVE9SQUdFIEFUIFNUQVJUIE9GIExPQURQQUdFKClcIiwgc3RvcmFnZSlcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIC8vIGluaXRpYWxpemUgc3RvcmFnZSBpZiBub25lXG4gICAgaWYoc3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGdlbmVyYWxUb2RvcyA9IG5ldyBQcm9qZWN0KCdnZW5lcmFsJyk7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgnZ2VuZXJhbCcsIEpTT04uc3RyaW5naWZ5KGdlbmVyYWxUb2RvcykpXG4gICAgICAgIC8vIHN0b3JhZ2UuY2xlYXIoKVxuICAgIH1cblxuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy8gQ29udGVudCBkaXYgaXMgYWxsIGVsZW1lbnRzIG9mIHRoZSB0aGUgYm9keSBhZnRlciB0aGUgYmFubmVyXG4gICAgY29udGVudERpdi5pZCA9ICdjb250ZW50J1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQmFubmVyKCkpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkU2lkZWJhcigpKVxuXG4gICAgYWRkVG9kb0NvbnRhaW5lcihwcm9qZWN0TmFtZSlcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRCYW5uZXIoKSB7XG4gICAgLy8gQWRkIGEgaGVhZGVyIGJhbm5lciBmb3IgdGhlIHdlYnBhZ2VcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgYmFubmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYmFubmVyLmlkID0gJ2Jhbm5lcic7XG4gICAgYmFubmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBiYW5uZXJIZWFkZXIuaW5uZXJUZXh0ID0gXCJVc2VyJ3MgVG9kbyBMaXN0XCI7XG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVySGVhZGVyKTtcblxuICAgIHJldHVybiBiYW5uZXJcbn1cblxuXG5mdW5jdGlvbiBhZGRTaWRlYmFyKCkge1xuICAgIC8vIEFkZCB0aGUgc2lkZWJhciB0byB0aGUgRE9NXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBib3hlcyA9IFsnVG9kYXknLCAnRGFpbHknLCAnV2Vla2x5JywgJ01vbnRobHknXVxuICAgIGxldCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuXG4gICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgbGluZWJyZWFrLmNsYXNzTGlzdC5hZGQoJ2xpbmVicmVhaycpO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lclRleHQgPSAnKyBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGROZXdQcm9qZWN0KClcbiAgICB9KVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbmF2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JveC1pdGVtJyk7XG4gICAgICAgIG5hdkhlYWRlci5pbm5lclRleHQgPSBib3hlc1tpXTtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdkhlYWRlcilcbiAgICB9XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvQ29udGFpbmVyKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGNvbnRhaW5lcnMgZm9yIGVhY2ggdG9kbyBjYXRlZ29yeSB0byBiZSBkaXNwbGF5ZWQgaW4gJ21haWxib3gnIHN0eWxlXG4gICAgLy8gTG9hZCAnZ2VuZXJhbCcgYnkgZGVmYXVsdFxuICAgIGNvbnN0IHRvZG9Cb3hlcyA9IFsndG9kYXknLCAnZGFpbHknLCAnd2Vla2x5JywgJ21vbnRobHknXTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcGFyc2VUb2RvcyA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG5cbiAgICBib3hDb250YWluZXIuaWQgPSAnYm94LWNvbnRhaW5lcic7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9Cb3hlcy5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgbGV0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYm94RGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBhZGRUb2RvQnRuKHByb2plY3ROYW1lKTtcblxuICAgICAgICBib3hEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWJveCcpO1xuICAgICAgICBib3hEaXYuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb0JveGVzW2ldKVxuICAgICAgICBhZGRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcblxuXG4gICAgICAgIGJveERpdkhlYWRlci5pbm5lclRleHQgPSB0b2RvQm94ZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9Cb3hlc1tpXS5zbGljZSgxKSArICcgVG9kb3MnO1xuICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYm94RGl2SGVhZGVyKTtcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnbW9udGhseScpIHtcbiAgICAgICAgICAgIC8vIENhbGVuZGFyIGZ1bmN0aW9ucyBpbiBhIGRpZmZlcmVudCB3YXksIHNvIGFkZCBsYXRlclxuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKTtcbiAgICAgICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpXG4gICAgICAgIH1cbiAgICAgICAgaWYodG9kb0JveGVzW2ldID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICBsZXQgZGFpbHlUb2RvcyA9IGxvYWRUb2RvcygnZGFpbHknLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3MoZGFpbHlUb2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gXG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ3dlZWtseScpIHtcbiAgICAgICAgICAgIGxldCB3ZWVrbHlUb2RvcyA9IGxvYWRUb2Rvcygnd2Vla2x5JywgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZFRvZG9zKHdlZWtseVRvZG9zLCBwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ3RvZGF5JykgeyAvLyBUaGlzIGp1c3Qgc2V0cyB0b2RheSB0byBkaXNwbGF5IGJ5IGRlZmF1bHQsIGV2ZXJ5dGhpbmcgZWxzZSBpcyBzZXQgdG8gJ25vbmUnXG4gICAgICAgICAgICBsZXQgdG9kYXlUb2RvcyA9IGxvYWRUb2RvcygndG9kYXknLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRUb2Rvcyh0b2RheVRvZG9zLCBwcm9qZWN0TmFtZSkpXG4gICAgICAgICAgICBib3hEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpO1xuICAgIH1cbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTW9kYWwoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJveENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9zKHRvZG9zLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vIFBhcnNlIHRvZG9zIGFuZCBhZGQgdG8gY29udGFpbmVyLCB0b2RvcyBpcyBhbiBhcnJheSBvZiB0b2Rvc1xuXG4gICAgaWYodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IG5vVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBub1RvZG9zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgICAgIG5vVG9kb3MuaW5uZXJUZXh0ID0gJ1lvdSBoYXZlIG5vIFRvZG9zISdcbiAgICAgICAgcmV0dXJuIG5vVG9kb3NcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIGFuZCBhZGQgdGhlIHRvZG9zIFxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVE9ET1NcIiwgdG9kb3NbaV0pXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbGV0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgdG9kb0Jvb2wgPSB0b2Rvc1tpXS5maW5pc2hlZFxuICAgICAgICAgICAgbGV0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBpZih0b2RvQm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRvZG9Cb29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9OYW1lLmlubmVyVGV4dCA9IHRvZG9zW2ldLnRpdGxlXG4gICAgICAgICAgICB0b2RvRGVzYy5pbm5lclRleHQgPSB0b2Rvc1tpXS5kZXNjO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idG4nKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscycpO1xuXG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvKHRvZG9zW2ldLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9EZXNjKVxuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XG4gICAgICAgICAgICBuZXdUb2RvLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XG5cbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICAgICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZih0b2RvQm9vbCA9PT0gZmFsc2Upe1xuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRmluaXNoZWQodG9kb3NbaV0sIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0b2RvQm9vbCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRmluaXNoZWQodG9kb3NbaV0sIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0NvbnRhaW5lclxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBsb2FkVG9kb3ModG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBMb2FkIHRvZG9zIGJhc2VkIG9uIHByb2plY3QgbmFtZSwgb3IgYnkgYWxsIGFzIGRlZmF1bHRcblxuICAgIGNvbnN0IHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgdG9kb0xpc3QucHVzaChwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXVtpXSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJTkRFWCBPRlwiLCBwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXS5pbmRleE9mKHByb2plY3RTdG9yYWdlLnRvZG9zW3RvZG9dW2ldKSlcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJsb2FkaW5nIHRvZG9zIGZ1bmN0aW9uXCIsIHRvZG9MaXN0KVxuXG4gICAgcmV0dXJuIHRvZG9MaXN0XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Gb3JtKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBhbmQgYWRkIHRvIG1vZGFsXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0b2RvVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBhZGRUb2RvQnRuKClcblxuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdG9kb1R5cGUuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnQWRkIG5ldyBUb2RvJztcbiAgICB0b2RvTmFtZS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIG5hbWUgZm9yIHlvdXIgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBicmllZiBkZXNjcmlwdGlvbiBvZiB5b3VyIHRvZG8nO1xuICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9ICdYJztcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnQWRkIFRvZG8nXG5cbiAgICBjb25zdCB0b2RvVHlwZXMgPSBbJ3RvZGF5JywgJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UeXBlcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdG9kb1R5cGVzW2ldXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0b2RvVHlwZXNbaV1bMF0udG9VcHBlckNhc2UoKSArIHRvZG9UeXBlc1tpXS5zbGljZSgxKVxuICAgICAgICB0b2RvVHlwZS5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH0pXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pLm51bVRvZG9zKVxuICAgICAgICBsZXQgdG9kb0lEID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSkubnVtVG9kb3M7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQ6IFwiLCB0b2RvSUQpXG4gICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8gKHRvZG9UeXBlLnZhbHVlLCB0b2RvTmFtZS52YWx1ZSwgdG9kb0Rlc2MudmFsdWUsIHRvZG9JRClcbiAgICAgICAgYWRkVG9kbyh0b2RvVHlwZS52YWx1ZSwgbmV3VG9kbywgcHJvamVjdE5hbWUpXG5cbiAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lKTtcblxuICAgIH0pXG4gICAgXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1R5cGUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBcbiAgICByZXR1cm4gdG9kb0Zvcm1cbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvQnRuKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBidXR0b24gYW5kIGxpc3RlbmVyIGZvciBhZGRpbmcgdG9kb3NcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vIFVzZSBhIHNwYW4/XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idG4nKTtcbiAgICB0b2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIC8vIHRvZG9CdG4uc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpXG5cbiAgICB0b2RvQnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbyc7XG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJylcbiAgICAgICAgbW9kYWxbMF0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU9EQUxcIiwgbW9kYWwpXG4gICAgICAgIGxldCB0b2RvRm9ybSA9IGFkZFRvZG9Gb3JtKHByb2plY3ROYW1lKTtcbiAgICAgICAgbW9kYWxbMF0uYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgIH0pXG4gICAgcmV0dXJuIHRvZG9CdG47XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgLy8gQWRkIHRoZSBmb3JtIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBib3hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKVxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb3JtJyk7XG4gICAgbmV3UHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICBuZXdQcm9qZWN0SGVhZGVyLmlubmVyVGV4dCA9ICdBZGQgTmV3IFByb2plY3QnO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkZXIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgIGxldCB0b2RvT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveC1pdGVtJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvT3B0aW9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIHRvZG9PcHRpb25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGtleXdvcmQgPSB0b2RvT3B0aW9uc1tpXS5pbm5lclRleHRbMF0udG9Mb3dlckNhc2UoKSArIHRvZG9PcHRpb25zW2ldLmlubmVyVGV4dC5zbGljZSgxKTtcbiAgICAgICAgICAgIGxldCB0b2RvYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoa2V5d29yZClbMF07XG4gICAgICAgICAgICBsb2FkVG9kb0JveChrZXl3b3JkKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkVG9kb0JveCh0b2RvKSB7XG4gICAgLy8gRGlzcGxheSBnaXZlbiB0b2RvYm94XG5cbiAgICBjb25zdCB0b2RheUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0b2RheScpWzBdO1xuICAgIGNvbnN0IGRhaWx5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2RhaWx5JylbMF07XG4gICAgY29uc3Qgd2Vla2x5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3dlZWtseScpWzBdO1xuICAgIGNvbnN0IG1vbnRobHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbW9udGhseScpWzBdO1xuICAgIGlmKHRvZG8gPT09ICd0b2RheScpIHtcbiAgICAgICAgdG9kYXlCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZGFpbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgd2Vla2x5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vbnRobHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYodG9kbyA9PT0gJ2RhaWx5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZih0b2RvID09PSAnd2Vla2x5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAodG9kbyA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHdlZWtseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtb250aGx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxufVxuXG5cbmxvYWRQYWdlKCdnZW5lcmFsJyk7XG4vLyBhZGRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UsIGFkZExpc3RlbmVycywgbG9hZFRvZG9Cb3gsIGFkZFRvZG9Db250YWluZXIsIGFkZEJhbm5lciwgYWRkU2lkZWJhciB9IiwiLy8gQ2xhc3NlcyBmb3IgdG9kbyBvYmplY3RzXG5jb25zb2xlLmxvZygnbG9hZGluZyB0b2RvIG9iamVjdHMuLi4nKVxuXG5sZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cbmNsYXNzIFRvZG8ge1xuICAgIC8vIFR5cGU6IER1ZSwgRGFpbHksIFdlZWtseSwgTW9udGhseVxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBpZCwgZmluaXNoZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWRcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgfVxufVxuXG5jbGFzcyB3ZWVrbHlUb2RvIGV4dGVuZHMgVG9kbyB7XG4gICAgLy8gV2Vla2x5IHRvZG9zLCBkYXk6IERheSBvZiB0aGUgd2Vla1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBkYXkpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgdGl0bGUsIGRlc2MpO1xuICAgICAgICB0aGlzLmRheSA9IGRheVxuICAgIH1cbn1cblxuXG5jbGFzcyBtb250aGx5VG9kbyBleHRlbmRzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBkYXRlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHRpdGxlLCBkZXNjKTtcbiAgICAgICAgdGhpcy5kYXRlO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSB7XG4gICAgICAgICAgICAndG9kYXknOiBbXSxcbiAgICAgICAgICAgICdkYWlseSc6IFtdLFxuICAgICAgICAgICAgJ3dlZWtseSc6IFtdLFxuICAgICAgICAgICAgJ21vbnRobHknOiBbXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm51bVRvZG9zID0gMCAvLyBudW1Ub2RvIGluY3JlbWVudHMgd2l0aCBlYWNoIG5ldyB0b2RvLCBhbmQgZnVuY3Rpb25zIGFzIGEgdW5pcXVlIElEIGZvciBlYWNoIHRvZG9cbiAgICB9XG5cbn1cblxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0JylcblxuXG4vLyBmdW5jdGlvbiBhZGRUb2RvKCkge1xuXG4vLyB9XG5leHBvcnQge1RvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvLCBQcm9qZWN0fSIsImltcG9ydCB7IFRvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSwgYWRkTGlzdGVuZXJzLCBsb2FkVG9kb0JveCwgYWRkVG9kb0NvbnRhaW5lciwgYWRkQmFubmVyLCBhZGRTaWRlYmFyIH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBNYW5hZ2UgQWRkaW5nL1VwZGF0aW5nIFRvZG9zIGhlcmVcblxuLy8gU3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuLy8gY29uc3QgYWxsVG9kb3MgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG4vLyBzdG9yYWdlLnNldEl0ZW0oJ25ldyBwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCgpIHtcbiAgICAvLyBDcmVhdGUgYSBtb2RhbCBmb3IgYWRkaW5nIFRvZG9zIHRvIERhaWx5L1dlZWtseVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgfSlcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgLy8gbW9kYWwuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpXG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgbW9kYWwuLi5cIilcblxuXG4gICAgLy8gQWRkIGlucHV0IGZvciBjcmVhdGluZyBhIG5ldyBUb2RvXG4gICAgLy8gbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIFRlc3Rpbmcgb25seVxuICAgIC8vIG1vZGFsLmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKCkpXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0Zvcm0oKSB7XG4gICAgY29uc3QgdG9kb0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9BZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBUbyBiZSBhZGRlZCBsYXRlclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J11cblxuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnU3VibWl0IG5ldyBUb2RvJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXG4gICAgdG9kby5wbGFjZWhvbGRlciA9ICdBZGQgYSBuZXcgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnQnJpZWYgZGVzY3JpcHRpb24gb2YgdG9kbydcblxuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblxuICAgICAgICBsZXQgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICBjaG9pY2UudHlwZSA9ICdjaGVja2JveCc7XG4gXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgbGFiZWwuZm9yID0gY2hvaWNlO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBvcHRpb25zW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBvcHRpb25zW2ldLnNsaWNlKDEpO1xuXG4gICAgICAgIGNob2ljZS52YWx1ZSA9IG9wdGlvbnNbaV1cblxuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgdG9kb0FkZC5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XG4gICAgfVxuXG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGFkZFRvZG8odG9kby52YWx1ZSlcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQWRkO1xufVxuXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKGJ1dHRvbikge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgICAgIGlmKGJ1dHRvbi5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZihidXR0b24uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmxldCBtb25kYXlUb2RvID0gbmV3IHdlZWtseVRvZG8oJ3dlZWtseScsICdUZXN0JywgJ1RoaXMgaXMgYSBuZXcgdGVzdCcsICdtb25kYXknKTtcblxuZnVuY3Rpb24gYWRkVG9kbyh0b2RvVHlwZSwgdG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSB0b2RvIHRvIGxvY2FsIHN0b3JhZ2VcblxuICAgIGxldCB0b2RvUHJvamVjdCA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG4gICAgXG4gICAgdG9kb1Byb2plY3RbJ3RvZG9zJ11bdG9kb1R5cGVdLnB1c2godG9kbylcbiAgICB0b2RvUHJvamVjdFsnbnVtVG9kb3MnXSArPSAxO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb1Byb2plY3QpKVxuICAgIGxvYWRUb2RvQm94KHRvZG9UeXBlKVxufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8sIHByb2plY3ROYW1lKSB7XG4gICAgLy9SZW1vdmUgYSB0b2RvIHdoZW4gaXQncyBkZWxldGVkL2NvbXBsZXRlZFxuICAgIC8vIEdldCAndHlwZScgb2YgdG9kb1xuICAgIGNvbnNvbGUubG9nKHRvZG8udHlwZSlcbiAgICBsZXQgdG9kb1Byb2plY3QgPSBKU09OLnBhcnNlKHN0b3JhZ2VbcHJvamVjdE5hbWVdKVxuICAgIGxldCBpbmRleE9mVG9kbyA9IHRvZG9Qcm9qZWN0LnRvZG9zW3RvZG8udHlwZV0uZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gdG9kby5pZCk7IC8vIENoYW5nZWQgdGl0bGUgdG8gaWRcbiAgICB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLnNwbGljZShpbmRleE9mVG9kbywgMSlcbiAgICBzdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9Qcm9qZWN0KSlcbiAgICBsb2FkUGFnZShwcm9qZWN0TmFtZSlcblxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrRmluaXNoZWQodG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBNYXJrIGEgdG9kbyBhcyBmaW5pc2hlZCBvciB1bmZpbmlzaGVkXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSlcbiAgICBsZXQgaW5kZXhPZlRvZG8gPSB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRvZG8uaWQpO1xuICAgIGNvbnNvbGUubG9nKGluZGV4T2ZUb2RvKVxuICAgIGlmKHRvZG8uZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgICAgdG9kby5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgIHRvZG9Qcm9qZWN0LnRvZG9zW3RvZG8udHlwZV1baW5kZXhPZlRvZG9dID0gdG9kb1xuICAgICAgICBcbiAgICB9IGVsc2UgaWYodG9kby5maW5pc2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdG9kby5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgdG9kb1Byb2plY3QudG9kb3NbdG9kby50eXBlXVtpbmRleE9mVG9kb10gPSB0b2RvXG4gICAgfVxuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb1Byb2plY3QpKVxufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSBuZXcgcHJvamVjdCB0byB0b2RvIGxpc3QsIHByb2plY3QgaXMgSlNPTiBvYmplY3QsIHNhbWUgYXMgYWxsVG9kb3NcbiAgICAvLyB0aGF0IGlzIHN0b3JlZCB3aXRoaW4gYWxsVG9kb3NcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgICAnZHVlJzogW10sXG4gICAgICAgICdkYWlseSc6IFtdLFxuICAgICAgICAnd2Vla2x5JzogW10sXG4gICAgICAgICdtb250aGx5JzogW10sXG4gICAgfVxuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgbmV3UHJvamVjdCk7XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIC8vIE9wZW4gdGhlIG1vZGFsIHdoZW4gdGhlIGFwcHJlb3ByaWF0ZSBlbGVtZW50IGlzIGNsaWNrZWQgKGluIHRoaXMgY2FzZSB0aGUgQWRkIHRvZG8gYnV0dG9uKVxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc29sZS5sb2coXCJPcGVuaW5nIG1vZGFsXCIsIG1vZGFsKVxuXG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgLy8gQ2xvc2UgYSBtb2RhbCB3aGVuIHVzZXIgaGl0cyB0aGUgWCBpbiB0aGUgdG9wIG9mIHRoZSBzY3JlZW4gb24gdGhlIG1vZGFsIChvciBjbGlja3Mgb3V0c2lkZSBtb2RhbClcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZXhwb3J0IHsgYWRkUHJvamVjdCwgYWRkVG9kbywgcmVtb3ZlVG9kbywgYWRkTW9kYWwsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgY2hlY2tGaW5pc2hlZCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9