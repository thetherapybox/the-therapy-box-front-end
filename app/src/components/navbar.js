import React from "react"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Grid, Typography} from "@material-ui/core"
import TherapyBox from "../static/images/TherapyBox.png"

import {Link} from "react-router-dom"

export default function Navbar() {

    const styles = {
        navbarLink: {
            fontSize: '1.2em'
        }
    }
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
                            <ShoppingCartIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}