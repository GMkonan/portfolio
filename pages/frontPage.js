import React from 'react';
import {Box, Typography, makeStyles, Grid, Avatar} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Particle from '../components/Particle';
import ReactTyped from 'react-typed';
import avatar from './../images/Nobg.png';

const FrontPage = (props) => {
    const useStyles = makeStyles((theme) => ({
        avatar: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            margin: theme.spacing(1),
            borderStyle: "solid",
            borderColor: "grey"
          },

        title:{
            fontSize: "3.5rem",
            fontFamily: "Pixer",
            fontWeight: "bold",
            color:"white",
            [theme.breakpoints.down('sm')] : {
                fontSize: "2.5rem"
            },
            [theme.breakpoints.down('xs')] : {
                fontSize: "1.5rem"
            },
        },
        subTitle: {
            color: "white"
        },
        height: {
            position: "relative",
            height: "99.4vh",
        },
        partics: {
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1"
        },
        textBox: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
    }));

    let msgs = ["SELF-LEARNING","SOFTWARE DEVELOPER"];

    const classes = useStyles();
    return (
        <Box className={classes.height}>
        <Box className={classes.partics} bgcolor="#161617" id="frontPage" >
        <Particle />
        </Box>
        <Box className={classes.textBox}> 
        <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Guilherme" />
        </Grid>
        <Typography>
        <ReactTyped className={classes.title} strings={['Guilherme Monteiro']} typeSpeed={40} />
        </Typography>
        <ReactTyped className={classes.subTitle} strings={msgs} typeSpeed={50} backSpeed={40} loop/>
        </Box>
        </Box>
        
    )
}

export default withWidth() (FrontPage);