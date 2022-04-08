import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import TestCard from "../UI/TestCard";
import {useNavigate} from "react-router";
import {NICKNAME, PICTURE} from "./SingInSide";
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {PICTURE_UPDATE} from "./UpdateUser";

const ProfileTest = () => {
    const navigate = useNavigate()
    const [pathPicture, setPathPicture] = useState("http://localhost:8081/images/users/default_avatar.png");
    useEffect(() => {
        if(NICKNAME === undefined) navigate("/login")
        if(PICTURE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE)}
        if(PICTURE_UPDATE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE_UPDATE)}
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
                        <Button>Результаты</Button>
                        <Button>Тесты</Button>
                    </ButtonGroup>
                    <Grid container sx = {{mt:4,width:1278}}>
                        <Grid sx = {{width:400,height:410,backgroundColor:'#FFFFFF',borderRadius: "15px"}}>
                            <Avatar sx = {{height:400,width:400,backgroundColor: '#FFFFFF'}} src={pathPicture} />
                            <Grid><Typography component="h1" variant="h1">{NICKNAME}</Typography></Grid>
                        </Grid>
                        <Grid container sx = {{ml:6,width:820}}>
                            <TestCard test = {{tittle: "Лол", desc: "Кекич", mark: "10.0", quanQue: "12"}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default ProfileTest;
