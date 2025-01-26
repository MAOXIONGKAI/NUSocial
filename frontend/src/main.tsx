import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {UserProvider} from './context-providers/UserProvider.tsx'
import {SnackBarProvider} from "./context-providers/SnackBarProvider.tsx";
import {ThemeProvider} from "@mui/material";
import {appTheme} from "./data/Config.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={appTheme}>
            <SnackBarProvider>
                <UserProvider>
                    <App/>
                </UserProvider>
            </SnackBarProvider>
        </ThemeProvider>
    </StrictMode>
)
