import React, {useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Question from "../UI/Question";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {Link} from "react-router-dom";
import {TEST_ID} from "./Construct";

const AddQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [counter, setCounter] = useState(1);

    const handleClickAddQuestion = () => {
        setQuestions([
            ...questions,
            <Question number={counter}
                      test_id={TEST_ID}
            />
        ])
        setCounter(prevState => {
            return (prevState + 1)
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
                        ВОПРОСЫ
                    </Typography>
                    <div>
                        {questions.map(quest => {
                            return quest
                        })}
                    </div>
                </Box>
                <Grid container sx={{
                    mx: 16, width: 1200, mb: 3
                }}>
                    <Button sx={{borderRadius: "8px"}} size='large' onClick={handleClickAddQuestion} fullWidth
                            variant="contained" color='secondary'><Typography variant="h4">Добавить вопрос</Typography>
                    </Button>
                </Grid>
                <Grid container sx={{
                    mx: 16, width: 1200, mb: 3
                }}>
                    <Button sx={{borderRadius: "8px"}} size='large' variant="contained" component={Link} to='/catalog'
                            color='primary'> <ArrowLeftIcon/>Назад </Button>
                    <Button sx={{borderRadius: "8px", ml: 117.7}} size='large' component={Link}
                            to='/construct/addResults' variant="contained" color='primary'> Далее<ArrowRightIcon/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddQuestions;