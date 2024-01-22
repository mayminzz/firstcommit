// 미리 약속
// 만약, 너가 지금 실행하고자 하는 명령문 성공하게 되면 A가 나오게 되고, 만약 이게 실패하면 B가 나오게 하자
// 콜백함수 일방적인 원웨이
// promise JS 내장객체 => class 생성자 => prototype함수 => prototype객체 => instance객체

// resolve: true일때 /  reject: false 일때
const pizza = new Promise((resolve, reject) => {
  if (true) {
    resolve("피자를 주문합니다!");
  } else {
    reject("피자를 주문하지 않습니다!");
  }
});

console.log(pizza);
// 콘솔 창에
// fullfilled: 실행이 되었다!
// false일 경우
// rejected: 거절되었다!

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료");
  });
