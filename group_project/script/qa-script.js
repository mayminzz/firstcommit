// GiftTop
window.addEventListener("load", () => {
  document.querySelector(
    ".gift_top"
  ).innerHTML = `<h4>전 구매 무료상품 및 선물포장과 단독 기프트 메시지 카드 혜택을 즐겨보세요.</h4>`;
});

// left gnb
const headerUrl = "../json/header.json";
fetch(headerUrl)
  .then((response) => response.json())
  .then((json) => {
    let leftOutput = "";
    json.leftNav.forEach((list) => {
      leftOutput += `<a href="#">${list.category}</a>`;
      console.log(leftOutput);
    });
    document.querySelector(".gnb").innerHTML = leftOutput;

    let rightOutput = "";

    json.rightNav.forEach((list) => {
      rightOutput += `<a href="#">${list.category}</a>`;
    });

    const gnbRight = document.querySelector(".gnb_right");
    gnbRight.innerHTML = rightOutput;

    const findIcon = document.createElement("a");
    findIcon.classList.add("finder");
    json.rightNav.unshift(findIcon);

    const newDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    newDiv.classList.add("toggle");
    gnbRight.appendChild(newDiv);
    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    json.rightNav.push(newDiv);
  })
  .catch((err) => console.log(err));

// toggle
const newDiv = document.createElement("div");
newDiv.classList.add("toggle");

newDiv.addEventListener("click", () => {
  newDiv.classList.toggle("active");
});

// 제출하기 버튼 이벤트
const submitBtn = document.querySelector("#submitbtn");
const userName = document.querySelector("#name");
submitBtn.addEventListener("click", () => {
  alert(`${userName.value}님, 문의하신 내용이 제출되었습니다. 감사합니다!`);
});

//작은 문의사항 창
const btn = document.querySelector("#query");
const miniBox = document.querySelector(".mini_ask");

btn.addEventListener("click", () => {
  miniBox.classList.toggle("show");
});

const footerUrl = "../json/footer.json";
// footer
fetch(footerUrl)
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((content) => {
      // output += `
      // <div class="content">
      //   <h3>${titles.title}</h3>
      //   </div>`;
      output += `
      <div class="content">
        <h3>${content.title}</h3>
        <p>
          <span>${[content.subtitle[0]]}</span>
          <span>${[content.subtitle[1]]}</span>
          <span>${[content.subtitle[2]]}</span>
          <span>${[content.subtitle[3]]}</span>
        </p>
      </div>"`;
    });
    const contents = document.querySelector(".contents");
    contents.innerHTML = output;
  });
