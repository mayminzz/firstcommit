const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// arc(x,y,r,시작각도"라디언", 종료각도"라디언", 반시계방향으로 = 기본)
ctx.fillStyle = "pink";

ctx.beginPath();
// 반시계방향 true
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
ctx.arc(250, 100, 50, 0, (Math.PI / 180) * 180, false);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.fillStyle = "red";
ctx.moveTo(200, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.stroke(); 
