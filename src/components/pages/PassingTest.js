import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ID_USER_TEST} from "../UI/ExtendedTestCard";
import {PASSING_TEST} from "../UI/TestCard";
import React, {useEffect, useState} from "react";
import NavigationThenPassingTest from "../UI/NavigationThenPassingTest";
import {NICKNAME, USER_ID} from "./SingInSide";
import useStore from "../utils/useStore";
import {useNavigate} from "react-router";
import {postReq} from "../utils/apiCalls";
import {
    API_GET_USERS_ANSWER,
    API_SET_USER_TEST_PASSED
} from "../utils/constans";
import PassingQuestion from "../UI/PassingQuestion";
import Typography from "@mui/material/Typography";
import {BOO, VARIANTS_ANSWER} from "./BeforeTestPass";


export var RESULT_TEST;
export var USER_ANSWERS_ON_TEST = [];
const PassingTest = () => {
  const [counter,setCounter] = useState(1);
  const {questionStore,answerStore} = useStore();
  const [isOpen, setIsOpen] = useState(BOO);
  const navigate = useNavigate();
  useEffect(() => {
    if(NICKNAME === undefined) navigate("/login")

    console.log(VARIANTS_ANSWER);
    })

  const handlerUserAnswer = () => {
    if(counter === PASSING_TEST.numberQuestions) {
      postReq(API_SET_USER_TEST_PASSED, {'user': USER_ID, 'userTest': ID_USER_TEST, 'test' : PASSING_TEST.id}).then(r => {
          RESULT_TEST = r;
          postReq(API_GET_USERS_ANSWER,{'user': USER_ID, 'userTest': ID_USER_TEST}).then(
              r => {
                  USER_ANSWERS_ON_TEST = r;
                  navigate("/catalog/endTestPass")
              }
          )
      } )
    }
    else
    {
      questionStore.birth({"id": counter}).then(r => {
          if(questionStore.passQuestion.type === "OPEN") setIsOpen(true)
          else setIsOpen(false)
        answerStore.birth({"id": questionStore.passQuestion.id}).then(r => {
          setCounter((prevState) => {
            return (prevState + 1)
          })
        })
      })
    }
  }

  return (
      <div>
        <NavigationThenPassingTest name = {PASSING_TEST.name}/>
        <Grid container component="main"
              style={{}}
              sx={{
                maxWidth: '500vh',
                maxHeight: '300vh',
                backgroundPosition: 'center',
                display: 'flex'}}>
          <Grid container sx = {{mt:"20px",display:'flex',ml:"550px",mr:"475px"}}>
            <Grid container><Typography variant = "h4" align = 'center' sx = {{ml:27.7}} >Вопрос {counter + " из " + PASSING_TEST.numberQuestions }</Typography></Grid>
            <PassingQuestion count = {counter} question = {questionStore.passQuestion} answers = {answerStore.answers} isOpen = {isOpen}/>
            <Button variant="contained" color='secondary' onClick={handlerUserAnswer} sx = {{width:400,border:'#000000',mt:2, height:50,ml:13,borderRadius: "15px"}}>Продолжить</Button>
          </Grid>
        </Grid>

      </div>
  );
}




export default observer(PassingTest);