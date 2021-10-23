import React, { useContext, useEffect } from "react";
import Todo from "../Todo/index";
import { TodoContext } from "../TodoContext/TodoContext";


const TodoList: React.FC = () => {
  useEffect(() => {
    console.log("Loading Todolist: consumer")
  }, [])
  const {todos} = useContext(TodoContext)
  useEffect(() => {
    console.log("Refresh Todolist: consumer")
  }, [todos])
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div data-testid={todo.id} key={todo.id}>
            <Todo todo={todo} />
          </div>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
