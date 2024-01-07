//정의해야하는 요소들
// 1. 버튼을 눌렀을 때 슬라이드들을 감싸고 있는 컨테이너가 움직여야함
// 2. 버튼 정의
// 3. 각자의 슬라이드 아이템들의 높이가 다를 때 맞춰줄수 있는 방법
const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = sliderContainer.querySelectorAll(".slide");
const slideCount = slides.length;
const pager = document.querySelector(".pager");

let currentIndex = 0;
let topHeight = 0;
// 직접 만들어서 pageHTML에 넣겠다
let pagerHTML = "";

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// 개별 슬라이드 컨텐츠 높이값 지정함수
const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();
// offsetHeight 화면 위에서 부터 아래값을 의미

// 개별 슬라이드 가로 배열
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  pagerHTML += `<span data-idx="${i}">${i + 1}</span>`;
  pager.innerHTML = pagerHTML;
}
const pagerBtn = document.querySelectorAll("span");

// 버튼기능을 업데이트하는 함수
const upDateNav = () => {
  // 인덱스가 처음인 경우
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
  // 인덱스가 마지막인 경우
  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

// slide 이동 함수 정의
const goToSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  // upDateNav();
  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
  }
  // 여기서 i는 매개변수 i
  pagerBtn[i].classList.add("active");
};

// 버튼 클릭시 이벤트
navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    // 현재 인덱스 값이 처음이 아닌 경우
    goToSlide(currentIndex - 1);
  } else {
    // 현재 인덱스 값이 처음인 경우
    goToSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    // 현재 인덱스 값이 마지막이 아닌 경우
    goToSlide(currentIndex + 1);
  } else {
    // 현재 인덱스 값이 마지막인 경우
    goToSlide(0);
  }
});

// pager 버튼 클릭으로 슬라이드 이동하기
for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    // idx 속성값을 사용해서 페이지 이동
    // console.log(e.target);
    // let pagerNum = e.target.getAttribute("data-idx");
    // goToSlide(pagerNum);

    // 이벤트 요소의 텍스트 값을 활용해서 페이지 이동
    console.log(e.target.innerText);
    let pagerNum = e.target.innerText - 1;
    goToSlide(pagerNum);
  });
}

// 자동 슬라이드 함수
let timer = undefined;
const startAutoSlide = () => {
  timer = setInterval(() => {
    let nextIdx = (currentIndex + 1) % slideCount;
    goToSlide(nextIdx);
  }, 4000);
};
startAutoSlide();

// 마우스 오버 및 아웃 시, 슬라이드 액션 이벤트
sliderWrapper.addEventListener("mouseover", () => {
  clearInterval(timer);
});
sliderWrapper.addEventListener("mouseleave", () => {
  startAutoSlide(timer);
});

// 웹 브라우저 화면이 처음 시작될 때를 정의
goToSlide(0);
