import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ID_USER_TEST} from "../UI/ExtendedTestCard";
import {PASSING_TEST} from "../UI/TestCard";
import React, {useState} from "react";
import NavigationThenPassingTest from "../UI/NavigationThenPassingTest";
import {USER_ID} from "./SingInSide";
import useStore from "../utils/useStore";
import {useNavigate} from "react-router";
import {postReq} from "../utils/apiCalls";
import {API_GET_USERS_ANSWER, API_SET_USER_TEST_PASSED} from "../utils/constans";
import PassingQuestion from "../UI/PassingQuestion";
import Typography from "@mui/material/Typography";
import {BOO} from "./BeforeTestPass";


export var RESULT_TEST;
export var USER_ANSWERS_ON_TEST = [];
const PassingTest = () => {
    const [counter, setCounter] = useState(1);
    const {questionStore, answerStore, userAnswersStore} = useStore();
    const [isOpen, setIsOpen] = useState(BOO);
    const navigate = useNavigate();

    const handlerUserAnswer = () => {
        const doc1 = document.getElementById("first")
        const doc2 = document.getElementById("second")
        const doc3 = document.getElementById("third")
        const doc4 = document.getElementById("fourth")
        const formInp = document.getElementById("answer");
        if (doc1 != null) doc1.style.backgroundColor = "#000000";
        if (doc2 != null) doc2.style.backgroundColor = "#000000";
        if (doc3 != null) doc3.style.backgroundColor = "#000000";
        if (doc4 != null) doc4.style.backgroundColor = "#000000";
        if (formInp != null) formInp.value = "";
        if (counter === PASSING_TEST.numberQuestions) {
            postReq(API_SET_USER_TEST_PASSED, {
                'user': USER_ID,
                'userTest': ID_USER_TEST,
                'test': PASSING_TEST.id
            }).then(r => {
                RESULT_TEST = r;
                postReq(API_GET_USERS_ANSWER, {'user': USER_ID, 'userTest': ID_USER_TEST}).then(
                    r => {
                        USER_ANSWERS_ON_TEST = r;
                        navigate("/catalog/endTestPass")
                    }
                )
            })
        } else {
            questionStore.birth({"id": counter, "idUserAnswer": userAnswersStore.id}).then(() => {
                if (questionStore.passQuestion.type === "OPEN") setIsOpen(true)
                else setIsOpen(false)
                answerStore.birth(questionStore.passQuestion.id).then(() => {
                    setCounter((prevState) => {
                        return (prevState + 1)
                    })
                })
            })
        }
    }

    return (
        <div>
            <NavigationThenPassingTest name={PASSING_TEST.name}/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      justifyContent: 'center',
                      justifyItems: 'center',
                      maxWidth: "1920px",
                      backgroundPosition: 'center',
                      display: 'inline-block'
                  }}>
                <Grid container sx={{mt: "20px", display: 'flex', justifyContent: 'center'}}>
                    <Grid container sx={{justifyContent: 'center'}}><Typography variant="h4"
                                                                                sx={{}}>Вопрос {counter + " из " + PASSING_TEST.numberQuestions}</Typography></Grid>
                    <PassingQuestion count={counter} question={questionStore.passQuestion} answers={answerStore.answers}
                                     isOpen={isOpen}/>
                    <Grid container sx={{justifyContent: 'center',}}><Button variant="contained" color='secondary'
                                                                             onClick={handlerUserAnswer} sx={{
                        border: '#000000',
                        mt: 1.5,
                        width: 400,
                        height: 50,
                        borderRadius: "15px"
                    }}>Продолжить</Button></Grid>
                </Grid>
            </Grid>

        </div>
    );
}


export default observer(PassingTest);