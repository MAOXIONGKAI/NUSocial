import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchInput from "../../src/components/SearchInput";

describe('SearchInput', () => {
    it('should render the input text field when shown', () => {
        render(<SearchInput/>)

        expect(screen.getByRole('textbox'))
            .toHaveAttribute("placeholder", expect.stringMatching(/search post/i))
    })

    it('should updates its value when user types in it', async () => {
        render(<SearchInput/>)

        const user = userEvent.setup()
        const input = screen.getByRole('textbox')
        const message = "Hello world"
        await user.type(input, message)

        expect(input).toHaveValue("Hello world")
    })
})