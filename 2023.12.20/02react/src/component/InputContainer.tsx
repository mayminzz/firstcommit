import React, {useState} from "react";
import ShowInputButton from "./ShowInputButton";
import TodoInput from "./TodoInput";


interface props {
  todo: string;
  setTodo: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const InputContainer = ({todo, setTodo, onAdd}: props) => {
  const [showTodoInput, setShowTodoInput] = useState(true);
  return (
    <div>
      {showTodoInput && (
        <TodoInput todo={todo} setTodo={setTodo} onAdd={onAdd} />
      )}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </div>
  );
};

export default InputContainer;
