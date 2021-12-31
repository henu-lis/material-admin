import * as React from 'react';
import { styled, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Checkbox, Box, Typography } from '@mui/material';
import { green, orange, red } from '@mui/material/colors';
import BorderBox from '../Components/BorderBox';

const outTheme = createTheme({
    palette: {
        secondary: {
            main: orange[500]
        }
    }
});

const innerTheme = (theme) => {
    return createTheme({
        ...theme,
        palette: {
            ...theme.palette,
            primary: {
                main: green[500]
            }
        }
    })
}

//响应式 theme
let responsiveTheme = responsiveFontSizes(createTheme());

const BgDiv = styled('div')(({ theme }) => ({
    padding: theme.spacing(1), //1*8px
    [theme.breakpoints.down('md')]: {
        backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: orange[500],
    },
    [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
    },
}))


const ThemesTest = () => {
    return (
        <>
            <BorderBox>
                原始 primary <Checkbox defaultChecked /><br />
                原始 secondary <Checkbox defaultChecked color='secondary' /><br />
                <ThemeProvider theme={outTheme}>
                    outerTheme secondary <Checkbox defaultChecked color='secondary' /><br />
                    <ThemeProvider theme={innerTheme}>
                        innerTheme primary <Checkbox defaultChecked /><br />
                        继承了 outerTheme secondary <Checkbox defaultChecked color='secondary' /><br />
                    </ThemeProvider>
                </ThemeProvider>
            </BorderBox>
            <BorderBox>
                <ThemeProvider theme={responsiveTheme}>
                    <Typography variant="h3">Responsive h3</Typography>
                    <Typography variant="h4">Responsive h4</Typography>
                    <Typography variant="h5">Responsive h5</Typography>
                    <Typography variant="h6">跟随浏览器宽度变化大小</Typography>
                </ThemeProvider>
            </BorderBox>
            <BorderBox>
                <BgDiv>
                    <Typography>down(md): red</Typography>
                    <Typography>up(md): blue</Typography>
                    <Typography>up(lg): green</Typography>
                </BgDiv>
            </BorderBox>
        </>
    )
}

export default ThemesTest;