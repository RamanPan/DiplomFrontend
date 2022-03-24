import React from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import TestCard from "../UI/TestCard";

const ProfileTest = () => {
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
                        <Grid container sx = {{ml:6,width:820,backgroundColor:'#000000'}}>
                            <TestCard test = {{tittle: "Лол", desc: "Кекич", mark: "10.0", quanQue: "12"}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default ProfileTest;
