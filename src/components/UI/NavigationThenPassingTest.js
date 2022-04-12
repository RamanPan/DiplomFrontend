import {useNavigate} from "react-router";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import GridViewIcon from "@mui/icons-material/GridView";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import {pages} from "../utils/constans";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";

const NavigationThenPassingTest = (props) => {
    const navigate = useNavigate();
    const handleExit = () => {
        navigate("/catalog")
    }

    return (
        <AppBar position="static" color="another">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Box alignItems="center" sx={{ flexGrow: 1,alignItems:"center",color:'#F1DCC9', display: { xs: 'none', md: 'flex' } }}>
                        <Typography align="center" sx={{ml:83, fontSize: 24 }}>{props.name.toUpperCase()}</Typography>


                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                           <Button onClick={handleExit}><Typography sx = {{fontSize:24,color:'#F1DCC9',}}>Выйти</Typography></Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}



export default NavigationThenPassingTest;