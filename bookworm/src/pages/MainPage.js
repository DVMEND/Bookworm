import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BookCard from '../components/bookCard';
//import withRoot from '../components/backgroundImage';
//import background from 'booskworm/assets/backgroundImage.png'
import BackgroundImagePage from '../components/background';
import '../index.css'
//import Carousel from 'react-material-ui-carousel';
//import MyProjectsExample from '../components/carousel';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',

  }));

export default function MainPage() {
    return (
        
        <Box sx={{ flexGrow: 1 }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Item>Book Info</Item>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Item>Book cover</Item>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Item>Recomendations</Item>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <BookCard/>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs = {12} md={4}>
                        <Item>Other Works By Author</Item>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs = {6} md={3}>
                        <BookCard/>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs = {6} md={3}>
                        <Item>More</Item>
                    </Grid>
                </Grid>
            </Grid>
      </Box>
     
    )
}