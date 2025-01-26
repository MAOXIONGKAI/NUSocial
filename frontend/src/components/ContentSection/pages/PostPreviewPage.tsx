import Post from "../../../types/Post.ts";
import PostPreviewList from "../../Post/PostPreviewList.tsx";
import NoPostForPreview from "../../Utils/NoPostForPreview.tsx";

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