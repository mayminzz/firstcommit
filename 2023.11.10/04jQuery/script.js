$(function () {
  $("#wrap a[target]").css({
    color: "crimson",
  });
  $("#wrap a[href^=https]").css({
    color: "#933",
  });
  $("#wrap a[href$=net").css({
    color: "#368",
  });
  // 단하나라도 google이라는 글씨가있다면
  $("#wrap a[href*=google]").css({
    color: "#000",
  });
  $("#member_f :text").css({
    background: "#ff0",
  });
  $("#member_f :password").css({
    background: "#0ff",
  });
});
