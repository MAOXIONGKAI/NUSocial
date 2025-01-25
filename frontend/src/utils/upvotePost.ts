import axios from "axios";
const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function upvotePost(postId: number, username: string) {
    axios.post(`${backendURL}/api/posts/upvote/${postId}`, {username: username})
        .catch(err => console.log("Error when handling post upvote status: "
            + err.response?.data))
}
