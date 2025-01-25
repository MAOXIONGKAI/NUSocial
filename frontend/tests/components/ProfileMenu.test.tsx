import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileMenu from "../../src/components/ProfileMenu";

describe('ProfileMenu', () => {
    it('should render the correct icon button when shown', () => {
        render(<ProfileMenu/>)

        expect(screen.getByTestId('AccountCircleIcon')).toBeInTheDocument();
    })

    it('should render the all available user actions when clicked', async () => {
        render(<ProfileMenu/>)

        const iconButton = screen.getByTestId('AccountCircleIcon')
        const user = userEvent.setup()
        await user.click(iconButton)

        expect(screen.getByText('Log Out')).toBeInTheDocument()

        expect(screen.getByRole('listitem')).toHaveTextContent("Welcome")
        expect(screen.getByTestId('LogoutIcon')).toBeInTheDocument()
    })
})