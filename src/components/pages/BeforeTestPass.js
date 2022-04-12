import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Navigation from "../UI/Navigation";
import ExtendedTestCard from "./ExtendedTestCard";
import useStore from "../utils/useStore";
import Grid from "@mui/material/Grid";
import {NICKNAME} from "./SingInSide";
import {useNavigate} from "react-router";
import {TEST_PASS} from "../../App";
import {passTest} from "../../store/testsStore";
import {PASSING_TEST} from "../UI/TestCard";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {ButtonGroup} from "@mui/material";
import {postReq} from "../utils/apiCalls";
import {API_GET_ANSWERS} from "../utils/constans";

export var VARIANTS_ANSWER = [];
export var VARIANTS_ANSWER_FOR_PROPS = [];
const BeforeTestPass = () => {
    const navigate = useNavigate();
    const {questionStore,answerStore} = useStore();
    if(NICKNAME === undefined) {navigate("/login")}
    useEffect(() => {
        console.log(PASSING_TEST)
         {questionStore.birth({"id":0}).then(r =>{
             answerStore.birth({"id":questionStore.passQuestion.id}).then(r => {
             })
         })
        }
    });

    const handleBack = () => {
        navigate("/catalog")
    }

    return (
        <div>
            <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      maxWidth: '500vh',
                      maxHeight: '300vh',
                      alignItems: 'center',
                      alignSelf: 'center',
                      backgroundPosition: 'center',
                      display: 'flex'}}>
                <Grid container sx = {{alignSelf: 'center',mt:"20px",display:'flex',ml:"475px",mr:"450px"}}>
                    <Grid container><Button onClick={handleBack} variant = "text"><ArrowBackIcon/>Назад</Button> </Grid>
                    <Grid><ExtendedTestCard test = {PASSING_TEST}/> </Grid>
            </Grid>
            </Grid>

        </div>
    )
}



export default observer(BeforeTestPass);