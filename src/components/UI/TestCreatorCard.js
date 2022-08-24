import Button from "@mui/material/Button";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import React, {useState} from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {deleteReq} from "../utils/apiCalls";
import {API_DELETE_TEST} from "../utils/constans";
import {useNavigate} from "react-router";
import useStore from "../utils/useStore";

const TestCreatorCard = (props) => {
    const navigate = useNavigate();
    const {testsStore} = useStore();
    const getMark = () => {
        if (props.mark === 0) return "-";
        else return props.mark.toFixed(1);
    }
    const [deleteState, setDeleteState] = useState(false);
    const handleDelete = () => {
        deleteReq(API_DELETE_TEST, {"id": props.id}).then(() => {
            navigate("/lk")
        })
    }
    const handleAgree = () => {
        setDeleteState(true)
    }
    const handleUpdate = () => {
        testsStore.getTests({"id": props.id}).then(() => {
            navigate("/construct/updateTest")
        })
    }

    return (
        <div>
            <Card sx={{
                mt: 4,
                ml: 6.251,
                width: 360,
                minHeight: 450,
                borderRadius: "15px",
                border: "10px",
                borderColor: "#9F4636",
                backgroundColor: "#F1DCC9"
            }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={"http://localhost:8081/images/tests/" + props.picture}
                    sx={{objectFit: "cover",}}
                />
                <CardContent sx={{alignItems: 'flex-start', minHeight: 200}}>
                    <Typography variant="h4" color="another" align="left">
                        {props.tittle}
                    </Typography>
                    <Typography variant="body2" color="another" align="left">
                        {props.description}
                    </Typography>

                </CardContent>
                <Grid container sx={{ml: 2, display: 'flex', alignItems: 'flex-start',}}>
                    <StarIcon/> <Typography sx={{mr: 1, fontSize: 18}}>{getMark()} </Typography>
                    <QuestionMarkIcon/><Typography sx={{mr: 1, fontSize: 18}}>{props.numberQuestions}</Typography>
                    <CalendarMonthIcon/><Typography
                    sx={{mr: 1, fontSize: 18}}>{props.created.substring(0, 10)}</Typography>
                </Grid>
                <Grid container sx={{ml: 2, display: 'flex', alignItems: 'flex-start',}}>
                    <Button onClick={handleUpdate} fullWidth variant="contained" color="primary"
                            sx={{width: 330, mt: 1, borderRadius: "10px"}}>Редактировать</Button>
                    {deleteState ? (<Button onClick={handleDelete} fullWidth variant="contained" sx={{
                            backgroundColor: "#490005",
                            width: 330,
                            mt: 1,
                            mb: 1,
                            borderRadius: "10px"
                        }}>Вы уверены?</Button>) :
                        (<Button onClick={handleAgree} fullWidth variant="contained" sx={{
                            backgroundColor: "#490005",
                            width: 330,
                            mt: 1,
                            mb: 1,
                            borderRadius: "10px"
                        }}>Удалить</Button>)}
                </Grid>


            </Card>
        </div>
    );
}
export default TestCreatorCard;