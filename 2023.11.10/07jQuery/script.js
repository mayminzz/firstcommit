$(function () {
  //
  $("#inner_1").find(".txt1").css({
    background: "crimson",
  });

  $("#inner_1 p").filter(".txt2").css({
    background: "royalblue",
  });

  $("#inner_2 p")
    .filter(function (i, o) {
      console.log(i);
      return i % 2 == 0;
    })
    .css({ background: "#0ff" });
});
