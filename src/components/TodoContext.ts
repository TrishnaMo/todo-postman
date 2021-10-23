import { createContext } from "react";
import { TodoInfo } from "../components/Todo/index";

export interface TodoContextType {
  todos: TodoInfo[];
  addTodo: (todo: Omit<TodoInfo, "id">) => void;
  deleteTodo: (todo: TodoInfo) => void;
}

const todoStore: TodoContextType = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
};

export const TodoContext = createContext(todoStore);
