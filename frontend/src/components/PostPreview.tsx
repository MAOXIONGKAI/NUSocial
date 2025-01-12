import {Avatar, Box, Card, CardContent, CardActionArea, Typography, CardActions} from "@mui/material";
import Post from "../types/Post.ts";
import Reaction from "./Reaction.tsx";

type Props = {
    post: Post
}

export default function PostPreview({post}: Props) {
    return (
        <>
            <Card variant="outlined" sx={{
                width: "100%",
                overflow: "auto",
                zIndex: -1,
            }}>
                <CardActionArea>
                    <CardContent sx={{display: "flex", flexDirection: "column", gap: 1}}>
                        <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                            <Avatar/>
                            <Typography>{post.author}</Typography>
                        </Box>
                        <Typography variant="h6" sx={{fontSize: "20px"}}>{post.title}</Typography>
                        <Typography variant="body2"
                                    sx={{color: "gray", fontSize: "16px", fontWeight: 300}}>{post.body}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{padding: 0}}>
                    <Reaction post={post}/>
                </CardActions>
            </Card>
        </>
    )
}