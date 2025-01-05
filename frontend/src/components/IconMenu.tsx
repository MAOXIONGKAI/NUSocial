import {MenuList, ListSubheader} from '@mui/material'
import IconMenuItemLayout from "../types/IconMenuItemLayout.tsx";
import IconMenuItem from "./IconMenuItem.tsx";

type Props = {
    header?: string
    setCategoryCondition: (categoryCondition: string) => void,
    layoutList: IconMenuItemLayout[]
}

export default function IconMenu({
                                     header,
                                     setCategoryCondition,
                                     layoutList,
                                 }: Props) {
    return (
        <MenuList>
            { header && <ListSubheader style={{textAlign: "center"}}>{header}</ListSubheader>}
            {layoutList.map(layout => (
                <IconMenuItem
                    key={layout.text}
                    layout={layout}
                    setCategoryOption={setCategoryCondition}
                />
            ))}
        </MenuList>
    )
}