import {useNavigate} from "react-router";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import {API_SET_MARK_USERS_TEST} from "../utils/constans";
import {postReq} from "../utils/apiCalls";
import {MARK} from "../pages/AfterTestPass";
import {ID_USER_TEST} from "./ExtendedTestCard";
import useStore from "../utils/useStore";
import {useEffect} from "react";
import {NICKNAME} from "../pages/SingInSide";


const NavigationThenPassingTest = (props) => {
    const navigate = useNavigate();
    const {usersStore} = useStore();

    useEffect(() => {
        if(NICKNAME === undefined) {navigate("/login"); }
    });


    const handleExit = () => {
        if(MARK !== undefined) {
            postReq(API_SET_MARK_USERS_TEST,{"id":ID_USER_TEST,"mark":MARK}).then(r => {
                usersStore.needUser({"id": usersStore.me.id}).then()
            })
        }
        navigate("/catalog")
    }

    return (
        <AppBar position="static" color="another">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Box alignItems="center" sx={{ flexGrow: 1,justifyContent:"center",alignItems:"center",color:'#F1DCC9', display: { xs: 'none', md: 'flex' } }}>
                        <Typography align="center" sx={{ ml: 10,fontSize: 24 }}>{props.name.toUpperCase()}</Typography>


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