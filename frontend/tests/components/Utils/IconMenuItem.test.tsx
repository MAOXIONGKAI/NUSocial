import {render, screen} from '@testing-library/react';
import IconMenuItem from "../../../src/components/Utils/IconMenuItem.tsx";
import IconMenuItemLayout from "../../../src/types/IconMenuItemLayout.tsx";
import WavingHandIcon from '@mui/icons-material/WavingHand';

const layout: IconMenuItemLayout = {
    text: "Hello",
    Icon: WavingHandIcon
}
describe('IconMenuItem', () => {
    it('should render the icon with the correct text', () => {
        render(<IconMenuItem layout={layout} selectedOption="" setSelectedOption={vi.fn()}/>)

        expect(screen.getByRole("menuitem")).toHaveTextContent("Hello")
        expect(screen.getByTestId("WavingHandIcon")).toBeInTheDocument()
    })
})