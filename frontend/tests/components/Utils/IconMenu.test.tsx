import {render, screen} from '@testing-library/react';
import IconMenu from "../../../src/components/Utils/IconMenu.tsx";
import IconMenuItemLayout from "../../../src/types/IconMenuItemLayout.tsx";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import {expect} from "vitest";

describe('IconMenu', () => {
    it('should render header as listsubheader, and no menuitem if no layout is given', () => {
        render(<IconMenu header="Hello World" setSelectedOption={vi.fn()} layoutList={[]}/>)

        expect(screen.getByRole("listitem")).toHaveTextContent("Hello World");
        expect(screen.queryByRole("menuitem")).not.toBeInTheDocument()
    })

    it('should not render any list item or menu item if nothing is provided', () => {
        render(<IconMenu setSelectedOption={vi.fn()} layoutList={[]}/>)

        expect(screen.queryByRole("listitem")).not.toBeInTheDocument()
        expect(screen.queryByRole("menuitem")).not.toBeInTheDocument()
    })

    const layouts: IconMenuItemLayout[] = [
        {text: "Home", Icon: HomeIcon},
        {text: "Favorites", Icon: FavoriteIcon},
        {text: "Emoji", Icon: EmojiObjectsIcon},
    ]
    it('should not render any list item if only layouts are provided', () => {
        render(<IconMenu setSelectedOption={vi.fn()} layoutList={layouts}/>)

        expect(screen.queryByRole("listitem")).not.toBeInTheDocument()
        layouts.map(layout => {
            expect(screen.getByText(layout.text)).toBeInTheDocument()
        })

        expect(screen.getByTestId("HomeIcon")).toBeInTheDocument()
        expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument()
        expect(screen.getByTestId("EmojiObjectsIcon")).toBeInTheDocument()
    })

    it('should render the given header, and layout properly', () => {
        render(<IconMenu header="Test IconMenu" setSelectedOption={vi.fn()} layoutList={layouts}/>)

        expect(screen.getByRole("listitem")).toHaveTextContent("Test IconMenu")
        layouts.map(layout => {
            expect(screen.getByText(layout.text)).toBeInTheDocument()
        })

        expect(screen.getByTestId("HomeIcon")).toBeInTheDocument()
        expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument()
        expect(screen.getByTestId("EmojiObjectsIcon")).toBeInTheDocument()
    })
})