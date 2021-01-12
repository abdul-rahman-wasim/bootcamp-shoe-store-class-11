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

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Paper elevation={3} >
            <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique congue enim, ac consectetur ex elementum eu. Etiam nec enim diam. Nulla viverra leo sed nisl sagittis, quis elementum leo molestie. Sed dapibus, enim id blandit facilisis, risus tortor semper velit, scelerisque euismod ex dui vel massa. Praesent interdum libero dapibus diam bibendum porta. Quisque gravida dui diam, ac vehicula ligula lacinia a. Vestibulum porta egestas erat, et vehicula sem maximus in. Aenean at ipsum iaculis, pulvinar dolor sit amet, blandit lorem. Nulla sit amet feugiat nibh.
            </h2>
        </Paper>
      </div>
    )
}

export default About
