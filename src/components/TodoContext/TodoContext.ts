import { createContext } from "react";
import { TodoInfo } from "../Todo";

export interface TodoStore {
  todos: TodoInfo[];
  addTodo: (todo: Omit<TodoInfo, "id">) => void;
  deleteTodo: (todo: TodoInfo) => void;
}

const todoStore: TodoStore = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
};

export const TodoContext = createContext<TodoStore>(todoStore);
