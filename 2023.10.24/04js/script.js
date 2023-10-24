const btn = document.querySelector("#btn");
const notiBox = document.querySelector("#noti-box");

btn.addEventListener("click", () => {
  // <div class="noti>식사하세요 주인님</div>"
  const noti = document.createElement("div");
  noti.classList.add("noti");
  noti.innerText = "식사하세요! 주인님";
  notiBox.appendChild(noti);
  setTimeout(() => {
    noti.remove();
  }, 3000)
});

btn.addEventListener("click", () => {
  // <div class="noti>오늘도 화이팅!</div>"
  const noti = document.createElement("div");
  noti.classList.add("noti");
  noti.innerText = "오늘도 화이팅!";
  notiBox.appendChild(noti);
  setTimeout(() => {
    noti.remove();
  }, 3000)
});
