import React, { useEffect } from "react"
import {TextField, Button, Grid} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import Strapi from "../strapi"

import setUserTokenAction from "../actions/user"
import {ToggleAction} from "../actions/login"

import {useSelector, useDispatch} from "react-redux"

import logo from "../logo.svg"


const getCookie = (name) => {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

export const dropCookie = (name) => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
}

export default function Login(){

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const login = useSelector(state => state.login)

    const textFieldStyle = {style: {color: '#fff', margin: '5px'}}

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')
    const [authenticationError, setAuthenticationError] = React.useState('')

    const showError = authenticationError !== ''
    const userAuthenticated = user.token !== undefined

    const isAtLogin = login === 'login'

    useEffect(() => {
        const cookie = getCookie('token')
        if(cookie){
            dispatch(setUserTokenAction(cookie))
        }
    }, [dispatch])

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{isAtLogin ? "Login to The Therapy Box": "Register With The Therapy Box"}</p>
                {userAuthenticated ? <Alert severity="success" style={{margin: '20px'}}>Logged in</Alert> : ""}
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
                />
                {!isAtLogin ? (
                    <TextField 
                        variant={"filled"}
                        label={"Re-enter password"}
                        type={"password"}
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        value={rePassword}
                        onChange={ev => setRePassword(ev.target.value)}
                    />
                ) : ("")}
                <br />
                <Grid container justify={'space-evenly'}>
            
                    <Button
                        variant={'contained'}
                        color={'primary'}
                    
                        onClick={ev => {
                            if(isAtLogin){
                                Strapi.login(email, password).then(res => {
                                    dispatch(setUserTokenAction(undefined))
                                    if(res.statusCode===400) 
                                        setAuthenticationError('Invalid Username and/or Password')
                                    else if(res.jwt === undefined)
                                        setAuthenticationError('Invalid Token Received.  Please Reload.')
                                    else {
                                        setAuthenticationError('')
                                        document.cookie = `token=${res.jwt}`
                                        dispatch(setUserTokenAction(res.jwt))
                                    }
                                })
                            } else {
                                if(password !== rePassword) {
                                    setAuthenticationError('Passwords do not match.')
                                } else {
                                    Strapi.register(email, password).then(res => {
                                        if(res.status===400){
                                            setAuthenticationError('Email already in system.  Please Login.')
                                        } else if(res.status===200){
                                            Strapi.login(email, password).then(r => {
                                                dispatch(setUserTokenAction(undefined))
                                                if(r.statusCode===400) 
                                                    setAuthenticationError('Invalid Username and/or Password')
                                                else if(r.jwt === undefined)
                                                    setAuthenticationError('Invalid Token Received.  Please Reload.')
                                                else {
                                                    setAuthenticationError('')
                                                    document.cookie = `token=${r.jwt}`
                                                    dispatch(setUserTokenAction(r.jwt))
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        }}
                    >{isAtLogin ? "Login" : "Register"}
                    </Button>
        
                    <Button
                        variant={'contained'}
                        onClick={ev => {
                                    setAuthenticationError('')
                                    dispatch(ToggleAction()) 
                                }}
                    >{isAtLogin ? "Register New Account" : "Switch to Login"}
                    </Button>
                </Grid>
            </header>
        </div>
    )
}