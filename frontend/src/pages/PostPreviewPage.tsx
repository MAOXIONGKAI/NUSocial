import Post from "../types/Post.ts";
import PostPreviewList from "../components/PostPreviewList.tsx";

type PostPreviewPageProps = {
    posts: Post[]
}

export default function PostPreviewPage({posts}: PostPreviewPageProps) {
    return (
        <>
            <PostPreviewList posts={posts} />
        </>
    )
}