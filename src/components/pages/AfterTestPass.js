import {observer} from "mobx-react-lite";
import NavigationThenPassingTest from "../UI/NavigationThenPassingTest";
import React, { useState} from "react";
import {PASSING_TEST} from "../UI/TestCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserAnswerCard from "../UI/UserAnswerCard";
import {RESULT_TEST, USER_ANSWERS_ON_TEST} from "./PassingTest";
import {Slider} from "@mui/material";

function valuetext(value) {
    return `${value}`;
}
const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10,
        label: '10',
    },
];
export var MARK;
const AfterTestPass = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event) => {
        const {value} = event.target
        MARK = value;
        setValue(value);
    };
    return (
        <div>
            <NavigationThenPassingTest name = {PASSING_TEST.name}/>
            <Grid container sx = {{justifyContent:'center',
                maxWidth:"1920px",
                backgroundPosition: 'center',
            }}>
                <Grid container alignContent="center" sx = {{width:"1920px",mt:3,justifyContent:"center", display:"flex"}}>
                    <Typography sx = {{fontSize:36}} align = "center">Тест пройден!</Typography>
                </Grid>
                <Grid container sx = {{mt:3,width:"750px",
                    // backgroundColor:'#ffd700',
                }}>
                    <Grid sx = {{ml:10,justifyContent: "flex-start"}}>
                        <Grid container>
                            <Box component="img" sx = {{objectFit: "cover",
                                mb:3,width:400,height:400,borderRadius: "15px"}}
                                 src={"http://localhost:8081/images/results/" + RESULT_TEST.picture}>
                            </Box>
                            <Grid container>
                                <Typography align="left" sx = {{fontSize:36,mb:1.5}}>{RESULT_TEST.header + "(" + RESULT_TEST.result.toFixed(1) + "%)"}</Typography>
                            </Grid>
                            <Grid>
                            <Typography variant = "h4">{RESULT_TEST.description}</Typography>
                            </Grid>
                            <Grid container>
                            <Typography align="left" sx = {{fontSize:30}}>Оцените тест!</Typography>
                                <Slider sx = {{ml:3,width: 300,mt: 1,color:'#ffd700'}}
                                    getAriaLabel={() => 'Оценивание теста'}
                                    value={value} marks={marks}
                                        min = {0}
                                        max = {10}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                            />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container sx = {{width:"830px",
                    // backgroundColor:'#AAA700',
                }}>
                    {USER_ANSWERS_ON_TEST.map(data => (<UserAnswerCard answer = {data}/>))}
                </Grid>

            </Grid>

        </div>
    )
}
export default observer(AfterTestPass);