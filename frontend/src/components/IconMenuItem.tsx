import {MenuItem, ListItemIcon, ListItemText, Divider} from '@mui/material'
import IconMenuItemLayout from "../types/IconMenuItemLayout.tsx";

type Props = {
    layout: IconMenuItemLayout;
    setSelectedOption: (option: string) => void;
}

export default function IconMenuItem({layout, setSelectedOption}: Props) {

    function handleClick(value: string) {
        setSelectedOption(value);
    }

    const {text, Icon} = layout
    return (
        <>
            <MenuItem onClick={() => handleClick(text)}>
                <ListItemIcon>
                    <Icon/>
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
            </MenuItem>
            <Divider style={{margin: 0}}/>
        </>
    )
}