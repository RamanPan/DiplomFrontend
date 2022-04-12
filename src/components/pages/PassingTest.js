import {observer} from "mobx-react-lite";
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExtendedTestCard, {ID_USER_TEST} from "./ExtendedTestCard";
import {PASSING_TEST} from "../UI/TestCard";
import React, {useEffect, useState} from "react";
import NavigationThenPassingTest from "../UI/NavigationThenPassingTest";
import {NICKNAME, USER_ID,TRUE_OR_FALSE} from "./SingInSide";
import questionsStore from "../../store/questionsStore";
import useStore from "../utils/useStore";
import {useNavigate} from "react-router";
import {postReq} from "../utils/apiCalls";
import {API_CREATE_USERS_ANSWER, API_GET_ANSWERS, API_SET_USER_TEST_PASSED} from "../utils/constans";
import PassingQuestion, {isNew} from "../UI/PassingQuestion";
import Typography from "@mui/material/Typography";
import {VARIANTS_ANSWER, VARIANTS_ANSWER_FOR_PROPS} from "./BeforeTestPass";



const PassingTest = () => {
  const [counter,setCounter] = useState(1);
  const {questionStore,answerStore,trueOrFalse} = useStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(NICKNAME === undefined) navigate("/login")

    console.log(VARIANTS_ANSWER);
    })

  const handlerUserAnswer = () => {
    if(counter === PASSING_TEST.numberQuestions) {
      postReq(API_SET_USER_TEST_PASSED, {'user': USER_ID, 'userTest': ID_USER_TEST, 'test' : PASSING_TEST.id}).then(r => {
        navigate("/catalog/endTestPass")
      } )
    }
    else
    {
      questionStore.birth({"id": counter}).then(r => {
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
                alignItems: 'center',
                alignSelf: 'center',
                backgroundPosition: 'center',
                display: 'flex'}}>
          <Grid container sx = {{alignSelf: 'center',mt:"20px",display:'flex',ml:"475px",mr:"450px"}}>
            <Grid container><Typography variant = "h4" align = 'center' sx = {{ml:27.7}} >Вопрос {counter + " из " + PASSING_TEST.numberQuestions }</Typography></Grid>
            <PassingQuestion count = {counter} question = {questionStore.passQuestion} answers = {answerStore.answers}/>
            <Button variant="contained" color='secondary' onClick={handlerUserAnswer} sx = {{width:400,border:'#000000', height:50,ml:13,borderRadius: "15px"}}>Продолжить</Button>
          </Grid>
        </Grid>

      </div>
  );
}




export default observer(PassingTest);