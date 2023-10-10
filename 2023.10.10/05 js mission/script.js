// let age = prompt("몇년생이신가요?", "1999");
// document.write(`당신은 ${year}세 입니다`);

// 오늘 날짜정보를 불러오겠다
let today = new Date();
let currentYear = today.getFullYear();
// console.log(today);
// console.log(currentYear);
let birthYear = prompt("태어난 년도를 입력하세요!");
let age = currentYear - birthYear + 1;
document.write(`당신의 나이는${age}세 입니다.`);
