import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LinearNav from '../../components/LinearNav'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
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
                    <Grid container spacing={3}>


                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>
                        <Grid item lg={1} md={2} sm={3}>
                          <Paper className={classes.paper}>lg=1 md=2 sm=3</Paper>
                        </Grid>

                        <Grid item xs={12} >
                          <Paper className={classes.paper}>xs=12</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                <Grid item sm={12}>
                    <Footer />
                </Grid>
                </Grid>
            </Grid>
        </Container>
  );
}