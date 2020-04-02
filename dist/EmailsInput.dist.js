(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmailsInput"] = factory();
	else
		root["EmailsInput"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/emails-input/emails-input.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/emails-input/emails-input.js":
/*!*****************************************************!*\
  !*** ./src/components/emails-input/emails-input.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmailsInput; });\n/* harmony import */ var _emails_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails-input.scss */ \"./src/components/emails-input/emails-input.scss\");\n/* harmony import */ var _emails_input_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emails_input_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar MAIL_INPUT_CLASS = 'emails-input-area-mail-input';\nvar INPUT_LIST_CLASS = 'emails-input-list';\nvar INPUT_AREA_CLASS = 'emails-input-area';\n\nfunction validateEmail(email) {\n  var re = /\\S+@\\S+\\.\\S+/;\n  return re.test(email);\n}\n\nvar EmailsInput =\n/*#__PURE__*/\nfunction () {\n  function EmailsInput(element, options) {\n    _classCallCheck(this, EmailsInput);\n\n    if (!element) {\n      console.warn('Element does not exist for emails input');\n      return;\n    }\n\n    this.element = element;\n    this.options = options;\n    this.mailList = [];\n    this.latestId = 0;\n    this.initHtml();\n    this.initSelectors();\n    this.initListeners();\n  }\n\n  _createClass(EmailsInput, [{\n    key: \"initSelectors\",\n    value: function initSelectors() {\n      this.mailInputElement = this.element.querySelector(\".\".concat(MAIL_INPUT_CLASS));\n      this.listElement = this.element.querySelector(\".\".concat(INPUT_LIST_CLASS));\n      this.inputArea = this.element.querySelector(\".\".concat(INPUT_AREA_CLASS));\n    }\n  }, {\n    key: \"initListeners\",\n    value: function initListeners() {\n      var _this = this;\n\n      this.mailInputElement.addEventListener('keyup', function (event) {\n        return _this.onKeyUp(event);\n      });\n      this.mailInputElement.addEventListener('paste', function (event) {\n        return _this.onPaste(event);\n      });\n      this.mailInputElement.addEventListener('blur', function (event) {\n        return _this.onKeyUpEnter(event);\n      }, true);\n    }\n  }, {\n    key: \"initItemDeleteListener\",\n    value: function initItemDeleteListener(item) {\n      var _this2 = this;\n\n      item.addEventListener('click', function () {\n        return _this2.onItemDeleteClick(item);\n      });\n    }\n  }, {\n    key: \"onItemDeleteClick\",\n    value: function onItemDeleteClick(item) {\n      this.mailList.splice(this.findMailIndex(parseInt(item.dataset.id, 0)), 1);\n\n      if (item.parentNode) {\n        item.parentNode.removeChild(item);\n      }\n    }\n  }, {\n    key: \"initHtml\",\n    value: function initHtml() {\n      this.element.innerHTML = \"\\n      <div class=\\\"emails-input-area\\\">\\n        <div class=\\\"\".concat(INPUT_LIST_CLASS, \"\\\"></div>\\n        <input class=\\\"\").concat(MAIL_INPUT_CLASS, \"\\\" type=\\\"text\\\" placeholder=\\\"add more people\\u2026\\\" />\\n      </div>\\n    \");\n    }\n  }, {\n    key: \"appendNewMailToResult\",\n    value: function appendNewMailToResult(mailData) {\n      var element = document.createElement('div');\n      element.classList.add('emails-input-list-item');\n\n      if (!mailData.isValid) {\n        element.classList.add('emails-input-list-item--fail');\n      }\n\n      element.dataset.id = mailData.id;\n      element.innerText = mailData.text;\n      this.initItemDeleteListener(element);\n      this.listElement.append(element);\n      this.inputArea.scrollTop = this.inputArea.scrollHeight;\n    }\n  }, {\n    key: \"clearInput\",\n    value: function clearInput() {\n      this.mailInputElement.value = '';\n    }\n  }, {\n    key: \"addNewMailToList\",\n    value: function addNewMailToList(newMail) {\n      if (newMail && newMail !== '') {\n        this.latestId = this.latestId + 1;\n        var mailData = {\n          id: this.latestId,\n          text: newMail,\n          isValid: validateEmail(newMail)\n        };\n        this.mailList.push(mailData);\n        this.appendNewMailToResult(mailData);\n\n        if (typeof this.options.onNewMail === 'function') {\n          this.options.onNewMail(mailData);\n        }\n      }\n    }\n  }, {\n    key: \"findMailIndex\",\n    value: function findMailIndex(searchId) {\n      return this.mailList.map(function (mail) {\n        return mail.id;\n      }).indexOf(searchId);\n    }\n  }, {\n    key: \"onKeyUpEnter\",\n    value: function onKeyUpEnter() {\n      this.addNewMailToList(this.mailInputElement.value);\n      this.clearInput();\n    }\n  }, {\n    key: \"onKeyUpComma\",\n    value: function onKeyUpComma() {\n      var newMail = this.mailInputElement.value;\n\n      if (newMail && newMail !== ',') {\n        this.addNewMailToList(newMail.slice(0, newMail.length - 1));\n        this.clearInput();\n      }\n    }\n  }, {\n    key: \"onPaste\",\n    value: function onPaste(event) {\n      var _this3 = this;\n\n      var pastedText = null;\n\n      if (window.clipboardData && typeof window.clipboardData.getData === 'function') {\n        // IE\n        pastedText = window.clipboardData.getData('Text');\n      } else if (event.clipboardData && typeof event.clipboardData.getData === 'function') {\n        pastedText = event.clipboardData.getData('text/plain');\n      }\n\n      if (pastedText) {\n        pastedText.split(',').forEach(function (newMail) {\n          return _this3.addNewMailToList(newMail.trim());\n        });\n        this.clearInput();\n      }\n\n      event.preventDefault();\n    }\n  }, {\n    key: \"onKeyUp\",\n    value: function onKeyUp(event) {\n      switch (event.keyCode) {\n        case 13:\n          this.onKeyUpEnter();\n          break;\n\n        case 188:\n          this.onKeyUpComma();\n          break;\n\n        default:\n          break;\n      }\n    }\n  }, {\n    key: \"getValidMailCount\",\n    value: function getValidMailCount() {\n      return this.mailList.filter(function (mail) {\n        return mail.isValid;\n      }).length;\n    }\n  }, {\n    key: \"getInvalidMailCount\",\n    value: function getInvalidMailCount() {\n      return this.mailList.filter(function (mail) {\n        return !mail.isValid;\n      }).length;\n    }\n  }, {\n    key: \"getAllMails\",\n    value: function getAllMails() {\n      return this.mailList.map(function (mail) {\n        return mail.text;\n      });\n    }\n  }, {\n    key: \"addNewMails\",\n    value: function addNewMails(newList) {\n      var _this4 = this;\n\n      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n      if (reset) {\n        this.mailList = [];\n        this.listElement.innerHTML = '';\n      }\n\n      newList.forEach(function (newMail) {\n        return _this4.addNewMailToList(newMail);\n      });\n    }\n  }]);\n\n  return EmailsInput;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/emails-input/emails-input.js?");

/***/ }),

/***/ "./src/components/emails-input/emails-input.scss":
/*!*******************************************************!*\
  !*** ./src/components/emails-input/emails-input.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/emails-input/emails-input.scss?");

/***/ })

/******/ })["default"];
});