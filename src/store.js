import React from "react";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return action.payload;
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false
        }
      ];
    case "delete": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "completed": {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }

    default:
      break;
  }
};

export const Context = React.createContext();
