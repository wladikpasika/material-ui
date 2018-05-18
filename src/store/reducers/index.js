import { combineReducers } from 'redux';

import { tasks } from './tasks';
import { dialogAdd } from './dialogAdd';
import { alert } from './alert';
import { dialogEdit } from './dialogEdit';
import { keyTaskToDelete } from './keyToDelete';
import { alertConfirm } from './confirmAlert';


export const reducers = combineReducers({
  tasks,
  dialogAdd,
  alert,
  dialogEdit,
  keyTaskToDelete,
  alertConfirm,
});