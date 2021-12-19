import React from 'react';
import { Button, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red,green } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary:green,
        secondary: {
            main: red[500]
        }
    }
})

const Introduction = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant='h1' color='primary'>Introduction</Typography>
            <Button variant='outlined'>This is our first button</Button>
            {" "}
            <Button color='secondary' variant='outlined'>This is our second button</Button>
        </ThemeProvider >
    )
}

export default Introduction;