// // 지난번 배웠던 타입 별칭 형태
// type stringNumberFunc = (arg0: string, arg1: number) => void;
// const f: stringNumberFunc = function (a: string, b: number): void {};
// const g: stringNumberFunc = function (a: string, b: number): void {};

// // 객체의 타입 정의: interface!=> 객체 타입 정의 정문
// interface INameable {
//   name: string;
//   age: number;
// }
// // 객체 생성
// const jack:INameable  = {
//   name: "jack",
//   age: 20,
// };

// 객체의 타입을 정의할 때 interface가 아닌 type 별칭으로도 타입 정의 가능!(알아만 둬도됨)
type Person = {
  name: string;
  age: number;
};

// JS에서 함수의 매개변수 값을 기본ㄱ밧(default)로 설정할 수 있었다.\
// js 구조분해할당 => 할당하고자 하는 값과, 값을 받는 키가 동일한 네이밍을 가지고 있는 경우, 축약헤서 1번만 사용할 수 있었다.
// 이 함수는 객체형식으로 값을 반환하기 위해서 person이라는 타입을 타입 조건으로 넣은 것
// const makePerson = (name: string, age: number = 10): Person => {
//   const person = {
//     name,
//     age,
//   };
//   return person;
// };

// => 같은 결과물
const makePerson = (name: string, age: number = 10): Person => ({ name, age });

console.log(makePerson("jack"));
console.log(makePerson("jack", 29));
// 기본값으로 10을 설정하였기 때문에인자값을 하나만 넣어도 기본으로 설정한 값이 출력됨 하지만 만약에 인자값이 들어왔을 경우 인자값이 우선적으로 출력됨
