import Post from "../types/Post.ts";
import PostPreview from "./PostPreview.tsx";
import {List} from "@mui/material";

type Props = {
    posts: Post[]
    updatePosts: () => void;
}

export default function PostPreviewList({posts, updatePosts}: Props) {
    return (
        <List sx={{padding: 0, width: "100%"}}>
            {
                posts.map((post: Post) => (
                    <PostPreview key={post.id} post={post} updatePosts={updatePosts}/>
                ))
            }
        </List>
    )
}