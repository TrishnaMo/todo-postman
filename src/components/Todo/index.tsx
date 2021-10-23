import React, { useContext, useEffect } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export interface TodoInfo {
  id: number;
  title: string;
}

export interface Props {
  todo: TodoInfo;
}

const Todo: React.FC<Props> = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  useEffect(() => {
    console.log("Loading Todo: consumer");
  }, []);

  return (
    <>
      <div>{todo.title}</div>
      <button type="submit" onClick={() => deleteTodo(todo)}>
        -
      </button>
    </>
  );
};
export default Todo;
