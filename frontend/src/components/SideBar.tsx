import Box from '@mui/material/Box'
import IconMenu from "./IconMenu.tsx";
import {sectionMenuOptions, categoryMenuOptions} from "../data/MenuData.tsx";

type Props = {
    setSectionCondition: (condition: string) => void;
    setCategoryCondition: (condition: string) => void;
}

export default function SideBar({setSectionCondition, setCategoryCondition}: Props) {
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
            />
            <IconMenu
                header="Category"
                layoutList={categoryMenuOptions}
                setSelectedOption={setCategoryCondition}
            />
        </Box>
    )
}