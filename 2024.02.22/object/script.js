// let obj = new Object();
// let arr = new Array();
// console.log(typeof arr);
// console.log(typeof obj);

// let arrTest = [1, 2, 3];
// console.log(arrTest);

/////////////////////////////////////////////////

// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     this.done === false ? (str = "읽는중") : (str = "완독");
//     return str;
//   };
// };
// const book1 = new Book("Javascript", 4005, true);
// console.log(book1);

/////////////////////////////////////////////////

// 이미 생성자함수를 통해 생성된 객체 내 메서드 함수를 추가하는 방법
// function Book(title, price) {
//   this.title = title;
//   this.price = price;
// }

// Book.prototype.buy = function () {
//   console.log(`${this.title}을 ${this.price}에 구매하였습니다.`);
// };

// //인스턴스 객체 생성
// const book1 = new Book("MINJU", "1억");
// console.log(book1.buy());

// function TextBook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }

// TextBook.prototype.buyTextBook = function () {
//   console.log(`${this.major}전공서적, ${this.title}을 구매했습니다.`);
// };
// // 잘 매팅될 수 있게 연결 시키는 역할
// Object.setPrototypeOf(TextBook.prototype, Book.prototype);

// const book2 = new TextBook("Typescript", 5000, "컴퓨터공학");
// console.log(book2);
// console.log(book2.buyTextBook());
// console.log(book2.buy())

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);
console.log(book1.buy());

class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextBook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터공학");
console.log(book2.buyTextBook());
console.log(book2.buy());
