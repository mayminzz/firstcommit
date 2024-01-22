// 사용자로부터 영문 소문자로 구성된 임의의 문자를 받는다.
// 사용자로부터 받은 임의의 문자를 첫번째 단어만 대문자로 출력하게 하고 나머지 문자는 고문자로 출력하게 해주세요!

// const string = prompt("영문 소문자로 된 문자열을 입력하세요!");
// const firstCh = string[0].toUpperCase();
// const remainCh = string.slice(1);
// const result = firstCh + remainCh;
// document.write(result);

// 각각의 문자를 모아서 문자열로 만들어라 join
// const result01 = [string[0].toUpperCase(), ...string.slice(1)].join("");
// console.log(result01);

// Js 문법으로 활용해야한다.
const string = prompt("영문 소문자로 된 문자열을 입력하세요!")

const result = [string[0].toUpperCase(), ...string.slice(1)].join("")
document.write(result)