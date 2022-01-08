import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MUIDrawer = () => {
    const location = useLocation();
    console.log(location);
    const navigation = useNavigate();

    const itemList = [
        {
            text: 'Inbox',
            icon: <InboxIcon />,
            onClick: () => navigation('/')
        },
        {
            text: 'Starred',
            icon: <MailIcon />,
            onClick: () => navigation('./')
        },
        {
            text: 'Send email',
            icon: <InboxIcon />,
            onClick: () => navigation('drawer02')
        },
        {
            text: 'Drafts',
            icon: <MailIcon />,
            onClick: () => navigation('drawer03')
        },
    ]
    return (
        <Drawer open variant='permanent' anchor='right' sx={{
            //marginTop: '65px'
        }} >
            <List>
                {
                    itemList.map((item, index) => (
                        <ListItem button key={item.text} onClick={item.onClick}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    )
};

function DrawerTest() {
    return (
        <>
            <Box sx={{
                display: 'flex'
            }}>
                <MUIDrawer />
                <Box>
                    <Outlet />
                </Box>

            </Box>

        </>
    );
}

export default DrawerTest;