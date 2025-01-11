import {useState} from "react";
import SnackBarConfig from "../types/SnackBarConfig.ts";
import {SnackBarContext} from "../contexts/SnackBarContext.tsx";
import {Alert, Snackbar} from "@mui/material";

type SnackBarProviderProps = {
    children: React.ReactNode;
}

const defaultSnackBarConfig: SnackBarConfig = {
    open: false,
    message: "",
    severity: "info"
}

// Wraps a global MUI SnackBar component for displaying notification purpose.
// Provides a global function that alters this SnackBar's display info and visibility
// based on the provided configuration
export function SnackBarProvider({ children }: SnackBarProviderProps) {
    const [config, setConfig] = useState<SnackBarConfig>(defaultSnackBarConfig);

    function closeSnackBar() {
        setConfig(prevConfig => {
            return {
                ...prevConfig,
                open: false
            }
        })
    }

    function showSnackBar(config: SnackBarConfig) {
        setConfig(config)
    }

    return (
        <SnackBarContext.Provider value={showSnackBar}>
            {children}
            <Snackbar open={config.open} autoHideDuration={6000} onClose={closeSnackBar}>
                <Alert
                    onClose={closeSnackBar}
                    severity={config.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {config.message}
                </Alert>
            </Snackbar>
        </SnackBarContext.Provider>
    )
}
