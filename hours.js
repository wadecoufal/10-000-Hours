// import * AS ButtonUtil from './javascripts/button_util.js';
// const ButtonUtil = require('./javascripts/button_util.js');

import { 
  toggleTimeButton,
  submitTime
 } from './javascripts/button_util.js';

import {
  intro
} from './javascripts/intro.js';

import Timer from './javascripts/timer_util.js';
import TimeBank from './javascripts/time_bank.js';

document.addEventListener("DOMContentLoaded", () => {
  const timerButton = document.getElementById("timer-button");
  const submitButton = document.getElementById("submit-button");
  const timerTag = document.getElementById("time");
  const timer = new Timer(timerTag);
  const totalTimeTag = document.getElementById("time-total-bank");

  // run welcome modal. once finished, display main page
  intro();
  
  // grab total time accrued from localStorage
  const totalTime = localStorage['total-time'] ?
    localStorage['total-time'].split(',').map(unit => parseInt(unit)) : [0,0,0];

  // fill timeBank according to total time accrued
  const timeBank = new TimeBank(totalTime, totalTimeTag);
  timeBank.fill();

  // event listeners for start/stop/pause/finish
  timerButton.addEventListener("click", (e) => {
    toggleTimeButton(e, timer);
  });
  submitButton.addEventListener("click", () => submitTime(timer, timeBank));
});