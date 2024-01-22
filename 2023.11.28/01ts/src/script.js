// function displayHello() {
//   console.log("Hello");
// }
// displayHello();

//async, await

// async function displayHello01() {
//   console.log("Hello01");
// }
// displayHello01();

// promise 객체를 활용한 비동기처리 방식
function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite().then(displaySubject).then(console.log);

// 위 코드를 async, await 방식으로 변환
// sync(동기) <-> async(비동기)
async function whatsYourFavorite01() {
  let fav01 = "Typescript";
  return fav01;
}
async function displaySubject01(subject) {
  return `Hello, ${subject}`;
}

whatsYourFavorite01().then(displaySubject01).then(console.log);

//**
// 비동기적으로 실행문을 처리하는 방식의 함수
// 비동기적으로 처리할 때, 유의사항
// 1. 아무리 실행문을 비동기적으로 처리한다고 해도, 우선처리 실행을 해야하는 코드가 있다면, 반드시 해당 실행문을 먼저 처리항 후 다음번 코드를 실행하게끔 해야한다.
async function whatsYourFavorite02() {
  let fav02 = "Node.js";
  return fav02;
}

async function displaySubject02(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite02();
  const result = await displaySubject02(response);
  console.log(result);
}
// 먼저 구문이 나왔다고 해서 실행된다는 보장이 없음 await로 순서를 정해주는 것!!

init();
