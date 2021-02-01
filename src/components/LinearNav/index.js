import React, { Component } from 'react'
import { Container, Breadcrumbs, Typography, Link, Grid } from '@material-ui/core';
import UserMenu from '../UserMenu/';

class LinearNav extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <Container maxWidth="false" disableGutters>
        <Grid container spacing={0}>
          <Grid item sm={12}>
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
        </Grid>
      </Container>
    )
  }
}

export default LinearNav;
