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
}; // const COLORS = {
//   green: {
//     red: ['cc', 'b3', '99', '80', '66', '4d', '33'],
//     green: ['ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff'],
//     blue: ['cc', 'b3', '99', '80', '66', '4d', '33'],
//   },
//   blue: {
//     red: ['33','33','99','80','66','4d','33'],
//     green: ['eb','e0','d6','cc','c2','b8','ad'],
//     blue: ['ff','ff','ff','ff','ff','ff','ff'],
//   },
//   purple: {
//     red: ['e0','d1','c2','b3','a3','94','85'],
//     green: ['cc','b3','99','80','66','4d','33'],
//     blue: ['ff','ff','ff','ff','ff','ff','ff'],
//   },
// }

var randNum = function randNum(n) {
  return Math.floor(Math.random() * n);
}; // export const getColor = color => {
//   return `#${COLORS[color]['red'][randNum(7)]}${COLORS[color]['green'][randNum(7)]}${COLORS[color]['blue'][randNum(7)]}`;
// }


var getColor = function getColor(color) {
  return COLORS[color][randNum(5)];
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
/* harmony import */ var _javascripts_time_bank_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/time_bank.js */ "./javascripts/time_bank.js");
// import * AS ButtonUtil from './javascripts/button_util.js';
// const ButtonUtil = require('./javascripts/button_util.js');



document.addEventListener("DOMContentLoaded", function () {
  var timerButton = document.getElementById("timer-button");
  var submitButton = document.getElementById("submit-button");
  var timerTag = document.getElementById("time");
  var timer = new _javascripts_timer_util_js__WEBPACK_IMPORTED_MODULE_1__["default"](timerTag);
  var totalTimeTag = document.getElementById("time-total-bank"); // will be populated by localStorage
  // const totalTime = "00010:02:37";
  // totalTimeTag.innerHTML = totalTime;
  // const totalTime = localStorage['total-time'] ? localStorage['total-time'] : [0,0,0];

  var totalTime = localStorage['total-time'] ? localStorage['total-time'].split(',').map(function (unit) {
    return parseInt(unit);
  }) : [0, 0, 0];
  var timeBank = new _javascripts_time_bank_js__WEBPACK_IMPORTED_MODULE_2__["default"](totalTime, totalTimeTag);
  timeBank.fill();
  timerButton.addEventListener("click", function (e) {
    Object(_javascripts_button_util_js__WEBPACK_IMPORTED_MODULE_0__["toggleTimeButton"])(e, timer);
  });
  submitButton.addEventListener("click", function () {
    return Object(_javascripts_button_util_js__WEBPACK_IMPORTED_MODULE_0__["submitTime"])(timer, timeBank);
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
var submitTime = function submitTime(timer, timeBank) {
  // are you sure you want to submit? (alert)
  var confirmed = confirm("Are you sure you want to finish this session?");

  if (confirmed) {
    // grab current session time
    // add current session time to TimeBank (it will update tag itself)
    // reset current session time 
    // const totalTimeArr = breakTimeIntoIntUnits(totalTimeTag.innerHTML);
    var currentSessionTimeArr = timer.getTimeUnitsAsInts();
    timeBank.updateTime(currentSessionTimeArr);
    timeBank.fill(); // console.log('totalTimeArr', totalTimeArr);
    // console.log('currentSessionTimeArr', currentSessionTimeArr);
    // const newTotalTimeArr = [];
    // for (let i = 0; i < 3; i++) {
    //   newTotalTimeArr[i] = totalTimeArr[i] + currentSessionTimeArr[i];
    // }
    // console.log(stringifyTotalTime(newTotalTimeArr));
    // totalTimeTag.innerHTML = stringifyTotalTime(newTotalTimeArr);

    timer.resetTimer();
  }
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

/***/ "./javascripts/time_bank.js":
/*!**********************************!*\
  !*** ./javascripts/time_bank.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TimeBank =
/*#__PURE__*/
function () {
  function TimeBank(totalTime, totalTimeTag) {
    _classCallCheck(this, TimeBank);

    // this.seconds = parseInt(totalTimeTag.innerHTML.split(":")[2]);
    // this.minutes = parseInt(totalTimeTag.innerHTML.split(":")[1]);
    // this.hours = parseInt(totalTimeTag.innerHTML.split(":")[0]);
    this.seconds = totalTime[2];
    this.minutes = totalTime[1];
    this.hours = totalTime[0];
    this.totalTimeTag = totalTimeTag;
    this.totalTimeTag.innerHTML = this.stringifyTime();
    this.secondsBank = document.getElementById('total-seconds');
    this.minutesBank = document.getElementById('total-minutes');
    this.hoursBank = document.getElementById('total-hours');
  }

  _createClass(TimeBank, [{
    key: "fill",
    value: function fill() {
      this.fillBank(this.seconds, this.secondsBank);
      this.fillBank(this.minutes, this.minutesBank);
      this.fillBank(this.hours, this.hoursBank);
    }
  }, {
    key: "fillBank",
    value: function fillBank(time, tag) {
      tag.innerHTML = "";

      for (var i = 0; i < time; i++) {
        var li = document.createElement('li');
        li.setAttribute('style', 'background-color: black');
        tag.appendChild(li);
      }
    }
  }, {
    key: "updateTime",
    value: function updateTime(currSessionTime) {
      console.log('curr time', currSessionTime);
      console.log('total seconds: ', this.seconds, 'total minutes', this.minutes, 'total hours: ', this.hours);
      this.seconds += currSessionTime[2];
      this.minutes += currSessionTime[1];
      this.hours += currSessionTime[0];

      if (this.seconds >= 60) {
        this.seconds %= 60;
        this.minutes += 1;
      }

      if (this.minutes >= 60) {
        this.minutes %= 60;
        this.hours += 1;
      }

      this.updateTimeTag();
      localStorage.setItem('total-time', [this.hours, this.minutes, this.seconds]);
    }
  }, {
    key: "updateTimeTag",
    value: function updateTimeTag() {
      this.totalTimeTag.innerHTML = this.stringifyTime();
    }
  }, {
    key: "stringifyTime",
    value: function stringifyTime() {
      var _this = this;

      var time = [this.hours, this.minutes, this.seconds].map(function (timeUnit) {
        return _this.stringifyTimeUnit(timeUnit);
      });
      var addZeroes = 5 - time[0].length;
      var zero = "0";

      for (var i = 1; i < addZeroes; i++) {
        zero += '0';
      }

      console.log('ZERO', zero);
      time[0] = zero + time[0];
      return time.join(":");
    }
  }, {
    key: "stringifyTimeUnit",
    value: function stringifyTimeUnit(integer, hour) {
      if (integer < 10) {
        return '0' + integer;
      } else {
        return integer.toString();
      }
    }
  }]);

  return TimeBank;
}();

/* harmony default export */ __webpack_exports__["default"] = (TimeBank);

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
    this.titleTag = document.getElementById('title');
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
      this.minutes = 0;
      this.hours = 0;
      this.secondsBank.innerHTML = "";
      this.minutesBank.innerHTML = "";
      this.hoursBank.innerHTML = "";
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
      }, 1000);
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
      var stringifiedTime = this.stringifyTime();
      this.timerTag.innerHTML = stringifiedTime;
      this.titleTag.innerHTML = "10,000 Hours " + stringifiedTime;
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