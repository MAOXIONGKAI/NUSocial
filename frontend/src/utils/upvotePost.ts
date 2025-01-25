import axios from "axios";
import {backendURL} from "../data/Config.ts";

export default function upvotePost(postId: number, username: string) {
    axios.post(`${backendURL}/api/posts/upvote/${postId}`, {username: username})
        .catch(err => console.log("Error when handling post upvote status: "
            + err.response?.data))
}
