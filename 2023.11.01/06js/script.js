// 이터러블 객체 : Iterable Object
// 객체 안에 담겨있는 아이템을 순서대로 처리할 수 있는 객체
// 이터러블 객체가 되기 위해서는 다음 조건 충족
// 1. for of 반복문을 사용할 수 있어야 한다.
// 2. 전개연산자를 사용할 수 있어야 한다.
// 3. 구조분해할당 가능해야 한다.

// let arr = [1, 2, 3, 4, 5];

// for (let a of arr) {
//   console.log(a);
// }

// let arr = [1, 2, 3, 4, 5];

// 위에서 살펴본 배열 및 문자열로 대표되는 이터러블 객체가 한정적이다보니, 2015년 ES6문법 이후부터 제너레이터 함수를 사용해서 태생이 이터러블 객체가 아니더라도 해당 객체를 이너러블하게 만들 수 있게 되었음

// 일반적인 함수 생성

function fnc() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
fnc();

// 제너레이터 함수 생성
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
let g1 = gen();
console.log(g1);

let g2 = gen();
for (let i of g2) {
  console.log(i);
}
// 배열도 아닌데 generator함수를 썼다는 이유로 배열이 되었다.

