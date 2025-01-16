import {useContext} from "react";
import axios from "axios";
import {UserContext} from "../contexts/UserContext.tsx";
import {Box, IconButton, Typography} from "@mui/material";
import UpvoteOffIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpvoteOnIcon from '@mui/icons-material/ThumbUp';

type Props = {
    postId: number,
    upvotes: string[],
    updatePosts: () => void;
}

export default function Upvote({postId, upvotes, updatePosts}: Props) {
    const [user,] = useContext(UserContext);
    const username = user ? user.username : "";
    const upvoted = upvotes.indexOf(username) !== -1

    function handleUpvote() {
        if (user === null) {
            return
        }
        axios.post(`http://localhost:8080/api/posts/upvote/${postId}`, {username: username})
            .then(res => {
                if (res.data) {
                    updatePosts()
                }
            })
            .catch(err => console.log("Error when handling post upvote status: "
                + err.response?.data))
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: "center",
        }}>
            <IconButton onClick={handleUpvote}>
                {upvoted
                    ? <UpvoteOnIcon sx={{width: "20px", height: "20px"}}/>
                    : <UpvoteOffIcon sx={{width: "20px", height: "20px"}}/>
                }
            </IconButton>
            <Typography sx={{fontSize: "18px"}}>{upvotes.length}</Typography>
        </Box>
    )
}