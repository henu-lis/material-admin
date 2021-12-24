import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Div = styled('div')(({ theme }) => {
    return {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1)
    }
});

const TypographyTest = () => {
    return (
        <>
            <Typography variant='h2' component='h5'>
                little douya
            </Typography>
            <Typography variant='h2' component='h5' align='center'>
                little douya
            </Typography>
            <Typography variant='h2' component='h5' align='right'>
                little douya
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                overline text
            </Typography>
            <Div>
            This div's text looks like that of a button.
            </Div>
        </>
    )
}

export default TypographyTest;