import React from 'react';
import { Button } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

function SnackbarApp() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    }

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a sucess message!', { variant });
    }
    return (
        <>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
        </>
    );
}

function SnackbarTest() {

    return (
        <>
            <SnackbarProvider maxSnack={3}>
                <SnackbarApp />
            </SnackbarProvider>
        </>
    );
}

export default SnackbarTest;