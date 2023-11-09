$(function () {
  // // li중에 첫번째 요소
  // $("#menu li:first").css({
  //   background: "#ff0",
  // });
  // // li중에 마지막 요소
  // $("#menu li:last").css({
  //   background: "#0ff",
  // });

  // // 짝수 0번째부터
  // $("#menu li:even").css({
  //   background:"pink"
  // })
  // // 홀수 1번째부터
  // $("#menu li:odd").css({
  //   background:"crimson"
  // })

  $("#menu li").eq(2).css({
    background: "crimson",
  });
  $("#menu li:lt(2)").css({
    background: "#0ff",
  });
  $("#menu li:gt(2)").css({
    background: "#f0f",
  });
});
