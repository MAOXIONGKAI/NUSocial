import {Autocomplete, TextField} from '@mui/material'
import {SyntheticEvent} from "react";

type Props = {
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
}

export default function FilterDropdown({
    filterConditions,
    setFilterConditions,
                                       }: Props) {
    const filterTags = ["Discussion", "Guide", "Asking for Help", "Question",
    "Rant", "Meme", "Emergency", "Others"]

    function handleChange(_: SyntheticEvent<Element, Event>, newValue: string[]) {
        setFilterConditions(newValue);
    }

    return (
        <Autocomplete
            multiple
            freeSolo
            disableCloseOnSelect
            sx={{
                width: "50%",
            }}
            id="filter-dropdown-menu"
            options={filterTags}
            value={filterConditions}
            onChange={handleChange}
            renderInput={(params) =>
                <TextField
                    {...params}
                    size="small"
                    variant="outlined"
                    label="Filter by"
                />
            }
        />
    )
}