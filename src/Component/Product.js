import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Shoes from "../shoes.json";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginBottom: "1px",
      width: " 100%",
      height: "620px",
      textAlign: "center",
      backgroundColor: "#f0f8ff",
    },
  },
  image: {
    width: "100px",
    height: "150px",
  },
  imgContainer: {
    display: "flex",
    flexWrap : "wrap",

  },
  divContainer: {
    textAlign:"center",
    width:"300px",
    marginLeft:"10px",
    color: 'inherit',
  textDecoration: 'inherit',
  },
}));

const Product = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h1>Welcome to Products</h1>
        <div className={classes.imgContainer} >
          {Object.keys(Shoes).map((shoe) => {
            return (
              <Link to={`/product/${shoe}`} key={shoe} className={classes.divContainer}>
                <Paper elevation={3}  >
                <h3>{Shoes[shoe].name}</h3>
                <img
                  className={classes.image}
                  src={Shoes[shoe].img}
                  alt="Shoe Picture"
                ></img>
                </Paper>
              </Link>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default Product;
