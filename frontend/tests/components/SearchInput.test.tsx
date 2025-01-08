import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchInput from "../../src/components/SearchInput";

describe('SearchInput', () => {
    it('should render the input text field when shown', () => {
        render(<SearchInput searchKeyword={""} setSearchKeyword={vi.fn()}/>)

        expect(screen.getByRole('textbox'))
            .toHaveAttribute("placeholder", expect.stringMatching(/search post/i))
    })

    it('should updates its value when user types in it', async () => {
        const setSearchKeywordMock = vi.fn()
        render(<SearchInput searchKeyword={""} setSearchKeyword={setSearchKeywordMock}/>)

        const user = userEvent.setup()
        const input = screen.getByRole('textbox')
        const message = "Hello world"
        await user.type(input, message)

        expect(setSearchKeywordMock).toHaveBeenCalledTimes(message.length)
        message.split('').forEach((char) =>
            expect(setSearchKeywordMock).toHaveBeenCalledWith(char))
    })
})