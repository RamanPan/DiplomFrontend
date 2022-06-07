import React, {useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Slider} from "@mui/material";
import {API_SET_PERCENTS_QUESTIONS, types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {TEST_ID} from "./Construct";
import {postReq} from "../utils/apiCalls";
import {useNavigate} from "react-router";
import {observer} from "mobx-react-lite";
import useStore from "../utils/useStore";
import {PERCENTS} from "./UpdateResults";

function valuetext(value) {
    return `${value}`;
}
const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '100',
    },
];



const UpdatePercents = () => {
    const {testsStore} = useStore();
    const [percentPolitic, setPercentPolitic] = useState(PERCENTS[2]);
    const [percentEconomic, setPercentEconomic] = useState(PERCENTS[3]);
    const [percentCulture, setPercentCulture] = useState(PERCENTS[1]);
    const [numberQuestions, setNumberQuestions] = useState(PERCENTS[0]);
    const navigate = useNavigate();

    const handleChangeCulture = (event) => {
        const {value} = event.target
        setPercentCulture(value);
    }
    const handleChangePolitic = (event) => {
        const {value} = event.target
        setPercentPolitic(value);
    }
    const handleChangeEconomic = (event) => {
        const {value} = event.target
        setPercentEconomic(value);
    }
    const handleChangeNumberQuestions = (event) => {
        const {value} = event.target
        setNumberQuestions(value);
    }

    const handleSubmit = () => {
        postReq(API_SET_PERCENTS_QUESTIONS, {
            'id': testsStore.passingTest.id,
            'numberQuestions': numberQuestions,
            'percentCulture': percentCulture,
            'percentEconomic': percentEconomic,
            'percentPolitic': percentPolitic
        }).then(r => {
            navigate("/lk");
        })
    }


    return (
        <div>
            <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      justifyContent:'center',
                      justifyItems:'center',
                      maxWidth:"1920px",
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                      display: 'inline-block'}}>
                <Box
                    sx={{
                        my: 8,
                        justifyContent:'center',
                        mx: 16,
                        display: 'flex',
                        alignItems: 'cenrer',
                        borderRadius: "15px",
                        flexDirection: 'column',
                        '& button': { marginRight: 'auto', marginLeft: 'auto'}
                    }}
                >
                    <Typography  variant="h1">
                        РЕДАКТИРОВАНИЕ ПРОЦЕНТНОГО СООТНОШЕНИЯ ВОПРОСОВ
                    </Typography>
                    <Typography variant="h2" sx={{mt: 2}}>Кол-во вопросов</Typography>
                    <TextField
                        margin="normal"
                        required
                        defaultValue={PERCENTS[0]}
                        onChange={handleChangeNumberQuestions}
                        label="Введите кол-во вопросов"
                        name="numberQuestions"
                        sx = {{alignSelf:'center',width: 400,mt: 1}}
                    />
                    <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Процент вопросов культурной категории</Typography>
                    <Slider sx = {{alignSelf:'center',width: 400,mt: 1}}
                            getAriaLabel={() => 'Установка процентного соотношения культурной категории'}
                            value={percentCulture} marks={marks}
                            min = {0}
                            max = {100}
                            onChange={handleChangeCulture}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                    />
                    <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Процент вопросов экономической категории</Typography>
                    <Slider sx = {{alignSelf:'center',width: 400,mt: 1}}
                            getAriaLabel={() => 'Установка процентного соотношения экономической категории'}
                            value={percentEconomic} marks={marks}
                            min = {0}
                            max = {100}
                            onChange={handleChangeEconomic}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                    />
                    <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Процент вопросов политической категории</Typography>
                    <Slider sx = {{alignSelf:'center',width: 400,mt: 1}}
                            getAriaLabel={() => 'Установка процентного соотношения политической категории'}
                            value={percentPolitic} marks={marks}
                            min = {0}
                            max = {100}
                            onChange={handleChangePolitic}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                    />
                    <Button sx = {{mt:4, width:300,borderRadius:'10px'}} variant="contained" onClick={handleSubmit} color="primary" size="large">Завершить </Button>
                </Box>
            </Grid>
        </div>
    );
};

export default observer(UpdatePercents);
