import {TextField, MenuItem} from '@mui/material'

type Props = {
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
}

export default function SortDropdown({
    sortCondition,
    setSortCondition,
                                     }: Props) {
    const sortOptions = ["latest", "oldest", "most upvotes", "most interactions"]

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setSortCondition(e.target.value);
    }

    return (
        <TextField
            select
            sx={{
                width: "50%",
            }}
            size="small"
            label="Sort by"
            id="sort-dropdown-menu"
            value={sortCondition}
            onChange={handleChange}
        >
            {sortOptions.map(option =>
                <MenuItem key={option} value={option}>{option}</MenuItem>
            )}
        </TextField>
    )
}