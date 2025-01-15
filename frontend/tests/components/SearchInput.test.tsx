import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchInput from "../../src/components/SearchInput";

describe('SearchInput', () => {
    it('should render the input text field when shown', () => {
        render(<SearchInput setSearchKeyword={vi.fn()}/>)

        expect(screen.getByRole('textbox'))
            .toHaveAttribute("placeholder", expect.stringMatching(/search post/i))
    })

    it('should updates its value when user types in it', async () => {
        const setSearchKeywordMock = vi.fn()
        render(<SearchInput setSearchKeyword={setSearchKeywordMock}/>)

        const user = userEvent.setup()
        const input = screen.getByRole('textbox')
        const message = "Hello world"
        await user.type(input, message)

        expect(input).toHaveValue(message)
    })

    it('should updates the search keyword properly when enter key is pressed', async () => {
        const setSearchKeywordMock = vi.fn()
        render(<SearchInput setSearchKeyword={setSearchKeywordMock}/>)

        const user = userEvent.setup()
        const input = screen.getByRole('textbox')
        const message = "Goodbye World"
        await user.type(input, message)
        await user.keyboard('{Enter}')

        expect(setSearchKeywordMock).toHaveBeenCalledTimes(1)
        expect(setSearchKeywordMock).toHaveBeenCalledWith(message)
    })
})