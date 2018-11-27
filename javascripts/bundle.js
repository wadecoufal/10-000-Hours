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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hours.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/colors.js":
/*!**************************!*\
  !*** ./assets/colors.js ***!
  \**************************/
/*! exports provided: getColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
var COLORS = {
  green: ["#b3ffb3", "#99ff99", "#80ff80", "#66ff66", "#4dff4d"],
  blue: ["#b3e0ff", "#99d6ff", "#80ccff", "#66c2ff", "#4db8ff"],
  purple: ["#e0ccff", "#d1b3ff", "#c299ff", "#b380ff", "#a366ff"]
};
var getColor = function getColor(color) {
  var randNum = Math.floor(Math.random() * 5);
  return COLORS[color][randNum];
};

/***/ }),

/***/ "./hours.js":
/*!******************!*\
  !*** ./hours.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascripts_button_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascripts/button_util.js */ "./javascripts/button_util.js");
/* harmony import */ var _javascripts_timer_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/timer_util.js */ "./javascripts/timer_util.js");
// import * AS ButtonUtil from './javascripts/button_util.js';
// const ButtonUtil = require('./javascripts/button_util.js');


document.addEventListener("DOMContentLoaded", function () {
  var timerButton = document.getElementById("timer-button");
  var submitButton = document.getElementById("submit-button");
  var timerTag = document.getElementById("time");
  var timer = new _javascripts_timer_util_js__WEBPACK_IMPORTED_MODULE_1__["default"](timerTag);
  var totalTimeTag = document.getElementById("time-total-bank"); // will be populated by localStorage

  var totalTime = "00000:00:00";
  totalTimeTag.innerHTML = totalTime;
  timerButton.addEventListener("click", function (e) {
    Object(_javascripts_button_util_js__WEBPACK_IMPORTED_MODULE_0__["toggleTimeButton"])(e, timer);
  });
  submitButton.addEventListener("click", function () {
    return Object(_javascripts_button_util_js__WEBPACK_IMPORTED_MODULE_0__["submitTime"])(timer, totalTimeTag);
  });
});

/***/ }),

/***/ "./javascripts/button_util.js":
/*!************************************!*\
  !*** ./javascripts/button_util.js ***!
  \************************************/
/*! exports provided: toggleTimeButton, submitTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTimeButton", function() { return toggleTimeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitTime", function() { return submitTime; });
var toggleTimeButton = function toggleTimeButton(e, timer) {
  var text = e.target.innerHTML;

  if (text === "Start") {
    e.target.innerHTML = "Pause";
    timer.startTimer();
  } else if (text === "Pause") {
    e.target.innerHTML = "Resume";
    timer.pauseTimer();
  } else if (text === "Resume") {
    e.target.innerHTML = "Pause";
    timer.startTimer();
  }

  console.log(e);
};
var submitTime = function submitTime(timer, totalTimeTag) {
  // are you sure you want to submit? (alert)
  alert("Are you sure you want to finish this session?");
  var totalTimeArr = breakTimeIntoIntUnits(totalTimeTag.innerHTML);
  var currentSessionTimeArr = timer.getTimeUnitsAsInts();
  console.log('totalTimeArr', totalTimeArr);
  console.log('currentSessionTimeArr', currentSessionTimeArr);
  var newTotalTimeArr = [];

  for (var i = 0; i < 3; i++) {
    newTotalTimeArr[i] = totalTimeArr[i] + currentSessionTimeArr[i];
  }

  console.log(stringifyTotalTime(newTotalTimeArr));
  totalTimeTag.innerHTML = stringifyTotalTime(newTotalTimeArr);
  timer.resetTimer();
};

var breakTimeIntoIntUnits = function breakTimeIntoIntUnits(timeString) {
  var stringArr = timeString.split(":");
  return stringArr.map(function (timeUnit) {
    return parseInt(timeUnit);
  });
};

var stringifyTotalTime = function stringifyTotalTime(timeArr) {
  for (var i = 0; i < 3; i++) {
    if (i === 0) {
      var timeLength = timeArr[i].toString().length;
      timeArr[i] = (5 - timeLength) * '0' + timeArr[i];
    } else {
      if (timeArr[i] < 10) {
        timeArr[i] = '0' + timeArr[i];
      } else {
        timeArr[i] = timeArr[i].toString();
      }
    }
  }

  return timeArr.join(":");
};

/***/ }),

/***/ "./javascripts/timer_util.js":
/*!***********************************!*\
  !*** ./javascripts/timer_util.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/colors.js */ "./assets/colors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timer =
/*#__PURE__*/
function () {
  function Timer(timerTag) {
    _classCallCheck(this, Timer);

    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.timerTag = timerTag;
    this.secondsBank = document.getElementById('seconds');
    this.minutesBank = document.getElementById('minutes');
    this.hoursBank = document.getElementById('hours');
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  _createClass(Timer, [{
    key: "resetTimer",
    value: function resetTimer() {
      this.seconds = 0;
      this.minutes = 59;
      this.hours = 0;
      this.pauseTimer();
      this.updateTimerDisplay();
      document.getElementById('timer-button').innerHTML = "Start";
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this = this;

      this.timerInterval = setInterval(function () {
        _this.incrementTime();

        _this.updateTimerDisplay();
      }, 10);
    }
  }, {
    key: "pauseTimer",
    value: function pauseTimer() {
      clearInterval(this.timerInterval);
    }
  }, {
    key: "getTimeUnitsAsInts",
    value: function getTimeUnitsAsInts() {
      return [this.hours, this.minutes, this.seconds];
    }
  }, {
    key: "updateTimerDisplay",
    value: function updateTimerDisplay() {
      this.timerTag.innerHTML = this.stringifyTime();
    }
  }, {
    key: "stringifyTime",
    value: function stringifyTime() {
      var _this2 = this;

      return [this.hours, this.minutes, this.seconds].map(function (timeUnit) {
        return _this2.stringifyTimeUnit(timeUnit);
      }).join(":");
    }
  }, {
    key: "stringifyTimeUnit",
    value: function stringifyTimeUnit(integer) {
      if (integer < 10) {
        return '0' + integer;
      } else {
        return integer.toString();
      }
    }
  }, {
    key: "addSquareToTimeBank",
    value: function addSquareToTimeBank(timeBank, color) {
      var square = document.createElement('li');
      square.setAttribute('style', "background-color: " + Object(_assets_colors_js__WEBPACK_IMPORTED_MODULE_0__["getColor"])(color));
      console.log(Object(_assets_colors_js__WEBPACK_IMPORTED_MODULE_0__["getColor"])(color));

      if (timeBank === "seconds") {
        this.secondsBank.appendChild(square);
      } else if (timeBank === "minutes") {
        this.minutesBank.appendChild(square);
      } else if (timeBank === "hours") {
        this.hoursBank.appendChild(square);
      }
    }
  }, {
    key: "incrementTime",
    value: function incrementTime() {
      this.seconds += 1;
      this.addSquareToTimeBank('seconds', 'green');

      if (this.seconds === 60) {
        this.addSquareToTimeBank('minutes', 'blue');
        this.secondsBank.innerHTML = "";
        this.seconds = 0;
        this.minutes += 1;

        if (this.minutes === 60) {
          this.addSquareToTimeBank('hours', 'purple');
          this.minutesBank.innerHTML = "";
          this.minutes = 0;
          this.hours += 1;
        }
      }
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map