import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios, {AxiosResponse} from "axios";
import useSnackBar from "../hooks/useSnackBar.ts";
import {successfulDeleteCommand} from "../data/SnackBarConfigs.ts";

type Props = {
    commentId: number;
    updatePosts: () => void;
    refreshComments: () => void;
}

export default function DeleteCommentButton({commentId, updatePosts, refreshComments}: Props) {
    const showDeleteSuccess = useSnackBar(successfulDeleteCommand)

    function handleDeleteComment(commentId: number) {
        axios.delete(`http://localhost:8080/api/comments/${commentId}`)
            .then((res: AxiosResponse) => {
                if (res.status === 200) {
                    updatePosts()
                    refreshComments()
                    showDeleteSuccess()
                }
            })
            .catch(err => console.log(err.response?.data))
    }

    return (
        <IconButton
            onClick={() => handleDeleteComment(commentId)}
        >
            <DeleteIcon sx={{width: "20px", height: "20px"}}/>
        </IconButton>
    )
}