import * as React from 'react';
import { Checkbox } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import MainPage from '../pages/MainPage';

const theme =  createTheme ({
    components: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundImage: 
                    "url(../assets/backgroundImage.png)"
                }
            }

        }
    }
})

export default function withRoot () {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MainPage/>
            </ThemeProvider>
        );
    
}