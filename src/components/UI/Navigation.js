import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CreateIcon from '@mui/icons-material/Create';
import GridViewIcon from '@mui/icons-material/GridView';
import {pages, settings} from "../utils/constans"
import { useHistory, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import useStore from "../utils/useStore";
import {useNavigate} from "react-router";
import {NICKNAME, PICTURE} from "../pages/SingInSide";
import {useEffect, useState} from "react";
import {PICTURE_UPDATE} from "../pages/UpdateUser";
const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [pathPicture, setPathPicture] = useState("http://localhost:8081/images/users/default_avatar.png");
    const {usersStore} = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(PICTURE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE)}
        if(PICTURE_UPDATE !== " ") {setPathPicture("http://localhost:8081/images/users/" + PICTURE_UPDATE)}

    });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleSubmit = () => {
        usersStore.exit();
        navigate("/login")
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="another">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        ПЁТР I
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="secondary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >ПЁТР I
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                component={Link} to = '/catalog'
                                sx={{ my: 2,mr: 5,ml: 2, color: '#F1DCC9', display: 'block' }}
                            >
                                <Grid container> <GridViewIcon sx={{ fontSize: 20,mt:0.55,mr: 1 }}/><Typography sx={{ fontSize: 20 }}>Каталог</Typography></Grid>
                            </Button>
                            <Button
                                component={Link} to = '/construct'
                                sx={{ my: 2, mr: 5, color: '#F1DCC9', display: 'block' }}
                            >
                                <Grid container> <CreateIcon sx={{ fontSize: 20,mt:0.5,mr: 1   }}/><Typography sx={{ fontSize: 20 }}> Конструктор</Typography></Grid>
                            </Button>
                            {/*<Button*/}
                            {/*    onClick={{}}*/}
                            {/*    sx={{ my: 2, mr: 5, color: '#F1DCC9', display: 'block' }}*/}
                            {/*>*/}
                            {/*    <Typography sx={{ fontSize: 20 }}> Топ</Typography>*/}
                            {/*</Button>*/}

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Подробнее">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src={pathPicture}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px',  }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        ><Button
                                component={Link} to ="/lk"

                            ><Typography sx={{  }}> Личный кабинет</Typography></Button>
                            <Grid container>
                            <Button sx = {{}}
                                    onClick={handleSubmit}
                                >
                                <Typography sx={{  }}> Выйти</Typography>
                                </Button>
                            </Grid>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
