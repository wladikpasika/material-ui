import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import Dialog from 'material-ui/Dialog';


export default class DialogComponent extends Component{
    state = {
        value: '',
        edit: false,
    }
    

    render(){
        const defaultValue = this.props.defaultValue;
        console.log(this.props);
        return  (
            <MuiThemeProvider>
        <Dialog 
            open={this.props.open}
            onClose={this.props.handleCloseDialog}
            aria-labelledby="form-dialog-title"/>
            </MuiThemeProvider>
        )
    }
}
