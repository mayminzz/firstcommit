// let sum = {
//   name:"park",
// }

// 함수명이 없다(익명함수)변수이름에 이름을 할당  변수의 이름이 곧 함수의 이름이 된다.
// let sum = function (a,b) {
//   return a + b;
// };
// console.log(`함수 실행 결과: ${sum(10,20)}`)

// 즉시실행함수
// (function (a, b) {
//   let sum = a + b;
//   console.log(`함수 실행 결과 ${sum}`);
// })(100,200);

// 화살표함수(익명함수의 변형)
// let hi = () => `안녕하세요`;

// console.log(hi());

// let multiple = (a, b) => a * b;
// console.log(`두수를 곱한 결과는 ${multiple(10,20)}`)

// 콜백함수(call back: cb)
// const btn = document.querySelector("button");
// function display() {
//   alert("클릭했습니다.");
// }
// btn.addEventListener("click", display);
