import {render, screen} from '@testing-library/react';
import DeleteCommentButton from "../../../src/components/Comment/DeleteCommentButton.tsx";

describe("DeleteCommentButton", () => {
    it("should render the correct icon when shown", () => {
        render(<DeleteCommentButton commentId={1} updatePosts={vi.fn()} refreshComments={vi.fn()}/>)

        expect(screen.getByTestId("DeleteIcon")).toBeInTheDocument()
    })
})
