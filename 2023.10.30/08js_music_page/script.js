const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
console.log(lists);
const deg = 45;

let i = 0;
for (let el of lists) {
  let pic = el.querySelector(".pic");
  console.log(pic);
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.background = `url("./img/member${i + 1}.jpg")`;
  i++;

  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  // 8개중 뭔지 어떻게 알아 그래서 e를 넣어줌
  play.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    // 플레이버튼 이 재생이 되어진다고 한다면
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
  pause.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    // 플레이버튼 이 재생이 되어진다고 한다면
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
  load.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains(".on");
    // 플레이버튼 이 재생이 되어진다고 한다면
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      // 처음으로 로드를 한 다음에 재생시켜라
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
}
// el은 아티클 8개중 하나
// on이라는 클래스가 있을 때에만 play 아이콘이 먹게
// 재생을 시켜주기 위해서

// prev / Next
let prev = document.querySelector(".btnPrev");
let next = document.querySelector(".btnNext");
let audio = document.querySelectorAll("audio");

let active = 0;
let num = 0;
let len = lists.length - 1;

let activation = (index, lists) => {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
};
// audio 배열
let initMusic = () => {
  for (let el of audio) {
    el.pause();
    el.load();
    // previousElementSibling 직전 단계에서 실행되고 있었던 형제요소를 찾는다.
    el.parentElement.previousElementSibling.classList.remove("on");
  }
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == 0 ? (active = len) : active--;
  activation(active, lists);
});
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == len ? (active = 0) : active++;
  activation(active, lists);
});
