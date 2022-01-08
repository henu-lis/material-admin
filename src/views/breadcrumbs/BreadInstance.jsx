import React from 'react';
import {
    Breadcrumbs,
    Link,
    Typography
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';



function BreadInstance() {
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location);
    const { pathname } = location;
    const pathnames = pathname.split('/').filter(p => p && p !== 'breadcrumb');
    //console.log(pathnames);

    function handleClick(path, event) {
        event.preventDefault();
        console.info(arguments);
        navigate(path);
    }

    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline='hover' color='inherit' onClick={(e) => handleClick('/breadcrumb', e)}>breadcrumb</Link>
                {pathnames.map((name, index) => {
                    const routeTo = pathnames.slice(0, index + 1).join('/');
                    console.log(routeTo);
                    const isLast = (pathnames.length - 1) === index;
                    return isLast
                        ? <Typography color='primary' key={index}>{name}</Typography>
                        : <Link underline='hover' color='inherit' onClick={(e) => handleClick(routeTo, e)} key={index}>{name}</Link>
                })}

            </Breadcrumbs>
        </div>
    );
}

export default BreadInstance;