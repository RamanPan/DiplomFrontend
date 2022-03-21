import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import {Autocomplete} from "@mui/material";
import themeMy from "../utils/themeMy";
import Image from "../../resources/fon.jpeg";
import Paper from "@mui/material/Paper";
import {roles} from "../utils/constans"

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={themeMy}>
            <Grid container component="main"
                  style={{backgroundImage: `url(${Image})`,}}
                  sx={{
                      height: '100vh',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',}}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={4} style={{backgroundColor: "#F1DCC9"}} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#00000'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        </Avatar>
                            <Typography component="h1" variant="h2">
                                РЕГИСТРАЦИЯ
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="Имя"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Фамилия"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Пароль"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                    <Grid item xs={14}>
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-roles"
                                            options={roles}
                                            color="secondary"
                                            renderInput={(params) => <TextField {...params} label="Роль" />}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Зарегистрироваться
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login"> <div className="text">Уже есть аккаунт? </div> </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                            </Box>
                        </Grid>
                    </Grid>
        </ThemeProvider>
    );
}