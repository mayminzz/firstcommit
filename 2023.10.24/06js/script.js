//js팝업창 생성하기!
//window객체.open(무언가를 열다)(경로값, 창이름, 창자체에 대한 옵션값) 3가지

// const btn = document.querySelector("button");
// let openPopup = () => {
//   window.open(
//     "notice.html",
//     "이벤트 팝업",
//     "width=600 height=500 left=300 top=200"
//   );
// };
// btn.addEventListener("click", openPopup);

const btn = document.querySelector("button")
let openPopup = () => {
  window.open(
    "notice.html",
    "이벤트 팝업",
    " width=500 height=400 left=300 top=200"
  )
}
btn.addEventListener("click", openPopup)