import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Autocomplete, TextField} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Button from "@mui/material/Button";
import {questionTypes, types} from "../utils/constans";
import Paper from "@mui/material/Paper";
import Answer from "./Answer";
import DeleteIcon from '@mui/icons-material/Delete';

const Question = (props) => {
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
                        Вопрос
                    </Typography>
                    <Button sx={{backgroundColor: '#FFFFFF',width:300,height:300, mt: 1,mr: 14,borderRadius: "15px",}}>
                        <FileUploadIcon sx={{my:10,width:150,height:150}}/>

                </Button>
                </Grid>
                <Grid sx = {{maxWidth:800,height:300,}}>
                <Grid container  sx = {{maxWidth:800}}>
                    <Typography  align='left' variant='h2'>
                    Текст вопроса
                </Typography>
                    <Button sx = {{ml:65}}><DeleteIcon/></Button>
                </Grid>
                    <TextField variant='outlined'  label = 'Введите текст вопроса' sx = {{backgroundColor: '#FFFFFF',mt: 1,mr:10, width:700, borderRadius: "8px",}}/>
                    <Autocomplete sx = {{mt:1}} size="medium"
                                  id="combo"
                                  style={{backgroundColor: '#FFFFFF',width:700,borderRadius: 6.5}}
                                  options={questionTypes}
                                  PaperComponent={({ children }) => (
                                      <Paper style={{ background: '#FFFFFF' }}>{children}</Paper>
                                  )}
                                  renderInput={(params) => <TextField {...params} label="Выберите тип вопроса" />}
                    />
                    <Answer/>
                    <Answer/>
                    <Button sx = {{mr:10,mt: 2,width:700,borderRadius: "8px"}} size='large'  variant="contained" color='primary'>Добавить вариант ответа </Button>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
};

export default Question;
