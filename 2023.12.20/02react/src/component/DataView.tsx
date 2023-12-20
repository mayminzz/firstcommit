import React from "react";
import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50vh;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;

interface props {
  todoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const DataView = ({ todoList, onDelete }: props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList todoList={todoList} onDelete={onDelete}/>
    </Container>
  );
};

export default DataView;
