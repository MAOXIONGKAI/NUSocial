import {useContext} from "react";
import axios, {AxiosError} from "axios";
import {UserContext} from "../contexts/UserContext.tsx";
import {Box, IconButton, Typography} from "@mui/material";
import DownvoteOffIcon from '@mui/icons-material/ThumbDownOffAlt';
import DownvoteOnIcon from '@mui/icons-material/ThumbDown';


type Props = {
    postId: number;
    downvotes: string[];
    updatePosts: () => void;
}

export default function Downvote({postId, downvotes, updatePosts}: Props) {
    const [user,] = useContext(UserContext)
    const username = user ? user.username : ""
    const downvoted = downvotes.indexOf(username) !== -1

    function handleDownvote() {
        if (user === null) {
            return
        }
        axios.post(`http://localhost:8080/api/posts/downvote/${postId}`, {username: username})
            .then(res => {
                if (res.data) {
                    updatePosts()
                }
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
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