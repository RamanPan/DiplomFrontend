import Grid from "@mui/material/Grid";
import Image from "../../resources/fon.jpeg";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import {useState} from "react";
import {useNavigate} from "react-router";
import {API_CHANGE_PASSWORD} from "../utils/constans";
import {postReq} from "../utils/apiCalls";
import themeMy from "../utils/themeMy";

export default function ChangePassword() {
    const [changeState,setChangeState] = useState();
    const navigate = useNavigate();

    const updateLogState = (event) => {
        const {value, name} = event.target;
        setChangeState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        postReq(API_CHANGE_PASSWORD, changeState).then(r => {
                navigate("/login")
            }
        )
    }

        return (
            <ThemeProvider theme={themeMy}>
                <Grid container component="main"
                      style={{backgroundImage: `url(${Image})`,}}
                      sx={{
                          height: '100vh',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }}>
                    <CssBaseline/>
                    <Grid item xs={12} sm={8} md={3.5} style={{backgroundColor: "#F1DCC9",justifyContent:'center',}} component={Paper}
                          elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                                <ChangeCircleIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h2">
                                СМЕНА ПАРОЛЯ
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 2}}>
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
                                    label="Новый пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    onClick={handleSubmit}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{mt: 2, mb: 1}}
                                >
                                    Сменить пароль
                                </Button>
                                <Grid container spacing={7}>
                                    <Grid item sx = {{ml:2.5}}>
                                        <Link to="/login"> <Typography> Не забыли пароль? </Typography></Link>
                                    </Grid>
                                    <Grid item sx = {{mr:2.5}}>
                                        <Link to="/registration"> <Typography>Не
                                            зарегистрировались? </Typography></Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
    }