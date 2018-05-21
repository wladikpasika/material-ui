import { 
  ADD_TODO, 
  REMOVE_TODO, 
  REMOVE_TODOS, 
  EDIT_TODO, 
  UPLOAD_TODO_FROM_LOCAL_STORAGE  } from '../actions/actionsTypes';
  
let keyIterator = 0;


export function tasks(prevState = {}, action) {
  const { type = '', text = '', key = 0, newValue = '', keys = [], tasks = {} } = action;

  switch (type) {
    case ADD_TODO: {
      const newTasks = {...prevState};
      keyIterator++;
      newTasks[keyIterator] = text;
      return newTasks;
    }

    case EDIT_TODO: {
        const newTasks = {...prevState};
        newTasks[key] = newValue;
        return newTasks; 
    }

    case REMOVE_TODO: {
      const newTasks = {...prevState};
      delete newTasks[key];
      return newTasks;
    }

    case REMOVE_TODOS: {
      const newTasks = {...prevState};
      keys.forEach(key => {
        newTasks[key]
        ?delete newTasks[key]
        :false;
        return newTasks;
      });

      delete newTasks[key];
      return newTasks;
    }
    case  UPLOAD_TODO_FROM_LOCAL_STORAGE:{
      const newTasks = {...tasks};
      const keyArray = Object.keys(newTasks);
      keyIterator = 
        keyArray.length
        ?Math.max.apply(null, Object.keys(keyArray))+1
        :null;     
        return newTasks;
    }
    default: {
      return prevState;
    }
  }
}
