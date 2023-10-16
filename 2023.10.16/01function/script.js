// function 함수명(매개변수 (*선택적) =>인수 인자값) {
//   함수 실행문
// }

// 매개 변수가 존재하지 않는 함수
/* 변수명이나 함수 => 카멜표기법(ex.calcSum / userNum), 스네이크 표기법(ex. calc_sum() */
// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);
// }
// calcSum();

// 함수를 선언한 다음에는 함수를 호출해야만 한다. 그래야만 실행이 된다.

// 매개 변수가 존재하는 함수
// function sum(a, b) {
//   let result = a + b;
//   alert(`두 수의 합 : ${result}`);
// }
// sum(10, 13);


// 미션
// 매개변수와 인수를 사용해서 1부터 인자값까지의 값을 더하는 함수를 선언하고 실핼
// function calcSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${num}까지 더하면 ${sum}입니다.`);
// }
// calcSum(10);

// let num = parseInt(prompt("몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//     // 대입연산자로 i를 더해준다. 값을 sum에 담아놓겠다
//   }
//   return sum;
//   // 함수가 변수로 반환하기 위해서 리턴문을 써줌.
// }
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);
// // n은 참조변수
// //


// 미션
// 사용자로부터 2개의 값을 받아서 곱한 결과값을 콘솔창으로 출력해주는 함수를 선언 및 실행

let num1 = parseInt(prompt("곱할 첫번째 숫자를 입력해주세요."));
let num2 = parseInt(prompt("곱할 두번째 숫자를 입력해주세요."));

function multiple(a, b) {
  return a * b;
}

let result = multiple(num1, num2);
console.log(`두 수의 곱은 ${result}입니다.`);

// console.log(`두 수의 곱은 ${rmultiple(num1, num2)}입니다.`);
// function multiple(a, b = 5, c = 10) {
//   return a * b + c;
// }
// console.log(multiple(2, 4, 8));
