import React, { Component, Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';


import listStyles from './css/list.css';

const ControlsButtons = (props) => {
  return (
    <div className="list-btn-wrp">
      <RaisedButton
        label="Unselect" primary={true}
        onClick={props.onClear}
      />
      <RaisedButton
        label="Delete Selected" secondary={true}
        onClick={props.onRemove}
      />
    </div>
  )
}

class ComponentList extends Component {

  state = {
    selected: [],
  }

  handleRemove = (key) => {
    this.props.onRemove([key]);
  }

  handleChahgeCheckbox = (key) => {
    const { selected } = this.state;
    console.log('lol');

    const newSelected = selected.includes(key)
      ? selected.filter(oldKey => oldKey !== key)
      : [...selected, key];

    this.setState({ selected: newSelected });
  }

  handleClearState = () => {
    const newSelected = [];
    this.setState({ selected: newSelected });
  }

  handleEditTask = (value, key) => {
    
    if(value&&value.trim()){
      this.props.onEdit( value, key );
    }
  }


  render() {
    const { tasks = {} } = this.props;
    const { selected } = this.state;
    const verticalAlign = {
        width: "auto",
        display: "table-cell",
        verticalAlign: "middle"
    }

    return (
      <div className="list-item">
        <List>
          {Object.keys(tasks).map((key, index) => {
            const value = tasks[key];
            const selectItem = selected.includes(key);

            return (
              <ListItem key={index} className={selectItem ? 'select' : 'unselect'}>
              
                  <Checkbox
                  value={index}
                  checked = {selectItem} 
                  onCheck = {() => {
                    this.handleChahgeCheckbox(key);
                  }}
                  style = {verticalAlign}
                />   
                  <span className="checkbox-content" style={verticalAlign}>
                  {value}
                  </span>
                  <FontIcon
                  className = "far fa-edit edit"
                  style = {verticalAlign}
                  onClick = {()=>{
                    this.handleEditTask(value, key)
                    this.setState({valueDialogFieldByDefault:value});
                    this.setState({keyEditedTask: key});
                  }}
                  />
                  <FontIcon
                  className = "fas fa-times close"
                  style = {verticalAlign}
                  onClick = {() => !selectItem?this.handleRemove(key):false}
                  />
              </ListItem>
            );
          })}
        </List>
        {
          selected.length === 0 //conditional, if is cheked task, show buttons
            ? null
            : (
              <ControlsButtons
                onClear={this.handleClearState}
                onRemove={() => {
                  this.props.onRemove(selected);
                  this.handleClearState();
                }}
              />
            )
        }
      </div>
    );
  }
}

export default Radium(ComponentList);