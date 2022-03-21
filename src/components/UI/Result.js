import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Autocomplete, Slider, TextField} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Button from "@mui/material/Button";
import {questionTypes, types} from "../utils/constans";
import Paper from "@mui/material/Paper";
import Answer from "./Answer";
import DeleteIcon from "@mui/icons-material/Delete";

function valuetext(value) {
    return `${value}`;
}
const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '100',
    },
];
const Result = (props) => {
    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box
                sx={{
                    mt: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: '#F1DCC9',
                    borderRadius: 10,
                    width: 1200,
                    height: 500,
                }}
            > <Grid container sx={{ml: 2,mt: 2}}>
                <Grid sx = {{width:400,height:300,}} alignItems='flex-start'>
                    <Typography variant='h2' align='left'>
                        Результат
                    </Typography>
                    <Button sx={{backgroundColor: '#FFFFFF',width:300,height:300, mt: 1,mr: 14,borderRadius: "15px",}}>
                        <FileUploadIcon sx={{my:10,width:150,height:150}}/>

                    </Button>
                </Grid>
                <Grid sx = {{maxWidth:800,height:300}}>
                    <Grid container  sx = {{maxWidth:800}}>
                        <Typography  align='left' variant='h2'>
                            Заголовок результата
                        </Typography>
                        <Button sx = {{ml:53}}><DeleteIcon/></Button>
                    </Grid>
                    <TextField variant='outlined'  label = 'Введите заголовок' sx = {{backgroundColor: '#FFFFFF',mt: 1,mr:10, width:700, borderRadius: "8px",}}/>
                    <Typography  align='left' variant='h2'>
                        Описание результата
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="Введите описание"
                        multiline
                        sx = {{backgroundColor: '#FFFFFF',mt: 1, width:700,mr:10, borderRadius: "8px",}}
                        rows={4}
                    />
                    <Typography  align='left' variant='h2'>
                        Процент правильных ответов для получения
                    </Typography>
                    <Slider sx = {{width: 700,mr:9,mt: 1,}}
                        getAriaLabel={() => 'Temperature range'}
                        value={value} marks={marks}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Grid>
            </Grid>
            </Box>
        </div>
    );
};

export default Result;
