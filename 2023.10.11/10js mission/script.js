/*
1.사용자로부터 입력한 값을 저장할 변수에 대한 정의
2.소수인지 아닌지 판단할 수 있는 연산 정의
3.해당 연산이 끝났을 때 결과값을 출력할 수 있게 하는 조건문에 대한 정의
*/

// const number = parseInt(prompt("자연수를 입력하세요"));
// let isPrime;
// // 1은 순수 자연수
// if (number === 1) {
//   document.write(`${number}은 소수도, 합성수도 아닙니다.`);
// } else if (number === 2) {
//   isPrime = true;
// }else {
//   for(let i = 2; i < number; i++) {
//     if(number % 1 === 0) {
//       isPrime = false;
//       break;
//     }
//     else {
//       isPrime = true;
//     }
//   }
// }
// if(isPrime) {
//   document.write(`${number}는 소수입니다.`)
// } else {
//   document.write(`${number}는 소수가 아닙니다.`)
// }

const number = parseInt(prompt("자연수를 입력하세요"));
let isPrime;

if(number === 1) {
  document.write(`${number}은 소수도, 합성수도 아닙니다.`);
}else if (number === 2) {
  isPrime = true;
} else {
  // 그래서 i<=가 아니라 i < number
  for(let i = 2; i < number; i++) {
    // 자기 외에 0으로 나눠지면 소수가 아니다.
    if (number % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
}
if(isPrime) {
  document.write(`${number}는 소수입니다.`);
} else {
  document.write(`${number}는 소수 아닙니다.`);
}