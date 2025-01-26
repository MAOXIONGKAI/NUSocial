import {Box} from "@mui/material";
import Upvote from "./Upvote.tsx";
import Downvote from "./Downvote.tsx";
import CommentStatus from "./CommentStatus.tsx";
import Post from "../types/Post.ts";
import {useState, useContext} from "react";
import {UserContext} from "../contexts/UserContext.tsx";

type Props = {
    post: Post;
}

export default function Reaction({post}: Props) {
    const [user,] = useContext(UserContext);
    const username = user? user.username : ""
    const {upvotes, downvotes} = post;
    const [upvoted, setUpvoted] = useState<boolean>(upvotes.indexOf(username) !== -1);
    const [downvoted, setDownvoted] = useState<boolean>(downvotes.indexOf(username) !== -1);
    const [upvoteCount, setUpvoteCount] = useState(post.upvotes.length)
    const [downvoteCount, setDownvoteCount] = useState(post.downvotes.length)

    return (
        <Box sx={{
            display: "flex",
            gap: 2,
            marginRight: "10px"
        }}>
            <Upvote
                post={post}
                upvoted={upvoted}
                setUpvoted={setUpvoted}
                downvoted={downvoted}
                setDownvoted={setDownvoted}
                upvoteCount={upvoteCount}
                setUpvoteCount={setUpvoteCount}
                setDownvoteCount={setDownvoteCount}
            />
            <Downvote
                post={post}
                upvoted={upvoted}
                setUpvoted={setUpvoted}
                downvoted={downvoted}
                setDownvoted={setDownvoted}
                downvoteCount={downvoteCount}
                setUpvoteCount={setUpvoteCount}
                setDownvoteCount={setDownvoteCount}
            />
            <CommentStatus comments={post.comments}/>
        </Box>
    )
}