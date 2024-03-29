import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Autocomplete, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {
    API_CREATE_QUESTION,
    API_DELETE_QUESTION,
    API_UPLOAD_QUESTION_PICTURE,
    questionCategories,
    questionDifficulties,
    questionTypes,
} from "../utils/constans";
import Paper from "@mui/material/Paper";
import Answer from "./Answer";
import DeleteIcon from '@mui/icons-material/Delete';
import './quest.css'
import {Input} from "../pages/Construct"
import {deleteReq, postReq, postReqFile} from "../utils/apiCalls";
import {observer} from "mobx-react-lite";
import useStore from "../utils/useStore";
import UpdateAnswer from "./UpdateAnswer";

export var ID_UPDATE_QUESTIONS = [];
const UpdateQuestion = (props) => {
    const {answerStore} = useStore();
    const [questionState] = useState({});
    const [type, setType] = useState(questionTypes[props.quest.typeNum]);
    const [category, setCategory] = useState(questionCategories[props.quest.categoryNum]);
    const [difficult, setDifficult] = useState(questionDifficulties[props.quest.difficultNum]);
    const [picture, setPicture] = useState(props.quest.picture);
    const [statement, setStatement] = useState(props.quest.statement);
    const [switchBut, setSwitch] = useState(true)
    const [isFirst, setIsFirst] = useState(true);
    const [answers, setAnswers] = useState([]);


    if (isFirst) {
        answerStore.birth(props.quest.id).then(() => {
            ID_UPDATE_QUESTIONS[props.quest.number - 1] = props.quest.id;
            setAnswers([
                answerStore.answers.map(data => (<UpdateAnswer answer={data} id_quest={props.quest.id}/>))
            ])
            setIsFirst(false);
        })
    }


    const handleClickAddOrDeleteQuestion = () => {
        if (!switchBut) {
            let testLong = props.test_id;
            let obj = {
                statement,
                picture,
                type,
                category,
                difficult,
                testLong
            };
            Object.assign(questionState, questionState, obj)
            postReq(API_CREATE_QUESTION, questionState).then(response => {
                ID_UPDATE_QUESTIONS[props.quest.number - 1] = response;
                setSwitch(true)
                handleShowAnswer()
            })
        } else {
            let id = ID_UPDATE_QUESTIONS[props.quest.number - 1]
            deleteReq(API_DELETE_QUESTION, id).then(() => {
                setSwitch(false)
            })
        }
    }
    const handleShowAnswer = () => {
        if (type === questionTypes[1]) {
            setAnswers([
                <Answer number={1} sx={{mb: 2}} id_quest={ID_UPDATE_QUESTIONS[props.quest.number - 1]}
                        id_num={props.number}/>
            ])
        } else {
            setAnswers([
                <Answer number={1} id_quest={ID_UPDATE_QUESTIONS[props.quest.number - 1]} id_num={0}/>,
                <Answer number={2} id_quest={ID_UPDATE_QUESTIONS[props.quest.number - 1]} id_num={0}/>,
                <Answer number={3} id_quest={ID_UPDATE_QUESTIONS[props.quest.number - 1]} id_num={0}/>,
                <Answer number={4} id_quest={ID_UPDATE_QUESTIONS[props.quest.number - 1]} id_num={0} sx={{mb: 2}}/>
            ])
        }
    }
    const uploadHandler = (event) => {
        if (event !== undefined) {
            const data = new FormData();
            setPicture(event.target.files[0].name)
            data.append('file', event.target.files[0])
            postReqFile(API_UPLOAD_QUESTION_PICTURE, data).catch(() => {
            })
        }
    }

    const updateStatement = (event) => {
        const {value} = event.target;
        setStatement(value);
    }

    return (
        <Box className='question'
             sx={{
                 mt: 3,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'flex-start',
                 backgroundColor: '#F1DCC9',
                 borderRadius: 10,
                 width: 1200,
                 minHeight: 500,
                 height: 'auto!important'
             }}
        > <Grid container sx={{ml: 2, mt: 2}}>
            <Grid sx={{width: 400, minHeight: 300,}} alignItems='flex-start'>
                <Typography variant='h2' align='left'>
                    Вопрос {props.quest.number}
                </Typography>
                <label>
                    <Input accept="image/*" id="contained-button-file" name="file" onChange={uploadHandler} multiple
                           type="file"/>
                    <Button component="span" sx={{
                        backgroundColor: '#F1DCC9',
                        maxWidth: 300,
                        height: 300,
                        mt: 1,
                        mr: 14,
                        borderRadius: "15px",
                    }}>
                        <Box component="img" sx={{width: 320, height: 300, borderRadius: "15px", objectFit: "cover",}}
                             src={"http://localhost:8081/images/questions/" + picture}>
                        </Box>
                    </Button>
                </label>
            </Grid>
            <Grid sx={{maxWidth: 800, minHeight: 300,}}>
                <Grid container sx={{maxWidth: 800}}>
                    <Typography align='left' variant='h2'>
                        Текст вопроса
                    </Typography>
                    <Button sx={{ml: 65}}><DeleteIcon/></Button>
                </Grid>
                <TextField variant='outlined' name="statement" defaultValue={props.quest.statement}
                           onChange={updateStatement} label='Введите текст вопроса(до 200 символов)'
                           sx={{backgroundColor: '#FFFFFF', mt: 1, mr: 10, width: 700, borderRadius: "8px",}}/>
                <Autocomplete sx={{mt: 1}} size="medium"
                              style={{backgroundColor: '#FFFFFF', width: 700, borderRadius: 6.5}}
                              options={questionTypes}
                              value={type}
                              PaperComponent={({children}) => (
                                  <Paper style={{background: '#FFFFFF'}}>{children}</Paper>
                              )}
                              onChange={(event, newValue) => {
                                  setType(newValue);
                                  console.log(newValue)
                              }}
                              renderInput={(params) => <TextField {...params} label="Выберите тип вопроса"/>}
                />
                <Autocomplete sx={{mt: 1}} size="medium"
                              style={{backgroundColor: '#FFFFFF', width: 700, borderRadius: 6.5}}
                              options={questionCategories}
                              value={category}
                              PaperComponent={({children}) => (
                                  <Paper style={{background: '#FFFFFF'}}>{children}</Paper>
                              )}
                              onChange={(event, newValue) => {
                                  setCategory(newValue);
                                  console.log(newValue)
                              }}
                              renderInput={(params) => <TextField {...params} label="Выберите категорию вопроса"/>}
                />
                <Autocomplete sx={{mt: 1}} size="medium"
                              style={{backgroundColor: '#FFFFFF', width: 700, borderRadius: 6.5}}
                              options={questionDifficulties}
                              value={difficult}
                              PaperComponent={({children}) => (
                                  <Paper style={{background: '#FFFFFF'}}>{children}</Paper>
                              )}
                              onChange={(event, newValue) => {
                                  setDifficult(newValue);
                                  console.log(newValue)
                              }}
                              renderInput={(params) => <TextField {...params} label="Выберите сложность вопроса"/>}
                />
                {switchBut ? (answers.map(answer => {
                    return answer
                })) : (<div/>)}
                {switchBut ? (
                        <Button sx={{mr: 10, mt: 2, mb: 2, width: 700, color: '#ffd700', borderRadius: "8px"}} size='large'
                                onClick={handleClickAddOrDeleteQuestion} variant="contained"
                                color='primary'>Передумать </Button>) :
                    (<Button sx={{mr: 10, mt: 2, mb: 2, width: 700, borderRadius: "8px"}} size='large'
                             onClick={handleClickAddOrDeleteQuestion} variant="contained" color='primary'>Утвердить
                        вопрос </Button>)}
            </Grid>
        </Grid>
        </Box>
    );
};

export default observer(UpdateQuestion);