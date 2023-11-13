// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellow");
// radGrad.addColorStop(1, "orange");

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, (Math.PI / 180) * 180 * 2, false);
// ctx.fill()

// 그림자가 있는 원

ctx.shadowColor = "#ccc";
// Offse 원본 객체로부터 얼마만큼 떨어져있는지
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
