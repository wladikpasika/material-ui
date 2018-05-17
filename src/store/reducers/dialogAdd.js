import { combineReducers } from 'redux';
import { CLOSE_DIALOG_ADD, OPEN_DIALOG_ADD } from '../actions/actions';


export function dialogAdd( prevState = false, typeAction ) {
  const { type } = typeAction; 
  switch (type) {
    case CLOSE_DIALOG_ADD: {
      return false;
    }
    case OPEN_DIALOG_ADD: {
      return true;
    }
    default: {
      return prevState;
    }
  }
}
