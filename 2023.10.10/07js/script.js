// symbol() : 함수 / 클래스 객체
// // 자바스크립트의 함수도 결국 객체로 만들어 놓은 일종의 프로토타입

// let id = Symbol();

// const member = {
//   name: "kim",
//   [id]: 12345,
// };

// // 엄격한 자료형
// int name01 = 20;
// char *name = "john";

// // // 느슨한 자료형
// let one = "20";
// let two = 10;
//  // 숫자와 문자를 더하면 자동으로 문자열로 변함 형변환
// let sum = one + two;
// console.log(sum);
// // 문자에서 숫자를 빼면 자동으로 숫자로 변함
// let sum01 = one - two;
// console.log(sum01);

// Number(one);

// let userInput = Number(prompt("아무 숫자나 입력하세요"));
// // 숫자로 변환에 가장 강력한 아이 NUMBER
// let userInput = parseInt(prompt("아무 숫자나 입력하세요"));
// // 정수로 바꿔줌
let userInput = parseFloat(prompt("아무 숫자나 입력하세요"));
// // 형변환 
