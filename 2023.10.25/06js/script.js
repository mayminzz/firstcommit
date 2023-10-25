// 지금까지와는 다른 방법으로 객체생성
// 생성자함수 => 객체 생성

// 붕어빵 틀을 만들자!!라는 의미 => 객체: 해당 붕어빵 틀을 통해서 => 붕어빵이 무한대로 생산가능
// 3개의 매개변수를 받을 건데 각각의 키에 매개변수를 할당

// 객체 생성자 함수(붕어빵 틀)=프로토타입이라 한다
function book(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

// 자바스크립트에 내장되어 있는 함수를 쓸때는 new ex) new Date() / new Object()
/*인스턴스 객체 */
let book1 = new book("자바스크립트", 648, false);
let book2 = new book("HTML5", 550, true);
let book3 = new book("CSS3", 430, false);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);
console.log(`${book3.title} - ${book3.pages}쪽 - ${book3.finish()}`);

// 클래스를 사용해서 객체를 만들기!!

class Book5 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}
let book6 = new Book5("자바스크립트01", 648, false);
let book7 = new Book5("자바스크립트02", 550, true);
console.log(`${book6.title} - ${book6.pages} - ${book6.done}`);
console.log(`${book7.title} - ${book7.pages} -${book7.done}`);
