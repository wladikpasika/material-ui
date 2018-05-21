import React from 'react';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

export default (props) => (
  <AppBar title={ props.title } iconStyleLeft = {{display:'none'}}/>
);



