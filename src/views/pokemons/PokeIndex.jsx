import React from 'react';

import {Outlet } from 'react-router-dom';

function PokeIndex() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default PokeIndex;