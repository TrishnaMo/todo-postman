import React, { useState } from "react";
import TodoForm from "../TodoForm/index";
import TodoList from "../TodoList/index";
import { TodoInfo as TodoProps } from "../Todo/index";
import { TodoContext } from "../TodoContext";
import { TodoContextType } from "../TodoContext";

const HomeScreen = () => {
  const [prevTodos, setPrevTodos] = useState<TodoProps[]>([]);

  const todoStore: TodoContextType = {
    todos: prevTodos,
    addTodo: (todo: Omit<TodoProps, "id">) => {
      const newTodo = {
        id: prevTodos.length + 1,
        ...todo,
      };
      setPrevTodos([newTodo, ...prevTodos]);
    },
    deleteTodo: (todo: TodoProps) => {
      const filteredTodos = prevTodos.filter(
        (currentTodo) => currentTodo.id !== todo.id
      );
      setPrevTodos(filteredTodos);
    },
  };

  return (
    <>
      <TodoContext.Provider value={todoStore}>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
};
export default HomeScreen;
