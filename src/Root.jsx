import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { connect } from 'react-redux';

import List from './List';
import Header from './Header';
import Controls from './Controls';
import Dialogs from './material-ui-components/dialogs/';
import Test from './material-ui-components/dialogs/AlertDeleteConfirm';
import handleStorage from './LocalStorage/storageUpdate';
import storageCheck from './LocalStorage/storageCheck';
import { 
  addTodo, 
  removeTodo, 
  removeTodos, 
  editTodo, 
  closeDialogAdd,
  openDialogAdd,
  openAlert,
  closeAlert,
  openDialogEdit,
  closeDialogEdit,
  setKeyToDelete,
  removeKeyToDelete,
  openAlertToConfirm,
  closeAlertToConfirm,
  addTodoFromLocalStorage,
} from './store/actions/actions';


class Root extends PureComponent {

  handleAddItem = (value = '') => {
    this.props.onAddTask(value);
  }

  handleEditItem = (key, newValue) => {
    this.props.onEdit(key,newValue);
  }

  handleRemoveItems = (keys) => {
    this.props.onRemoveTodos(keys);
  }

  handleRemoveItem = () => {
    const { keyDeletedTask } = this.props;
    this.props.onRemove(keyDeletedTask);
  }

  handleCloseDialogAdd = () => {
    this.props.onCloseDialogAdd();
  }

  handleAddTask = (value) => {
    const messageAddAlert = "Empty field, Put at least one character"

    if (value && value.trim()) {
      this.handleAddItem(value);
    }
    else {
      this.handleAlert(messageAddAlert);
    }
  }

  handleEditTask = (value) => {
    const messageEditAlert = "Empty field, or You don`t edit task. If you want to delete task, put on \"Delete Icon\""
    if (value && value.trim()) {
      this.handleEditItem(this.props.keyEditedTask, value);
    }
    else {
      this.handleAlert(messageEditAlert);
    }
  }

  handleAlert = (message = "Undefined Error") => {

    if(!this.state.alert){
      this.props.onAlertOpen(message)
    }
    else{
      this.props.onAlertClose()
    } 
  }

  handleAddDialogCall = () => {
    this.props.onOpenDialogAdd();
  };

  handleEditDialogCall = (value, key) => {
    this.props.onEditOpen(value,key,"Edit Task");
  };

  handleCloseDialogEdit = () => {
    this.props.onEditClose();
  };

  handleAlertConfirm = (key) => { //if call this function, open confirm window, set key task for delete
    if (key) {
      this.props.onSetKeyDeletedTask(key);
      this.props.onAlertConfirmOpen();
    }
  };  

  allowDeletePermission = () => { //if call this function, task delete and confirm window close
    this.handleRemoveItem();
    this.props.onAlertConfirmClose();
    this.props.onRemoveKeyDeletedTask();
  }

  componentDidMount() {
    const cashedTasks = storageCheck();
    console.log(cashedTasks);

    if (cashedTasks) {
      this.props.onSetTasksFromLocalStorage(cashedTasks);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tasks !== this.props.tasks) {
      handleStorage(this.props.tasks.tasks);
    };
  }

  render() {
    const { 
      tasks, 
      dialogAdd, 
      valueDialogByDefault, 
      alert, 
      alertMessage, 
      dialogEdit, 
      alertConfirm } = this.props;

    const { PromptAdd, PromptEdit, Alert, AlertConfirm } = Dialogs({
      dialogAdd,
      dialogEdit,
      alert,
      valueDialogByDefault,
      alertMessage,
      handleCloseDialogAdd: this.handleCloseDialogAdd,
      handleCloseDialogEdit: this.handleCloseDialogEdit,
      handleAddTask: this.handleAddTask,
      handleEditTask: this.handleEditTask,
      handleAlert: this.handleAlert,
      alertConfirm,
      handleAlertConfirm: this.handleAlertConfirm,
      allowDeletePermission: this.allowDeletePermission,
    });
  
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Fragment>
          {PromptAdd}
          {PromptEdit}
          {Alert}
          {AlertConfirm}
          <Header
            title="ToDo List"
          />
          <List
            tasks={ tasks }
            onRemove={this.handleRemoveItems}
            onEdit={this.handleEditDialogCall}
            onAlert={this.handleAlert}
            onAlertConfirm={this.handleAlertConfirm}
          /> 
          <Controls
            onDialog={this.handleAddDialogCall}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStatetoProps = state => (
  {
    tasks:state.tasks,
    dialogAdd: state.dialogAdd,
    alert: state.alert.status,
    alertMessage: state.alert.message,
    valueDialogByDefault: state.dialogEdit.oldValue,
    dialogEdit: state.dialogEdit.status,
    keyEditedTask: state.dialogEdit.key,
    keyDeletedTask: state.keyTaskToDelete,
    alertConfirm: state.alertConfirm,
  } 
);

const mapDispathToProps = dispatch => (
  {
    onAddTask:(text) => dispatch( addTodo(text) ),
    onRemove:(key) => dispatch( removeTodo(key) ),
    onRemoveTodos:(keys) => dispatch( removeTodos(keys) ),
    onEdit:(key,newValue) => dispatch( editTodo(key,newValue) ),
    onCloseDialogAdd: () => dispatch( closeDialogAdd() ),
    onOpenDialogAdd: () => dispatch( openDialogAdd() ), 
    onAlertOpen: (message) => dispatch( openAlert(message) ), 
    onAlertClose: () => dispatch( closeAlert() ),
    onEditOpen: (oldValue, message) => dispatch( openDialogEdit(oldValue, message) ),
    onEditClose: () => dispatch( closeDialogEdit() ),
    onSetKeyDeletedTask: (key) => dispatch( setKeyToDelete(key) ),
    onRemoveKeyDeletedTask: () => dispatch( removeKeyToDelete() ),
    onAlertConfirmOpen: () => dispatch( openAlertToConfirm()),
    onAlertConfirmClose: () => dispatch( closeAlertToConfirm()),
    onSetTasksFromLocalStorage: (tasks) => dispatch( addTodoFromLocalStorage(tasks)),
  }
);
  
export default connect( mapStatetoProps, mapDispathToProps )(Root);


