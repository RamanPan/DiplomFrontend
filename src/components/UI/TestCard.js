import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardContent, CardMedia} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from '@mui/icons-material/Star';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Grid from "@mui/material/Grid";
import {observer} from "mobx-react-lite";
import {postReq} from "../utils/apiCalls";
import {API_GET_USER_PICTURE} from "../utils/constans";
import {useNavigate} from "react-router";
import Button from "@mui/material/Button";
import useStore from "../utils/useStore";
import {USER_ID} from "../pages/SingInSide";


export var PASSING_TEST;
export var AVATAR;
const TestCard = (props) => {
    const [avatar, setAvatar] = useState("default_avatar.png");
    const navigate = useNavigate();
    const {testsStore} = useStore();
    let picture;
    useEffect(async () => {
        let author = props.author
        picture = await postReq(API_GET_USER_PICTURE,{"author": author})
        setAvatar(picture["picture"]);

    });

    const handlerButtonTestCard = () => {
        testsStore.getTests({"id": props.id, "userId" : USER_ID}).then(r => {
            console.log(testsStore.passingTest.id)
            PASSING_TEST = testsStore.passingTest;
            AVATAR = avatar;
            navigate("/catalog/startTestPass")
        });

    }
    const getMark = () => {
        if(props.mark === 0) return "-";
        else return props.mark.toFixed(1);
    }

    return (
        <div>
            <Button onClick={handlerButtonTestCard} sx = {{mt:3,mr:2}}>
            <Card sx={{ width: 310, height: 450, borderRadius: "15px",border:"10px", borderColor:"#9F4636", backgroundColor: "#F1DCC9" }}>
            <CardMedia
                component="img"
                height="200"
                image={"http://localhost:8081/images/tests/" + props.picture}
                sx = {{objectFit: "cover",}}
            />
            <CardContent sx = {{alignItems: 'flex-start',minHeight:210}}>
                <Typography variant="h4" color="another" align="left">
                    {props.tittle}
                </Typography>
                <Typography variant="body2" color="another" align="left">
                    {props.description}
                </Typography>

            </CardContent>
                <Grid container sx = {{ml: 2, display: 'flex',alignItems: 'flex-start',}}>
                    <StarIcon /> {getMark()}
                    <QuestionMarkIcon /> {props.numberQuestions}
                    <Typography sx = {{ml:7,mr:1, fontSize:16,mt:0.4}}>{props.author}</Typography>
                    <Avatar sx = {{fontSize:14,mr:0.3,mt:-0.5}} src={"http://localhost:8081/images/users/" + avatar}/>
            </Grid>

        </Card>
            </Button>
        </div>
    );
}

export default observer(TestCard);
