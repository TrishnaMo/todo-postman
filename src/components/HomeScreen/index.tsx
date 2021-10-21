import React, { useState, useEffect } from "react";
import TodoForm from "../TodoForm/index";
import TodoList from "../TodoList/index";
import { TodoInfo as TodoProps } from "../Todo/index";

const HomeScreen = () => {
  const [prevTodos, setPrevTodos] = useState<TodoProps[]>([]);


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
 

  return (
    <>
      <TodoForm onAdd={addTodo}/>
     <TodoList todoList={prevTodos} onDelete={deleteTodo} />
      
    </>
  );
};
export default HomeScreen;
