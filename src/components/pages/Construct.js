import React from 'react';
import Navigation from "../UI/Navigation";
import Image from "../../resources/fon.jpeg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {types} from "../utils/constans";
import TextField from "@mui/material/TextField";
import {Autocomplete, FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Catalog = () => {
    return (
        <div>
            <Navigation/>
            <Grid container component="main"
                  style={{}}
                  sx={{
                      maxWidth: '500vh',
                      maxHeight: '300vh',
                      backgroundPosition: 'center',
                        display: 'inline-block'}}>
                <Box
                    sx={{
                        my: 8,
                        background: "transparent",
                        mx: 16,
                        display: 'flex',
                        alignItems: 'flex-start',
                        borderRadius: "15px",
                        maxWidth: '200vh',
                        maxHeight: '150vh',
                        flexDirection: 'column',
                        '& button': { marginRight: 'auto', marginLeft: 'auto'}
                    }}
                >
                    <Typography  variant="h1" sx={{ mb: 2 }}>
                        СОЗДАНИЕ ТЕСТА
                    </Typography>
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Тип</Typography>
                    {/*    <FormControl variant="standard" sx={{ m: 1, minWidth: 200}}>*/}
                    {/*    <InputLabel id="demo-simple-select-label">Выберите тип теста</InputLabel>*/}
                    {/*    <Select*/}
                    {/*    labelId="demo-simple-select-label"*/}
                    {/*    id="demo-simple-select"*/}
                    {/*    // value={age}*/}
                    {/*    label="Выберите тип теста"*/}
                    {/*    // onChange={handleChange}*/}
                    {/*    autoWidth*/}
                    {/*    >*/}
                    {/*    <MenuItem value={"fddfdfdf"}>Схоластические</MenuItem>*/}
                    {/*    <MenuItem value={"dfdfdf"}>Детерменированные</MenuItem>*/}
                    {/*    <MenuItem value={"dfdfdfdf"}>Динамические</MenuItem>*/}
                    {/*</Select>*/}
                    {/*    </FormControl>*/}
                        <Autocomplete
                            sx={{color: "#F1DCC9", minWidth: 400}}
                            id="combo-box-types"
                            autoSelect
                            options={types}
                            color="secondary"
                            renderInput={(params) => <TextField {...params} label="Выберите тип теста" />}
                        />
                        <Typography variant="h2" sx={{mt: 2}}>Название</Typography>
                        <TextField
                        margin="normal"
                        required
                        id="name"
                        label="Введите название"
                        name="naming"
                        autoFocus
                        sx={{minWidth: 400}}
                        />
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Описание</Typography>
                        <TextField
                        id="outlined-multiline-static"
                        label="Введите описание"
                        multiline
                        sx={{minWidth: 400}}
                        rows={4}
                    />

                    <Grid container sx={{width:300}}>
                        <Typography variant="h2" sx={{mt: 2, mb: 2 }}>Обложка</Typography>
                        <Button sx={{width:300,height:300,borderRadius: "15px",mr: 30}}>
                            <FileUploadIcon sx={{width:150,height:150}}/>
                            </Button>
                    </Grid>
                        <Button variant="contained" color="primary" size="large">Далее </Button>
                </Box>
            </Grid>
        </div>
    );
};

export default Catalog;
