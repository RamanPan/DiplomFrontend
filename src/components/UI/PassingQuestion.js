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
import useStore from "../utils/useStore";

const PassingQuestion = (props) => {
    const [isFirst, setIsFirst] = useState(false);
    const [isSecond, setIsSecond] = useState(false);
    const [isThird, setIsThird] = useState(false);
    const [isFourth, setIsFourth] = useState(false);
    const [isFive, setIsFive] = useState(false);
    const [counter,setCounter] = useState(1);
    const {userAnswersStore} = useStore();
    // const [isNew, setIsNew] = useState(false);
    let answer;
    let id;
    if (counter === props.count){
        setIsFirst(false);
        setIsSecond(false);
        setIsThird(false);
        setIsFourth(false);
        setIsFive(false);
        id = userAnswersStore.id;
        setCounter((prevState) => {
            return (prevState + 1)
    })
    }
    const handleFirstAnswer = () => {
        const doc = document.getElementById("first")
        if(!isFirst) {
            doc.style.backgroundColor = "#ffd700";
            userAnswersStore.createUserAnswer({"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[0].statement}).then(r => {
                setIsFirst(true)
            })
        }
        else {
            doc.style.backgroundColor = "#000000";
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsFirst(false)
                }
            )
        }
    }
    const handleSecondAnswer = () => {
        const doc = document.getElementById("second")
        if(!isSecond) {
            doc.style.backgroundColor = "#ffd700";
            userAnswersStore.createUserAnswer({"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[1].statement}).then(r => {
                setIsSecond(true)
            })

        }
        else {
            doc.style.backgroundColor = "#000000";
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsSecond(false)
                }
            )
        }
    }
    const handleThirdAnswer = () => {
        const doc = document.getElementById("third")
        if(!isThird) {
            doc.style.backgroundColor = "#ffd700";
            userAnswersStore.createUserAnswer({"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[2].statement}).then(r => {
                setIsThird(true)
            })

        }
        else {
            doc.style.backgroundColor = "#000000";
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsThird(false)
                }
            )

        }
    }
    const handleFourthAnswer = () => {
        const doc = document.getElementById("fourth")
        if(!isFourth) {
            doc.style.backgroundColor = "#ffd700";
            userAnswersStore.createUserAnswer({"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : props.answers[3].statement}).then(r => {
                setIsFourth(true)
            })
        }
        else {
            doc.style.backgroundColor = "#000000";
            deleteReq(API_DELETE_USERS_ANSWER,id).then(
                r => {
                    setIsFourth(false)
                }
            )

        }
    }
    const getAnswerOne = () => {
        return props.answers[0];

    }
    const getAnswerTwo = () => {
        return props.answers[1];

    }
    const getAnswerThree = () => {
        return props.answers[2];

    }
    const getAnswerFour = () => {
        return props.answers[3];

    }
    const isUndefined = (value) => {
      return value !== undefined;
    }

    const uploadAnswer = (event) => {
        const {value} = event.target;
        answer = value;
    }
    const handleAnswer = () => {
        if(!isFive) {
            userAnswersStore.createUserAnswer({"user": USER_ID, "userTest":ID_USER_TEST, "question" : props.question.id, "answer" : answer}).then(r => {
                setIsFive(true)
            })
        }
        else {deleteReq(API_DELETE_USERS_ANSWER,id).then(
            r => {
                setIsFive(false)
            }
        )

    }
    }
    return (
        <div style={{justifyContent:'center',}}>
                <Box component="img" sx = {{width:600,objectFit: "cover",height:500,borderRadius: "15px"}}
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
                        {isUndefined(getAnswerOne()) ? (<Button variant = "contained" id = "first" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleFirstAnswer}>{props.answers[0].statement}</Button>):(<div/>)}
                        {isUndefined(getAnswerTwo()) ?(<Button variant = "contained" id ="second" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleSecondAnswer}>{props.answers[1].statement}</Button>): (<div/>)}
                    </Grid>
                    <Grid container sx = {{mt:2,mb:2}}>
                        {isUndefined(getAnswerThree()) ?(<Button variant = "contained" id = "third" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleThirdAnswer}>{props.answers[2].statement}</Button>):(<div/>)}
                        {isUndefined(getAnswerFour()) ?(<Button variant = "contained" id = "fourth" sx={{ml:5,width:230,height:50,borderRadius: "15px"}} onClick={handleFourthAnswer}>{props.answers[3].statement}</Button>):(<div/>)}
                    </Grid>
                </Grid>)}
                </Grid>
            </Grid>
        </div>
    )



}


export default observer(PassingQuestion);