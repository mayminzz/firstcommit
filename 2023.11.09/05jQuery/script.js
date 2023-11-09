$(function () {
  // $("li:first-of-type").css({
  //   background: "crimson",
  // });
  // $("li:last-of-type").css({
  //   background: "royalblue",
  // });

  // $("#menu1 li:nth-child(1)").css({
  //   background: "crimson",
  // });
  // $("#menu1 li:nth-child(2n)").css({
  //   border: "2px dashed #678",
  // });
  // // 밑에서부터 2번째
  // $("#menu2 li:nth-last-child(2)").css({
  //   background: "#368",
  // });
  // slice 매개변수 2개면 첫번째부터 두번째 매개변수 직전까지
  // 한개면 첫번째 매개변수부터 끝까지
  $("#menu1 li").slice(1).css({
    background: "#ff0",
  });
  $("li:only-child").css({
    background: "#0ff",
  });
});
