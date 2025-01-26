import NoComment from '../assets/no-comment.png'
import {Box, Typography} from "@mui/material";
import Comment from './Comment';
import {useContext, useState} from "react";
import CommentInput from "./CommentInput.tsx";
import NoMoreContent from "./NoMoreContent.tsx";
import {UserContext} from "../contexts/UserContext.tsx";

type Props = {
    postId: number;
    comments: number[];
    updatePosts: () => void;
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

export default function CommentSection({postId, comments, updatePosts}: Props) {
    const [user,] = useContext(UserContext);
    const [, setRefresh] = useState(false);
    const loggedIn = user !== null

    function refreshComments() {
        setRefresh(prev => !prev);
    }

    return (
        <>
            {loggedIn && <CommentInput
                postId={postId}
                refreshComments={refreshComments}
                updatePosts={updatePosts}
            />}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                {
                    comments.length === 0
                        ? <NoCommentNotice/>
                        : <Box sx={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            gap: 3
                        }}>
                            {comments.map(
                                comment =>
                                    <Comment
                                        key={comment}
                                        id={comment}
                                        updatePosts={updatePosts}
                                        refreshComments={refreshComments}
                                    />)}
                            <NoMoreContent/>
                        </Box>
                }

            </Box>
        </>
    )
}
