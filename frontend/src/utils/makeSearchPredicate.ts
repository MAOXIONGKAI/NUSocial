import Post from "../types/Post.ts";

export default function makeSearchPredicate(keyword: string) {
    function test(post: Post) {
        if (!keyword) {
            return true
        } else {
            return post.title.toLowerCase().includes(keyword.toLowerCase())
                || post.body.toLowerCase().includes(keyword.toLowerCase())
        }
    }

    return test
}