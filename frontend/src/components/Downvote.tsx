import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import {Box, IconButton, Typography} from "@mui/material";
import DownvoteOffIcon from '@mui/icons-material/ThumbDownOffAlt';
import DownvoteOnIcon from '@mui/icons-material/ThumbDown';
import Post from "../types/Post.ts";
import downvotePost from "../utils/downvotePost.ts";
import upvotePost from "../utils/upvotePost.ts";


type Props = {
    post: Post
    updatePosts: () => void;
}

export default function Downvote({post, updatePosts}: Props) {
    const [user,] = useContext(UserContext)
    const username = user ? user.username : ""
    const {upvotes, downvotes} = post
    const upvoted = upvotes.indexOf(username) !== -1
    const downvoted = downvotes.indexOf(username) !== -1

    function handleDownvote() {
        if (user === null) {
            return
        }
        if (upvoted) {
            upvotePost(post.id, username)
        }
        downvotePost(post.id, username)
        updatePosts()
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
        }}>
            <IconButton onClick={handleDownvote}>
                {downvoted
                    ? <DownvoteOnIcon sx={{width: "20px", height: "20px"}}/>
                    : <DownvoteOffIcon sx={{width: "20px", height: "20px"}}/>
                }
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{downvotes.length}</Typography>
        </Box>
    )
}