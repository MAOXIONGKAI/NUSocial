import {Box, Typography} from "@mui/material";
import CommentIcon from '@mui/icons-material/QuestionAnswerOutlined';

type Props = {
    comments: number[]
}

export default function CommentStatus({comments}: Props) {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center"
        }}>
            <CommentIcon sx={{width: "20px", height: "20px", padding: "8px"}}/>
            <Typography sx={{fontSize: "18px"}}>{comments.length}</Typography>
        </Box>
    )
}