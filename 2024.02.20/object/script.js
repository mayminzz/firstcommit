// const book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// console.log(book1.title);
// console.log(book1.pages);

// let book2 = new Object();
// console.log(book2);

// book2.title = "Javascript";
// book2.pages = 544;

// console.log(book2);

// delete book2.pages;
// console.log(book2);

// const student = {
//   name: "David",
//   // score : 중첩객체
//   score: {
//     history: 85,
//     science: 95,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// console.log(student.score.average());

// const book3 = {
//   title: "민쥬",
//   pages: 24,
//   buy: function () {
//     console.log("이 책을 모두 읽었습니다.");
//   },
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("false") : console.log("true");
//   },
// };

// const book3 = {
//   title: "민쥬",
//   pages: 24,
//   buy: function () {
//     console.log("이 책을 모두 읽었습니다.");
//   },
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("false") : console.log("true");
//   },
// };

// console.log(book3.finish());

// let number1 = 1;
// let number2 = number1;

// // 객체를 생성하는 2가지 방법
// let bag = {
//   color: "blue",
//   width: 20,
//   heoght: 50,
//   title: "bag1",
// };

// 생성자 함수를 활용해서 프로토타입으로 틀을 만들어 놓고, 차별점을 줘야 하는 값을 제외하고는 나머지 요소는 이 틀 안에서 공통으로 생성될 수 있도록 해주자! => 비효율적으로 객체생성 하지 않아도 될 수 있게 해주자!

// 생성자 함수 보통 생성자함수의 함수명의 시작은 대문자로!!
function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  };
}

let book1 = new Book("minju", 24, true);
console.log(book1);

// 클래스를 사용해서 객체를 생성하는 방법
// 생성자 함수를 사용해서 객체 생성하는 방법 vs 클래스를 사용해서 객체를 생성하는 방법
// 객체의 메서드 = 함수를 별도의 공간으로 빼서 생성

class Book2 {
  constructor(title, pages, done) {
    (this.title = title), (this.pages = pages), (this.done = done);
  }
  finish() {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  }
}

const book3 = new Book2("파이썬", 500, true);
console.log(book3);
