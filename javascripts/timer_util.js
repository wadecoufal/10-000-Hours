import { getColor } from '../assets/colors.js';

class Timer {

  constructor(timerTag) {
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

  resetTimer() {
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

  startTimer() {
    this.timerInterval = setInterval( () => {
      this.incrementTime();
      this.updateTimerDisplay();
    }, 10);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  getTimeUnitsAsInts() {
    return [this.hours, this.minutes, this.seconds];
  }

  updateTimerDisplay() {
    this.timerTag.innerHTML = this.stringifyTime();
  }

  stringifyTime() {
    return [this.hours, this.minutes, this.seconds].map( timeUnit => {
      return this.stringifyTimeUnit(timeUnit);
    }).join(":");
  }

  stringifyTimeUnit(integer) {
    if (integer < 10) {
      return '0' + integer;
    } else {
      return integer.toString();
    }
  }
  
  addSquareToTimeBank(timeBank, color) {
    const square = document.createElement('li');
    square.setAttribute('style', "background-color: " + getColor(color));

    if (timeBank === "seconds") {
      this.secondsBank.appendChild(square);
    } else if (timeBank === "minutes") {
      this.minutesBank.appendChild(square);
    } else if (timeBank === "hours") {
      this.hoursBank.appendChild(square);
    }
  }

  incrementTime() {
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
}

export default Timer;