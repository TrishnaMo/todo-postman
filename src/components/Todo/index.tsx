import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export interface TodoInfo {
  id: number;
  title: string;
}

export interface Props {
  todo: TodoInfo;
}

const Todo: React.FC<Props> = ({ todo }) => {
  const value = useContext(TodoContext);
  return (
    <>
      <div>{todo.title}</div>
      <button type="submit" onClick={() => value.deleteTodo(todo)}>
        -
      </button>
    </>
  );
};
export default Todo;
