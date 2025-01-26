import {render, screen} from '@testing-library/react';
import NoMoreContent from "../../../src/components/Utils/NoMoreContent.tsx";

describe('NoMoreContent', () => {
    it('should render the image correctly with the text', () => {
        render(<NoMoreContent/>)

        expect(screen.getByAltText("Image indicating the end of content list"))
            .toBeInTheDocument()
        expect(screen.getByText("Oops...You have reached the end")).toBeInTheDocument()
    })
})
