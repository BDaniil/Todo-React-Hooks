import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, setTodo }) => {
  return (
    <ul className="TodoList">
      {todo.map(todoItem => (
        <Todo
          key={todoItem.id}
          text={todoItem.text}
          todoItem={todoItem}
          todo={todo}
          setTodo={setTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
