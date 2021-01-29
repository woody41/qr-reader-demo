import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class QRreader extends Component {
  constructor(props){
    super(props)
  }
  
  
  render(){
    return(
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true">
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              keepMounted
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
    )
  }
}

export default QRreader;
