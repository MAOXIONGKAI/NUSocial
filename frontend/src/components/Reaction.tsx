import Post from "../types/Post.ts";
import {Box} from "@mui/material";
import Upvote from "./Upvote.tsx";
import Downvote from "./Downvote.tsx";
import CommentStatus from "./CommentStatus.tsx";

type Props = {
    post: Post
}

export default function Reaction({post}: Props) {
    return (
        <Box sx={{
            display: "flex",
            gap: 2
        }}>
            <Upvote postId={post.id} upvotes={post.upvotes}/>
            <Downvote postId={post.id} downvotes={post.downvotes}/>
            <CommentStatus postId={post.id} comments={post.comments}/>
        </Box>
    )
}