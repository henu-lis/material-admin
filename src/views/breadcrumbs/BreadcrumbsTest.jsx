import React from 'react';
import {
    Button
} from '@mui/material';
import BreadInstance from './BreadInstance';
import { Outlet, useNavigate } from 'react-router-dom';

function BreadcrumbsTest() {
    const navigation = useNavigate();
    return (
        <>
            <BreadInstance />
            <Button onClick={() => navigation('blist')}>List</Button>
            <br />
            <Outlet />
        </>
    );
}

export default BreadcrumbsTest;