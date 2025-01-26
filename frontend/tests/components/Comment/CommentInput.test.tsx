import {render, screen} from '@testing-library/react';
import CommentInput from "../../../src/components/Comment/CommentInput.tsx";
import userEvent from "@testing-library/user-event";
import {UserContext} from "../../../src/contexts/UserContext.tsx";
import {user1} from "../../sampleData/UserData.ts";

describe('CommentInput', () => {
    it('should show the textbox only when first shown', () => {
        render(<CommentInput postId={1} refreshComments={vi.fn()} updatePosts={vi.fn()}/>)

        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.queryByText("Submit")).not.toBeInTheDocument()
        expect(screen.queryByText("Cancel")).not.toBeInTheDocument()
    })

    it('should remain showing the textbox only when new user clicks it', async () => {
        render(<CommentInput postId={1} refreshComments={vi.fn()} updatePosts={vi.fn()}/>)

        const input = screen.getByRole("textbox")
        const user = userEvent.setup()
        await user.click(input)

        expect(input).toBeInTheDocument()
        expect(screen.queryByText("Submit")).not.toBeInTheDocument()
        expect(screen.queryByText("Cancel")).not.toBeInTheDocument()
    })

    it('should showing the submit and cancel buttons when logged in user clicks it', async () => {
        render(
            <UserContext.Provider value={[user1, vi.fn()]}>
                <CommentInput postId={1} refreshComments={vi.fn()} updatePosts={vi.fn()}/>
            </UserContext.Provider>
        )

        const input = screen.getByRole("textbox")
        const user = userEvent.setup()
        await user.click(input)

        expect(input).toBeInTheDocument()
        expect(screen.queryByText("Submit")).toBeInTheDocument()
        expect(screen.queryByText("Cancel")).toBeInTheDocument()
    })
})
