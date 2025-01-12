import {useState, useEffect} from 'react'
import Post from "../types/Post.ts";
import axios, {AxiosError, AxiosResponse} from "axios";

// Fetch and update posts based on the predicate provided
// If no predicate provided, fetch all the posts
export default function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/posts")
            .then((res: AxiosResponse) => setPosts(res.data))
            .catch((err: AxiosError) =>  console.log(err.response?.data))
    }, [])

    return posts
}