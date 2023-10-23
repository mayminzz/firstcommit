const form = document.querySelector("form");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelector("ul");

let todos = [];
// 입력값을 li로 저장하는 함수
const addItem = (todo) => {
  if(todos !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
} 
const handler = (e) => {
  e.preventDefault();
  const todo = {
    id:Date.now(),
    text: input.value,
  }
  todos.push(todo);
  addItem(todo);
  save();
  input.value="";
}


form.addEventListener("submit", handler);