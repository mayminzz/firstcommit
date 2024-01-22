// // 내장객체 new 필수
// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();
// let nowDay = today.getDay();
// console.log(nowMonth);
// // 날짜
// console.log(nowDate);
// // 요일
// console.log(nowDay);

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월: ${nowMonth}월 <br/>`);
// // 날짜
// document.write(`현재 일: ${nowDate}일`);
// // getMonth에는 1-12월 까지가 숫자를 부여받고 들어가 있다 하지만 숫자는 0부터 시작하기 때문에 1이 적은 숫자 나옴

let today = new Date();
let nowMonth = today.getMonth();
// console.log(nowMonth);
// 날짜
let nowDate = today.getDate();
// 요일
let nowDay = today.getDay();

document.write("<h1>오늘의 날씨 정보</h1>");
document.write(`현재 월 : ${nowMonth}월 </br>`);
document.write(`현재 일 : ${nowDate}일`)
