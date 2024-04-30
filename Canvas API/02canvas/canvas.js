const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const toRadian = (angle) => {
  return (angle * Math.PI) / 180;
};

//0도부터 360도까지
ctx.beginPath();
ctx.arc(300, 200, 50, 0, toRadian(360), false);
ctx.stroke();
ctx.beginPath();
ctx.arc(500, 100, 20, 0, toRadian(360), false);
ctx.stroke();
