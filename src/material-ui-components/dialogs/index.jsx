import React from 'react';
import PromptDialogAdd from './PromptDialogAdd';
import PromptDialogEdit from './PromptDialogEdit';
import AlertDialog from './AlertDialog';
import AlertDeleteConfirm from './AlertDeleteConfirm'


export default function controls (argObj) {

    const PromptAdd = <PromptDialogAdd
        open={argObj.dialogAdd}
        handleCloseDialogAdd={argObj.handleCloseDialogAdd}
        handleAddTask={argObj.handleAddTask} 
        />

    const PromptEdit = <PromptDialogEdit
        open={argObj.dialogEdit}
        handleCloseDialogEdit={argObj.handleCloseDialogEdit}
        handleEditTask={argObj.handleEditTask}
        defaultValue={argObj.valueDialogByDefault}
        />
        
    const Alert = <AlertDialog
        open={argObj.alert}
        handleAlert={argObj.handleAlert}
        message={argObj.alertMessage}
        
  />

    const AlertConfirm = <AlertDeleteConfirm
          open={argObj.alertConfirm}
          handleAlert={argObj.handleAlertConfirm}
          allowDeletePermission={argObj.allowDeletePermission} 
    />
    
    return {
        PromptAdd,
        PromptEdit,
        Alert,
        AlertConfirm,
    }
}