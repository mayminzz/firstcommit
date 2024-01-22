const btn = document.querySelector("#btn");
const show = document.querySelector("#show");

btn.onclick = (e) => {
  e.preventDefault();
  show.classList.toggle("clicked");
  if (btn.innerText == "상세 설명 보기") {
    btn.innerText = "상세 설명 닫기";
  } else if (btn.innerText == "상세 설명 닫기") {
    btn.innerText = "상세 설명 보기";
  }
};

