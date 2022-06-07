import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CropSquareTwoToneIcon from '@mui/icons-material/CropSquareTwoTone';
import GavelIcon from '@mui/icons-material/Gavel';
import SquareIcon from '@mui/icons-material/Square';
import {observer} from "mobx-react-lite";
import {deleteReq, postReq} from "../utils/apiCalls";
import {API_CREATE_ANSWER, API_DELETE_ANSWER} from "../utils/constans";

const UpdateAnswer = (props) => {
    const [correctness, setCorrectness] = useState(props.answer.correctness);
    const [agree, setAgree] = useState(true);
    const [answerState] = useState({});
    const [statement, setStatement] = useState(props.answer.statement);
    let questionLong = props.id_quest;
    let id = props.answer.id;
    const changeCorrectness = () => {
        setCorrectness(!correctness)
    }
    const updateStatement = (event) => {
        const {value} = event.target;
        setStatement(value);
    }
    const handleGavel= () => {
        if(!agree) {
            let obj = {
                correctness,
                statement,
                questionLong
            };
            Object.assign(answerState, answerState, obj)
            console.log(answerState)
            postReq(API_CREATE_ANSWER, answerState).then(response => {
                id = response
                setAgree(true)
            })
        }
        else {
            deleteReq(API_DELETE_ANSWER,{"id":id}).then(response => {
                setAgree(false)
            })

        }
    }

    return (
        <div>
            <Typography  sx = {{mt:1}} align='left' variant='h5'>
                Ответ {props.answer.number}
            </Typography>
            <Grid container>
                <TextField variant='outlined' defaultValue={props.answer.statement} align='left' size = 'small'  onChange={updateStatement} label = 'Введите текст ответа(до 100 символов)' sx = {{backgroundColor: '#FFFFFF',mt: 0.5, minWidth:600, borderRadius: "8px",}}
                />
                {agree ? (<IconButton onClick={handleGavel}>
                    <GavelIcon color = 'accept' id = 'gavel' sx = {{fontSize: 31}}/>
                </IconButton>) : (<IconButton onClick={handleGavel}>
                    <GavelIcon color = 'primary' id = 'gavel' sx = {{fontSize: 31}}/>
                </IconButton>) }
                {correctness ? (<IconButton>
                        <SquareIcon color = 'primary' onClick={changeCorrectness} sx = {{fontSize: 31}}/>
                    </IconButton>)
                    :(<IconButton>
                        <CropSquareTwoToneIcon color = 'primary' onClick={changeCorrectness} sx = {{fontSize: 31}}/>
                    </IconButton>)}
            </Grid>
        </div>
    );
};

export default observer(UpdateAnswer);
