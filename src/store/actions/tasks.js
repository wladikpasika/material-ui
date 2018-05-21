import {
    ADD_TODO,
    UPLOAD_TODO_FROM_LOCAL_STORAGE,
    REMOVE_TODO,
    REMOVE_TODOS,
    EDIT_TODO,
 } from './actionsTypes';

export const addTodo = (text) => {
    return { type: ADD_TODO, text }
  };
export const uploadTodoFromLocalStorage = (tasks) => {
    return { type: UPLOAD_TODO_FROM_LOCAL_STORAGE, tasks }
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