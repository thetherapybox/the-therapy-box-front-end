import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"

import {Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography} from "@material-ui/core"
import {Pagination} from "@material-ui/lab"

import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

/* 
    Feed this dummy data in, and we will hook it up to the actual data later.
    
*/

export default function ActivityLibrary() {

    const products = useSelector(state => state.activityboxes)

    const [searchFilter, setSearchFilter] = useState('')
    const [numOfPages, setNumOfPages] = useState(Math.ceil(products.length / 6))
    const [page, setPage] = useState(1)

    const styles = {
        pageTitle: {
            fontFamily: "Arimo",
            fontWeight: "900",
            margin: "25px 20px 25px 20px",
            color: "#434343",
        },
        backDrop: {
            background: "#F2F2F2",
            padding: '30px',
            minHeight: '850px',
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

    const filteredProducts = products && products.filter(activity => activity.title.toLowerCase().includes(searchFilter.toLowerCase())
                    || activity.subTitle.toLowerCase().includes(searchFilter.toLowerCase()))

    useEffect(() => {
        if(filteredProducts) setNumOfPages(Math.ceil(filteredProducts.length/6))
    }, [filteredProducts])

    useEffect(() => {
        if(page > numOfPages) setPage(Math.max(1,numOfPages))
    }, [numOfPages, page])

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
                    <Grid container spacing={10} style={{height: '1000px'}}>
                        {filteredProducts ? (filteredProducts
                        .slice(6*(page-1), 6*page)
                        .map(activity => {
                            return(
                                <Grid item
                                    md={4}
                                    sm={6}
                                    xs={12}
                                >
                                    <Card style={{padding: '0px !important', margin: '0px'}}>
                                        <CardMedia>
                                            <img src={activity.photos[0].url} alt={activity.title} style={{objectFit: 'cover', width: '100%'}}/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography align={'left'} style={styles.activityBoxID}>
                                                Activity Box #{activity.id.slice(activity.id.length-6)}
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
                                                                >{tag.name}{idx !== activity.tags.length - 1? <span style={{color: 'black'}}>, </span>: ''}</span>
                                                            )
                                                        })}
                                                    </Typography>
                                                    
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button
                                                        style={{color: "#C80ACA", border: "#C80ACA solid 1px", textTransform: "none"}}
                                                        variant={'outlined'}
                                                        onClick={ev => window.location.href = `/activities/${activity.id}`}
                                                    >Explore</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })):("Loading...")}
                    </Grid>
                    <Grid container justify={'flex-end'}>
                        <Pagination 
                            page={page}
                            align={'right'}
                            count={numOfPages}
                            boundaryCount={5}
                            style={{marginTop: '70px'}}
                            onChange={(ev, page) => setPage(page)}
                        />
                    </Grid>
                    
                </Container>
            </div>
        </>
    )
}