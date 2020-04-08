import React, {useEffect} from "react"
import {ShoppingCart} from '@material-ui/icons';
import {Grid, Typography} from "@material-ui/core"
import TherapyBox from "../static/images/TherapyBox.png"

import {useDispatch, useSelector} from "react-redux"

import setUserTokenAction from "../actions/user"

import {dropCookie} from "./cookie"

import {Link} from "react-router-dom"

export default function Navbar() {

    const styles = {
        navbarLink: {
            fontSize: '1.2em',
            fontFamily: 'Comfortaa',
            fontWeight: 'bold',
            color: '#2B0856',
        },
        navbarLinkContainer: {
            textDecoration: 'none'
        }
    }
    const user = useSelector(state => state.user)

    useEffect(()=> {
        console.log(user)
    }, [user])
    
    const userHasToken = user.token !== undefined
    
    const dispatch = useDispatch()

    return (
        <Grid container 
            position={'static'} 
            justify={'space-between'}  
            alignItems={'center'}>
        
            <Grid item style={{padding: '20px'}}>
                <Link to='/'>
                    <img src={TherapyBox} alt={"The Therapy Box Activity Boxes for Care Homes"} />
                </Link>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Grid container 
                    position={'static'}
                    justify={'space-around'}
                    alignItems={'center'}>
                    <Grid item>
                        <Link to="/activities" style={styles.navbarLinkContainer}>
                            <Typography style={styles.navbarLink}>
                                Activity Library
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/aboutus" style={styles.navbarLinkContainer}>
                            <Typography style={styles.navbarLink}>
                                About
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/contact" style={styles.navbarLinkContainer}>
                            <Typography  style={styles.navbarLink}>
                                Contact
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        {userHasToken ? (
                            <Link
                                onClick={ev => {
                                    dropCookie('token')
                                    dispatch(setUserTokenAction(undefined))}
                                }
                            >
                                <Typography style={styles.navbarLink}>
                                    Sign Out
                                </Typography>
                            </Link>
                        ) : (
                            <Link to="/signin" style={styles.navbarLinkContainer}>
                                <Typography style={styles.navbarLink}>
                                    Sign In
                                </Typography>
                            </Link>
                        )}
                    </Grid>
                    <Grid item>
                        <Link to="/shoppingcart">
                            <ShoppingCart />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}