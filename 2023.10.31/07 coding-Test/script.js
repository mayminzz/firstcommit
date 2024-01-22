// let num1 = prompt("100이하의 첫번 째 숫자를 입력하세요.");
// let num2 = prompt("100이하의 두번 째 숫자를 입력하세요.");
// let num3 = prompt("100이하의 세번 째 숫자를 입력하세요.");

// let minNum = Math.floor(Math.min(num1, num2, num3));
// console.log(minNum);

// if (num1 !== "" && num2 !== "" && num3 !== "") {
//   minNum = Math.floor(Math.min(num1, num2, num3));
// }

// let a = parseInt(prompt("첫번 째 숫자를 입력하세요."));
// let b = parseInt(prompt("두번 째 숫자를 입력하세요."));
// let c = parseInt(prompt("세번 째 숫자를 입력하세요."));

// let numberTotal = (a, b, c) => {
//   let result;
//   if (a < b) {
//     result = a;
//   } else {
//     result = b;
//   }
//   if (c < result) {
//     result = c;
//   }
//   return result;
// };
// console.log(numberTotal(a, b, c));

let a = parseInt(prompt("첫 번째 숫자"));
let b = parseInt(prompt("두 번째 숫자"));
let c = parseInt(prompt("세 번째 숫자"));

let result = (a, b, c) => {
  let min;
  if( a < b) {
    min = a;
  } else {
    min = b;
  }
  if(c < min) {
    min = c;
  }
  return min;
}
console.log(result(a,b,c));