import {SvgIconTypeMap} from '@mui/material'
import {OverridableComponent} from '@mui/material/OverridableComponent';

type IconMenuItemLayout = {
    text: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export default IconMenuItemLayout;