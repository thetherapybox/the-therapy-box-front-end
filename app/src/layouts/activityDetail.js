import React from "react"
import {Grid, TextField} from "@material-ui/core"

import Breadcrumb from "../components/activityDetail/breadcrumb"


const EXAMPLE_DATA = {
    id: 1,
    title: "A Kitten Tour of New Zealand",
    cost: 15,
    duration: "1 month and 3 days",

    photos: [
        "http://placekitten.com/g/590/360",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
    ],
    details: [
        {
            title: "Gumboot Throwing Game",
            description: "Try to throw the gumboots onto the mat etc...",
        },
        {
            title: "Another bullet point",
            description: "With some relevant information",
        },
        {
            title: "Yet another bullet point",
            description: "Extra info gallore!"
        }
    ]
}

export default function ProductDetail() {

    /* 
        Design: 
        https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=970%3A1552&scaling=min-zoom
        
        Include all components in the /components/activityDetail folder
        
        1. Build and pipeline in the above data into the above design.
        2. Build the calendar components for start date and end date into a form with
           a submit button that is currently disabled.  (Can use Material UI's calendar)
        3. Bullet points are called "details" in the above object.
    */

    console.log(EXAMPLE_DATA)

    return(
    <div style={{margin:'30px'}}>
        <Grid container justify={'space-between'} alignItems={'center'}>
            <Grid item>
                <Breadcrumb />
            </Grid>
            <Grid item>
                <TextField variant="outlined" label="Search" />
            </Grid>
        </Grid>
    </div>)
}