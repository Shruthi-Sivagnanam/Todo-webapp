import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtodoActions, RemovetodoActions } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(AddtodoActions(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemovetodoActions(t));
  };
  return (
    <div className="App">
      <div className="App-header">
        <h2 className="primary-heading">Todo List</h2>
        <form onSubmit={submitHandler}>
          <input
            placeholder="Enter you task"
            className="input-text"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="todo-button">
            Add
          </button>
        </form>
        {todos &&
          todos.map((t) => (
            <div className="todo container" key={t.id}>
              <span class="todo-text">{t.todo}</span>
              <button
                type="submit"
                className="delete-button"
                onClick={() => removeHandler(t)}
              >
                x
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
