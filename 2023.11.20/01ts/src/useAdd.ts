import { NumberToNumberFunc, add } from "./add";

let fn: NumberToNumberFunc = add(1);
let result = fn(2);
console.log(result);
console.log(add(1)(2));

const multiply02 = (a: number) => (b: number) => (c: number) => a * b * c;

// 함수의 결과물을 받아 다음 함수에 실행시키고 또 결과값을 받아서 마지막 함수에 실행시켜 반환값을 받는다.

// JS함수: 프로그래밍 언너 보기 드문 1급 시민
// 함수 매개변수 / 반환값/ 변수에 할당!