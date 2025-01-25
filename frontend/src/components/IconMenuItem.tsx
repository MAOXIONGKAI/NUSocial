import {MenuItem, ListItemIcon, ListItemText, Divider} from '@mui/material'
import IconMenuItemLayout from "../types/IconMenuItemLayout.tsx";

type Props = {
    layout: IconMenuItemLayout;
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

export default function IconMenuItem({layout, selectedOption, setSelectedOption}: Props) {

    function handleClick(value: string) {
        setSelectedOption(value);
    }

    const {text, Icon} = layout
    const isSelected = text === selectedOption

    return (
        <>
            <MenuItem
                selected={isSelected}
                onClick={() => handleClick(text)}
            >
                <ListItemIcon>
                    <Icon/>
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
            </MenuItem>
            <Divider style={{margin: 0}}/>
        </>
    )
}