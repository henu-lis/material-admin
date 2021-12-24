import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack, IconButton } from '@mui/material';
import { PhotoCamera, Delete, Send, Fingerprint,Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const Input = styled('input')({
    display: 'none'
});

const ButtonTest = () => {
    const [loading, setLoading] = React.useState(false);
    function toggleLoading() {
        if (!loading) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        
    }

    return (
        <>
            <Stack direction='row' alignItems='center' spacing={2} sx={{ border: 1, p: 2, m: 2, borderRadius: 1 }}>
                <label htmlFor="contained-button-file">
                    <Input type='file' accept='image/*' id='contained-button-file' multiple />
                    <Button variant='contained' component='span'>
                        Upload
                    </Button>
                </label>
                <label htmlFor="icon-button-file">
                    <Input type='file' accept='image/*' id='icon-button-file' multiple />
                    <IconButton color='primary' aria-label='upload picture' component='span'>
                        <PhotoCamera />
                    </IconButton>
                </label>
                <label htmlFor="icon-button-file2">
                    <IconButton color='primary' aria-label='upload picture' component='span'>
                        <PhotoCamera />
                    </IconButton>
                    <input type='file' accept='image/*' id='icon-button-file2' multiple />
                </label>
            </Stack>
            <Stack direction='row' alignItems='center' spacing={2} sx={{ border: 1, p: 2, m: 2, borderRadius: 1 }}>
                <Button variant="outlined" startIcon={<Delete />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<Send />} >
                    Send
                </Button>
                <IconButton color='secondary' aria-label='fingerprint' size='large'>
                    <Fingerprint />
                </IconButton>
            </Stack>
            <Stack direction='row' alignItems='center' spacing={2} sx={{ border: 1, p: 2, m: 2, borderRadius: 1 }}>
                <LoadingButton
                    color='secondary'
                    onClick={toggleLoading}
                    loading={loading}
                    loadingPosition='start'
                    startIcon={<Save />}
                    variant='contained'
                >
                    Save
                </LoadingButton>
            </Stack>
        </>
    )
}

export default ButtonTest;