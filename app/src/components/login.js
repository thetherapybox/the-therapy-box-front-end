import React, { useEffect } from "react"
import {TextField, Button, Grid} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import Strapi from "../strapi"

import setUserTokenAction from "../actions/user"
import {ToggleAction} from "../actions/login"
import {getCookie} from "./cookie"

import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

import logo from "../logo.png"

export default function Login(){

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const login = useSelector(state => state.login)

    const textFieldStyle = {style: {margin: '5px'}}
    const buttonStyle = {
        background: '#E123E3', 
        color: 'white', 
        fontSize: '1.1em', 
        paddingLeft: '40px', 
        paddingRight: '40px', 
        paddingTop: '10px', 
        paddingBottom: '10px'
    }

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')
    const [authenticationError, setAuthenticationError] = React.useState('')

    const showError = authenticationError !== ''
    const userAuthenticated = user.token !== undefined

    const isAtLogin = login === 'login'
    const history = useHistory()

    return (
        <div>
            <header style={{paddingTop:'110px'}}>
                <img src={logo} alt="logo" />
                <Grid container justify={'center'} style={{marginTop: '35px'}}>
                    <Grid item style={{border: '1px lightgrey solid', padding:'20px', width:'100%', maxWidth: '590px', borderRadius: '15px', margin: '5px'}}>
                        <p style={{fontFamily: 'Comfortaa'}}>{isAtLogin ? "Login to The Therapy Box": "Register With The Therapy Box"}</p>
                        {userAuthenticated ? <Alert severity="success" style={{margin: '20px'}}>Logged in</Alert> : ""}
                        {showError ? <Alert severity="error" style={{margin: '20px'}}>{authenticationError}</Alert> : ""}
                        <TextField
                            variant={"outlined"}
                            label={"Email"}
                            color="primary"
                            InputLabelProps={textFieldStyle}
                            InputProps={textFieldStyle}
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                        /><br/>

                        <TextField 
                            variant={"outlined"}
                            label={"Password"} 
                            type={"password"} 
                            InputLabelProps={textFieldStyle}
                            InputProps={textFieldStyle}
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        /><br/>
                        {!isAtLogin ? (
                            <TextField 
                                variant={"outlined"}
                                label={"Re-enter password"}
                                type={"password"}
                                InputLabelProps={textFieldStyle}
                                InputProps={textFieldStyle}
                                value={rePassword}
                                onChange={ev => setRePassword(ev.target.value)}
                            />
                        ) : ("")}
                        <br />
                        <Grid container justify={'space-evenly'} style={{marginTop: '20px', marginBottom: '20px'}}>
                    
                            <Button
                                variant={'contained'}
                                style={buttonStyle}
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
                                                history.push('/')
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
                                                            history.push('/')
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    }
                                }}
                            >{isAtLogin ? "Continue" : "Register"}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{position: 'relative', maxWidth: '580px', margin: '0 auto'}}>
                    <hr
                        style={{margin: '0 auto', marginTop: '40px', color: 'black !important'}}
                    />
                    <div style={{position: 'absolute', left: '0px', right: '0px', top: '-8px'}}><div style={{background: 'white', maxWidth: '215px', margin: '0 auto', fontSize: '0.9em', fontFamily: 'Comfortaa'}}>{isAtLogin ? "New to The Therapy Box?" : "Returning Customer?"} </div></div>
                </div>
                
                <Button
                    style={{...buttonStyle, margin: '5px', marginTop: '30px', width: '100%', maxWidth: '580px'}}
                    variant={'contained'}
                    onClick={ev => {
                                setAuthenticationError('')
                                dispatch(ToggleAction())
                            }}
                >{isAtLogin ? "Create Your Therapy Box Account" : "Switch to Login"}
                </Button>
            </header>
        </div>
    )
}