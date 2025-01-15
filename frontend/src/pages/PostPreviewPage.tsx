import Post from "../types/Post.ts";
import PostPreviewList from "../components/PostPreviewList.tsx";
import NoPostForPreview from "../components/NoPostForPreview.tsx";

type PostPreviewPageProps = {
    posts: Post[]
}

export default function PostPreviewPage({posts}: PostPreviewPageProps) {
    return (
        <>
            {(posts && posts.length > 0)
                ? <PostPreviewList posts={posts}/>
                : <NoPostForPreview/>
            }
        </>
    )
}