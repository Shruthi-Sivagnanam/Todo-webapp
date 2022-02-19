export const AddtodoActions = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  const hasTodo = todos.find((i) => i.todo === todo);
  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADDTODO",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};
export const RemovetodoActions = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  dispatch({
    type: "REMOVETODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
