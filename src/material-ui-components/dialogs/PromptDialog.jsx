import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

export default class DialogComponent extends Component {

  state = {
    value: '',
  }

  render() {
    const { value } = this.state;
    const { open, defaultValue, promptMessage } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={()=>{
          this.props.handleCloseDialog();
        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={() => {
          this.props.handleCloseDialog();
          this.props.handleChangeTask?this.props.handleChangeTask(value):false;
          const newState = {...this.state};
            newState.value = '';
            this.setState(newState);
        }}
      />
    ];

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        actions={actions}
        title={ promptMessage }
        modal={ false }
        onRequestClose={ this.props.handleCloseDialog }
      >
        <TextField
          hintText="Your Task"
          defaultValue={ defaultValue?defaultValue:'' }
          onChange={ event => {
            event.persist();
            const newState = {...this.state};
            newState.value = event.target.value;
            this.setState(newState);
          }}
        />
      </Dialog>
    )
  }
}
