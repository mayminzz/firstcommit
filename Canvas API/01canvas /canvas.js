const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.closePath(); //선을 닫기 끝내기
