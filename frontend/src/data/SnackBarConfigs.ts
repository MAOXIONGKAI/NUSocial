import SnackBarConfig from "../types/SnackBarConfig.ts";

export const successfulLogin: SnackBarConfig = {
    open: true,
    severity: 'success',
    message: "Welcome! You have successfully logged in",
}

export const successfulSignUp: SnackBarConfig = {
    open: true,
    severity: 'success',
    message: "Welcome! You have successfully signed up a new account",
}

export const successfulLogOut: SnackBarConfig = {
    open: true,
    severity: 'success',
    message: "You have successfully logged out",
}
