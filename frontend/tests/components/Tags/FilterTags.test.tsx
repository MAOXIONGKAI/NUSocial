import {render, screen} from '@testing-library/react';
import FilterTags from "../../../src/components/Tags/FilterTags.tsx";

describe('FilterTags', () => {
    it('should render the tags correctly', () => {
        render(<FilterTags tags={["Tag1", "Tag2", "Tag3"]}/>)
        expect(screen.getByText("Tag1")).toBeInTheDocument()
        expect(screen.getByText("Tag2")).toBeInTheDocument()
        expect(screen.getByText("Tag3")).toBeInTheDocument()
    })
})
