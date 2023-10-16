// /재귀함수 :자기를 여러번 호출하고 싶을 때

let num = 0;
function testFnc() {
  num++;
  document.write(num, "<br/>");
  if (num === 10) return;
  testFnc();
}
testFnc();
// 리턴문 뒤에 반환값이 없다면 조건문을 실행하고  멈춰라 종결을 의미
