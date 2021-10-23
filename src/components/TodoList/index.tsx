import React, { useContext } from "react";
import Todo from "../Todo/index";
import { TodoContext } from "../TodoContext";

const TodoList: React.FC = () => {
  const value = useContext(TodoContext);
  return (
    <>
      <ul>
        {value.todos.map((todo) => (
          <div data-testid={todo.id} key={todo.id}>
            <Todo todo={todo} />
          </div>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
