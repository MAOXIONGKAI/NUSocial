import {render, screen} from '@testing-library/react';
import NewUserOptions from "../../../../src/components/NavBar/NewUserOptions/NewUserOptions.tsx";

describe('NewUserOptions', () => {
    it('should render the sign up and login button when shown', () => {
        render(<NewUserOptions/>)

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
        expect(screen.getByRole('button', {name: /sign up/i})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument()
    })
})