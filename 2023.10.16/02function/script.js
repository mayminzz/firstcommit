// 전역변수(Global) & 지역변수 & 블록변수
// 지역  지역변수는 글로벌에서 쓸수 없다.(오류문항)
// function sum(a, b) {
//   let result = a + b;
// }
// console.log(result);

// 전역 hello는 글로벌 변수는 지역변수에서 쓸 수 있다.
// let hi = "hello";
// function greeting() {
//   console.log(hi);
// }
// greeting();

let hi = "hello";
function change() {
  hi = "bye";
}
console.log(hi);
change();
console.log(hi);

// 블록변수(오류문항) 블록 안에서만 쓸 수 있다.밖으로 튀어나와야 쓸수 있다. 
const facter = 5;

function calc() {
  return num * facter;
}
{
  const num = 10;
  let result = calc();
  document.write(`result: ${result}`);
}
// 1
// const facter = 5;
// const num = 10;

// function calc() {
//   return num * facter;
// }
// {
//   let result = calc();
//   document.write(`result: ${result}`);
// }

// 2
// const facter = 5;

// function calc(num) {
//   return num * facter;
// }
// {
//   let result = calc(10);
//   document.write(`result: ${result}`);
// }
