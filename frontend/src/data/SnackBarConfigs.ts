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

export const successfulPostCreation: SnackBarConfig = {
    open: true,
    severity: "success",
    message: "You have successfully created a new post"
}

export const successfulCommentCreation: SnackBarConfig = {
    open: true,
    severity: "success",
    message: "You have successfully commented under this post"
}

export const successfulDeletePost: SnackBarConfig = {
    open: true,
    severity: "success",
    message: "You have successfully deleted this post"
}
