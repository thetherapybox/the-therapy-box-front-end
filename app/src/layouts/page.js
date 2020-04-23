import React from 'react';

import {BrowserRouter as Router,
        Switch,
        Route,
        } from "react-router-dom"

import Navbar from "../components/navbar"
import HomePage from "./homePage"
import ActivityDetail from "./activityDetail"
import ActivityLibrary from "./activityLibrary"
import AboutUs from "./aboutUs"
import ContactUs from "./contactUs"
import ShoppingCart from "./shoppingCart"

import Login from "../components/login"

export default function PageLayout() {
    return (<Router>
                <Switch>
                    <Route exact path="/activities">
                        <Navbar />
                        <ActivityLibrary />
                    </Route>
                    <Route exact path="/activities/:id">
                        <Navbar />
                        <ActivityDetail />
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
            </Router>)
}