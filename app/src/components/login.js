import React from "react"
import {TextField, Button} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import Strapi from "../strapi"

import setUserTokenAction from "../actions/user"

import {useSelector, useDispatch} from "react-redux"

export default function Login(){

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const textFieldStyle = {style: {color: '#fff', margin: '5px'}}

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [authenticationError, setAuthenticationError] = React.useState('')

    const showError = authenticationError != ''
    const userAuthenticated = user.token != undefined

    return (
        <div>
            <p>Test Login for The Therapy Box</p>
            {userAuthenticated ? <Alert severity="success" style={{margin: '20px'}}>Login Successful</Alert> : ""}
            {showError ? <Alert severity="error" style={{margin: '20px'}}>{authenticationError}</Alert> : ""}
            <TextField
                variant={"filled"}
                label={"Email"}
                color="primary"
                InputLabelProps={textFieldStyle}
                InputProps={textFieldStyle}
                value={email}
                onChange={ev => setEmail(ev.target.value)}
            />

            <TextField 
                variant={"filled"}
                label={"Password"} 
                type={"password"} 
                InputLabelProps={textFieldStyle}
                InputProps={textFieldStyle}
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            /><br />
            <Button
                variant={'contained'}
                color={'primary'}
                style={{margin: '30px'}}
                onClick={ev => {
                    Strapi.login(email, password).then(res => {
                        dispatch(setUserTokenAction(undefined))
                        if(res.statusCode===400) 
                            setAuthenticationError('Invalid Username and/or Password')
                        else if(res.jwt === undefined)
                            setAuthenticationError('Invalid Token Received.  Please Reload.')
                        else {
                            setAuthenticationError('')
                            dispatch(setUserTokenAction(res.jwt))
                        }
                    })
                }}
            >Login
            </Button>
        </div>
    )
}