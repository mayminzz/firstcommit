const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "orange",
};
const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(
    circle.x,
    circle.y,
    circle.radius,
    0,
    (Math.PI / 180) * 180 * 2,
    false
  );
  ctx.fillStyle = circle.color;
  ctx.fill();
};

const move = () => {
  // 값을 받자마자 지워지니까 이동을 함과 동시에 기존에 있었던 위치값이 제거되고 생성됨을 반복한다.
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fillRect(0, 0, canvas.width,canvas.height);
  drawCircle();
  circle.x += circle.dx;
  // 원이 화면밖으로 나갔을 경우
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }
  circle.y += circle.dy;
  // 원이 화면밖으로 나갔을 경우 반대 - 값을 준다
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = -circle.dy;
  }

  // 재귀함수 requestAnimationFrame(move) 자기 스스로를 반복한다
  requestAnimationFrame(move);
};
move();
