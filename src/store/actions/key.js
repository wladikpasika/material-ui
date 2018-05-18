import {
   SET_KEY_TO_DELETE,
   REMOVE_KEY_TO_DELETE,
} from './actionsTypes';

export const setKeyToDelete = (key) => {
  return { type: SET_KEY_TO_DELETE, key }
};

export const removeKeyToDelete = () => {
  return { type: REMOVE_KEY_TO_DELETE }
};
