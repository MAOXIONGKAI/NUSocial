import {createTheme} from "@mui/material";

export const backendURL = import.meta.env.VITE_BACKEND_URL;

export const appTheme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#1976d2',
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    border: '2px solid #1976d2',
                    borderRadius: "50%"
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    '& .MuiSvgIcon-root': {
                        color: 'white'
                    }
                }
            }
        }
    },
});