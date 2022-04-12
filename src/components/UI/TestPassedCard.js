import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";



const TestPassedCard = (props) => {

    const handlerButtonTestCard = () => {
        // testsStore.getTests({"id": props.id}).then(r => {
        //     console.log(testsStore.passingTest.id)
        //     PASSING_TEST = testsStore.passingTest;
        //     AVATAR = avatar;
        //     navigate("/catalog/startTestPass")
        // });

    }
    return (
        <div>
            {/*<Button onClick={handlerButtonTestCard} sx = {{mt:2}}>*/}
                <Card sx={{ width: 300, height: 330, borderRadius: "15px",border:"10px", borderColor:"#9F4636", backgroundColor: "#F1DCC9" }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={"http://localhost:8081/images/results/" + props.testResult.picture}
                    />
                    <CardContent sx = {{alignItems: 'flex-start',}}>
                        <Typography variant="h4" color="another" align="left">
                            {props.testResult.header + "(" + props.testResult.result + "%)"}
                        </Typography>
                        <Typography variant="body2" color="another" align="left">
                            {props.testResult.description}
                        </Typography>
                        <Typography variant="body2" color="another" align="left">
                            {"Тест: " + props.testResult.name}
                        </Typography>
                    </CardContent>


                </Card>
            {/*</Button>*/}
        </div>
    );
}

export default observer(TestPassedCard);