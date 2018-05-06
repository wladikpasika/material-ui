import React from 'react';
import PromptDialog from './PromptDialog';
import AlertDialog from './AlertDialog';


export default function controls (argObj) {

    let Prompt; 
       
        Prompt = <PromptDialog
        open={argObj.dialog}
        handleCloseDialog={argObj.handleCloseDialog}
        handleChangeTask={argObj.handleChangeTask}
        defaultValue={argObj.valueDialogByDefault}
        promptMessage={argObj.promptMessage} 
        />
        
    let Alert;
        
        Alert = <AlertDialog
        open={argObj.alert}
        handleAlert={argObj.handleAlert}
        message={argObj.alertMessage}
  />
    
    return {
        Prompt,
        Alert
    }
}