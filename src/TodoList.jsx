import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ items }) => {
  return (
    <div>
      {items.map((item, key) => (
        <TodoItem key={key} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
