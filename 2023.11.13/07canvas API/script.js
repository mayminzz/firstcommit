const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// arc(x,y,r,시작각도"라디언", 종료각도"라디언", 반시계방향으로 = 기본)

// 타원을 만드는 첫번째 방법
ctx.strokeStyle = "orange";
ctx.beginPath();
// 동그랗지 않지만 타원이라던지 원을 만들때 사용하는 메서드
// (X, Y, radiousX(가로의 반지름), radiousY(세로의 반지름), 회전각도,시작각도, 끝나는 각도)
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();

ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
ctx.stroke();

// 타원을 만드는 두번쨰 방법
ctx.strokeStyle = "red";
ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(400, 150, 90, 0, (Math.PI / 180) * 180 * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 150, 30, 0, (Math.PI / 180) * 180 * 2, false);
ctx.stroke();
ctx.closePath();
