// 2개의 숫자를 받고
// 2개의 최대공약수를 구하는 함수를 설계하고 실행
// 4와 12의 최대공약수는 4가된다. 두개의 수 모두 나누어 떨어지는 수중에서 가장 큰 값

const f = parseInt(prompt("숫자 입력해주세요"));
const s = parseInt(prompt("두번째 숫자 입력해주세요"));

// 최대공약수 구하는 기능 구현
function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}
console.log(`${f}와 ${s}의 최대공약수는 ${getGCD(f, s)}입니다.`);

// const getGCD = (num1, num2) => {
//   let gcd = 1;

//   for (let i = 2; i <= Math.min(num1, num2); i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// };
// let gcd = getGCD(num1, num2);
// alert(`${num1}과 ${num2}의 최대공약수는 ${gcd}입니다.`);

// alert(`${num1}과 ${num2}의 최대공약수는 ${getGCD(num1, num2)}입니다.`);
