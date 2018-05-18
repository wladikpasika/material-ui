import { SET_KEY_TO_DELETE, REMOVE_KEY_TO_DELETE } from '../actions/actions';


export function keyTaskToDelete( prevState = null, typeAction ) {
  const { key,type } = typeAction; 
  
  switch (type) {
    case SET_KEY_TO_DELETE: {
      return key;
    }
    case REMOVE_KEY_TO_DELETE: {
        return null
      }
    default: {
      return prevState;
    }
  }
}