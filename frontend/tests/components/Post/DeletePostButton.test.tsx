import {render, screen} from "@testing-library/react";
import DeletePostButton from "../../../src/components/Post/DeletePostButton.tsx";

describe('DeletePostButton', () => {
    it('should render the correct icon when shown', () => {
        render(<DeletePostButton postId={1} updatePosts={vi.fn()}/>)

        expect(screen.getByTestId("DeleteIcon")).toBeInTheDocument()
    })
})
