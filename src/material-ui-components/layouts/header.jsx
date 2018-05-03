import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

export default props => 
<AppBar title="Title" style = {{position: 'relative'}}>
    <Toolbar>
        <Typography variant = "headline">Header</Typography>
    </Toolbar>
</AppBar>