$(function () {
  let result_1 = $("#user_name").val();
  console.log(result_1);

  $("#user_id").val("javascript");

  // 원본속성값을 찾아라?
  let result_2 = $("user_id").prop("defaultValue");
  console.log(result_2);
});
