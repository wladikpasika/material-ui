import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

export default class DialogComponent extends Component {

  state = {
    value: ''
  }

  static defaultProps = {
    defaultValue: ""
  }

  handleEditItem = () => {
    this.props.handleCloseDialogEdit();
    this.props.handleEditTask(this.state.value)
    this.handleClearState()

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
    const { open, defaultValue } = this.props;
   
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => {
          this.handleClearState();
          this.props.handleCloseDialogEdit();
        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleEditItem}
      />
    ];

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        actions={actions}
        title="Edit Your Task"
        modal={false}
        onRequestClose={this.props.handleCloseDialogEdit}
      >
        <TextField
          autoFocus
          hintText="Your Task"
          value={ this.value }
          fullWidth
          onChange={ this.handleInputChange }
        />
      </Dialog>
    )
  }
}
