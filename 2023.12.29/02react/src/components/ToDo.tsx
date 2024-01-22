import React from "react";
import { IToDo, toDoState, Categories } from "./Atoms";
import { useSetRecoilState } from "recoil";

// [
//   {
//       "id": 1703816296437,
//       "text": "5",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816295707,
//       "text": "4",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816295416,
//       "text": "3",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816295105,
//       "text": "2",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816294694,
//       "text": "1",
//       "category": "TO_DO"
//   }
// ]

const ToDo = ({ id, text, category }: IToDo) => {
  const SetToDos = useSetRecoilState(toDoState);
  //리액트 안에 마우스 이벤트 요소 차입 설정
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("I wana go", event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    SetToDos((oldToDos) => {
      // 클릭한 요소에 대한 인덱스값 찾아오기
      const TargetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[TargetIndex];
      const newToDo = { id, text, category: name as any };
      console.log("replace To Do index", TargetIndex, "with", newToDo);
      return [
        ...oldToDos.slice(0, TargetIndex),
        newToDo,
        ...oldToDos.slice(TargetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name="TODO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Categories.DONE && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
