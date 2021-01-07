import React, { useReducer } from "react";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoReducer, Context } from "./store";

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  return (
    <div className="App">
      <Context.Provider value={dispatch}>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList items={state} />
      </Context.Provider>
    </div>
  );
}
