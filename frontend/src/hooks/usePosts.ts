import {useState, useEffect} from 'react'
import Post from "../types/Post.ts";
import axios, {AxiosError, AxiosResponse} from "axios";
import PostQuery from "../types/PostQuery.ts";

type ReturnType = Post[];

// Creation date in returned post objects are date string
// This functions accepts the value returned from backend
// and convert the date string to JS Date object for easier date handling
function parseCreationDate(post: Post): Post {
    return {...post, created_at: new Date(post.created_at)}
}

// Fetch and update posts based on the predicate provided
// If no predicate provided, fetch all the posts
export default function usePosts(query: PostQuery)
    : ReturnType {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.post("http://localhost:8080/api/posts/search", {
            category: query.category, search_keyword: query.search_keyword,
        })
            .then((res: AxiosResponse) => {
                const result: Post[] = (res.data)
                    .map(parseCreationDate)
                setPosts(result);
            })
            .catch((err: AxiosError) =>  console.log(err.response?.data))
    }, [query.category, query.search_keyword])

    return posts ? posts : []
}