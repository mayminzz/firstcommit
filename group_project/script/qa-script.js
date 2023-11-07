// GiftTop
window.addEventListener("load", () => {
  document.querySelector(
    ".gift_top"
  ).innerHTML = `<h4>전 구매 무료상품 및 선물포장과 단독 기프트 메시지 카드 혜택을 즐겨보세요.</h4>`;
});

// left gnb
fetch("../json/qa.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((list) => {
      output += `<a href="#">${list.category}</a>`;
      console.log(output);
    });
    document.querySelector(".gnb").innerHTML = output;
  })
  .catch((err) => console.log(err));

//  gnb_right
fetch("../json/qa2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";

    json.forEach((list) => {
      output += `<a href="#">${list.category}</a>`;
      console.log(output);
    });

    const gnbRight = document.querySelector(".gnb_right");
    gnbRight.innerHTML = output;

    const findIcon = document.createElement("a");
    findIcon.classList.add("finder");
    json.unshift(findIcon);

    const newDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    newDiv.classList.add("toggle");
    gnbRight.appendChild(newDiv);
    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    json.push(newDiv);
  })
  .catch((err) => console.log(err));

// toggle
newDiv.addEventListener("click", () => {
  newDiv.classList.toggle("active");
});

//작은 문의사항 창
const btn = document.querySelector("#query");
const miniBox = document.querySelector(".mini_ask");

btn.addEventListener("click", () => {
  miniBox.classList.toggle("show");
});
