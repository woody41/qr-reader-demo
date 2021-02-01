import React, { useState } from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LinearNav from '../../components/LinearNav'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useTranslation} from 'react-i18next';
import './Home.scss'

const Template = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
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
            <Paper elevation={0} square >{t('TestingPaper')}</Paper>
          </Grid>
          <Grid item sm={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Template;
