import React, {useState} from "react"
import {Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography} from "@material-ui/core"
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

/* 
    Feed this dummy data in, and we will hook it up to the actual data later.
    
*/
const EXAMPLE_DATA = [
        {
            img: "http://placekitten.com/g/328/194",
            activityBoxID: 1,
            title: "A Kitten Tour Of New Zealand",
            subTitle: "A Very Special Cativity Box",
            tags: [
                "cat",
                "kitten"
            ]
        },
        {
            img: "http://placekitten.com/g/656/388",
            activityBoxID: 2,
            title: "A Meowly Tour Of New Zealand",
            subTitle: "A Very Unique Cativity Box",
            tags: [
                "meow",
                "cat"
            ]
        }
    ]


export default function ActivityLibrary() {

    const [searchFilter, setSearchFilter] = useState('')

    const styles = {
        pageTitle: {
            fontFamily: "Arimo",
            fontWeight: "900",
            margin: "25px 20px 25px 20px",
            color: "#434343",
        },
        backDrop: {
            background: "#F2F2F2",
            padding: '30px'
        },
        activityBoxID: {
            fontFamily: "Arimo",
            fontWeight: "900",
            color: '#C80ACA',
            fontSize: '10px',
            lineHeight: '16px',
            letterSpacing: '1.5px'
        },
        title: {
            fontFamily: "Arimo",
            fontWeight: "900",
            fontSize: '20px'
        },
        subTitle: {
            fontFamily: "Arimo",
            fontWeight: "500",
            fontSize: '14px',
            color: "#434343",
        }
    }

    /* 
        Design:
        https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=970%3A903&scaling=min-zoom
        
        1. Build the layout using EXAMPLE_DATA.map() to build the repeatable components.
        2. Use Card and Typography components stylized to build the individual
        component that will repeat.
    */


    return (
        <>
            <Container>
                <Grid container justify={'space-between'} alignItems={'center'}>
                    <Grid item>
                        <Typography
                            variant={'h4'}
                            align={'left'}
                            style={styles.pageTitle}
                        >Activity Library</Typography>
                    </Grid>
                    <Grid item>
                        <TextField 
                            label={'Search'}
                            variant={'outlined'}
                            style={{margin: '25px'}}
                            value={searchFilter}
                            onChange={ev => setSearchFilter(ev.target.value)}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <div style={styles.backDrop}>
                <Container>
                    <Grid container spacing={10}>
                        {EXAMPLE_DATA
                        .filter(activity => activity.title.toLowerCase().includes(searchFilter.toLowerCase()) 
                        || activity.subTitle.toLowerCase().includes(searchFilter.toLowerCase()))
                        .map(activity => {
                            return(
                                <Grid item
                                    md={4}
                                    sm={6}
                                    xs={12}
                                >
                                    <Card style={{padding: '0px !important', margin: '0px'}}>
                                        <CardMedia>
                                            <img src={activity.img} style={{objectFit: 'cover', width: '100%'}}/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography align={'left'} style={styles.activityBoxID}>
                                                Activity Box #{activity.activityBoxID}
                                            </Typography>
                                            <Typography align={'left'} variant={'h6'} style={styles.title}>
                                                {activity.title}
                                            </Typography>
                                            <Typography align={'left'} style={styles.subTitle}>
                                                {activity.subTitle}
                                            </Typography>
                                            <Grid container 
                                                justify={'space-between'}
                                                alignItems={'flex-end'} 
                                                style={{marginTop: '40px'}}>
                                                <Grid item xs={8}>
                                                    <Typography align={'left'}>
                                                        <span style={{marginRight: '10px'}}>Tags: </span>
                                                        {activity.tags.map((tag, idx) => {
                                                            return(
                                                                <span
                                                                    style={{textTransform: 'uppercase',
                                                                            color: '#C80ACA'}}
                                                                >{tag}{idx !== activity.tags.length - 1? <span style={{color: 'black'}}>, </span>: ''}</span>
                                                            )
                                                        })}
                                                    </Typography>
                                                    
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button
                                                        style={{color: "#C80ACA", border: "#C80ACA solid 1px", textTransform: "none"}}
                                                        variant={'outlined'}
                                                    >Explore</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </div>
        </>
    )
}