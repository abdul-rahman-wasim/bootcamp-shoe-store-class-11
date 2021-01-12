import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";

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
  image: {
    width: "300px",
    height: "350px",
  },
}));

const ProductItem = () => {
    const {id}=useParams();
    const shoe=Shoes[id]
    const classes = useStyles();

    if(!shoe){
        <h2>No Product Found</h2>
    }

    return (
        <div className={classes.root}>
        <Paper elevation={3} >
            <h2>Welcome to Product Item</h2>
            <h3>{shoe.name}</h3>
                <img
                  className={classes.image}
                  src={shoe.img}
                  alt="Shoe Picture"
                ></img>
        </Paper>
      </div>
    )
}

export default ProductItem
