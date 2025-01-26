import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import PostCreationDialog from "../../../../src/components/NavBar/LoggedInUserOptions/PostCreationDialog.tsx";

describe('PostCreationDialog', () => {
    it('should render the correct icon button when shown', () => {
        render(<PostCreationDialog/>)

        expect(screen.getByTestId('AddBoxIcon')).toBeInTheDocument()
    })

    it('should render the form when icon button is clicked', async () => {
        render(<PostCreationDialog/>)

        const iconButton = screen.getByTestId('AddBoxIcon')
        const user = userEvent.setup()
        await user.click(iconButton)

        expect(screen.getByText("Create New Post")).toBeInTheDocument()
        expect(screen.getByLabelText("Title")).toBeInTheDocument()
        expect(screen.getByLabelText("Category")).toBeInTheDocument()
        expect(screen.getByLabelText("Filter by")).toBeInTheDocument()
        expect(screen.getByLabelText("Body")).toBeInTheDocument()
        expect(screen.getByText("Cancel")).toBeInTheDocument()
        expect(screen.getByText("Submit")).toBeInTheDocument()
    })
})