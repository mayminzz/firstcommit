const character = document.querySelector(".character");

// JS 이벤트: 클릭, 스크롤, 마우스 무브, 드래그
// dragstart: 드래그를 시작한 시점에서 발생하는 이벤트
// drag: 드래그를 하고있는 시점에서 발생하는 이벤트
// dragend: 드래그가 완료된 시점에서 발생하는 이벤트

character.addEventListener("dragstart", () => {
  console.log("드래그 이벤트 시작")
})
// 드래그 움직이면 발생
character.addEventListener("drag", () => {
  console.log("드래그 이벤트 진행중")
})

character.addEventListener("dragend", () => {
  console.log("드래그 이벤트 완료")
})
