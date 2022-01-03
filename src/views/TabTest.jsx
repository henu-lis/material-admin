import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
    Tabs,
    Tab,
    Box,
    Button
} from '@mui/material';


function TabTest() {
    const navigate = useNavigate();
    const [value, setValue] = useState("tab2");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);
    };

    return (
        <>
            <Button variant='outlined' onClick={() => navigate('../button')}>goto button</Button>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Item One" value="tab1" />
                    <Tab label="Item One" value="tab2" />
                    <Tab label="Item One" value="tab3" />
                </Tabs>
            </Box>
            <Outlet />
        </>
    );
}

export default TabTest;


const TabContent1 = () => (
    <div>TabContent1</div>
);

const TabContent2 = () => (
    <div>TabContent2</div>
);

const TabContent3 = () => (
    <div>TabContent3</div>
);

export { TabContent1, TabContent2, TabContent3 };