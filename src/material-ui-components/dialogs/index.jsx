import React from 'react';
import PromptDialog from './PromptDialog';
import AlertDialog from './AlertDialog';


export default function controls (argObj) {

    const Prompt = <PromptDialog
        open={argObj.dialog}
        handleCloseDialog={argObj.handleCloseDialog}
        handleChangeValue={argObj.handleChangeTask}
        defaultValue={argObj.valueDialogByDefault}
  />;
    const Alert = <AlertDialog
        open={argObj.alert}
        handleAlert={argObj.handleAlert}
        message={argObj.alertMessage}
  />

    return {
        Prompt,
        Alert
    }
}