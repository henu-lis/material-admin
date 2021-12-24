import React from 'react';
import {
    styled,
    Button

} from '@mui/material';

// const CusBtn = styled(Button, {})(
//     ({ theme }) => ({
//         color: 'red',
//         [theme.breakpoints.up('lg')]: {
//             color:'green'
//         }
//     })
// )

const CusBtn = styled(Button, {
    //阻止将 fat 这个属性传递到真实的Dom上
    shouldForwardProp: (prop) => prop !== 'fat'
})(
    ({ theme, fat }) => {
        return {
            color: 'red',
            [theme.breakpoints.up('lg')]: {
                color: 'green'
            },
            ...(fat && {
                height: '80px',
                width: '200px'
            })
        }
    }
)



const UseStylesTest = () => {
    return (
        <>
            <CusBtn variant='outlined'>Change The Browser Width</CusBtn>
            <br />
            <CusBtn variant='outlined' fat>Fat Button</CusBtn>
        </>

    )
}

export default UseStylesTest;