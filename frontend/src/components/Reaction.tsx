import {Box} from "@mui/material";
import Upvote from "./Upvote.tsx";
import Downvote from "./Downvote.tsx";
import CommentStatus from "./CommentStatus.tsx";
import Post from "../types/Post.ts";

type Props = {
    post: Post;
    updatePosts: () => void;
}

export default function Reaction({post, updatePosts}: Props) {
    return (
        <Box sx={{
            display: "flex",
            gap: 2
        }}>
            <Upvote postId={post.id} upvotes={post.upvotes} updatePosts={updatePosts} />
            <Downvote postId={post.id} downvotes={post.downvotes} updatePosts={updatePosts}/>
            <CommentStatus postId={post.id} comments={post.comments} updatePosts={updatePosts}/>
        </Box>
    )
}