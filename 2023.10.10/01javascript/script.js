// 1
// function random(number) {
//   return Math.floor(Math.random() * number);
// }
// function bgChange() {
//   const rndcol =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   document.body.style.backgroundColor = rndcol;
// }
// bgChange();
// bg호출시켜줘
// floor 소수점 버려라 라는 함수 math 수학개체

// 2
var num = 10;
console.log(num);

var num = 20;
console.log(num);

// 변수를 사용할때는 let
let num01 = 10;
console.log(num01);

let num02 = 20;
console.log(num02);

num01 = 30;
console.log(num01);

// 상수 (변하지 않을 값, 고정된 값) 을 선언하고자 할때는 const
const num03 = 10;
console.log(num03);

// num03 = 50;
// console.log(num03);

// const x = 20;
// const y = 20;
// const sum = x + y;
// console.log(sum);

// 변수의 호이스팅 nan: not a number:오류가 아님
var x = 20;
var sum = x + y;
var y = 20;
console.log(sum);
