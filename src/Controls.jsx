import React, { Component } from 'react';
import {FloatingActionButton} from 'material-ui';

import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

class Controls extends Component {

  state = {
    value: '',
  }

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
      alert('Empty Input!!!');
    }
  }

  render() {
    const { value } = this.state;
    const Style = { 
      position: 'relative',
      marginLeft: '20px',
      backgroundColor: '#f44336'
    }

    return (
      <div className="controls">
        <Input
        placeholder="Enter task"
        onChange={this.handleInput}
        value={value}
      />
        <Button variant="fab" aria-label="add" className="add-button" onClick={this.handlePress} style={Style}>
            <AddIcon />
        </Button>
        
      </div>
    );
  }

}

export default Controls;