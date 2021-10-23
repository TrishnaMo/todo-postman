import React, { useState, useEffect } from "react";
import TodoForm from "../TodoForm/index";
import TodoList from "../TodoList/index";
import { TodoInfo as TodoProps } from "../Todo/index";
import { TodoContext, TodoStore } from "../TodoContext/TodoContext";

const HomeScreen = () => {
  const [prevTodos, setPrevTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    console.log("Loading Homescreen - provider component")
  }, [])

  const addTodo = (todo: Omit<TodoProps, "id">) => {
    const newTodo = {
      id: prevTodos.length + 1,
      ...todo,
    };
    setPrevTodos([newTodo, ...prevTodos]);
  };

  const deleteTodo = (todo: TodoProps) => {
    const filteredTodos = prevTodos.filter(
      (currentTodo) => currentTodo.id !== todo.id
    );
    setPrevTodos(filteredTodos);
  };

  const todoStore: TodoStore = {
    todos: prevTodos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
  };

  return (
    <TodoContext.Provider value={todoStore}>
      <TodoForm/>
      <TodoList />
    </TodoContext.Provider>
  );
};
export default HomeScreen;
