import React, {useState} from 'react';
import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {API_UPDATE_TEST, API_UPLOAD_TEST_PICTURE, deterministicOptions, typesConstruct} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete} from "@mui/material";
import {postReq, postReqFile} from "../utils/apiCalls";
import {useNavigate} from "react-router";
import {observer} from "mobx-react-lite";
import {NICKNAME} from "./SingInSide";
import {Input} from "./Construct";
import useStore from "../utils/useStore";

const UpdateTest = () => {
    const {testsStore, questionStore} = useStore();
    const navigate = useNavigate()
    const [testType, setType] = useState(typesConstruct[testsStore.passingTest.testTypeNum]);
    const [isDeterministic, setIsDeterministic] = useState(testsStore.passingTest.isDeterministic);
    const [optionForDeterministicType, setOption] = useState(deterministicOptions[testsStore.passingTest.optionNum]);
    const [name, setName] = useState(testsStore.passingTest.name);
    const [desc, setDesc] = useState(testsStore.passingTest.description);
    const [picture, setPicture] = useState(testsStore.passingTest.picture);

    const uploadHandler = (event) => {
        if (event !== undefined) {
            const data = new FormData();
            setPicture(event.target.files[0].name)
            data.append('file', event.target.files[0])
            postReqFile(API_UPLOAD_TEST_PICTURE, data).catch(error => {
                if (error.status === 406) {
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
    const handleSubmitEnd = () => {
        postReq(API_UPDATE_TEST, {
            "id": testsStore.passingTest.id,
            "name": name,
            "description": desc,
            "author": NICKNAME,
            "optionForDeterministicType": optionForDeterministicType,
            "testType": testType,
            "picture": picture
        }).then(() => {
            navigate("/lk")
        })
    }

    const handleSubmit = () => {
        postReq(API_UPDATE_TEST, {
            "id": testsStore.passingTest.id,
            "name": name,
            "description": desc,
            "author": NICKNAME,
            "optionForDeterministicType": optionForDeterministicType,
            "testType": testType,
            "picture": picture
        }).then(() => {
            questionStore.getQuestions({"id": testsStore.passingTest.id}).then(() => {
                navigate("/construct/updateQuestions");
            });
        })
    };


    return (
        <div>
            <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      justifyContent: 'center',
                      justifyItems: 'center',
                      maxWidth: "1920px",
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                      display: 'inline-block'
                  }}>
                <Box
                    sx={{
                        my: 8,
                        justifyContent: 'center',
                        mx: 16,
                        display: 'flex',
                        alignItems: 'flex-start',
                        borderRadius: "15px",
                        flexDirection: 'column',
                        '& button': {marginRight: 'auto', marginLeft: 'auto'}
                    }}
                >
                    <Typography variant="h1" sx={{mb: 2}}>
                        РЕДАКТИРОВАНИЕ ТЕСТА
                    </Typography>
                    <Typography variant="h2" sx={{mt: 2, mb: 2}}>Тип</Typography>
                    <Autocomplete
                        sx={{color: "#F1DCC9", minWidth: 400}}
                        id="combo-box-types"
                        name="testType"
                        value={testType}
                        options={typesConstruct}
                        color="secondary"
                        onChange={(event, newValue) => {
                            setType(newValue);
                            if (newValue === "Детерминированный") setIsDeterministic(true);
                        }}
                        renderInput={(params) => <TextField {...params} label="Выберите тип теста"/>}
                    />
                    {isDeterministic ?
                        (<div><Typography align="left" variant="h2" sx={{mt: 2, mb: 2}}>Опция сортировки</Typography>
                            <Autocomplete
                                sx={{color: "#F1DCC9", minWidth: 400}}
                                name="option"
                                value={optionForDeterministicType}
                                options={deterministicOptions}
                                color="secondary"
                                onChange={(event, newValue) => {
                                    setOption(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} label="Выберите опцию"/>}
                            />
                        </div>) : (<div/>)
                    }
                    <Typography variant="h2" sx={{mt: 2}}>Название</Typography>
                    <TextField
                        defaultValue={testsStore.passingTest.name}
                        margin="normal"
                        required
                        onChange={updateName}
                        label="Введите название"
                        name="name"
                        sx={{minWidth: 400}}
                    />
                    <Typography variant="h2" sx={{mt: 2, mb: 2}}>Описание</Typography>
                    <TextField
                        defaultValue={testsStore.passingTest.description}
                        id="outlined-multiline-static"
                        label="Введите описание"
                        name="description"
                        multiline
                        onChange={updateDesc}
                        sx={{minWidth: 400}}
                        rows={4}
                    />

                    <Grid container sx={{width: 300}}>
                        <Typography variant="h2" sx={{mt: 2, mb: 2}}>Обложка</Typography>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" name="file" onChange={uploadHandler}
                                   multiple type="file"/>
                            <Button component="span" sx={{width: 495, height: 440, borderRadius: "15px", mr: 30}}>
                                <Box component="img"
                                     sx={{width: 500, height: 450, objectFit: "cover", borderRadius: "15px"}}
                                     src={"http://localhost:8081/images/tests/" + picture}/>
                            </Button>
                        </label>
                    </Grid>
                    <Grid container sx={{mt: 4, width: 1200,}}>
                        <Button variant="contained" onClick={handleSubmitEnd} sx={{borderRadius: "10px"}}
                                color="primary" size="large">Закончить редактирование</Button>
                        <Button variant="contained" onClick={handleSubmit} sx={{borderRadius: "10px"}} color="primary"
                                size="large">Далее </Button>

                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default observer(UpdateTest);