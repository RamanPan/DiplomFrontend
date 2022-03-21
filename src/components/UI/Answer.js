import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CropSquareTwoToneIcon from '@mui/icons-material/CropSquareTwoTone';
const Answer = () => {
    return (
        <div>
            <Typography  sx = {{mt:1}} align='left' variant='h5'>
                Текст ответа
            </Typography>
            <Grid container>
                <TextField variant='outlined' align='left' size = 'small' label = 'Введите текст ответа' sx = {{backgroundColor: '#FFFFFF',mt: 0.5, width:600, borderRadius: "8px",}}
                />
                <IconButton>
                    <CropSquareTwoToneIcon color = 'primary' sx = {{fontSize: 31}}/>
                </IconButton>
                <IconButton>
                    <HighlightOffIcon  color = 'primary' sx = {{fontSize: 31}}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default Answer;
