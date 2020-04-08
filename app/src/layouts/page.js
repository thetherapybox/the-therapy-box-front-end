import React from 'react';

import {Container} from "@material-ui/core"

import {BrowserRouter as Router,
        Switch,
        Route,
        } from "react-router-dom"

import Navbar from "../components/navbar"
import ProductDetail from "./productDetail"
import Login from "../components/login"

export default function PageLayout() {
    return (<Router>
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact path="/activities">
                            <Navbar />
                            <ProductDetail />
                        </Route>
                        <Route exact path="/aboutus">
                            <Navbar />
                            <div>Forged in the fires of Mount Doom over 5,000 years ago, our activity boxes both entertain and ward off Sauron</div>
                        </Route>
                        <Route exact path="/contact">
                            <Navbar />
                            <div>Contact us!</div>
                        </Route>
                        <Route exact path="/shoppingcart">
                            <Navbar />
                            <div>Get ready to check out!</div>
                        </Route>
                        <Route exact path="/signin">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Navbar /> 
                        </Route>
                    </Switch>
                </Container>
            </Router>)
}