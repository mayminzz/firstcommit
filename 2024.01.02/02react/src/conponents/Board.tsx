import React, { useRef } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../Atoms";
import { useSetRecoilState } from "recoil";

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

const Wrapper = styled.div`
  padding: 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 600px;
  background: ${(props) => props.theme.boardColor};
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
    padding: 14px 0;
    border: none;
    display: block;
    margin-bottom: 10px;
  }
`;
const Area = styled.div<IAreaProps>`
  flex-grow: 1;
  background: ${(props) =>
    props.isDraggingOver
      ? "#f25a46"
      : props.isDraggingFromThis
      ? "#ba4bd6"
      : "#46adf2"};
  border-radius: 5px;
  transition: background 0.3s linear;
  padding: 10px;
`;

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          // todo라는 키를 가지고 있는 값으로 들어올것이고
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
            {/* 전체 높이값을 중간요소가 나가더라도 전체 height값이 무너지지 않도록 해주는 문법이다 */}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
