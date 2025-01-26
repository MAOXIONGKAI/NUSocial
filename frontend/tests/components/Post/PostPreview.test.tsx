import {render, screen} from '@testing-library/react';
import PostPreview from "../../../src/components/Post/PostPreview.tsx";
import {post1} from "../../sampleData/PostData.ts"

describe('PostPreview', () => {
    it('should render author, title, body and reaction when shown', () => {
        render(<PostPreview post={post1} updatePosts={vi.fn()}/>)

        expect(screen.getByText(post1.author)).toBeInTheDocument()
        expect(screen.getByText(post1.title)).toBeInTheDocument()
        expect(screen.getByText(post1.body)).toBeInTheDocument()
        expect(screen.getByTestId("ThumbUpOffAltIcon")).toBeInTheDocument()
        expect(screen.getByTestId("ThumbDownOffAltIcon")).toBeInTheDocument()
        expect(screen.getByTestId("QuestionAnswerOutlinedIcon")).toBeInTheDocument()
    })
})
