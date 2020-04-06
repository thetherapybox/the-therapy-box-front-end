import React from 'react';

import {Container} from "@material-ui/core"

import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        } from "react-router-dom"

import Navbar from "../components/navbar"
import ProductDetail from "./productDetail"


export default function PageLayout() {
    return (<Router>
                <Container maxWidth="lg">
                    <Navbar />
                    <Switch>
                        <Route path="/link">
                            <div>Example Page Text</div>
                        </Route>
                        <Route path="/aboutus">
                            <div>Forged in the fires of Mount Doom over 5,000 years ago, our activity boxes both entertain and ward off Sauron</div>
                        </Route>
                        <Route path="/products">
                            <ProductDetail />
                        </Route>
                        <Route path="/shoppingcart">
                            <div>Get ready to check out!</div>
                        </Route>
                    </Switch>
                </Container>
            </Router>)
}