const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);

ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 180 * 2, false);
// 좌표점을 이동할 때 또 찍어야할때
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(120, 80, 10, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 10, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(145, 140, 3, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(155, 140, 3, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);
ctx.lineWidth = "3";
ctx.stroke();

ctx.strokeStyle = "crimson";
ctx.beginPath();
ctx.moveTo(80, 130);
ctx.lineTo(90, 150);
ctx.moveTo(90, 130);
ctx.lineTo(100, 150);
ctx.moveTo(100, 130);
ctx.lineTo(110, 150);
// 왼쪽
ctx.moveTo(190, 130);
ctx.lineTo(200, 150);
ctx.moveTo(200, 130);
ctx.lineTo(210, 150);
ctx.moveTo(210, 130);
ctx.lineTo(220, 150);
ctx.lineWidth = "3";
ctx.stroke();
