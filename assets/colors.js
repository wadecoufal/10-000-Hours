const COLORS = {
  green: ["#b3ffb3", "#99ff99", "#80ff80", "#66ff66", "#4dff4d"],
  blue: ["#b3e0ff", "#99d6ff", "#80ccff", "#66c2ff", "#4db8ff"],
  purple: ["#e0ccff", "#d1b3ff", "#c299ff", "#b380ff", "#a366ff"]
};

export const getColor = color => {
  const randNum = Math.floor(Math.random() * 5);
  return COLORS[color][randNum];
}