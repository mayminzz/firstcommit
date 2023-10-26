// 프로토타입을 상속하는 새로운 객체를 생성하는 방법
// 2가지 나눠서
// 1) 고전적인 방식, 생성자함수를 활용해서 객체를 생성하는 방법
// 2) class를 활용한 생성자함수를 활용해서 객체를 생성하는 방법

function Book(title, price) {
  this.title = title;
  this.price = price;
}

// Book이라는 생성자함수에 새로운 메서드(함수)를 정의하고 삽입

Book.prototype.buy = function () {
  console.log(`${this.title}을  ${this.price}원에 구매하였습니다. `);
};

// 생성자 함수를 통해서 생선된 Book 이라는 프로토타입 객체를 활용해서 인스턴스 객체를 만들어보자

const book1 = new Book("해리포터", 10000);
book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다. `);
};

// 2개의 생성자함수를 연결해줌
Object.setPrototypeOf(TextBook.prototype,Book.prototype);

const book2 = new TextBook("자바스크립트", 20000, "컴퓨터공학");
book2.buyTextBook();

book2.buy();
