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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
function log(ident, message) {
    let prefix = "";
    for(let i=0; i<ident*2; i++) {
        prefix += " ";
    }

    console.log(prefix + message);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(3);



main();

function main() {
    const root = new __WEBPACK_IMPORTED_MODULE_0__group__["a" /* Group */]("~");

    const friends = new __WEBPACK_IMPORTED_MODULE_0__group__["a" /* Group */]("Friends");
    root.add(friends);

    const udi = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]("Udi", "udi@gmail.com");
    friends.add(udi);

    const family = new __WEBPACK_IMPORTED_MODULE_0__group__["a" /* Group */]("Family");
    root.add(family);

    const roni = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]("Roni", "roni@gmail.com");
    family.add(roni);

    const ori = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]("Ori", "ori@gmail.com");
    root.add(ori);

    root.print();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__(4);



class Group extends __WEBPACK_IMPORTED_MODULE_1__item__["a" /* Item */] {
    constructor(name) {
        super();

        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    print(ident) {
        ident = ident || 0;

        Object(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* log */])(ident, this.id + ": " + this.name);

        for(const item of this.items) {
            item.print(ident+1);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Group;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__(4);



class Contact extends __WEBPACK_IMPORTED_MODULE_1__item__["a" /* Item */] {
    constructor(name, email) {
        super();

        this.name = name;
        this.email = email;
    }

    print(ident) {
        Object(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* log */])(ident, this.id + ": " + this.name + ", " + this.email);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Contact;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let nextId = 0;

class Item {
    constructor() {
        this.id = ++nextId;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Item;



/***/ })
/******/ ]);