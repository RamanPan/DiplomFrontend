import React, {useEffect} from "react";
import {postReq} from "../utils/apiCalls";
import {API_CREATE_USERS_TEST} from "../utils/constans";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Avatar from "@mui/material/Avatar";
import {observer} from "mobx-react-lite";
import {AVATAR} from "./TestCard";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";
import {USER_ID} from "../pages/SingInSide";

export var ID_USER_TEST;
const ExtendedTestCard = (props) => {
    const navigate = useNavigate();
    useEffect(async () => {

    });
    const handleClick = () => {
        postReq(API_CREATE_USERS_TEST, {'user': USER_ID, 'test': props.test.id}).then(r => {
            ID_USER_TEST = r;
            navigate("/catalog/testPass");
        })
    };
    const getMark = () => {
        if (props.test.mark === 0) return "-";
        else return props.test.mark.toFixed(1);
    }


    return (
        <Card sx={{
            width: 600,
            maxHeight: 695,
            borderRadius: "15px",
            border: "10px",
            borderColor: "#9F4636",
            backgroundColor: "#F1DCC9"
        }}>
            <CardMedia
                component="img"
                height="360"
                image={"http://localhost:8081/images/tests/" + props.test.picture}
                sx={{objectFit: "cover",}}
            />
            <CardContent sx={{}}>
                <Typography variant="h4" color="another" align="center">
                    {props.test.name}
                </Typography>
                <Typography color="another" align="center">
                    {props.test.description}
                </Typography>
                <Grid container sx={{mt: 14, ml: "138px", display: 'flex', alignItems: 'flex-start',}}>
                    <StarIcon/> <Typography sx={{mr: 1, fontSize: 18}}>{getMark()} </Typography>
                    <QuestionMarkIcon/> <Typography
                    sx={{mr: 1, fontSize: 18}}>{props.test.numberQuestions} </Typography>
                    <CalendarMonthIcon/><Typography
                    sx={{mr: 1, fontSize: 18}}>{props.test.created.substring(0, 10)}</Typography>
                    <Avatar sx={{fontSize: 16, mr: 1, mt: -0.5}} src={"http://localhost:8081/images/users/" + AVATAR}/>
                    <Typography sx={{mr: 1, fontSize: 18}}>{props.test.author}</Typography>
                </Grid>
                <Button fullWidth sx={{borderRadius: "15px", mt: 0.5}} size="large" onClick={handleClick}
                        variant="contained">Начать</Button>
            </CardContent>

        </Card>
    );
}

export default observer(ExtendedTestCard);