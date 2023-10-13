$(".navi li").mouseenter(function () {
  let changeImage = $(this).attr("data-image");
  $("photo").css({background: `url(${changeImage})`})
});
$(".navi li").mouseleave(function () {
  $(".photo").css({ background: "" });
  // 본연의 이미지로 돌아가겠다 적용해준 이미지로
});
