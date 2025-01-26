import {render, screen} from '@testing-library/react';
import TimeFromNow from "../../../src/components/Utils/TimeFromNow.tsx";

describe('TimeFromNow', () => {
    it('should show "now" when first rendered', () => {
        render(<TimeFromNow date={new Date()}/>)
        expect(screen.getByRole("paragraph")).toHaveTextContent(/Now/i)
    })
})
