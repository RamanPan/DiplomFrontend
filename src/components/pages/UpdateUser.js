import Navigation from "../UI/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {API_SET_USER_EMAIL, API_SET_USER_FULLNAME,
    API_SET_USER_LOGIN, API_SET_USER_PASSWORD, API_SET_USER_PICTURE,
    API_UPLOAD_USER_PICTURE,
} from "../utils/constans";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {Input} from "./Construct";
import {useNavigate} from "react-router";
import {postReq, postReqFile} from "../utils/apiCalls";
import {observer} from "mobx-react-lite";
import Avatar from "@mui/material/Avatar";
import {NICKNAME, PASSWORD} from "./SingInSide";
import useStore from "../utils/useStore";

export var PICTURE_UPDATE = " "
const UpdateUser = () => {
    const [loginState, setLoginState] = useState();
    const [emailState, setEmailState] = useState();
    const [fullnameState, setFullnameState] = useState();
    const [passwordState, setPasswordState] = useState();
    const [pictureState,setPictureState] = useState({});
    const [login,setLogin] = useState({});
    const [isPicture,setIsPicture] = useState(false);
    const {usersStore} = useStore();
    let id = usersStore.me.id
    let picture;
    const navigate = useNavigate()
    useEffect(() => {
        if(NICKNAME === undefined) navigate("/login")


    });
    const handleLogin = () => {
        console.log(loginState)
        NICKNAME  = postReq(API_SET_USER_LOGIN,loginState)

    }
    const uploadLogin = (event) => {
        const {value, name} = event.target;
        setLoginState(prevState => ({
            ...prevState,
            id,
            [name]: value,
        }));
    }
    const handleEmail = () => {
        console.log(emailState)
        postReq(API_SET_USER_EMAIL,emailState).then()
    }
    const uploadEmail = (event) => {
        const {value, name} = event.target;
        setEmailState(prevState => ({
            ...prevState,
            id,
            [name]: value,
        }));
    }
    const handleFullname = () => {
        console.log(fullnameState)
        postReq(API_SET_USER_FULLNAME,fullnameState).then()
    }
    const uploadFullname = (event) => {
        const {value, name} = event.target;
        setFullnameState(prevState => ({
            ...prevState,
            id,
            [name]: value,
        }));
    }
    const handlePassword = () => {
        console.log(passwordState)
        PASSWORD = passwordState["password"]
        postReq(API_SET_USER_PASSWORD, passwordState).then()
    }
    const uploadPassword = (event) => {
        const {value, name} = event.target;
        setPasswordState(prevState => ({
            ...prevState,
            id,
            [name]: value,
        }));
    }

    const uploadHandler = async (event) => {
        if(event !== undefined) {
            const data = new FormData();
            PICTURE_UPDATE = event.target.files[0].name;
            picture = PICTURE_UPDATE;
            let obj = {
                id,
                picture
            }
            Object.assign(pictureState, pictureState, obj)
            console.log(pictureState)
            data.append('file',event.target.files[0])
            postReqFile(API_UPLOAD_USER_PICTURE,data).catch(error => {
                if(error.status === 406) {
                    PICTURE_UPDATE = picture
                    setIsPicture(true)
                }
            })
            await postReq(API_SET_USER_PICTURE,pictureState)
        }
    }
    const handleSubmit = async () => {
        let obj = {
            id,
            NICKNAME
        }
        Object.assign(login, login, obj)
        console.log(login)
        usersStore.needUser(login).then(r => {
            console.log(usersStore.me)
            navigate("/lk")
        })
    }
    return (
        <div>
            <Navigation/>
            <Grid  component="main"
                   style={{}}
                   sx={{
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',}}>
                <Grid container
                      sx={{
                          my: 8,
                          mx: 16,
                          display: 'flex',
                          alignItems: 'flex-start',
                          width:1278,
                      }}
                >
                    <Typography component="h1" variant="h1" sx = {{}}>
                        РЕДАКТИРОВАНИЕ ПРОФИЛЯ
                    </Typography>
                    <Grid container sx = {{mt:4,width:1278}}>
                        {isPicture ? (
                            <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" name = "file" onChange={uploadHandler} multiple type="file" />
                            <Button component="span" sx={{width:400,height:420,backgroundColor:'#FFFFFF',borderRadius: "15px"}}>
                                <Avatar sx = {{height:400,width:400}} src={"http://localhost:8081/images/users/" + PICTURE_UPDATE} />
                            </Button>
                            </label>) : (
                                <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" name = "file" onChange={uploadHandler} multiple type="file" />
                            <Button component="span" sx={{width:400,height:400,backgroundColor:'#FFFFFF',borderRadius: "15px"}} >
                                <Avatar sx = {{height:400,width:400}} src="http://localhost:8081/images/users/default_avatar.png" />
                            </Button>
                        </label>)}
                        <Grid container sx = {{width:878}}>
                            <Grid sx = {{ml:6,width:820,minHeight:500,backgroundColor:'#F1DCC9',alignItems:'flex-start',borderRadius: "15px"}}>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Изменить логин</Typography>
                                <Grid container sx = {{ml:2}}> <TextField
                                    label="Введите логин"
                                    name="login"
                                    onChange={uploadLogin}
                                    sx={{width: 650}}
                                /> <Button sx = {{ml:2, borderRadius: "8px"}} onClick={handleLogin} variant="contained" color='primary'>Изменить</Button></Grid>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Изменить ФИО</Typography>
                                <Grid container sx = {{ml:2}}> <TextField
                                    label="Введите ФИО"
                                    name="fullname"
                                    onChange={uploadFullname}
                                    sx={{width: 650}}
                                /> <Button sx = {{ml:2, borderRadius: "8px"}} onClick={handleFullname} variant="contained" color='primary'>Изменить</Button></Grid>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2}}>Изменить Email</Typography>
                                <Grid container sx = {{ml:2}}> <TextField
                                    label="Введите email"
                                    name="email"
                                    onChange={uploadEmail}
                                    sx={{width: 650}}
                                /> <Button sx = {{ml:2, borderRadius: "8px"}} onClick={handleEmail} variant="contained" color='primary'>Изменить</Button></Grid>
                                <Typography align='left' variant='h4' sx = {{color: '#9F4636',ml:2,mt: 2,}}>Изменить пароль</Typography>
                                <Grid container sx = {{ml:2}}> <TextField
                                    label="Введите пароль"
                                    name="password"
                                    type="password"
                                    onChange={uploadPassword}
                                    sx={{width: 650}}
                                /> <Button sx = {{ml:2, borderRadius: "8px"}} onClick={handlePassword} variant="contained" color='primary'>Изменить</Button></Grid>
                            </Grid>
                            <Grid sx = {{ml:6,mt:1,width:824,height:75,borderRadius: "15px"}}>
                                <Button sx = {{borderRadius: "8px"}}  size='large' onClick={handleSubmit} variant="contained" color='primary'><Typography >Вернуться</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default observer(UpdateUser);