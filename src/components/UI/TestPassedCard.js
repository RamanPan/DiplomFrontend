import React from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardContent, CardMedia} from "@mui/material";
import {observer} from "mobx-react-lite";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";



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
                <Card sx={{ mt:4,ml:5.3,width: 250, minHeight: 330, borderRadius: "15px",border:"10px", borderColor:"#9F4636", backgroundColor: "#F1DCC9" }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={"http://localhost:8081/images/results/" + props.testResult.picture}
                        sx = {{objectFit: "cover",}}
                    />
                    <CardContent sx = {{alignItems: 'flex-start',minHeight: 150,}}>
                        <Typography variant="h4" color="another" align="left">
                            {props.testResult.header + "(" + props.testResult.result.toFixed(1) + "%)"}
                        </Typography>
                        <Typography variant="body2" color="another" align="left">
                            {props.testResult.description}
                        </Typography>
                        <Typography variant="body2" color="another" align="left">
                            {"Тест: " + props.testResult.name}
                        </Typography>
                        <Grid container justifyContent="center" sx = {{mt:2}}>
                            {props.testResult.correctness ? (<CheckIcon sx = {{fontSize:60,color:"#203a27"}}/>) : (<CloseIcon sx = {{fontSize:60,color:"#490005"}}/>)

                            }
                        </Grid>
                    </CardContent>


                </Card>
            {/*</Button>*/}
        </div>
    );
}

export default observer(TestPassedCard);