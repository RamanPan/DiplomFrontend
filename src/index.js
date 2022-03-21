import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import themeMy from "./components/utils/themeMy";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={themeMy}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


