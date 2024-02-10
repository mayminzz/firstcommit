const title = document.querySelector("#title");
const author = document.querySelector("#author");
const saveBtn = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newLi = document.createElement("li");
  newLi.innerHTML = `${title.value} - ${author.value} <button class="delBtn">삭제</button>`;

  bookList.appendChild(newLi);

  title.value = "";
  author.value = "";

  const delBtns = document.querySelectorAll(".delBtn");

  for (let delBtn of delBtns) {
    delBtn.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});

//이벤트가 작동해야지만 작동하는 value 이벤트 안에서만 작동한다!!
//밖에 쓰게 되면 콘솔창에 찍히지만 값을 찾아오지는 못한다.
