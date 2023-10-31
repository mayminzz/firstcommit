// hello라는 화살표 함수 / 익명함수 / 2개의 매개변수를 설정했다.
// const hello = (name, message = "안녕하세요!") => {
//   console.log(`${name}님, ${message}`);
// };

// const addNum = (a, b) => {
//   let sum = 0;
//   sum += a;
//   sum += b;
//   return sum;
// };

// 전개연산자 전개구문
const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const animals = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

let sum01 = animals.concat(fruits);
console.log(sum01);

let sum02 = [...animals, ...fruits];
console.log(sum02);

// 원식타입복사 & 주소타입복사
// 원식타입복사
let take01 = "red";
let take02 = take01;
console.log(take01);
console.log(take02);
take02 = "blue";
console.log(take01);
console.log(take02);

// 주소타입복사 : 객체는 아예 바뀌어버린다.
let obj01 = {
  title: "js",
  pages: 360,
};
console.log(obj01);
let obj02 = obj01;
console.log(obj01);
console.log(obj02);
obj02.title = "ts";
console.log(obj01);
console.log(obj02);

// 배열을 통으로 집어 넣게 되면 원본데이터가 바뀌어 버린다. 배열도 객체 그렇기 때문에 원본데이터를 복사한 사본을 건드리면 원본이 바뀐다.
// 그러나 원시타입 복사형식으로 가져오려면 전개연산자로 가져와야지만 원본과 사본데이터를 따로 관리할 수 있다. 사본을 바꾸어도 원본이 바뀌지 않음
// const mine = [...fruits];
const mine = fruits;
console.log(mine);
mine[1] = "orange";
console.log(mine);
console.log(fruits);

// 객체는 기본적으로 property & key * value
const book = {
  title: "javascript",
  pages: 500,
};
console.log(book);
book.author = "park";
console.log(book);
book["published date"] = "2023-10";
// 띄어쓰기한 key값을 가지기 위해서는 대괄호표기법을 사용한다. 특수문아 띄어쓰기가 가능하다. 큰따옴표를 넣어주어야 한다.
console.log(book);

// 객체 축약법
let user = {
  name: "권민주",
};
user.age = 25;
console.log(user);

// let makeUser = (name, age) => {
//   return {
//     name: name,
//     age: age,
//   };
// };
let user1 = makeUser("슛돌이", 20);
console.log(user1);

// 객체의 키와 value값이 동일한 경우
let makeUser = (name, age) => {
  return {
    name,
    age,
  };
};