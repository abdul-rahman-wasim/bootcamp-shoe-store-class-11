import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginBottom:'1px',
      width: ' 100%',
      height: '620px',
      textAlign: 'center',
      backgroundColor: '#f0f8ff',
    },
  },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Paper elevation={3} >
            <h2>Welcome to Home</h2>
        </Paper>
      </div>
    )
}

export default Home
