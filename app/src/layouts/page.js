import React from 'react';

import {Container} from "@material-ui/core"

import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        } from "react-router-dom"

import Navbar from "../components/navbar"


export default function PageLayout() {
    return (<Router>
                <Container maxWidth="lg">
                    <Navbar />
                    <Switch>
                        <Route path="/products">
                            <div style={{marginTop: '200px'}}>Wow look at all these products</div>
                        </Route>
                        <Route path="/shoppingcart">
                            <div style={{marginTop: '200px'}}>Get ready to check out!</div>
                        </Route>
                    </Switch>
                </Container>
            </Router>)
}