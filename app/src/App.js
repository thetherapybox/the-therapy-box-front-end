import React, { useEffect } from 'react';
import {useDispatch} from "react-redux"

import './App.css';
import PageLayout from "./layouts/page"
import {FetchActivityBoxes} from "./actions/activityboxes"

import backendURL from "./backend"

const bURL = backendURL.backendURL

 
async function importGraphQLFromStrapi(url) {

    const fetchRequest = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                query: `
                    query {
                        activityboxes {
                            id
                            title
                            price
                            duration_days
                            description
                            photos {
                                url
                            }
                            tags {
                              name  
                            }
                        }
                    }`
            })
        })
    const data = await fetchRequest.json()
    return data
}

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        const url = `${bURL}/graphql`
        importGraphQLFromStrapi(url).then(data => dispatch(FetchActivityBoxes(data.data.activityboxes)))
    }, [dispatch])

  return (
    <div className="App">
        <PageLayout />
    </div>
  )
}

export default App;
