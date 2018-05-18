import {
    ADD_TODO,
    ADD_TODO_FROM_LOCAL_STORAGE,
    REMOVE_TODO,
    REMOVE_TODOS,
    EDIT_TODO,
 } from './actionsTypes';

export const addTodo = (text) => {
    return { type: ADD_TODO, text }
  };
export const addTodoFromLocalStorage = (tasks) => {
return dispatch => setTimeout(()=>{
    dispatch(ls(tasks))
}, 2000)
};

export const ls = (tasks) => {
return { type: ADD_TODO_FROM_LOCAL_STORAGE, tasks }
} 

export const removeTodo = (key) => {
    
return { type: REMOVE_TODO, key }
};

export const removeTodos = (keys) => {
return { type: REMOVE_TODOS, keys }
};

export const editTodo = (key, newValue) => {
return { type: EDIT_TODO, key, newValue }
};