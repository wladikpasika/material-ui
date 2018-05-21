import { OPEN_ALERT, CLOSE_ALERT } from '../../actions/actionsTypes';

export function attentionAlert( prevState = {status:false, message:''}, typeAction ) {
  const { type, message = '' } = typeAction; 
  
  switch (type) {
    case OPEN_ALERT: {
      return {status: true, message};
    }
    case CLOSE_ALERT: {
        return {status: false, essage}
      }
    default: {
      return prevState;
    }
  }
}
