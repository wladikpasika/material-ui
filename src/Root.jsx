import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { connect } from 'react-redux';

import List from './List';
import Header from './Header';
import Controls from './Controls';
import Dialogs from './ui-components/dialogs/';
import Test from './ui-components/dialogs/AlertDeleteConfirm';
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
  uploadTodoFromLocalStorage,
} from './store/actions/';


class Root extends PureComponent {

  handleAddItem = (value = '') => {
    this.props.onAddTask(value);
  };

  handleEditItem = (key, newValue) => {
    this.props.onEdit(key,newValue);
  };

  handleRemoveItems = (keys) => {
    this.props.onRemoveTodos(keys);
  };

  handleRemoveItem = () => {
    const { keyDeletedTask } = this.props;
    this.props.onRemove(keyDeletedTask);
  };

  handleCloseDialogAdd = () => {
    this.props.onCloseDialogAdd();
  };

  handleAddTask = (value) => {
    const messageAddAlert = "Empty field, Put at least one character"

    if (value && value.trim()) {
      this.handleAddItem(value);
    }
    else {
      this.handleAlert(messageAddAlert);
    }
  };

  handleEditTask = (value) => {
    const messageEditAlert = "Empty field, or You don`t edit task. If you want to delete task, put on \"Delete Icon\""
    if (value && value.trim()) {
      this.handleEditItem(this.props.keyEditedTask, value);
    }
    else {
      this.handleAlert(messageEditAlert);
    }
  };

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
      this.props.onAlertConfirmOpen(key);
    }
    else {
      this.props.onAlertConfirmClose();
    }
  };  

  allowDeletePermission = () => { //if call this function, task delete and confirm window close
    this.handleRemoveItem();
    this.props.onAlertConfirmClose();
  };

  componentDidMount() {
    const cashedTasks = storageCheck();
    if (cashedTasks) {
      this.props.onSetTasksFromLocalStorage(cashedTasks);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tasks !== this.props.tasks) {
      handleStorage(this.props.tasks);
    };
  };

  render() {
    const { 
      tasks, 
      dialogAdd, 
      valueDialogByDefault, 
      alert, 
      alertMessage, 
      dialogEdit, 
      alertConfirm,
      keyDeletedTask,
    } = this.props;

    const { PromptAdd, PromptEdit, Alert, AlertConfirm } = Dialogs({
      dialogAdd,
      dialogEdit,
      valueDialogByDefault,
      handleCloseDialogAdd: this.handleCloseDialogAdd,
      handleCloseDialogEdit: this.handleCloseDialogEdit,
      handleAddTask: this.handleAddTask,
      handleEditTask: this.handleEditTask,
      alertConfirm,
      handleAlertConfirm: this.handleAlertConfirm,
      allowDeletePermission: this.allowDeletePermission,
      deletedTask: tasks[keyDeletedTask]
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
            tasks={ this.props.tasks }
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
  };
}

const mapStatetoProps = state => (
  {
    tasks:state.tasks,
    dialogAdd: state.ui.dialogAdd,
    alert: state.ui.attentionAlert.status,
    alertMessage: state.ui.attentionAlert.message,
    valueDialogByDefault: state.ui.dialogEdit.oldValue,
    dialogEdit: state.ui.dialogEdit.status,
    keyEditedTask: state.ui.dialogEdit.key,
    keyDeletedTask: state.ui.confirmAlert.key,
    alertConfirm: state.ui.confirmAlert.status,
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
    onAlertConfirmOpen: (key) => dispatch( openAlertToConfirm(key)),
    onAlertConfirmClose: () => dispatch( closeAlertToConfirm()),
    onSetTasksFromLocalStorage: (tasks) => dispatch( uploadTodoFromLocalStorage(tasks)),
  }
);
  
export default connect( mapStatetoProps, mapDispathToProps )(Root);


