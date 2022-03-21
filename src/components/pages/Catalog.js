import React from 'react';
import Navigation from "../UI/Navigation";
import Image from "../../resources/fon.jpeg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {roles, types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete} from "@mui/material";
import TestCard from "../UI/TestCard";
import '../util.css'
const Catalog = () => {
    return (
        <div>
           <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',}}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            color: '#00000'
                        }}
                    >
                        <Typography component="h1" variant="h1" sx = {{}}>
                            ДОСТУПНЫЕ ТЕСТЫ
                        </Typography>
                        <Grid container sx={{mt: 3, mb: 2 }} >
                            <Box sx={{ '& button': { marginRight: 3 },width:'100%',display: 'flex', alignItems: 'flex-start'}}>
                        <Button variant="contained" color="secondary" size="large" sx={{height: 56,width: 135,borderRadius: 3.5}}>Новые </Button>
                        <Button variant="contained" color="secondary" size="large" sx={{height: 56,width: 135,borderRadius: 3.5}}>Лучшие </Button>
                        <Button variant="contained" color="secondary" size="large" sx={{height: 56,width: 135,borderRadius: 3.5}}>Старые </Button><Autocomplete size="medium"
                                    id="combo"
                                    style={{backgroundColor: '#F1DCC9',minWidth: 300,borderRadius: 6.5}}
                                    options={types}
                                    color="secondary"
                                    PaperComponent={({ children }) => (
                                        <Paper style={{ background: '#F1DCC9' }}>{children}</Paper>
                                    )}
                                    renderInput={(params) => <TextField {...params} label="Фильтрация по типу теста" />}
                                />
                            </Box>
                            <div className='break'/>
                           <Grid sx = {{
                               width: '171vh',
                               mt: 4
                               }}>
                                <TestCard test = {{tittle: "Лол", desc: "Кекич", mark: "10.0", quanQue: "12"}}/>

                           </Grid>
                        </Grid>
                    </Box>
                </Grid>
        </div>
    );
};

export default Catalog;
