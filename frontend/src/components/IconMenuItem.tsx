import {MenuItem, ListItemIcon, ListItemText, Divider} from '@mui/material'
import IconMenuItemLayout from "../types/IconMenuItemLayout.tsx";

type Props = {
    layout: IconMenuItemLayout
    setCategoryOption: (category: string) => void;
}

export default function IconMenuItem({layout, setCategoryOption}: Props) {

    function handleClick(value: string) {
        setCategoryOption(value);
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