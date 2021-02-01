import React from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LinearNav from '../../components/LinearNav'
import { useI18n, useRouter } from '@daimler/ftk-core'
import './Home.scss'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);
/* const i18n = useI18n() */

function template() {
    
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


                        <Paper elevation={0} square >{/*i18n.translateToString('TestingPaper')*/}</Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default template;
