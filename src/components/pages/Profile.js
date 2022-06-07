import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";
import {useNavigate} from "react-router";
import {NICKNAME, PICTURE, USER_ID} from "./SingInSide";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import {PICTURE_UPDATE} from "./UpdateUser";
import useStore from "../utils/useStore";
import {observer} from "mobx-react-lite";
import TestPassedCard from "../UI/TestPassedCard";
import {postReq} from "../utils/apiCalls";
import {API_GET_TESTS_BY_AUTHOR} from "../utils/constans";
export var user_date;
const Profile = () => {
    const navigate = useNavigate()
    const [pathPicture, setPathPicture] = useState("http://localhost:8081/images/users/default_avatar.png");
    const {usersStore,testsStore,userResultsStore} = useStore();
    const [isStudent, setIsStudent] = useState(false);

    useEffect(() => {
        if(NICKNAME === undefined) {navigate("/login"); return}
        if(PICTURE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE)}
        if(PICTURE_UPDATE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE_UPDATE)}
        if(usersStore.me.role === "ROLE_STUDENT") setIsStudent(true);
    });
    const getRole = () => {
        if(usersStore.me.role === "ROLE_PROFESSOR") return  "Преподаватель";
        return  "Студент";
    }
    const getDate = () => {
        user_date = usersStore.me.created;
        return  user_date.substring(0,10);
    }

    const changePageToTests = () => {
        testsStore.getTestsByAuthor({"author" : NICKNAME}).then(r => {
            navigate("/lk/tests")
        })
    }

    const changePageToResult = () => {
        userResultsStore.getResultsByUser({"id": USER_ID}).then(r => {
            navigate("/lk/res")
        })}
    return (
        <div>
            <Navigation/>
            <Grid  component="main"
                   style={{}}
                   sx={{
                       justifyContent:'center',
                       justifyItems:'center',
                       maxWidth:"1500px",
                       maxHeight: '300vh',
                       backgroundPosition: 'center',
                       display: 'inline-block'}}>
                <Grid container
                      sx={{
                          my: 8,

                          display: 'flex',
                      }}
                >
                    <Typography align="left" component="h1" variant="h1" sx = {{}}>
                        ЛИЧНЫЙ КАБИНЕТ
                    </Typography>
                    <ButtonGroup sx = {{mt: 1,ml:72,height:48}} variant="contained" aria-label="outlined primary button group" color='secondary' size = 'large'>
                        <Button><Typography sx = {{color: '#9F4636'}}> Профиль</Typography></Button>
                        <Button onClick={changePageToResult}>Результаты</Button>
                        {isStudent ? (<div/>):(<Button onClick={changePageToTests}>Тесты</Button>)}
                    </ButtonGroup>
                    <Grid container sx = {{width:1400}}>
                        <Grid sx = {{mt:4,width:400,height:410,backgroundColor:'#FFFFFF',borderRadius: "15px"}}>
                            <Avatar sx = {{height:400,width:400,backgroundColor: '#FFFFFF',outline: "3px solid",outlineColor:"#000000"}} src={pathPicture} />
                            <Grid><Typography component="h1" variant="h1">{NICKNAME}</Typography></Grid>
                        </Grid>
                        <Grid container sx = {{width:878,mt:4,ml:15}}><Grid sx = {{ml:6,width:410,minHeight:500,backgroundColor:'#F1DCC9',alignItems:'flex-start',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>ФИО</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{usersStore.me.fullname}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Email</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{usersStore.me.email}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Дата регистраци</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{getDate()}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Статус аккаунта</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{getRole()}</Typography> </Grid>
                                <Grid sx = {{ml:0.5,width:410,minHeight:500,backgroundColor:'#F1DCC9',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Кол-во прохождений</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{usersStore.me.countPassed}</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Кол-во созданных тестов</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>{usersStore.me.countCreated}</Typography>
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
}
;

export default observer(Profile);