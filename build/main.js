require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debug__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__examples__ = __webpack_require__(3);



const debug = __WEBPACK_IMPORTED_MODULE_0_debug___default()('');
debug.enabled = true;

debug('examples %O', __WEBPACK_IMPORTED_MODULE_1__examples__);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sanctuary__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sanctuary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sanctuary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sanctuary_def__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sanctuary_def___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sanctuary_def__);



const wordSample = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["words"])("foo bar baz");
/* harmony export (immutable) */ __webpack_exports__["wordSample"] = wordSample;

const numbers = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["parseInt"])(16)("0xFF");
/* harmony export (immutable) */ __webpack_exports__["numbers"] = numbers;

const numbers1 = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["parseInt"])(10)("0xFF");
/* harmony export (immutable) */ __webpack_exports__["numbers1"] = numbers1;

const numbers2 = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["parseInt"])(10)("1 234");
/* harmony export (immutable) */ __webpack_exports__["numbers2"] = numbers2;

const numbers3 = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["parseInt"])(10)("1234");
/* harmony export (immutable) */ __webpack_exports__["numbers3"] = numbers3;

const headSample = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["head"])([]);
/* harmony export (immutable) */ __webpack_exports__["headSample"] = headSample;

const headSample2 = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["head"])([1, 2, 3]);
/* harmony export (immutable) */ __webpack_exports__["headSample2"] = headSample2;

const nothing = __WEBPACK_IMPORTED_MODULE_0_sanctuary__["Nothing"];
/* harmony export (immutable) */ __webpack_exports__["nothing"] = nothing;

const just = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["Just"])(42);
/* harmony export (immutable) */ __webpack_exports__["just"] = just;

const justNothing = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["Just"])(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["Nothing"]);
/* harmony export (immutable) */ __webpack_exports__["justNothing"] = justNothing;

const mapSubJust = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["map"])(Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["sub"])(1))(Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["Just"])(42));
/* harmony export (immutable) */ __webpack_exports__["mapSubJust"] = mapSubJust;

const mapSubJust2 = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["map"])(Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["sub"])(1))([1, 2, 3]);
/* harmony export (immutable) */ __webpack_exports__["mapSubJust2"] = mapSubJust2;

const mapSubJust3 = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["map"])(Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["sub"])(1))({ x: 1, y: 2, z: 3 });
/* harmony export (immutable) */ __webpack_exports__["mapSubJust3"] = mapSubJust3;

const linesWithWords = (__WEBPACK_IMPORTED_MODULE_0_sanctuary__["lines"], __WEBPACK_IMPORTED_MODULE_0_sanctuary__["map"], __WEBPACK_IMPORTED_MODULE_0_sanctuary__["words"])("foo aa\nbar barrrr\nbaz\n");
/* harmony export (immutable) */ __webpack_exports__["linesWithWords"] = linesWithWords;

// export const const chain = chain(words)(lines)("foo aa\nbar barrrr\nbaz\n")
const xss = [[1, 2, 3], [4, 5, 6]];
const xssample = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["chain"])(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["head"])(Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["head"])(xss));
/* harmony export (immutable) */ __webpack_exports__["xssample"] = xssample;

const xssample2 = (__WEBPACK_IMPORTED_MODULE_0_sanctuary__["head"], __WEBPACK_IMPORTED_MODULE_0_sanctuary__["head"])(xss);
/* harmony export (immutable) */ __webpack_exports__["xssample2"] = xssample2;

// export const const xssCompose = compose(head, chain)(xss)
const json = '[1,2,3,4,5]';
const parse = Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["parseJson"])(Object(__WEBPACK_IMPORTED_MODULE_0_sanctuary__["K"])(true), json);
/* harmony export (immutable) */ __webpack_exports__["parse"] = parse;

// export const cont parse = parseJson(K(true), json).reduce((s,n) => s + n, 0)
const def1 = Object(__WEBPACK_IMPORTED_MODULE_1_sanctuary_def__["test"])([])(Object(__WEBPACK_IMPORTED_MODULE_1_sanctuary_def__["Array"])(__WEBPACK_IMPORTED_MODULE_1_sanctuary_def__["Integer"]))([1.5]);
/* harmony export (immutable) */ __webpack_exports__["def1"] = def1;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("sanctuary");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("sanctuary-def");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map