const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

// console.log(arrows);

const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
container.style.background = `url(2/${pics[0]})`;
// 왜 0일까?
let i = 0;
// 배열안에 있는 하나하나 가져와서 반복문 돌리려고 할때 사용 forEach
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.background = `url(2/${pics[i]})`;
  });
});

// 우클릭을 했을때 나오는 창을 contextmenu 라고 한다. 기본적으로 가지고 있는 속성을 무력화 시키면서 alert창을 띄운다.
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("오른쪽 버튼을 사용할 수 없습니다. ")
});
// 여러개의 복수가 들어있을때 참조변수 e를 쓴다. 선택한 영역을 알기 위해서 쓴다 e는 왼쪽 아님 올느쪽이라고 식별할 수 있는 애
