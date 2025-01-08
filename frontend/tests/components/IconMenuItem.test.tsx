import {render, screen} from '@testing-library/react';
import IconMenuItem from "../../src/components/IconMenuItem";
import IconMenuItemLayout from "../../src/types/IconMenuItemLayout";
import WavingHandIcon from '@mui/icons-material/WavingHand';

const layout: IconMenuItemLayout = {
    text: "Hello",
    Icon: WavingHandIcon
}
describe('IconMenuItem', () => {
    it('should render the icon with the correct text', () => {
        render(<IconMenuItem layout={layout} setSelectedOption={vi.fn()}/>)

        expect(screen.getByRole("menuitem")).toHaveTextContent("Hello")
        expect(screen.getByTestId("WavingHandIcon")).toBeInTheDocument()
    })
})