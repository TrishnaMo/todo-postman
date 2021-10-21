import React from "react";

export interface TodoInfo {
  id: number;
  title: string;
}

export interface Props {
  todo: TodoInfo;
  onDelete: (todo: TodoInfo) => void;
}

const Todo: React.FC<Props> = ({ todo, onDelete }) => {
  return (
    <>
      <div>{todo.title}</div>
      <button type="submit" onClick={() => onDelete(todo)}>
        -
      </button>
    </>
  );
};
export default Todo;
