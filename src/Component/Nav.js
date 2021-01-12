import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    
    textAlign:'left',
  },
  title: {
marginLeft:'8px',
color: 'inherit',
  textDecoration: 'inherit',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
           
            <Typography variant="h6" className={classes.title}>
           <Link to="/" className={classes.title}>Home</Link> 
          </Typography>

          <Typography variant="h6" className={classes.title}>
           <Link to="/about" className={classes.title}>About Us</Link> 
          </Typography>
         
          <Typography variant="h6" className={classes.title}>
           <Link to="/product" className={classes.title}>Products</Link> 
          </Typography>


        </Toolbar>
      </AppBar>
    </div>
  );
}