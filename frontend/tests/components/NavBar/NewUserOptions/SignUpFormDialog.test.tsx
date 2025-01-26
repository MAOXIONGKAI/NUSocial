import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SignUpFormDialog from "../../../../src/components/NavBar/NewUserOptions/SignUpFormDialog.tsx";

describe('SignUpFormDialog', () => {
    it('should render the sign up button without the form when shown', () => {
        render(<SignUpFormDialog/>)

        expect(screen.getByRole('button')).toHaveTextContent(/Sign Up/i)
    })

    it('should render the sign up form when button is clicked', async () => {
        render(<SignUpFormDialog/>)

        const user = userEvent.setup()
        const button = screen.getByRole('button', {name: /sign up/i})
        await user.click(button)

        expect(screen.getByLabelText('Username')).toBeInTheDocument()
        expect(screen.getByLabelText('Password')).toBeInTheDocument()
        expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
    })
})