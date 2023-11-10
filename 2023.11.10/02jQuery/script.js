$(function () {
  let arr1 = [
    { area: "서울", name: "Kwon" },
    { area: "부산", name: "Lee" },
    { area: "전주", name: "Yoo" },
    { area: "강원", name: "Kim" },
  ];
  console.log(arr1);

  let arr2 = $.map(arr1, function (a, b) {
    if (a.area == "서울") {
      return a;
    }
  });
  console.log(arr2);

  let arr3 = $.grep(arr1, function (a, b) {
    if (a.area == "서울") {
      return true;
    } else {
      return false;
    }
  });
  console.log(arr3);
});
