// 두변의 합이 세개의 변중 가장 큰 변보다 작으면 삼각형이 될 수 없다.
// 두변의 길이의 합이 큰 변보다 커야한다. 

let a = parseInt(prompt("첫번째 숫자"));
let b = parseInt(prompt("두번째 숫자"));
let c = parseInt(prompt("세번째 숫자"));


let result = (a, b, c) => {
  let max;
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
let triangle = result(a,b,c);

if(a !=="" && b !== "" && c !== "") {
  if(triangle < a + b + c - triangle) {
    alert("삼각형을 만들 수 있습니다.")
  } else {
    alert("삼각형을 만들 수 없습니다.")
  }
} else {
  alert("세개의 숫자를 입력해주세요!")
}


console.log(result(a, b, c));




