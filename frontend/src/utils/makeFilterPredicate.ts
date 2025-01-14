import Post from "../types/Post.ts";

type PostPredicate = (post: Post) => boolean;

export default function makeFilterPredicate(tags: string[]): PostPredicate {
    function test(post: Post) {
        if (tags.length === 0) {
            return true
        }
        const tagsInLowerCase = tags.map(tag => tag.toLowerCase())
        for (const tag of post.tags) {
            if (tagsInLowerCase.indexOf(tag) !== -1) {
                return true
            }
        }
        return false
    }
    return test
}