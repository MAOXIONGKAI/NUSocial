import Post from "../types/Post.ts";

export default function makeCategoryFilterPredicate(category: string) {
    function test(post: Post) {
        if (!category) {
            return true
        } else {
            return post.category === category
        }
    }
    return test
}