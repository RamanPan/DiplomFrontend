import React from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Question from "../UI/Question";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const AddQuestions = () => {
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
                        ВОПРОСЫ
                    </Typography>
                    <Question/>
                        </Box>
                <Grid container sx={{
                    mx: 16,width: 1200,mb: 3}}>
                <Button sx = {{borderRadius: "8px"}} size='large' fullWidth variant="contained" color='secondary'><Typography variant="h4">Добавить вопрос</Typography>  </Button>
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

export default AddQuestions;