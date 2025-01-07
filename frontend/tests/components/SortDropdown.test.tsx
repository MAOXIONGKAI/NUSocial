import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortDropdown from "../../src/components/SortDropdown";
import {sortMenuOptions} from "../../src/data/MenuData";

describe('SortDropdown', () => {
    it('should render the sort icon when shown', () => {
        render(<SortDropdown sortCondition={""} setSortCondition={vi.fn()}/>)

        expect(screen.getByTestId('SwapVertIcon')).toBeInTheDocument()
    })

    it('should render the sort option menu properly when icon button is clicked', async () => {
        render(<SortDropdown sortCondition={""} setSortCondition={vi.fn()}/>)

        const button = screen.getByRole('button')
        const user = userEvent.setup()
        await user.click(button)

        sortMenuOptions.forEach(layout => {
            expect(screen.getByText(layout.text)).toBeInTheDocument()
        })
        expect(screen.getByTestId('UpdateIcon')).toBeInTheDocument()
        expect(screen.getByTestId('HistoryIcon')).toBeInTheDocument()
        expect(screen.getByTestId('ThumbUpIcon')).toBeInTheDocument()
        expect(screen.getByTestId('InsightsIcon')).toBeInTheDocument()
    })

    it('should update sort condition when the corresponding option is clicked', async () => {
        const setSortConditionMock = vi.fn()
        render(<SortDropdown sortCondition={""} setSortCondition={setSortConditionMock}/>)

        const menuButton = screen.getByRole('button')
        const user = userEvent.setup()

        for (const layout of sortMenuOptions) {
            await user.click(menuButton)
            const menuOption = screen.getByText(layout.text)
            await user.click(menuOption)
            expect(setSortConditionMock).toHaveBeenLastCalledWith(layout.text)
        }
    })
})