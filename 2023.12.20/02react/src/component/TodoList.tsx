import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface props {
  todoList: Array<string>;
  // 제네릭형식의 타입변수는 string을 가진 배열
  onDelete?: (todo: string) => void;
}

const TodoList = ({ todoList, onDelete }: props) => {
  return (
    <Container>
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
