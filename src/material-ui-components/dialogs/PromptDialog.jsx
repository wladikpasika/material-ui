import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

export default class DialogComponent extends Component {

  state = {
    value: '',
    edit: false,
  }

  render() {
    const { value } = this.state;
    const { open, defaultValue } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleCloseDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={() => {
          this.props.handleCloseDialog();
          this.props.handleChangeValue(value);
        }}
      />
    ];

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        actions={actions}
        title="Edit your Task"
        modal={ false }
        onRequestClose={ this.props.handleCloseDialog }
      >
        <TextField
          hintText="Edit your task"
          defaultValue={ defaultValue }
          onChange={ event => {
            event.persist();
            this.setState({ edit: true });
            this.setState({ value: event.target.value })
          }}
        />
      </Dialog>
    )
  }
}
