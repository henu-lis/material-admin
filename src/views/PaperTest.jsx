import React from 'react';
import { Paper, Box } from '@mui/material';
import BorderBox from '../Components/BorderBox';
const PaperTest = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: '#ccc',
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

            <BorderBox>
                <Paper elevation={0} >asd</Paper>
                <Paper >sdf</Paper>
                <Paper elevation={3} >ad</Paper>
                <Paper variant="outlined" >sdf</Paper>
                <Paper variant="outlined" square >sadg</Paper>
            </BorderBox>
        </>
    )
}

export default PaperTest;

