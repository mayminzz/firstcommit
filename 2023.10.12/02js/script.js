// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(` 현재 월: ${nowMonth}월 <br>`);
// document.write(` 현재 일: ${nowDate}일 <br>`);

// let classOpen = new Date("2023,08,22");
// let classOpen = new Date(`2023/08/22`);
// let theMonth = classOpen.getMonth() + 1;
// let theDate = classOpen.getDate();

// 빽틱이나 큰따옴표를 안쓰면 월에 +1 안써도됨
// let classOpen = new Date(2023/08/22);
// let theMonth = classOpen.getMonth();
// let theDate = classOpen.getDate();

// document.write(`<h1>강의 개강 날짜 정보</h1>`);
// document.write(` 현재 월: ${theMonth}월 <br>`);
// document.write(` 현재 일: ${theDate}일 <br>`);

let today = new Date();
// 메서드임
let nowYear = today.getFullYear();
let theDate = new Date(nowYear, 11, 31);
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
console.log(result);
document.write(`연말 D-Day : ${result}남았습니다.`);

// floor 소수점 버려
// ceil반올림