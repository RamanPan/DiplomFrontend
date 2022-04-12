import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Image from "../../resources/fon.jpeg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {API_CREATE_TEST, API_REGISTER, API_UPLOAD_TEST_PICTURE, roles, types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete, FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {postReq, postReqFile} from "../utils/apiCalls";
import {useNavigate} from "react-router";
import {observer} from "mobx-react-lite";
import { styled } from '@mui/material/styles';
import useStore from "../utils/useStore";
import {ACCESS_TOKEN, NICKNAME} from "./SingInSide";
import "./css/Construct.css"
export const Input = styled('input')({
    display: 'none',
});
export var TEST_ID = 0;
const Construct = () => {
    const [constructState,setConstructState] = useState({});
    const [testType,setType] = useState(types[0]);
    const [picture, setPicture] = useState("");
    const [isPicture,setIsPicture] = useState(false);
    const [author,setAuthor] = useState("");
    const {usersStore} = useStore();
    const [isCreate,setIsCreate] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        if(NICKNAME === undefined) navigate("/login")

    });

    const updateConstructState = (event) => {
        const {value, name} = event.target;
        if(author === "") setAuthor(usersStore.me.nickname)
        setConstructState(prevConstructState => ({
            ...prevConstructState,
            testType,
            author,
            picture,
            [name]: value,
        }));
    };
    const uploadHandler = (event) => {
        if(event !== undefined) {
        const data = new FormData();
        setPicture(event.target.files[0].name)
        data.append('file',event.target.files[0])
        postReqFile(API_UPLOAD_TEST_PICTURE,data).catch(error => {
            if(error.status === 406) {
                setIsPicture(true)
            }
        })
        }
    }

    const handleSubmit = () => {
        console.log(constructState)
            postReq(API_CREATE_TEST, constructState).then(response => {

                TEST_ID = response
                console.log(TEST_ID)
                setIsCreate(true)
            })
    };
    if(isCreate) {
        navigate("/construct/addQuestions");
    }

    return (
        <div>
            <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      maxWidth: '500vh',
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                        display: 'inline-block'}}>
                <Box
                    sx={{
                        my: 8,
                        background: "transparent",
                        mx: 16,
                        display: 'flex',
                        alignItems: 'flex-start',
                        borderRadius: "15px",
                        maxWidth: '200vh',
                        maxHeight: '150vh',
                        flexDirection: 'column',
                        '& button': { marginRight: 'auto', marginLeft: 'auto'}
                    }}
                >
                    <Typography  variant="h1" sx={{ mb: 2 }}>
                        СОЗДАНИЕ ТЕСТА
                    </Typography>
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Тип</Typography>
                        <Autocomplete
                            sx={{color: "#F1DCC9", minWidth: 400}}
                            id="combo-box-types"
                            name = "testType"
                            value={testType}
                            options={types}
                            color="secondary"
                            onChange={(event,newValue) => {
                                setType(newValue);
                                console.log(newValue)
                            }}
                            renderInput={(params) => <TextField {...params} label="Выберите тип теста" />}
                        />
                        <Typography variant="h2" sx={{mt: 2}}>Название</Typography>
                        <TextField
                        margin="normal"
                        required
                        onChange={updateConstructState}
                        label="Введите название"
                        name="name"
                        sx={{minWidth: 400}}
                        />
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Описание</Typography>
                        <TextField
                        id="outlined-multiline-static"
                        label="Введите описание"
                        name="description"
                        multiline
                        onChange={updateConstructState}
                        sx={{minWidth: 400}}
                        rows={4}
                    />

                    <Grid container sx={{width:300}}>
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Обложка</Typography>
                        {isPicture ? (<label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" name = "file" onChange={uploadHandler} multiple type="file" />
                                <Button component="span" sx={{width:300,height:300,borderRadius: "15px",mr: 30}}>
                                   <Box component="img" sx = {{width:315,height:305,borderRadius: "15px"}}
                                        src={"http://localhost:8081/images/tests/" + picture}/>
                                </Button>
                            </label>) :
                            (<label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" name = "file" onChange={uploadHandler} multiple type="file" />
                        <Button component="span" sx={{width:300,height:300,borderRadius: "15px",mr: 30}} >
                            <FileUploadIcon sx={{width:150,height:150}}/>
                            </Button>
                        </label>)}
                    </Grid>
                        <Button variant="contained" onClick={handleSubmit} color="primary" size="large">Далее </Button>
                </Box>
            </Grid>
        </div>
    );
};

export default observer(Construct);
