import React from 'react';
import {
    Grid,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Avatar,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';

const Header = () => {
    return (
        <AppBar sx={{ mt: '70px', pl: '300px' }}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Ux Design
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const CoffeCard = (props) => {
    const { avatarSrc, title, subtitle, description, imgSrc } = props;
    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={avatarSrc} />}
                action={
                    <IconButton aria-label='settings'>
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                component='img'
                height='194'
                image={imgSrc}
                alt='Paella dish'
            />
            <CardContent>
                <Typography variant='body2' component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Buy Now</Button>
                <Button size='small'>OFFER</Button>
            </CardActions>
        </Card>
    )
}

const Content = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} xl={4}>
                <CoffeCard
                    title='Hamilton Beach Flexbrew'
                    subtitle='$89.9'
                    avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg'
                    description="No two coffee drinkers arethe same - so, the flexibilityto customize how and whatyou brew is key. From freshgrounds to K-Cup pods, theHamilton Beach FlexBrew 2-Way Coffee Maker gives youthe options to please fans ofall types of coffees."
                />
            </Grid>
            <Grid item xs={6} xl={4}>
                <CoffeCard
                    title='Hamilton Beach Flexbrew'
                    subtitle='$89.9'
                    avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg'
                    description="No two coffee drinkers arethe same - so, the flexibilityto customize how and whatyou brew is key. From freshgrounds to K-Cup pods, theHamilton Beach FlexBrew 2-Way Coffee Maker gives youthe options to please fans ofall types of coffees."
                />
            </Grid>
            <Grid item xs={6} xl={4}>
                <CoffeCard
                    title='Hamilton Beach Flexbrew'
                    subtitle='$89.9'
                    avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg'
                    description="No two coffee drinkers arethe same - so, the flexibilityto customize how and whatyou brew is key. From freshgrounds to K-Cup pods, theHamilton Beach FlexBrew 2-Way Coffee Maker gives youthe options to please fans ofall types of coffees."
                />
            </Grid>
            <Grid item xs={6} xl={4}>
                <CoffeCard
                    title='Hamilton Beach Flexbrew'
                    subtitle='$89.9'
                    avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg'
                    description="No two coffee drinkers arethe same - so, the flexibilityto customize how and whatyou brew is key. From freshgrounds to K-Cup pods, theHamilton Beach FlexBrew 2-Way Coffee Maker gives youthe options to please fans ofall types of coffees."
                />
            </Grid>
            <Grid item xs={6} xl={4}>
                <CoffeCard
                    title='Hamilton Beach Flexbrew'
                    subtitle='$89.9'
                    avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg'
                    description="No two coffee drinkers arethe same - so, the flexibilityto customize how and whatyou brew is key. From freshgrounds to K-Cup pods, theHamilton Beach FlexBrew 2-Way Coffee Maker gives youthe options to please fans ofall types of coffees."
                />
            </Grid>
            <Grid item xs={6} xl={4}>
                <CoffeCard
                    title='Hamilton Beach Flexbrew'
                    subtitle='$89.9'
                    avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg'
                    description="No two coffee drinkers arethe same - so, the flexibilityto customize how and whatyou brew is key. From freshgrounds to K-Cup pods, theHamilton Beach FlexBrew 2-Way Coffee Maker gives youthe options to please fans ofall types of coffees."
                />
            </Grid>
        </Grid>
    )
}

const UxDesign = () => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Header />
            </Grid>
            <Grid item container sx={{ mt: '100px' }}>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Content />
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    )
}

export default UxDesign;