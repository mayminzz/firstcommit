// 생성기와 동일한 결과값을 만들어 내는 setInterval 함수는 세미코루틴 방식이라고 함!!!
// 세미코루틴 = semi-coroutine
// 반도체 = semiconductor = 전기가 흘렀을 때 전기를 절반만 통과시키는 도체
// 코루틴 = 처음 컴퓨터라는 기계가 탄생되었을 때, 컴퓨터라고 해서 처음부터 동시다발적으로 모든 명령을 실행할 수 없었음

// 비동기 처리를 하기 위한 목적
// js 태생, 동기처리밖에 못하는 싱글스레드 개선하기 위해 세미코루틴 방식 고안
// setInterval 함수 => 결론, 결과값이 제너레이터 함수를 활용한 결과값처럼 동일하게 나옴

const period = 1000;
let count = 0;
console.log("program started...");

const id = setInterval(() => {
  if (count >= 3) {
    clearInterval(id);
    console.log("program finished...");
  } else {
    console.log(++count);
  }
}, period);
