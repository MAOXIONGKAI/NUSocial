type SnackBarConfig = {
    open: boolean;
    severity: "error" | "warning" | "info" | "success"
    message: string;
}

export default SnackBarConfig;
