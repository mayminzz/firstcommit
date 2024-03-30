// 0. todo의 값이 입력된 input 태그에 대한 공간을 정의 o
// 1. 사용자가 클릭할 버튼의 공간 정의 o
// 2. 사용자가 입력한 todo값 찾아오기
// 3. 사용자가 등록버튼을 클릭했을 때 이벤트 발생시키기
// 4. 사용자가 입력한 값을 출력시킬수 있는 공간에 대한 정의
// 5. ul태그안에 사용자의 값을 넣어줄 수 있는 li 태그 생성
// 6. 사용자가 입력한 todo값을 ul태그 안에 출력해주기
// 7. web api 안에 localstorage 공간을 활용해서 todo 값을 저장
// 8. localstorage에 저장된 값을 찾아서 ul태그에 출력해주기
// 9. 완료버튼을 클릭했을때 todo의 값을 localstorage & ul태그 안에서 삭제해주기

const input = document.querySelector("#todo");
const button = document.querySelector("#button");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  // localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    delBtn.innerText = "삭제";
    delBtn.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);
    li.id = todo.id;
  }
};
const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  userTodos.forEach((todo) => {
    addItem(todo);
  });

  todos = userTodos;
};

init();

button.addEventListener("click", handler);
