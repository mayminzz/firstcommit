const num = 10;
console.log(num);

var num1 = 10;
console.log(num1);

// 재선언
var num1 = 20;
console.log(num1);
// 재할당
num1 = 20;
console.log(num1);

// 선언
let num2 = 30;
console.log(num2);

// 재할당
num2 = 40;
console.log(num2);

const number01 = 100;
const number02 = 200;

const sum = number01 + number02;
console.log(sum);

//숫자형
const number03 = 1000;
//문자열
const str01 = "hello";
//논리형
const bollean = true;
//객체
const obj = {
  name: "minju",
  age: 24,
};
//배열
const arr = [1, 2, 3, 4, 5];
// =>   배열을 객체의 변형된 타입이라 배열은 객체라는 큰 카테고리 안에 들어가 있는 것

//함수
const fnc = function () {
  console.log("hello");
};

console.log(typeof number03);
console.log(typeof str01);
console.log(typeof bollean);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fnc);

const name = "홍길동";
const classroom = 201;

console.log(name + "님 " + classroom + "호 강의실로 입장하세요");
console.log(`${name}님 ${classroom}호 강의실로 입장하세요.`);
