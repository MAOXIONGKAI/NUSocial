import {useState} from 'react';
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

export default function SignUpFormDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<SignUpFormData>({
        username: '',
        password: '',
        confirmPassword: ''
    })

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
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <>
            <Button
                size="small"
                variant="outlined"
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
                    <Box display="flex" flexDirection="column" gap={2}>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}