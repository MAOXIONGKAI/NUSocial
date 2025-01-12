import Post from '../types/Post'
import PostPreviewPage from "../pages/PostPreviewPage.tsx";
type ContentSectionProps = {
    posts: Post[];
}

export default function ContentSection({posts}: ContentSectionProps) {
    return (
        <>
            <PostPreviewPage posts={posts} />
        </>
    )
}