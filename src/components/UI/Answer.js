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
export var ID_ANSWERS = []
export var ID_ANSWER;
const Answer = (props) => {
    const [correctness, setCorrectness] = useState(false);
    const [agree, setAgree] = useState(false);
    const [answerState] = useState({});
    const [statement, setStatement] = useState("");
    let question = props.id_quest;

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
                question
            };
            Object.assign(answerState, answerState, obj)
            console.log(answerState)
            postReq(API_CREATE_ANSWER, answerState).then(response => {
                ID_ANSWER = response

                setAgree(true)
                ID_ANSWERS[props.number - 1 + (props.id_num - 1) * 4 ] = ID_ANSWER
            })
        }
        else {
            let id = ID_ANSWERS[props.number - 1 + (props.id_num - 1) * 4 ]
            deleteReq(API_DELETE_ANSWER,id).then(response => {
                console.log(ID_ANSWERS)
                setAgree(false)
                console.log(agree)
            })

    }
    }

    return (
        <div>
            <Typography  sx = {{mt:1}} align='left' variant='h5'>
                Ответ {props.number}
            </Typography>
            <Grid container>
                <TextField variant='outlined' align='left' size = 'small'  onChange={updateStatement} label = 'Введите текст ответа' sx = {{backgroundColor: '#FFFFFF',mt: 0.5, minWidth:600, borderRadius: "8px",}}
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

export default observer(Answer);
