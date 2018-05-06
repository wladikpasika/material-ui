import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import List from './List';
import Header from './Header'
import Controls from './Controls'
import Dialogs from './material-ui-components/dialogs/';

class Root extends Component {

  state = {
    tasks: {},
    dialog: false,
    alert: false,
    alertMessage: '',
    promptMessage: '',
    valueDialogByDefault: '',
    keyEditedTask: null,
    isAddPrompt: false,
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
      promptMessage:'',
    };
    this.setState(newStateObject);
  }
  
  handleTask = (value) => {
    const messageEditAlert = "Empty field, or You don`t edit task. If you want to delete task, put on \"Delete Icon\""
    const messageAddAlert = "Empty field, Put at least one character"

    if(!this.state.isAddPrompt){
      if(value&&value.trim()){
        this.handleEditItem(this.state.keyEditedTask, value);
      }
      else {
        this.handleAlert(messageEditAlert);
      }
    } 
    else {
      if(value&&value.trim()){
        this.handleAddItem(value);
      }
      else {
        this.handleAlert(messageAddAlert);
      }
      this.setState({isAddPrompt:false});
    }
  }
  
  handleOpenDialog = (value, key) => {
    const newStateObject = {
      valueDialogByDefault: value,
      keyEditedTask: key,
      dialog: true,
      promptMessage:"Edit Task"
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
  handleAddDialogCall = () => {
    const newState = {...this.state};
    newState.dialog = !newState.dialog;
    newState.promptMessage = newState.dialog?"Add Your Task":""
    newState.isAddPrompt = true;

    this.setState(newState);
  }

  render() {
    const { tasks, dialog, alertMessage, alert, valueDialogByDefault, keyEditedTask, promptMessage} = this.state;

    const {Prompt, Alert} = Dialogs({
      dialog,
      alert,
      valueDialogByDefault,
      alertMessage,
      handleCloseDialog: this.handleCloseDialog,
      handleChangeTask: this.handleTask, //or handleChangeValue !!  something one needed
      handleAlert: this.handleAlert,
      promptMessage: promptMessage,
    });

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Fragment>
          {Prompt} 
          {Alert}
          <Header
            title="ToDo List"
          />
          <Controls
            onDialog={this.handleAddDialogCall}
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
