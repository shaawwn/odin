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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n#sidebar > .btn {\n    margin-bottom: 10px;\n}\n\n.btn-sm {\n    font-size: 18px;\n}\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n.project-select {\n    display:flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.remove-project-btn {\n    background-color: red;\n    color: white;\n}\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.modal-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0px;\n    padding: 0px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: rgb(200,200,200);\n}\n\n:root {\n    --page-height: 100vh;\n    --sidebar-width: 25%;\n}\n\np {\n    margin: 0px;\n}\n\n\n.btn {\n    border: none;\n    border-radius: 10px;\n    font-size: 24px;\n}\n\n\n.btn:hover {\n    background-color: rgb(200,200,200);\n}\n\n\n.btn:active {\n    background-color: rgb(150, 150, 150);\n}\n\n\n.linebreak {\n    width: 100%;\n}\n\n\n.test {\n    color: red;\n    background-color: green;\n}\n\n/* General selectors */\n\n.header {\n    font-size: 48px;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n}\n\n/* Banner */\n\n#banner {\n    display: flex;\n    align-items: center;\n    width: 100vw;\n    height: 100px;\n    border-bottom: 1px solid black;\n    background-color: rgb(90, 90, 90);\n    padding-left: 25px;\n}\n\n\n/* Sidebar */\n\n#sidebar {\n    /* height: 100vh; */\n    height: var(--page-height);\n    width: var(--sidebar-width);\n    border-right: 1px solid black;\n    padding: 10px;\n    background-color: rgb(150,150,150);\n}\n\n#sidebar > .btn {\n    margin-bottom: 10px;\n}\n\n.btn-sm {\n    font-size: 18px;\n}\n.box-item {\n    text-align: right;\n    font-size: 24px;\n    border-radius: 5px;\n    margin: 5px;\n    padding: 3px;\n}\n\n.box-item:hover {\n    background-color: rgb(200,200,200);\n    color: rgb(50,50,50);\n}\n\n.project-select {\n    display:flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.remove-project-btn {\n    background-color: red;\n    color: white;\n}\n/* Todo content */\n\n#box-container {\n    display: flex;\n    justify-content: center;\n    /* flex-direction: column; */\n    width: 100vw;\n    background-color: rgb(230,230,230);\n}\n\n.todo-box {\n    background-color: rgb(230,230,230);\n    width: 75%;\n    height: 100vh;\n    display: none;\n    flex-direction: column;\n    position: relative;\n}\n\n.todo-box > .header {\n    text-align: center;\n    color: rgb(100,100,100);\n    margin-bottom: 20px;\n}\n\n.todo-box > ul {\n    background-color: white;\n    color: black;\n    /* padding: 10px; */\n}\n\n.todo-box > button {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n.todo-container {\n    display: flex;\n    flex-direction: column;\n    /* background-color: green; */\n    padding: 5px;\n}\nul > li {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    margin: 5px;\n}\n\n\n.todo-card {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    color: black;\n    font-size: 24px;\n    border-bottom: 1px solid black;\n    padding: 5px;\n}\n\n.todo-details {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.todo-details > p {\n    font-size: 18px;\n    margin-right:100px;\n}\n\n\n.finished {\n    text-decoration: line-through;\n    color: green;\n}\n\n.remove-btn {\n    background-color: rgb(170, 66, 66);\n    color: white;\n    font-size: 14px;\n}\n\n.todo-card > p {\n    margin-right: 10px;\n}\n.todo-card:hover {\n    background-color: rgb(150,150,150);\n}\n\n.calendar-container{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    /* width: 100%; */\n}\n\n.calendar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 770px;\n    padding-top: 30px;\n    margin: auto;\n}\n\n.cal-header-container {\n    display: flex;\n    justify-content: center;\n    background-color:rgb(75, 75, 75);\n}\n\n.cal-header{\n    text-align: center;\n    background-color: rgb(90, 90, 90);\n    margin: 1px;\n    padding: 10px;\n    width: 100px;\n}\n\n\n.month-header-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    position: relative;\n}\n\n.month-header {\n    color: black;\n    text-align: center;\n    font-size: 48px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.month-nav {\n    background-color: rgb(150,150,150);\n    border-radius: 5px;\n    color: black;\n    width: 50px;\n    height: 25px;\n    position: relative;\n    top: 38px;\n}\n\n.calendar-day {\n    margin: 1px;\n    width: 100px;\n    height: 100px;\n    background-color: rgb(150,150,150);\n    padding: 2px;\n    /* border: 1px solid black; */\n}\n\n\n/* Modals */\n\n.modal {\n    background-color: rgba(0,0,0, 0.7);\n    top: 100px;\n    /* width: calc(100% - var(--sidebar-width)); */\n    width: 80%;\n    height: var(--page-height);\n    display: none;\n    position: absolute;\n}\n\n.modal-header {\n    font-size: 28px;\n}\n\n.checkbox {\n    display: flex;\n}\n\n.modal-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    position: relative;\n    background-color:rgb(200,200,200);\n    color: black;\n    width: 400px;\n    height: 200px;\n    text-align: center;\n    padding: 20px;\n    margin: auto;\n    margin-top: 200px;\n}\n\n.modal-form > p {\n    font-size: 24px;\n}\n\n.modal-form > .btn {\n    width: 50%;\n    margin: auto;\n    margin-top: 10px;\n}\n\n.modal-form > .btn:hover {\n    background-color: rgb(150,150,150);\n}\n\n.modal-form > [type~='text'] {\n    height: 2rem;\n}\n\n.modal-form > textarea {\n\n    height: 75px;\n}\n\n.modal-form-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n    font-size: 30px;\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: rgb(135,135,135);\n    /* position: relative; */\n    position: absolute;\n    /* left: 0px; */\n    right: 50px;\n    align-items: right;\n    box-shadow: 2px 2px rgb(50,50,50);\n}\n\n.modal-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n\n.todo-form {\n    display: flex;\n    flex-direction:column;\n    width: 50%;\n    padding: 25px;\n    background-color: rgb(135,135,135);\n    margin: auto;\n    margin-top: 100px;\n}\n\n.todo-form > p {\n    text-align: center;\n    font-size: 24px;\n    color:rgb(40,40,40);\n    margin-bottom: 5px;\n}\n\n.todo-form > textarea {\n    height: 100px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n}\n\n.todo-form > select{\n    height: 36px;\n    font-size: 24px;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.todo-form > button {\n    width: 50%;\n    margin: auto;\n}\n\n.todo-form > .close-btn {\n    width: 30px;\n    height: 30px;\n    margin-right: 0px;\n    border-radius: 8px;\n    padding: 5px; \n}\n.form-input {\n    margin: 5px;\n}\n\n.todo-form > input {\n    font-size: 24px;\n}\n\n.add-todo-btn {\n    /*  */\n    /* position: absolute; */\n    width: 20%;\n    background-color: rgb(135,135,135);\n    \n}\n.add-todo-btn:hover {\n    background-color: rgb(100,100,100);\n}\n\n.add-todo-btn:active {\n    background-color: rgb(75,75,75);\n}\n\n.close-btn {\n    /* background-color:rgb(230,230,230);\n    box-shadow: 1px 1px;\n    width: 20px;\n    height: 20px;\n    margin-right: 0px; */\n    /* position: absolute; */\n    /* right: 10px; */\n    /* top: 10px; */\n}\n\n.close-btn:hover {\n    background-color: rgb(150,150,150);\n}\n/* Calendar Modal */\n.padding {\n    background-color: rgb(200,200,200);\n}\n\n\n\n@media (max-width: 500px) {\n    \n    #sidebar {\n        display: flex;\n        flex-direction: row;\n        width: 100vw;\n        height: 15%;\n    }\n\n    .header, .nav-header {\n        font-size: 36px;\n        display:none;\n    }\n\n\n}\n\n\n.test-box {\n    width: 1500px;\n    height: 1500px;\n    background-color: green;\n}"],"sourceRoot":""}]);
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

function loadPage(projectName, todoType) {
    // Main function for adding elements to the DOM

    document.body.innerHTML = '';
    // initialize storage if none
    if(storage.length === 0) {
        let generalTodos = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Project('general');
        storage.setItem('general', JSON.stringify(generalTodos))
        // storage.clear()
    }

    let contentDiv = document.createElement('div') // Content div is all elements of the the body after the banner
    let boxContainer = document.createElement('div'); // Added Box container here instead of in add container
    boxContainer.id = 'box-container';
    contentDiv.id = 'content'
    document.body.appendChild(addBanner(projectName))
    document.body.appendChild(contentDiv)
    contentDiv.appendChild(addSidebar())
    contentDiv.appendChild(boxContainer);

    addTodoContainer(projectName, todoType);
    addListeners(projectName);
}


