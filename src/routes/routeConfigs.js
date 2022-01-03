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

import { TabContent1, TabContent2, TabContent3 } from '../views/TabTest';

const LoginPage = lazy(() => import('../views/LoginPage'));
const Dashboard = lazy(() => import('../SimpleAdmin/Dashboard'));
const Introduction = lazy(() => import('../views/Introduction'));
const DarkModeTest = lazy(() => import('../views/DarkModeTest'));
const GridTest = lazy(() => import('../views/GridTest'));
const CardTest = lazy(() => import("../views/CardTest"));
const TableTest = lazy(() => import('../views/TableTest'));
const PokeIndex = lazy(() => import('../views/pokemons/PokeIndex'));
const PokeList = lazy(() => import('../views/pokemons/PokeList'));
const PokeDetail = lazy(() => import('../views/pokemons/PokeDetail'));
const TabTest = lazy(() => import('../views/TabTest'));

const subRoutes = [
    {
        path: 'introduction',
        element: Introduction,
        name: '01 Introduction'
    },
    {
        path: 'uxdesign',
        element: UxDesign,
        name: '02 UX Design'
    },
    {
        path: 'usestyles',
        element: UseStylesTest,
        name: '03 Use Styles'
    },
    {
        path: 'button',
        element: ButtonTest,
        name: '04 Button'
    },
    {
        path: 'typography',
        element: TypographyTest,
        name: '05 Typography'
    },
    {
        path: 'themes',
        element: ThemesTest,
        name: '06 Themes'
    },
    {
        path: 'paper',
        element: PaperTest,
        name: '07 Paper'
    },
    {
        path: "darkmode",
        element: DarkModeTest,
        name: '08 Dark Theme'
    },
    {
        path: "grid",
        element: GridTest,
        name: '11 Grid'
    },
    {
        path: "card",
        element: CardTest,
        name: '12 Cards'
    },
    {
        path: "table",
        element: TableTest,
        name: '13 Table'
    },
    {
        path: "pokemons",
        element: PokeIndex,
        name: '14 Pokemons',
        children: [
            {
                index: true,
                element: PokeList
            },
            {
                path: ':pokeId',
                element: PokeDetail
            }
        ]
    },
    {
        path: "tabs",
        element: TabTest,
        name: '15 Tabs',
        children: [
            {
                path: 'tab1',
                element: TabContent1
            },
            {
                path: 'tab2',
                element: TabContent2
            },
            {
                path: 'tab3',
                element: TabContent3
            },
        ]
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

function mapRoute(routeObj, routeList) {
    for (var i = 0; i < routeList.length; i++) {
        var rc = routeList[i];

        var child = {
            path: rc.path || undefined,
            element: <rc.element />,
            index: rc.index || false
        };

        if (rc.children && rc.children.length > 0) {
            child.children = [];
            mapRoute(child, rc.children);
        }
        routeObj.children.push(child);
    }
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

    // subRoutes.forEach((rt, index) => {
    //     routeArray[0].children.push({
    //         path: rt.path,
    //         element: <rt.element />
    //     });
    // })

    mapRoute(routeArray[0], subRoutes);

    routeArray[0].children.push({
        index: true,
        element: <main style={{ padding: '1rem' }}>
            Welcome to mian page
        </main>
    });
    console.log(routeArray[0]);
    return routeArray;
}


export default routes;

