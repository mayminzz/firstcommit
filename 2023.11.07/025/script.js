// 월주율(파이 / 3.14) : 원의 둘레와 원지름은 항상 동일한 비율로 움직인다.
// r: 반지름
// 파이: 3.14
// 2파이r: 원둘레
// r : 2파이r = a : 360
// a = 180/파이 (60분법의 각도)
// 자바스크립트 호도법
const character = document.querySelector(".character");

let degree = 0;

let loop = () => {
  const rotation = (degree * Math.PI) / 180;

  // 우리가 바라보고 있는window 화면 정가운데
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation);

  character.style.top = `${targetY}px`;
  character.style.left = `${targetX}px`;

  degree += 1;
  // 재귀함수 자기 함수 안에서 자기가 돌아가고 있음
  requestAnimationFrame(loop);
};
loop();
