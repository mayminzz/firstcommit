// 호이스팅: hoisting 무언가를 끌어올리다 / 선후출 후선언 문제가 있다..

let count = 0;

myFnc();

function myFnc() {
  count++;
  document.write(`hello ${count} <br>`);
}
myFnc();

// ---> 클래스 함수보다 화살표함수가 최신문법 클래스 함수에서의 문제점이 있으니 상위버전이 나오는 것 화살표 함수쓰는 대신에 호이스팅 못하게 막아. 해서 나온 것
let theFnc = () => {
  count++;
  document.write(`bye ${count}`);
};
theFnc();
