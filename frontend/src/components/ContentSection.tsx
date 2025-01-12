import Post from '../types/Post'
import PostPreviewPage from "../pages/PostPreviewPage.tsx";
import {Box} from "@mui/material";
type ContentSectionProps = {
    posts: Post[];
}

export default function ContentSection({posts}: ContentSectionProps) {
    return (
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 66px)",
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '&-ms-overflow-style:': {
                display: 'none',
            },
        }}>
            <PostPreviewPage posts={posts} />
        </Box>
    )
}