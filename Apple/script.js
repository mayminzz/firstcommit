
$(".trigger").click(function () {
  $(".gnb_list").stop().slideToggle("fast");
  $(this).toggleClass("active");
  $(".gnb_list").toggleClass("on");
  $(".header").toggleClass("on");
  $(".mobile").toggleClass("off");
});
