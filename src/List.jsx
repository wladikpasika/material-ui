import React, { Component, Fragment } from 'react';
import listStyles from './css/list.css'
import Radium from 'radium'

import {List, ListItem} from 'material-ui';
import Dialog from './material-ui-components/dialogs/PromptDialog';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';



class ComponentList extends Component {

  state = {
    selected: [],
    openDialog: false,
    valueDialogFieldByDefault: '',
    keyEditedTask: null
  }

  handleRemove = (key) => {
    this.props.onRemove([key]);
  }

  handleChahgeCheckbox = (key) => {
    const { selected } = this.state;

    const newSelected = selected.includes(key)
      ? selected.filter(oldKey => oldKey !== key)
      : [ ...selected, key ];

    this.setState({ selected: newSelected });
  }

  handleClearState = () => {
    const newSelected  = [];
    this.setState({ selected: newSelected});
  }

  handleClickOpenDialog = () => {
    this.setState({ openDialog: true });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
    this.setState({ valueDialogFieldByDefault: '' });
    this.setState({ keyEditedTask: null });
  };

  handleChangeTask = (value) => {
    
    if (value&&!!value.trim() === true) {
      this.props.onEdit(this.state.keyEditedTask, value);
    }
    else {
      alert('Empty string, or you did not change value');
    }
  }

  render() {
    const { tasks = {} } = this.props;

    return (
    <div className = "list-item">
    <Dialog 
        openDialog = {this.state.openDialog}
        handleCloseDialog = {this.handleCloseDialog}
        handleChangeValue = {this.handleChangeTask}
        defaultValue = {this.state.valueDialogFieldByDefault}
        />

    <List>
    {Object.keys(tasks).map((key, index) => {
      const value = tasks[key];
      const selectItem = this.state.selected.includes(key);

      return (
        <ListItem key={index} className = {selectItem?'select':'unselect'}>
          <input type="checkbox" value={index} onChange={() => this.handleChahgeCheckbox(key)} 
          checked = {selectItem}
          />
          {value}
          <i className="far fa-edit edit" onClick = {()=>{
            this.handleClickOpenDialog();
            this.setState({valueDialogFieldByDefault:value});
            this.setState({keyEditedTask: key});
          }}></i>
          <i className="fas fa-times close" onClick = {() => !selectItem?this.handleRemove(key):false}></i>
        </ListItem>
      );
      })}
    </List>

    <Button variant="raised" color="primary" onClick = {this.handleClearState}>
        Unselect
      </Button>
    <Button variant="raised" color="secondary" onClick = {() => this.props.onRemove(this.state.selected)}>
        Delete Selected
      </Button>
</div>
    );
  }
}

export default Radium(ComponentList);