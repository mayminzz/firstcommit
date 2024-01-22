import { IPerson, ICompany } from "index02";

// let jack: IPerson = {
//   name: "jack",
//   age: 30,
// };

// console.log(jack);

// let jane: IPerson = {
//   name: "jane",
//   age: 32,
// };
// console.log(jane);

// let apple = {
//   name: "Aoole Computer",
//   age: 43,
// };

// 객체 축약법: 객체 안에 키와 새롭게 생성하고자 하는 변수명이 동일한 경우
// let jack: IPerson = { name: "jack", age: 32 };
// let Apple: ICompany = { name: "Apple", age: 43 };
// console.log(jack, Apple);

// let jack: IPerson = { name: "jack", age: 32 };
// let { name, age } = jack;
// console.log(name, age);
interface addresstype {
  country: string;
  city: string;
  address1: string;
  address2: string;
  address3: string;
}
let address: addresstype = {
  country: "Korea",
  city: "Seoul",
  address1: "Gangnam-gu",
  address2: "sinsa-dong",
  address3: "789 street",
};

const { country, city, ...detail } = address;
console.log(detail);

// JS 전개연산자를 활용해서 서로다른 배열 혹은 객체값을 하나로 합칠때에도 사용했음
// 서로다른 배열 요소를 하나의 배열 안에 아이템으로 가져오고 싶을 때
let a = { x: 0 };
let b = { y: 0 };

let coord = { ...a, ...b };
console.log(coord);

// 객체 타입영역에서의 이단아 객체 타입의 형식만 작출뿐 객체 안에 있는 키값의 저으이는 나몰라라 한다.
// 모든 객체에 object로 정의를 해주게 되면
let person: object = {
  name: "minju",
  age: 32,
};

// 타입 변환장치 : 물리언 값, 문자열 마음대로 바꿔줄 수 있다.
(<{ name: string }>person).name;

// 타입 단언
// 타입이 아직 선언되지 ㅇ낳는 요소의 타입을 임시로 추정하고자 할 때

import { INameable } from "index02";
let obj: object = { name: "jack" };
// 제네릭 형식
let name0 = (<{ name: string }>obj).name;
let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;
// ~와 같이 ~ 처럼 가져가라

console.log(name0, name1, name2);
