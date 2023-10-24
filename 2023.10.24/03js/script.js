const elements = document.querySelectorAll("*");
// console.log(elements)

// 12개의 노트중에 하나씩 끌어내서 반복문을 돌리려고 한다.
for (let element of elements) {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
}
