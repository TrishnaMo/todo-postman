import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const TodoForm: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { addTodo } = useContext(TodoContext);

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
    addTodo(newTodo);
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
