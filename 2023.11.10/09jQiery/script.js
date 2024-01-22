$(function () {
  let result_1 = $("#sec_1").html();
  $("#sec_1 p").html('<a href="#">Text1</a>');


  // 이거 프로젝트에 쓰자 민주야 글씨를 이모티콘으로 바꿔보자
  let result_2 = $("#sec_2").text();
  console.log(result_2);
  $("#sec_2 h2").text("text()");
});
