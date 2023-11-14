const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);
// 저장
ctx.save();
ctx.translate(150, 150);
ctx.fillStyle = "#222";
ctx.fillRect(10, 10, 100, 100);
// translate를 사용하지 않았기 때문에 (150,150)을 기준으로 (50,50) 인 지점에 네모를 만듬
ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 25);
// 다시 처음 표로 돌아가라 save를 써야 좌표값이 저장이 되면서 restore가 가능하다.
ctx.restore();
