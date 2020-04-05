import React from "react"
import {TextField, Button} from "@material-ui/core"

export default function Login(){

    const textFieldStyle = {style: {color: '#fff', margin: '5px'}}

    return (
        <div>
            <p>Test Login for The Therapy Box</p>
            <TextField
                variant={"filled"}
                label={"Email"}
                color="primary"
                InputLabelProps={textFieldStyle}
                InputProps={textFieldStyle}
            />

            <TextField 
                variant={"filled"}
                label={"Password"} 
                type={"password"} 
                InputLabelProps={textFieldStyle}
                InputProps={textFieldStyle}
            /><br />
            <Button
                variant={'contained'}
                color={'primary'}
                style={{margin: '30px'}}
            >Login

            </Button>
        </div>
    )
}