import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';
import routes from './routes/routeConfigs';

const AppMain = () => {
    let auth = useAuth();
    var isLoggedIn = auth.user != null;
    var location = useLocation();

    const routing = useRoutes(routes(isLoggedIn, location));


    return (
        <>
            {routing}
        </>
    )
}

export default AppMain;