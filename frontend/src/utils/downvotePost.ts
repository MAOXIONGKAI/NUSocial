import axios from "axios";
import {backendURL} from "../data/Config.ts";

export default function downvotePost(postId: number, username: string) {
    axios.post(`${backendURL}/api/posts/downvote/${postId}`, {username: username})
        .catch(err => console.log("Error when handling post downvote status: "
            + err.response?.data))
}
