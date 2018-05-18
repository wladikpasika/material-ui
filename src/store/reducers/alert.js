import { OPEN_ALERT, CLOSE_ALERT } from '../actions/actions';

export function alert( prevState = {status:false, message:''}, typeAction ) {
  const { type, message = '' } = typeAction; 
  
  switch (type) {
    case OPEN_ALERT: {
      return {status: true, message};
    }
    case CLOSE_ALERT: {
        return {status:false, message}
      }
    default: {
      return prevState;
    }
  }
}
