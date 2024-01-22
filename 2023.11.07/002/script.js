// function myFunc() {
//   console.log("test");
// }
// myFunc();

// // 화살표 함수 형태
// const myFunc01 = () => {
//   console.log("test");
// };
// myFunc01();

// // 이렇게 나눠쓰는지 이유
// // button.addEventListener("click", () => {
// //   console.log("test");
// // });
// // button.addEventListener("click", myFunc)

// const myFunc02 = (a) => {
//   const result = a + 2;
//   return console.log(result);
// };

// myFunc02(1);

// const calcSum = (a, b, c) => {
//   const result = a + b + c;
//   return console.log(result);
// };
// calcSum(3, 5, 7);

const array = [1, 2, 3, 4, 5];

const calcFunc = (...number) => {
  let result = 0;
  for (let value of number) {
    result += value;
  }
  return console.log(result);
};
calcFunc(...array);


let myPrice = prompt("값을 넣어주세요");

// 참이어야지만 실행문이 실행이 됨
if (myPrice >= 50) {
  alert("myPrice는 50 이상입니다.");
} else if (myPrice >= 10) {
  alert("myPrice는 10이상 50미만 입니다.");
} /*아닌 경우*/ else {
  alert("myPrice는 10미만 입니다.");
}
