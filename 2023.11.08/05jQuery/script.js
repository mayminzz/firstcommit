// $(function () {
//   $("#list_1").parent().css("border", "2px dashed crimson");
//   $("#wrap > li").css("color", "green");
// });

// $(function () {
//   $("#wrap > h1").css("border", "2px dashed crimson");
//   $("#wrap > section").children().css({
//     background: "yellow",
//     border: "2px solid #00f",
//   });
// });

// 함수
// $(function () {
//   let style_1 = {
//     background: "#0ff",
//     border: "2px solid #f00",
//   };
//   let style_2 = {
//     background: "#ff0",
//     border: "2px dashed #f00",
//   };
//   $(".txt").prev().css(style_1);
//   // 내용3 구조선택자
//   $(".txt + p").css(style_2);
//   $(".txt").next().next().css(style_2);
// });

$(function () {
  let style_1 = {
    background: "#0ff",
    border: "2px solid #f00",
  };
  let style_2 = {
    background: "#ff0",
    border: "2px dashed #f00",
  };
  // $(".txt").prevAll().css(style_1);
  // $(".txt").nextAll().css(style_2);
  // 모든 형제요소
  $(".txt").siblings().css(style_1);
});
