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
    this.pauseTimer();
    this.updateTimerDisplay();
    document.getElementById('timer-button').innerHTML = "Start";
  }

  startTimer() {
    this.timerInterval = setInterval( () => {
      this.incrementTime();
      this.updateTimerDisplay();
    }, 1000);
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

  incrementTime() {
    this.seconds += 1;
    // append second li
    if (this.seconds === 60) {
      // append minute li
      // clear second li
      this.secondsBank.innerHTML = "";

      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60) {
        // append hour li
        // clear minute li
        this.minutesBank.innerHTML = "";

        this.minutes = 0;
        this.hours += 1;
      }
    }
  }
}

export default Timer;