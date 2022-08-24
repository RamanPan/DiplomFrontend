import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {API_GET_PERCENTS, API_SET_NQ_TEST} from "../utils/constans";
import Result from "../UI/Result";
import {useNavigate} from "react-router";
import {getReq} from "../utils/apiCalls";
import {observer} from "mobx-react-lite";
import useStore from "../utils/useStore";
import UpdateResult from "../UI/UpdateResult";

export var PERCENTS = []
const UpdateResults = () => {
    const {testsStore, resultsStore} = useStore();
    const [results, setResults] = useState([]);
    const [counter, setCounter] = useState(resultsStore.results.length + 1);
    const navigate = useNavigate()
    useEffect(() => {
        getReq(API_SET_NQ_TEST, testsStore.passingTest.id).then();
    });
    const handleClickAddResult = () => {
        setResults([
            ...results,
            <Result number={counter}
                    test_id={testsStore.passingTest.id}
            />
        ])
        setCounter((prevState) => {
            return (prevState + 1)
        })
    }
    const handleComplete = () => {
        navigate("/lk")
    }

    const handlePercent = () => {
        getReq(API_GET_PERCENTS, testsStore.passingTest.id).then(r => {
            PERCENTS = r;
            navigate("/construct/updatePercents")
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
                      maxWidth: "1920px",
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                      display: 'inline-block'
                  }}>
                <Box
                    sx={{
                        my: 8,
                        mx: 16,
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography component="h1" variant="h1" sx={{}}>
                        РЕДАКТИРОВАНИЕ РЕЗУЛЬТАТОВ
                    </Typography>
                    {resultsStore.results.map(data => (
                        <UpdateResult result={data} test_id={testsStore.passingTest.id}/>))}
                    {results.map(quest => {
                        return quest
                    })}
                </Box>
                <Grid container sx={{
                    mx: 16, width: 1200, mb: 3
                }}>
                    <Button sx={{borderRadius: "8px"}} size='large' fullWidth variant="contained"
                            onClick={handleClickAddResult} color='secondary'><Typography variant="h4">Добавить
                        результат</Typography> </Button>
                </Grid>
                <Grid container sx={{
                    display: "flex",
                    mx: 16, width: 1200, mb: 3
                }}>
                    <Button sx={{borderRadius: "8px", width: 150, mr: 24}} onClick={handleComplete} size='large'
                            variant="contained" color='primary'> <ArrowLeftIcon/>Назад</Button>
                    <Button sx={{borderRadius: "8px", mr: 24}} onClick={handlePercent} size='large' variant="contained"
                            color='primary'> Обновить процентное соотношение вопросов </Button>
                    <Button sx={{borderRadius: "8px", width: 150}} size='large' onClick={handleComplete}
                            variant="contained" color='primary'>Закончить<ArrowRightIcon/> </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default observer(UpdateResults);