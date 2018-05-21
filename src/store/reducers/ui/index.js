import { combineReducers } from 'redux';

import { attentionAlert } from './attentionAlert';
import { confirmAlert } from './confirmAlert';
import { dialogAdd } from './dialogAdd';
import { dialogEdit } from './dialogEdit';

export const ui = combineReducers({
  attentionAlert,
  confirmAlert,
  dialogAdd,
  dialogEdit,
});