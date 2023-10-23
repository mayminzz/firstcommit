// window.onload = alert("안녕하세요!");
// 웹 페이지에 오자마자 알림창 메시지를 쓰고 싶다면 onload라는 속성을 사용

// const button = document.querySelector("button");
// button.onclick = () => {
//   document.body.style.background = "green";
// };

// 두번째
// const result = document.querySelector("#result");
// document.body.addEventListener("keydown", (e) => {
//   result.innerText = `
//   code: ${e.code},
//   key : ${e.key},`;
// });

// keydown 키를 누르고 있는 동안
// 욕 못쓰게 할때

const result = document.querySelector("#result");
document.body.addEventListener("keypress", (e) => {
  result.innerText = `
  code: ${e.code},
  key : ${e.key}`;
});
// 키를 눌렀을때 