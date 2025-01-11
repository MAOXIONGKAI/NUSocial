import {Typography} from "@mui/material";

export default function ErrorMessage({message}: { message: string }) {
    return (
        <Typography
            sx={{
                color: "red",
                fontSize: "14px"
            }}
        >
            {message}
        </Typography>
    )
}