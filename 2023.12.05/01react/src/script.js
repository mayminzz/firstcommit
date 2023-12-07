// const foo = () => {};
// const bar = () => {};
// foo();
// bar();
// 동기처림방식
// const sleep = (func, delay) => {
//   // 타임워치를 누르면, 타임워치의 버튼을 누른 해당 시점!!
//   const today = new Date().now();
//   const delayUntil = today + delay;
//   while (today < delayUntil);
//   func();
// };
// function foo() {
//   console.log("foo");
// }
// function bar() {
//   console.log("bar");
// }

// sleep(foo, 3000);
// bar();

// 3초의 시간까지는 아무것도 하지 않다가 3초 후에 foo 라는 함수가 실행이 되고, bar라는 함수가 실행된다.

// 비동기처리방식
function foo() {
  console.log("foo");
}
function bar() {
  console.log("bar");
}

setTimeout(foo, 3000);
bar();
