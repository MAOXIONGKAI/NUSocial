import {render, screen} from "@testing-library/react";
import PostPage from "../../../../src/components/ContentSection/pages/PostPage.tsx";
import {post1} from "../../../sampleData/PostData.ts";

it("should not show anything when not opened", () => {
    render(<PostPage post={post1} updatePosts={vi.fn()} open={false} onClose={vi.fn()}/>)

    expect(screen.queryByText(post1.title)).not.toBeInTheDocument()
})

it("should show the post detail when opened", () => {
    render(<PostPage post={post1} updatePosts={vi.fn()} open={true} onClose={vi.fn()}/>)

    expect(screen.getByText(post1.author)).toBeInTheDocument()
    expect(screen.getByText(post1.category)).toBeInTheDocument()
    expect(screen.getByText(post1.title)).toBeInTheDocument()
    expect(screen.getByText(post1.body)).toBeInTheDocument()

    post1.tags.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument()
    })
})
