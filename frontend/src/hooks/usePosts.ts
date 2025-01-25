import {useState, useEffect} from 'react'
import Post from "../types/Post.ts";
import axios, {AxiosError, AxiosResponse} from "axios";

type ReturnType = [posts: Post[], updatePosts: () => void]

// Creation date in returned post objects are date string
// This functions accepts the value returned from backend
// and convert the date string to JS Date object for easier date handling
function parseCreationDate(post: Post): Post {
    return {
        ...post,
        created_at: new Date(post.created_at)}
}

// Fetch and update posts based on the predicate provided
// If no predicate provided, fetch all the posts
export default function usePosts(): ReturnType {
    const [posts, setPosts] = useState<Post[]>([]);
    const [updated, setUpdated] = useState<boolean>(false);

    function updatePosts() {
        setUpdated(updated => !updated)
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/posts")
            .then((res: AxiosResponse) => {
                const result: Post[] = (res.data)
                    .map(parseCreationDate)
                setPosts(result);
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
    }, [updated])

    return [posts, updatePosts]
}