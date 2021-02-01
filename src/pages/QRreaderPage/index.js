import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core';

import QRreader from '../../components/QRreader/';

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LinearNav from '../../components/LinearNav'

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
        <Container maxWidth="false" disableGutters>
            <Grid container spacing={1}>
                <Grid item sm={12}>
                    <Header />
                </Grid>
                <Grid item md={2} sm={3}>
                    <Nav />
                </Grid>
                <Grid item md={10} sm={9} >
                    <LinearNav />
                    <QRreader handleReader={this.handleReader} result={this.state.result} runComponent={this.state.runScanner}></QRreader>
                    Value here: { this.state.result }
                </Grid>
            </Grid>
        </Container>
    )
  }
}

export default QRreaderPage;
