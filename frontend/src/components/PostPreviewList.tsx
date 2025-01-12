import Post from "../types/Post.ts";
import PostPreview from "./PostPreview.tsx";
import {List} from "@mui/material";

type Props = {
    posts: Post[]
}

export default function PostPreviewList({posts}: Props) {
    return (
        <List sx={{padding: 0, width: "100%"}}>
            {
                posts.map((post: Post) => (
                    <PostPreview key={post.id} post={post}/>
                ))
            }
        </List>
    )
}