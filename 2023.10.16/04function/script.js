// function showData(name, age) {
//   alert(`안녕하세요! ${name}님 나이가 ${age}살 이군요!😀`);
// }

// function getData(callBack) {
//   let userName = prompt("이름을 입력하세요!");
//   let userAge = parseInt(prompt("나이를 입력하세요!"));
//   callBack(userName, userAge);
// }
// getData(showData);

/*
자바스크립트 = 1급 시민
1. 변수에 값을 할당할 수 있어야 1급 시민
2. 다름 함수의 매개변수 혹은 인자값으로 사용할 수 있어야 1급 시민
3. 다른 함수에서 반환값으로 반환할 수 있어야 한다.*/
// 1
// let sum = (a, b) => a + b;
// console.log(sum(12,2));

// 2
// function hello() {
//   return "안녕하세요!";
// }
// function bye() {
//   return "안녕히 가세요!";
// }
// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }
// userCheck("홍길동", hello);
// userCheck("도레미", bye);



// 3
// let init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`init(30,20) : ${init()(30,20)}`)

