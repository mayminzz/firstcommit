$("nav a ").click(function (e) {
  $.scrollTo(this.hash || 0, 1500);
  e.preventDefault();
});
// e 이벤트라는 매개변수
// preventDefault 기본속성을 무력화 시키는 아이
// 해당요소의 href 해쉬까지 에이가 클릭되었을때 해쉬까지 스크롤을 시킨다. || : or 어떠한 위치변화도 주지 않을 거다 1500은 시간 밀리초 1.5초
