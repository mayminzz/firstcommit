// 두변의 합이 세개의 변중 가장 큰 변보다 작으면 삼각형이 될 수 없다.

let a = parseInt(prompt("첫번째 숫자"));
let b = parseInt(prompt("두번째 숫자"));
let c = parseInt(prompt("세번째 숫자"));

let max;

let result = (a, b, c) => {
  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (c > max) {
    max = c;
  }
  return max;
};


console.log(result(a, b, c));


