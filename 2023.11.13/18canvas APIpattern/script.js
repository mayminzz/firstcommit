const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 패턴만들기
// let img = new Image();
// img.onload = () => {
//   let pattern = ctx.createPattern(img, 'repeat');
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 600, 400);
// };

// img.src = './img/pattern.png';
// onload();


// const lineCap = ["butt", "round", "square"];
// for (let i = 0; i < lineCap.length; i++) {
//   ctx.strokeStyle = "#222";
//   ctx.lineWidth = 15;
//   // lineCap 라인 끝의 스타일! 아무것도 하지 ㅇ낳을 거냐 둥그런걸 넣을거냐 네모난걸 넣을거냐
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.stroke();
// };

const lineJoin = ["bevel", "miter", "round"];

ctx.strokeStyle = "#222";
for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.stroke();
}
