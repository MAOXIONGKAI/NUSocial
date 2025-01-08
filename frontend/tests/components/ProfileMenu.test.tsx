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

        expect(screen.getByText("My Profile")).toBeInTheDocument()
        expect(screen.getByText('Favorite')).toBeInTheDocument()
        expect(screen.getByText('Night Mode')).toBeInTheDocument()
        expect(screen.getByText('Report Issue')).toBeInTheDocument()
        expect(screen.getByText('Log Out')).toBeInTheDocument()

        expect(screen.getByRole('listitem')).toHaveTextContent("Welcome")
        expect(screen.getAllByTestId("PersonIcon")).not.toHaveLength(0)
        expect(screen.getByTestId('FavoriteIcon')).toBeInTheDocument()
        expect(screen.getByTestId('Brightness4Icon')).toBeInTheDocument()
        expect(screen.getByTestId('BugReportIcon')).toBeInTheDocument()
        expect(screen.getByTestId('LogoutIcon')).toBeInTheDocument()
    })
})