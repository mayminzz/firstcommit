// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치: ${e.pageX}, ${e.pageY}`);
// });
const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  console.log(`이벤트 발생 위치: ${e.screenX}, ${e.screenY}`);
});
//page : 작업하고 있는 모니터 한 페이지에서의 좌표값
// screen : 작업하고 있는 모든 모니터 듀얼모니터일 경우 모니터사이 중간이 0
