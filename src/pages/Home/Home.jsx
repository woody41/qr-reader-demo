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

import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Template = () => {
  const { t } = useTranslation();
  
  const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

  return (
    <div className="home">
      <Container maxWidth="false" disableGutters>
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Header />
          </Grid>
          <Grid item md={2} sm={3}>
            <Nav />
          </Grid>
          <Grid item md={10} sm={9} >
            <LinearNav />
            <Grid container sm={12}>
                <Grid item md={6} sm={12} >
                    <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography >{t('AC1')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            {t('AC1_CONTENT')}
                          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography >{t('AC2')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>

                            {t('AC2_CONTENT')}
                          </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
                          <Typography >{t('AC3')}</Typography>
                        </AccordionSummary>
                    </Accordion>
                </Grid>
                <Grid item md={6} sm={12} >
                    <Paper elevation={0} square >{t('TestingPaper')}</Paper>
                </Grid>
            </Grid>
            
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
