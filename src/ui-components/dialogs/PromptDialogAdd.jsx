import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { orange500, blue500 } from 'material-ui/styles/colors';


const styles={
  error:{
    color: orange500
  }
}

export default class DialogComponent extends Component {

  state = {
    value: ''
  }

  handleAddItem = () => {
    this.props.handleCloseDialogAdd();
    this.props.handleAddTask(this.state.value);
    this.handleClearState();
  }

  handleInputChange = (event) => {
    const { value = '' } = event.target;
    this.setState({ value });
  }

  handleClearState = () => {
    return this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { open } = this.props;
   
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => {
          this.handleClearState();
          this.props.handleCloseDialogAdd();
        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleAddItem}
        disabled={ !this.state.value.length }
      />
    ];

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        actions={actions}
        title="Add new Task"
        modal={false}
        onRequestClose={this.props.handleCloseDialogAdd}
      >
        <TextField
          autoFocus
          hintText="Your Task"
          fullWidth
          onChange={ this.handleInputChange }
          value={ this.state.value }
          errorText={ !this.state.value.length?"This field is required":false }
          errorStyle={ styles.error }
        />
      </Dialog>
    )
  }
}
