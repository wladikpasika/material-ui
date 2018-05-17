import { ADD_TODO, REMOVE_TODO, REMOVE_TODOS, EDIT_TODO  } from '../actions/actions';


let keyIterator = 0;
const initialState = {
  tasks: {},
}

export function tasks(prevState = initialState, action) {
  const { type = '', text = '', key = 0, newValue = '', keys = [] } = action;

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

    default: {
      return prevState;
    }
  }
}
