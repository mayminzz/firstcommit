// const name = prompt("당신의 이름을 말씀해주세요!");
// const height = prompt("당신의 키를 알려주세요!");
// const weight = prompt("당신의 몸무게를 알려주세요!");

// const normal_w = (height - 100) * 0.9;
// let result = weight >= normal_w - 5 && weight <= normal_w + 5;

// result = result ? " 적정체중입니다👍" : "체중관리해주세요🥲";
// document.write(`${name}님은 ${result}`);

//객체
const newBook = {
  title: "마흔의 읽는 쇼펜하우어",
  author: "강용수",
  publisher: "유노북스",
  launching: "2023-09-07",
  price: 17000,
};

//온점표기법
const detail = newBook.title;
console.log(detail);

//대괄호표기법
const detail02 = newBook["publisher"];
console.log(detail02);

//배열
const arr = [2, 4, 6, 8, 10];
const colors = ["red", "green", "blue"];
const fruite = ["banana", 100, true];

//  배열은 인덱스
const thisValue = colors[0];
console.log(thisValue);

//배열에는 함수와 property가 있다.
const total = colors.length;
console.log(total);
const total02 = arr.length;
console.log(total02);


