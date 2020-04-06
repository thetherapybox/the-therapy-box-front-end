import React from "react"
import {Grid, TextField} from "@material-ui/core"

import Breadcrumb from "../components/breadcrumb"
export default function ProductDetail() {
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