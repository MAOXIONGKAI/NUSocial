import {useContext, useState} from "react";
import {Button, TextField, Box} from "@mui/material";
import axios, {AxiosError, AxiosResponse} from "axios";
import {UserContext} from "../contexts/UserContext.tsx";
import useSnackBar from "../hooks/useSnackBar.ts";
import {successfulCommentCreation} from "../data/SnackBarConfigs.ts";
import {backendURL} from "../data/Environment.ts";

type Props = {
    postId: number;
    refreshComments: () => void;
    updatePosts: () => void;
}

export default function CommentInput({postId, refreshComments, updatePosts}: Props) {
    const [comment, setComment] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [user,] = useContext(UserContext);
    const showCommentSuccess = useSnackBar(successfulCommentCreation);

    const commentObj = {
        author: user?.username,
        text: comment,
    }

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        if (comment.trim() === "") {
            setIsFocused(false);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setComment(e.target.value)
    }

    function handleCancel() {
        setComment("")
        setIsFocused(false);
    }

    function handleSubmit() {
        if (!commentObj.text) {
            return
        }
        axios.post(`${backendURL}/api/posts/comments/${postId}`, commentObj)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setComment("")
                    setIsFocused(false);
                    updatePosts()
                    refreshComments()
                    showCommentSuccess()
                }
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
    }

    return (
        <>
            <TextField
                multiline={true}
                variant="outlined"
                placeholder="Add a comment"
                autoComplete="off"
                value={comment}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {isFocused && (
                <Box sx={{
                    display: "flex",
                    marginLeft: "auto",
                    gap: 2
                }}>
                    <Button
                        variant="outlined"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            )}
        </>
    )
}