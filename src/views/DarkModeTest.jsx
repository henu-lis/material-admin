import React, { useState } from 'react';
import { Switch, Grid, Paper, Button, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const DarkModeTest = () => {

    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light'
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ height: '100vh' }}>
                <Grid container direction='column'>
                    <Typography variant='h1'>This is my App!</Typography>
                    <Button variant='contained' color='primary'>
                        This is a button
                    </Button>
                    <Button variant='contained' color='secondary'>
                        This is another button
                    </Button>
                    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}

export default DarkModeTest;