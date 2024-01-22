$(function () {
  let arr1 = ["서울", "대전", "부산", "청주"];
  let arr2 = ["한국", "미국", "일본", "중국"];
  let obj = {
    name: "park",
    area: "서울",
  };

  let idxNum = $.inArray("부산", arr1);
  console.log(idxNum);

  let okArry1 = $.isArray(arr1);
  console.log(okArry1);

  let okArry2 = $.isArray(obj);
  console.log(okArry2);

  $.merge(arr2, arr1);
  console.log(arr2);

  let idxNum2 = $("li").index($("#list3"));
  console.log(idxNum2);
});
