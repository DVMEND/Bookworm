import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { ImageListItemBar } from "@mui/material";
import Search from "@mui/icons-material/Search";




const tileData=[


    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'title'
        
    },
];

export default function SingleLineGridList(){
    return(
        <div sx={{
            display: 'none',
            flexWrap: "nowrap",
            justifyContent: 'space-around',
            overflow: 'hidden',
            direction: 'row',
            float: 'left',
            flexDirection:"row",
            
            
        
        
        }}>
            <ImageList cols={3} className="imageList" sx={{
            minWidth:'100%',
            diplay: "flex",
            height: 300,
        
            flexWrap: 'nowrap',
            justifyContent: 'space-around',
            overflow: 'scroll',
            objectFit:"contain",

            }}>
                {tileData.map((tile)=> (
                    <ImageListItem key={tile.img} sx={{
                        display: "flex",
                        height: 300,
                        width: 300,
                        margin: '16px',
                        flexWrap:"nowrap",
                        objectFit:"contain",
                        

                    }}>
                        <img src ={tile.img} alt={tile.title} />
                        <ImageListItemBar title = {tile.title} />
                    </ImageListItem>

                ))}
            </ImageList>
        </div>
    );
        
    
}