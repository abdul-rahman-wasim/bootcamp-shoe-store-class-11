import React from 'react'
import {BrowserRouter as Routes,
Route, Switch } from "react-router-dom";
import Home from './Home';
import NavBar from "./Nav";
import About from './About';
import Product from "./Product";
import ProductItem from "./ProductItem";


const Router = () => {
    return (
            <Routes>
                    <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route exact path="/about" component={About} ></Route>
                    <Route exact path="/product" component={Product} ></Route>
                    <Route exact path="/product/:id" component={ProductItem} ></Route>
                    <Route exact path="*" component={()=><h2>404 Not Found</h2>} ></Route>
                </Switch>
                
            </Routes>
    )
}

export default Router;
