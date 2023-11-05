
// GiftTop
window.addEventListener("load", () => {
  document.querySelector(".gift_top").innerHTML = `<h4>전 구매 무료상품 및 선물포장과 단독 기프트 메시지 카드 혜택을 즐겨보세요.</h4>`
});

// gnb
// fetch("qa.json")
//   .then((response) => response.json())
//   .then((json) => {
//     let output ="";
//     json.forEach((list) => {
//       output +=
//       `<li>${list.category}</li>`;
//     });
//     document.querySelector(".gnb").innerHTML = output;
//   }).catch((err) => console.log(err));

  //작은 문의사항 창
  const btn = document.querySelector("#query");
  const miniBox = document.querySelector(".mini_ask");

  btn.addEventListener("click", () => {
    miniBox.classList.toggle("show");
  })

