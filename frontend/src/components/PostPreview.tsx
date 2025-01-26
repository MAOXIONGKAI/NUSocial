import {useContext, useState} from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardActionArea,
    Typography,
    CardActions,
} from "@mui/material";
import Post from "../types/Post.ts";
import Reaction from "./Reaction.tsx";
import TimeFromNow from "./TimeFromNow.tsx";
import PostPage from "../pages/PostPage.tsx";
import DeletePostButton from "./DeletePostButton.tsx";
import {UserContext} from "../contexts/UserContext.tsx";

type Props = {
    post: Post;
    updatePosts: () => void;
}

export default function PostPreview({post, updatePosts}: Props) {
    const [openDetail, setOpenDetail] = useState(false);
    const openPostDetail = () => setOpenDetail(true);
    const closePostDetail = () => setOpenDetail(false);

    const [user,] = useContext(UserContext)
    const isOwnPost = user?.username === post.author

    return (
        <>
            <PostPage
                post={post}
                updatePosts={updatePosts}
                open={openDetail}
                onClose={closePostDetail}
            />
            <Card variant="outlined" sx={{
                width: "100%",
                overflow: "auto",
                zIndex: -1,
            }}>
                <CardActionArea onClick={openPostDetail}>
                    <CardContent sx={{display: "flex", flexDirection: "column", gap: 1}}>
                        <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                            <Avatar/>
                            <Typography sx={{marginRight: "10px"}}>{post.author}</Typography>
                            <TimeFromNow date={post.created_at}/>
                        </Box>
                        <Typography variant="h6" sx={{fontSize: "20px"}}>{post.title}</Typography>
                        <Typography variant="body2"
                                    sx={{color: "gray", fontSize: "16px", fontWeight: 300}}>{post.body}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{padding: 0}}>
                    <Reaction
                        post={post}
                        updatePosts={updatePosts}
                    />
                    {isOwnPost && (
                        <DeletePostButton
                            postId={post.id}
                            updatePosts={updatePosts}
                        />
                    )}
                </CardActions>
            </Card>
        </>
    )
}