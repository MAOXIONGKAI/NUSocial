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
            gap: 2,
            marginRight: "10px"
        }}>
            <Upvote post={post} updatePosts={updatePosts}/>
            <Downvote post={post} updatePosts={updatePosts}/>
            <CommentStatus comments={post.comments}/>
        </Box>
    )
}