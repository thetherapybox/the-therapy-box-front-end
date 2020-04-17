import React from 'react';

import {Container} from "@material-ui/core"

import {BrowserRouter as Router,
        Switch,
        Route,
        } from "react-router-dom"

import Navbar from "../components/navbar"
import HomePage from "./homePage"
import ActivityLibrary from "./activityLibrary"
import AboutUs from "./aboutUs"
import ContactUs from "./contactUs"
import ShoppingCart from "./shoppingCart"

import Login from "../components/login"

export default function PageLayout() {
    return (<Router>
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact path="/activities">
                            <Navbar />
                            <ActivityLibrary />
                        </Route>
                        <Route exact path="/aboutus">
                            <Navbar />
                            <AboutUs />
                        </Route>
                        <Route exact path="/contact">
                            <Navbar />
                            <ContactUs />
                        </Route>
                        <Route exact path="/shoppingcart">
                            <Navbar />
                            <ShoppingCart />
                        </Route>
                        <Route exact path="/signin">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Navbar /> 
                            <HomePage />
                        </Route>
                    </Switch>
                </Container>
            </Router>)
}