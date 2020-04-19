import React from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


/*const EXAMPLE_DATA = [
    {
        id: 1,
        photo: "http://placekitten.com/g/280/169",
        title: "A Kitten Tour of New Zealand",
        shippingDate: new Date(2020, 3, 10),
        returnDate: new Date(2020, 5, 10),
        quantity: 1,
        price: 15
    }
]*/

export default function ShoppingCart() {
    /*
        Design:
        https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=994%3A81&scaling=min-zoom

        1. Change Shipping Date should be in there, but not yet functional.  We will
        transfer in, and make changes to the state in the redux store, but for now
        just use the dummy data to populate the components.

        2. Remove as well should be non-functional, the Shopping Cart will have its
        own reducer and portion of the redux store and we'll be able to modify or
        delete then.

        3. Please include the voucher/coupon section with Button from @material-ui/core,
        but also inactive.  This seciton will be fleshed out further later.

    */

    const styles = {
        pageTitle: {
            fontFamily: "Arimo",
            fontWeight: "900",
            margin: "25px 20px 25px 20px",
            color: "#434343",
        }
    }

    return(
      <Container>
        <Grid container>
          <Grid item sm={12}>
            <Typography
              variant={'h4'}
              align={'left'}
              style={styles.pageTitle}
            >Shopping Cart</Typography>
          </Grid>
          <Grid item sm={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{"width":"30%"}}>Item</TableCell>
                    <TableCell align="left" style={{"width":"40%"}}></TableCell>
                    <TableCell align="center" style={{"width":"10%"}}>Qty</TableCell>
                    <TableCell align="right" style={{"width":"20%"}}>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      <img src="http://placekitten.com/g/328/194" style={{"width":"100%"}} />
                    </TableCell>
                    <TableCell align="left" style={{ verticalAlign: 'top' }}>
                      <Typography variant={"subtitle1"}>
                        Activity Box #01
                      </Typography>
                      <Typography paragraph variant={"h6"}>
                        A Tikli Tour of New Zealand
                      </Typography>
                      <Typography variant={"body2"}>
                        Shipping date: 31 March 2020
                      </Typography>
                      <Typography variant={"body2"}>
                        Shipping date: 02 May 2020
                      </Typography>
                      <Typography variant={"caption"}>
                        <Link href="#">Change shipping date</Link>
                      </Typography>
                    </TableCell>
                    <TableCell align="center" style={{ verticalAlign: 'top' }}>
                      <Typography>1</Typography>
                    </TableCell>
                    <TableCell align="right" style={{ verticalAlign: 'top' }}>
                      <Typography paragraph>$15</Typography>
                      <Typography>
                        <Button variant="outlined" color="primary">Remove</Button>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{"border-bottom": "none"}}></TableCell>
                    <TableCell colSpan={3} style={{"border-bottom": "none"}}>
                      <Grid container spacing={2}>
                        <Grid item sm={8}><Typography>Subtotal</Typography></Grid>
                        <Grid item sm={4}><Typography align={"right"}>$15</Typography></Grid>
                        <Grid item sm={12}>
                          <Grid container spacing="2" justify="flex-end">
                            <Grid item><TextField label="Promotional Code" variant="outlined" size="small" /></Grid>
                            <Grid item><Button variant="outlined" color="primary">Apply</Button></Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm={8}><Typography paragraph>Includes GST</Typography></Grid>
                        <Grid item sm={4}><Typography paragraph align={"right"}>$1.96</Typography></Grid>
                        <Grid item sm={8}><Typography paragraph variant="h6">Total ($NZ)</Typography></Grid>
                        <Grid item sm={4}><Typography paragraph variant="h6" align={"right"}>$15</Typography></Grid>
                        <Grid item sm={12}>
                          <Grid container justify="flex-end">
                            <Grid item>
                              <Button variant="contained" color="primary" size="large">Checkout</Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item sm={12}>
            <Link>
              <Grid container>
                <Grid item>
                  <ArrowBackIosIcon />
                </Grid>
                <Grid item>
                  <Typography>Continue Shopping</Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Container>
    )
}
