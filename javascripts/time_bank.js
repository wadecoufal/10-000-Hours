class TimeBank {

  constructor(totalTime, totalTimeTag) {
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

  fill() {
    this.fillBank(this.seconds, this.secondsBank);
    this.fillBank(this.minutes, this.minutesBank);
    this.fillBank(this.hours, this.hoursBank);
  }

  fillBank(time, tag) {
    tag.innerHTML = "";

    for (let i = 0; i < time; i++) {
      const li = document.createElement('li');
      li.setAttribute('style', 'background-color: black');
      tag.appendChild(li);
    }
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
    localStorage.setItem('total-time', [this.hours, this.minutes, this.seconds]);
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