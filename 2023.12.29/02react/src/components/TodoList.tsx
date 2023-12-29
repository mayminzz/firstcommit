import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";
import { toDoSelector, categoryState, Categories } from "./Atoms";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  // 선택되어진 select를 차입을 정의하겠다
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>To Do's</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo}/>
      ))}
    </div>
  );
};

export default TodoList;