function addBanner(projectName) {
    // Add a header banner for the webpage
    let banner = document.createElement('div')
    let bannerHeader = document.createElement('p');

    banner.id = 'banner';
    bannerHeader.classList.add('header')

    bannerHeader.innerText = `User's Todo List for ${projectName}`;

    banner.appendChild(bannerHeader);

    return banner
}


function addSidebar() {
    // Add the sidebar to the DOM
    console.log("storage in addSidebar()", storage)
    let sidebar = document.createElement('div');
    let addProjectBtn = document.createElement('button');
    let boxes = ['Today', 'Daily', 'Weekly', 'Monthly']
    let linebreak = document.createElement('hr');
    let projectHeader = document.createElement('p');


    sidebar.id = 'sidebar';
    sidebar.classList.add('container');
    addProjectBtn.classList.add('btn');
    linebreak.classList.add('linebreak');
    projectHeader.classList.add('header');
    projectHeader.innerText = 'Projects';
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
    // sidebar.appendChild(projectHeader);
    sidebar.appendChild(addProjectBtn);

    let projects = Object.keys(storage);
    for(let i = 0; i < projects.length; i++) {
        // // Add an optiont to load project into main window
        // let projectDiv = document.createElement('div');
        // let projectSelect = document.createElement('button');
        // let removeProject = document.createElement('button');

        // projectDiv.classList.add('project-select');
        // projectSelect.innerText = projects[i];
        // projectSelect.classList.add('btn');
        // projectSelect.classList.add('btn-sm');
        // removeProject.classList.add('btn');
        // removeProject.classList.add('remove-project-btn');
        // removeProject.innerText = 'X';

        // projectDiv.appendChild(projectSelect);
        // projectDiv.appendChild(removeProject);
        // sidebar.appendChild(projectDiv);

        // projectSelect.addEventListener('click', () => {
        //     loadPage(projects[i], 'today');
        // })
        sidebar.append(addProjectsToSidebar(projects[i]))
    }

    return sidebar;
}

function addProjectsToSidebar(project) {
    let projectDiv = document.createElement('div');
    let projectSelect = document.createElement('button');
    let removeProjectBtn = document.createElement('button');

    projectDiv.classList.add('project-select');
    projectSelect.innerText = project;
    projectSelect.classList.add('btn');
    projectSelect.classList.add('btn-sm');
    removeProjectBtn.classList.add('btn');
    removeProjectBtn.classList.add('remove-project-btn');
    removeProjectBtn.innerText = 'X';

    projectDiv.appendChild(projectSelect);
    projectDiv.appendChild(removeProjectBtn);
    // sidebar.appendChild(projectDiv);

    projectSelect.addEventListener('click', () => {
        loadPage(project, 'today');
    })

    removeProjectBtn.addEventListener('click', () => {
        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(project);
    })
    return projectDiv
}

function addTodoContainer(projectName, todoType) {
    const content = document.querySelector('#content')
    // const boxContainer = document.createElement('div'); // Added boxContainer to loadPage() instead of creating it here
    // boxContainer.id = 'box-container';
    const boxContainer = document.querySelector('#box-container');
    boxContainer.innerHTML = '';

    let boxDiv = document.createElement('div');
    let boxDivHeader = document.createElement('div');
    const addBtn = addTodoBtn(projectName);

    boxDivHeader.classList.add('header');
    boxDiv.classList.add('todo-box')
    boxDiv.setAttribute('name', todoType);
    addBtn.innerText = 'Add Todo';
    console.log("BOX HEADER", boxDivHeader, todoType)
    boxDivHeader.innerText = todoType[0].toUpperCase() + todoType.slice(1) + ' Todos';
    boxDiv.appendChild(boxDivHeader);
    boxDiv.appendChild(addBtn);

    if(todoType === 'monthly') {
        boxDiv.appendChild((0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__.loadCalendar)());
        boxDiv.style.display = 'flex';
        boxContainer.appendChild(boxDiv);
    } else {
        let todos = loadTodos(todoType, projectName);
        boxDiv.appendChild(addTodos(todos, projectName))
        boxDiv.style.display = 'flex';
    }

    boxContainer.appendChild(boxDiv);
    boxContainer.appendChild((0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addModal)());
    content.appendChild(boxContainer);
}


function addTodoContainerx(projectName) {
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
        let newTodo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_1__.Todo (todoType.value, todoName.value, todoDesc.value,todoID)
        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addTodo)(todoType.value, newTodo, projectName)

        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)()
        loadPage(projectName, todoType.value);

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
    const closeBtn = document.createElement('button');
    const submitBtn = document.createElement('button');


    newProjectForm.classList.add('modal-form');
    newProjectHeader.classList.add('header');
    closeBtn.classList.add('btn');
    closeBtn.classList.add('close-btn');
    closeBtn.innerText = 'X'
    submitBtn.classList.add('btn');
    submitBtn.innerText = 'Add Project';


    newProjectHeader.innerText = 'Add New Project';
    newProjectForm.appendChild(closeBtn);
    newProjectForm.appendChild(newProjectHeader);
    newProjectForm.appendChild(projectName);
    newProjectForm.appendChild(projectDescription);
    // newProjectForm.appendChild(closeBtn);
    newProjectForm.appendChild(submitBtn);

    modal.appendChild(newProjectForm);

    closeBtn.addEventListener('click', () => {
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
    })

    submitBtn.addEventListener('click', () => {
        console.log("New project name: ", projectName.value)
        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(projectName.value)
        ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        console.log("PRJECT NAME", projectName.value)
        loadPage(projectName.value, 'today');
    })
    modal.style.display = 'block';
    boxContainer.appendChild(modal);
}


