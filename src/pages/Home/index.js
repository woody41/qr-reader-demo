import React, { Component } from 'react'
import Nav from '/components/Nav';
import { Container } from '@material-ui/core';

class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return(
        <Container>
            <Nav></Nav>
        </Container>
    )
  }
}

export default Home;
