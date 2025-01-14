import Box from '@mui/material/Box'
import IconMenu from "./IconMenu.tsx";
import {sectionMenuOptions, categoryMenuOptions} from "../data/MenuData.tsx";
import {SetStateAction} from "react";
import PostQuery from "../types/PostQuery.ts";

type Props = {
    setSectionCondition: (condition: string) => void;
    setCategoryCondition: (condition: string) => void;
    setPostQuery: (input: SetStateAction<PostQuery>) => void;
}

export default function SideBar({
                                    setSectionCondition,
                                    setCategoryCondition,
                                    setPostQuery
                                }: Props) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{
                height: "calc(100vh - 68px)",
                border: 'LightGray solid 1px'
            }}
        >
            <IconMenu
                layoutList={sectionMenuOptions}
                setSelectedOption={setSectionCondition}
                setPostQuery={setPostQuery}
            />
            <IconMenu
                header="Category"
                layoutList={categoryMenuOptions}
                setSelectedOption={setCategoryCondition}
                setPostQuery={setPostQuery}
            />
        </Box>
    )
}