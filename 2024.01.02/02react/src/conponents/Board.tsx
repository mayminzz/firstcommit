import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 600px;
  background: ${(props) => props.theme.boardColor};
`;
const Title = styled.h2`
  font-size: 20px;
  text-align:center;
  font-weight: 600;
  margin-bottom: 10px;
`

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
            {/* 전체 높이값을 중간요소가 나가더라도 전체 height값이 무너지지 않도록 해주는 문법이다 */}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
