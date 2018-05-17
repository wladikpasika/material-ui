export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';
export const EDIT_TODO = 'EDIT_TODO';
export const CLOSE_DIALOG_ADD = 'CLOSE_DIALOG_ADD';
export const OPEN_DIALOG_ADD = 'OPEN_DIALOG_ADD';
export const OPEN_ALERT = 'OPEN_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';
export const OPEN_DIALOG_EDIT = 'OPEN_DIALOG_EDIT';
export const CLOSE_DIALOG_EDIT = 'CLOSE_DIALOG_EDIT';
export const SET_KEY_TO_DELETE = 'SET_KEY_TO_DELETE';
export const REMOVE_KEY_TO_DELETE = 'REMOVE_KEY_TO_DELETE';


export const addTodo = (text) => {
  return { type: ADD_TODO, text }
};

export const removeTodo = (key) => {
  return { type: REMOVE_TODO, key }
};

export const removeTodos = (keys) => {
  return { type: REMOVE_TODOS, keys }
};

export const editTodo = (key, newValue) => {
  return { type: EDIT_TODO, key, newValue }
};

export const closeDialogAdd = () => {
  return { type: CLOSE_DIALOG_ADD }
};

export const openDialogAdd = () => {
  return { type: OPEN_DIALOG_ADD }
};

export const openDialogEdit = (oldValue, message) => {
  return { type: OPEN_DIALOG_EDIT, oldValue, message }
};

export const closeDialogEdit = () => {
  return { type: CLOSE_DIALOG_EDIT }
};

export const openAlert = (message) => {
  return { type: OPEN_ALERT, message }
};

export const closeAlert = () => {
  return { type: CLOSE_ALERT }
};

export const setKeyToDelete = (key) => {
  return { type: SET_KEY_TO_DELETE, key }
};

export const removeKeyToDelete = () => {
  return { type: REMOVE_KEY_TO_DELETE }
};