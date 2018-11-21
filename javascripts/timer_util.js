class Timer {

  constructor(timerTag) {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;

    this.timerTag = timerTag;

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
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
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
      }
    }
  }
}

export default Timer;