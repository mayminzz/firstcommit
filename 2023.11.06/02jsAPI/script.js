// 내가 무엇을 하고자 하는가?
// 내가 그 무엇인가를 하기 위해서 필요한 것은 무엇인가?

// 프로그램이 작동되는 프로세스
// 1) 사용자가 input태그에 오늘 할 일을 입력한다.
// 2) 사용자가 입력한 값이 "제출" 버튼을 클릭했을 대, 특정공간에 저장된다.
// 3) 그 저장된 공간에 담겨있는 사용자의 입력값이 "todo_list"에 출력되어야 한다.

const todoInput = document.querySelector("#todo_input");
const addButton = document.querySelector("#add_button");
const todoList = document.querySelector("#todo_list");

const saveTolocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify("todos"));
};

const addTodo = (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo_content");
  newTodo.innerText = todoInput.value;
  // console.log(newTodo);
  newDiv.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";
  completeButton.classList.add("complete_button");
  newDiv.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  completeButton.classList.add("delete_button");
  newDiv.appendChild(deleteButton);

  todoList.appendChild(newDiv);
  saveTolocal(todoInput.value);
  todoInput.value = "";
};

const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo_content");
    newTodo.innerText = todo;
    // console.log(newTodo);
    newDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.classList.add("complete_button");
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    completeButton.classList.add("delete_button");
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);
    todoInput.value = "";
  });
};

const removeLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const index = todos.indexOf(todo.children[0].innerText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const manageTodo = (e) => {
  const whichButton = e.target.classList[0];
  if (whichButton === "complete+button") {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle("complete");
  } else if (whichButton === "delet_button") {
    const todo = e.target.parentElement;
    // 로컬 스토리지 안에 있는 걸 삭제하는
    removeLocal(todo);
    todo.remove();
  }
};

// 문서 객체모델 안에 있는걸 다 읽었으면
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", manageTodo);
