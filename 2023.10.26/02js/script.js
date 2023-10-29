class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
}

Book.prototype.finish = function () {
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};

const book1 = new Book("자바스크립트", 648, false);
console.log(`${book1.finish()}`);


// class TextBook {
//   constructor(title, price, major) {
//   Book.call(this,title, price);
//     this.major = major;
//   }
// }
// TextBook.prototype.buyTextBook = function() {
//   console.log(`${this.major}전공 서적, ${this.title}을 구매했습니다.`);
// }
// let book3 = new TextBook("타입스크립트", 20000, "컴퓨터공학");
// console.log(`${book3.buyTextBook()}`)
