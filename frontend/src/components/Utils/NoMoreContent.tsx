import FinishImage from "../../assets/NoMoreContent.png";
import {Box, Typography} from "@mui/material";

export default function NoMoreContent() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
            marginBottom: "20px"
        }}>
            <img
                src={FinishImage}
                width="8%"
                alt="Image indicating the end of content list"
            />
            <Typography
                variant="body2"
                sx={{
                    color: "gray"
                }}
            >
                Oops...You have reached the end
            </Typography>
        </Box>
    )
}
