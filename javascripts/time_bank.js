class TimeBank {

  constructor(totalTimeTag) {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;

    this.totalTimeTag = totalTimeTag;

    this.secondsBank = document.getElementById('total-seconds');
    this.minutesBank = document.getElementById('total-minutes');
    this.hoursBank = document.getElementById('total-hours');
  }

  updateTime(currSessionTime) {
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
  }

  updateTimeTag() {
    this.totalTimeTag.innerHTML = this.stringifyTime();
  }

  stringifyTime() {
    const time = [this.hours, this.minutes, this.seconds].map( timeUnit => {
      return this.stringifyTimeUnit(timeUnit);
    });
    const addZeroes = 5 - time[0].length;
    let zero = "0";

    for (let i = 1; i < addZeroes; i++) {
      zero += '0';
    }
    console.log('ZERO', zero);

    time[0] = zero + time[0];
    return time.join(":");
  }

  stringifyTimeUnit(integer, hour) {
    if (integer < 10) {
      return '0' + integer;
    } else {
      return integer.toString();
    }
  }

}

export default TimeBank;