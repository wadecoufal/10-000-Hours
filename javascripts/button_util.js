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

export const submitTime = (e) => {
  // are you sure you want to submit? (alert)
  totalTime.innerHTML = parseInt(totalTime.innerHTML) + time;
}
