// 프로토타입을 상속하는 새로운 객체를 생성하는 방법
// 2가지 나눠서
// 2) class를 활용한 생성자함수를 활용해서 객체를 생성하는 방법

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다. `);
  }
}

const book1 = new BookC("자바스트립트", 15000);
book1.buy();

// 추가로 call을 안쓰고 extends 확장해서 써라
// Book
class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextBook() {
    console.log(`${this.major} 전공 서적 ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextBookC("HTML", 5000, "컴퓨터공학");
book2.buyTextBook();

book2.buy();
