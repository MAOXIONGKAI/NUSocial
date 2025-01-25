import {useEffect, useState} from "react";
import axios from "axios";
import CommentType from "../types/Comment";
import Comment from "../types/Comment";
const backendURL = process.env.REACT_APP_BACKEND_URL;

type ReturnType = CommentType | null

// Creation date in returned post objects are date string
// This functions accepts the value returned from backend
// and convert the date string to JS Date object for easier date handling
function parseCreationDate(comment: Comment): ReturnType {
    return {
        ...comment,
        created_at: new Date(comment.created_at)}
}

export default function useComments(id: number): CommentType | null {
    const [comment, setComment] = useState<CommentType | null>(null);

    useEffect(() => {
        axios.get(`${backendURL}/api/comments/${id}`)
            .then(res => setComment(parseCreationDate(res.data)))
            .catch(err => console.log(err.response?.data))
    }, [id]);

    return comment;
}
