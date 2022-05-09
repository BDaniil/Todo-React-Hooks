import React, { useContext } from "react";
import { LocationContext } from "../context";

import "../styles/Todo.css"

const Todo = ({ text, todoItem }) => {
  const { dispatch } = useContext(LocationContext);

  const deleteItem = () =>
    dispatch({
      type: "delete",
      payload: todoItem.id,
    });

  const markItem = () =>
    dispatch({
      type: "mark",
      payload: todoItem.id,
    });

  return (
    <li className={`Todo ${todoItem.completed ? "completed" : ""}`}>
      <div className="todo_item_text">{text}</div>
      <span
        onClick={markItem}
        className={`${todoItem.completed ? "uncomplete" : "complete_button"}`}
      >
        <i
          className={`${todoItem.completed ? "fas fa-plus" : "fas fa-check"}`}
        ></i>
      </span>

      <span onClick={deleteItem} className="trash_button">
        <i className="fas fa-trash"></i>
      </span>
    </li>
  );
};

export default Todo;
