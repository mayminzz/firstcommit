import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  // console.log(register("todo"));
  console.log(watch());
  const onValid = (data: any) => {
    if (data.password !== data.password1) {
      setError(
        "PassWord1",
        { message: "password is not the same..." },
        { shouldFocus: true }
      );
    }
    setValue("email", "");
  };
  console.log(errors);
  // console.log(formState.errors);
  // const [todo, setTodo] = useState("");
  // //인자값이 들어오는 아이의 타입을 정의해야함타임 스크립트이기 때문에
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     //값을 찾아올때에는 currentTarget으로 찾아온다
  //     currentTarget: { value },
  //   } = event;
  //   setTodo(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(todo);
  // };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* register는 키값이 있어야함 */}
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/gm,
              message: "Only naver.com email allowed",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message as string} </span>
        <input
          {...register("firstName", {
            required: true,
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", {
            required: "Write here",
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>

        <input
          {...register("userName", { required: true })}
          placeholder="User Name"
        />
        <span>{errors?.userName?.message as string}</span>

        <input
          {...register("password", {
            required: "password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message as string}</span>

        <input
          {...register("password1", {
            //required가 있으면 기본으로 true값이다.
            required: "password is required",
            minLength: {
              value: 5,
              message: "your password is to short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.passWord1?.message as string}</span>
        <span>{errors?.passWord1?.message as string}</span>
        <button>add</button>
      </form>
    </div>
  );
};

export default TodoList;