function addListeners(projectName) {
    // Add listeners to DOM elements
    let todoOptions = document.getElementsByClassName('box-item');
    for (let i = 0; i < todoOptions.length;i++) {
        todoOptions[i].addEventListener('click', () => {
            let keyword = todoOptions[i].innerText[0].toLowerCase() + todoOptions[i].innerText.slice(1);
            let todobox = document.getElementsByName(keyword)[0];

            // loadTodoBox(keyword);
            addTodoContainer(projectName, keyword);

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


function askName() {
    //pass
}
// By default, load 'General' todos when visitng the page
loadPage('general', 'today');
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
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
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
    // loadTodoBox(todoType, todoType)
}

function removeTodo(todo, projectName) {
    //Remove a todo when it's deleted/completed
    // Get 'type' of todo
    console.log(todo.type)
    let todoProject = JSON.parse(storage[projectName])
    let indexOfTodo = todoProject.todos[todo.type].findIndex(e => e.id === todo.id); // Changed title to id
    todoProject.todos[todo.type].splice(indexOfTodo, 1)
    storage.setItem(projectName, JSON.stringify(todoProject))
    console.log("Removing todo")
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)(projectName, todo.type)

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
    let newProject = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
    storage.setItem(projectName, JSON.stringify(newProject));
}

function removeProject(projectName) {
    if(confirm("Are you sure you want to delete project?")) {
        storage.removeItem(projectName)
        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)('general', 'today');
    } 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFNBQVMsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSw2QkFBNkIsNkJBQTZCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIs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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsc0RBQVU7QUFDbEIsUUFBUSxzREFBVTtBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuZkE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RHVFO0FBQ21DO0FBQzFHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQkFBcUIscURBQVU7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFROztBQUVaOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXBhZ2UtaGVpZ2h0OiAxMDB2aDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyNSU7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcblxcbi5saW5lYnJlYWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnRlc3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogR2VuZXJhbCBzZWxlY3RvcnMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBCYW5uZXIgKi9cXG5cXG4jYmFubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuI3NpZGViYXIgPiAuYnRuIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ0bi1zbSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJveC1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogVG9kbyBjb250ZW50ICovXFxuXFxuI2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbn1cXG5cXG4udG9kby1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWJveCA+IC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kby1ib3ggPiB1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbi50b2RvLWJveCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbnVsID4gbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xcbn1cXG5cXG5cXG4uZmluaXNoZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDY2LCA2Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kby1jYXJkID4gcCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5jYWxlbmRhci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5jYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhbC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDc1LCA3NSwgNzUpO1xcbn1cXG5cXG4uY2FsLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcblxcbi5tb250aC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb250aC1oZWFkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubW9udGgtbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzOHB4O1xcbn1cXG5cXG4uY2FsZW5kYXItZGF5IHtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuXFxuLyogTW9kYWxzICovXFxuXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC43KTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGViYXItd2lkdGgpKTsgKi9cXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWhlaWdodCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiAuYnRuIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IFt0eXBlfj0ndGV4dCddIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IHRleHRhcmVhIHtcXG5cXG4gICAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBsZWZ0OiAwcHg7ICovXFxuICAgIHJpZ2h0OiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiAuY2xvc2UtYnRuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4OyBcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6cmdiKDQwLDQwLDQwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnRvZG8tZm9ybSA+IC5jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7IFxcbn1cXG4uZm9ybS1pbnB1dCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICAvKiAgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBcXG59XFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsMTAwLDEwMCk7XFxufVxcblxcbi5hZGQtdG9kby1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LDc1LDc1KTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDIzMCwyMzAsMjMwKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7ICovXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gICAgLyogcmlnaHQ6IDEwcHg7ICovXFxuICAgIC8qIHRvcDogMTBweDsgKi9cXG59XFxuXFxuLmNsb3NlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcbi8qIENhbGVuZGFyIE1vZGFsICovXFxuLnBhZGRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgXFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciwgLm5hdi1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuXFxufVxcblxcblxcbi50ZXN0LWJveCB7XFxuICAgIHdpZHRoOiAxNTAwcHg7XFxuICAgIGhlaWdodDogMTUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUhBQXFIO0lBQ3JILHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGtDQUFrQztBQUN0Qzs7O0FBR0E7SUFDSSxvQ0FBb0M7QUFDeEM7OztBQUdBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOzs7QUFHQSxZQUFZOztB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QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7Ozs7d0JBSW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLGtDQUFrQztBQUN0Qzs7OztBQUlBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7OztBQUdKOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXBhZ2UtaGVpZ2h0OiAxMDB2aDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyNSU7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG59XFxuXFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcblxcbi5saW5lYnJlYWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLnRlc3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLyogR2VuZXJhbCBzZWxlY3RvcnMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBCYW5uZXIgKi9cXG5cXG4jYmFubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG59XFxuXFxuI3NpZGViYXIgPiAuYnRuIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ0bi1zbSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJveC1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbiAgICBjb2xvcjogcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogVG9kbyBjb250ZW50ICovXFxuXFxuI2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbn1cXG5cXG4udG9kby1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWJveCA+IC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTAwLDEwMCwxMDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kby1ib3ggPiB1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbi50b2RvLWJveCA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbnVsID4gbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xcbn1cXG5cXG5cXG4uZmluaXNoZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDY2LCA2Nik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kby1jYXJkID4gcCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcblxcbi5jYWxlbmRhci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5jYWxlbmRhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNhbC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDc1LCA3NSwgNzUpO1xcbn1cXG5cXG4uY2FsLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIG1hcmdpbjogMXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcblxcbi5tb250aC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb250aC1oZWFkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubW9udGgtbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzOHB4O1xcbn1cXG5cXG4uY2FsZW5kYXItZGF5IHtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwxNTAsMTUwKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuXFxuLyogTW9kYWxzICovXFxuXFxuLm1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC43KTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGViYXItd2lkdGgpKTsgKi9cXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWhlaWdodCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxufVxcblxcbi5tb2RhbC1mb3JtID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiAuYnRuIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IC5idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLDE1MCwxNTApO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IFt0eXBlfj0ndGV4dCddIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IHRleHRhcmVhIHtcXG5cXG4gICAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsMTM1LDEzNSk7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBsZWZ0OiAwcHg7ICovXFxuICAgIHJpZ2h0OiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiKDUwLDUwLDUwKTtcXG59XFxuXFxuLm1vZGFsLWZvcm0gPiAuY2xvc2UtYnRuIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4OyBcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxMzUsMTM1KTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6cmdiKDQwLDQwLDQwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvZG8tZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnRvZG8tZm9ybSA+IC5jbG9zZS1idG4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7IFxcbn1cXG4uZm9ybS1pbnB1dCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udG9kby1mb3JtID4gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICAvKiAgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LDEzNSwxMzUpO1xcbiAgICBcXG59XFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsMTAwLDEwMCk7XFxufVxcblxcbi5hZGQtdG9kby1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LDc1LDc1KTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDIzMCwyMzAsMjMwKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7ICovXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gICAgLyogcmlnaHQ6IDEwcHg7ICovXFxuICAgIC8qIHRvcDogMTBweDsgKi9cXG59XFxuXFxuLmNsb3NlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsMTUwLDE1MCk7XFxufVxcbi8qIENhbGVuZGFyIE1vZGFsICovXFxuLnBhZGRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgXFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciwgLm5hdi1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuXFxufVxcblxcblxcbi50ZXN0LWJveCB7XFxuICAgIHdpZHRoOiAxNTAwcHg7XFxuICAgIGhlaWdodDogMTUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGNvbnNvbGUubG9nKFwiTG9hZGluZyBtb250aGx5IHRvZG8gY2FsZW5kYXIuLi4uXCIpXG5cblxubGV0IHdlZWtkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG5sZXQgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cbmxldCBkdCA9IG5ldyBEYXRlKClcbmxldCBjdXJyZW50ID0gMDtcbmxldCBtb250aFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbW9udGhseScpIC8vIENvbnRhaW5lciBmb3IgdGhlIGNhbGVuZGFyLCB3aGVuIGEgbW9udGggaXMgY2hhbmdlZCwgdGhpcyBnZXRzIHJlc2V0IGFuZCByZXBsYWNlZCB3aXRoIGN1cnJlbnRseSBzZWxlY3RlZCBtb250aFxuXG5mdW5jdGlvbiBsb2FkQ2FsZW5kYXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJNT05USCArIENVUlJFTlRcIiwgZHQuZ2V0TW9udGgoKSwgY3VycmVudClcbiAgICAvLyBsZXQgZGF0ZSA9IGR0LmdldERhdGUoKTtcbiAgICAvLyBsZXQgZGF5ID0gZHQuZ2V0RGF5KClcbiAgICBsZXQgeWVhciA9IGR0LmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBkdC5nZXRNb250aCgpICsgY3VycmVudDtcblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XG4gICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpXG4gICAgY29uc3QgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApXG5cbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZmlyc3REYXlPZk1vbnRoLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tdXMnLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgeWVhcjonbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOidudW1lcmljJyxcbiAgICAgICAgZGF5OidudW1lcmljJyxcbiAgICB9KVxuXG4gICAgY29uc3QgbGFzdERhdGVTdHJpbmcgPSBsYXN0RGF5T2ZNb250aC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgfSlcblxuICAgIGNvbnN0IHBhZGRpbmdEYXlzID0gd2Vla2RheXMuaW5kZXhPZihkYXRlU3RyaW5nLnNwbGl0KCcsICcpWzBdKTtcbiAgICBjb25zdCBuZXh0UGFkZGluZ0RheXMgPSB3ZWVrZGF5cy5sZW5ndGggLSB3ZWVrZGF5cy5pbmRleE9mKGxhc3REYXRlU3RyaW5nLnNwbGl0KCcsICcpWzBdKTtcblxuICAgIC8vIENyZWF0ZSBlbGVtZW50cyBhbmQgc2V0IGF0dHJpYnV0ZXNcbiAgICBjb25zdCBtb250aGx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb250aGx5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm94JylcbiAgICBtb250aGx5RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbW9udGhseURpdi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbW9udGhseScpXG5cbiAgICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbW9udGhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBjYWxlbmRhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXInKVxuICAgIGNhbGVuZGFySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhbC1oZWFkZXItY29udGFpbmVyJyk7XG4gICAgbW9udGhIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9udGgtaGVhZGVyJyk7XG4gICAgbW9udGhIZWFkZXIuaW5uZXJUZXh0ID0gbW9udGhzW21vbnRoXTtcblxuICAgIC8vIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoSGVhZGVyKTtcbiAgICBjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRNb250aEhlYWRlcihtb250aCkpO1xuICAgIGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcblxuICAgIC8vIEFkZCB3ZWVrZGF5IGhlYWRlcnNcbiAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChhZGRXZWVrZGF5SGVhZGVyKCkpXG5cbiAgICAvLyBBZGQgZGF5IHNxdWFyZXMgdG8gY2FsZW5kYXJcbiAgICBhZGREYXlTcXVhcmVzKGNhbGVuZGFyLCBwYWRkaW5nRGF5cywgZGF5c0luTW9udGgsIG5leHRQYWRkaW5nRGF5cylcblxuICAgIG1vbnRobHlEaXYuYXBwZW5kQ2hpbGQoY2FsZW5kYXJDb250YWluZXIpXG4gICAgLy8gcmV0dXJuIG1vbnRobHlEaXZcbiAgICAvLyBjYWxlbmRhckNvbnRhaW5lci5hcHBlbmQoYWRkTW9kYWwoJ21vbnRobHknKSlcbiAgICByZXR1cm4gY2FsZW5kYXJDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gYWRkTW9udGhIZWFkZXIobW9udGgpIHtcbiAgICAvLyBBZGQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgbW9udGggYXQgdGhlIHRvcCBvZiB0aGUgY2FsZW5kYXIsIGFzIHdlbGwgYXMgdGhlIGFiaWxpdHkgdG8gc3dpdGNoIG1vbnRoc1xuXG4gICAgLy8gJ0N1cnJlbnQnIGRlZmF1bHRzIHRvIHRoZSBnaXZlbiBtb250aCBwYXJhbWV0ZXIgKGN1cnJlbnQgbW9udGgpLCBhZGRpbmcvc3VidHJhY3RpbmcgZm9ybSBjdXJyZW50IHdpbGwgc3dpdGNoIG1vbnRoc1xuICAgIC8vIGxldCBjdXJyZW50ID0gMDtcbiAgICBjb25zdCBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vbnRoSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vbnRoLWhlYWRlci1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1vbnRoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtb250aFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21vbnRoLWhlYWRlcicpO1xuICAgIG1vbnRoVGl0bGUuaW5uZXJUZXh0ID0gbW9udGhzW21vbnRoXTtcbiAgICBjb25zdCBwcmV2aW91c01vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV4dE1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBhZGRNb250aE5hdmlnYXRpb24ocHJldmlvdXNNb250aCwgJ3ByZXZpb3VzJyk7XG4gICAgYWRkTW9udGhOYXZpZ2F0aW9uKG5leHRNb250aCwgJ25leHQnKTtcblxuICAgIHByZXZpb3VzTW9udGguY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgcHJldmlvdXNNb250aC5jbGFzc0xpc3QuYWRkKCdtb250aC1uYXYnKVxuICAgIG5leHRNb250aC5jbGFzc0xpc3QuYWRkKCdtb250aC1uYXYnKTtcbiAgICBuZXh0TW9udGguY2xhc3NMaXN0LmFkZCgnYnRuJylcblxuICAgIHByZXZpb3VzTW9udGguaW5uZXJUZXh0ID0gJzwnXG4gICAgbmV4dE1vbnRoLmlubmVyVGV4dCA9ICc+J1xuXG4gICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNNb250aCk7XG4gICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQobW9udGhUaXRsZSk7XG4gICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQobmV4dE1vbnRoKTtcblxuICAgIHJldHVybiBtb250aEhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYWRkV2Vla2RheUhlYWRlcigpIHtcbiAgICAvLyBBZGQgd2Vla2RheSBoZWFkZXJzIHRvIHRoZSBjYWxlbmRhcignTW9uZGF5JywgJ1R1ZXNkYXknLCAnZXRjKVxuICAgIGNvbnN0IHdlZWtkYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrZGF5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhbC1oZWFkZXItY29udGFpbmVyJyk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrZGF5cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGNvbnN0IGRheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FsLWhlYWRlcicpO1xuICAgICAgICBkYXlIZWFkZXIuaW5uZXJUZXh0ID0gd2Vla2RheXNbaV07XG4gICAgICAgIHdlZWtkYXlIZWFkZXIuYXBwZW5kQ2hpbGQoZGF5SGVhZGVyKVxuICAgIH1cbiAgICByZXR1cm4gd2Vla2RheUhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYWRkTW9udGhOYXZpZ2F0aW9uKGJ1dHRvbiwgZGlyZWN0aW9uKSB7XG4gICAgLy8gQWRkIGNsaWNrIGxpc3RlbmVycyB0byBwcmV2aW91cy9uZXh0IG1vbnRoIEJ1dHRvbnMgdG8gc3dpdGNoIG1vbnRocyBpbiB0aGUgY2FsZW5kYXJcbiAgICBsZXQgbW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbW9udGhseScpXG4gICAgbGV0IG1vbnRoQ2FsZW5kYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxlbmRhcicpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBOYXYgbW92ZXMgbGVmdCBvciByaWdodFxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgLT0gMVxuICAgICAgICAgICAgY3VycmVudCA9IGNoZWNrQ3VycmVudChjdXJyZW50KTtcbiAgICAgICAgICAgIG1vbnRoVG9kb1swXS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1vbnRoVG9kb1swXS5hcHBlbmRDaGlsZChsb2FkQ2FsZW5kYXIoKSlcbiAgICAgICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICBjdXJyZW50ICs9IDFcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjaGVja0N1cnJlbnQoY3VycmVudClcbiAgICAgICAgICAgIG1vbnRoVG9kb1swXS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1vbnRoVG9kb1swXS5hcHBlbmRDaGlsZChsb2FkQ2FsZW5kYXIoKSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3VycmVudChjdXJyZW50KSB7XG4gICAgLy8gUmVzZXRzICdjdXJyZW50JyB0byAwIGlmIGdyZWF0ZXIgdGhhbiAxMiwgc2luY2UgbnVtYmVycyBoaWdoZXIgdGhhbiB0aGF0IGFyZSBvdXQgb2YgaW5kZXggZm9yIG1vbnRoc1xuICAgIGlmKGN1cnJlbnQgKyBkdC5nZXRNb250aCgpID4gMTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGN1cnJlbnRcIiwgY3VycmVudCArIGR0LmdldE1vbnRoKCkpXG4gICAgICAgIHJldHVybiAtZHQuZ2V0TW9udGgoKVxuICAgIH0gZWxzZSBpZihkdC5nZXRNb250aCgpICsgY3VycmVudCA8IDApIHtcbiAgICAgICAgLy8gUm9sbCBvdmVyIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gaW5kZXggMTIgZm9yIERlY2VtYmVyLCByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAxMiBhbmQgZHQuZ2V0TW9udGgoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXZpb3VzIHllYXJcIilcbiAgICAgICAgcmV0dXJuIDExIC0gZHQuZ2V0TW9udGgoKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGN1cnJlbnRcIiwgY3VycmVudClcbiAgICByZXR1cm4gY3VycmVudFxuXG59XG5cblxuZnVuY3Rpb24gYWRkRGF5U3F1YXJlcyhjYWxlbmRhciwgcGFkZGluZ0RheXMsIGRheXNJbk1vbnRoLCBuZXh0UGFkZGluZ0RheXMpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFkZGluZ0RheXMgKyBkYXlzSW5Nb250aCArIG5leHRQYWRkaW5nRGF5cyAtIDE7IGkrKykge1xuICAgICAgICBsZXQgY2FsZW5kYXJEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FsZW5kYXJEYXkuY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXItZGF5Jyk7XG5cbiAgICAgICAgaWYgKGkgPCBwYWRkaW5nRGF5cyB8fCBpID49IHBhZGRpbmdEYXlzICsgZGF5c0luTW9udGgpIHtcbiAgICAgICAgICAgIGNhbGVuZGFyRGF5LmNsYXNzTGlzdC5hZGQoJ3BhZGRpbmcnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsZW5kYXJEYXkuaW5uZXJUZXh0ID0gKGkgLSBwYWRkaW5nRGF5cykgKyAxXG4gICAgICAgICAgICBjYWxlbmRhckRheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwoY2FsZW5kYXJEYXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyRGF5KTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gYWRkTW9kYWwodG9kb1R5cGUpIHtcbiAgICAvLyBBZGQgYSBtb2RhbCB0byB0aGUgY2FsZW5kYXIgZm9yIGFkZGluZyBuZXcgVG9kb3MsIHBvdGVudGlhbGx5IG5vdCB1bmlxdWUgdG8gY2FsZW5kYXIsIHNvIG1heWJlIG1vdmUgdG8gYW5vdGhlciBmaWxlIGFuZCBleHBvcnRcbiAgICAvLyA0IHR5cGVzIG9mIHRvZG9zOiBUb2RheShVbmlxdWUpLCBEYWlseSwgV2Vla2x5LCBNb250aGx5LCBhZGp1c3QgdGhlIGZvcm0gYWNjb3JkaW5nbHlcbiAgICBcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJyk7XG5cblxuXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBmb3IgYWRkaW5nIG5ldyBUb2RvcywgYW5kIGFkZCBpdCB0byB0aGUgdG9kbyBmb3JtIGRpdlxuICAgIGlmKHRvZG9UeXBlID09PSAnZGFpbHknKSB7XG4gICAgICAgIHBhc3NcbiAgICB9IGVsc2UgaWYodG9kb1R5cGUgPT09ICd0b2RheScpIHtcbiAgICAgICAgcGFzc1xuICAgIH0gZWxzZSBpZih0b2RvVHlwZSA9PT0gJ3dlZWtseScpIHtcbiAgICAgICAgcGFzc1xuICAgIH0gZWxzZSBpZih0b2RvVHlwZSA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgIC8vIEhlcmUncyB3aGVyZSBJIGFkZCBzdHVmZiBmb3Igbm93XG5cbiAgICAgICAgY29uc3QgbW9udGhEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBtb250aERhdGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIG1vbnRoRGF0ZS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKVxuICAgICAgICAvLyBtb250aERhdGUuaW5uZXJUZXh0ID0gbW9udGhzW2R0LmdldE1vbnRoKCldXG4gICAgICAgIHRvZG8udHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdG9kby5wbGFjZWhvbGRlciA9ICdBZGQgdG9kbydcbiAgICAgICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnQWRkIGEgZGVzY3JpcHRpb24gb2YgdGhlIHRvZG8gaGVyZSdcbiAgICAgICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCBUb2RvJ1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnRuJyk7XG4gICAgICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9ICdYJztcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG1vbnRoRGF0ZSlcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpXG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIH1cblxuICAgIC8vIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgLy8gdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICByZXR1cm4gbW9kYWxcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIC8vIEJ5IGNsaWNraW5nIGEgY2xvc2UgYnV0dG9uIGNsb3NlIGFueSBvcGVuIG1vZGFsXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKGRheSkge1xuICAgIC8vIEFkZCBhbiBldmVudCBsc2l0ZW5lciB0byBvcGVuIHVwIHRoZSBhZGQgdG9kbyBtb2RhbFxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJyk7XG4gICAgbGV0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtaGVhZGVyJylbMF07XG4gICAgbGV0IG1vbnRoRGF0ZSA9IG1vbnRoc1tkdC5nZXRNb250aCgpICsgY3VycmVudF0gKyBcIiBcIiArIGRheS5pbm5lclRleHRcblxuICAgIG1vZGFsSGVhZGVyLmlubmVyVGV4dCA9ICcnXG4gICAgbW9kYWxIZWFkZXIuaW5uZXJUZXh0ID0gbW9udGhzW2R0LmdldE1vbnRoKCkgKyBjdXJyZW50XSArIFwiIFwiICsgZGF5LmlubmVyVGV4dFxuICAgIG1vZGFsWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBwcmludERhdGVJbmZvKGRhdGUpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiRGF0ZTogXCIsIGRhdGUuZ2V0RGF0ZSgpKVxuICAgIGNvbnNvbGUubG9nKFwiRGF5OiBcIiwgd2Vla2RheXNbZGF0ZS5nZXREYXkoKV0pXG4gICAgY29uc29sZS5sb2coXCJZZWFyOiBcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgIGNvbnNvbGUubG9nKFwiTW9udGg6IFwiLCBtb250aHNbZGF0ZS5nZXRNb250aCgpXSlcblxuICAgIGxldCBkYXRlUGFyYW1zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiRm9ybWF0ZWQgZGF0ZSBzdHJpbmdcIiwgZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgZGF0ZVBhcmFtcykpXG5cbiAgICAvLyBDYW4gZ2V0IGRheXMgaW4gbW9udGggYnkgZ2V0dGluZyB0aGUgZGF0ZSBvZiB0aGUgbGFzdCBkYXkgaW4gYSBtb250aC5cbiAgICBsZXQgZGF5c0luTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKVxuICAgIGxldCBmaXJzdERheSA9IG5ldyBEYXRlKGRhdGUuZ2V0WWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldERheSgpXG4gICAgY29uc29sZS5sb2coXCJEYXlzIGluIG1vbnRoOiBcIiwgZGF5c0luTW9udGgsIGZpcnN0RGF5KVxuXG5cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG59KVxuXG5cbi8vIHByaW50RGF0ZUluZm8oZHQpXG5leHBvcnQgeyBsb2FkQ2FsZW5kYXIgfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IHsgdGVzdEpTT04gfSBmcm9tICcuL3Rlc3RzLmpzJztcbmltcG9ydCB7IFRvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvLCBQcm9qZWN0IH0gZnJvbSAnLi90b2RvY2xhc3MuanMnO1xuaW1wb3J0IHsgdGVzdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgYWRkVG9kbywgcmVtb3ZlVG9kbywgYWRkTW9kYWwsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgY2hlY2tGaW5pc2hlZCB9IGZyb20gJy4vdG9kb3MuanMnO1xuaW1wb3J0IHsgbG9hZENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5cblxuXG5jb25zb2xlLmxvZyhcIlNjcmlwdHMgbG9hZGluZy4uLi5cIilcbmNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XG4vLyBjb25zdCBnZW5lcmFsVG9kb3MgPSBuZXcgUHJvamVjdCgnZ2VuZXJhbCcpO1xuLy8gc3RvcmFnZS5zZXRJdGVtKCdnZW5lcmFsJywgSlNPTi5zdHJpbmdpZnkoZ2VuZXJhbFRvZG9zKSlcbi8vIHN0b3JhZ2UuY2xlYXIoKVxuLy8gY29uc29sZS5sb2coc3RvcmFnZSlcblxuZnVuY3Rpb24gbG9hZFBhZ2UocHJvamVjdE5hbWUsIHRvZG9UeXBlKSB7XG4gICAgLy8gTWFpbiBmdW5jdGlvbiBmb3IgYWRkaW5nIGVsZW1lbnRzIHRvIHRoZSBET01cblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gaW5pdGlhbGl6ZSBzdG9yYWdlIGlmIG5vbmVcbiAgICBpZihzdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgZ2VuZXJhbFRvZG9zID0gbmV3IFByb2plY3QoJ2dlbmVyYWwnKTtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKCdnZW5lcmFsJywgSlNPTi5zdHJpbmdpZnkoZ2VuZXJhbFRvZG9zKSlcbiAgICAgICAgLy8gc3RvcmFnZS5jbGVhcigpXG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvLyBDb250ZW50IGRpdiBpcyBhbGwgZWxlbWVudHMgb2YgdGhlIHRoZSBib2R5IGFmdGVyIHRoZSBiYW5uZXJcbiAgICBsZXQgYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIEFkZGVkIEJveCBjb250YWluZXIgaGVyZSBpbnN0ZWFkIG9mIGluIGFkZCBjb250YWluZXJcbiAgICBib3hDb250YWluZXIuaWQgPSAnYm94LWNvbnRhaW5lcic7XG4gICAgY29udGVudERpdi5pZCA9ICdjb250ZW50J1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkQmFubmVyKHByb2plY3ROYW1lKSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhZGRTaWRlYmFyKCkpXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChib3hDb250YWluZXIpO1xuXG4gICAgYWRkVG9kb0NvbnRhaW5lcihwcm9qZWN0TmFtZSwgdG9kb1R5cGUpO1xuICAgIGFkZExpc3RlbmVycyhwcm9qZWN0TmFtZSk7XG59XG5cblxuZnVuY3Rpb24gYWRkQmFubmVyKHByb2plY3ROYW1lKSB7XG4gICAgLy8gQWRkIGEgaGVhZGVyIGJhbm5lciBmb3IgdGhlIHdlYnBhZ2VcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgYmFubmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYmFubmVyLmlkID0gJ2Jhbm5lcic7XG4gICAgYmFubmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBiYW5uZXJIZWFkZXIuaW5uZXJUZXh0ID0gYFVzZXIncyBUb2RvIExpc3QgZm9yICR7cHJvamVjdE5hbWV9YDtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJIZWFkZXIpO1xuXG4gICAgcmV0dXJuIGJhbm5lclxufVxuXG5cbmZ1bmN0aW9uIGFkZFNpZGViYXIoKSB7XG4gICAgLy8gQWRkIHRoZSBzaWRlYmFyIHRvIHRoZSBET01cbiAgICBjb25zb2xlLmxvZyhcInN0b3JhZ2UgaW4gYWRkU2lkZWJhcigpXCIsIHN0b3JhZ2UpXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBib3hlcyA9IFsnVG9kYXknLCAnRGFpbHknLCAnV2Vla2x5JywgJ01vbnRobHknXVxuICAgIGxldCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5cbiAgICBzaWRlYmFyLmlkID0gJ3NpZGViYXInO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBsaW5lYnJlYWsuY2xhc3NMaXN0LmFkZCgnbGluZWJyZWFrJyk7XG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBwcm9qZWN0SGVhZGVyLmlubmVyVGV4dCA9ICdQcm9qZWN0cyc7XG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lclRleHQgPSAnKyBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGROZXdQcm9qZWN0KClcbiAgICB9KVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuYXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbmF2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JveC1pdGVtJyk7XG4gICAgICAgIG5hdkhlYWRlci5pbm5lclRleHQgPSBib3hlc1tpXTtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdkhlYWRlcilcbiAgICB9XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICAgIC8vIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcblxuICAgIGxldCBwcm9qZWN0cyA9IE9iamVjdC5rZXlzKHN0b3JhZ2UpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAvLyBBZGQgYW4gb3B0aW9udCB0byBsb2FkIHByb2plY3QgaW50byBtYWluIHdpbmRvd1xuICAgICAgICAvLyBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBsZXQgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAvLyBsZXQgcmVtb3ZlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIC8vIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWxlY3QnKTtcbiAgICAgICAgLy8gcHJvamVjdFNlbGVjdC5pbm5lclRleHQgPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgLy8gcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgLy8gcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKTtcbiAgICAgICAgLy8gcmVtb3ZlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgLy8gcmVtb3ZlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtcHJvamVjdC1idG4nKTtcbiAgICAgICAgLy8gcmVtb3ZlUHJvamVjdC5pbm5lclRleHQgPSAnWCc7XG5cbiAgICAgICAgLy8gcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICAgICAgLy8gcHJvamVjdERpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0KTtcbiAgICAgICAgLy8gc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICAvLyBwcm9qZWN0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgbG9hZFBhZ2UocHJvamVjdHNbaV0sICd0b2RheScpO1xuICAgICAgICAvLyB9KVxuICAgICAgICBzaWRlYmFyLmFwcGVuZChhZGRQcm9qZWN0c1RvU2lkZWJhcihwcm9qZWN0c1tpXSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzVG9TaWRlYmFyKHByb2plY3QpIHtcbiAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWxlY3QnKTtcbiAgICBwcm9qZWN0U2VsZWN0LmlubmVyVGV4dCA9IHByb2plY3Q7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpO1xuICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtcHJvamVjdC1idG4nKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnRuKTtcbiAgICAvLyBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZFBhZ2UocHJvamVjdCwgJ3RvZGF5Jyk7XG4gICAgfSlcblxuICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgfSlcbiAgICByZXR1cm4gcHJvamVjdERpdlxufVxuXG5mdW5jdGlvbiBhZGRUb2RvQ29udGFpbmVyKHByb2plY3ROYW1lLCB0b2RvVHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgLy8gY29uc3QgYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIEFkZGVkIGJveENvbnRhaW5lciB0byBsb2FkUGFnZSgpIGluc3RlYWQgb2YgY3JlYXRpbmcgaXQgaGVyZVxuICAgIC8vIGJveENvbnRhaW5lci5pZCA9ICdib3gtY29udGFpbmVyJztcbiAgICBjb25zdCBib3hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94LWNvbnRhaW5lcicpO1xuICAgIGJveENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYm94RGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkQnRuID0gYWRkVG9kb0J0bihwcm9qZWN0TmFtZSk7XG5cbiAgICBib3hEaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm94JylcbiAgICBib3hEaXYuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpO1xuICAgIGFkZEJ0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nO1xuICAgIGNvbnNvbGUubG9nKFwiQk9YIEhFQURFUlwiLCBib3hEaXZIZWFkZXIsIHRvZG9UeXBlKVxuICAgIGJveERpdkhlYWRlci5pbm5lclRleHQgPSB0b2RvVHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdG9kb1R5cGUuc2xpY2UoMSkgKyAnIFRvZG9zJztcbiAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYm94RGl2SGVhZGVyKTtcbiAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGlmKHRvZG9UeXBlID09PSAnbW9udGhseScpIHtcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGxvYWRDYWxlbmRhcigpKTtcbiAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGJveENvbnRhaW5lci5hcHBlbmRDaGlsZChib3hEaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b2RvcyA9IGxvYWRUb2Rvcyh0b2RvVHlwZSwgcHJvamVjdE5hbWUpO1xuICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3ModG9kb3MsIHByb2plY3ROYW1lKSlcbiAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGJveERpdik7XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE1vZGFsKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm94Q29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvQ29udGFpbmVyeChwcm9qZWN0TmFtZSkge1xuICAgIC8vIEFkZCBjb250YWluZXJzIGZvciBlYWNoIHRvZG8gY2F0ZWdvcnkgdG8gYmUgZGlzcGxheWVkIGluICdtYWlsYm94JyBzdHlsZVxuICAgIC8vIExvYWQgJ2dlbmVyYWwnIGJ5IGRlZmF1bHRcbiAgICBjb25zdCB0b2RvQm94ZXMgPSBbJ3RvZGF5JywgJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J107XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb25zdCBib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHBhcnNlVG9kb3MgPSBKU09OLnBhcnNlKHN0b3JhZ2VbcHJvamVjdE5hbWVdKVxuXG4gICAgYm94Q29udGFpbmVyLmlkID0gJ2JveC1jb250YWluZXInO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQm94ZXMubGVuZ3RoO2krKykge1xuXG4gICAgICAgIGxldCBib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGJveERpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gYWRkVG9kb0J0bihwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgYm94RGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1ib3gnKTtcbiAgICAgICAgYm94RGl2LnNldEF0dHJpYnV0ZSgnbmFtZScsIHRvZG9Cb3hlc1tpXSlcbiAgICAgICAgYWRkQnRuLmlubmVyVGV4dCA9ICdBZGQgVG9kbyc7XG5cblxuICAgICAgICBib3hEaXZIZWFkZXIuaW5uZXJUZXh0ID0gdG9kb0JveGVzW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyB0b2RvQm94ZXNbaV0uc2xpY2UoMSkgKyAnIFRvZG9zJztcbiAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGJveERpdkhlYWRlcik7XG4gICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgICAgICAvLyBDYWxlbmRhciBmdW5jdGlvbnMgaW4gYSBkaWZmZXJlbnQgd2F5LCBzbyBhZGQgbGF0ZXJcbiAgICAgICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChsb2FkQ2FsZW5kYXIoKSk7XG4gICAgICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGl2KVxuICAgICAgICB9XG4gICAgICAgIGlmKHRvZG9Cb3hlc1tpXSA9PT0gJ2RhaWx5Jykge1xuICAgICAgICAgICAgbGV0IGRhaWx5VG9kb3MgPSBsb2FkVG9kb3MoJ2RhaWx5JywgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgYm94RGl2LmFwcGVuZENoaWxkKGFkZFRvZG9zKGRhaWx5VG9kb3MsIHByb2plY3ROYW1lKSlcbiAgICAgICAgICAgIGJveERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IFxuICAgICAgICBpZih0b2RvQm94ZXNbaV0gPT09ICd3ZWVrbHknKSB7XG4gICAgICAgICAgICBsZXQgd2Vla2x5VG9kb3MgPSBsb2FkVG9kb3MoJ3dlZWtseScsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGJveERpdi5hcHBlbmRDaGlsZChhZGRUb2Rvcyh3ZWVrbHlUb2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgICBpZih0b2RvQm94ZXNbaV0gPT09ICd0b2RheScpIHsgLy8gVGhpcyBqdXN0IHNldHMgdG9kYXkgdG8gZGlzcGxheSBieSBkZWZhdWx0LCBldmVyeXRoaW5nIGVsc2UgaXMgc2V0IHRvICdub25lJ1xuICAgICAgICAgICAgbGV0IHRvZGF5VG9kb3MgPSBsb2FkVG9kb3MoJ3RvZGF5JywgcHJvamVjdE5hbWUpXG4gICAgICAgICAgICBib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb3ModG9kYXlUb2RvcywgcHJvamVjdE5hbWUpKVxuICAgICAgICAgICAgYm94RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cblxuICAgICAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoYm94RGl2KTtcbiAgICB9XG4gICAgYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE1vZGFsKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib3hDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2Rvcyh0b2RvcywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBQYXJzZSB0b2RvcyBhbmQgYWRkIHRvIGNvbnRhaW5lciwgdG9kb3MgaXMgYW4gYXJyYXkgb2YgdG9kb3NcblxuICAgIGlmKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBub1RvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbm9Ub2Rvcy5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgICAgICBub1RvZG9zLmlubmVyVGV4dCA9ICdZb3UgaGF2ZSBubyBUb2RvcyEnXG4gICAgICAgIHJldHVybiBub1RvZG9zXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9hZCBhbmQgYWRkIHRoZSB0b2RvcyBcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRPRE9TXCIsIHRvZG9zW2ldKVxuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGxldCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IHRvZG9Cb29sID0gdG9kb3NbaV0uZmluaXNoZWRcbiAgICAgICAgICAgIGxldCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgaWYodG9kb0Jvb2wgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJylcbiAgICAgICAgICAgIH0gZWxzZSBpZih0b2RvQm9vbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvTmFtZS5pbm5lclRleHQgPSB0b2Rvc1tpXS50aXRsZVxuICAgICAgICAgICAgdG9kb0Rlc2MuaW5uZXJUZXh0ID0gdG9kb3NbaV0uZGVzYztcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5pbm5lclRleHQgPSAnUmVtb3ZlJztcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnRuJyk7XG4gICAgICAgICAgICB0b2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRldGFpbHMnKTtcblxuICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9kbyh0b2Rvc1tpXSwgcHJvamVjdE5hbWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgICAgICAgICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvRGVzYylcbiAgICAgICAgICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpO1xuICAgICAgICAgICAgbmV3VG9kby5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXG4gICAgICAgICAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZCcpO1xuXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgICAgICAgICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYodG9kb0Jvb2wgPT09IGZhbHNlKXtcblxuICAgICAgICAgICAgICAgICAgICBjaGVja0ZpbmlzaGVkKHRvZG9zW2ldLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKVxuICAgICAgICAgICAgICAgICAgICBsb2FkUGFnZShwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodG9kb0Jvb2wgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgICAgICBjaGVja0ZpbmlzaGVkKHRvZG9zW2ldLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKVxuICAgICAgICAgICAgICAgICAgICBsb2FkUGFnZShwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9Db250YWluZXJcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbG9hZFRvZG9zKHRvZG8sIHByb2plY3ROYW1lKSB7XG4gICAgLy8gTG9hZCB0b2RvcyBiYXNlZCBvbiBwcm9qZWN0IG5hbWUsIG9yIGJ5IGFsbCBhcyBkZWZhdWx0XG5cbiAgICBjb25zdCBwcm9qZWN0U3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFN0b3JhZ2UudG9kb3NbdG9kb10ubGVuZ3RoO2krKykge1xuXG4gICAgICAgIHRvZG9MaXN0LnB1c2gocHJvamVjdFN0b3JhZ2UudG9kb3NbdG9kb11baV0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSU5ERVggT0ZcIiwgcHJvamVjdFN0b3JhZ2UudG9kb3NbdG9kb10uaW5kZXhPZihwcm9qZWN0U3RvcmFnZS50b2Rvc1t0b2RvXVtpXSkpXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwibG9hZGluZyB0b2RvcyBmdW5jdGlvblwiLCB0b2RvTGlzdClcblxuICAgIHJldHVybiB0b2RvTGlzdFxufVxuXG5mdW5jdGlvbiBhZGRUb2RvRm9ybShwcm9qZWN0TmFtZSkge1xuICAgIC8vIENyZWF0ZSBhIGZvcm0gYW5kIGFkZCB0byBtb2RhbFxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgdG9kb1R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gYWRkVG9kb0J0bigpXG5cbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgIHRvZG9UeXBlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcblxuICAgIHRvZG9IZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBuZXcgVG9kbyc7XG4gICAgdG9kb05hbWUucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBuYW1lIGZvciB5b3VyIHRvZG8nO1xuICAgIHRvZG9EZXNjLnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgYnJpZWYgZGVzY3JpcHRpb24gb2YgeW91ciB0b2RvJztcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gICAgc3VibWl0QnRuLnZhbHVlID0gJ0FkZCBUb2RvJ1xuXG4gICAgY29uc3QgdG9kb1R5cGVzID0gWyd0b2RheScsICdkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvVHlwZXMubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHRvZG9UeXBlc1tpXVxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdG9kb1R5cGVzW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyB0b2RvVHlwZXNbaV0uc2xpY2UoMSlcbiAgICAgICAgdG9kb1R5cGUuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICB9KVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHN0b3JhZ2VbcHJvamVjdE5hbWVdKS5udW1Ub2RvcylcbiAgICAgICAgbGV0IHRvZG9JRCA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pLm51bVRvZG9zO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklEOiBcIiwgdG9kb0lEKVxuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvICh0b2RvVHlwZS52YWx1ZSwgdG9kb05hbWUudmFsdWUsIHRvZG9EZXNjLnZhbHVlLHRvZG9JRClcbiAgICAgICAgYWRkVG9kbyh0b2RvVHlwZS52YWx1ZSwgbmV3VG9kbywgcHJvamVjdE5hbWUpXG5cbiAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgICAgIGxvYWRQYWdlKHByb2plY3ROYW1lLCB0b2RvVHlwZS52YWx1ZSk7XG5cbiAgICB9KVxuICAgIFxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9UeXBlKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgXG4gICAgcmV0dXJuIHRvZG9Gb3JtXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0J0bihwcm9qZWN0TmFtZSkge1xuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGFuZCBsaXN0ZW5lciBmb3IgYWRkaW5nIHRvZG9zXG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyBVc2UgYSBzcGFuP1xuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJyk7XG4gICAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAvLyB0b2RvQnRuLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRvZG9UeXBlKVxuXG4gICAgdG9kb0J0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nO1xuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpXG4gICAgICAgIG1vZGFsWzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1PREFMXCIsIG1vZGFsKVxuICAgICAgICBsZXQgdG9kb0Zvcm0gPSBhZGRUb2RvRm9ybShwcm9qZWN0TmFtZSk7XG4gICAgICAgIG1vZGFsWzBdLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQnRuO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIC8vIEFkZCB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgYm94Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveC1jb250YWluZXInKTtcblxuICAgIC8vIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mb3JtJyk7XG4gICAgbmV3UHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSAnWCdcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdBZGQgUHJvamVjdCc7XG5cblxuICAgIG5ld1Byb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBOZXcgUHJvamVjdCc7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkZXIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgIC8vIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBwcm9qZWN0IG5hbWU6IFwiLCBwcm9qZWN0TmFtZS52YWx1ZSlcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSlcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBSSkVDVCBOQU1FXCIsIHByb2plY3ROYW1lLnZhbHVlKVxuICAgICAgICBsb2FkUGFnZShwcm9qZWN0TmFtZS52YWx1ZSwgJ3RvZGF5Jyk7XG4gICAgfSlcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVycyhwcm9qZWN0TmFtZSkge1xuICAgIC8vIEFkZCBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG4gICAgbGV0IHRvZG9PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94LWl0ZW0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9PcHRpb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgdG9kb09wdGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQga2V5d29yZCA9IHRvZG9PcHRpb25zW2ldLmlubmVyVGV4dFswXS50b0xvd2VyQ2FzZSgpICsgdG9kb09wdGlvbnNbaV0uaW5uZXJUZXh0LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IHRvZG9ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShrZXl3b3JkKVswXTtcblxuICAgICAgICAgICAgLy8gbG9hZFRvZG9Cb3goa2V5d29yZCk7XG4gICAgICAgICAgICBhZGRUb2RvQ29udGFpbmVyKHByb2plY3ROYW1lLCBrZXl3b3JkKTtcblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkVG9kb0JveCh0b2RvKSB7XG4gICAgLy8gRGlzcGxheSBnaXZlbiB0b2RvYm94XG5cbiAgICBjb25zdCB0b2RheUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0b2RheScpWzBdO1xuICAgIGNvbnN0IGRhaWx5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2RhaWx5JylbMF07XG4gICAgY29uc3Qgd2Vla2x5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3dlZWtseScpWzBdO1xuICAgIGNvbnN0IG1vbnRobHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbW9udGhseScpWzBdO1xuICAgIGlmKHRvZG8gPT09ICd0b2RheScpIHtcbiAgICAgICAgdG9kYXlCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZGFpbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgd2Vla2x5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vbnRobHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYodG9kbyA9PT0gJ2RhaWx5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZih0b2RvID09PSAnd2Vla2x5Jykge1xuICAgICAgICB0b2RheUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkYWlseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB3ZWVrbHlCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgbW9udGhseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBpZiAodG9kbyA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgIHRvZGF5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRhaWx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHdlZWtseUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtb250aGx5Qm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFza05hbWUoKSB7XG4gICAgLy9wYXNzXG59XG4vLyBCeSBkZWZhdWx0LCBsb2FkICdHZW5lcmFsJyB0b2RvcyB3aGVuIHZpc2l0bmcgdGhlIHBhZ2VcbmxvYWRQYWdlKCdnZW5lcmFsJywgJ3RvZGF5Jyk7XG4vLyBhZGRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UsIGFkZExpc3RlbmVycywgbG9hZFRvZG9Cb3gsIGFkZFRvZG9Db250YWluZXIsIGFkZEJhbm5lciwgYWRkU2lkZWJhciB9IiwiLy8gQ2xhc3NlcyBmb3IgdG9kbyBvYmplY3RzXG5jb25zb2xlLmxvZygnbG9hZGluZyB0b2RvIG9iamVjdHMuLi4nKVxuXG5sZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cbmNsYXNzIFRvZG8ge1xuICAgIC8vIFR5cGU6IER1ZSwgRGFpbHksIFdlZWtseSwgTW9udGhseVxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBpZCwgZmluaXNoZWQ9ZmFsc2UpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWRcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgfVxufVxuXG5jbGFzcyB3ZWVrbHlUb2RvIGV4dGVuZHMgVG9kbyB7XG4gICAgLy8gV2Vla2x5IHRvZG9zLCBkYXk6IERheSBvZiB0aGUgd2Vla1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBkYXkpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgdGl0bGUsIGRlc2MpO1xuICAgICAgICB0aGlzLmRheSA9IGRheVxuICAgIH1cbn1cblxuXG5jbGFzcyBtb250aGx5VG9kbyBleHRlbmRzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBkZXNjLCBkYXRlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHRpdGxlLCBkZXNjKTtcbiAgICAgICAgdGhpcy5kYXRlO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSB7XG4gICAgICAgICAgICAndG9kYXknOiBbXSxcbiAgICAgICAgICAgICdkYWlseSc6IFtdLFxuICAgICAgICAgICAgJ3dlZWtseSc6IFtdLFxuICAgICAgICAgICAgJ21vbnRobHknOiBbXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm51bVRvZG9zID0gMCAvLyBudW1Ub2RvIGluY3JlbWVudHMgd2l0aCBlYWNoIG5ldyB0b2RvLCBhbmQgZnVuY3Rpb25zIGFzIGEgdW5pcXVlIElEIGZvciBlYWNoIHRvZG9cbiAgICB9XG5cbn1cblxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0JylcblxuXG4vLyBmdW5jdGlvbiBhZGRUb2RvKCkge1xuXG4vLyB9XG5leHBvcnQge1RvZG8sIHdlZWtseVRvZG8sIG1vbnRobHlUb2RvLCBQcm9qZWN0fSIsImltcG9ydCB7IFRvZG8sIHdlZWtseVRvZG8sIFByb2plY3QsIG1vbnRobHlUb2RvfSBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSwgYWRkTGlzdGVuZXJzLCBsb2FkVG9kb0JveCwgYWRkVG9kb0NvbnRhaW5lciwgYWRkQmFubmVyLCBhZGRTaWRlYmFyIH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBNYW5hZ2UgQWRkaW5nL1VwZGF0aW5nIFRvZG9zIGhlcmVcblxuLy8gU3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxuLy8gY29uc3QgYWxsVG9kb3MgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4vLyAgICAgJ2R1ZSc6IFtdLFxuLy8gICAgICdkYWlseSc6IFtdLFxuLy8gICAgICd3ZWVrbHknOiBbXSxcbi8vICAgICAnbW9udGhseSc6IFtdLFxuLy8gfVxuXG4vLyBzdG9yYWdlLnNldEl0ZW0oJ25ldyBwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlKVxuXG5cblxuXG5mdW5jdGlvbiBhZGRNb2RhbCgpIHtcbiAgICAvLyBDcmVhdGUgYSBtb2RhbCBmb3IgYWRkaW5nIFRvZG9zIHRvIERhaWx5L1dlZWtseVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgfSlcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgLy8gbW9kYWwuc2V0QXR0cmlidXRlKCduYW1lJywgdG9kb1R5cGUpXG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgbW9kYWwuLi5cIilcblxuXG4gICAgLy8gQWRkIGlucHV0IGZvciBjcmVhdGluZyBhIG5ldyBUb2RvXG4gICAgLy8gbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIFRlc3Rpbmcgb25seVxuICAgIC8vIG1vZGFsLmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKCkpXG4gICAgcmV0dXJuIG1vZGFsXG59XG5cblxuZnVuY3Rpb24gYWRkVG9kb0Zvcm0oKSB7XG4gICAgY29uc3QgdG9kb0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9BZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBUbyBiZSBhZGRlZCBsYXRlclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgbGV0IG9wdGlvbnMgPSBbJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J11cblxuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnU3VibWl0IG5ldyBUb2RvJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnQWRkIFRvZG8nXG4gICAgdG9kby5wbGFjZWhvbGRlciA9ICdBZGQgYSBuZXcgdG9kbyc7XG4gICAgdG9kb0Rlc2MucGxhY2Vob2xkZXIgPSAnQnJpZWYgZGVzY3JpcHRpb24gb2YgdG9kbydcblxuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblxuICAgICAgICBsZXQgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICBjaG9pY2UudHlwZSA9ICdjaGVja2JveCc7XG4gXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgbGFiZWwuZm9yID0gY2hvaWNlO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBvcHRpb25zW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBvcHRpb25zW2ldLnNsaWNlKDEpO1xuXG4gICAgICAgIGNob2ljZS52YWx1ZSA9IG9wdGlvbnNbaV1cblxuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgICAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgdG9kb0FkZC5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XG4gICAgfVxuXG4gICAgdG9kb0FkZC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHRvZG9BZGQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGFkZFRvZG8odG9kby52YWx1ZSlcbiAgICB9KVxuICAgIHJldHVybiB0b2RvQWRkO1xufVxuXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKGJ1dHRvbikge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b24pXG4gICAgICAgIGlmKGJ1dHRvbi5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZihidXR0b24uY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmxldCBtb25kYXlUb2RvID0gbmV3IHdlZWtseVRvZG8oJ3dlZWtseScsICdUZXN0JywgJ1RoaXMgaXMgYSBuZXcgdGVzdCcsICdtb25kYXknKTtcblxuZnVuY3Rpb24gYWRkVG9kbyh0b2RvVHlwZSwgdG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSB0b2RvIHRvIGxvY2FsIHN0b3JhZ2VcblxuICAgIGxldCB0b2RvUHJvamVjdCA9IEpTT04ucGFyc2Uoc3RvcmFnZVtwcm9qZWN0TmFtZV0pXG4gICAgXG4gICAgdG9kb1Byb2plY3RbJ3RvZG9zJ11bdG9kb1R5cGVdLnB1c2godG9kbylcbiAgICB0b2RvUHJvamVjdFsnbnVtVG9kb3MnXSArPSAxO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb1Byb2plY3QpKVxuICAgIC8vIGxvYWRUb2RvQm94KHRvZG9UeXBlLCB0b2RvVHlwZSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvLCBwcm9qZWN0TmFtZSkge1xuICAgIC8vUmVtb3ZlIGEgdG9kbyB3aGVuIGl0J3MgZGVsZXRlZC9jb21wbGV0ZWRcbiAgICAvLyBHZXQgJ3R5cGUnIG9mIHRvZG9cbiAgICBjb25zb2xlLmxvZyh0b2RvLnR5cGUpXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSlcbiAgICBsZXQgaW5kZXhPZlRvZG8gPSB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRvZG8uaWQpOyAvLyBDaGFuZ2VkIHRpdGxlIHRvIGlkXG4gICAgdG9kb1Byb2plY3QudG9kb3NbdG9kby50eXBlXS5zcGxpY2UoaW5kZXhPZlRvZG8sIDEpXG4gICAgc3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvUHJvamVjdCkpXG4gICAgY29uc29sZS5sb2coXCJSZW1vdmluZyB0b2RvXCIpXG4gICAgbG9hZFBhZ2UocHJvamVjdE5hbWUsIHRvZG8udHlwZSlcblxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrRmluaXNoZWQodG9kbywgcHJvamVjdE5hbWUpIHtcbiAgICAvLyBNYXJrIGEgdG9kbyBhcyBmaW5pc2hlZCBvciB1bmZpbmlzaGVkXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gSlNPTi5wYXJzZShzdG9yYWdlW3Byb2plY3ROYW1lXSlcbiAgICBsZXQgaW5kZXhPZlRvZG8gPSB0b2RvUHJvamVjdC50b2Rvc1t0b2RvLnR5cGVdLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRvZG8uaWQpO1xuICAgIGNvbnNvbGUubG9nKGluZGV4T2ZUb2RvKVxuICAgIGlmKHRvZG8uZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgICAgdG9kby5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgIHRvZG9Qcm9qZWN0LnRvZG9zW3RvZG8udHlwZV1baW5kZXhPZlRvZG9dID0gdG9kb1xuICAgICAgICBcbiAgICB9IGVsc2UgaWYodG9kby5maW5pc2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdG9kby5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgdG9kb1Byb2plY3QudG9kb3NbdG9kby50eXBlXVtpbmRleE9mVG9kb10gPSB0b2RvXG4gICAgfVxuICAgIHN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb1Byb2plY3QpKVxufVxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAvLyBBZGQgYSBuZXcgcHJvamVjdCB0byB0b2RvIGxpc3QsIHByb2plY3QgaXMgSlNPTiBvYmplY3QsIHNhbWUgYXMgYWxsVG9kb3NcbiAgICAvLyB0aGF0IGlzIHN0b3JlZCB3aXRoaW4gYWxsVG9kb3NcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBzdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHByb2plY3Q/XCIpKSB7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSlcbiAgICAgICAgbG9hZFBhZ2UoJ2dlbmVyYWwnLCAndG9kYXknKTtcbiAgICB9IFxufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgLy8gT3BlbiB0aGUgbW9kYWwgd2hlbiB0aGUgYXBwcmVvcHJpYXRlIGVsZW1lbnQgaXMgY2xpY2tlZCAoaW4gdGhpcyBjYXNlIHRoZSBBZGQgdG9kbyBidXR0b24pXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmcgbW9kYWxcIiwgbW9kYWwpXG5cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAvLyBDbG9zZSBhIG1vZGFsIHdoZW4gdXNlciBoaXRzIHRoZSBYIGluIHRoZSB0b3Agb2YgdGhlIHNjcmVlbiBvbiB0aGUgbW9kYWwgKG9yIGNsaWNrcyBvdXRzaWRlIG1vZGFsKVxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5leHBvcnQgeyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBhZGRUb2RvLCByZW1vdmVUb2RvLCBhZGRNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjaGVja0ZpbmlzaGVkIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=