import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import List from './List';
import Header from './Header'
import Controls from './Controls'
import Dialogs from './material-ui-components/dialogs/';
import Test from './material-ui-components/dialogs/AlertDeleteConfirm'
import handleStorage from './LocalStorage/storageUpdate'
import storageCheck from './LocalStorage/storageCheck'

class Root extends PureComponent {

  state = {
    tasks: {},
    dialogAdd: false,
    dialogEdit: false,
    alert: false,
    alertConfirm: false,
    alertMessage: '',
    valueDialogByDefault: '',
    keyEditedTask: null,
    taskTodelete: null
  }
  iterator = 0;

  handleAddItem = (value = '') => {
    const { tasks } = this.state;

    this.setState({
      tasks: {
        ...tasks,
        [this.iterator++]: value
      }
    });
  }
  handleEditItem = (key, newValue) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);
    newItems[key] = newValue;

    this.setState({ tasks: newItems });
  }
  handleRemoveItems = (keys) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);
    keys.forEach((removedKey) => {
      newItems[removedKey]
        ? delete newItems[removedKey]
        : false
    });
    this.setState({ tasks: newItems });
  }
  handleRemoveItem = () => {
    const { tasks, taskTodelete } = this.state;
    const newItems = { ...tasks };
    delete newItems[taskTodelete];
    this.setState({
      tasks: newItems,
      taskTodelete: null
    });

  }
  handleCloseDialogAdd = () => {
    const newStateObject = {
      dialogAdd: false,
    };
    this.setState(newStateObject);
  }
  handleCloseDialogEdit = () => {
    const newStateObject = {
      valueDialogByDefault: '',
      keyEditedTask: null,
      dialogEdit: false,
    };
    this.setState(newStateObject);
  }
  handleAddTask = (value) => {
    const messageAddAlert = "Empty field, Put at least one character"

    if (value && value.trim()) {
      this.handleAddItem(value);
    }
    else {
      this.handleAlert(messageAddAlert);
    }
    this.setState({ isAddPrompt: false });
  }
  handleEditTask = (value) => {
    const messageEditAlert = "Empty field, or You don`t edit task. If you want to delete task, put on \"Delete Icon\""
    if (value && value.trim()) {
      this.handleEditItem(this.state.keyEditedTask, value);
    }
    else {
      this.handleAlert(messageEditAlert);
    }
  }
  handleAlert = (message = "Undefined Error") => {
    const newValue = {
      alert: !this.state.alert,
    };

    typeof (message) === 'string'
      ? newValue.alertMessage = message
      : false
    this.setState(newValue);
  }
  handleAddDialogCall = () => {
    this.setState({
      dialogAdd: !this.state.dialogAdd,
      promptMessage: this.state.dialogAdd ? "Add Your Task" : "",
      isAddPrompt: true
    });
  }
  handleEditDialogCall = (value, key) => {
    this.setState({
      valueDialogByDefault: value,
      keyEditedTask: key,
      dialogEdit: true,
      promptMessage: "Edit Task"
    });
    console.log(this.state, "Edit");
  }
  handleAlertConfirm = (key) => {
    if (key) {
      this.setState({ taskTodelete: key })
    }
    else {
      this.setState({ taskTodelete: null })
    }
    return this.setState({
      alertConfirm: !this.state.alertConfirm,
    }
    );
  }
  allowDeletePermission = () => {
    this.handleRemoveItem();
    this.handleAlertConfirm();
  }

  componentDidMount() {
    const cashedTasks = storageCheck();

    if (cashedTasks) {
      this.setState({ tasks: cashedTasks });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      handleStorage(this.state.tasks);
    };
  }

  render() {
    const { tasks, dialogAdd, alertConfirm, dialogEdit, alertMessage, alert, valueDialogByDefault, keyEditedTask } = this.state;

    const { PromptAdd, PromptEdit, Alert, AlertConfirm } = Dialogs({
      dialogAdd,
      dialogEdit,
      alert,
      valueDialogByDefault,
      alertMessage,
      handleCloseDialogAdd: this.handleCloseDialogAdd,
      handleCloseDialogEdit: this.handleCloseDialogEdit,
      handleAddTask: this.handleAddTask,
      handleEditTask: this.handleEditTask, //or handleChangeValue !!  something one needed
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
            tasks={tasks}
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

export default Root;
