import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    ListItemButton
} from '@mui/material';

import {
    Dashboard as DashboardIcon,
    ShoppingCart as ShoppingCartIcon,
    People as PeopleIcon,
    BarChart as BarChartIcon,
    Layers as LayersIcon,
    Assignment as AssignmentIcon
} from '@mui/icons-material';


export const MainListItems = () => {
    let navigate = useNavigate();
    function showHello() {
        navigate('/chart');
    }

    return (
        <div>
            <ListItemButton onClick={showHello}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
            </ListItemButton>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary='Orders' />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItem>
        </div>
    )
};


export const mainListItems = (
    <div>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItemButton>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary='Orders' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
)

// export const MuiList = () => {
//     let navigate = useNavigate();
//     const linkTo = (href) => {
//         navigate(href);
//     }

//     return (
//         <List>
//             {subRoutes.map((rt, index) => (
//                 <ListItemButton key={index} onClick={() => linkTo(rt.path)}>
//                     <ListItemText primary={rt.name} />
//                 </ListItemButton>
//             ))}
//         </List>
//     )
// }

// export const MuiList = () => {
//     let navigate = useNavigate();
//     const linkTo = (href) => {
//         navigate(`/${href}`);
//     }
//     return (
//         <List>
//             <ListItemButton onClick={() => linkTo('introduction')}>
//                 <ListItemText primary="01 Introduction" />
//             </ListItemButton>
//             <ListItemButton onClick={() => linkTo('uxdesign')}>
//                 <ListItemText primary="02 UX Design" />
//             </ListItemButton>
//             <ListItemButton onClick={() => linkTo('usestyles')}>
//                 <ListItemText primary="03 Use Styles" />
//             </ListItemButton>
//             <ListItemButton onClick={() => linkTo('button')}>
//                 <ListItemText primary="04 Button" />
//             </ListItemButton>
//             <ListItemButton onClick={() => linkTo('typography')}>
//                 <ListItemText primary="05 Typography" />
//             </ListItemButton>
//             <ListItemButton onClick={() => linkTo('themes')}>
//                 <ListItemText primary="06 Themes" />
//             </ListItemButton>
//             <ListItemButton onClick={() => linkTo('paper')}>
//                 <ListItemText primary="07 Paper" />
//             </ListItemButton>
//         </List>
//     )
// }