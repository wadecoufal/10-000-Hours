export const toggleTimeButton = (e) => {
  const text = e.target.innerHTML;

  if (text === "Start") {
    e.target.innerHTML = "Pause";
  } else if (text === "Pause") {
    e.target.innerHTML = "Resume";
  } else if (text === "Resume") {
    e.target.innerHTML = "Pause";
  }
  console.log(e);
}

export const submitTime = (e) => {
  
}
