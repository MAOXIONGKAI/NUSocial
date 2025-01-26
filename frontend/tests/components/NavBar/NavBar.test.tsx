import {render, screen} from '@testing-library/react'
import NavBar from "../../../src/components/NavBar/NavBar.tsx";
import {expect} from "vitest";

const propsMock = {
    searchKeyword: "",
    setSearchKeyword: vi.fn(),
    filterConditions: [],
    setFilterConditions: vi.fn(),
    sortCondition: "",
    setSortCondition: vi.fn()
}

describe('NavBar', () => {
    it('should render the Logo when shown', () => {
        render(<NavBar {...propsMock} />)

        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("src", "/src/assets/logo.png")
        expect(image).toHaveAttribute("alt", "NUSocial Logo")
    })

    it('should render the search keyword input field when shown', () => {
        render(<NavBar {...propsMock}/>)

        const searchKeywordInput = screen.getByPlaceholderText(/search post/i)
        expect(searchKeywordInput).toBeInTheDocument()
    })

    it('should render the filter condition selection dropdown when shown', () => {
        render(<NavBar {...propsMock} />)

        const filterConditionDropdown = screen.getByTestId("FilterAltIcon")
        expect(filterConditionDropdown).toBeInTheDocument()
    })

    it('should render the sort condition selection dropdown when shown', () => {
        render(<NavBar {...propsMock} />)

        const sortConditionDropdown = screen.getByTestId("SwapVertIcon")
        expect(sortConditionDropdown).toBeInTheDocument()
    })
})