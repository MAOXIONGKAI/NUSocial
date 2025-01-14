import {MenuList, ListSubheader} from '@mui/material'
import IconMenuItemLayout from "../types/IconMenuItemLayout.tsx";
import IconMenuItem from "./IconMenuItem.tsx";
import {SetStateAction} from "react";
import PostQuery from "../types/PostQuery.ts";

type Props = {
    header?: string;
    setSelectedOption: (option: string) => void;
    setPostQuery: (input: SetStateAction<PostQuery>) => void;
    layoutList: IconMenuItemLayout[];
}

export default function IconMenu({
                                     header,
                                     setSelectedOption,
                                     setPostQuery,
                                     layoutList,
                                 }: Props) {
    return (
        <MenuList>
            { header && <ListSubheader style={{textAlign: "center"}}>{header}</ListSubheader>}
            {layoutList.map(layout => (
                <IconMenuItem
                    key={layout.text}
                    layout={layout}
                    setSelectedOption={setSelectedOption}
                    setPostQuery={setPostQuery}
                />
            ))}
        </MenuList>
    )
}