// import * AS ButtonUtil from './javascripts/button_util.js';
// const ButtonUtil = require('./javascripts/button_util.js');

import { 
  toggleTimeButton,
  submitTime
 } from './javascripts/button_util.js';
import Timer from './javascripts/timer_util.js';
import TimeBank from './javascripts/time_bank.js';

document.addEventListener("DOMContentLoaded", () => {
  const timerButton = document.getElementById("timer-button");
  const submitButton = document.getElementById("submit-button");

  const timerTag = document.getElementById("time");
  const timer = new Timer(timerTag);

  
  const totalTimeTag = document.getElementById("time-total-bank");
  
  // will be populated by localStorage
  const totalTime = "00000:00:00";
  totalTimeTag.innerHTML = totalTime;

  const timeBank = new TimeBank(totalTimeTag);

  timerButton.addEventListener("click", (e) => {
    toggleTimeButton(e, timer);
  });
  submitButton.addEventListener("click", () => submitTime(timer, timeBank));
});