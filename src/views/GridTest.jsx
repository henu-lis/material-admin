import React from 'react';
import { Grid, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import BorderBox from '../Components/BorderBox';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const ItemDirection = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'textalign'
})(({ theme, textalign }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: textalign,
    color: theme.palette.text.secondary
}));

const GridTest = () => {
    return (
        <>
            <BorderBox>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Item>xs=12</Item>
                    </Grid>
                    <Grid item md={6} lg={12}>
                        <Item>md=6 lg=12</Item>
                    </Grid>
                    <Grid item md={6} lg={12}>
                        <Item>md=6 lg=12</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={3} lg={6}>
                        <Item>xs=3 lg=6</Item>
                    </Grid>
                    <Grid item xs={3} lg={6}>
                        <Item>xs=3 lg=6</Item>
                    </Grid>
                </Grid>
            </BorderBox>
            <BorderBox>
                <Grid container direction='column' spacing={2}>
                    <Grid item container>
                        <Grid item xs={4}>
                            <Item>Douya</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <ItemDirection textalign='right'>
                                <lable>Logout</lable>
                                <label htmlFor=""> haha</label>
                            </ItemDirection>
                        </Grid>
                    </Grid>

                    <Grid item >
                        <Divider />
                    </Grid>
                    <Grid item container spacing={6}>
                        <Grid item xs={6} >
                            <Item>They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. If used, these props may have undesirable effects on the height of the Grid item elements.They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. If used, these props may have undesirable effects on the height of the Grid item elements.</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. If used, these props may have undesirable effects on the height of the Grid item elements.They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. If used, these props may have undesirable effects on the height of the Grid item elements.</Item>
                        </Grid>
                    </Grid>

                </Grid>
            </BorderBox>

        </>
    )
}

export default GridTest;