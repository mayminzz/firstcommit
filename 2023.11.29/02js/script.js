// 정의
// 스크롤의 위치에 따라 h1 태그에 담겨야 하는 텍스트 값이 변경되어야 함
const h1 = document.querySelector("h1");
// 스크롤의 위치에 따라 상단 bar의 채움 정도가 변경되어야 함
const progressBar = document.querySelector(".bar");

// 스크롤을 내리게 되었을 때, 위치값
let scrollNum = 0;

// 현재 내가 작업중인 전체 문서의 높이값
let documentHeight = 0;

// 전체문서의 높이 값 대비 스크롤의 위치 값 %
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

// scrollHeight: 스크롤이 가능한 영역의 전체 높이
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  console.log(scrollNum);
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + "%";
  h1.innerText = per;
  progressBar.style.width = per;
});
