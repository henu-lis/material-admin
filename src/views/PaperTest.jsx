import React from 'react';
import { Paper, Box } from '@mui/material';

const PaperTest = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor:'#ccc',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                }
            }} >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
                <Paper variant="outlined" />
                <Paper variant="outlined" square />
            </Box>
        </>
    )
}

export default PaperTest;

