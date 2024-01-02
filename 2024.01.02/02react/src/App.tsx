import React from "react";
import "./App.css";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./Atoms";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Board from "./conponents/Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;
const Boards = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const ondragEnd = ({ destination, source, draggableId }: DropResult) => {
    console.log(destination, source);
    if (!destination) return;
    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination.index, 0, draggableId);
    //   return copyToDos;
    // });
  };
  return (
    <DragDropContext onDragEnd={ondragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
