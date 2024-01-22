$(function () {
  // is는 안에 정의된 요소가 속성 상태가 일치하면 true아니면 flase
  // 내용1 과
  let result_1 = $("inner_1 p").eq(0).is("visible");
  console.log(result_1);
  let result_2 = $("inner_1 p").eq(1).is("visible");
  console.log(result_2);

  let result_3 = $("#chk1").is("checked");
  console.log(result_3);
});
