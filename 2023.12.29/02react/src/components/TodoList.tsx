import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import CreateToDo from "./CreateTodo";
import ToDo from "./ToDo";
import { toDoSelector, categoryState, Categories } from "./Atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;
const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
`;
const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
`;
const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px 10px;
`;
const Option = styled.option`

`;

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Wrapper>
      <H1>해야할 일을 적어두고 활용해보세요😃</H1>
      <Container>
        <Select value={category} onInput={onInput}>
          <Option value={Categories.TO_DO}>ToDo</Option>
          <Option value={Categories.DOING}>Doing</Option>
          <Option value={Categories.DONE}>Done</Option>
        </Select>
        <CreateToDo />
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default TodoList;
