import {observer} from "mobx-react-lite";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField} from "@mui/material";
import React, {useState} from "react";
import {deleteReq, postReq} from "../utils/apiCalls";
import {API_CREATE_USERS_ANSWER, API_DELETE_USERS_ANSWER} from "../utils/constans";
import { USER_ID} from "../pages/SingInSide";
import {ID_USER_TEST} from "./ExtendedTestCard";

export var ID_USERS_ANSWER;
const PassingQuestion = (props) => {
    const [isFirst, setIsFirst] = useState(false);
    const [isSecond, setIsSecond] = useState(false);
    const [isThird, setIsThird] = useState(false);
    const [isFourth, setIsFourth] = useState(false);
    const [isFive, setIsFive] = useState(false);
    const [counter,setCounter] = useState(1);
    // const [isNew, setIsNew] = useState(false);
    let answer;
    let id = ID_USERS_ANSWER;
    if (counter === props.count){
        setIsFirst(false);
        setIsSecond(false);
        setIsThird(false);
        setIsFourth(false);
        setIsFive(false);
        setCounter((prevState) => {
            return (prevState + 1)
    })
    }
    const handleFirstAnswer = () => {
        if(!isFirst) {
            postReq(API_CREATE_USERS_ANSWER,{"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[0].statement})
                .then(r => {
                    ID_USERS_ANSWER = r
                    setIsFirst(true)
                })

        }
        else {
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsFirst(false)
                }
            )
        }
    }
    const handleSecondAnswer = () => {
        if(!isSecond) {
            postReq(API_CREATE_USERS_ANSWER,{"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[1].statement})
                .then(r => {
                    ID_USERS_ANSWER = r
                    setIsSecond(true)
                })

        }
        else {

            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsSecond(false)
                }
            )
        }
    }
    const handleThirdAnswer = () => {
        if(!isThird) {
            postReq(API_CREATE_USERS_ANSWER,{"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[2].statement})
                .then(r => {
                    ID_USERS_ANSWER = r
                    setIsThird(true)
                })

        }
        else {
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsThird(false)
                }
            )

        }
    }
    const handleFourthAnswer = () => {
        if(!isFourth) {
            postReq(API_CREATE_USERS_ANSWER,{"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[3].statement})
                .then(r => {
                    ID_USERS_ANSWER = r
                    setIsFourth(true)
                })
        }
        else {
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsFourth(false)
                }
            )

        }
    }
    const getAnswerTwo = () => {
        if(props.answers[1] !== undefined) return props.answers[1].statement;
        else return " ";
    }
    const getAnswerThree = () => {
        if(props.answers[2] !== undefined) return props.answers[2].statement;
        else return " ";
    }
    const getAnswerFour = () => {
        if(props.answers[3] !== undefined) return props.answers[3].statement;
        else return " ";
    }
    const uploadAnswer = (event) => {
        const {value, name} = event.target;
        answer = value;
    }
    const handleAnswer = () => {
        if(!isFive) {
        postReq(API_CREATE_USERS_ANSWER,{"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : answer}).then(r => {
            ID_USERS_ANSWER = r
            setIsFive(true)
        })}
        else {deleteReq(API_DELETE_USERS_ANSWER,id).then(
            r => {
                setIsFive(false)
            }
        )

    }
    }
    return (
        <div>
                <Box component="img" sx = {{width:600,height:500,borderRadius: "15px"}}
                                src={"http://localhost:8081/images/questions/" + props.question.picture}/>
                <Grid container sx={{ml: 2,mt: 0.5}}>
                <Grid sx = {{width:600,}} alignItems='center'>
                    <Typography variant='h2' align='center'>
                        {props.question.statement}
                    </Typography>
                    {/*{props.answers.map(data =>(<Button variant = "contained" onClick={handleAnswer}>{data.statement}</Button>))}*/}
                    {props.isOpen ? (<Grid container sx = {{mt:2,}}>
                        <TextField
                            label="Введите ответ"
                            name="answer"
                            onChange={uploadAnswer}
                            sx={{width: 390,height:80}}
                        />   {isFive? (<Button variant = "contained" sx={{ml:3,width:180,color: '#ffd700',height:60,borderRadius: "15px"}} onClick={handleAnswer}>Я передумал!</Button>):(<Button variant = "contained" sx={{ml:3,width:180,height:60,borderRadius: "15px"}} onClick={handleAnswer}>Утвердить</Button>)}
                    </Grid> ) : (<Grid>
                    <Grid container sx = {{mt:2}}>
                        {isFirst ? (<Button variant = "contained" sx={{ml:5,width:230,color: '#ffd700',height:50,borderRadius: "15px"}} onClick={handleFirstAnswer}>{props.answers[0].statement}</Button>):(<Button variant = "contained" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleFirstAnswer}>{props.answers[0].statement}</Button>)}
                        {isSecond ?(<Button variant = "contained" sx={{ml:5,width:230,color: '#ffd700',height:50,borderRadius: "15px"}} onClick={handleSecondAnswer}>{getAnswerTwo()}</Button>): (<Button variant = "contained" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleSecondAnswer}>{getAnswerTwo()}</Button>)}
                    </Grid>
                    <Grid container sx = {{mt:2,mb:2}}>
                        {isThird? (<Button variant = "contained" sx={{ml:5,width:230,color: '#ffd700',height:50,borderRadius: "15px"}} onClick={handleThirdAnswer}>{getAnswerThree()}</Button>):(<Button variant = "contained" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleThirdAnswer}>{getAnswerThree()}</Button>)}
                        {isFourth? (<Button variant = "contained" sx={{ml:5,width:230,color: '#ffd700',height:50,borderRadius: "15px"}} onClick={handleFourthAnswer}>{getAnswerFour()}</Button>):(<Button variant = "contained" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleFourthAnswer}>{getAnswerFour()}</Button>)}
                    </Grid>
                </Grid>)}
                </Grid>
            </Grid>
        </div>
    )



}


export default observer(PassingQuestion);