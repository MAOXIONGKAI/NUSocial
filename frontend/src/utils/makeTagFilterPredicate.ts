import Post from "../types/Post.ts";

type PostPredicate = (post: Post) => boolean;

export default function makeTagFilterPredicate(tags: string[]): PostPredicate {
    function test(post: Post) {
        if (tags.length === 0) {
            return true
        }
        for (const tag of post.tags) {
            if (tags.indexOf(tag) !== -1) {
                return true
            }
        }
        return false
    }
    return test
}