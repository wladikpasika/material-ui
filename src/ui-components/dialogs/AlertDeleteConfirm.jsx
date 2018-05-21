import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class AlertDeleteConfirm extends Component {
  
  render() {
    const { open, handleAlert, allowDeletePermission, deletedTask } = this.props;

    const actions = [
        <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => {
            handleAlert();
        }}
      />,
      <FlatButton
        label="OK"
        primary={true}
        onClick={() => {
            allowDeletePermission();
        }}
      />
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={handleAlert}
        >
        You delete "{ deletedTask }". Continue?
        </Dialog>
      </div>
    );
  }
}
