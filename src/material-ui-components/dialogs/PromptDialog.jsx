import React, {Component} from 'react'
import {Button,TextField} from 'material-ui';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


export default class DialogComponent extends Component{
    state = {
        value: '',
        edit: false,
    }
    

    render(){
        const defaultValue = this.props.defaultValue;
        return  (
        <Dialog 
            open={this.props.openDialog}
            onClose={this.props.handleCloseDialog}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Change Task</DialogTitle>
            <DialogContent>
            <DialogContentText>
            To change a task, insert new text in the input field.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Your new Task"
                type="text"
                fullWidth
                defaultValue = {this.props.defaultValue}
                onChange = {event => {
                    event.persist(); this.setState({edit:true}); 
                    this.setState({value: event.target.value})}}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={this.props.handleCloseDialog} color="primary">
                Cancel
            </Button>
            <Button onClick={() => {
                this.props.handleCloseDialog();
                this.props.handleChangeValue(this.state.value);
                }} color="primary">
                Change
            </Button>
            </DialogActions>
        </Dialog>)
    }
}
