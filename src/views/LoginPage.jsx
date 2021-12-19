import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const LoginPage = () => {
//     let navigate = useNavigate();
//     let location = useLocation();
//     let auth = useAuth();
//     let { from } = location.state || { from: { pathname: '/' } };

//     function submitHandler(event) {
//         event.preventDefault();

//         let formData = new FormData(event.currentTarget);
//         let username = formData.get('username');

//         auth.signin(username, () => {
//             navigate(from, { replace: true });
//         });
//     }

//     return (
//         <div>
//             <p>you must login to view the page at {from.pathname}</p>
//             <form onSubmit={submitHandler}>
//                 <label htmlFor="">
//                     UserName:<input name='username' type='text' />
//                 </label>{" "}
//                 <button type='submit'>Login</button>
//             </form>
//         </div>
//     )
// }

function Copyright(props) {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            {'Cpoyright 0'}
            <Link color='inherit' href='https://mui.com/'>
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme();

export default function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    let { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('username'),
            password: data.get('password')
        });

        let username = data.get('username');
        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign In
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='username'
                            label='UserName'
                            name='username'
                            autoComplete='username'
                            autoFocus
                            defaultValue="admin111"
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                        />
                        <FormControlLabel
                            control={<Checkbox value='remember' color='primary' />}
                            label='Remember me'
                        />
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forget password
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

//export default LoginPage;