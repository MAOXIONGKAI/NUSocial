import {Dispatch, SetStateAction, useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import {Box, IconButton, Typography} from "@mui/material";
import UpvoteOffIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpvoteOnIcon from '@mui/icons-material/ThumbUp';
import Post from "../types/Post.ts";
import upvotePost from "../utils/upvotePost.ts";
import downvotePost from "../utils/downvotePost.ts";

type Props = {
    post: Post
    upvoted: boolean
    setUpvoted: Dispatch<SetStateAction<boolean>>
    downvoted: boolean
    setDownvoted: Dispatch<SetStateAction<boolean>>
    upvoteCount: number
    setUpvoteCount: Dispatch<SetStateAction<number>>
    setDownvoteCount: Dispatch<SetStateAction<number>>
}

export default function Upvote({
                                   post,
                                   upvoted,
                                   setUpvoted,
                                   downvoted,
                                   setDownvoted,
                                   upvoteCount,
                                   setUpvoteCount,
                                   setDownvoteCount
                               }: Props) {
    const [user,] = useContext(UserContext);
    const loggedIn = user !== null;

    const username = user ? user.username : "";

    function handleUpvote() {
        if (!loggedIn) {
            return
        }
        if (downvoted) {
            downvotePost(post.id, username)
            setDownvoteCount(prev => prev - 1)
            setDownvoted(false)
        }
        upvotePost(post.id, username)
        setUpvoted(prev => !prev)
        if (upvoted) {
            setUpvoteCount(prev => prev - 1)
        } else {
            setUpvoteCount(prev => prev + 1)
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
        }}>
            <IconButton
                disabled={!loggedIn}
                onClick={handleUpvote}
            >
                {upvoted
                    ? <UpvoteOnIcon sx={{width: "20px", height: "20px"}}/>
                    : <UpvoteOffIcon sx={{width: "20px", height: "20px"}}/>
                }
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{upvoteCount}</Typography>
        </Box>
    )
}