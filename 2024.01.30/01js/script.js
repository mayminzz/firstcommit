// 변수 선언

// 함수 선언
// 1) class 함수 1
function calcSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}`);
}
// 함수 호출
calcSum();

// 2) class 함수 2
const calcSum01 = function () {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum} /익명함수`);
};

// 함수 호출
calcSum01();

// 3) arrow 함수 => 화살표 함수
const calcSum02 = (/*매개변수의 공간*/) => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum} /화살표함수`);
};
calcSum02();

//전역변수
// const num01 = Number(prompt("당신이 좋아하는 숫자를 입력해주세요"));
// const num02 = Number(prompt("당신의 나이를 입력하세요"));

//지역변수
//매개변수(오락실 코인 같은 느낌)
// const sum = (a, b) => {
//   let result = a + b;
//   alert(`두 수의 합은 ${result}`);
//   return result;
// };

// document.write(`두 수의 합은 ${sum(num01, num02)}`);

const multiple = (a, b, c = 8) => {
  return a * b + c;
};

const result = multiple(2, 4, 8);
console.log(result);

