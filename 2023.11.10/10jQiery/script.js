$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  // src속성만 변경시켜주라
  $("#sec_1 img").attr({
    src: srcVal.replace("img1.jpg", "img2.jpg"),
    width: 200,
  });
});
