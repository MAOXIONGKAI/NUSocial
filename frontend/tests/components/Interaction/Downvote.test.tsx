import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event'
import {post1} from "../../sampleData/PostData.ts";
import {UserContext} from "../../../src/contexts/UserContext.tsx";
import {user1} from "../../sampleData/UserData.ts";
import Downvote from "../../../src/components/Interactions/Downvote.tsx";

describe('Downvote', () => {
    it('should render the off icon when first shown', () => {
        render(<Downvote
            post={post1}
            upvoted={false}
            setUpvoted={vi.fn()}
            downvoted={false}
            setDownvoted={vi.fn()}
            downvoteCount={post1.downvotes.length}
            setUpvoteCount={vi.fn()}
            setDownvoteCount={vi.fn()}/>
        )
        expect(screen.getByTestId("ThumbDownOffAltIcon")).toBeInTheDocument()
    })

    it('should be disabled if user is not logged in', () => {
        render(
            <Downvote
                post={post1}
                upvoted={false}
                setUpvoted={vi.fn()}
                downvoted={false}
                setDownvoted={vi.fn()}
                downvoteCount={post1.downvotes.length}
                setUpvoteCount={vi.fn()}
                setDownvoteCount={vi.fn()}/>
        )
        expect(screen.getByRole("button")).toBeDisabled()
    })

    it('should be enabled when user is logged in', () => {
        render(
            <UserContext.Provider value={[user1, vi.fn()]}>
                <Downvote
                    post={post1}
                    upvoted={false}
                    setUpvoted={vi.fn()}
                    downvoted={false}
                    setDownvoted={vi.fn()}
                    downvoteCount={post1.downvotes.length}
                    setUpvoteCount={vi.fn()}
                    setDownvoteCount={vi.fn()}
                />
            </UserContext.Provider>
        )
        expect(screen.getByRole("button")).toBeEnabled()
    })

    it('should be toggled to on status when user is logged in and clicked it', async () => {
        const setUpvotedMock = vi.fn()
        const setDownvotedMock = vi.fn()
        const setUpvoteCountMock = vi.fn()
        const setDownvoteCountMock = vi.fn()
        render(
            <UserContext.Provider value={[user1, vi.fn()]}>
                <Downvote
                    post={post1}
                    upvoted={false}
                    setUpvoted={setUpvotedMock}
                    downvoted={false}
                    setDownvoted={setDownvotedMock}
                    downvoteCount={post1.downvotes.length}
                    setUpvoteCount={setUpvoteCountMock}
                    setDownvoteCount={setDownvoteCountMock}
                />
            </UserContext.Provider>
        )
        const button = screen.getByRole("button")
        const user = userEvent.setup()
        await user.click(button)

        expect(setUpvotedMock).toHaveBeenCalledTimes(0)
        expect(setDownvotedMock).toHaveBeenCalledTimes(1)
        expect(setUpvoteCountMock).toHaveBeenCalledTimes(0)
        expect(setDownvoteCountMock).toHaveBeenCalledTimes(1)
    })

    it('should toggle upvote when it is clicked while the post is already upvoted', async () => {
        const setUpvotedMock = vi.fn()
        const setDownvotedMock = vi.fn()
        const setUpvoteCountMock = vi.fn()
        const setDownvoteCountMock = vi.fn()
        render(
            <UserContext.Provider value={[user1, vi.fn()]}>
                <Downvote
                    post={post1}
                    upvoted={true}
                    setUpvoted={setUpvotedMock}
                    downvoted={false}
                    setDownvoted={setDownvotedMock}
                    downvoteCount={post1.downvotes.length}
                    setUpvoteCount={setUpvoteCountMock}
                    setDownvoteCount={setDownvoteCountMock}
                />
            </UserContext.Provider>
        )
        const button = screen.getByRole("button")
        const user = userEvent.setup()
        await user.click(button)

        expect(setUpvotedMock).toHaveBeenCalledTimes(1)
        expect(setDownvotedMock).toHaveBeenCalledTimes(1)
        expect(setUpvoteCountMock).toHaveBeenCalledTimes(1)
        expect(setDownvoteCountMock).toHaveBeenCalledTimes(1)
    })
})
