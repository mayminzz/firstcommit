import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "./Atoms";
import styled from "styled-components";

const Li = styled.li`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #000;
  span {
    display: inline-block;
    margin-top: 7px;
  }
`;

const Button = styled.button`
  float: right;
  margin-right: 10px;
  border: none;
  background: #000;
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.3s;
  border: 1px solid transparent;
  &:hover {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("I wanna go ", event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name as any };
      console.log("replace To Do in index", targetIndex, "with", newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <Button name={Categories.DOING} onClick={onClick}>
          Doing
        </Button>
      )}
      {category !== Categories.TO_DO && (
        <Button name={Categories.TO_DO} onClick={onClick}>
          ToDo
        </Button>
      )}
      {category !== Categories.DONE && (
        <Button name={Categories.DONE} onClick={onClick}>
          Done
        </Button>
      )}
    </Li>
  );
};

export default ToDo;
