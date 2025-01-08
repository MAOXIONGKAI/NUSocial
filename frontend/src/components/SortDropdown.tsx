import {useState} from "react";
import {IconButton, ListItemIcon, ListSubheader, Menu, MenuItem} from '@mui/material';
import SortIcon from '@mui/icons-material/SwapVert';
import {sortMenuOptions} from "../data/MenuData";

type Props = {
    sortCondition: string;
    setSortCondition: (sortCondition: string) => void;
}

export default function SortDropdown({
                                         sortCondition,
                                         setSortCondition,
                                     }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleSelect(option: string) {
        setSortCondition(option);
        handleClose();
    }

    return (
        <>
            <IconButton
                disableFocusRipple={true}
                onClick={handleClick}
            >
                <SortIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <ListSubheader>Sort by</ListSubheader>
                {sortMenuOptions.map(option => {
                        const {text, Icon} = option
                        return <MenuItem
                            key={text}
                            value={text}
                            selected={text === sortCondition}
                            onClick={() => handleSelect(text)}
                        >
                            <ListItemIcon>
                                <Icon/>
                            </ListItemIcon>
                            {text}
                        </MenuItem>
                    }
                )}
            </Menu>
        </>
    )
}