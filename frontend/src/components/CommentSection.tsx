import NoComment from '../assets/no-comment.png'
import {Box, Typography} from "@mui/material";
import Comment from './Comment';
import CommentType from "../types/Comment.ts";

type Props = {
    comments: CommentType[]
}

const NoCommentNotice = () => {
    return (
        <Box sx={{
            textAlign: "center",
            color: "gray",
        }}
        >
            <img
                width="20%"
                src={NoComment}
                alt="Background when no comments in the comment section"
                style={{filter: 'opacity(40%)'}}
            />
            <Typography>
                Nobody has responded to this post yet...
                <br/>
                Be the first to reply!
            </Typography>
        </Box>
    )
}

export default function CommentSection({comments}: Props) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            {
                comments.length === 0
                    ? <NoCommentNotice/>
                    : <>{comments.map(
                        comment =>
                        <Comment key={comment.id} comment={comment}/>)}
                        </>
            }
        </Box>
    )
}