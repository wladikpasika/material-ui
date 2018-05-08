import React, {Fragment, Component} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import Dialogs from './material-ui-components/dialogs/';

import Style from './css/controls.css';


export default class Controls extends Component {


      handleInput = (event) => {
        const { value = '' } = event.target;
        this.setState({ value });
      }
    
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
      }

      
      render() {
          const Style = {
              padding:'0 24px'
          }
          

    return (
      <div className="btn-wrp" style={
          {
            position:"absolute",
            bottom:"40px",
            right:"40px"
          }
        }>
        <FloatingActionButton 
                variant="raised" 
                color="primary" 
                style={
                  {marginLeft:'10px'}
                }
                className="add-button" 
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