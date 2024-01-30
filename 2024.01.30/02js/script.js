// 0. 버튼에 대한 정의를 해줘야 함
// > 버튼이라는 값을 html에서 찾아와서 어떤 변수에 담아야 한다.

// 1. 사용자가 버튼을 클릭한다.
// > 버튼에 클릭 이벤트 부여 = addEventListener() 적용

// 2. 사용자가 버튼을 클릭하면, 컴퓨터에게 커튼이 클릭되었다는 사실을 알려준다!
// > 웹 브라우저 화면에 출력할 요소를 띄워줘야한다.
// > 띄워줄 화면(*container)을 html에서 찾아와서 어떤 변숭 담아야 한다.

// 3. 컴퓨터는 버튼이 클릭되었다는 사실을 인지하면, 방금 display : none 을 설정했던 container라는 클래스에 다시 display : flex를 적용시킨다.
// > JS에서 CSS스타일 적용시키는 방법
// > 객체 뒤에 style.dislay = flex 적용

// 4. 사용자가 display : flex가 적용된 창 내부에 있는 닫기 버튼을 클릭한다면, container에 다시 display : none을 적용한다.
// > 객체(*html 찾아온 DOM요소) 뒤에 style.display = none 적용

// 5. display : none이 적용된 container는 화면에서 사라진다.

const openBtn = document.querySelector(".open");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".close");

// openBtn.addEventListener("click", () => {
//   container.classList.add("show");
// });

// closeBtn.addEventListener("click", () => {
//   container.classList.remove("show");
// });
const display = () => {
  container.style.display = "flex";
  openBtn.style.display = "none";
};
const disappear = () => {
  container.style.display = "none";
  openBtn.style.display = "block";
};

openBtn.addEventListener("click", display);
closeBtn.addEventListener("click", disappear);
