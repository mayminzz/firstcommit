// $(document).ready(function () {
//   $("*").css("border", "1px solid #00f");
// });

// => 약식
// 직접선택자
$(function () {
  $("*").css("border", "1px solid #222");
  $("#tit").css("background", "#ff0").css("color", "#00f");
  $(".tit2").css("background", "#f0f").css("border", "2px dashed #000");
  $("h3").css("background", "#0ff");
  $(".tit3, h4").css("color", "#f00");
  // 존속선택자
  $("h2.tit4").css("background", "gray").css("color", "#fff");
});



