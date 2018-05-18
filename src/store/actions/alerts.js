import {
  OPEN_ALERT,
  CLOSE_ALERT,
  OPEN_ALERT_TO_CONFIRM,
  CLOSE_ALERT_TO_CONFIRM,
} from './actionsTypes'

export const openAlert = (message) => {
  return { type: OPEN_ALERT, message }
};

export const closeAlert = () => {
  return { type: CLOSE_ALERT }
};
export const openAlertToConfirm = () => {
  return { type: OPEN_ALERT_TO_CONFIRM }
};

export const closeAlertToConfirm = () => {
  return { type: CLOSE_ALERT_TO_CONFIRM }
};