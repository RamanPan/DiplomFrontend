import React, {useEffect, useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {API_CREATE_TEST, API_UPLOAD_TEST_PICTURE, deterministicOptions, types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {postReq, postReqFile} from "../utils/apiCalls";
import {useNavigate} from "react-router";
import {observer} from "mobx-react-lite";
import { styled } from '@mui/material/styles';
import useStore from "../utils/useStore";
import { NICKNAME} from "./SingInSide";
import "./css/Construct.css"
export const Input = styled('input')({
    display: 'none',
});
export var TEST_ID = 0;
const Construct = () => {
    const [testType,setType] = useState(types[0]);
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [picture, setPicture] = useState("");
    const [isPicture,setIsPicture] = useState(false);
    const {usersStore} = useStore();
    const [isCreate,setIsCreate] = useState(false);
    const [isDeterministic, setIsDeterministic] = useState(false);
    const [optionForDeterministicType, setOption] = useState(deterministicOptions[0]);
    const navigate = useNavigate()

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

    const updateName = (event) => {
      const {value} = event.target;
      setName(value);
    }
    const updateDesc = (event) => {
        const {value} = event.target;
        setDesc(value);
    }

    const handleSubmit = () => {
            postReq(API_CREATE_TEST, {
                "name" : name,
                "description" : desc,
                "author": NICKNAME,
                "optionForDeterministicType" : optionForDeterministicType,
                "testType" : testType,
                "picture" : picture
            }).then(response => {
                usersStore.needUser({"id": usersStore.me.id}).then()
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
                      justifyContent:'center',
                      justifyItems:'center',
                      maxWidth:"1920px",
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                        display: 'inline-block'}}>
                <Box
                    sx={{
                        my: 8,
                        justifyContent:'center',
                        mx: 16,
                        display: 'flex',
                        alignItems: 'flex-start',
                        borderRadius: "15px",
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
                                if(newValue === "Детерминированный") setIsDeterministic(true);
                            }}
                            renderInput={(params) => <TextField {...params} label="Выберите тип теста" />}
                        />
                    {isDeterministic ?
                        (<div><Typography align = "left" variant="h2" sx={{mt: 2, mb: 2 }}>Опция сортировки</Typography>
                        <Autocomplete
                        sx={{color: "#F1DCC9", minWidth: 400}}
                        name = "option"
                        value={optionForDeterministicType}
                        options={deterministicOptions}
                        color="secondary"
                        onChange={(event,newValue) => {
                            setOption(newValue);
                    }}
                        renderInput={(params) => <TextField {...params} label="Выберите опцию" />}
                        />
                        </div>) : (<div/>)
                    }
                        <Typography variant="h2" sx={{mt: 2}}>Название</Typography>
                        <TextField
                        margin="normal"
                        required
                        onChange={updateName}
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
                        onChange={updateDesc}
                        sx={{minWidth: 400}}
                        rows={4}
                    />

                    <Grid container sx={{width:300}}>
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Обложка</Typography>
                        {isPicture ? (<label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" name = "file" onChange={uploadHandler} multiple type="file" />
                                <Button component="span" sx={{width:300,height:300,borderRadius: "15px",mr: 30}}>
                                   <Box component="img" sx = {{width:315,height:305,objectFit: "cover",borderRadius: "15px"}}
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
