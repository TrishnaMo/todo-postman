import React, { useState, useEffect } from "react";
import Todo from "../Todo/index";
import { TodoInfo as TodoProps } from "../Todo/index";

interface Props {
  todoList: TodoProps[];
  onDelete: (todo: TodoProps) => void;
}

const TodoList: React.FC<Props> = ({ todoList, onDelete }) => {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <div data-testid={todo.id} key={todo.id}>
            <Todo todo={todo} onDelete={onDelete} />
          </div>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
