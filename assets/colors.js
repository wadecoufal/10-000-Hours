const COLORS = {
  green: ["#b3ffb3", "#99ff99", "#80ff80", "#66ff66", "#4dff4d"],
  blue: ["#b3e0ff", "#99d6ff", "#80ccff", "#66c2ff", "#4db8ff"],
  purple: ["#e0ccff", "#d1b3ff", "#c299ff", "#b380ff", "#a366ff"]
};

// const COLORS = {
//   green: {
//     red: ['cc', 'b3', '99', '80', '66', '4d', '33'],
//     green: ['ff', 'ff', 'ff', 'ff', 'ff', 'ff', 'ff'],
//     blue: ['cc', 'b3', '99', '80', '66', '4d', '33'],
//   },
//   blue: {
//     red: ['33','33','99','80','66','4d','33'],
//     green: ['eb','e0','d6','cc','c2','b8','ad'],
//     blue: ['ff','ff','ff','ff','ff','ff','ff'],
//   },
//   purple: {
//     red: ['e0','d1','c2','b3','a3','94','85'],
//     green: ['cc','b3','99','80','66','4d','33'],
//     blue: ['ff','ff','ff','ff','ff','ff','ff'],
//   },
// }

const randNum = n => {
  return Math.floor(Math.random() * n)
}

// export const getColor = color => {
//   return `#${COLORS[color]['red'][randNum(7)]}${COLORS[color]['green'][randNum(7)]}${COLORS[color]['blue'][randNum(7)]}`;
// }

export const getColor = color => {
  return COLORS[color][randNum(5)];
}