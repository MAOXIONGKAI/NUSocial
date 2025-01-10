import {useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import SignUpFormData from "../types/SignUpFormData.ts";
import {
    Button,
    TextField,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import ErrorMessage from "./ErrorMessage.tsx";
import {passwordNotMatchError, userAlreadyExistsError} from "../data/ErrorMessages.ts";
import useRegisterStatus from "../hooks/useRegisterStatus.ts";

export default function SignUpFormDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<SignUpFormData>({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const passwordNotMatch = formData.password !== formData.confirmPassword
    const userAlreadyExist = useRegisterStatus(formData.username)

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
        if (passwordNotMatch || userAlreadyExist) {
            return
        }
        e.preventDefault();
        const {confirmPassword, ...newUser} = formData
        axios.post("http://localhost:8080/api/users", newUser)
            .then((res: AxiosResponse) => console.log("Successfully created user: " + JSON.stringify(res.data)))
            .then(() => handleClose())
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