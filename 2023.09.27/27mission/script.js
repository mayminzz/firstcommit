jQuery(function($) {
  $(".sort").click(function() {
    $(".target-list").stop().slideToggle("fast");
  });
  $(".menu_toggle_btn").click(function() {
    $(".gnb-list").stop().slideToggle("fast");
  });
});

