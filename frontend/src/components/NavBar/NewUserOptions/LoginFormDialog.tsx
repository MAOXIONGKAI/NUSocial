import {useContext, useState} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import LoginFormData from "../../../types/LoginFormData.ts";
import {
    Button,
    TextField,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";
import {UserContext} from "../../../contexts/UserContext.tsx";
import ErrorMessage from "../../Utils/ErrorMessage.tsx";
import {incorrectPasswordError, userDoesNotExistError} from "../../../data/ErrorMessages.ts";
import User from "../../../types/User.ts";
import {loginFormDefaultData} from "../../../data/DefaultFormData.ts";
import hasEmptyField from "../../../utils/hasEmptyField.ts";
import useSnackBar from "../../../hooks/useSnackBar.ts";
import {successfulLogin} from "../../../data/SnackBarConfigs.ts";
import {usernameLengthLimit} from "../../../data/textLengthLimit.ts";
import {backendURL} from "../../../data/Config.ts";

export default function LoginFormDialog() {
    const [open, setOpen] = useState(false);
    const [, setUser] = useContext(UserContext)
    const [formData, setFormData] = useState<LoginFormData>(loginFormDefaultData)
    const [userDoesNotExist, setUserDoesNotExist] = useState(false);
    const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
    const successfulLoginSnackBar = useSnackBar(successfulLogin)

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (hasEmptyField(formData)) {
            return
        }

        e.preventDefault();
        axios.get(`${backendURL}/api/users/${formData.username}`)
            .then((res: AxiosResponse) => {
                setUserDoesNotExist(false)
                const user: User = res.data
                if (formData.password !== user.password) {
                    setIsIncorrectPassword(true)
                    return
                }
                setUser(user)
                successfulLoginSnackBar()
            })
            .catch((err: AxiosError) => {
                if (err.status === 404) {
                    setUserDoesNotExist(true)
                }
                console.log(err.response?.data)
            })
    }

    return (
        <>
            <Button
                variant="contained"
                sx={{fontSize: "16px"}}
                onClick={handleOpen}
            >
                Login
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
            >
                <DialogTitle textAlign="center">Login</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        margin: "20px 0px",
                    }}>
                        <TextField
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            inputProps={{
                                maxLength: usernameLengthLimit,
                            }}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Box>
                    {userDoesNotExist && <ErrorMessage message={userDoesNotExistError}/>}
                    {isIncorrectPassword && <ErrorMessage message={incorrectPasswordError}/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}