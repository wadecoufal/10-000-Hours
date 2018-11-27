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
    this.minutes = 59;
    this.hours = 0;
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

  incrementTime() {
    this.seconds += 1;
    // append second li
    const secondSquare = document.createElement('li');
    this.secondsBank.appendChild(secondSquare);
    if (this.seconds === 60) {
      const minuteSquare = document.createElement('li');
      this.minutesBank.appendChild(minuteSquare);
      this.secondsBank.innerHTML = "";
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60) {
        const hourSquare = document.createElement('li');
        this.hoursBank.appendChild(hourSquare);
        this.minutesBank.innerHTML = "";
        this.minutes = 0;
        this.hours += 1;
      }
    }
  }
}

export default Timer;