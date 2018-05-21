import React, {Fragment, Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import Dialogs from './ui-components/dialogs/';
import classes from './css/controls.css';

export default class Controls extends Component {

      handleInput = (event) => {
        const { value = '' } = event.target;
        this.setState({ value });
      };
    
      handlePress = () => {
        const { value } = this.state;
        if (!!value === true){
          this.props.onAdd(value);
          this.setState({ value: '' });
        }
        else {
          const message = "Empty field!";
          this.props.onAlert(message);
        }
      };

      render() {
        return (
          <div className={ classes.btn_wrp }>
            <FloatingActionButton 
                    variant="raised" 
                    color="primary" 
                    className={ classes.add_button } 
                    onClick = {
                      () => { 
                        this.props.onDialog();
                    }} 
                >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
  }
}