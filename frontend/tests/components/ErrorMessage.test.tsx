import {render, screen} from "@testing-library/react";
import ErrorMessage from "../../src/components/ErrorMessage.tsx";

describe('ErrorMessage', () => {
    it('should display the correct error message when shown', () => {
        render(<ErrorMessage message={"This is an error message"}/>)

        expect(screen.getByRole('paragraph'))
            .toHaveTextContent("This is an error message")
    })
})
