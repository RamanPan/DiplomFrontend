import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider, styled } from '@mui/material/styles';
import Image from '../../resources/fon.jpeg'
import themeMy from "../utils/themeMy";
import {Link, Navigate, Redirect} from "react-router-dom";

import {observer} from "mobx-react-lite";
import useStore from "../utils/useStore";
import {useState} from "react";
import {createUser, loginUser} from "../utils/apiCalls";
import {useNavigate} from "react-router";



const theme = themeMy;
export var ACCESS_TOKEN;
export var NICKNAME = undefined;
export var PICTURE = " ";
export var PASSWORD;
function SignInSide() {
    const {usersStore} = useStore();
    const [logState,setLogState] = useState();
    const [signIn,setSingIn] = useState(false);
    const navigate = useNavigate();

    const updateLogState = (event) => {
        const {value, name} = event.target;
        if(name === "password") PASSWORD = value;
        setLogState(prevLogState => ({
            ...prevLogState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        await usersStore.login(logState)
        if(usersStore.me !== undefined) {
            ACCESS_TOKEN = usersStore.me.token;
            NICKNAME = usersStore.me.nickname;
            PICTURE = usersStore.me.picture;
            setSingIn(true)}
    };
    if(signIn) {
        navigate("/catalog");
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main"
                  style={{backgroundImage: `url(${Image})`,}}
                  sx={{
                      height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',}}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={3.5} style={{backgroundColor: "#F1DCC9",}} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h2" >
                            ВХОД
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="login"
                                onChange={updateLogState}
                                label="Введите логин"
                                name="login"
                                autoComplete="login"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={updateLogState}
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary" />}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, mb: 1 }}
                            >
                                Войти
                            </Button>
                            <Grid container>
                                <Grid xs = {6} item >
                                    <Link to = "/forgot"> <div className="text">Забыли пароль? </div></Link>
                                </Grid >
                                <Grid item >
                                    <Link to = "/registration" >  <div className="text">Зарегистрироваться? </div></Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default observer(SignInSide);