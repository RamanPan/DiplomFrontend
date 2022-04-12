import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Autocomplete, Slider, TextField} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Button from "@mui/material/Button";
import {
    API_CREATE_QUESTION, API_CREATE_RESULT, API_DELETE_ANSWER, API_DELETE_RESULT,
    API_UPLOAD_QUESTION_PICTURE,
    API_UPLOAD_RESULT_PICTURE,
    questionTypes,
    types
} from "../utils/constans";
import Paper from "@mui/material/Paper";
import Answer, {ID_ANSWER, ID_ANSWERS} from "./Answer";
import DeleteIcon from "@mui/icons-material/Delete";
import {observer} from "mobx-react-lite";
import {deleteReq, postReq, postReqFile} from "../utils/apiCalls";
import {QUE_ID} from "./Question";
import {Input} from "../pages/Construct";

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
export var ID_RESULTS = [];
export var ID_RESULT;
const Result = (props) => {
    const [value, setValue] = React.useState([0, 100]);
    const [description,setDescription] = useState("");
    const [isPicture,setIsPicture] = useState(false);
    const [picture,setPicture] = useState(" ");
    const [header, setHeader] = useState("");
    const [switchBut,setSwitch] = useState(false)
    const [correctness,setCorrectness] = useState(false)
    const [resultState, setResultState] = useState({});
    const handleChange = (event) => {
        const {value} = event.target
        setValue(value);
    };
    const uploadHandler = (event) => {
        if(event !== undefined) {
            const data = new FormData();
            setPicture(event.target.files[0].name)
            data.append('file',event.target.files[0])
            postReqFile(API_UPLOAD_RESULT_PICTURE,data).then(response => {
                setIsPicture(true)
            }).catch(error => {
                if(error.status === 406) {
                    setIsPicture(true)
                }
            })
        }
    }
    const handleClickAddOrDeleteResult = () => {
        if (!switchBut) {
            let test = props.test_id;
            let startCondition = value[0];
            let endCondition = value[1];
            let obj = {
                header,
                description,
                picture,
                startCondition,
                endCondition,
                test,
                correctness
            };
            Object.assign(resultState, resultState, obj)
            console.log(resultState)
            setSwitch(true)
            postReq(API_CREATE_RESULT, resultState).then(response => {
                ID_RESULT = response
                setSwitch(true)
                ID_RESULTS[props.number - 1] = ID_RESULT
                })
        }
        else {
            console.log(ID_RESULTS)
            let id = ID_RESULTS[props.number - 1]
            deleteReq(API_DELETE_RESULT,id).then(response => {
                setSwitch(false)
            })
        }
    }

    const updateDescription = (event) => {
        const {value} = event.target;
        setDescription(value);
    }
    const updateHeader = (event) => {
        const {value} = event.target;
        setHeader(value)
    }
    const updateCorrectness = () =>{
        if(!correctness) setCorrectness(true);
        else setCorrectness(false);
    }
    return (
        <div>
            <Box
                sx={{
                    mt: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: '#F1DCC9',
                    borderRadius: 10,
                    width: 1200,
                    height: 600,
                }}
            > <Grid container sx={{ml: 2,mt: 2}}>
                <Grid sx = {{width:400,height:300,}} alignItems='flex-start'>
                    <Typography variant='h2' align='left'>
                        Результат {props.number}
                    </Typography>
                    {isPicture ? (
                            <label>
                                <Input accept="image/*" id="contained-button-file" name="file" onChange={uploadHandler} multiple type="file"/>
                                <Button component="span" sx={{backgroundColor: '#F1DCC9',maxWidth: 300, height:300, mt: 1,mr: 14,borderRadius: "15px",}}>
                                    <Box component="img" sx = {{width:320,height:300,borderRadius: "15px"}}
                                         src={"http://localhost:8081/images/results/" + picture}>
                                    </Box>
                                </Button>
                            </label>) :
                        (<label>
                            <Input accept="image/*" id="contained-button-file" name="file" onChange={uploadHandler} multiple
                                   type="file"/>
                            <Button component="span" sx={{backgroundColor: '#FFFFFF',width:300,height:300, mt: 1,mr: 14,borderRadius: "15px",}}>
                                <FileUploadIcon sx={{my:10,width:150,height:150}}/>
                            </Button></label>)
                    }
                </Grid>
                <Grid sx = {{width:800,minHeight:330}}>
                    <Grid container  sx = {{maxWidth:800}}>
                        <Typography  align='left' variant='h2'>
                            Заголовок результата
                        </Typography>
                        <Button sx = {{ml:53}}><DeleteIcon/></Button>
                    </Grid>
                    <TextField variant='outlined'  label = 'Введите заголовок' onChange={updateHeader} sx = {{backgroundColor: '#FFFFFF',mt: 1,mr:10, width:700, borderRadius: "8px",}}/>
                    <Typography  align='left' variant='h2'>
                        Описание результата
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="Введите описание"
                        onChange={updateDescription}
                        multiline
                        sx = {{backgroundColor: '#FFFFFF',mt: 1, width:700,mr:10, borderRadius: "8px",}}
                        rows={4}
                    />
                    <Typography  align='left' variant='h2'>
                        Процент правильных ответов для получения
                    </Typography>
                    <Slider sx = {{width: 700,mr:9,mt: 1,}}
                        getAriaLabel={() => 'Процент получения результата'}
                        value={value} marks={marks}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <Typography  align='left' variant='h2'>
                        Результат успешно заканчивает тест?
                        {correctness ? (<Button sx = {{ml:2,mb:0.9}} color = "success" onClick={updateCorrectness}><Typography sx = {{fontSize: 32}}>Да</Typography></Button> ) : (<Button sx = {{ml:2,mb:0.9}}  color = "error" onClick={updateCorrectness}><Typography sx = {{fontSize: 32}}>Нет</Typography></Button> )}
                    </Typography>
                    {switchBut ?
                        (<Button sx = {{mr:10,mt: 2,mb: 2,width:700,borderRadius: "8px"}} size='large' onClick={handleClickAddOrDeleteResult} variant="contained" color='primary'>Передумать </Button>) :
                        (<Button sx = {{mr:10,mt: 2,mb: 2,width:700,borderRadius: "8px"}} size='large' onClick={handleClickAddOrDeleteResult} variant="contained" color='primary'>Утвердить результат </Button>)}

                </Grid>
            </Grid>
            </Box>
        </div>
    );
};

export default observer(Result);
