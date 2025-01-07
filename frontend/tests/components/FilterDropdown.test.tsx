import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FilterDropdown from "../../src/components/FilterDropdown";
import {filterTags} from "../../src/data/MenuData";

describe('FilterDropdown', () => {
    it('should render the correct icon button when shown', () => {
        render(<FilterDropdown filterConditions={[]} setFilterConditions={vi.fn()}/>)

        const iconButton = screen.getByTestId("FilterAltIcon")
        expect(iconButton).toBeInTheDocument()
    })

    it('should show the input and all the filter tags when icon button is clicked', async () => {
        render(<FilterDropdown filterConditions={[]} setFilterConditions={vi.fn()}/>)

        const iconButton = screen.getByTestId("FilterAltIcon")
        const user = userEvent.setup()

        await user.click(iconButton)
        const textField = screen.getByLabelText("Filter by")
        expect(textField).toBeInTheDocument()

        await user.click(textField)
        filterTags.forEach(tag => {
            expect(screen.getByText(tag)).toBeInTheDocument()
        })
    })
})