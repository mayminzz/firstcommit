// 재선언 재할당 둘다 가능
var num = 10;
console.log(num);

var num = 20;
console.log(num);

// 재선언 불가능 재할당 가능
let num01 = 10;
console.log(num01);

let num02 = 20;
console.log(num02);

num01=30;
console.log(num01);


// // 상수 (변하지 않을 값, 고정된 값) 을 선언하고자 할때는 const
const num03 = 10;
console.log(num03);

const num04 = 50;
console.log(num04);

// const x = 20;
// const sum = x + y;
// const y = 10;
// console.log(sum);

// // 변수의 호이스팅 nan: not a number:오류가 아님
var x = 20;
var sum = x + y;
var y = 10;
console.log(sum);


// // 변수의 호이스팅 nan: not a number:오류가 아님
// var x = 20;
// var sum = x + y;
// var y = 20;
// console.log(sum);
