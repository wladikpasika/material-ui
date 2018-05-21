import React from 'react';
import PromptDialogAdd from './PromptDialogAdd';
import PromptDialogEdit from './PromptDialogEdit';
import AlertDeleteConfirm from './AlertDeleteConfirm'


export default function controls (argObj) {

    const PromptAdd = <PromptDialogAdd
        open={ argObj.dialogAdd }
        handleCloseDialogAdd={ argObj.handleCloseDialogAdd }
        handleAddTask={ argObj.handleAddTask } 
        />

    const PromptEdit = <PromptDialogEdit
        open={ argObj.dialogEdit }
        handleCloseDialogEdit={ argObj.handleCloseDialogEdit }
        handleEditTask={ argObj.handleEditTask }
        defaultValue={ argObj.valueDialogByDefault }
        />

    const AlertConfirm = <AlertDeleteConfirm
          open={ argObj.alertConfirm }
          handleAlert={ argObj.handleAlertConfirm }
          allowDeletePermission={ argObj.allowDeletePermission }
          deletedTask={ argObj.deletedTask } 
        />
    
    return {
        PromptAdd,
        PromptEdit,
        AlertConfirm,
    }
}