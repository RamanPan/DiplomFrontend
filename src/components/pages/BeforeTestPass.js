import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Navigation from "../UI/Navigation";
import ExtendedTestCard from "../UI/ExtendedTestCard";
import useStore from "../utils/useStore";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router";
import {PASSING_TEST} from "../UI/TestCard";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export var BOO;
const BeforeTestPass = () => {
    const navigate = useNavigate();
    const {questionStore, answerStore} = useStore();
    useEffect(() => {
        console.log(PASSING_TEST)
        {
            BOO = false;
            questionStore.birth({"id": 0}).then(() => {
                if (questionStore.passQuestion.type === "OPEN") {
                    BOO = true;
                }
                answerStore.birth({"id": questionStore.passQuestion.id}).then(() => {
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
                      justifyContent: 'center',
                      alignSelf: 'center',
                      backgroundPosition: 'center',
                      display: 'flex'
                  }}>
                <Grid container sx={{justifyContent: 'center', mt: "20px", width: 600, display: 'flex'}}>
                    <Grid container sx={{justifyContent: 'left'}}><Button onClick={handleBack}
                                                                          variant="text"><ArrowBackIcon/>Назад</Button>
                    </Grid>
                    <Grid><ExtendedTestCard test={PASSING_TEST}/> </Grid>
                </Grid>
            </Grid>

        </div>
    )
}


export default observer(BeforeTestPass);