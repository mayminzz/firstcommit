// 심해 싶이를 나태내주는 텍스트 공간
const depthWrap = document.querySelector(".depthWrap");
// 스크롤 위치에 따라 이동해야 하는 바 정의
const progressBar = document.querySelector(".bar");
// 스크롤 위치에 따라 이동해야 하는 잠수함의 정의
const submarine = document.querySelector(".submarine");
// 스크롤 위치에 따라 이동해야하는 문어 정의
const octo = document.querySelector(".octo");
// 현재스크롤 위치값
let scrollNum = 0;
// 현재 문서의 길이값
let documentHeight = 0;
// 문서의 총 길이 대비, 스크롤 위치 값의 %
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

// scrollHeight: 스크롤이 가능한 영역의 전체 높이
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  console.log(scrollNum);
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight);
  depthWrap.querySelector("span").innerText = scrollNum.toFixed(0);
  progressBar.style.width = per + "%";
  submarine.style.transform = `translateX(${per}%)`;
  octo.style.transform = `translateY(${-per / 2}%)`;
});
