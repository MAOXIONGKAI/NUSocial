import {render, screen} from '@testing-library/react';
import PostPreview from "../../../src/components/Post/PostPreview.tsx";
import Post from "../../../src/types/Post.ts";

const post: Post = {
    id: 1,
    author: "MAO XIONGKAI",
    category: "CCA",
    tags: ["Discussion", "Question"],
    title: "This is a test",
    body: "Is everything working properly",
    upvotes: [],
    downvotes: [],
    comments: [],
    created_at: new Date()
}

describe('PostPreview', () => {
    it('should render author, title, body and reaction when shown', () => {
        render(<PostPreview post={post} updatePosts={vi.fn()}/>)

        expect(screen.getByText(post.author)).toBeInTheDocument()
        expect(screen.getByText(post.title)).toBeInTheDocument()
        expect(screen.getByText(post.body)).toBeInTheDocument()
        expect(screen.getByTestId("ThumbUpOffAltIcon")).toBeInTheDocument()
        expect(screen.getByTestId("ThumbDownOffAltIcon")).toBeInTheDocument()
        expect(screen.getByTestId("QuestionAnswerOutlinedIcon")).toBeInTheDocument()
    })
})
