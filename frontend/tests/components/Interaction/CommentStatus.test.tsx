import {render, screen} from '@testing-library/react';
import CommentStatus from "../../../src/components/Interactions/CommentStatus.tsx";

describe("CommentStatus", () => {
    it("should render the correct icon when shown and empty", () => {
        render(<CommentStatus comments={[]}/>)

        expect(screen.getByTestId("QuestionAnswerOutlinedIcon")).toBeInTheDocument()
        expect(screen.getByRole("paragraph")).toHaveTextContent("0")
    })

    it("should render the correct icon when shown and has one comment", () => {
        render(<CommentStatus comments={[1]}/>)

        expect(screen.getByTestId("QuestionAnswerOutlinedIcon")).toBeInTheDocument()
        expect(screen.getByRole("paragraph")).toHaveTextContent("1")
    })

    it("should render the correct icon when shown and has multiple comments", () => {
        render(<CommentStatus comments={[1,2,3]}/>)

        expect(screen.getByTestId("QuestionAnswerOutlinedIcon")).toBeInTheDocument()
        expect(screen.getByRole("paragraph")).toHaveTextContent("3")
    })
})
