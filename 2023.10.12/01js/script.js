// JS 객체 : 자료를 저장하고 처리하는 기본 단위!
// let shoeDog = {
//   author: "Phil Knight",
//   category: "social",
//   pages: 500,
//   price: 19800,
// };

// JS를 생성하는 방법
// 함수형 생성방법(내장함수: 객체를 주로 많이 만들걸 예상해서 함수 미리 만들어 놓을테니까 이걸로 해봐 new라는 예약어사용해야함 cntrl 하고 Object 클릭 하면 메뉴얼이 적혀 있음)
// tv를 Object라는 함수를 통해 객체로 만들거다 티비라는 객체에 컬러라는 키를 생성해서 화이트라는 밸류값을 생성
// let tv = new Object();
// tv.color = "white";
// tv.price = 300000;
// tv.info = function () {
//   document.write(`tv색상 : ${tv.color}<br/>`);
//   document.write(`tv가격 : ${tv.price}<br/>`);
// };
// document.write(`<h1>tv 객체 메서드 호출</h1>`);
// tv.info();

// 속성 설정 방법
// let car = {
//   color: "black",
//   price: 5000000,
//   info: function () {
//     document.write(`car색상: ${car.color}<br>`);
//     document.write(`car가격: ${car.price}<br>`);
//   },
// };
// document.write(`<h1>car 객체 메서드 호출</h1>`);
// car.info();

// this 밸류라는 값으로 함수를 쓰면 메서드(method)라고 부른다: 함수형태의 종류 중 하나
// math science를 더해서 반환해줘
// 객체와 메서드: 재활용이 가능한 객체 및 메서드
let test = {
  avg: function (math, science) {
    return math + science;
  },
};
// 인수 인자값 (50,100)
document.write(test.avg(50, 100));

// 엡브라우저화면에 출력해주는 애 자바스크립트에는 도큐먼스라는 객체가 있고 그 안에 write라는 매서드가 정의되어 있기 때문에 쓸수 있는 것 (내장객체안에 들어간 메서드)
// 객체와 메서드: 재활용이 블가능한 객체 및 메서드(이미 숫자를 정의해놓고 함수를 가져다가 쓰기밖에 못함) 고정된 값
let test02 = {
  math: 50,
  science: 100,
  avg: function () {
    return test01.math + test01.science;
  },
};
document.write(test01.avg());
// !!!!!이름이 다르면 아예 객체는 쓰지 못하게 됨 그래서 나온게 this!!!!!

// 객체와 메서드: 재활용이 일부 가능한 객체 및 메서드
let cloud01 = {
  math: 50,
  science: 100,
  avg: function () {
    return this.math + this.science;
  },
};
document.write(cloud01.avg());

// 화살표 함수에서는 this객체가 안먹힘