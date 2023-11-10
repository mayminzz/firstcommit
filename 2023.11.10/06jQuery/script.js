// 컨텐츠 탐색 선택자
$(function () {
  $("#inner_1 p:contains(내용1)").css({
    background: "#ff0",
  });

  $("#inner_1 p:has(strong)").css({
    background: "#0ff",
  });

  $("#outer_wrap").contents().css({
    border: "1px dashed #f00",
  });

  $("#inner_2 p").not(":first").css({
    background: "#0f0",
  });

  // 인덱스 2번을 찾아오기
  // 필터링 잡히기 전 해당 순수 요소의 스타일 정의
  $("#inner_2 p").eq(2).end().css({
    color: "#f00"
  })
});
