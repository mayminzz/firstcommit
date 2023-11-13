const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(50, 200);
// // bezier 곡선
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.quadraticCurveTo(400, 150, 450, 100);
// ctx.quadraticCurveTo(500, 50, 550, 100);
// ctx.quadraticCurveTo(600, 150, 650, 100);

// 3차 bezier
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezier(90, 120, 310, 10, 310, 100);
ctx.stroke();
