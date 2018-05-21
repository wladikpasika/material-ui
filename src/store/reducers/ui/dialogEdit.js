import { CLOSE_DIALOG_EDIT, OPEN_DIALOG_EDIT } from '../../actions/actionsTypes';

const initialState = {
    oldValue: '',
    status: false,
    message: '', 
    key: null,
};

export function dialogEdit( prevState = initialState, typeAction ) {
  const { type, oldValue, message, key } = typeAction; 
  switch (type) {
    case OPEN_DIALOG_EDIT: {
      return {
        oldValue: oldValue,
        status: true,
        message: message,
        key,
      };
    }
    case CLOSE_DIALOG_EDIT: {
        return {
          oldValue: '',
          status: false,
          message: '',
          key: null,
        };
      }
    default: {
      return prevState;
    }
  }
}
