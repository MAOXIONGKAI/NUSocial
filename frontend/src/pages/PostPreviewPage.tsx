import Post from "../types/Post.ts";
import PostPreviewList from "../components/PostPreviewList.tsx";
import NoPostForPreview from "../components/NoPostForPreview.tsx";

type PostPreviewPageProps = {
    posts: Post[];
    updatePosts: () => void;
}

export default function PostPreviewPage({posts, updatePosts}: PostPreviewPageProps) {
    return (
        <>
            {(posts && posts.length > 0)
                ? <PostPreviewList posts={posts} updatePosts={updatePosts} />
                : <NoPostForPreview/>
            }
        </>
    )
}