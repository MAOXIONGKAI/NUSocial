import {render, screen} from "@testing-library/react";
import SideBar from "../../src/components/SideBar";
import {categoryMenuOptions} from "../../src/data/MenuData";
import {expect} from "vitest";

const propsMock = {
    setCategoryCondition: vi.fn(),
}

describe('SideBar', () => {
    it('should render all the section and category options properly', () => {
        render(<SideBar categoryCondition="" {...propsMock} />)

        // Testing presence of option text
        categoryMenuOptions.map(option => {
            expect(screen.getByText(option.text)).toBeInTheDocument()
        })

        // Testing presence of Icons
        expect(screen.getByTestId("MenuBookIcon")).toBeInTheDocument() // Study
        expect(screen.getByTestId("Diversity1Icon")).toBeInTheDocument() // CCA
        expect(screen.getByTestId("LocationCityIcon")).toBeInTheDocument() // Campus
        expect(screen.getByTestId("AccountBalanceIcon")).toBeInTheDocument() // Residence
        expect(screen.getByTestId("Diversity3Icon")).toBeInTheDocument() // Social
        expect(screen.getByTestId("FaxIcon")).toBeInTheDocument() // Admin
        expect(screen.getByTestId("WorkIcon")).toBeInTheDocument() // Career
        expect(screen.getByTestId("TipsAndUpdatesIcon")).toBeInTheDocument() // Others
    })
})