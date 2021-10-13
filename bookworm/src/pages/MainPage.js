import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Search from "../components/Search";
import '../index.css'
import { ImageList, Typography } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { ImageListItemBar } from "@mui/material";


import axios from "axios"
import { TextField } from '@mui/material';
import ReactDOMServer from 'react-dom/server';
import { margin, maxHeight } from "@mui/system";

import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/bookworm.png';

const SearchField = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',

  }));
  


export default function MainPage() {
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])
    const [subjectResults, setSubjectResults] = useState([])
  
    useEffect(() => {  
        let cancel
        axios ({
            method: 'GET',
            url: "https://openlibrary.org/search.json", 
            params: { q: term, limit: 24 },
            cancelToken: new axios.CancelToken( c => cancel = c)
        }).then (res => {
                console.log(res.data.docs)
                setResults(res.data.docs) 
            }).catch(e => {
                if (axios.isCancel(e)) return
            })
            return () => cancel()        

    }, [term])

    function handleImgClick (strSubject) {
        console.log (strSubject)
        axios.get("https://openlibrary.org/subjects/" + strSubject.toLowerCase().replace(/ /g,"_") + ".json?limit=10")
        .then(res => {
          const subjectSearch = res.data;
          setSubjectResults(subjectSearch.works)
          console.log(subjectSearch.works) 
        })  
    }
    const subjectResultsMapped = subjectResults.map(subjectResult => {
        const subjectArticle = {
            subjectUrl : "http://covers.openlibrary.org/b/id/" + subjectResult.cover_id + "-M.jpg"
          }

        return (
            <>
            <Grid item xs={12} md={2} sx=
            {{display:'flex',
            flexWrap:'nowrap',
                    }}>
                <ImageList cols={3} sx={{
                    display: 'flex',
                    flexWrap:'nowrap'
                    
                }}>
                    <ImageListItem key={subjectResult.key} sx={{
                        minWidth: 90,
                        maxHeight:320,
                        display:'flex',
                        flexWrap: 'nowrap',}}>
                            {subjectResult.title}
                            <img alt="cover image" src={subjectArticle.subjectUrl}></img>
                            <Typography component="div">
                        <Box sx={{fontSize: '2px'}}>
                            <ImageListItemBar title ={subjectResult.title} sx={{display:'flex', fontSize: 5, flexWrap: 'wrap'
                            }}/>
                        </Box>
                    </Typography>
                    </ImageListItem>
                    
                </ImageList>
            </Grid>
            </>
        )
    })

    const searchResultsMapped = results.map(result => {

        const article = {
          url : ReactDOMServer.renderToStaticMarkup((result.isbn && result.isbn.length) ? "http://covers.openlibrary.org/b/isbn/" + result.isbn[0] + "-M.jpg":"")
        }
        
        return (
            <>

            <Grid item xs={12} md={1} sx=
            {{display:'flex',
            flexWrap:'nowrap',
                    }}>
                <ImageList cols={3} sx={{
                    display: 'flex',
                    flexWrap:'nowrap'
                    
                }}>
                <ImageListItem key={result.key} sx={{
                        minWidth: 90,
                        maxHeight:180,
                        display:'flex',
                        flexWrap: 'nowrap',}}
                        >{result.title}
                    <img alt="" src={article.url} data-subject={result.subject} onClick={() => handleImgClick(result.subject[0])}></img>
                    <Typography component="div">
                        <Box sx={{fontSize: '2px'}}>
                            <ImageListItemBar title ={result.title} sx={{display:'flex', fontSize: 5, flexWrap: 'wrap'
                            }}/>
                        </Box>
                    </Typography>
                </ImageListItem>
                

                </ImageList>
            </Grid>
        
            </>
        )
    })


    function handleChange(e) {
        setTerm(e.target.value)
    }

    return (

        /* <TextField id="term" label="Search" variant="outlined" onChange={handleChange} sx={{margin: '10px',}}/> */
                            



    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#A37C4D' }}>
            <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src= {logo} alt="logo" width='80px' height='65px'/>
            
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
                    margin='15px'
                >
                    Bookworm
                </Typography>
                <SearchField>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        id="term"
                        onChange={handleChange}
                        variant="outlined"
                        label="Search"
                        />
                        
                </SearchField>
            </Toolbar>
        </AppBar>




             {/* <TextField id="term" label="Search" variant="outlined" onChange={handleChange}/> */}
             <Grid container spacing={2}>

                <Grid item xs={12} container spacing={2} sx={{justifyContent:'center', margin:'10px'}}>
                    <Grid item xs={12} md={2} sx={{alignItems:'center'}}>
                        <Item sx= {{backgroundColor:'tan',}}>
                            <Typography>
                                <Box sx= {{ color:'black', textAlign:"center"}}>
                                    Author and Title Search
                                </Box>
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
                 
                 
                 <Grid item xs={12} container spacing={2}>
                     {searchResultsMapped}           
                 </Grid>
                 
                 <Grid item xs={12} container spacing={2} sx={{justifyContent:'center', margin:'10px'}}>
                     <Grid item xs={12} md={2} sx={{alignItems:'center'}}>
                         <Item sx= {{backgroundColor:'tan',}}>
                             <Typography>
                                 <Box sx= {{ color:'black', textAlign: 'center',}}>
                                     Book Recommendations
                                 </Box>
                             </Typography>
                         </Item>
                            
                     </Grid>
                 </Grid>
                 <Grid item xs={12} container spacing={2}>
                     
                     {subjectResultsMapped}
                     
                 </Grid>

             </Grid>
        </Box>
     
     )


 }