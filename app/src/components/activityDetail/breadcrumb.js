import React from "react"

import {Breadcrumbs, Typography} from "@material-ui/core"
export default function Breadcrumb() {
    return (
        <Breadcrumbs>
            <Typography color="inherit">Home</Typography>
            <Typography color="inherit">Activity Library</Typography>
            <Typography color="textPrimary">Activity Box #01</Typography>
        </Breadcrumbs>
    )
}