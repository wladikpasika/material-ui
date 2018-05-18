import { OPEN_ALERT_TO_CONFIRM, CLOSE_ALERT_TO_CONFIRM } from '../actions/actionsTypes';

export function alertConfirm ( prevState = false, typeAction ) {
  const { type, message = '' } = typeAction; 
  
  switch (type) {
    case OPEN_ALERT_TO_CONFIRM: {
      return true;
    }
    case CLOSE_ALERT_TO_CONFIRM: {
        return false;
      }
    default: {
      return prevState;
    }
  }
}
