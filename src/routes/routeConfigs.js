import React, { lazy } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    List,
    ListItemText,
    ListItemButton
} from '@mui/material';


import UxDesign from '../views/UxDesign';
import UseStylesTest from '../views/UseStylesTest';
import ButtonTest from '../views/ButtonTest';
import TypographyTest from '../views/TypographyTest';
import ThemesTest from '../views/ThemesTest';
import PaperTest from '../views/PaperTest';

const LoginPage = lazy(() => import('../views/LoginPage'));
const Dashboard = lazy(() => import('../SimpleAdmin/Dashboard'));
const Introduction = lazy(() => import('../views/Introduction'));
const DarkModeTest = lazy(() => import('../views/DarkModeTest'));
const GridTest = lazy(() => import('../views/GridTest'));
const CardTest = lazy(() => import("../views/CardTest"));
const TableTest = lazy(() => import('../views/TableTest'));

const subRoutes = [
    {
        path: '/introduction',
        element: Introduction,
        name: '01 Introduction'
    },
    {
        path: '/uxdesign',
        element: UxDesign,
        name: '02 UX Design'
    },
    {
        path: '/usestyles',
        element: UseStylesTest,
        name: '03 Use Styles'
    },
    {
        path: '/button',
        element: ButtonTest,
        name: '04 Button'
    },
    {
        path: '/typography',
        element: TypographyTest,
        name: '05 Typography'
    },
    {
        path: '/themes',
        element: ThemesTest,
        name: '06 Themes'
    },
    {
        path: '/paper',
        element: PaperTest,
        name: '07 Paper'
    },
    {
        path: "/darkmode",
        element: DarkModeTest,
        name: '08 Dark Theme'
    },
    {
        path: "/grid",
        element: GridTest,
        name: '11 Grid'
    },
    {
        path: "/card",
        element: CardTest,
        name: '12 Cards'
    },
    {
        path: "/table",
        element: TableTest,
        name: '13 Table'
    }
]

export const MuiList = () => {
    let navigate = useNavigate();
    const linkTo = (href) => {
        navigate(href);
    }

    return (
        <List>
            {subRoutes.map((rt, index) => (
                <ListItemButton key={index} onClick={() => linkTo(rt.path)}>
                    <ListItemText primary={rt.name} />
                </ListItemButton>
            ))}
        </List>
    )
}


const routes = (isLoggedIn, location) => {
    let routeArray = [
        {
            path: '/',
            element: isLoggedIn ? <Dashboard /> : <Navigate to='/login' state={{ from: location }} />,
            children: [
                // {
                //     path: '/introduction',
                //     element: <Introduction />,
                // },
                // {
                //     path: '/uxdesign',
                //     element: <UxDesign />,
                // },
                // {
                //     path: '/usestyles',
                //     element: <UseStylesTest />,
                // },
                // {
                //     path: '/button',
                //     element: <ButtonTest />,
                // },
                // {
                //     path: '/typography',
                //     element: <TypographyTest />,
                // },
                // {
                //     path: '/themes',
                //     element: <ThemesTest />,
                // },
                // {
                //     path: '/paper',
                //     element: <PaperTest />,
                // },
                // {
                //     index: true,

                //     element: <main style={{ padding: '1rem' }}>
                //         Welcome to mian page
                //     </main>,
                // }
            ]
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '*',
            element: <main style={{ padding: '1rem' }}><p>There's nothing here!</p></main>
        }
    ];

    subRoutes.forEach((rt, index) => {
        routeArray[0].children.push({
            path: rt.path,
            element: <rt.element />
        });
    })
    routeArray[0].children.push({
        index: true,
        element: <main style={{ padding: '1rem' }}>
            Welcome to mian page
        </main>
    });
    return routeArray;
}

export default routes;

