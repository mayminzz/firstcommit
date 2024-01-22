import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;
const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  font-weight: normal;
  color: #000;
`;
interface props {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
