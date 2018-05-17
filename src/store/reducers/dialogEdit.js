import { combineReducers } from 'redux';
import { CLOSE_DIALOG_EDIT, OPEN_DIALOG_EDIT } from '../actions/actions';

const initialState = {
    oldValue: '',
    status: false,
    message: ''
};


export function dialogEdit( prevState = initialState, typeAction ) {
  const { type, oldValue, message } = typeAction; 
  
  switch (type) {
    case OPEN_DIALOG_EDIT: {
        console.log(type, typeAction );
      return {
        oldValue: oldValue,
        status: true,
        message: message,

      };
    }
    case CLOSE_DIALOG_EDIT: {
        return {
          oldValue: '',
          status: false,
          message: ''
        };
      }
    default: {
      return prevState;
    }
  }
}
