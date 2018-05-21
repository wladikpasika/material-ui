import { combineReducers } from 'redux';

import { tasks } from './tasks';
import { ui } from './ui'

export const reducers = combineReducers({
  tasks,
  ui
});