import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import axios, {AxiosError} from "axios";
import useSnackBar from "../hooks/useSnackBar.ts";
import {successfulDeletePost} from "../data/SnackBarConfigs.ts";

type Props = {
    postId: number;
    updatePosts: () => void;
}

export default function DeletePostButton({postId, updatePosts}: Props) {
    const showDeleteSuccess = useSnackBar(successfulDeletePost)

    function handleDeletePost(postId: number) {
        axios.delete(`http://localhost:8080/api/posts/${postId}`)
            .then(res => {
                if (res.status === 200) {
                    updatePosts()
                    showDeleteSuccess()
                }
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
    }

    return (
        <IconButton onClick={() => handleDeletePost(postId)}>
            <DeleteIcon sx={{width: "20px", height: "20px"}}/>
        </IconButton>
    )
}
