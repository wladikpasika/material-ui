import React, { PureComponent, Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

class ComponentList extends PureComponent {

  state = {
    selected: [],
  }

  handleRemove = (key) => {
    this.props.onRemove([key]);
  }

  handleChahgeCheckbox = (key) => {
    const { selected } = this.state;

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

    if (value && value.trim()) {
      this.props.onEdit(value, key);
    }
  }



  render() {
    console.log(this.props);
    const { tasks = {} } = this.props.tasks;
    const { selected } = this.state;
    const verticalAlign = {
      width: "auto",
      display: "table-cell",
      verticalAlign: "middle"
    }

    return (
      <div className="list-item">
        <List>
          {
            Object.keys(tasks).map((key, index) => {
            const value = tasks[key];
            const selectItem = selected.includes(key);
            console.log(value);

            const leftHandler = (
              <Checkbox
                value={index}
                checked={selectItem}
                onCheck={() => this.handleChahgeCheckbox(key)}
                
              />
            )

            const rightHandler = (
              <IconMenu 
                style = {{
                  height:"auto",
                  width:"auto",
                  margin: "0"
                }}
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                
              >
                <MenuItem primaryText="Edit"
                  onClick={() => {
                    this.handleEditTask(value, key)
                    this.setState({ valueDialogFieldByDefault: value });
                    this.setState({ keyEditedTask: key });
                  }} />
                <MenuItem
                  primaryText="Delete"
                  onClick={() => {
                    !selectItem 
                    ? this.props.onAlertConfirm(key)
                    : false
                  }
                }
                />
              </IconMenu>
            )

            return (
              <ListItem
                key={index}
                className={selectItem ? 'select' : 'unselect'}
                leftIcon={leftHandler}
                rightIcon={rightHandler}
              >
                <span className="checkbox-content">
                  {value}
                </span>
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