export const setTodoLocalStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};
export const getTodoLocalStorage = (data) => {
  return JSON.parse(localStorage.getItem(data));
};
