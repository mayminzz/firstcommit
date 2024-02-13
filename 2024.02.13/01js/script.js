// 객체

const obj = {
  title: "Today is good",
  price: 2000,
};

//js객체 안에 있는 key의 매칭되는 value값을 찾아오는 방법
// 온점 표기법
console.log(obj.title);

//대괄호표기법
console.log(obj["price"]);

//내장객체 & 수학객체
// let today = new Date();
// //날짜
// console.log(today.getDate());
// //요일 2는 화요일 이라는 뜻
// console.log(today.getDay());

// //현재 년도
// console.log(today.getFullYear());
// //현재 시간
// console.log(today.getHours());
// //현재 분
// console.log(today.getMinutes());
// // 현재 월
// console.log(today.getMonth());
// // 현재 초
// console.log(today.getSeconds());

let today = new Date();
let nowMonth = today.getMonth() + 1; //+1 해주는 이유 컴퓨터는 항상 0부터 시작!
let nowDate = today.getDate();
document.write(`<h1>오늘의 날짜 정보</h1>`);
// document.write("현재 월 : " + nowMonth + "월", "<br/>");
document.write(`현재 월 : ${nowMonth}월`, "<br/>");
document.write("현재 월 : " + nowDate + "일");

let open1 = new Date("2024/1/23"); //오차가 생길 수 있다. 년, 월에 -1을 해야한다!
let open2 = new Date(2024, 1, 23);
console.log(open1);
console.log(open2);

// 올해 연말까지 며칠이 남았는지 확인할 수 있는 계산기
// 1. 현시점의 날짜 정보 필요
// 2. 올해 연말의 날짜 정보가 필요
// 3. 올해 연말의 날짜 정보 - 현시점의 날짜 정보 = 남은 시간 
