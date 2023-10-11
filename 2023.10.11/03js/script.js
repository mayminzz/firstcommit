// let name = prompt("이름을 입력해주세요!");
// let traf = parseInt(prompt("오늘 하루 사용한 교통비를 입력해주세요!"));
// let eat = parseInt(prompt("오늘 하루 사용한 식비를 입력해주세요!"));
// let drink = parseInt(prompt("오늘 하루 사용한 음료비를 입력해주세요!"));
// let normal_m = 10000;
// let over_m = (traf + eat + drink) - normal_m;
// let saved_m = normal_m - (traf + eat + drink);
// let result = traf + eat + drink >= normal_m && traf + eat + drink <= normal_m;
// result = result ? `초과금액, ${over_m}원 돈을 조금 아껴써주세요!🙄` : `잔여금액, ${saved_m}원 돈관리 잘하셨어요!!😍`;
// document.write(`${name}님은 ${result} `);

let traf = parseInt(prompt("교통비를 입력해주세요!"));
let eat = parseInt(prompt("식비를 입력해주세요!"));
let drink = parseInt(prompt("음료비를 입력해주세요!"));

let normal = traf + eat + drink;
let result = normal < 10000;
let result1 = 10000 - normal;
let result2 = normal - 10000;
result = result
  ? `${result1}원 남았어요. 돈관리 잘하셨어요!`
  : `${result2}원 초과했어요. 조금만 노력해주세요!` 
document.write(result);
