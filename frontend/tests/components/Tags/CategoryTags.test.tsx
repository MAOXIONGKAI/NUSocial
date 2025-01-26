import {render, screen} from '@testing-library/react';
import CategoryTag from "../../../src/components/Tags/CategoryTag.tsx";

describe('CategoryTag', () => {
    it('should render the correct text', () => {
        render(<CategoryTag text="Hello World"/>)
        expect(screen.getByText("Hello World")).toBeInTheDocument()
    })
})
