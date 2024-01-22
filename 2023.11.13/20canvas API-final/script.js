const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

canvas.width = window.innerWidth;
// 툴바의 높이값을 제외한 곳부터 그림을 그릴 수 있다.
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffestX = canvas.offsetLeft;
const canvasOffestY = canvas.offsetTop;

const ctx = canvas.getContext("2d");
let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") { 
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // 찍혀지는 그 순간 좌표값
  startX = e.clientX;
  startY = e.clientY;
});
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffestY);
  ctx.stroke();
});
canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.beginPath();
});
toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
