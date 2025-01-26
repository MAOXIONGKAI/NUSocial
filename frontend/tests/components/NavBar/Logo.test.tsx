import {render, screen} from '@testing-library/react';
import Logo from "../../../src/components/NavBar/Logo.tsx";

describe("Logo", () => {
    it("should render the logo image properly", () => {
        render(<Logo/>)
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("src", "/src/assets/logo.png")
        expect(image).toHaveAttribute("alt", "NUSocial Logo");
    })
})