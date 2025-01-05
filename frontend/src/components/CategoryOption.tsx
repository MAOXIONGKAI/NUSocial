import {MenuItem, ListItemIcon, ListItemText, Divider, SvgIconTypeMap} from '@mui/material'
import {OverridableComponent} from '@mui/material/OverridableComponent';

type Props = {
    text: string;
    setCategoryOption: (category: string) => void;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export default function CategoryOption({text, setCategoryOption, Icon}: Props) {

    function handleClick(value: string) {
        setCategoryOption(value);
    }

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