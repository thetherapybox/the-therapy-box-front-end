import React, {useEffect, useState} from "react"
import {ShoppingCart, ArrowDropDown} from '@material-ui/icons';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Typography, } from "@material-ui/core"
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
    const userHasToken = user.token !== undefined

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const dispatch = useDispatch()

    const navBarSubComponent = <Grid item xs={12} sm={8} md={6}>
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
                                style={styles.navbarLinkContainer}
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

        const navBarSubComponentCollapsed = <Grid container direction={'column'}>
                        <Grid item>
                            <Link to="/activities" style={styles.navbarLinkContainer}>
                                <Typography style={styles.navbarLink}>
                                    Activity Library
                                </Typography>
                            </Link> 
                        </Grid>
           
                        <Link to="/aboutus" style={styles.navbarLinkContainer}>
                            <Typography style={styles.navbarLink}>
                                About
                            </Typography>
                        </Link>
      
                
                        <Link to="/contact" style={styles.navbarLinkContainer}>
                            <Typography  style={styles.navbarLink}>
                                Contact
                            </Typography>
                        </Link>
            
            
                        {userHasToken ? (
                            <Link
                                styles={styles.navbarLinkContainer}
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
                 
                        
                            <Link to="/shoppingcart" style={styles.navbarLinkContainer}>
                                <Typography style={styles.navbarLink}>
                                    Shopping Cart
                                </Typography>
                            </Link>
                  
                    </Grid>
    
    useEffect(()=> {
        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth)
        })
    }, [])

    return (
        <Grid container 
            position={'static'} 
            justify={'space-between'}  
            alignItems={'center'}
            direction={windowSize < 960 ? "column" : "row"}>
            
        
            <Grid item style={{padding: '20px'}}>
                <Link to='/'>
                    <img src={TherapyBox} alt={"The Therapy Box Activity Boxes for Care Homes"} />
                </Link>
            </Grid>
                    {windowSize < 960 ? (
                        <ExpansionPanel style={{width: '100%', marginBottom: '20px'}}>
                            <ExpansionPanelSummary>
                                <Grid container justify={'space-between'}>
                                    <Grid item>
                                        <Typography style={styles.navbarLink}>
                                            Navigate
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <ArrowDropDown/>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                {navBarSubComponentCollapsed}
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ) : (
                        navBarSubComponent
                    )}
        </Grid>
    )
}