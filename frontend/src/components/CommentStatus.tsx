import {Box, IconButton, Typography} from "@mui/material";
import CommentIcon from '@mui/icons-material/QuestionAnswerOutlined';

type Props = {
    postId: number;
    comments: number[]
    updatePosts: () => void;
}

export default function CommentStatus({postId, comments, updatePosts}: Props) {
    function handleComment() {
        console.log("Open comment section of post with ID: " + postId);
        updatePosts()
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center"
        }}>
            <IconButton onClick={handleComment}>
                <CommentIcon sx={{width: "20px", height: "20px"}}/>
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{comments.length}</Typography>
        </Box>
    )
}