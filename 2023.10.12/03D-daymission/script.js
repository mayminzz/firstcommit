let now = new Date();
let firstDay = new Date(`2022-02-04`);
let tonow = now.getTime();

let toFirst = firstDay.getTime();
let passedTime =tonow - toFirst;
let passedDay = Math.round(passedTime /(24 * 60 * 60 * 1000));
document.querySelector(".accent").innerHTML = passedDay + "일째 되는날😊"

// let now = new Date();
// let firstDay = new Date(`2023-08-22`);
// let toNow = now.getTime();

// let toFirst = firstDay.getTime();
// let passedTime = toNow - toFirst;
// // 날짜로 바꿔보자
// let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
// document.querySelector(".accent").innerHTML = passedDay + "일째 되는날 😍";


// function calcDate(days) {
//   // 100일째 되는날
//   let future = toFirst + days * (24 * 60 * 60 * 1000);
//   let someday = new Date(future);
//   console.log(someday);
//   let year = someday.getFullYear();
//   let month = someday.getMonth() + 1;
//   let date = someday.getDate();
//   document.querySelector(
//     "#date" + days
//   ).innerHTML = `${year}년 ${month}월 ${date}일`;
// }
// calcDate(100);
// calcDate(200);
// calcDate(365);
// calcDate(500);

// 100일
function calcDate(days) {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector("#date" + days).innerHTML = `${year}년 ${month}월 ${date}일`;
}
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// // 100일째 되는날
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// console.log(someday);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();
// document.querySelector("#date100").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date200").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date365").innerHTML = `${year}년 ${month}월 ${date}일`;

// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date500").innerHTML = `${year}년 ${month}월 ${date}일`;
