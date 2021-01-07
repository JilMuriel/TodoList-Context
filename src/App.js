import React, { useReducer, useEffect } from "react";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoReducer, Context } from "./store";

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const raw = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(raw) });
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

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
