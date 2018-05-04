import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';



import List from './List';
import Header from './Header'
import TolbarControls from './TolbarControls'
import Dialog from './material-ui-components/dialogs/PromptDialog';
import Alert from './material-ui-components/dialogs/AlertDialog';
import Dialogs from './material-ui-components/dialogs/';




class Root extends Component {

  state = {
    tasks: {},
    dialog: false,
    alert: false,
    alertMessage: '',
    valueDialogByDefault: '',
    keyEditedTask: null,
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

  handleRemoveItem = (keys) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);

    keys.forEach((removedKey) => {
      newItems[removedKey]
        ? delete newItems[removedKey]
        : false
    });

    this.setState({ tasks: newItems });
  }
////// prompt methods
  handleCloseDialog = () => {
    const newStateObject = {
      valueDialogByDefault: '',
      keyEditedTask: null,
      dialog: false,
    };
    this.setState(newStateObject);
  }
  
  handleChangeTask = (value) => {
    const message = "Empty field, or You don`t edit task. If you want to delete task, put on \"Delete Icon\""

    if(value&&value.trim()){
      this.handleEditItem(this.state.keyEditedTask, value);
    }
    else {
      this.handleAlert(message);
    }
  }

  handleOpenDialog = (value, key) => {
    const newStateObject = {
      valueDialogByDefault: value,
      keyEditedTask: key,
      dialog: true,
    };
    this.setState(newStateObject);
  }
////// alert method
  handleAlert = (message = "Undefined Error") => {
    const newValue = {
      alert: !this.state.alert,
    };
    
    typeof(message)==='string'
    ?newValue.alertMessage = message
    :false

    this.setState(newValue);
  }

  render() {
    const { tasks, dialog, alertMessage, alert, valueDialogByDefault, keyEditedTask} = this.state;
    console.log(alert, 'Алерт');

    const {Prompt, Alert} = Dialogs({
      dialog,
      alert,
      valueDialogByDefault,
      alertMessage,
      handleCloseDialog: this.handleCloseDialog,
      handleChangeTask: this.handleChangeTask, //or handleChangeValue !!  something one needed
      handleAlert: this.handleAlert,
    });

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Fragment>
          {Prompt} 
          {Alert}
          <Header
            title="ToDo List"
          />
          <TolbarControls
            onAdd={this.handleAddItem}
            onAlert={this.handleAlert}
          />
          <List
            tasks={tasks}
            onRemove={this.handleRemoveItem}
            onEdit={this.handleOpenDialog}
            onAlert={this.handleAlert}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Root;

/*<Dialog
              open={dialog}
              handleCloseDialog={this.handleCloseDialog}
              handleChangeValue={this.handleChangeTask}
              defaultValue={valueDialogByDefault}
            />
            <Alert
              open={alert}
              handleAlert={this.handleAlert}
              message={this.state.alertMessage}
            /> */