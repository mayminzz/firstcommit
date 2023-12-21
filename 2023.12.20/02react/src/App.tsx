import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DataView from "./component/DataView";
import TodoInput from "./component/TodoInput";
import ShowInputButton from "./component/ShowInputButton";
import Button from "./component/Button";
import InputContainer from "./component/InputContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #eee;
`;

const mockup = ["리액트 공부하기", "운동하기", " 밥 먹기"];

function App() {
  const [todoList, setTodoList] = useState(mockup);
  const [todo, setTodo] = useState("");

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };
  const onAdd = (todo: string) => {
    if (todo === "") return;
    setTodoList([...todoList, todo]);
    setTodo("");
  };
  return (
    <Container>
      <DataView todoList={todoList} onDelete={onDelete} />
      <InputContainer todo={todo} setTodo={setTodo} onAdd={onAdd} />
    </Container>
  );
}

export default App;
