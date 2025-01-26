import {render, screen} from '@testing-library/react';
import LoggedInUserOptions from '../../../../src/components/NavBar/LoggedInUserOptions/LoggedInUserOptions.tsx'

describe('LoggedInUserOptions', () => {
    it('should render the options available to logged in user properly', () => {
        render(<LoggedInUserOptions/>)

        expect(screen.getByTestId('AddBoxIcon')).toBeInTheDocument()
        expect(screen.getByTestId('AccountCircleIcon')).toBeInTheDocument()
    })
})