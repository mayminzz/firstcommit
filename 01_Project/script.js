$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active")
    }
  });
});
