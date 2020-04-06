import React from 'react';
import './App.css';

import {useSelector} from "react-redux"
import Login from "./components/login"
import PageLayout from "./layouts/page"

function App() {

    const user = useSelector(state => state.user)
    const hasUserToken = user.token !== undefined;

  return (
    <div className="App">
        {!hasUserToken ? (<Login />) : (<PageLayout />)}
    </div>
  )
}

export default App;
