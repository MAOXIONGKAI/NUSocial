import {useContext, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import SignUpFormData from "../../../types/SignUpFormData.ts";
import {
    Button,
    TextField,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import ErrorMessage from "../../Utils/ErrorMessage.tsx";
import {passwordNotMatchError, userAlreadyExistsError} from "../../../data/ErrorMessages.ts";
import useRegisterStatus from "../../../hooks/useRegisterStatus.ts";
import {signUpFormDefaultData} from "../../../data/DefaultFormData.ts";
import hasEmptyField from "../../../utils/hasEmptyField.ts";
import useSnackBar from "../../../hooks/useSnackBar.ts";
import {successfulSignUp} from "../../../data/SnackBarConfigs.ts";
import {UserContext} from "../../../contexts/UserContext.tsx";
import {usernameLengthLimit} from "../../../data/textLengthLimit.ts";
import {backendURL} from "../../../data/Config.ts";

export default function SignUpFormDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<SignUpFormData>(signUpFormDefaultData)
    const passwordNotMatch = formData.password !== formData.confirmPassword
    const userAlreadyExist = useRegisterStatus(formData.username)
    const [, setUser] = useContext(UserContext)
    const showSuccessSignUpMessage = useSnackBar(successfulSignUp)

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
        if (passwordNotMatch || userAlreadyExist || hasEmptyField(formData)) {
            return
        }
        e.preventDefault();
        const {confirmPassword, ...newUser} = formData
        axios.post(`${backendURL}/api/users`, newUser)
            .then((res: AxiosResponse) => {
                setUser(res.data)
                showSuccessSignUpMessage()
                handleClose()
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
    }

    return (
        <>
            <Button
                variant="outlined"
                sx={{fontSize: "16px"}}
                onClick={handleOpen}
            >
                Sign Up
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
            >
                <DialogTitle textAlign="center">Sign Up</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        margin: "20px 0px"
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
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </Box>
                    {userAlreadyExist && <ErrorMessage message={userAlreadyExistsError}/>}
                    {passwordNotMatch && <ErrorMessage message={passwordNotMatchError}/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}