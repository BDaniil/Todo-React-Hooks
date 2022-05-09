import React, {
  useRef,
  useId,
  useMemo,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import { LocationContext } from "./context";
import reducer from "./reducer";

import "./styles/App.css";

function getLength(length) {
  return length;
}

function App() {
  const check = localStorage.getItem("todo_List");

  const [state, dispatch] = useReducer(reducer, JSON.parse(check));
  const inputEl = useRef("");
  const id = useId();

  const memoItems = useMemo(() => getLength(state.length), [state.length]);

  function getUnchecked(state) {
    let checked = 0;
    state.forEach(element => {
      if (!element.completed) {
        checked += 1;
      }
    });
    return checked;
  }

  const callbackItems = useCallback(() => getUnchecked(state), [state]);

  useEffect(() => {
    localStorage.setItem("todo_List", JSON.stringify(state));
  }, [state]);

  return (
    <LocationContext.Provider value={{ dispatch }}>
      <div className="App">
        <Clock />
        <div id={`${id}-container`} className="wrapper">
          <header id={`${id}-header`}>
            <h1 id={`${id}-headline`}> Todo with Hooks</h1>
          </header>
          <Form
            todo={state}
            setTodo={dispatch}
            inputEl={inputEl}
            idCheck={id}
          />
          <TodoList todo={state} setTodo={dispatch} />
          {state.length > 0 ? (
            <>
              <div> Number of All Todos: {memoItems}</div>
              <div> Number of Uncompleted Todos: {callbackItems(state)}</div>
            </>
          ) : (
            <> </>
          )}
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
