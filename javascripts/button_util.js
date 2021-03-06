export const toggleTimeButton = (e, timer) => {
  const text = e.target.innerHTML;

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
}

export const submitTime = (timer, timeBank) => {
  // are you sure you want to submit? (alert)
  const confirmed = confirm("Are you sure you want to finish this session?");

  if (confirmed) {
    // grab current session time
    // add current session time to TimeBank (it will update tag itself)
    // reset current session time 

    // const totalTimeArr = breakTimeIntoIntUnits(totalTimeTag.innerHTML);
    const currentSessionTimeArr = timer.getTimeUnitsAsInts();

    timeBank.updateTime(currentSessionTimeArr);

    timeBank.fill();
    // console.log('totalTimeArr', totalTimeArr);
    // console.log('currentSessionTimeArr', currentSessionTimeArr);

    // const newTotalTimeArr = [];
    // for (let i = 0; i < 3; i++) {
    //   newTotalTimeArr[i] = totalTimeArr[i] + currentSessionTimeArr[i];
    // }
    // console.log(stringifyTotalTime(newTotalTimeArr));
    // totalTimeTag.innerHTML = stringifyTotalTime(newTotalTimeArr);
    timer.resetTimer();
  }
}

const breakTimeIntoIntUnits = (timeString) => {
  const stringArr = timeString.split(":");
  return stringArr.map( timeUnit => parseInt(timeUnit));
}

const stringifyTotalTime = (timeArr) => {
   
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      const timeLength = timeArr[i].toString().length;
      timeArr[i] = (5-timeLength) * '0' + timeArr[i];
    } else {
      if (timeArr[i] < 10) {
        timeArr[i] = '0' + timeArr[i];
      } else {
        timeArr[i] = timeArr[i].toString();
      }
    }
  }

  return timeArr.join(":");
}
