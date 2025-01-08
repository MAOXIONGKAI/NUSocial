import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import LoginFormDialog from "../../src/components/LoginFormDialog";

describe('LoginFormDialog', () => {
    it('should render the login button when shown', () => {
        render(<LoginFormDialog/>)

        expect(screen.getByRole('button')).toHaveTextContent(/login/i)
    })

    it('should render the login form when button is clicked', async() => {
        render(<LoginFormDialog/>)

        const user = userEvent.setup()
        const button = screen.getByRole('button', {name: /login/i})
        await user.click(button)

        expect(screen.getByLabelText('Username')).toBeInTheDocument()
        expect(screen.getByLabelText('Password')).toBeInTheDocument()
    })
})