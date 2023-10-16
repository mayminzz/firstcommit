$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".trigger").addClass("active");
    } else {
      $(".gnb").removeClass("active")
    }
  });
});
