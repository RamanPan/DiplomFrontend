import React from 'react';
import Typography from "@mui/material/Typography";
import {Card,  CardContent, CardMedia} from "@mui/material";
import Grid from "@mui/material/Grid";
import {observer} from "mobx-react-lite";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const UserAnswerCard = (props) => {

    return (
        <div>
            <Card sx={{ mt:3,mr:5,width: 370, minHeight: 370, borderRadius: "15px",border:"10px", borderColor:"#9F4636", backgroundColor: "#F1DCC9" }}>

                <CardMedia
                    component="img"
                    height="170"
                    image={"http://localhost:8081/images/questions/" + props.answer.picture}
                />
                <CardContent sx = {{alignItems: 'flex-start',}}>
                    <Typography variant="h4" color="another" align="left">
                        {props.answer.statement}
                    </Typography>
                    <Grid container sx = {{minHeight: 110}}>
                    <Typography sx = {{fontSize:20}} color="another" align="left">
                        {"Ваш ответ: " + props.answer.answer + " "}
                    </Typography>
                    <Grid container>
                        {props.answer.rightAnswer.map(data => (<Typography sx = {{fontSize:20}} align = "left">{"Верный ответ: "+ data}</Typography>))}
                    </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        {props.answer.correctness ? (<CheckIcon sx = {{fontSize:60,color:"#203a27"}}/>) : (<CloseIcon sx = {{fontSize:60,color:"#490005"}}/>)

                        }
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default observer(UserAnswerCard);