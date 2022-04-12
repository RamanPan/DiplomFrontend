import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {ExpandMore} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Grid from "@mui/material/Grid";
import {observer} from "mobx-react-lite";
import {NICKNAME} from "../pages/SingInSide";
import {postReq} from "../utils/apiCalls";
import {API_GET_USER_PICTURE} from "../utils/constans";
import Catalog from "../pages/Catalog";
import ExtendedTestCard from "../pages/ExtendedTestCard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useNavigate} from "react-router";
import Button from "@mui/material/Button";
import useStore from "../utils/useStore";


const UserAnswerCard = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const [date, setDate] = useState(props.created);
    const [avatar, setAvatar] = useState("default_avatar.png");
    const navigate = useNavigate();
    const {testsStore} = useStore();
    let picture;
    useEffect(async () => {
    });

    return (
        <div>
            <Button onClick={handlerButtonTestCard} sx = {{mt:2}}>
                <Card sx={{ width: 300, height: 450, borderRadius: "15px",border:"10px", borderColor:"#9F4636", backgroundColor: "#F1DCC9" }}>
                    {/*<CardHeader*/}
                    {/*    avatar={*/}
                    {/*        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">*/}
                    {/*            R*/}
                    {/*        </Avatar>*/}
                    {/*    }*/}
                    {/*    action={*/}
                    {/*        <IconButton aria-label="settings">*/}
                    {/*            <MoreVertIcon />*/}
                    {/*        </IconButton>*/}
                    {/*    }*/}
                    {/*    title="Shrimp and Chorizo Paella"*/}
                    {/*    subheader="September 14, 2016"*/}
                    {/*/>*/}
                    <CardMedia
                        component="img"
                        height="200"
                        image={"http://localhost:8081/images/questions/" + props.picture}
                    />
                    <CardContent sx = {{alignItems: 'flex-start',}}>
                        <Typography variant="h4" color="another" align="left">
                            {props.tittle}
                        </Typography>
                        <Typography variant="body2" color="another" align="left">
                            {props.description}
                        </Typography>

                    </CardContent>
                    <Grid container sx = {{mt: 14,ml: 2, display: 'flex',alignItems: 'flex-start',}}>
                        <QuestionMarkIcon /> {props.numberQuestions}
                    </Grid>


                    {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
                    {/*    <CardContent>*/}
                    {/*        <Typography paragraph>Method:</Typography>*/}
                    {/*        <Typography paragraph>*/}
                    {/*            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set*/}
                    {/*            aside for 10 minutes.*/}
                    {/*        </Typography>*/}
                    {/*        <Typography paragraph>*/}
                    {/*            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over*/}
                    {/*            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring*/}
                    {/*            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a*/}
                    {/*            large plate and set aside, leaving chicken and chorizo in the pan. Add*/}
                    {/*            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,*/}
                    {/*            stirring often until thickened and fragrant, about 10 minutes. Add*/}
                    {/*            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                    {/*        </Typography>*/}
                    {/*        <Typography paragraph>*/}
                    {/*            Add rice and stir very gently to distribute. Top with artichokes and*/}
                    {/*            peppers, and cook without stirring, until most of the liquid is absorbed,*/}
                    {/*            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and*/}
                    {/*            mussels, tucking them down into the rice, and cook again without*/}
                    {/*            stirring, until mussels have opened and rice is just tender, 5 to 7*/}
                    {/*            minutes more. (Discard any mussels that don’t open.)*/}
                    {/*        </Typography>*/}
                    {/*        <Typography>*/}
                    {/*            Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                    {/*        </Typography>*/}
                    {/*    </CardContent>*/}
                    {/*</Collapse>*/}
                </Card>
            </Button>
        </div>
    );
}

export default observer(UserAnswerCard);