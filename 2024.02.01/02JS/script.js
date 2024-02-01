// const img = document.querySelector("img");
const desc = document.querySelectorAll(".user");

// desc[0].innerText = "이름 : 안보현";

// const desc = document.querySelector("#desc");
// console.log(desc);
// desc.innerHTML = '<p class="user">이름 : 안보현</p';

desc[0].addEventListener("click", () => {
  // if (!desc[0].classList.contains("clicked")) {
  //   desc[0].innerText = "Name : BoHyun";
  //   desc[0].classList.add("clicked");
  // } else {
  //   desc[0].innerText = "이름 : 안보현";
  //   desc[0].classList.remove("clicked");
  // }
  desc[0].classList.toggle("clicked");
});

const profile = document.querySelector("#title");
profile.addEventListener("click", () => {
  profile.innerText = "마이 프로필";
});
