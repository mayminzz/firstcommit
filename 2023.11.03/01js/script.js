// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//     console.log("B");
//   };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 순서대로 나오는게 정상!
// const displayA = () => {
//   console.log("A");
// };
// 만약 B가 복잡하고 긴 함수였다면 C처리가 안될수 있다.(동기처리)
// => 비동기처리방식 : 시간처리함수 = B를 먼저 실행해야하지만 2초후에 실행하라고 했으니까 C로 넘어가서 실행이 진행되고 있는 가운데 2초 후에 B 실행
// 일정시간 이후에 함수를 실행시키는 애(콜백함수를 가진다)
// 일급시민 : 매개변수로 함수

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000 /*시간*/);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// =>비동기처리 방식을 하면서도 순서는 ABC순서로 출력(실행)되게끔 하곳 싶다면?
// B에 콜백함수를 적용하여 B가 처리되고 나서 C가 실행될 수 있게끔 매개변수로displayC 를넣어준다

//  coffee 매개변수
// 콜백함수
// const order = (coffee) => {
//   console.log(`${coffee} 주문접수`);
// };
// order("아메리카노");

// 콜백함수를 활용한 비동기처리방식
// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// const display = (result) => {
//   console.log(`${result} 준비완료!`)
// }
// order("아메리카노", display);

// => 콜백함수를 활용한 비동기처리의 취약점!!
const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
displayLetter();
// 코드에 문제가 생겼다면 하나하나 뜯어봐야 하는 불편함이 있음 => 콜백지옥...
// 이러한 콜백지옥을 해소하기 위해서 나온 것이 JS의 promise 객체!
// => 만약에 이러한 함수가 실행되면 이러한 값을 출력해줄게 하고 약속을 하는 것!
// => 해결방안을 바로 알 수 있다



// => 그렇다명 비동기처리방식이 지금까지 봐온 callback함수 말고는 없을까?
// no// 2015년 전까지는 Y / 2015년 대개혁의 해 = ES6문법 => promise 객체 / async&awit
// 구글 크롬 =? 검색엔진 v9 => 워낙 JS paring 속도가 워낙 뛰어나 개발자들이 JS를 웹 브라우저안에서만 사용하기가 너무 아깝다
// => 그래서 나오기 시작한게 Node.js => JS런타임(환경)
// 그동안 기존 Backend 개발자들의 전유물(서버 구축, 관리하던 JAVA, C++)
// 굳이 사용하지 않아도 Node.js 기반에서 JS만으로도 충분히 서버 구축하고 관리 할 수 있는 시대
// 프론트엔드개바자 웹 브라우저 화면에서 전개되는 역동적인 페이지구성
// 회사.기업 => Node.js => 비싼 서버
