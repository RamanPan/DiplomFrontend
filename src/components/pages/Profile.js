import React from 'react';
import Navigation from "../UI/Navigation";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";

const Profile = (props) => {
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
                    <ButtonGroup sx = {{mt: 1,ml:56}}variant="contained" aria-label="outlined primary button group" color='secondary' size = 'large'>
                        <Button>Профиль</Button>
                        <Button>Результаты</Button>
                        <Button>Тесты</Button>
                    </ButtonGroup>
                    <Grid container sx = {{mt:4,width:1278}}>
                        <Grid sx = {{width:400,height:400,backgroundColor:'#F1DCC9', opacity: 0.5,borderRadius: "15px"}}>
                        </Grid>
                        <Grid container sx = {{width:878}}>
                            <Grid sx = {{ml:6,width:410,minHeight:500,backgroundColor:'#F1DCC9',alignItems:'flex-start',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>ФИО</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>Панаёт Роман Тудорович</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Email</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>ramanpan123@gmail.com</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Дата регистраци</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>11.11.2021</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Статус аккаунта</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>Преподаватель</Typography>
                            </Grid>
                            <Grid sx = {{ml:0.5,width:410,minHeight:500,backgroundColor:'#F1DCC9',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Кол-во пройденных тестов</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>1</Typography>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Кол-во созданных тестов</Typography>
                                <Typography align='left' variant='h5' sx = {{ml:2,mt: 1,mb:2}}>1</Typography>

                            </Grid>
                            <Grid sx = {{ml:6,mt:1,width:824,height:75,borderRadius: "15px"}}>
                                <Button sx = {{borderRadius: "8px"}} size='large'  variant="contained" color='primary'><Typography >Редактировать данные</Typography>
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