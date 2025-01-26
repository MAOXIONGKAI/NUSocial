import {useState} from 'react';
import {Autocomplete, TextField, IconButton, Menu} from '@mui/material';
import {SyntheticEvent} from "react";
import {filterTags} from "../../data/MenuData.tsx";
import FilterIcon from '@mui/icons-material/FilterAlt';

type Props = {
    filterConditions: string[];
    setFilterConditions: (filterConditions: string[]) => void;
}

export default function FilterDropdown({
                                           filterConditions,
                                           setFilterConditions,
                                       }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)

    function handleOpen(e: React.MouseEvent<HTMLElement>) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleChange(_: SyntheticEvent<Element, Event>, newValue: string[]) {
        setFilterConditions(newValue);
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <FilterIcon/>
            </IconButton>
            <Menu
                open={open}
                onClose={handleClose}
                sx={{width: "100%"}}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Autocomplete
                    multiple
                    freeSolo={false}
                    disableCloseOnSelect
                    sx={{width: "40vw"}}
                    id="filter-dropdown-menu"
                    options={filterTags}
                    value={filterConditions}
                    onChange={handleChange}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            size="small"
                            sx={{width: "100%"}}
                            variant="outlined"
                            label="Filter by"
                        />
                    }
                />
            </Menu>
        </>
    )
}