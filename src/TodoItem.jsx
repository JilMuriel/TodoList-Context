import React, { useContext } from "react";
import { Context } from "./store";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useContext(Context);
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input type="textbox" defaultValue={title} />
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
