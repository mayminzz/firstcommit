import React, { useState, useRef } from "react";
import "./TodoEditor.css";

export const TodoEditor = ({ onCreate }) => {
  const [contents, setCotents] = useState("");
  const inputRef = useRef();
  const onChangeContents = (e) => {
    setCotents(e.target.value);
  };
  const onSubmit = () => {
    if (!contents) {
      inputRef.current.focus();
      return;
    }
    onCreate(contents);
    setCotents("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="Todoeditor">
      <h4>새로운 Todo 작성하기🖋</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={contents}
          onChange={onChangeContents}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo...."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;