import React from "react";
import "./TodoItem.css";

export const TodoItem = ({ id, isDone, contents, createdDate }) => {
  return (
    <div className="Todoitem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{contents}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">삭제</div>
    </div>
  );
};

export default TodoItem;