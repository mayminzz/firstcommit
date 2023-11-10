$(function () {
  $("#p1").addClass("aqua");
  $("#p2").removeClass("red");
  $("#p3").toggleClass("green");
  $("#p4").toggleClass("green");
  // p6안에 p5라는 아이디가 yellow라는 클래스값을 가지고 있는지 확인해서 갖고있으면 true 없으면 false
  $("#p6").text($("#p5").hasClass("yellow"));
});
