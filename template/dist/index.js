(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Scanner.js":
/*!************************!*\
  !*** ./src/Scanner.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scanner; });\nclass Scanner{\n    constructor(templateStr){\n        // console.log('this is Scanner')\n        // console.log(templateStr)\n        this.templateStr = templateStr\n        // I bug a { { name } }, I { { mood } } !\n\n        // 指针\n        this.pos = 0\n\n        // 尾部\n        this.tail = templateStr\n\n        \n\n    }\n    // 路过指定符号\n    scan(tag){\n        if (this.tail.indexOf(tag) === 0){\n            this.pos += tag.length\n        }\n    }\n\n    // 扫描内容直到指定符号  取出扫描的内容\n    scanUntil(tag){\n        const point = this.pos\n        while (!this.eos() && this.tail.indexOf(tag) !== 0){\n            this.pos ++\n            this.tail = this.templateStr.substring(this.pos)\n        }\n        \n        return this.templateStr.substring(point,this.pos)\n\n    }\n\n    // end of string\n\n    eos(){\n        return this.pos === this.templateStr.length\n    }\n}\n\n//# sourceURL=webpack:///./src/Scanner.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toTokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toTokens */ \"./src/toTokens.js\");\n/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate.js\");\n\n\n\n\nwindow.ShareTemplate = {\n    render(templateStr,data){\n        // *** 模板编译成tokens ***\n        \n        const tokens = Object(_toTokens__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(templateStr)\n        // console.log(tokens)\n\n        // *** 模板编译成tokens转换成dom字符串 ***\n\n        const domString = Object(_renderTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens,data)\n        // console.log(domString)\n\n\n        return domString\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lookup.js":
/*!***********************!*\
  !*** ./src/lookup.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lookup; });\nfunction lookup(data,keyName){\n\n    if(keyName.indexOf('.') !==-1 && keyName !== '.'){\n\n        return keyName.split('.').reduce((pre, cur) => pre[cur], data)\n\n    }\n\n    // 没有 .\n\n    return data[keyName]\n\n}\n\n//# sourceURL=webpack:///./src/lookup.js?");

/***/ }),

/***/ "./src/nestTokens.js":
/*!***************************!*\
  !*** ./src/nestTokens.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nestTokens; });\n// 折叠tokens  栈   把#、/中的数据放到第三个参数中\n\n// 0: (2)[\"text\", \"I buy a \"]\n// 1: (2)[\"name\", \"name\"]\n// 2: (2)[\"text\", \", I \"]\n// 3: (2)[\"name\", \"mood\"]\n// 4: (2)[\"text\", \"!↵        <ul>↵            \"]\n// 5: (2)[\"#\", \"list\"]\n// 6: (2)[\"text\", \"↵              <li>↵                \"]\n// 7: (2)[\"#\", \"arr\"]\n// 8: (2)[\"text\", \"↵                  <p>\"]\n// 9: (2)[\"name\", \"content\"]\n// 10: (2)[\"text\", \"</p>↵                \"]\n// 11: (2)[\"/\", \"arr\"]\n// 12: (2)[\"text\", \"↵                ↵              </li>↵            \"]\n// 13: (2)[\"/\", \"list\"]\n// 14: (2)[\"text\", \"↵        </ul>↵        ↵        ↵        \"]      \"]\n\nfunction nestTokens(tokens) {\n    // 结果数组\n    let nestedTokens = []\n\n    // 收集器 引用类型所以指向的是同一个数组   \n    var collector = nestedTokens\n\n    // 栈结构  \n    let sections = []\n\n    for (let i = 0; i < tokens.length; i++) {\n        let token = tokens[i]\n        switch (token[0]) {\n            case '#':\n                // 收集器中放入这个token\n                collector.push(token)\n                //   入栈\n                sections.push(token)\n\n                // collector 指向 当前#中的索引为2的数据\n\n                collector = token[2] = []\n\n                break;\n\n            case '/':\n                sections.pop()\n                \n                // collector 如果栈中有值 指向 最顶栈#中的索引为2的数据  没有栈了 指向全局数组数据\n                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens\n\n                break;\n\n            default:\n                collector.push(token)\n                \n        }\n\n    }\n\n\n\n\n    return nestedTokens\n}\n\n\n\n// if (token[0] === '#') {\n//     token[2] = []\n//     // 压栈  入栈\n//     sections.push(token)\n// } else if (token[0] === '/') {\n//     // 出栈\n//     let section = sections.pop()\n//     // nestedTokens.push(section)\n// } else {\n//     // 栈是空的\n//     if (sections.length === 0) {\n//         nestedTokens.push(token)\n//     } else {\n//         sections[sections.length - 1][2].push(token)\n//     }\n// }\n\n//# sourceURL=webpack:///./src/nestTokens.js?");

/***/ }),

/***/ "./src/renderTemplate.js":
/*!*******************************!*\
  !*** ./src/renderTemplate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTemplate; });\n/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup */ \"./src/lookup.js\");\n\nfunction renderTemplate(tokens,data){\n\n    var resultStr = '';\n    for (let i = 0; i < tokens.length; i++) {\n        let token = tokens[i]\n\n        if (token[0] === 'text') {\n            resultStr += token[1]\n        } else if (token[0] === 'name') {\n            // 防止  a.b.c\n            resultStr += Object(_lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data,token[1])\n        } else if (token[0] === '#') {\n\n            resultStr += parseArray(token, data)\n            \n        }\n    }\n\n    return resultStr\n\n\n}\n\n// 处理数组 递归\nfunction parseArray(token,data){\n\n    var v = Object(_lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, token[1])\n    var resultStr = ''\n\n    // 遍历v  遍历数据  数据有几条遍历几遍模板\n    for (let i = 0; i < v.length; i++) {\n        // 添加一个点属性 解析 .\n\n        resultStr += renderTemplate(token[2],{\n            ...v[i],\n            '.':v[i]\n        })\n    }\n\n\n    return resultStr\n\n}\n\n\n\n//# sourceURL=webpack:///./src/renderTemplate.js?");

/***/ }),

/***/ "./src/toTokens.js":
/*!*************************!*\
  !*** ./src/toTokens.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toTokens; });\n/* harmony import */ var _Scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scanner */ \"./src/Scanner.js\");\n/* harmony import */ var _nestTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nestTokens */ \"./src/nestTokens.js\");\n\n\nfunction toTokens(templateStr){\n    //  1.扫描模板\n    const scanner = new _Scanner__WEBPACK_IMPORTED_MODULE_0__[\"default\"](templateStr)\n    let word;\n    let tokens = []\n    while (!scanner.eos()) {\n        word = scanner.scanUntil(\"{{\")\n        // console.log(word)\n        if (word !== ''){\n            tokens.push(['text', word])\n        }\n        scanner.scan(\"{{\")\n\n\n        word = scanner.scanUntil(\"}}\")\n        if(word !== ''){\n            \n            if (word[0] === '#'){\n                tokens.push(['#', word.substring(1)])\n            }else if (word[0] === '/') {\n                tokens.push(['/', word.substring(1)])\n            }else{\n                tokens.push(['name', word])\n            }\n        }\n       \n        // console.log(word)\n        scanner.scan(\"}}\")\n    }\n\n    // console.log(tokens)\n\n    return Object(_nestTokens__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens)\n\n}\n\n//# sourceURL=webpack:///./src/toTokens.js?");

/***/ })

/******/ });
});