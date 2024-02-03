import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "./Atoms";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  text-align: center;
`;
const Input = styled.input`
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background: #000;
  font-weight: 600;
  color: #fff;
  transition: 0.3s;
  border-radius: 1px solid transperant;
  &:hover {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a To Do"
      />
      <Button>Add</Button>
    </Form>
  );
};

export default CreateToDo;
