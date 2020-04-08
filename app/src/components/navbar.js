import React from "react"
import {ShoppingCart, ExitToApp} from '@material-ui/icons';
import {Button, Grid, Typography} from "@material-ui/core"
import TherapyBox from "../static/images/TherapyBox.png"

import {useDispatch} from "react-redux"

import setUserTokenAction from "../actions/user"

import {dropCookie} from "./login"

import {Link} from "react-router-dom"

export default function Navbar() {

    const styles = {
        navbarLink: {
            fontSize: '1.2em'
        }
    }

    const dispatch = useDispatch()

    return (
        <Grid container 
            position={'static'} 
            justify={'space-between'}  
            alignItems={'center'}>
        
            <Grid item style={{padding: '20px'}}>
                <img src={TherapyBox} alt={"The Therapy Box Activity Boxes for Care Homes"} />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Grid container 
                    position={'static'}
                    justify={'space-around'}
                    alignItems={'center'}>
                    <Grid item>
                        <Link to="/link">
                            <Typography style={styles.navbarLink}>
                                Example Link
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/aboutus" >
                            <Typography style={styles.navbarLink}>
                                About Us
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/products" >
                            <Typography  style={styles.navbarLink}>
                                Products
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/shoppingcart">
                            <ShoppingCart />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={ev => {
                                dropCookie('token')
                                dispatch(setUserTokenAction(undefined))}
                            }
                        ><ExitToApp /></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}