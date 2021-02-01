import React, { Component } from 'react'
import { Container, Typography, Link, Grid } from '@material-ui/core';
import UserMenu from '../UserMenu/';
import CardFooter from '../CardFooter/';

class Footer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={3}>
            <Grid item md={3} sm="{6}">
                <UserMenu/>
            </Grid>
            <Grid item md={3} sm="{6}">

            </Grid>
            <Grid item md={3} sm="{12}" alignItems="center">
                <CardFooter/>
            </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Footer;
