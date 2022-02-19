const TodoReducers = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADDTODO":
      return { todos: action.payload };
    case "REMOVETODO":
      return { todos: action.payload };
    default:
      return state;
  }
};

export default TodoReducers;
