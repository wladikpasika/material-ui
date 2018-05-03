import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';




export default class ToolbarExamplesSimple extends React.Component {

    state = {
      value: 3
    }
 
  handleChange = (event, index, value) => this.setState({value});

  render() {
      const Style = {
          padding:'0 24px'
      } 
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
        <MuiThemeProvider>
            <TextField hintText="Hint Text" style = {Style}/>
        </MuiThemeProvider>
          <ToolbarSeparator />
            <FloatingActionButton variant="raised" color="primary">
                <ContentAdd />
            </FloatingActionButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}