const btns = document.querySelectorAll("span");
// 변수를 선언해주어야 하기 때문에 let을 써주어야 함
for (let btn of btns) {
  btn.addEventListener("click", function () {
    this.parentNode.remove(this);
  });
}


