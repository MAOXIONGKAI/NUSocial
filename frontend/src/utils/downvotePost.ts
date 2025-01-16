import axios from "axios";

export default function downvotePost(postId: number, username: string) {
    axios.post(`http://localhost:8080/api/posts/downvote/${postId}`, {username: username})
        .catch(err => console.log("Error when handling post downvote status: "
            + err.response?.data))
}
