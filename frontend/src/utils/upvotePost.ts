import axios from "axios";

export default function upvotePost(postId: number, username: string) {
    axios.post(`http://localhost:8080/api/posts/upvote/${postId}`, {username: username})
        .catch(err => console.log("Error when handling post upvote status: "
            + err.response?.data))
}
