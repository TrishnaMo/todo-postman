import React, { ChangeEvent, FormEvent, useState } from "react";
import { TodoInfo as TodoProps } from "../Todo/index";

interface Props {
  onAdd: (todo: Omit<TodoProps, "id">) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const todoText = event.target.value;
    setTodo(todoText);
    const isTodoEmpty = todoText.trim() === "";
    setIsDisabled(isTodoEmpty);
  };

  const clickHandler = (event: FormEvent) => {
    event.preventDefault();
    const newTodo = {
      title: todo,
    };
    onAdd(newTodo);
    setTodo("");
    setIsDisabled(true);
  };

  return (
    <>
      <form onSubmit={clickHandler}>
        <input
          type="text"
          value={todo}
          placeholder="Enter your Todos"
          onChange={changeHandler}
        />
        <button type="submit" disabled={isDisabled}>
          +
        </button>
      </form>
    </>
  );
};
export default TodoForm;
