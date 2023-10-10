// console.log(`I'm
//   studying now.`)

let name01 = "영심이";
let classRoom = 201;

// 구버전
// console.log(name01 + "님 " + classRoom + "호 강의실로 입장하세요.");

// 신버전
// 탬플릿(변수 선언해놓은것) 리터럴 (문자형식으로 가져와서 쓰겠다)
console.log(`${name01}님 
${classRoom}호 강의실로 
입장하세요.`);

// 암수, 객체 => 변수명, 단어를 예약어라고 한다.
// 취소선은 어디선가 name을 쓰고 있는데 다른걸로 바꿔주면 안되겠냐? 하고 물어보는 것

let jsTool = {
  title: "자바스크립트 인문",
  studyDate: "2023-10-10",
  people: 17,
  finished: "someday",
};

// 객체 안에는
// 한 객체 안에 4개의 property가 있음
// key:value 한쌍 => property (속성)
// jsTool은 객체
// property 4개 중에 key값중에 title에 들어가는 value를 찾아봐 하면 자바스크립트 인문

//js안에 객체 > 배열(얘도 객체 안에 여러개를 담아넣을 수 있다.

// 객체 선언문
let test1 = new Object();

test1 = {
  title: "자바스크립트 인문",
  studyDate: "2023-10-10",
  people: 17,
  finished: "someday",
};

// let vtest;
// vtext = 01;

let vtest = 1;
