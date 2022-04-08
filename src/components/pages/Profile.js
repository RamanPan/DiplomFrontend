import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";
import {useNavigate} from "react-router";
import {NICKNAME, PICTURE} from "./SingInSide";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import {PICTURE_UPDATE} from "./UpdateUser";
import useStore from "../utils/useStore";
export var user_role;
export var user_date;
const Profile = (props) => {
    const navigate = useNavigate()
    const [pathPicture, setPathPicture] = useState("http://localhost:8081/images/users/default_avatar.png");
    const {usersStore} = useStore();
    useEffect(() => {
        if(NICKNAME === undefined) navigate("/login")
        if(PICTURE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE)}
        if(PICTURE_UPDATE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE_UPDATE)}
        if(usersStore.me.role === "ROLE_PROFESSOR") user_role = "Преподаватель";
        else user_role = "Студент";
        user_date = usersStore.me.created;
        user_date = user_date.substring(0,10)
    });

    return (
        <div>
            <Navigation/>
            <Grid  component="main"
                   style={{}}
                   sx={{
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',}}>
                <Grid container
                      sx={{
                          my: 8,
                          mx: 16,
                          display: 'flex',
                          alignItems: 'flex-start',
                          width:1278,
                      }}
                >
                    <Typography component="h1" variant="h1" sx = {{}}>
                        ЛИЧНЫЙ КАБИНЕТ
                    </Typography>
                    <ButtonGroup sx = {{mt: 1,ml:56}} variant="contained" aria-label="outlined primary button group" color='secondary' size = 'large'>
                        <Button component={Link} to = '/lk'>Профиль</Button>
                        <Button component={Link} to = '/lk'>Результаты</Button>
                        <Button component={Link} to = '/lk/tests'>Тесты</Button>
                    </ButtonGroup>
                    <Grid container sx = {{mt:4,width:1278}}>
                        <Grid sx = {{width:400,height:410,backgroundColor:'#FFFFFF',borderRadius: "15px"}}>
                            <Avatar sx = {{height:400,width:400,backgroundColor: '#FFFFFF'}} src={pathPicture} />
                            <Grid><Typography component="h1" variant="h1">{NICKNAME}</Typography></Grid>
                        </Grid>

                        <Grid container sx = {{width:878}}>
                            <Grid sx = {{ml:6,width:410,minHeight:500,backgroundColor:'#F1DCC9',alignItems:'flex-start',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>ФИО</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{usersStore.me.fullname}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Email</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{usersStore.me.email}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Дата регистраци</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{user_date}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Статус аккаунта</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{user_role}</Typography>
                            </Grid>
                            <Grid sx = {{ml:0.5,width:410,minHeight:500,backgroundColor:'#F1DCC9',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Кол-во пройденных тестов</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>1</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Кол-во созданных тестов</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>1</Typography>

                            </Grid>
                            <Grid sx = {{ml:6,mt:1,width:824,height:75,borderRadius: "15px"}}>
                                <Button sx = {{borderRadius: "8px"}} component={Link} to = '/lk/update' size='large'  variant="contained" color='primary'><Typography >Редактировать данные</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;