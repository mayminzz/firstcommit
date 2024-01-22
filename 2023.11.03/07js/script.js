// let displayHello = () => {
//   console.log("hello");
// };
// displayHello();

// JS에서 비동기처리방식 마지막 3번째 방법: async 함수

// async function displayHello01() {
//   console.log("Hello");
// }
// displayHello01();

// function whatsYourFavorite() {
//   let fav = "javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }
// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`Hello ${subject}`));
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

// async
async function whatsYourFavorite() {
  let fav = "javascript";
  return fav;
}
async function displaySubject(subject) {
  return `Hello ${subject}`;
}

async function init() {
  // 비동기처리이기 때문에 첫번째가 늦어지면 두번째가 먼저 실행되게 되는데 이러한 불상사를 막기 위해서 await 기다려 끝날때까지 순서 기다려 async와 항상 같이 쓰인다.
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}
init();
// whatsYourFavorite().then(displaySubject).then(console.log);
