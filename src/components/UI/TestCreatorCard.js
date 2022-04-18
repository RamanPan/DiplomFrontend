import Button from "@mui/material/Button";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const TestCreatorCard = (props) => {
    return (
        <div>
            <Button sx = {{mt:4,ml:5.5}}>
                <Card sx={{ width: 350, height: 450, borderRadius: "15px",border:"10px", borderColor:"#9F4636", backgroundColor: "#F1DCC9" }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={"http://localhost:8081/images/tests/" + props.picture}
                    />
                    <CardContent sx = {{alignItems: 'flex-start',minHeight: 200}}>
                        <Typography variant="h4" color="another" align="left">
                            {props.tittle}
                        </Typography>
                        <Typography variant="body2" color="another" align="left">
                            {props.description}
                        </Typography>

                    </CardContent>
                    <Grid container sx = {{ml: 2, display: 'flex',alignItems: 'flex-start',}}>
                        <StarIcon /> <Typography sx = {{mr:1, fontSize:18}}>{props.mark.toFixed(1)} </Typography>
                        <QuestionMarkIcon /><Typography sx = {{mr:1, fontSize:18}}>{props.numberQuestions}</Typography>
                        <CalendarMonthIcon/><Typography sx = {{mr:1, fontSize:18}}>{props.created.substring(0,10)}</Typography>
                    </Grid>

                </Card>
            </Button>
        </div>
    );
}
export default TestCreatorCard;