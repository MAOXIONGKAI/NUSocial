import {Box, IconButton, Typography} from "@mui/material";
import UpvoteOffIcon from '@mui/icons-material/ThumbUpOffAlt';

type Props = {
    postId: number;
    upvotes: number[];
}

export default function Upvote({postId, upvotes}: Props) {

    function handleUpvote() {
        console.log("Upvote post with ID: " + postId);
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
        }}>
            <IconButton onClick={handleUpvote}>
                <UpvoteOffIcon sx={{width: "20px", height: "20px"}}/>
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{upvotes.length}</Typography>
        </Box>
    )
}