import {render, screen} from "@testing-library/react";
import Reaction from "../../../src/components/Interactions/Reaction.tsx";
import {post1} from "../../sampleData/PostData.ts";

it("should render the correct icon when shown and has one comment", () => {
    render(<Reaction post={post1}/>)

    expect(screen.getByTestId("ThumbUpOffAltIcon")).toBeInTheDocument()
    expect(screen.getByTestId("ThumbDownOffAltIcon")).toBeInTheDocument()
    expect(screen.getByTestId("QuestionAnswerOutlinedIcon")).toBeInTheDocument()
    expect(screen.getAllByText("0")).toHaveLength(3)
})
