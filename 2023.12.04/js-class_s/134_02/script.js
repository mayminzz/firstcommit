// 드래그 완료 후 발생시킬 수 있는 이벤트 종류
// dragnter: 드래그 중인 아이템이 지정한 위치 반경에 들어왔을 때
// dragover: 드래그 중인 아이템이 지정한 위치에 정확하게 올라와있을 때 계속적으로 반응하는 이벤트!
// dragleave: 드래그 중인 아이템이 지정한 위치를 벗어났을 때
// drop: 드래그 중인 아이템을 지정한 위치에 올려놓았을 때

const box = document.querySelector(".box");

box.addEventListener("dragenter", () => {
  console.log("드래그 엔터 이벤트");
});

box.addEventListener("dragover", (e) => {
  // console.log("드래그 오버 이벤트");
  e.preventDefault();
});

box.addEventListener("dragleave", () => {
  console.log("드래그 리브 이벤트");
});

// 드랍 이벤트를 처리할 때에는 반드시 드래그 오버이벤트의 기본 속성을 무력화해야 한다.
box.addEventListener("drop", () => {
  console.log("드래그 드랍 이벤트");
});
