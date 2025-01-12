import {Box, IconButton, Typography} from "@mui/material";
import DownvoteOffIcon from '@mui/icons-material/ThumbDownOffAlt';

type Props = {
    postId: number;
    downvotes: number[];
}

export default function Downvote({postId, downvotes}: Props) {

    function handleDownvote() {
        console.log("Downvote post with ID: " + postId);
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
        }}>
            <IconButton onClick={handleDownvote}>
                <DownvoteOffIcon sx={{width: "20px", height: "20px"}}/>
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{downvotes.length}</Typography>
        </Box>
    )
}