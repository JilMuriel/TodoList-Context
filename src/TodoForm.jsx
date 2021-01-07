import React, { useState, useContext } from "react";
import { Context } from "./store";

export const TodoForm = () => {
  const dispatch = useContext(Context);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: input });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
