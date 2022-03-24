import React from 'react';
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



const TestCard = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ width: 270, height: 450, borderRadius: "15px",backgroundColor: "#F1DCC9" }}>
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
                image="/static/images/cards/paella.jpg"
            />
            <CardContent sx = {{alignItems: 'flex-start',}}>
                <Typography variant="h4" color="another" align="left">
                    {props.test.tittle}
                </Typography>
                <Typography variant="body2" color="another" align="left">
                    {props.test.desc}
                </Typography>

            </CardContent>
                <Grid sx = {{mt: 14,ml: 2, display: 'flex',alignItems: 'flex-start',}}>
                    <StarIcon /> {props.test.mark}
                    <QuestionMarkIcon /> {props.test.quanQue}
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
    );
}

export default TestCard;
