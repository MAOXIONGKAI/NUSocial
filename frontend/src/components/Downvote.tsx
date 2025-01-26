import {Dispatch, SetStateAction, useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import {Box, IconButton, Typography} from "@mui/material";
import DownvoteOffIcon from '@mui/icons-material/ThumbDownOffAlt';
import DownvoteOnIcon from '@mui/icons-material/ThumbDown';
import Post from "../types/Post.ts";
import downvotePost from "../utils/downvotePost.ts";
import upvotePost from "../utils/upvotePost.ts";


type Props = {
    post: Post
    upvoted: boolean
    setUpvoted: Dispatch<SetStateAction<boolean>>
    downvoted: boolean
    setDownvoted: Dispatch<SetStateAction<boolean>>
    downvoteCount: number
    setUpvoteCount: Dispatch<SetStateAction<number>>
    setDownvoteCount: Dispatch<SetStateAction<number>>
}

export default function Downvote({
                                     post,
                                     upvoted,
                                     setUpvoted,
                                     downvoted,
                                     setDownvoted,
                                     downvoteCount,
                                     setUpvoteCount,
                                     setDownvoteCount
                                 }: Props) {
    const [user,] = useContext(UserContext)
    const loggedIn = user !== null
    const username = user ? user.username : ""

    function handleDownvote() {
        if (!loggedIn) {
            return
        }
        if (upvoted) {
            upvotePost(post.id, username)
            setUpvoteCount(prev => prev - 1)
            setUpvoted(false)
        }
        downvotePost(post.id, username)
        setDownvoted(prev => !prev)
        if (downvoted) {
            setDownvoteCount(prev => prev - 1)
        } else {
            setDownvoteCount(prev => prev + 1)
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
        }}>
            <IconButton
                disabled={!loggedIn}
                onClick={handleDownvote}
            >
                {downvoted
                    ? <DownvoteOnIcon sx={{width: "20px", height: "20px"}}/>
                    : <DownvoteOffIcon sx={{width: "20px", height: "20px"}}/>
                }
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{downvoteCount}</Typography>
        </Box>
    )
}