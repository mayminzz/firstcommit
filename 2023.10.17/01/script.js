$(".title").click(function () {
  $(this).toggleCalss("active");
  $(this).next().toggleCalss("active");
  let dataImage = $(this).attr("data-image");
  $(".image img").attr("src", dataImage);
});
// .next() 다음 형제 요소
//  속성을 불러올때는 attr
// 속성을 변경할때는 src속성
