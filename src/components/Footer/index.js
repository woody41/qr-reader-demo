import React, { Component } from 'react'
import { Container, Breadcrumbs, Typography, Link, Grid } from '@material-ui/core';
import UserMenu from '../UserMenu/';

class Footer extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return(                        
        <Container maxWidth="false">
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit">
                          DSFQ
                        </Link>
                        <Link color="inherit" href="/getting-started/installation/" >
                          Home
                        </Link>
                        <Link
                          color="textPrimary"
                          href="/components/breadcrumbs/"
                          aria-current="page"
                        >
                          Test
                        </Link>
                    </Breadcrumbs>                  
                </Grid>
                <Grid item md6={6}>
                    <UserMenu></UserMenu>
                </Grid>
            </Grid>
        </Container>
    )
  }
}

export default Footer;
