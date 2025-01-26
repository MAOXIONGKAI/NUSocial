import {render, screen} from '@testing-library/react'
import NoPostForPreview from "../../../src/components/Utils/NoPostForPreview.tsx";

describe('NoPostForPreview', () => {
    it('should render out the image and text properly', () => {
        render(<NoPostForPreview/>)
        expect(screen.getByAltText("NoPostForPreview")).toBeInTheDocument()
        expect(screen.getByRole("paragraph")).toHaveTextContent(/no post/i)
    })
})