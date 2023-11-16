/*버튼을 누를 때 컨테이너 들이 움직여야 한다
3가지는 필수로 와야함 */
// 정의해야하는 요소들!!!
const sliderWrapper = document.querySelector(".b3-center");
const sliderContainer = document.querySelector(".br-slidercon");
const slides = sliderContainer.querySelectorAll(".br-slide");
const slideCount = slides.length;

let currentIndex = 0;

const navPrev = document.querySelector("#brleft");
console.log(navPrev);
const navNext = document.querySelector("#brright");

// 슬라이드 이동함수
const goToslide = (i) => {
  // 이동은 본인 너비값만큼 100%이동하는 것
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated"); // 스무스하게 움직이게 하려고
  currentIndex = i;
  // updateNav(); // // 가장 첫 인덱,마지막인덱 작동X

  // 버튼 클릭 시, 이벤트
  navPrev.addEventListener("click", (e) => {
    e.preventDefault(); //   // 외부 페이지 빠지지 않게함
    if (currentIndex > 0) {
      // 현재 인덱스값이 처음이 아닌 경우
      goToslide(currentIndex - 1); // 클릭시 이동하게하기 현재index값에서 1-빼
    } else {
      // 현재 인덱스값이 처음인 경우
      goToslide(slideCount - 1);
    }
  });

  navNext.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex < slideCount - 1) {
      // 현재 인덱스값이 마지막이 아닌 경우
      goToslide(currentIndex + 1);
    } else {
      // 현재 인덱스값이 마지막이 아닌 경우
      goToslide(0);
    }
  });
};
// 자동슬라이드 함수
let timer = undefined;
const startAutoSlide = () => {
  timer = setInterval(() => {
    let nextIdx = (currentIndex + 1) % slideCount;
    goToslide(nextIdx);
  }, 3500);
};
startAutoSlide();

// 마우스오버 및 아웃시, 슬라이드 액션 이벤트
sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
sliderWrapper.addEventListener("mouseleave", () => {
  startAutoSlide();
});
// 웹 브라우저 화면이 처음 시작될 때
goToslide(0); // 웹브라우저 화면이 처음 실행될 때 첫사진 이전버튼 작동x
