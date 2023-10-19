/*
1. 시간을 출력할 공간에 대한 정의
2.분을 출력할 공간에 대한 정의
3. 초를 출력할 공간에 대한 정의
4. 시간, 분, 초를 출력할 공간에 실제 값을 적용*/

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let clock = () => {
  let now = new Date();
  hour.innerHTML = now.getHours();
  min.innerHTML = now.getMinutes();
  sec.innerHTML = now.getSeconds();
};

// (콜백함수가 와야함, 해당 콜백함수가 얼마 간격으로 실행되게 할지에 대한 시간)
setInterval(clock, 1000);
