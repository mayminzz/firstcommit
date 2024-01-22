const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `${title.value} - ${author.value} <span class="delButton">삭제</span>`;
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  }
});

function removeItem () {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
}
/*1. 각자 필요한 요소 불러와 정의
2. 저장하기를 눌렀을 때 제목과 저자에 들어간 값이 하단에 보여지게 한다. 
3. 삭제버튼을 누르면 삭제되도록 한다.
4. */

