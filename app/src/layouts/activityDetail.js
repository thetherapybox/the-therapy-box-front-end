import React, {useState} from "react"
import {Button, Container, Grid, TextField} from "@material-ui/core"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"

import DateFnsUtils from '@date-io/date-fns';


import {useParams} from "react-router-dom"

import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const EXAMPLE_DATA = {
    id: 1,
    title: "A Kitten Tour of New Zealand",
    cost: 15,
    durationString: "1 month and 3 days",
    durationDays: 33,
    photos: [
        "http://placekitten.com/g/590/360",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
        "http://placekitten.com/g/100/100",
    ],
    details: [
        {
            title: "Gumboot Throwing Game",
            description: "Try to throw the gumboots onto the mat etc...",
        },
        {
            title: "Another bullet point",
            description: "With some relevant information",
        },
        {
            title: "Yet another bullet point",
            description: "Extra info gallore!"
        }
    ]
}

export default function ProductDetail() {

    let {id} = useParams()

    const styles = {
        backDrop: {
            background: "#F2F2F2",
            padding: '30px',
        },
        grids: {
            padding: '20px'
        },
        activityBoxID: {
            color: '#C80ACA',
            fontFamily: "Arimo",
            fontWeight: 'bold',
            fontSize: '16px',
        },
        title: {
            color: '#434343',
            fontFamily: "Arimo",
            fontWeight: 'bold',
            fontSize: '36px',
        },
        cost: {
            color: '#C80ACA',
            fontFamily: "Arimo",
            fontWeight: 'bold',
            fontSize: '36px',
            marginRight: '15px',
            
        },
        duration: {
            color: '#434343',
            fontFamily: "Arimo",
            fontWeight: 'bold',
            fontSize: '18px',
        },
        datePickBox: {
            background: 'white',
            padding: '5px',
            maxWidth: '350px'
        },
        list: {
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    }

    /* 
        Design: 
        https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=970%3A1552&scaling=min-zoom
        
        Include all components in the /components/activityDetail folder
        
        1. Build and pipeline in the above data into the above design.
        2. Build the calendar components for start date and end date into a form with
           a submit button that is currently disabled.  (Can use Material UI's calendar)
        3. Bullet points are called "details" in the above object.
    */

    const [selectedDate, setSelectedDate] = useState(new Date())

    const returnDate = () => {
        let newDate = new Date(selectedDate)
        newDate.setDate(newDate.getDate() + EXAMPLE_DATA.durationDays)
        return newDate
    }

    return(
    <>
    <div style={{margin:'30px'}}>
        <Container>
            <Grid container justify={'flex-end'} alignItems={'center'}>
                <Grid item>
                    <TextField 
                        variant="outlined" 
                        label="Search" 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )}}
                    />
                </Grid>
            </Grid>
        </Container>
    </div>
    <div style={styles.backDrop}>
        <Container>
            <Grid container justify={'center'}>
                  <Grid item style={styles.grids}>
                        <img src={EXAMPLE_DATA.photos[0]} alt={EXAMPLE_DATA.title} /> <br />
                        <Grid container justify={'space-between'} style={{marginTop: '20px'}}>
                                {EXAMPLE_DATA.photos.slice(1).map((photo, photoID) => <Grid item><img src={photo} alt={EXAMPLE_DATA.title} /></Grid>)}
                        </Grid>
                  </Grid>
                  <Grid item style={styles.grids}>
                        <div style={styles.activityBoxID} align="left">
                            Activity Box #{id}
                        </div>
                        <h1 style={styles.title} align="left">{EXAMPLE_DATA.title}</h1>
                        <Grid container alignItems={'center'}>
                            <Grid item>
                                <div style={styles.cost} align="left">${EXAMPLE_DATA.cost}</div>
                            </Grid>
                            <Grid item>
                                <div style={styles.duration}>Duration: {EXAMPLE_DATA.durationString}</div>
                            </Grid>
                        </Grid>
                        <div align="left" style={{...styles.duration, marginTop: '25px', marginBottom: '15px'}}>
                            Select shipping date:
                        </div>
                        <Grid container style={styles.datePickBox} alignItems={'center'}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Shipping Date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={ev => setSelectedDate(ev)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    style={{width: '150px'}}
                                /> 
                                <ArrowForwardIcon />
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Return Date"
                                    format="MM/dd/yyyy"
                                    value={returnDate()}
                                    disabled={true}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    style={{width: '150px'}}
                                /> 
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <div align="left" style={{marginTop: '20px'}}>
                            <Button 
                                variant={'contained'} 
                                color={'primary'} 
                                align="left" 
                                style={{background: '#CCCCCC', height: '60px', width: '180px'}}
                                href={'/shoppingcart'}>
                                Add to Cart
                            </Button>
                        </div>
                        <div align="left" style={{marginTop: '35px'}}>
                                <div style={{...styles.duration, fontSize: '16px', fontWeight: 'normal'}}>
                                    <b>This Special Activity Box Contains:</b>
                                    <ul>
                                        {EXAMPLE_DATA.details.map(detail => {
                                            return(<li style={styles.list}><b>{detail.title}</b> - {detail.description}</li>)
                                        })}
                                    </ul>
                                </div>
                        </div>
                  </Grid>
            </Grid>
        </Container>
    </div>
    </>)
}