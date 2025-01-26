import {render, screen} from '@testing-library/react';
import CommentSection from "../../../src/components/Comment/CommentSection.tsx";
import {post1} from "../../sampleData/PostData.ts";

describe('CommentSection', () => {
    it('should render No Comment Notice if empty', () => {
        render(<CommentSection post={post1} comments={[]} updatePosts={vi.fn()}/>)

        expect(screen.getByAltText("Background when no comments in the comment section"))
            .toBeInTheDocument()
    })

    it('should render End of Comment Notice and list of comments if not empty', () => {
        render(<CommentSection post={post1} comments={[1]} updatePosts={vi.fn()}/>)

        expect(screen.getByAltText("Image indicating the end of content list"))
            .toBeInTheDocument()
        expect(screen.getByTestId("PersonIcon")).toBeInTheDocument() // Testing Avatar in Comment Component
        expect(screen.queryByAltText("Background when no comments in the comment section"))
            .not.toBeInTheDocument()
    })
})
