import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List⏰</h4>
      <input className="searchbar" placeholder="검색어를 입력해주세요" />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem {...it}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
