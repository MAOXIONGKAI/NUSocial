import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";
import {Box, IconButton, Typography} from "@mui/material";
import UpvoteOffIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpvoteOnIcon from '@mui/icons-material/ThumbUp';
import Post from "../types/Post.ts";
import upvotePost from "../utils/upvotePost.ts";
import downvotePost from "../utils/downvotePost.ts";

type Props = {
    post: Post
    updatePosts: () => void,
}

export default function Upvote({post, updatePosts}: Props) {
    const [user,] = useContext(UserContext);
    const loggedIn = user !== null;
    const username = user ? user.username : "";
    const {upvotes, downvotes} = post
    const upvoted = upvotes.indexOf(username) !== -1
    const downvoted = downvotes.indexOf(username) !== -1

    function handleUpvote() {
        if (!loggedIn) {
            return
        }
        if (downvoted) {
            downvotePost(post.id, username)
        }
        upvotePost(post.id, username)
        updatePosts()
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
            <Typography sx={{fontSize: "18px"}}>{upvotes.length}</Typography>
        </Box>
    )
}