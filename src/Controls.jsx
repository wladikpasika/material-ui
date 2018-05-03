import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        
      </div>
    );
  }

}

export default Controls;