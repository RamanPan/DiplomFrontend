import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link, Redirect} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import {Autocomplete} from "@mui/material";
import themeMy from "../utils/themeMy";
import Image from "../../resources/fon.jpeg";
import Paper from "@mui/material/Paper";
import {API_REGISTER, roles} from "../utils/constans"
import {useState} from "react";
import ApiCalls, {createUser, postReq} from "../utils/apiCalls";

import {useHistory} from 'react-router-dom';
import {useNavigate} from "react-router";

// function postReg(path, data) {
//     const request = fetch(`${path}`,{
//         method:'POST',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type': 'application/json',
//         }
//     });
//     return request.json();
// }
export default function SignUp() {
    const [regState,setRegState] = useState();
    const [role,setRole] = useState(roles[0]);
    const [isSignUp,setSignUp] = useState(false);
    const navigate = useNavigate()

    const updateRegState = (event) => {
        const {value, name} = event.target;
        setRegState(prevRegState => ({
            ...prevRegState,
            role,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        postReq(API_REGISTER,regState).then(response => {
            setSignUp(true)
        }).catch(error => {
            if(error.status === 406) setSignUp(true)
        })
    };
    if(isSignUp) {
       navigate("/login");
    }
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
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid item xs={14}>
                                    <Autocomplete
                                        id="combo-box-roles"
                                        value={role}
                                        options={roles}
                                        onChange={(event,newValue) => {
                                            setRole(newValue);
                                            console.log(newValue)
                                        }}
                                        sx = {{mb: 2}}
                                        name = "role"
                                        color= "secondary"

                                        renderInput={(params) => <TextField {...params} name = "role" label="Роль" />}
                                    />
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="fullname"
                                            required
                                            onChange={updateRegState}
                                            fullWidth
                                            id="fullname"
                                            label="ФИО"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Логин"
                                            name="nickname"
                                            onChange={updateRegState}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            onChange={updateRegState}
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
                                            onChange={updateRegState}
                                            autoComplete="new-password"
                                        />
                                    </Grid>

                                </Grid>
                                <Button
                                    onClick={handleSubmit}
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