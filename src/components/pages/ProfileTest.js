import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";
import {NICKNAME, PICTURE, USER_ID} from "./SingInSide";
import Avatar from "@mui/material/Avatar";
import {PICTURE_UPDATE} from "./UpdateUser";
import useStore from "../utils/useStore";
import TestCreatorCard from "../UI/TestCreatorCard";

const ProfileTest = () => {
    const navigate = useNavigate()
    const [pathPicture, setPathPicture] = useState("http://localhost:8081/images/users/default_avatar.png");
    const {testsStore, userResultsStore} = useStore();
    useEffect(() => {
        if (NICKNAME === undefined) {
            navigate("/login");
            return
        }
        if (PICTURE !== " ") {
            setPathPicture("http://localhost:8081/images/users/" + PICTURE)
        }
        if (PICTURE_UPDATE !== " ") {
            setPathPicture("http://localhost:8081/images/users/" + PICTURE_UPDATE)
        }
    });

    const changePageToLk = () => {
        navigate("/lk");
    }

    const changePageToResult = () => {
        userResultsStore.getResultsByUser({"id": USER_ID}).then(() => {
            navigate("/lk/res")
        })
    }

    return (
        <div>
            <Navigation/>
            <Grid component="main"
                  style={{}}
                  sx={{
                      justifyContent: 'center',
                      justifyItems: 'center',
                      maxWidth: "1500px",
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                      display: 'inline-block'
                  }}>
                <Grid container
                      sx={{
                          my: 8,

                          display: 'flex',
                          alignItems: 'flex-start',
                      }}
                >
                    <Typography component="h1" variant="h1" sx={{}}>
                        ЛИЧНЫЙ КАБИНЕТ
                    </Typography>
                    <ButtonGroup sx={{mt: 1, ml: 72, height: 48}} variant="contained"
                                 aria-label="outlined primary button group" color='secondary' size='large'>
                        <Button onClick={changePageToLk}>Профиль</Button>
                        <Button onClick={changePageToResult}>Результаты</Button>
                        <Button><Typography sx={{color: '#9F4636'}}>Тесты</Typography></Button>
                    </ButtonGroup>
                    <Grid container sx={{width: 1400}}>
                        <Grid sx={{width: 400, mt: 4, height: 410, backgroundColor: '#FFFFFF', borderRadius: "15px"}}>
                            <Avatar sx={{
                                height: 400,
                                width: 400,
                                backgroundColor: '#FFFFFF',
                                outline: "3px solid",
                                outlineColor: "#000000"
                            }} src={pathPicture}/>
                            <Grid><Typography component="h1" variant="h1">{NICKNAME}</Typography></Grid>
                        </Grid>
                        <Grid container sx={{ml: 22, width: 820}}>
                            {testsStore.tests.map(data => (
                                <TestCreatorCard id={data.id} testType={data.testType} picture={data.picture}
                                                 tittle={data.name} author={data.author} created={data.created}
                                                 description={data.description} mark={data.mark}
                                                 numberQuestions={data.numberQuestions}/>))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default ProfileTest;
