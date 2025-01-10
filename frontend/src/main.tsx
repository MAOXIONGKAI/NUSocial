import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {UserProvider} from './context-providers/UserProvider.tsx'
import {SnackBarProvider} from "./context-providers/SnackBarProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SnackBarProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </SnackBarProvider>
    </StrictMode>,
)
