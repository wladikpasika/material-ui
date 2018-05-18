import {
    CLOSE_DIALOG_ADD,
    OPEN_DIALOG_ADD,
    OPEN_DIALOG_EDIT,
    CLOSE_DIALOG_EDIT,
 } from './actionsTypes';

export const closeDialogAdd = () => {
    return { type: CLOSE_DIALOG_ADD }
  };
  
  export const openDialogAdd = () => {
    return { type: OPEN_DIALOG_ADD }
  };
  
  export const openDialogEdit = (oldValue, key, message) => {
    return { type: OPEN_DIALOG_EDIT, oldValue, key, message }
  };
  
  export const closeDialogEdit = () => {
    return { type: CLOSE_DIALOG_EDIT }
  };
