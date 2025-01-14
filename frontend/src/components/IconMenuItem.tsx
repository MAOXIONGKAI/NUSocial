import {MenuItem, ListItemIcon, ListItemText, Divider} from '@mui/material'
import IconMenuItemLayout from "../types/IconMenuItemLayout.tsx";
import {Dispatch, SetStateAction} from "react";
import PostQuery from "../types/PostQuery.ts";

type Props = {
    layout: IconMenuItemLayout;
    setSelectedOption: Dispatch<SetStateAction<string>>
    setPostQuery: (input: SetStateAction<PostQuery>) => void;
}

export default function IconMenuItem({layout, setSelectedOption, setPostQuery}: Props) {

    function modifySelectedValue(setSelectedOption: Dispatch<SetStateAction<string>>,
                                 value: string) {
        if (setSelectedOption === undefined) {
            return
        }
        setSelectedOption(value)
    }

    function updateQuery(setPostQuery: (input: SetStateAction<PostQuery>) => void,
                         value: string) {
        if (setPostQuery === undefined) {
            return
        }
        setPostQuery(preQuery => {
            return {
                ...preQuery,
                search_keyword: "",
                category: value
            }
        })
    }

    function handleClick(value: string) {
        modifySelectedValue(setSelectedOption, value)
        updateQuery(setPostQuery, value)
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