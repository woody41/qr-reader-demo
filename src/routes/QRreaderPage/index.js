import React, { Component } from 'react'
import { Container } from '@material-ui/core';

import QRreader from '../../components/QRreader/';

class QRreaderPage extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      runScanner: true
    };

  }

  handleReader = e => {

    if(this.state.runScanner) { //check if we should to scan
      if(e != null && e.length > 0) { //test of incoming data for length
        this.setState({result: e}); //loaded readed QR
        this.setState({runScanner: false}); //disable reading QR
        //value just loaded
      } else {
        //omitting, value already loaded
      }
    }
  }
  render(){

    return(
        <Container maxWidth="md">
            <QRreader handleReader={this.handleReader} result={this.state.result} runComponent={this.state.runScanner}></QRreader>
            Value: { this.state.result }
        </Container>
    )
  }
}

export default QRreaderPage;
