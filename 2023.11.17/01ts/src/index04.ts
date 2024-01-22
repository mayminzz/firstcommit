// TS객체 &배열이 난의도가 있는 이유 => ?
// 함수 안에 매개변수의 타입을 각각 정의해야하기 때뭉 + 함수가 반환하는 결과값에 타입도 정의
function add(a: any, b: any) {
  return a + b;
}
console.log(add(1, 2));

// 아래형식의 차입이 불충분하다
// 타입스크립트에서는 리턴문이 없는(반환값을 주지 않는)함수의 결과값에 대한 타입을 따로 정의
function printMe(name: string, age: number): void {
  console.log(`name:${name}, age${age}`);
}
console.log(printMe("park", 23));

// number, string, boolean, undefined, any, void, object
// 꼭 함수의 타입 정의가 위처럼만 가능할까?
// 함수 시그니처의 방식으로도 타입을 정의할 수 있다.

// 전통적인 클래스 함수
function printMe00() {}

// 익명함수
// 함수시그니처
let printMe01: (arg0: string, arg1: number) => void = function (name, age) {
  console.log(`${name}, ${age}`);
};

// 화살표함수
let printMe02 = () => {};

// 함수 타입을 정의할 때
// 1) 직접 매개변수와 반환값에 타입을 정의
// 2) 함수 시그니처라는 함수의 모형과 똑같은 형태를 만들어놓고 익명함수이름에 타입을 정의
// 3) 타입 별칭

type stringNumberFunc = (arg0: string, arg1: number) => void;
let f: stringNumberFunc = function (a, b) {};
let g: stringNumberFunc = function (c, d) {};
