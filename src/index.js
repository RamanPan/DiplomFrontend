import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import themeMy from "./components/utils/themeMy";
import RootStore from "./store";

const store = RootStore.create({});

export const StoreContext = createContext(store);
ReactDOM.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <ThemeProvider theme={themeMy}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


