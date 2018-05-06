import React, {Fragment, Component} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import Dialogs from './material-ui-components/dialogs/';


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
      <Fragment>
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
        </Fragment>
    );

    /*return (
      <Toolbar>
        
        <ToolbarGroup firstChild={true} 
          style={{
          width:'100%',
          justifyContent: 'space-between'
      }}>
        <MuiThemeProvider>
            <TextField 
            hintText="Add your task" 
            style = {Style} 
            onChange = {this.handleInput}
            value = {value} //to bind input and state component
            />
        </MuiThemeProvider>
          <ToolbarSeparator />
            <FloatingActionButton 
                variant="raised" 
                color="primary" 
                mini={true} 
                style={{marginLeft:'10px'}}
                className="add-button" 
                onClick={(event) => {
                  this.handlePress();
                }} 
            >
                <ContentAdd />
            </FloatingActionButton>
        </ToolbarGroup>
      </Toolbar>
    );*/
  }
}