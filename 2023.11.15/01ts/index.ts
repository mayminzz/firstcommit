// 타입스크립트는 자바스트립트 자료 타입을 결정짓는 역할
// n이라는 변수는 항상 숫자를 받겠다 는 의미

let n: number = 1;
let b: boolean = true;
let s: string = "hello";
let o: object = {};

// n = "1";
// b = 1;
// s = false;

// 타입 주석이 없더라도 타입을 추론해준다.
// 타입스크립트에서 타입을 추론하는 방식을 "리터럴타입"이라고 한다.
let n01 = 1;

// 타입스크립트에는 피트키가 존재
// 모든 타입을 초월하는 타입이 있다.
let a: any = 0;
a = "hello";

// undefined
let u: undefined = undefined;
// u = 1;

// 객체 생성/ 타입정의(object)
let o2: object = {
  name: "Kwon",
  age: 25,
};
o2 = {
  first: 1,
  second: 2,
};

// TS에서 겍체의 타입 정의 inrterface 키워드 사용
interface IPerson {
  name: string;
  age: number;
}

// let good : IPerson = {
//   name: "Kwon",
//   age: 25,
// };

// let bad1: IPerson = {
//   name: "jack",
// };

// let bad2: IPerson = {
//   name: "jack",
//   age: 24,
//   etc: true,
// };

interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
  // 선택적 속성(optional property)
}

let good: IPerson2 = {
  name: "Kim",
  age: 20,
};
let good2: IPerson2 = {
  name: "Kim",
  age: 20,
  etc: true,
};

// JS구조분해할당

let key = {
  first: 1,
  second: 2,
};

let { first, second } = key;

// interface ai {
//   name: string;
//   age: number;
// }
// let test = {
//   name: "Jack",
//   age: 32,
// };

// 익명 인터페이스
let ai: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 32,
};

// 함수에서 익명 인터페이스가 사용되는 경우 : ㅅ함수의 매개변수의 타입을 정의 하지 않으면 안된다.
// function printMe(me: { name: string; age: number; etc?: boolean }) {
//   console.log(
//     me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
//   );
// }
// printMe(ai);

// JS에서 클래스를 사용한다는 것은 비슷한 패턴 혹은 반복되는 객체를 보다 효율적으로 만들어서 관리하고자 하기 때문에

class Person1 {
  name?: string;
  age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = "jack";
jack1.age = 22;
console.log(jack1);
