// 객체 줄임 표기법 Object Shorten Assignment

// const name = "minju";
// const age = 24;

// const person = {
//   name: name,
//   age: age,
// };
// 생략 =>
// const person = {
//   name,
//   age,
// };

// console.log(person);

// 구조분해할당!! Decstructuring
// const person = {
//   name: "minju",
//   age: 24,
// };
// // const name = person.name;
// // console.log(name);

// // const name02 = person["name"];
// // console.log(name02);

// const { name, age } = person;
// console.log(name, age);

// 전개 연산자 Spread Operator
// const arr = [1, 2, 3, 4];
// const [a, b] = arr;

// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

const person = {
  name: "minju",
  age: 24,
};

// // 얕은 복사
// let person3 = person;
// console.log(person3 === person);
// console.log(person3);

// // 깊은 복사
// let person2 = { ...person };
// console.log(person2);

// console.log(person2 === person3);

const person2 = {
  ...person,
  address: "seoul",
  name: "kim",
};
console.log(person2);

const a = [1, 2];
const b = [...a, 3];
console.log(b);

const c = [...a, ...b];
console.log(c);

// 삼항 조건 연산자 (conditional Operator)
const coffee = undefined;
// const coffee = {
//   name: "americano",
//   price: 2000,
// };
// if (coffee) {
//   console.log(coffee.name);
// } else {
//   console.log("There is no coffee");
// }

console.log(coffee ? coffee.name : "There is no coffee");
