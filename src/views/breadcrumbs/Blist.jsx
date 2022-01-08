import React from 'react';
import {
    Button
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

function Blist() {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => navigate('bcontent')}>content</Button>
            <br />
            <Outlet />
        </>
    );
}

export default Blist;