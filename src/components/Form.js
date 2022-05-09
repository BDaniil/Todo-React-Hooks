import React, { useContext } from "react";
import { LocationContext } from "../context";

import "../styles/Form.css"

const Form = ({ inputEl }) => {
  const { dispatch } = useContext(LocationContext);

  const onKeyDownHandler = e => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (inputEl.current.value !== "" && inputEl.current.value !== " ") {
        dispatch({
          type: "add",
          payload: inputEl.current.value,
        });
        inputEl.current.value = "";
      }

      inputEl.current.value = "";
    }
  };

  return (
    <form className="Form">
      <input
        ref={inputEl}
        onKeyDown={onKeyDownHandler}
        maxLength="30"
        className="todo_input"
      />
    </form>
  );
};

export default Form;
