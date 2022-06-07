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
import TestPassedCard from "../UI/TestPassedCard";

const ProfileResult = () => {
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

    const changePageToLk = () => {
        navigate("/lk");
    }

    const changePageToTests = () => {
        testsStore.getTestsByAuthor({"author" : NICKNAME}).then(r => {
            navigate("/lk/tests")
        })
    }

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
                          alignItems: 'flex-start',
                      }}
                >
                    <Typography component="h1" variant="h1" sx = {{}}>
                        ЛИЧНЫЙ КАБИНЕТ
                    </Typography>
                    <ButtonGroup sx = {{mt: 1,ml:72,height:48}} variant="contained" aria-label="outlined primary button group" color='secondary' size = 'large'>
                        <Button onClick={changePageToLk}>Профиль</Button>
                        <Button > <Typography sx = {{color: '#9F4636'}}>Результаты</Typography></Button>
                        {isStudent ? (<div/>):(<Button onClick={changePageToTests}>Тесты</Button>)}
                    </ButtonGroup>
                    <Grid container sx = {{width:1400}}>
                        <Grid sx = {{mt:4,width:400,height:410,backgroundColor:'#FFFFFF',borderRadius: "15px"}}>
                            <Avatar sx = {{height:400,width:400,backgroundColor: '#FFFFFF',outline: "3px solid",outlineColor:"#000000"}} src={pathPicture} />
                            <Grid><Typography component="h1" variant="h1">{NICKNAME}</Typography></Grid>
                        </Grid>
                        <Grid container sx = {{ml:15,width:878}}>
                            {userResultsStore.userResults.map(data =>(<TestPassedCard testResult = {data}/>))}</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default ProfileResult;