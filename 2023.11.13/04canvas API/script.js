const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ....canvas API 기본적으로 탑재가 되어 있는 도형은 사각형 밖에 없다. 삼각형, 원 => 커스터마이징해야한다.

// // 이제부터 path쓸거다!
// ctx.beginPath();
// // 시작점 정의()
// ctx.moveTo(50, 50);
// // 50으로부터 어디까지 그릴건가
// ctx.lineTo(200, 200);
// // 선을 그어라
// ctx.stroke();

// 나비넥타이
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
// 닫아줘 => 첫번째 점과 이어줌
ctx.closePath();
ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// // 기본적으로 설정하지 않으면 검정색
// // ctx.fill()
// ctx.fillStyle = "rgb(0, 200, 0)";
// ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 100);

