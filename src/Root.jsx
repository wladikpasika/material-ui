import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Controls from './Controls';
import List from './List';
import Header from './Header'
import Tolbar from './Tolbar'


class Root extends Component {

  state = {
    tasks: {}
  }
  
  iterator = 0;

  handleAddItem = (value = '') => {
    const { tasks } = this.state;

    this.setState({
      tasks: {
        ...tasks,
        [this.iterator++]: value
      }
    });
  }

  handleEditItem = (key, newValue) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);
    newItems[key] = newValue;

    this.setState({ tasks: newItems });
  }

  handleRemoveItem = (keys) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);
    
    keys.forEach((removedKey) => {
      newItems[removedKey]?delete newItems[removedKey]:false
    });

    this.setState({ tasks: newItems });
  }

  render() {
    const { tasks } = this.state;

    return (
      <Fragment>
        <MuiThemeProvider>
          <Header title="ToDo List" />
        </MuiThemeProvider>
        <MuiThemeProvider><Tolbar/></MuiThemeProvider>
        <Controls
          placeholder="Enter task"
          onAdd={this.handleAddItem}
        />
        <List
          tasks={tasks}
          onEdit={this.handleEditItem}
          onRemove={this.handleRemoveItem}
        />
      </Fragment>
    );
  }
}

export default Root;

