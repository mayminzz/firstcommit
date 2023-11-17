// 함수는 객체이다.
// let add = new Function("a", "b", "return a + b");

// let result = add(1, 2);
// console.log(result);

function add(a: number, b: number) {
  return a + b;
}
console.log(add(10, 30));

let add2 = function (a: number, b: number) {
  return a * b;
};
console.log(add2(93, 2));


// 함수는 1급시민
// 1) 변수안에 할당 가능
// 2) 다른 함수의 인자값 = 매개변수로 사용가능 = 콜백함수
// 3) 다른 함수의 반환갑으로 사용 가능