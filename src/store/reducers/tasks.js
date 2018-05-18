import { 
  ADD_TODO, 
  REMOVE_TODO, 
  REMOVE_TODOS, 
  EDIT_TODO, 
  ADD_TODO_FROM_LOCAL_STORAGE  } from '../actions/actionsTypes';
  
let keyIterator = 0;
const initialState = {
  tasks: {},
}

export function tasks(prevState = initialState, action) {
  const { type = '', text = '', key = 0, newValue = '', keys = [], tasks = {} } = action;

  switch (type) {
    case ADD_TODO: {
      const newState = {...prevState};
      newState.tasks[keyIterator++] = text;
      return newState;
    }

    case EDIT_TODO: {
        const newTasks = {...prevState.tasks};
        newTasks[key] = newValue;
        return {...prevState, tasks:newTasks}
    }

    case REMOVE_TODO: {
     
      const newTasks = {...prevState.tasks};
      delete newTasks[key];
      return {...prevState, tasks: newTasks };
    }

    case REMOVE_TODOS: {
      const newTasks = {...prevState.tasks};
      keys.forEach(key => {
        newTasks[key]
        ?delete newTasks[key]
        :false;
        console.log(newTasks);
        return {...prevState, tasks: newTasks };
      });

      delete newTasks[key];
      return {...prevState, tasks:newTasks };
    }
    case ADD_TODO_FROM_LOCAL_STORAGE:{
      const newTasks = {...tasks};
      const keyArray = Object.keys(newTasks);
      keyIterator = 
        keyArray.length
        ?Math.max.apply(null, Object.keys(keyArray))+1
        :null;
        
      console.log(keyIterator);
        return {...prevState, tasks: newTasks};
    }
    default: {
      return prevState;
    }
  }
}
