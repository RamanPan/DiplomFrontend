import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete, ButtonGroup} from "@mui/material";
import TestCard from "../UI/TestCard";
import '../util.css'
import {NICKNAME} from "./SingInSide";
import {useNavigate} from "react-router";
import useStore from "../utils/useStore";
import {observer} from "mobx-react-lite";

const Catalog = () => {
    const navigate = useNavigate();
    const {testsStore} = useStore();
    const [ifFirst, setIfFirst] = useState(false);
    const [filter, setFilterType] = useState(types[3]);
    let filterType;
    useEffect(() => {
        if(NICKNAME === undefined) navigate("/login")
        if(!ifFirst) {testsStore.getTests().then();setIfFirst(true)}
    });
    const handlerOldTests = () => {
        testsStore.getOldTests().then();
        navigate("/catalog")
    }
    const handlerNewTests = () => {
        testsStore.getNewTests().then();
    }
    const handlerBestTests = () => {
        testsStore.getBestTests().then();
    }
    const handlerFilterTests = () => {
        testsStore.getFilterTests(filterType).then();
    }
    return (
        <div className="sexScroll">
           <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{

                      backgroundSize: 'cover',
                      backgroundPosition: 'center',}}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            color: '#00000'
                        }}
                    >
                        <Typography component="h1" variant="h1" sx = {{mr:0.5}}>
                            ДОСТУПНЫЕ ТЕСТЫ
                        </Typography>
                        <Grid container sx={{mt: 3, mb: 2 }} >
                            <Box sx={{ width:'100%',display: 'flex', alignItems: 'flex-start'}}>
                        {/*<Button variant="contained" color="secondary" size="large" sx={{height: 56,width: 135,borderRadius: 3.5}}>Новые </Button>*/}
                        {/*<Button variant="contained" color="secondary" size="large" sx={{height: 56,width: 135,borderRadius: 3.5}}>Лучшие </Button>*/}
                        {/*<Button variant="contained" color="secondary" size="large" sx={{height: 56,width: 135,borderRadius: 3.5}}>Старые </Button>*/}
                                <ButtonGroup sx = {{borderRadius:"15px",mr:3.5,height: 56,}} variant="contained" aria-label="outlined primary button group" color='secondary' size = 'large'>
                                    <Button onClick={handlerNewTests}>Новые</Button>
                                    <Button onClick={handlerOldTests}>Старые</Button>
                                    <Button onClick={handlerBestTests}>Лучшие</Button>
                                </ButtonGroup>
                                <Autocomplete size="medium"
                                    id="combo"
                                    style={{backgroundColor: '#F1DCC9',minWidth: 300,borderRadius:"10px"}} options={types} value={filter}
                                    color="secondary"
                                              onChange={(event,newValue) => {
                                                  setFilterType(newValue);
                                                  filterType = newValue;
                                                  handlerFilterTests()
                                              }}
                                    PaperComponent={({ children }) => (
                                        <Paper style={{ background: '#F1DCC9' }}>{children}</Paper>
                                    )}
                                    renderInput={(params) => <TextField {...params} label="Фильтрация по типу теста" />}
                                />
                            </Box>
                            <div className='break'/>
                           <Grid container sx = {{
                               width: 1400,
                               ml: 0
                               }}>
                               {testsStore.tests.map(data =>(<TestCard id = {data.id} testType = {data.testType} picture = {data.picture} tittle = {data.name} author = {data.author} created = {data.created} description = {data.description} mark = {data.mark} numberQuestions = {data.numberQuestions}/>))}
                           </Grid>
                        </Grid>
                    </Box>
                </Grid>
        </div>
    );
};

export default observer(Catalog);
