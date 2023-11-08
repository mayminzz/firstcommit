// $(function () {
//   let style_1 = {
//     background: "#0ff",
//     border: "2px solid crimson",
//   };
//   // 선택한 요소의 이전까지
//   $(".txt3").prevUntil(".title").css(style_1);
//   $(".txt3").nextUntil(".txt6").css(style_1);

// });

$(function () {
  // 부모요소에 형제들까지 싹다
  $(".txt1").parents().css({
    border: "2px solid crimson",
  });
  $(".txt2").parents("div").css({
    color: "#00f",
  });
});

