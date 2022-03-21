import React from 'react';
import Navigation from "../UI/Navigation";
import Image from "../../resources/fon.jpeg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {roles, types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete} from "@mui/material";
import Question from "../UI/Question";
import Result from "../UI/Result";

const AddResults = () => {
    return (
        <div>
            <Navigation/>
            <Grid  component="main"
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
                    }}
                >
                    <Typography component="h1" variant="h1" sx = {{}}>
                        РЕЗУЛЬТАТЫ
                    </Typography>
                    <Result/>
                </Box>
                <Grid container sx={{
                    mx: 16,width: 1200,mb: 3}}>
                    <Button sx = {{borderRadius: "8px"}} size='large' fullWidth variant="contained" color='secondary'><Typography variant="h4">Добавить результат</Typography>  </Button>
                </Grid>
                <Grid container sx={{
                    mx: 16,width: 1200,mb: 3}}>
                    <Button sx = {{borderRadius: "8px"}} size='large' variant="contained" color='primary'> <ArrowLeftIcon/>Назад </Button>
                    <Button sx = {{borderRadius: "8px",ml:117.7}} size='large' variant="contained" color='primary'> Далее<ArrowRightIcon/> </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddResults;